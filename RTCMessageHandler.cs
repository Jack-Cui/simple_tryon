using System;
using System.Collections.Generic;
using System.Text;
using Google.Protobuf;
using XEngine;
using bytertc;
using UnityEngine;

public class RTCMessageHandler
{
    private const string CMD_HEARTBEAT = "stay_room";
    private const string CMD_HEARTBEAT_ACK = "stay_room_ack";
    private long mLastHeartBeatDelay = 0;
    private IRTCVideoRoom mRTCVideoRoom;
    //it saves the message body by eClientPID hash id
    private static Dictionary<int, IMessage> mMessageIdDict;
    private Dictionary<int, Queue<Action<IMessage>>> mMessageCallbackDict;

    public Action<float> onHeartBeat;
    public event Action<int,IMessage> onProtoMessageReceived;
    public event Action<oLatencyPush> onLatencyReceived;
    public event Action<oChangeGarmentPush> onChangeGarmentReceived;

    public RTCMessageHandler(){}

    public void Initialize(IRTCVideoRoom rtcVideoRoom)
    {
        mRTCVideoRoom = rtcVideoRoom;
        mMessageCallbackDict = new Dictionary<int, Queue<Action<IMessage>>>();
        mMessageIdDict = new Dictionary<int, IMessage>
            {
                { eClientPID.ChangeRtcStateReq.GetHashCode(), new oChangeRtcStateReq() },
                { eClientPID.PlayAnimationReq.GetHashCode(), new oPlayAnimatonReq() },
                { eClientPID.TouchScreenReq.GetHashCode(), new oTouchScreenReq() },
                { eClientPID.ChangeGarmentReq.GetHashCode(), new oChangeGarmentReq() },
                { eClientPID.ChangeGarmentSizeReq.GetHashCode(), new oChangeGarmentSizeReq() },
                { eClientPID.QueryCurrencyReq.GetHashCode(), new oQueryCurrencyReq() },
                { eClientPID.ChangeMapReq.GetHashCode(), new oChangeMapReq() },
                {eServerPID.PlayAnimationPush.GetHashCode(), new oPlayAnimationPush()},
                {eServerPID.ChangeGarmentPush.GetHashCode(), new oChangeGarmentPush()},
                {eServerPID.LatencyPush.GetHashCode(), new oLatencyPush()}
            };

        mRTCVideoRoom.OnUserMessageReceivedEvent += OnUserMessageReceived;
    }

    public void Release()
    {
        if(mMessageCallbackDict != null)
        {
            mMessageCallbackDict.Clear();
        }
        if(mMessageIdDict != null)
        {
            mMessageIdDict.Clear();
        }
        mMessageCallbackDict = null;
        mMessageIdDict = null;
        mRTCVideoRoom.OnUserMessageReceivedEvent -= OnUserMessageReceived;
        mRTCVideoRoom = null;
    }

    #region proto message received

    public void OnUserMessageReceived(string roomID, string userID, string message)
    {
        //Log.Api.Debug("[RTCMessageHandler:OnUserMessageReceived] roomID:" + roomID + "\tuserID:" + userID + "\tmessage:" + message);
        //Fixed userID 8888 that comes from server
        if (userID != "8888" || string.IsNullOrEmpty(message))
        {
            Log.Api.Error("[RTCMessageHandler:OnUserMessageReceived] invalid userID or empty message");
            return;
        }

        string[] cmds = message.Split('&');
        if (cmds.Length < 2 || cmds[0].Length < 3)
        {
            Log.Api.Error("[RTCMessageHandler:OnUserMessageReceived] invalid message");
            return;
        }
        string msgHeader = cmds[0].Substring(4);
        if(msgHeader == "proto")
        {
            OnProtoMessageReceived(cmds);
        }
        else if(msgHeader == CMD_HEARTBEAT_ACK)
        {
            Log.Api.Debug($"[RTCMessageHandler:OnUserMessageReceived] stay_room_ack message = {message}");
            OnHeartBeatMessageReceived(cmds);
        }
    }

    private void OnProtoMessageReceived(string[] cmds)
    {
        if (cmds.Length < 2 || cmds[1].Length < 3 || cmds[2].Length < 3)
        {
            Log.Api.Error("[RTCMessageHandler:OnUserMessageReceived] invalid message");
            return;
        }

        if (!int.TryParse(cmds[1].Substring(3), out int messageHashId))
        {
            Log.Api.Error("[RTCMessageHandler:OnUserMessageReceived] try to parse message id failed");
            return;
        }
        string messageBodyHex = cmds[2].Substring(4);
        byte[] messageBodyBytes = HexStringToByteArray(messageBodyHex);

        if (!mMessageIdDict.ContainsKey(messageHashId))
        {
            //Log.Api.Error($"[RTCMessageHandler:OnUserMessageReceived] message id: {messageHashId} not found");//非严重bug，不参与打印
            return;
        }

        try
        {
            IMessage messageBody = (IMessage)Activator.CreateInstance(mMessageIdDict[messageHashId].GetType());
            messageBody.MergeFrom(messageBodyBytes);
            if (mMessageCallbackDict.ContainsKey(messageHashId))
            {
                if (mMessageCallbackDict[messageHashId].Count > 0)
                {
                    mMessageCallbackDict[messageHashId].Dequeue()?.Invoke(messageBody);
                }
            }
            DispatchReceivedMessage(messageHashId,messageBody);
        }
        catch (Exception e)
        {
            Log.Api.Error($"[RTCMessageHandler:OnUserMessageReceived] message id: {messageHashId} merge failed , exception: {e.Message}");
            return;
        }
    }

    private void OnHeartBeatMessageReceived(string[] cmds)
    {
        //if(cmds.Length < 2)
        //{
        //    Log.Api.Error("[RTCMessageHandler:OnHeartBeatMessageReceived] invalid message");
        //    return;
        //}
        if (!long.TryParse(cmds[1].Substring(5), out long timestamp))
        {
            Log.Api.Error("[RTCMessageHandler:OnHeartBeatMessageReceived] try to parse timestamp failed");
            return;
        }

        mLastHeartBeatDelay = DateTimeOffset.Now.ToUnixTimeMilliseconds() - timestamp;
        //Log.Api.Debug($"[RTCMessageHandler:OnHeartBeatMessageReceived] mLastHeartBeatDelay = {mLastHeartBeatDelay}");
        onHeartBeat?.Invoke(mLastHeartBeatDelay);

        sRtcDelay = cmds[2].Substring(10);

    }
    string sRtcDelay;
    public string RtcDelay => sRtcDelay;
       

    private void DispatchReceivedMessage(int messageHashId, IMessage messageBody)
    {
        // int hashCode = eServerPID.LatencyPush.GetHashCode();
        // switch(messageHashId)
        // {
        //     case hashCode:
                
        //         onLatencyReceived?.Invoke(messageBody);
        //         break;
        // }
        if(messageHashId == eServerPID.LatencyPush.GetHashCode())
        {
            onLatencyReceived?.Invoke(messageBody as oLatencyPush);
        }
        else if(messageHashId == eServerPID.ChangeGarmentPush.GetHashCode())
        {
            onChangeGarmentReceived?.Invoke(messageBody as oChangeGarmentPush);
        }
    }
    #endregion

    #region Send message

    private static string ByteArrayToHexString(byte[] bytes)
    {
        StringBuilder hex = new StringBuilder(bytes.Length * 2);
        foreach (byte b in bytes)
        {
            hex.AppendFormat("{0:x2}", b);
        }
        return hex.ToString();
    }

    private static byte[] HexStringToByteArray(string hex)
    {
        // 如果长度为单数，在前面补0
        // if (hex.Length % 2 == 1)
        // {
        //     hex = "0" + hex;
        // }

        int numberChars = hex.Length;
        byte[] bytes = new byte[numberChars / 2];
        for (int i = 0; i < numberChars; i += 2)
        {
            bytes[i / 2] = Convert.ToByte(hex.Substring(i, 2), 16);
        }
        return bytes;
    }

    

    public void SendMessage<PB>(in eClientPID id, in PB body, Action<IMessage> callback = null) where PB : IMessage
    {
        //check mRTCVideoRoom
        if (mRTCVideoRoom == null)
        {
            Log.Api.Error("[RTCMessageHandler:SendMessage] mRTCVideoRoom is null");
            return;
        }

        mRTCVideoRoom.SendUserMessage("8888", "cmd=proto&id=" + id.GetHashCode() + "&hex=" + ByteArrayToHexString(body.ToByteArray()));
        if (callback != null)
        {
            if (!mMessageCallbackDict.ContainsKey(id.GetHashCode()))
            {
                mMessageCallbackDict[id.GetHashCode()] = new Queue<Action<IMessage>>();
            }
            mMessageCallbackDict[id.GetHashCode()].Enqueue(callback);
        }
    }

    public void SendRoomMessage(string msg)
    {
        if (mRTCVideoRoom == null)//todo  登台时广播音乐url到所有房间内的用户
        {
            Log.Api.Error("[RTCMessageHandler:SendMessage] mRTCVideoRoom is null");
            return;
        }

        mRTCVideoRoom.SendRoomMessage(msg);
    }

    public void SendHeartBeat(int stageIndex,bool isAudioOn = false,Nullable<Vector2Int> videoFrameSize = null)
    {
        //Log.Api.Debug($"[RTCMessageHandler:SendHeartBeat] stageIndex = {stageIndex}, isAudioOn = {isAudioOn}");
        if(mRTCVideoRoom == null)
        {
            //Log.Api.Error("[RTCMessageHandler:SendHeartBeat] mRTCVideoRoom is null");
            return;
        }
        string heartBeatCmd = $"cmd={CMD_HEARTBEAT}&msec={DateTimeOffset.Now.ToUnixTimeMilliseconds()}&delay={mLastHeartBeatDelay}&spos={stageIndex}&ad={isAudioOn}";
        if(videoFrameSize.HasValue)
        {
            heartBeatCmd += $"&w={videoFrameSize.Value.x}&h={videoFrameSize.Value.y}";
        }
        mRTCVideoRoom.SendUserMessage("8888", heartBeatCmd);
    }

    public void SendEnterRoom()
    {
        Log.Api.Debug($"[RTCMessageHandler:SendEnterRoom] start ...");
        if(mRTCVideoRoom == null)
        {
            Log.Api.Error("[RTCMessageHandler:SendEnterRoom] mRTCVideoRoom is null");
            return;
        }
        mRTCVideoRoom.SendUserMessage("8888", $"cmd=enter_room&msec={DateTimeOffset.Now.ToUnixTimeMilliseconds()}");
    }

    public void SendLeaveRoom()
    {
        Log.Api.Debug($"[RTCMessageHandler:SendLeaveRoom] start ...");
        if(mRTCVideoRoom == null)
        {
            Log.Api.Error("[RTCMessageHandler:SendLeaveRoom] mRTCVideoRoom is null");
            return;
        }
        mRTCVideoRoom.SendUserMessage("8888", $"cmd=leave_room&msec={DateTimeOffset.Now.ToUnixTimeMilliseconds()}");
    }

    public void SendEnterStage(ulong stageIndex)
    {
        Log.Api.Debug($"[RTCMessageHandler:SendEnterStage] start ...");
        if(mRTCVideoRoom == null)
        {
            Log.Api.Error("[RTCMessageHandler:SendEnterStage] mRTCVideoRoom is null");
            return;
        }
        mRTCVideoRoom.SendUserMessage("8888", $"cmd=enter_stage&msec={DateTimeOffset.Now.ToUnixTimeMilliseconds()}&pos={stageIndex}");
    }

    public void SendLeaveStage(ulong stageIndex)
    {
        Log.Api.Debug($"[RTCMessageHandler:SendLeaveStage] start ...");
        if(mRTCVideoRoom == null)
        {
            Log.Api.Error("[RTCMessageHandler:SendLeaveStage] mRTCVideoRoom is null");
            return;
        }
        mRTCVideoRoom.SendUserMessage("8888", $"cmd=leave_stage&msec={DateTimeOffset.Now.ToUnixTimeMilliseconds()}&pos={stageIndex}");
    }

    const string CMD_RTCTIME = "recv_frame";
    public void SendRTCTimeMesure(ulong uscTime1, ulong uscTime2)
    {
        if (mRTCVideoRoom == null)
        {
            return;
        }
        string rtcTime = $"cmd={CMD_RTCTIME}&seims={uscTime1}&smd={uscTime2}";
        mRTCVideoRoom.SendUserMessage("8888", rtcTime);
    }
    #endregion
}
