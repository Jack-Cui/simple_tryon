/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

/**
 * eError enum.
 * @exports eError
 * @enum {number}
 * @property {number} UNKNOWN=0 UNKNOWN value
 * @property {number} SUCCESS=1 SUCCESS value
 * @property {number} FAILD=2 FAILD value
 * @property {number} ERROR_REQ_PARAM=41 ERROR_REQ_PARAM value
 * @property {number} ERROR_OTHER_ROOM_OPEN=42 ERROR_OTHER_ROOM_OPEN value
 * @property {number} ERROR_CREATE_ROOM_FAIL=43 ERROR_CREATE_ROOM_FAIL value
 * @property {number} ERROR_ENTER_ROOM_FAIL=44 ERROR_ENTER_ROOM_FAIL value
 * @property {number} EMPTY_INS_TOKEN=51 EMPTY_INS_TOKEN value
 * @property {number} UNSET_INS_TOKEN=52 UNSET_INS_TOKEN value
 * @property {number} ERROR_INS_TOKEN=53 ERROR_INS_TOKEN value
 * @property {number} ERROR_APP_SERVER_CONNECT_FAIL=61 ERROR_APP_SERVER_CONNECT_FAIL value
 * @property {number} ERROR_APP_SERVER_RET_NOT_200=62 ERROR_APP_SERVER_RET_NOT_200 value
 * @property {number} ERROR_APP_SERVER_RET_NOT_JSON=63 ERROR_APP_SERVER_RET_NOT_JSON value
 * @property {number} ERROR_APP_SERVER_RET_AUTH_FAIL=64 ERROR_APP_SERVER_RET_AUTH_FAIL value
 * @property {number} ERROR_APP_SERVER_RET_CODE_FAIL=65 ERROR_APP_SERVER_RET_CODE_FAIL value
 * @property {number} ERROR_NO_ROOM=71 ERROR_NO_ROOM value
 * @property {number} ERROR_NOT_IN_ROOM=72 ERROR_NOT_IN_ROOM value
 * @property {number} ERROR_ALREADY_IN_STAGE=73 ERROR_ALREADY_IN_STAGE value
 * @property {number} ERROR_ALREADY_IN_QUEUE=74 ERROR_ALREADY_IN_QUEUE value
 * @property {number} ERROR_ENTER_STAGE_FAIL=75 ERROR_ENTER_STAGE_FAIL value
 * @property {number} ERROR_ENTER_STAGE_TIMEOUT=76 ERROR_ENTER_STAGE_TIMEOUT value
 * @property {number} ERROR_NOT_IN_STAGE=77 ERROR_NOT_IN_STAGE value
 * @property {number} ERROR_INVITER_NOT_IN_UE=80 ERROR_INVITER_NOT_IN_UE value
 * @property {number} ERROR_INVITEE_NOT_IN_STAGE=81 ERROR_INVITEE_NOT_IN_STAGE value
 * @property {number} ERROR_INVITE_CONTEXT_NOT_EXIST=82 ERROR_INVITE_CONTEXT_NOT_EXIST value
 * @property {number} ERROR_INVITEE_NOT_YOU=83 ERROR_INVITEE_NOT_YOU value
 */
$root.eError = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "UNKNOWN"] = 0;
    values[valuesById[1] = "SUCCESS"] = 1;
    values[valuesById[2] = "FAILD"] = 2;
    values[valuesById[41] = "ERROR_REQ_PARAM"] = 41;
    values[valuesById[42] = "ERROR_OTHER_ROOM_OPEN"] = 42;
    values[valuesById[43] = "ERROR_CREATE_ROOM_FAIL"] = 43;
    values[valuesById[44] = "ERROR_ENTER_ROOM_FAIL"] = 44;
    values[valuesById[51] = "EMPTY_INS_TOKEN"] = 51;
    values[valuesById[52] = "UNSET_INS_TOKEN"] = 52;
    values[valuesById[53] = "ERROR_INS_TOKEN"] = 53;
    values[valuesById[61] = "ERROR_APP_SERVER_CONNECT_FAIL"] = 61;
    values[valuesById[62] = "ERROR_APP_SERVER_RET_NOT_200"] = 62;
    values[valuesById[63] = "ERROR_APP_SERVER_RET_NOT_JSON"] = 63;
    values[valuesById[64] = "ERROR_APP_SERVER_RET_AUTH_FAIL"] = 64;
    values[valuesById[65] = "ERROR_APP_SERVER_RET_CODE_FAIL"] = 65;
    values[valuesById[71] = "ERROR_NO_ROOM"] = 71;
    values[valuesById[72] = "ERROR_NOT_IN_ROOM"] = 72;
    values[valuesById[73] = "ERROR_ALREADY_IN_STAGE"] = 73;
    values[valuesById[74] = "ERROR_ALREADY_IN_QUEUE"] = 74;
    values[valuesById[75] = "ERROR_ENTER_STAGE_FAIL"] = 75;
    values[valuesById[76] = "ERROR_ENTER_STAGE_TIMEOUT"] = 76;
    values[valuesById[77] = "ERROR_NOT_IN_STAGE"] = 77;
    values[valuesById[80] = "ERROR_INVITER_NOT_IN_UE"] = 80;
    values[valuesById[81] = "ERROR_INVITEE_NOT_IN_STAGE"] = 81;
    values[valuesById[82] = "ERROR_INVITE_CONTEXT_NOT_EXIST"] = 82;
    values[valuesById[83] = "ERROR_INVITEE_NOT_YOU"] = 83;
    return values;
})();

/**
 * eClientPID enum.
 * @exports eClientPID
 * @enum {number}
 * @property {number} NOT_USE_CID=0 NOT_USE_CID value
 * @property {number} ClientHeartBeat=1 ClientHeartBeat value
 * @property {number} LoginReq=101 LoginReq value
 * @property {number} EnterRoomReq=201 EnterRoomReq value
 * @property {number} LeaveRoomReq=203 LeaveRoomReq value
 * @property {number} DissolveRoomReq=301 DissolveRoomReq value
 * @property {number} QuitRoomReq=302 QuitRoomReq value
 * @property {number} KickUserOutRoom=303 KickUserOutRoom value
 * @property {number} ChangeRoomNameReq=311 ChangeRoomNameReq value
 * @property {number} MuteUserReq=321 MuteUserReq value
 * @property {number} RoomSetMaxStageCountReq=331 RoomSetMaxStageCountReq value
 * @property {number} ClientLogReq=500 ClientLogReq value
 * @property {number} EnterStageReq=501 EnterStageReq value
 * @property {number} LeaveStageReq=503 LeaveStageReq value
 * @property {number} LeaveQueueReq=506 LeaveQueueReq value
 * @property {number} LeaveUeReq=509 LeaveUeReq value
 * @property {number} ReEnterStageReq=510 ReEnterStageReq value
 * @property {number} UpdateEnterStageContextReq=511 UpdateEnterStageContextReq value
 * @property {number} MultiActionReq=512 MultiActionReq value
 * @property {number} MultiActionReply=516 MultiActionReply value
 * @property {number} PlayAnimationReq=1001 PlayAnimationReq value
 * @property {number} ChangeGarmentReq=1002 ChangeGarmentReq value
 * @property {number} TouchScreenReq=1003 TouchScreenReq value
 * @property {number} ChangeGarmentSizeReq=1004 ChangeGarmentSizeReq value
 * @property {number} QueryCurrencyReq=1005 QueryCurrencyReq value
 * @property {number} ChangeRtcStateReq=1006 ChangeRtcStateReq value
 * @property {number} LatencyReq=1007 LatencyReq value
 * @property {number} ChangeMapReq=1008 ChangeMapReq value
 * @property {number} HeatMapReq=1009 HeatMapReq value
 * @property {number} HeartBeatReq=1111 HeartBeatReq value
 */
$root.eClientPID = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "NOT_USE_CID"] = 0;
    values[valuesById[1] = "ClientHeartBeat"] = 1;
    values[valuesById[101] = "LoginReq"] = 101;
    values[valuesById[201] = "EnterRoomReq"] = 201;
    values[valuesById[203] = "LeaveRoomReq"] = 203;
    values[valuesById[301] = "DissolveRoomReq"] = 301;
    values[valuesById[302] = "QuitRoomReq"] = 302;
    values[valuesById[303] = "KickUserOutRoom"] = 303;
    values[valuesById[311] = "ChangeRoomNameReq"] = 311;
    values[valuesById[321] = "MuteUserReq"] = 321;
    values[valuesById[331] = "RoomSetMaxStageCountReq"] = 331;
    values[valuesById[500] = "ClientLogReq"] = 500;
    values[valuesById[501] = "EnterStageReq"] = 501;
    values[valuesById[503] = "LeaveStageReq"] = 503;
    values[valuesById[506] = "LeaveQueueReq"] = 506;
    values[valuesById[509] = "LeaveUeReq"] = 509;
    values[valuesById[510] = "ReEnterStageReq"] = 510;
    values[valuesById[511] = "UpdateEnterStageContextReq"] = 511;
    values[valuesById[512] = "MultiActionReq"] = 512;
    values[valuesById[516] = "MultiActionReply"] = 516;
    values[valuesById[1001] = "PlayAnimationReq"] = 1001;
    values[valuesById[1002] = "ChangeGarmentReq"] = 1002;
    values[valuesById[1003] = "TouchScreenReq"] = 1003;
    values[valuesById[1004] = "ChangeGarmentSizeReq"] = 1004;
    values[valuesById[1005] = "QueryCurrencyReq"] = 1005;
    values[valuesById[1006] = "ChangeRtcStateReq"] = 1006;
    values[valuesById[1007] = "LatencyReq"] = 1007;
    values[valuesById[1008] = "ChangeMapReq"] = 1008;
    values[valuesById[1009] = "HeatMapReq"] = 1009;
    values[valuesById[1111] = "HeartBeatReq"] = 1111;
    return values;
})();

/**
 * eServerPID enum.
 * @exports eServerPID
 * @enum {number}
 * @property {number} NOT_USE_SID=0 NOT_USE_SID value
 * @property {number} ServerHeartBeat=1001 ServerHeartBeat value
 * @property {number} LoginAsw=1101 LoginAsw value
 * @property {number} LoginOtherPush=1105 LoginOtherPush value
 * @property {number} SceneChangePush=1109 SceneChangePush value
 * @property {number} HeartBeatAsw=1111 HeartBeatAsw value
 * @property {number} EnterRoomAsw=1201 EnterRoomAsw value
 * @property {number} EnterRoomPush=1202 EnterRoomPush value
 * @property {number} LeaveRoomAsw=1203 LeaveRoomAsw value
 * @property {number} LeaveRoomPush=1204 LeaveRoomPush value
 * @property {number} DissolveRoomAsw=1205 DissolveRoomAsw value
 * @property {number} DissolveRoomPush=1206 DissolveRoomPush value
 * @property {number} QuitRoomAsw=1207 QuitRoomAsw value
 * @property {number} QuitRoomPush=1208 QuitRoomPush value
 * @property {number} KickUserOutRoomPush=1209 KickUserOutRoomPush value
 * @property {number} KickUserOutRoomAsw=1303 KickUserOutRoomAsw value
 * @property {number} ChangeRoomNameAsw=1311 ChangeRoomNameAsw value
 * @property {number} ChangeRoomNamePush=1312 ChangeRoomNamePush value
 * @property {number} MuteUserAsw=1321 MuteUserAsw value
 * @property {number} MuteUserPush=1322 MuteUserPush value
 * @property {number} RoomSetMaxStageCountAsw=1331 RoomSetMaxStageCountAsw value
 * @property {number} RoomSetMaxStageCountPush=1332 RoomSetMaxStageCountPush value
 * @property {number} EnterStageAsw=1501 EnterStageAsw value
 * @property {number} EnterStagePush=1502 EnterStagePush value
 * @property {number} LeaveStageAsw=1503 LeaveStageAsw value
 * @property {number} LeaveStagePush=1504 LeaveStagePush value
 * @property {number} StageQueueInfoPush=1505 StageQueueInfoPush value
 * @property {number} LeaveQueueAsw=1506 LeaveQueueAsw value
 * @property {number} KickOutStagePush=1507 KickOutStagePush value
 * @property {number} LeaveUeAsw=1509 LeaveUeAsw value
 * @property {number} UpdateEnterStageContextAsw=1511 UpdateEnterStageContextAsw value
 * @property {number} MultiActionAsw=1512 MultiActionAsw value
 * @property {number} MultiActionInvitePush=1515 MultiActionInvitePush value
 * @property {number} MultiActionReplyAsw=1516 MultiActionReplyAsw value
 * @property {number} MultiActionReplyResult=1517 MultiActionReplyResult value
 * @property {number} LeaveUePush=1521 LeaveUePush value
 * @property {number} StageStatusChangePush=1522 StageStatusChangePush value
 * @property {number} PlayAnimationPush=11001 PlayAnimationPush value
 * @property {number} ChangeGarmentPush=11002 ChangeGarmentPush value
 * @property {number} TouchScreenPush=11003 TouchScreenPush value
 * @property {number} QueryCurrencyPush=11004 QueryCurrencyPush value
 * @property {number} ChangeRtcStatePush=11005 ChangeRtcStatePush value
 * @property {number} KickUserOutStagePush=11006 KickUserOutStagePush value
 * @property {number} LatencyPush=11007 LatencyPush value
 * @property {number} ChangeMapPush=11008 ChangeMapPush value
 * @property {number} HeatMapPush=11009 HeatMapPush value
 */
$root.eServerPID = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "NOT_USE_SID"] = 0;
    values[valuesById[1001] = "ServerHeartBeat"] = 1001;
    values[valuesById[1101] = "LoginAsw"] = 1101;
    values[valuesById[1105] = "LoginOtherPush"] = 1105;
    values[valuesById[1109] = "SceneChangePush"] = 1109;
    values[valuesById[1111] = "HeartBeatAsw"] = 1111;
    values[valuesById[1201] = "EnterRoomAsw"] = 1201;
    values[valuesById[1202] = "EnterRoomPush"] = 1202;
    values[valuesById[1203] = "LeaveRoomAsw"] = 1203;
    values[valuesById[1204] = "LeaveRoomPush"] = 1204;
    values[valuesById[1205] = "DissolveRoomAsw"] = 1205;
    values[valuesById[1206] = "DissolveRoomPush"] = 1206;
    values[valuesById[1207] = "QuitRoomAsw"] = 1207;
    values[valuesById[1208] = "QuitRoomPush"] = 1208;
    values[valuesById[1209] = "KickUserOutRoomPush"] = 1209;
    values[valuesById[1303] = "KickUserOutRoomAsw"] = 1303;
    values[valuesById[1311] = "ChangeRoomNameAsw"] = 1311;
    values[valuesById[1312] = "ChangeRoomNamePush"] = 1312;
    values[valuesById[1321] = "MuteUserAsw"] = 1321;
    values[valuesById[1322] = "MuteUserPush"] = 1322;
    values[valuesById[1331] = "RoomSetMaxStageCountAsw"] = 1331;
    values[valuesById[1332] = "RoomSetMaxStageCountPush"] = 1332;
    values[valuesById[1501] = "EnterStageAsw"] = 1501;
    values[valuesById[1502] = "EnterStagePush"] = 1502;
    values[valuesById[1503] = "LeaveStageAsw"] = 1503;
    values[valuesById[1504] = "LeaveStagePush"] = 1504;
    values[valuesById[1505] = "StageQueueInfoPush"] = 1505;
    values[valuesById[1506] = "LeaveQueueAsw"] = 1506;
    values[valuesById[1507] = "KickOutStagePush"] = 1507;
    values[valuesById[1509] = "LeaveUeAsw"] = 1509;
    values[valuesById[1511] = "UpdateEnterStageContextAsw"] = 1511;
    values[valuesById[1512] = "MultiActionAsw"] = 1512;
    values[valuesById[1515] = "MultiActionInvitePush"] = 1515;
    values[valuesById[1516] = "MultiActionReplyAsw"] = 1516;
    values[valuesById[1517] = "MultiActionReplyResult"] = 1517;
    values[valuesById[1521] = "LeaveUePush"] = 1521;
    values[valuesById[1522] = "StageStatusChangePush"] = 1522;
    values[valuesById[11001] = "PlayAnimationPush"] = 11001;
    values[valuesById[11002] = "ChangeGarmentPush"] = 11002;
    values[valuesById[11003] = "TouchScreenPush"] = 11003;
    values[valuesById[11004] = "QueryCurrencyPush"] = 11004;
    values[valuesById[11005] = "ChangeRtcStatePush"] = 11005;
    values[valuesById[11006] = "KickUserOutStagePush"] = 11006;
    values[valuesById[11007] = "LatencyPush"] = 11007;
    values[valuesById[11008] = "ChangeMapPush"] = 11008;
    values[valuesById[11009] = "HeatMapPush"] = 11009;
    return values;
})();

$root.oHeartBeatReq = (function() {

    /**
     * Properties of a oHeartBeatReq.
     * @exports IoHeartBeatReq
     * @interface IoHeartBeatReq
     * @property {number|Long|null} [timestamp] oHeartBeatReq timestamp
     */

    /**
     * Constructs a new oHeartBeatReq.
     * @exports oHeartBeatReq
     * @classdesc Represents a oHeartBeatReq.
     * @implements IoHeartBeatReq
     * @constructor
     * @param {IoHeartBeatReq=} [properties] Properties to set
     */
    function oHeartBeatReq(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * oHeartBeatReq timestamp.
     * @member {number|Long} timestamp
     * @memberof oHeartBeatReq
     * @instance
     */
    oHeartBeatReq.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new oHeartBeatReq instance using the specified properties.
     * @function create
     * @memberof oHeartBeatReq
     * @static
     * @param {IoHeartBeatReq=} [properties] Properties to set
     * @returns {oHeartBeatReq} oHeartBeatReq instance
     */
    oHeartBeatReq.create = function create(properties) {
        return new oHeartBeatReq(properties);
    };

    /**
     * Encodes the specified oHeartBeatReq message. Does not implicitly {@link oHeartBeatReq.verify|verify} messages.
     * @function encode
     * @memberof oHeartBeatReq
     * @static
     * @param {IoHeartBeatReq} message oHeartBeatReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oHeartBeatReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.timestamp);
        return writer;
    };

    /**
     * Encodes the specified oHeartBeatReq message, length delimited. Does not implicitly {@link oHeartBeatReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oHeartBeatReq
     * @static
     * @param {IoHeartBeatReq} message oHeartBeatReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oHeartBeatReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a oHeartBeatReq message from the specified reader or buffer.
     * @function decode
     * @memberof oHeartBeatReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oHeartBeatReq} oHeartBeatReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oHeartBeatReq.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oHeartBeatReq();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.timestamp = reader.int64();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a oHeartBeatReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oHeartBeatReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oHeartBeatReq} oHeartBeatReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oHeartBeatReq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a oHeartBeatReq message.
     * @function verify
     * @memberof oHeartBeatReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    oHeartBeatReq.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                return "timestamp: integer|Long expected";
        return null;
    };

    /**
     * Creates a oHeartBeatReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oHeartBeatReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oHeartBeatReq} oHeartBeatReq
     */
    oHeartBeatReq.fromObject = function fromObject(object) {
        if (object instanceof $root.oHeartBeatReq)
            return object;
        var message = new $root.oHeartBeatReq();
        if (object.timestamp != null)
            if ($util.Long)
                (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
            else if (typeof object.timestamp === "string")
                message.timestamp = parseInt(object.timestamp, 10);
            else if (typeof object.timestamp === "number")
                message.timestamp = object.timestamp;
            else if (typeof object.timestamp === "object")
                message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a oHeartBeatReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oHeartBeatReq
     * @static
     * @param {oHeartBeatReq} message oHeartBeatReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    oHeartBeatReq.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.timestamp = options.longs === String ? "0" : 0;
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            if (typeof message.timestamp === "number")
                object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
            else
                object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
        return object;
    };

    /**
     * Converts this oHeartBeatReq to JSON.
     * @function toJSON
     * @memberof oHeartBeatReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    oHeartBeatReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for oHeartBeatReq
     * @function getTypeUrl
     * @memberof oHeartBeatReq
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    oHeartBeatReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/oHeartBeatReq";
    };

    return oHeartBeatReq;
})();

$root.oHeartBeatAsw = (function() {

    /**
     * Properties of a oHeartBeatAsw.
     * @exports IoHeartBeatAsw
     * @interface IoHeartBeatAsw
     * @property {number|Long|null} [timestamp] oHeartBeatAsw timestamp
     */

    /**
     * Constructs a new oHeartBeatAsw.
     * @exports oHeartBeatAsw
     * @classdesc Represents a oHeartBeatAsw.
     * @implements IoHeartBeatAsw
     * @constructor
     * @param {IoHeartBeatAsw=} [properties] Properties to set
     */
    function oHeartBeatAsw(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * oHeartBeatAsw timestamp.
     * @member {number|Long} timestamp
     * @memberof oHeartBeatAsw
     * @instance
     */
    oHeartBeatAsw.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new oHeartBeatAsw instance using the specified properties.
     * @function create
     * @memberof oHeartBeatAsw
     * @static
     * @param {IoHeartBeatAsw=} [properties] Properties to set
     * @returns {oHeartBeatAsw} oHeartBeatAsw instance
     */
    oHeartBeatAsw.create = function create(properties) {
        return new oHeartBeatAsw(properties);
    };

    /**
     * Encodes the specified oHeartBeatAsw message. Does not implicitly {@link oHeartBeatAsw.verify|verify} messages.
     * @function encode
     * @memberof oHeartBeatAsw
     * @static
     * @param {IoHeartBeatAsw} message oHeartBeatAsw message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oHeartBeatAsw.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.timestamp);
        return writer;
    };

    /**
     * Encodes the specified oHeartBeatAsw message, length delimited. Does not implicitly {@link oHeartBeatAsw.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oHeartBeatAsw
     * @static
     * @param {IoHeartBeatAsw} message oHeartBeatAsw message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oHeartBeatAsw.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a oHeartBeatAsw message from the specified reader or buffer.
     * @function decode
     * @memberof oHeartBeatAsw
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oHeartBeatAsw} oHeartBeatAsw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oHeartBeatAsw.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oHeartBeatAsw();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.timestamp = reader.int64();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a oHeartBeatAsw message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oHeartBeatAsw
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oHeartBeatAsw} oHeartBeatAsw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oHeartBeatAsw.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a oHeartBeatAsw message.
     * @function verify
     * @memberof oHeartBeatAsw
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    oHeartBeatAsw.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                return "timestamp: integer|Long expected";
        return null;
    };

    /**
     * Creates a oHeartBeatAsw message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oHeartBeatAsw
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oHeartBeatAsw} oHeartBeatAsw
     */
    oHeartBeatAsw.fromObject = function fromObject(object) {
        if (object instanceof $root.oHeartBeatAsw)
            return object;
        var message = new $root.oHeartBeatAsw();
        if (object.timestamp != null)
            if ($util.Long)
                (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
            else if (typeof object.timestamp === "string")
                message.timestamp = parseInt(object.timestamp, 10);
            else if (typeof object.timestamp === "number")
                message.timestamp = object.timestamp;
            else if (typeof object.timestamp === "object")
                message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a oHeartBeatAsw message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oHeartBeatAsw
     * @static
     * @param {oHeartBeatAsw} message oHeartBeatAsw
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    oHeartBeatAsw.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.timestamp = options.longs === String ? "0" : 0;
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            if (typeof message.timestamp === "number")
                object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
            else
                object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
        return object;
    };

    /**
     * Converts this oHeartBeatAsw to JSON.
     * @function toJSON
     * @memberof oHeartBeatAsw
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    oHeartBeatAsw.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for oHeartBeatAsw
     * @function getTypeUrl
     * @memberof oHeartBeatAsw
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    oHeartBeatAsw.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/oHeartBeatAsw";
    };

    return oHeartBeatAsw;
})();

$root.oClientLogReq = (function() {

    /**
     * Properties of a oClientLogReq.
     * @exports IoClientLogReq
     * @interface IoClientLogReq
     * @property {string|null} [log] oClientLogReq log
     */

    /**
     * Constructs a new oClientLogReq.
     * @exports oClientLogReq
     * @classdesc Represents a oClientLogReq.
     * @implements IoClientLogReq
     * @constructor
     * @param {IoClientLogReq=} [properties] Properties to set
     */
    function oClientLogReq(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * oClientLogReq log.
     * @member {string} log
     * @memberof oClientLogReq
     * @instance
     */
    oClientLogReq.prototype.log = "";

    /**
     * Creates a new oClientLogReq instance using the specified properties.
     * @function create
     * @memberof oClientLogReq
     * @static
     * @param {IoClientLogReq=} [properties] Properties to set
     * @returns {oClientLogReq} oClientLogReq instance
     */
    oClientLogReq.create = function create(properties) {
        return new oClientLogReq(properties);
    };

    /**
     * Encodes the specified oClientLogReq message. Does not implicitly {@link oClientLogReq.verify|verify} messages.
     * @function encode
     * @memberof oClientLogReq
     * @static
     * @param {IoClientLogReq} message oClientLogReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oClientLogReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.log != null && Object.hasOwnProperty.call(message, "log"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.log);
        return writer;
    };

    /**
     * Encodes the specified oClientLogReq message, length delimited. Does not implicitly {@link oClientLogReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oClientLogReq
     * @static
     * @param {IoClientLogReq} message oClientLogReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oClientLogReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a oClientLogReq message from the specified reader or buffer.
     * @function decode
     * @memberof oClientLogReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oClientLogReq} oClientLogReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oClientLogReq.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oClientLogReq();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.log = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a oClientLogReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oClientLogReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oClientLogReq} oClientLogReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oClientLogReq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a oClientLogReq message.
     * @function verify
     * @memberof oClientLogReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    oClientLogReq.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.log != null && message.hasOwnProperty("log"))
            if (!$util.isString(message.log))
                return "log: string expected";
        return null;
    };

    /**
     * Creates a oClientLogReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oClientLogReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oClientLogReq} oClientLogReq
     */
    oClientLogReq.fromObject = function fromObject(object) {
        if (object instanceof $root.oClientLogReq)
            return object;
        var message = new $root.oClientLogReq();
        if (object.log != null)
            message.log = String(object.log);
        return message;
    };

    /**
     * Creates a plain object from a oClientLogReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oClientLogReq
     * @static
     * @param {oClientLogReq} message oClientLogReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    oClientLogReq.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.log = "";
        if (message.log != null && message.hasOwnProperty("log"))
            object.log = message.log;
        return object;
    };

    /**
     * Converts this oClientLogReq to JSON.
     * @function toJSON
     * @memberof oClientLogReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    oClientLogReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for oClientLogReq
     * @function getTypeUrl
     * @memberof oClientLogReq
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    oClientLogReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/oClientLogReq";
    };

    return oClientLogReq;
})();

$root.oClientHeartBeat = (function() {

    /**
     * Properties of a oClientHeartBeat.
     * @exports IoClientHeartBeat
     * @interface IoClientHeartBeat
     * @property {number|Long|null} [seq] oClientHeartBeat seq
     * @property {number|Long|null} [cTimestamp] oClientHeartBeat cTimestamp
     * @property {number|Long|null} [uid] oClientHeartBeat uid
     * @property {number|Long|null} [room] oClientHeartBeat room
     * @property {number|Long|null} [delay] oClientHeartBeat delay
     */

    /**
     * Constructs a new oClientHeartBeat.
     * @exports oClientHeartBeat
     * @classdesc Represents a oClientHeartBeat.
     * @implements IoClientHeartBeat
     * @constructor
     * @param {IoClientHeartBeat=} [properties] Properties to set
     */
    function oClientHeartBeat(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * oClientHeartBeat seq.
     * @member {number|Long} seq
     * @memberof oClientHeartBeat
     * @instance
     */
    oClientHeartBeat.prototype.seq = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * oClientHeartBeat cTimestamp.
     * @member {number|Long} cTimestamp
     * @memberof oClientHeartBeat
     * @instance
     */
    oClientHeartBeat.prototype.cTimestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * oClientHeartBeat uid.
     * @member {number|Long} uid
     * @memberof oClientHeartBeat
     * @instance
     */
    oClientHeartBeat.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * oClientHeartBeat room.
     * @member {number|Long} room
     * @memberof oClientHeartBeat
     * @instance
     */
    oClientHeartBeat.prototype.room = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * oClientHeartBeat delay.
     * @member {number|Long} delay
     * @memberof oClientHeartBeat
     * @instance
     */
    oClientHeartBeat.prototype.delay = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Creates a new oClientHeartBeat instance using the specified properties.
     * @function create
     * @memberof oClientHeartBeat
     * @static
     * @param {IoClientHeartBeat=} [properties] Properties to set
     * @returns {oClientHeartBeat} oClientHeartBeat instance
     */
    oClientHeartBeat.create = function create(properties) {
        return new oClientHeartBeat(properties);
    };

    /**
     * Encodes the specified oClientHeartBeat message. Does not implicitly {@link oClientHeartBeat.verify|verify} messages.
     * @function encode
     * @memberof oClientHeartBeat
     * @static
     * @param {IoClientHeartBeat} message oClientHeartBeat message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oClientHeartBeat.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.seq != null && Object.hasOwnProperty.call(message, "seq"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.seq);
        if (message.cTimestamp != null && Object.hasOwnProperty.call(message, "cTimestamp"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.cTimestamp);
        if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.uid);
        if (message.room != null && Object.hasOwnProperty.call(message, "room"))
            writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.room);
        if (message.delay != null && Object.hasOwnProperty.call(message, "delay"))
            writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.delay);
        return writer;
    };

    /**
     * Encodes the specified oClientHeartBeat message, length delimited. Does not implicitly {@link oClientHeartBeat.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oClientHeartBeat
     * @static
     * @param {IoClientHeartBeat} message oClientHeartBeat message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oClientHeartBeat.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a oClientHeartBeat message from the specified reader or buffer.
     * @function decode
     * @memberof oClientHeartBeat
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oClientHeartBeat} oClientHeartBeat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oClientHeartBeat.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oClientHeartBeat();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.seq = reader.uint64();
                    break;
                }
            case 2: {
                    message.cTimestamp = reader.uint64();
                    break;
                }
            case 3: {
                    message.uid = reader.uint64();
                    break;
                }
            case 4: {
                    message.room = reader.uint64();
                    break;
                }
            case 5: {
                    message.delay = reader.uint64();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a oClientHeartBeat message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oClientHeartBeat
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oClientHeartBeat} oClientHeartBeat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oClientHeartBeat.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a oClientHeartBeat message.
     * @function verify
     * @memberof oClientHeartBeat
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    oClientHeartBeat.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.seq != null && message.hasOwnProperty("seq"))
            if (!$util.isInteger(message.seq) && !(message.seq && $util.isInteger(message.seq.low) && $util.isInteger(message.seq.high)))
                return "seq: integer|Long expected";
        if (message.cTimestamp != null && message.hasOwnProperty("cTimestamp"))
            if (!$util.isInteger(message.cTimestamp) && !(message.cTimestamp && $util.isInteger(message.cTimestamp.low) && $util.isInteger(message.cTimestamp.high)))
                return "cTimestamp: integer|Long expected";
        if (message.uid != null && message.hasOwnProperty("uid"))
            if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                return "uid: integer|Long expected";
        if (message.room != null && message.hasOwnProperty("room"))
            if (!$util.isInteger(message.room) && !(message.room && $util.isInteger(message.room.low) && $util.isInteger(message.room.high)))
                return "room: integer|Long expected";
        if (message.delay != null && message.hasOwnProperty("delay"))
            if (!$util.isInteger(message.delay) && !(message.delay && $util.isInteger(message.delay.low) && $util.isInteger(message.delay.high)))
                return "delay: integer|Long expected";
        return null;
    };

    /**
     * Creates a oClientHeartBeat message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oClientHeartBeat
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oClientHeartBeat} oClientHeartBeat
     */
    oClientHeartBeat.fromObject = function fromObject(object) {
        if (object instanceof $root.oClientHeartBeat)
            return object;
        var message = new $root.oClientHeartBeat();
        if (object.seq != null)
            if ($util.Long)
                (message.seq = $util.Long.fromValue(object.seq)).unsigned = true;
            else if (typeof object.seq === "string")
                message.seq = parseInt(object.seq, 10);
            else if (typeof object.seq === "number")
                message.seq = object.seq;
            else if (typeof object.seq === "object")
                message.seq = new $util.LongBits(object.seq.low >>> 0, object.seq.high >>> 0).toNumber(true);
        if (object.cTimestamp != null)
            if ($util.Long)
                (message.cTimestamp = $util.Long.fromValue(object.cTimestamp)).unsigned = true;
            else if (typeof object.cTimestamp === "string")
                message.cTimestamp = parseInt(object.cTimestamp, 10);
            else if (typeof object.cTimestamp === "number")
                message.cTimestamp = object.cTimestamp;
            else if (typeof object.cTimestamp === "object")
                message.cTimestamp = new $util.LongBits(object.cTimestamp.low >>> 0, object.cTimestamp.high >>> 0).toNumber(true);
        if (object.uid != null)
            if ($util.Long)
                (message.uid = $util.Long.fromValue(object.uid)).unsigned = true;
            else if (typeof object.uid === "string")
                message.uid = parseInt(object.uid, 10);
            else if (typeof object.uid === "number")
                message.uid = object.uid;
            else if (typeof object.uid === "object")
                message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber(true);
        if (object.room != null)
            if ($util.Long)
                (message.room = $util.Long.fromValue(object.room)).unsigned = true;
            else if (typeof object.room === "string")
                message.room = parseInt(object.room, 10);
            else if (typeof object.room === "number")
                message.room = object.room;
            else if (typeof object.room === "object")
                message.room = new $util.LongBits(object.room.low >>> 0, object.room.high >>> 0).toNumber(true);
        if (object.delay != null)
            if ($util.Long)
                (message.delay = $util.Long.fromValue(object.delay)).unsigned = true;
            else if (typeof object.delay === "string")
                message.delay = parseInt(object.delay, 10);
            else if (typeof object.delay === "number")
                message.delay = object.delay;
            else if (typeof object.delay === "object")
                message.delay = new $util.LongBits(object.delay.low >>> 0, object.delay.high >>> 0).toNumber(true);
        return message;
    };

    /**
     * Creates a plain object from a oClientHeartBeat message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oClientHeartBeat
     * @static
     * @param {oClientHeartBeat} message oClientHeartBeat
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    oClientHeartBeat.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.seq = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.seq = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.cTimestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.cTimestamp = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.uid = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.room = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.room = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.delay = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.delay = options.longs === String ? "0" : 0;
        }
        if (message.seq != null && message.hasOwnProperty("seq"))
            if (typeof message.seq === "number")
                object.seq = options.longs === String ? String(message.seq) : message.seq;
            else
                object.seq = options.longs === String ? $util.Long.prototype.toString.call(message.seq) : options.longs === Number ? new $util.LongBits(message.seq.low >>> 0, message.seq.high >>> 0).toNumber(true) : message.seq;
        if (message.cTimestamp != null && message.hasOwnProperty("cTimestamp"))
            if (typeof message.cTimestamp === "number")
                object.cTimestamp = options.longs === String ? String(message.cTimestamp) : message.cTimestamp;
            else
                object.cTimestamp = options.longs === String ? $util.Long.prototype.toString.call(message.cTimestamp) : options.longs === Number ? new $util.LongBits(message.cTimestamp.low >>> 0, message.cTimestamp.high >>> 0).toNumber(true) : message.cTimestamp;
        if (message.uid != null && message.hasOwnProperty("uid"))
            if (typeof message.uid === "number")
                object.uid = options.longs === String ? String(message.uid) : message.uid;
            else
                object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber(true) : message.uid;
        if (message.room != null && message.hasOwnProperty("room"))
            if (typeof message.room === "number")
                object.room = options.longs === String ? String(message.room) : message.room;
            else
                object.room = options.longs === String ? $util.Long.prototype.toString.call(message.room) : options.longs === Number ? new $util.LongBits(message.room.low >>> 0, message.room.high >>> 0).toNumber(true) : message.room;
        if (message.delay != null && message.hasOwnProperty("delay"))
            if (typeof message.delay === "number")
                object.delay = options.longs === String ? String(message.delay) : message.delay;
            else
                object.delay = options.longs === String ? $util.Long.prototype.toString.call(message.delay) : options.longs === Number ? new $util.LongBits(message.delay.low >>> 0, message.delay.high >>> 0).toNumber(true) : message.delay;
        return object;
    };

    /**
     * Converts this oClientHeartBeat to JSON.
     * @function toJSON
     * @memberof oClientHeartBeat
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    oClientHeartBeat.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for oClientHeartBeat
     * @function getTypeUrl
     * @memberof oClientHeartBeat
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    oClientHeartBeat.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/oClientHeartBeat";
    };

    return oClientHeartBeat;
})();

$root.oCustomInfo = (function() {

    /**
     * Properties of a oCustomInfo.
     * @exports IoCustomInfo
     * @interface IoCustomInfo
     * @property {number|Long|null} [type] oCustomInfo type
     * @property {number|Long|null} [uid] oCustomInfo uid
     * @property {number|Long|null} [room] oCustomInfo room
     * @property {number|Long|null} [stage] oCustomInfo stage
     */

    /**
     * Constructs a new oCustomInfo.
     * @exports oCustomInfo
     * @classdesc Represents a oCustomInfo.
     * @implements IoCustomInfo
     * @constructor
     * @param {IoCustomInfo=} [properties] Properties to set
     */
    function oCustomInfo(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * oCustomInfo type.
     * @member {number|Long} type
     * @memberof oCustomInfo
     * @instance
     */
    oCustomInfo.prototype.type = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * oCustomInfo uid.
     * @member {number|Long} uid
     * @memberof oCustomInfo
     * @instance
     */
    oCustomInfo.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * oCustomInfo room.
     * @member {number|Long} room
     * @memberof oCustomInfo
     * @instance
     */
    oCustomInfo.prototype.room = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * oCustomInfo stage.
     * @member {number|Long} stage
     * @memberof oCustomInfo
     * @instance
     */
    oCustomInfo.prototype.stage = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Creates a new oCustomInfo instance using the specified properties.
     * @function create
     * @memberof oCustomInfo
     * @static
     * @param {IoCustomInfo=} [properties] Properties to set
     * @returns {oCustomInfo} oCustomInfo instance
     */
    oCustomInfo.create = function create(properties) {
        return new oCustomInfo(properties);
    };

    /**
     * Encodes the specified oCustomInfo message. Does not implicitly {@link oCustomInfo.verify|verify} messages.
     * @function encode
     * @memberof oCustomInfo
     * @static
     * @param {IoCustomInfo} message oCustomInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oCustomInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.type);
        if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.uid);
        if (message.room != null && Object.hasOwnProperty.call(message, "room"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.room);
        if (message.stage != null && Object.hasOwnProperty.call(message, "stage"))
            writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.stage);
        return writer;
    };

    /**
     * Encodes the specified oCustomInfo message, length delimited. Does not implicitly {@link oCustomInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oCustomInfo
     * @static
     * @param {IoCustomInfo} message oCustomInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oCustomInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a oCustomInfo message from the specified reader or buffer.
     * @function decode
     * @memberof oCustomInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oCustomInfo} oCustomInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oCustomInfo.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oCustomInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.type = reader.uint64();
                    break;
                }
            case 2: {
                    message.uid = reader.uint64();
                    break;
                }
            case 3: {
                    message.room = reader.uint64();
                    break;
                }
            case 4: {
                    message.stage = reader.uint64();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a oCustomInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oCustomInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oCustomInfo} oCustomInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oCustomInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a oCustomInfo message.
     * @function verify
     * @memberof oCustomInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    oCustomInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.type != null && message.hasOwnProperty("type"))
            if (!$util.isInteger(message.type) && !(message.type && $util.isInteger(message.type.low) && $util.isInteger(message.type.high)))
                return "type: integer|Long expected";
        if (message.uid != null && message.hasOwnProperty("uid"))
            if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                return "uid: integer|Long expected";
        if (message.room != null && message.hasOwnProperty("room"))
            if (!$util.isInteger(message.room) && !(message.room && $util.isInteger(message.room.low) && $util.isInteger(message.room.high)))
                return "room: integer|Long expected";
        if (message.stage != null && message.hasOwnProperty("stage"))
            if (!$util.isInteger(message.stage) && !(message.stage && $util.isInteger(message.stage.low) && $util.isInteger(message.stage.high)))
                return "stage: integer|Long expected";
        return null;
    };

    /**
     * Creates a oCustomInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oCustomInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oCustomInfo} oCustomInfo
     */
    oCustomInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.oCustomInfo)
            return object;
        var message = new $root.oCustomInfo();
        if (object.type != null)
            if ($util.Long)
                (message.type = $util.Long.fromValue(object.type)).unsigned = true;
            else if (typeof object.type === "string")
                message.type = parseInt(object.type, 10);
            else if (typeof object.type === "number")
                message.type = object.type;
            else if (typeof object.type === "object")
                message.type = new $util.LongBits(object.type.low >>> 0, object.type.high >>> 0).toNumber(true);
        if (object.uid != null)
            if ($util.Long)
                (message.uid = $util.Long.fromValue(object.uid)).unsigned = true;
            else if (typeof object.uid === "string")
                message.uid = parseInt(object.uid, 10);
            else if (typeof object.uid === "number")
                message.uid = object.uid;
            else if (typeof object.uid === "object")
                message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber(true);
        if (object.room != null)
            if ($util.Long)
                (message.room = $util.Long.fromValue(object.room)).unsigned = true;
            else if (typeof object.room === "string")
                message.room = parseInt(object.room, 10);
            else if (typeof object.room === "number")
                message.room = object.room;
            else if (typeof object.room === "object")
                message.room = new $util.LongBits(object.room.low >>> 0, object.room.high >>> 0).toNumber(true);
        if (object.stage != null)
            if ($util.Long)
                (message.stage = $util.Long.fromValue(object.stage)).unsigned = true;
            else if (typeof object.stage === "string")
                message.stage = parseInt(object.stage, 10);
            else if (typeof object.stage === "number")
                message.stage = object.stage;
            else if (typeof object.stage === "object")
                message.stage = new $util.LongBits(object.stage.low >>> 0, object.stage.high >>> 0).toNumber(true);
        return message;
    };

    /**
     * Creates a plain object from a oCustomInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oCustomInfo
     * @static
     * @param {oCustomInfo} message oCustomInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    oCustomInfo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.type = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.type = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.uid = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.room = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.room = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.stage = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.stage = options.longs === String ? "0" : 0;
        }
        if (message.type != null && message.hasOwnProperty("type"))
            if (typeof message.type === "number")
                object.type = options.longs === String ? String(message.type) : message.type;
            else
                object.type = options.longs === String ? $util.Long.prototype.toString.call(message.type) : options.longs === Number ? new $util.LongBits(message.type.low >>> 0, message.type.high >>> 0).toNumber(true) : message.type;
        if (message.uid != null && message.hasOwnProperty("uid"))
            if (typeof message.uid === "number")
                object.uid = options.longs === String ? String(message.uid) : message.uid;
            else
                object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber(true) : message.uid;
        if (message.room != null && message.hasOwnProperty("room"))
            if (typeof message.room === "number")
                object.room = options.longs === String ? String(message.room) : message.room;
            else
                object.room = options.longs === String ? $util.Long.prototype.toString.call(message.room) : options.longs === Number ? new $util.LongBits(message.room.low >>> 0, message.room.high >>> 0).toNumber(true) : message.room;
        if (message.stage != null && message.hasOwnProperty("stage"))
            if (typeof message.stage === "number")
                object.stage = options.longs === String ? String(message.stage) : message.stage;
            else
                object.stage = options.longs === String ? $util.Long.prototype.toString.call(message.stage) : options.longs === Number ? new $util.LongBits(message.stage.low >>> 0, message.stage.high >>> 0).toNumber(true) : message.stage;
        return object;
    };

    /**
     * Converts this oCustomInfo to JSON.
     * @function toJSON
     * @memberof oCustomInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    oCustomInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for oCustomInfo
     * @function getTypeUrl
     * @memberof oCustomInfo
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    oCustomInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/oCustomInfo";
    };

    return oCustomInfo;
})();

$root.oServerHeartBeat = (function() {

    /**
     * Properties of a oServerHeartBeat.
     * @exports IoServerHeartBeat
     * @interface IoServerHeartBeat
     * @property {number|Long|null} [seq] oServerHeartBeat seq
     * @property {number|Long|null} [cTimestamp] oServerHeartBeat cTimestamp
     * @property {number|Long|null} [sTimestamp] oServerHeartBeat sTimestamp
     * @property {number|Long|null} [uid] oServerHeartBeat uid
     * @property {number|Long|null} [room] oServerHeartBeat room
     */

    /**
     * Constructs a new oServerHeartBeat.
     * @exports oServerHeartBeat
     * @classdesc Represents a oServerHeartBeat.
     * @implements IoServerHeartBeat
     * @constructor
     * @param {IoServerHeartBeat=} [properties] Properties to set
     */
    function oServerHeartBeat(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * oServerHeartBeat seq.
     * @member {number|Long} seq
     * @memberof oServerHeartBeat
     * @instance
     */
    oServerHeartBeat.prototype.seq = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * oServerHeartBeat cTimestamp.
     * @member {number|Long} cTimestamp
     * @memberof oServerHeartBeat
     * @instance
     */
    oServerHeartBeat.prototype.cTimestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * oServerHeartBeat sTimestamp.
     * @member {number|Long} sTimestamp
     * @memberof oServerHeartBeat
     * @instance
     */
    oServerHeartBeat.prototype.sTimestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * oServerHeartBeat uid.
     * @member {number|Long} uid
     * @memberof oServerHeartBeat
     * @instance
     */
    oServerHeartBeat.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * oServerHeartBeat room.
     * @member {number|Long} room
     * @memberof oServerHeartBeat
     * @instance
     */
    oServerHeartBeat.prototype.room = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Creates a new oServerHeartBeat instance using the specified properties.
     * @function create
     * @memberof oServerHeartBeat
     * @static
     * @param {IoServerHeartBeat=} [properties] Properties to set
     * @returns {oServerHeartBeat} oServerHeartBeat instance
     */
    oServerHeartBeat.create = function create(properties) {
        return new oServerHeartBeat(properties);
    };

    /**
     * Encodes the specified oServerHeartBeat message. Does not implicitly {@link oServerHeartBeat.verify|verify} messages.
     * @function encode
     * @memberof oServerHeartBeat
     * @static
     * @param {IoServerHeartBeat} message oServerHeartBeat message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oServerHeartBeat.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.seq != null && Object.hasOwnProperty.call(message, "seq"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.seq);
        if (message.cTimestamp != null && Object.hasOwnProperty.call(message, "cTimestamp"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.cTimestamp);
        if (message.sTimestamp != null && Object.hasOwnProperty.call(message, "sTimestamp"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.sTimestamp);
        if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
            writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.uid);
        if (message.room != null && Object.hasOwnProperty.call(message, "room"))
            writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.room);
        return writer;
    };

    /**
     * Encodes the specified oServerHeartBeat message, length delimited. Does not implicitly {@link oServerHeartBeat.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oServerHeartBeat
     * @static
     * @param {IoServerHeartBeat} message oServerHeartBeat message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oServerHeartBeat.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a oServerHeartBeat message from the specified reader or buffer.
     * @function decode
     * @memberof oServerHeartBeat
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oServerHeartBeat} oServerHeartBeat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oServerHeartBeat.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oServerHeartBeat();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.seq = reader.uint64();
                    break;
                }
            case 2: {
                    message.cTimestamp = reader.uint64();
                    break;
                }
            case 3: {
                    message.sTimestamp = reader.uint64();
                    break;
                }
            case 4: {
                    message.uid = reader.uint64();
                    break;
                }
            case 5: {
                    message.room = reader.uint64();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a oServerHeartBeat message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oServerHeartBeat
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oServerHeartBeat} oServerHeartBeat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oServerHeartBeat.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a oServerHeartBeat message.
     * @function verify
     * @memberof oServerHeartBeat
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    oServerHeartBeat.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.seq != null && message.hasOwnProperty("seq"))
            if (!$util.isInteger(message.seq) && !(message.seq && $util.isInteger(message.seq.low) && $util.isInteger(message.seq.high)))
                return "seq: integer|Long expected";
        if (message.cTimestamp != null && message.hasOwnProperty("cTimestamp"))
            if (!$util.isInteger(message.cTimestamp) && !(message.cTimestamp && $util.isInteger(message.cTimestamp.low) && $util.isInteger(message.cTimestamp.high)))
                return "cTimestamp: integer|Long expected";
        if (message.sTimestamp != null && message.hasOwnProperty("sTimestamp"))
            if (!$util.isInteger(message.sTimestamp) && !(message.sTimestamp && $util.isInteger(message.sTimestamp.low) && $util.isInteger(message.sTimestamp.high)))
                return "sTimestamp: integer|Long expected";
        if (message.uid != null && message.hasOwnProperty("uid"))
            if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                return "uid: integer|Long expected";
        if (message.room != null && message.hasOwnProperty("room"))
            if (!$util.isInteger(message.room) && !(message.room && $util.isInteger(message.room.low) && $util.isInteger(message.room.high)))
                return "room: integer|Long expected";
        return null;
    };

    /**
     * Creates a oServerHeartBeat message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oServerHeartBeat
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oServerHeartBeat} oServerHeartBeat
     */
    oServerHeartBeat.fromObject = function fromObject(object) {
        if (object instanceof $root.oServerHeartBeat)
            return object;
        var message = new $root.oServerHeartBeat();
        if (object.seq != null)
            if ($util.Long)
                (message.seq = $util.Long.fromValue(object.seq)).unsigned = true;
            else if (typeof object.seq === "string")
                message.seq = parseInt(object.seq, 10);
            else if (typeof object.seq === "number")
                message.seq = object.seq;
            else if (typeof object.seq === "object")
                message.seq = new $util.LongBits(object.seq.low >>> 0, object.seq.high >>> 0).toNumber(true);
        if (object.cTimestamp != null)
            if ($util.Long)
                (message.cTimestamp = $util.Long.fromValue(object.cTimestamp)).unsigned = true;
            else if (typeof object.cTimestamp === "string")
                message.cTimestamp = parseInt(object.cTimestamp, 10);
            else if (typeof object.cTimestamp === "number")
                message.cTimestamp = object.cTimestamp;
            else if (typeof object.cTimestamp === "object")
                message.cTimestamp = new $util.LongBits(object.cTimestamp.low >>> 0, object.cTimestamp.high >>> 0).toNumber(true);
        if (object.sTimestamp != null)
            if ($util.Long)
                (message.sTimestamp = $util.Long.fromValue(object.sTimestamp)).unsigned = true;
            else if (typeof object.sTimestamp === "string")
                message.sTimestamp = parseInt(object.sTimestamp, 10);
            else if (typeof object.sTimestamp === "number")
                message.sTimestamp = object.sTimestamp;
            else if (typeof object.sTimestamp === "object")
                message.sTimestamp = new $util.LongBits(object.sTimestamp.low >>> 0, object.sTimestamp.high >>> 0).toNumber(true);
        if (object.uid != null)
            if ($util.Long)
                (message.uid = $util.Long.fromValue(object.uid)).unsigned = true;
            else if (typeof object.uid === "string")
                message.uid = parseInt(object.uid, 10);
            else if (typeof object.uid === "number")
                message.uid = object.uid;
            else if (typeof object.uid === "object")
                message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber(true);
        if (object.room != null)
            if ($util.Long)
                (message.room = $util.Long.fromValue(object.room)).unsigned = true;
            else if (typeof object.room === "string")
                message.room = parseInt(object.room, 10);
            else if (typeof object.room === "number")
                message.room = object.room;
            else if (typeof object.room === "object")
                message.room = new $util.LongBits(object.room.low >>> 0, object.room.high >>> 0).toNumber(true);
        return message;
    };

    /**
     * Creates a plain object from a oServerHeartBeat message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oServerHeartBeat
     * @static
     * @param {oServerHeartBeat} message oServerHeartBeat
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    oServerHeartBeat.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.seq = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.seq = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.cTimestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.cTimestamp = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.sTimestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.sTimestamp = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.uid = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.room = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.room = options.longs === String ? "0" : 0;
        }
        if (message.seq != null && message.hasOwnProperty("seq"))
            if (typeof message.seq === "number")
                object.seq = options.longs === String ? String(message.seq) : message.seq;
            else
                object.seq = options.longs === String ? $util.Long.prototype.toString.call(message.seq) : options.longs === Number ? new $util.LongBits(message.seq.low >>> 0, message.seq.high >>> 0).toNumber(true) : message.seq;
        if (message.cTimestamp != null && message.hasOwnProperty("cTimestamp"))
            if (typeof message.cTimestamp === "number")
                object.cTimestamp = options.longs === String ? String(message.cTimestamp) : message.cTimestamp;
            else
                object.cTimestamp = options.longs === String ? $util.Long.prototype.toString.call(message.cTimestamp) : options.longs === Number ? new $util.LongBits(message.cTimestamp.low >>> 0, message.cTimestamp.high >>> 0).toNumber(true) : message.cTimestamp;
        if (message.sTimestamp != null && message.hasOwnProperty("sTimestamp"))
            if (typeof message.sTimestamp === "number")
                object.sTimestamp = options.longs === String ? String(message.sTimestamp) : message.sTimestamp;
            else
                object.sTimestamp = options.longs === String ? $util.Long.prototype.toString.call(message.sTimestamp) : options.longs === Number ? new $util.LongBits(message.sTimestamp.low >>> 0, message.sTimestamp.high >>> 0).toNumber(true) : message.sTimestamp;
        if (message.uid != null && message.hasOwnProperty("uid"))
            if (typeof message.uid === "number")
                object.uid = options.longs === String ? String(message.uid) : message.uid;
            else
                object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber(true) : message.uid;
        if (message.room != null && message.hasOwnProperty("room"))
            if (typeof message.room === "number")
                object.room = options.longs === String ? String(message.room) : message.room;
            else
                object.room = options.longs === String ? $util.Long.prototype.toString.call(message.room) : options.longs === Number ? new $util.LongBits(message.room.low >>> 0, message.room.high >>> 0).toNumber(true) : message.room;
        return object;
    };

    /**
     * Converts this oServerHeartBeat to JSON.
     * @function toJSON
     * @memberof oServerHeartBeat
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    oServerHeartBeat.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for oServerHeartBeat
     * @function getTypeUrl
     * @memberof oServerHeartBeat
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    oServerHeartBeat.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/oServerHeartBeat";
    };

    return oServerHeartBeat;
})();

$root.oLoginReq = (function() {

    /**
     * Properties of a oLoginReq.
     * @exports IoLoginReq
     * @interface IoLoginReq
     * @property {number|Long|null} [account] oLoginReq account
     * @property {string|null} [token] oLoginReq token
     * @property {string|null} [insToken] oLoginReq insToken
     */

    /**
     * Constructs a new oLoginReq.
     * @exports oLoginReq
     * @classdesc Represents a oLoginReq.
     * @implements IoLoginReq
     * @constructor
     * @param {IoLoginReq=} [properties] Properties to set
     */
    function oLoginReq(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * oLoginReq account.
     * @member {number|Long} account
     * @memberof oLoginReq
     * @instance
     */
    oLoginReq.prototype.account = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * oLoginReq token.
     * @member {string} token
     * @memberof oLoginReq
     * @instance
     */
    oLoginReq.prototype.token = "";

    /**
     * oLoginReq insToken.
     * @member {string} insToken
     * @memberof oLoginReq
     * @instance
     */
    oLoginReq.prototype.insToken = "";

    /**
     * Creates a new oLoginReq instance using the specified properties.
     * @function create
     * @memberof oLoginReq
     * @static
     * @param {IoLoginReq=} [properties] Properties to set
     * @returns {oLoginReq} oLoginReq instance
     */
    oLoginReq.create = function create(properties) {
        return new oLoginReq(properties);
    };

    /**
     * Encodes the specified oLoginReq message. Does not implicitly {@link oLoginReq.verify|verify} messages.
     * @function encode
     * @memberof oLoginReq
     * @static
     * @param {IoLoginReq} message oLoginReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oLoginReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.account != null && Object.hasOwnProperty.call(message, "account"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.account);
        if (message.token != null && Object.hasOwnProperty.call(message, "token"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.token);
        if (message.insToken != null && Object.hasOwnProperty.call(message, "insToken"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.insToken);
        return writer;
    };

    /**
     * Encodes the specified oLoginReq message, length delimited. Does not implicitly {@link oLoginReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oLoginReq
     * @static
     * @param {IoLoginReq} message oLoginReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oLoginReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a oLoginReq message from the specified reader or buffer.
     * @function decode
     * @memberof oLoginReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oLoginReq} oLoginReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oLoginReq.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oLoginReq();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 2: {
                    message.account = reader.uint64();
                    break;
                }
            case 3: {
                    message.token = reader.string();
                    break;
                }
            case 4: {
                    message.insToken = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a oLoginReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oLoginReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oLoginReq} oLoginReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oLoginReq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a oLoginReq message.
     * @function verify
     * @memberof oLoginReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    oLoginReq.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.account != null && message.hasOwnProperty("account"))
            if (!$util.isInteger(message.account) && !(message.account && $util.isInteger(message.account.low) && $util.isInteger(message.account.high)))
                return "account: integer|Long expected";
        if (message.token != null && message.hasOwnProperty("token"))
            if (!$util.isString(message.token))
                return "token: string expected";
        if (message.insToken != null && message.hasOwnProperty("insToken"))
            if (!$util.isString(message.insToken))
                return "insToken: string expected";
        return null;
    };

    /**
     * Creates a oLoginReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oLoginReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oLoginReq} oLoginReq
     */
    oLoginReq.fromObject = function fromObject(object) {
        if (object instanceof $root.oLoginReq)
            return object;
        var message = new $root.oLoginReq();
        if (object.account != null)
            if ($util.Long)
                (message.account = $util.Long.fromValue(object.account)).unsigned = true;
            else if (typeof object.account === "string")
                message.account = parseInt(object.account, 10);
            else if (typeof object.account === "number")
                message.account = object.account;
            else if (typeof object.account === "object")
                message.account = new $util.LongBits(object.account.low >>> 0, object.account.high >>> 0).toNumber(true);
        if (object.token != null)
            message.token = String(object.token);
        if (object.insToken != null)
            message.insToken = String(object.insToken);
        return message;
    };

    /**
     * Creates a plain object from a oLoginReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oLoginReq
     * @static
     * @param {oLoginReq} message oLoginReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    oLoginReq.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.account = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.account = options.longs === String ? "0" : 0;
            object.token = "";
            object.insToken = "";
        }
        if (message.account != null && message.hasOwnProperty("account"))
            if (typeof message.account === "number")
                object.account = options.longs === String ? String(message.account) : message.account;
            else
                object.account = options.longs === String ? $util.Long.prototype.toString.call(message.account) : options.longs === Number ? new $util.LongBits(message.account.low >>> 0, message.account.high >>> 0).toNumber(true) : message.account;
        if (message.token != null && message.hasOwnProperty("token"))
            object.token = message.token;
        if (message.insToken != null && message.hasOwnProperty("insToken"))
            object.insToken = message.insToken;
        return object;
    };

    /**
     * Converts this oLoginReq to JSON.
     * @function toJSON
     * @memberof oLoginReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    oLoginReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for oLoginReq
     * @function getTypeUrl
     * @memberof oLoginReq
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    oLoginReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/oLoginReq";
    };

    return oLoginReq;
})();

$root.oLoginAsw = (function() {

    /**
     * Properties of a oLoginAsw.
     * @exports IoLoginAsw
     * @interface IoLoginAsw
     * @property {eError|null} [code] oLoginAsw code
     */

    /**
     * Constructs a new oLoginAsw.
     * @exports oLoginAsw
     * @classdesc Represents a oLoginAsw.
     * @implements IoLoginAsw
     * @constructor
     * @param {IoLoginAsw=} [properties] Properties to set
     */
    function oLoginAsw(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * oLoginAsw code.
     * @member {eError} code
     * @memberof oLoginAsw
     * @instance
     */
    oLoginAsw.prototype.code = 0;

    /**
     * Creates a new oLoginAsw instance using the specified properties.
     * @function create
     * @memberof oLoginAsw
     * @static
     * @param {IoLoginAsw=} [properties] Properties to set
     * @returns {oLoginAsw} oLoginAsw instance
     */
    oLoginAsw.create = function create(properties) {
        return new oLoginAsw(properties);
    };

    /**
     * Encodes the specified oLoginAsw message. Does not implicitly {@link oLoginAsw.verify|verify} messages.
     * @function encode
     * @memberof oLoginAsw
     * @static
     * @param {IoLoginAsw} message oLoginAsw message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oLoginAsw.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.code != null && Object.hasOwnProperty.call(message, "code"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
        return writer;
    };

    /**
     * Encodes the specified oLoginAsw message, length delimited. Does not implicitly {@link oLoginAsw.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oLoginAsw
     * @static
     * @param {IoLoginAsw} message oLoginAsw message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oLoginAsw.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a oLoginAsw message from the specified reader or buffer.
     * @function decode
     * @memberof oLoginAsw
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oLoginAsw} oLoginAsw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oLoginAsw.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oLoginAsw();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.code = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a oLoginAsw message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oLoginAsw
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oLoginAsw} oLoginAsw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oLoginAsw.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a oLoginAsw message.
     * @function verify
     * @memberof oLoginAsw
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    oLoginAsw.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.code != null && message.hasOwnProperty("code"))
            switch (message.code) {
            default:
                return "code: enum value expected";
            case 0:
            case 1:
            case 2:
            case 41:
            case 42:
            case 43:
            case 44:
            case 51:
            case 52:
            case 53:
            case 61:
            case 62:
            case 63:
            case 64:
            case 65:
            case 71:
            case 72:
            case 73:
            case 74:
            case 75:
            case 76:
            case 77:
            case 80:
            case 81:
            case 82:
            case 83:
                break;
            }
        return null;
    };

    /**
     * Creates a oLoginAsw message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oLoginAsw
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oLoginAsw} oLoginAsw
     */
    oLoginAsw.fromObject = function fromObject(object) {
        if (object instanceof $root.oLoginAsw)
            return object;
        var message = new $root.oLoginAsw();
        switch (object.code) {
        default:
            if (typeof object.code === "number") {
                message.code = object.code;
                break;
            }
            break;
        case "UNKNOWN":
        case 0:
            message.code = 0;
            break;
        case "SUCCESS":
        case 1:
            message.code = 1;
            break;
        case "FAILD":
        case 2:
            message.code = 2;
            break;
        case "ERROR_REQ_PARAM":
        case 41:
            message.code = 41;
            break;
        case "ERROR_OTHER_ROOM_OPEN":
        case 42:
            message.code = 42;
            break;
        case "ERROR_CREATE_ROOM_FAIL":
        case 43:
            message.code = 43;
            break;
        case "ERROR_ENTER_ROOM_FAIL":
        case 44:
            message.code = 44;
            break;
        case "EMPTY_INS_TOKEN":
        case 51:
            message.code = 51;
            break;
        case "UNSET_INS_TOKEN":
        case 52:
            message.code = 52;
            break;
        case "ERROR_INS_TOKEN":
        case 53:
            message.code = 53;
            break;
        case "ERROR_APP_SERVER_CONNECT_FAIL":
        case 61:
            message.code = 61;
            break;
        case "ERROR_APP_SERVER_RET_NOT_200":
        case 62:
            message.code = 62;
            break;
        case "ERROR_APP_SERVER_RET_NOT_JSON":
        case 63:
            message.code = 63;
            break;
        case "ERROR_APP_SERVER_RET_AUTH_FAIL":
        case 64:
            message.code = 64;
            break;
        case "ERROR_APP_SERVER_RET_CODE_FAIL":
        case 65:
            message.code = 65;
            break;
        case "ERROR_NO_ROOM":
        case 71:
            message.code = 71;
            break;
        case "ERROR_NOT_IN_ROOM":
        case 72:
            message.code = 72;
            break;
        case "ERROR_ALREADY_IN_STAGE":
        case 73:
            message.code = 73;
            break;
        case "ERROR_ALREADY_IN_QUEUE":
        case 74:
            message.code = 74;
            break;
        case "ERROR_ENTER_STAGE_FAIL":
        case 75:
            message.code = 75;
            break;
        case "ERROR_ENTER_STAGE_TIMEOUT":
        case 76:
            message.code = 76;
            break;
        case "ERROR_NOT_IN_STAGE":
        case 77:
            message.code = 77;
            break;
        case "ERROR_INVITER_NOT_IN_UE":
        case 80:
            message.code = 80;
            break;
        case "ERROR_INVITEE_NOT_IN_STAGE":
        case 81:
            message.code = 81;
            break;
        case "ERROR_INVITE_CONTEXT_NOT_EXIST":
        case 82:
            message.code = 82;
            break;
        case "ERROR_INVITEE_NOT_YOU":
        case 83:
            message.code = 83;
            break;
        }
        return message;
    };

    /**
     * Creates a plain object from a oLoginAsw message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oLoginAsw
     * @static
     * @param {oLoginAsw} message oLoginAsw
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    oLoginAsw.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.code = options.enums === String ? "UNKNOWN" : 0;
        if (message.code != null && message.hasOwnProperty("code"))
            object.code = options.enums === String ? $root.eError[message.code] === undefined ? message.code : $root.eError[message.code] : message.code;
        return object;
    };

    /**
     * Converts this oLoginAsw to JSON.
     * @function toJSON
     * @memberof oLoginAsw
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    oLoginAsw.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for oLoginAsw
     * @function getTypeUrl
     * @memberof oLoginAsw
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    oLoginAsw.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/oLoginAsw";
    };

    return oLoginAsw;
})();

$root.oLoginOtherPush = (function() {

    /**
     * Properties of a oLoginOtherPush.
     * @exports IoLoginOtherPush
     * @interface IoLoginOtherPush
     */

    /**
     * Constructs a new oLoginOtherPush.
     * @exports oLoginOtherPush
     * @classdesc Represents a oLoginOtherPush.
     * @implements IoLoginOtherPush
     * @constructor
     * @param {IoLoginOtherPush=} [properties] Properties to set
     */
    function oLoginOtherPush(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new oLoginOtherPush instance using the specified properties.
     * @function create
     * @memberof oLoginOtherPush
     * @static
     * @param {IoLoginOtherPush=} [properties] Properties to set
     * @returns {oLoginOtherPush} oLoginOtherPush instance
     */
    oLoginOtherPush.create = function create(properties) {
        return new oLoginOtherPush(properties);
    };

    /**
     * Encodes the specified oLoginOtherPush message. Does not implicitly {@link oLoginOtherPush.verify|verify} messages.
     * @function encode
     * @memberof oLoginOtherPush
     * @static
     * @param {IoLoginOtherPush} message oLoginOtherPush message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oLoginOtherPush.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified oLoginOtherPush message, length delimited. Does not implicitly {@link oLoginOtherPush.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oLoginOtherPush
     * @static
     * @param {IoLoginOtherPush} message oLoginOtherPush message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oLoginOtherPush.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a oLoginOtherPush message from the specified reader or buffer.
     * @function decode
     * @memberof oLoginOtherPush
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oLoginOtherPush} oLoginOtherPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oLoginOtherPush.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oLoginOtherPush();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a oLoginOtherPush message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oLoginOtherPush
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oLoginOtherPush} oLoginOtherPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oLoginOtherPush.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a oLoginOtherPush message.
     * @function verify
     * @memberof oLoginOtherPush
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    oLoginOtherPush.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a oLoginOtherPush message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oLoginOtherPush
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oLoginOtherPush} oLoginOtherPush
     */
    oLoginOtherPush.fromObject = function fromObject(object) {
        if (object instanceof $root.oLoginOtherPush)
            return object;
        return new $root.oLoginOtherPush();
    };

    /**
     * Creates a plain object from a oLoginOtherPush message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oLoginOtherPush
     * @static
     * @param {oLoginOtherPush} message oLoginOtherPush
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    oLoginOtherPush.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this oLoginOtherPush to JSON.
     * @function toJSON
     * @memberof oLoginOtherPush
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    oLoginOtherPush.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for oLoginOtherPush
     * @function getTypeUrl
     * @memberof oLoginOtherPush
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    oLoginOtherPush.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/oLoginOtherPush";
    };

    return oLoginOtherPush;
})();

$root.oSceneChangePush = (function() {

    /**
     * Properties of a oSceneChangePush.
     * @exports IoSceneChangePush
     * @interface IoSceneChangePush
     * @property {string|null} [scene] oSceneChangePush scene
     */

    /**
     * Constructs a new oSceneChangePush.
     * @exports oSceneChangePush
     * @classdesc Represents a oSceneChangePush.
     * @implements IoSceneChangePush
     * @constructor
     * @param {IoSceneChangePush=} [properties] Properties to set
     */
    function oSceneChangePush(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * oSceneChangePush scene.
     * @member {string} scene
     * @memberof oSceneChangePush
     * @instance
     */
    oSceneChangePush.prototype.scene = "";

    /**
     * Creates a new oSceneChangePush instance using the specified properties.
     * @function create
     * @memberof oSceneChangePush
     * @static
     * @param {IoSceneChangePush=} [properties] Properties to set
     * @returns {oSceneChangePush} oSceneChangePush instance
     */
    oSceneChangePush.create = function create(properties) {
        return new oSceneChangePush(properties);
    };

    /**
     * Encodes the specified oSceneChangePush message. Does not implicitly {@link oSceneChangePush.verify|verify} messages.
     * @function encode
     * @memberof oSceneChangePush
     * @static
     * @param {IoSceneChangePush} message oSceneChangePush message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oSceneChangePush.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.scene != null && Object.hasOwnProperty.call(message, "scene"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.scene);
        return writer;
    };

    /**
     * Encodes the specified oSceneChangePush message, length delimited. Does not implicitly {@link oSceneChangePush.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oSceneChangePush
     * @static
     * @param {IoSceneChangePush} message oSceneChangePush message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oSceneChangePush.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a oSceneChangePush message from the specified reader or buffer.
     * @function decode
     * @memberof oSceneChangePush
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oSceneChangePush} oSceneChangePush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oSceneChangePush.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oSceneChangePush();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.scene = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a oSceneChangePush message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oSceneChangePush
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oSceneChangePush} oSceneChangePush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oSceneChangePush.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a oSceneChangePush message.
     * @function verify
     * @memberof oSceneChangePush
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    oSceneChangePush.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.scene != null && message.hasOwnProperty("scene"))
            if (!$util.isString(message.scene))
                return "scene: string expected";
        return null;
    };

    /**
     * Creates a oSceneChangePush message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oSceneChangePush
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oSceneChangePush} oSceneChangePush
     */
    oSceneChangePush.fromObject = function fromObject(object) {
        if (object instanceof $root.oSceneChangePush)
            return object;
        var message = new $root.oSceneChangePush();
        if (object.scene != null)
            message.scene = String(object.scene);
        return message;
    };

    /**
     * Creates a plain object from a oSceneChangePush message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oSceneChangePush
     * @static
     * @param {oSceneChangePush} message oSceneChangePush
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    oSceneChangePush.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.scene = "";
        if (message.scene != null && message.hasOwnProperty("scene"))
            object.scene = message.scene;
        return object;
    };

    /**
     * Converts this oSceneChangePush to JSON.
     * @function toJSON
     * @memberof oSceneChangePush
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    oSceneChangePush.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for oSceneChangePush
     * @function getTypeUrl
     * @memberof oSceneChangePush
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    oSceneChangePush.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/oSceneChangePush";
    };

    return oSceneChangePush;
})();

$root.oPlayAnimatonReq = (function() {

    /**
     * Properties of a oPlayAnimatonReq.
     * @exports IoPlayAnimatonReq
     * @interface IoPlayAnimatonReq
     * @property {number|null} [animId] oPlayAnimatonReq animId
     * @property {number|null} [playRate] oPlayAnimatonReq playRate
     * @property {boolean|null} [isLoop] oPlayAnimatonReq isLoop
     */

    /**
     * Constructs a new oPlayAnimatonReq.
     * @exports oPlayAnimatonReq
     * @classdesc Represents a oPlayAnimatonReq.
     * @implements IoPlayAnimatonReq
     * @constructor
     * @param {IoPlayAnimatonReq=} [properties] Properties to set
     */
    function oPlayAnimatonReq(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * oPlayAnimatonReq animId.
     * @member {number} animId
     * @memberof oPlayAnimatonReq
     * @instance
     */
    oPlayAnimatonReq.prototype.animId = 0;

    /**
     * oPlayAnimatonReq playRate.
     * @member {number} playRate
     * @memberof oPlayAnimatonReq
     * @instance
     */
    oPlayAnimatonReq.prototype.playRate = 0;

    /**
     * oPlayAnimatonReq isLoop.
     * @member {boolean} isLoop
     * @memberof oPlayAnimatonReq
     * @instance
     */
    oPlayAnimatonReq.prototype.isLoop = false;

    /**
     * Creates a new oPlayAnimatonReq instance using the specified properties.
     * @function create
     * @memberof oPlayAnimatonReq
     * @static
     * @param {IoPlayAnimatonReq=} [properties] Properties to set
     * @returns {oPlayAnimatonReq} oPlayAnimatonReq instance
     */
    oPlayAnimatonReq.create = function create(properties) {
        return new oPlayAnimatonReq(properties);
    };

    /**
     * Encodes the specified oPlayAnimatonReq message. Does not implicitly {@link oPlayAnimatonReq.verify|verify} messages.
     * @function encode
     * @memberof oPlayAnimatonReq
     * @static
     * @param {IoPlayAnimatonReq} message oPlayAnimatonReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oPlayAnimatonReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.animId != null && Object.hasOwnProperty.call(message, "animId"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.animId);
        if (message.playRate != null && Object.hasOwnProperty.call(message, "playRate"))
            writer.uint32(/* id 2, wireType 5 =*/21).float(message.playRate);
        if (message.isLoop != null && Object.hasOwnProperty.call(message, "isLoop"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.isLoop);
        return writer;
    };

    /**
     * Encodes the specified oPlayAnimatonReq message, length delimited. Does not implicitly {@link oPlayAnimatonReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oPlayAnimatonReq
     * @static
     * @param {IoPlayAnimatonReq} message oPlayAnimatonReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oPlayAnimatonReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a oPlayAnimatonReq message from the specified reader or buffer.
     * @function decode
     * @memberof oPlayAnimatonReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oPlayAnimatonReq} oPlayAnimatonReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oPlayAnimatonReq.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oPlayAnimatonReq();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.animId = reader.int32();
                    break;
                }
            case 2: {
                    message.playRate = reader.float();
                    break;
                }
            case 3: {
                    message.isLoop = reader.bool();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a oPlayAnimatonReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oPlayAnimatonReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oPlayAnimatonReq} oPlayAnimatonReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oPlayAnimatonReq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a oPlayAnimatonReq message.
     * @function verify
     * @memberof oPlayAnimatonReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    oPlayAnimatonReq.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.animId != null && message.hasOwnProperty("animId"))
            if (!$util.isInteger(message.animId))
                return "animId: integer expected";
        if (message.playRate != null && message.hasOwnProperty("playRate"))
            if (typeof message.playRate !== "number")
                return "playRate: number expected";
        if (message.isLoop != null && message.hasOwnProperty("isLoop"))
            if (typeof message.isLoop !== "boolean")
                return "isLoop: boolean expected";
        return null;
    };

    /**
     * Creates a oPlayAnimatonReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oPlayAnimatonReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oPlayAnimatonReq} oPlayAnimatonReq
     */
    oPlayAnimatonReq.fromObject = function fromObject(object) {
        if (object instanceof $root.oPlayAnimatonReq)
            return object;
        var message = new $root.oPlayAnimatonReq();
        if (object.animId != null)
            message.animId = object.animId | 0;
        if (object.playRate != null)
            message.playRate = Number(object.playRate);
        if (object.isLoop != null)
            message.isLoop = Boolean(object.isLoop);
        return message;
    };

    /**
     * Creates a plain object from a oPlayAnimatonReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oPlayAnimatonReq
     * @static
     * @param {oPlayAnimatonReq} message oPlayAnimatonReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    oPlayAnimatonReq.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.animId = 0;
            object.playRate = 0;
            object.isLoop = false;
        }
        if (message.animId != null && message.hasOwnProperty("animId"))
            object.animId = message.animId;
        if (message.playRate != null && message.hasOwnProperty("playRate"))
            object.playRate = options.json && !isFinite(message.playRate) ? String(message.playRate) : message.playRate;
        if (message.isLoop != null && message.hasOwnProperty("isLoop"))
            object.isLoop = message.isLoop;
        return object;
    };

    /**
     * Converts this oPlayAnimatonReq to JSON.
     * @function toJSON
     * @memberof oPlayAnimatonReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    oPlayAnimatonReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for oPlayAnimatonReq
     * @function getTypeUrl
     * @memberof oPlayAnimatonReq
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    oPlayAnimatonReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/oPlayAnimatonReq";
    };

    return oPlayAnimatonReq;
})();

$root.oPlayAnimationPush = (function() {

    /**
     * Properties of a oPlayAnimationPush.
     * @exports IoPlayAnimationPush
     * @interface IoPlayAnimationPush
     * @property {eError|null} [code] oPlayAnimationPush code
     * @property {number|null} [animId] oPlayAnimationPush animId
     * @property {number|null} [playRate] oPlayAnimationPush playRate
     * @property {boolean|null} [isLoop] oPlayAnimationPush isLoop
     */

    /**
     * Constructs a new oPlayAnimationPush.
     * @exports oPlayAnimationPush
     * @classdesc Represents a oPlayAnimationPush.
     * @implements IoPlayAnimationPush
     * @constructor
     * @param {IoPlayAnimationPush=} [properties] Properties to set
     */
    function oPlayAnimationPush(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * oPlayAnimationPush code.
     * @member {eError} code
     * @memberof oPlayAnimationPush
     * @instance
     */
    oPlayAnimationPush.prototype.code = 0;

    /**
     * oPlayAnimationPush animId.
     * @member {number} animId
     * @memberof oPlayAnimationPush
     * @instance
     */
    oPlayAnimationPush.prototype.animId = 0;

    /**
     * oPlayAnimationPush playRate.
     * @member {number} playRate
     * @memberof oPlayAnimationPush
     * @instance
     */
    oPlayAnimationPush.prototype.playRate = 0;

    /**
     * oPlayAnimationPush isLoop.
     * @member {boolean} isLoop
     * @memberof oPlayAnimationPush
     * @instance
     */
    oPlayAnimationPush.prototype.isLoop = false;

    /**
     * Creates a new oPlayAnimationPush instance using the specified properties.
     * @function create
     * @memberof oPlayAnimationPush
     * @static
     * @param {IoPlayAnimationPush=} [properties] Properties to set
     * @returns {oPlayAnimationPush} oPlayAnimationPush instance
     */
    oPlayAnimationPush.create = function create(properties) {
        return new oPlayAnimationPush(properties);
    };

    /**
     * Encodes the specified oPlayAnimationPush message. Does not implicitly {@link oPlayAnimationPush.verify|verify} messages.
     * @function encode
     * @memberof oPlayAnimationPush
     * @static
     * @param {IoPlayAnimationPush} message oPlayAnimationPush message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oPlayAnimationPush.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.code != null && Object.hasOwnProperty.call(message, "code"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
        if (message.animId != null && Object.hasOwnProperty.call(message, "animId"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.animId);
        if (message.playRate != null && Object.hasOwnProperty.call(message, "playRate"))
            writer.uint32(/* id 3, wireType 5 =*/29).float(message.playRate);
        if (message.isLoop != null && Object.hasOwnProperty.call(message, "isLoop"))
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.isLoop);
        return writer;
    };

    /**
     * Encodes the specified oPlayAnimationPush message, length delimited. Does not implicitly {@link oPlayAnimationPush.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oPlayAnimationPush
     * @static
     * @param {IoPlayAnimationPush} message oPlayAnimationPush message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oPlayAnimationPush.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a oPlayAnimationPush message from the specified reader or buffer.
     * @function decode
     * @memberof oPlayAnimationPush
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oPlayAnimationPush} oPlayAnimationPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oPlayAnimationPush.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oPlayAnimationPush();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.code = reader.int32();
                    break;
                }
            case 2: {
                    message.animId = reader.int32();
                    break;
                }
            case 3: {
                    message.playRate = reader.float();
                    break;
                }
            case 4: {
                    message.isLoop = reader.bool();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a oPlayAnimationPush message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oPlayAnimationPush
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oPlayAnimationPush} oPlayAnimationPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oPlayAnimationPush.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a oPlayAnimationPush message.
     * @function verify
     * @memberof oPlayAnimationPush
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    oPlayAnimationPush.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.code != null && message.hasOwnProperty("code"))
            switch (message.code) {
            default:
                return "code: enum value expected";
            case 0:
            case 1:
            case 2:
            case 41:
            case 42:
            case 43:
            case 44:
            case 51:
            case 52:
            case 53:
            case 61:
            case 62:
            case 63:
            case 64:
            case 65:
            case 71:
            case 72:
            case 73:
            case 74:
            case 75:
            case 76:
            case 77:
            case 80:
            case 81:
            case 82:
            case 83:
                break;
            }
        if (message.animId != null && message.hasOwnProperty("animId"))
            if (!$util.isInteger(message.animId))
                return "animId: integer expected";
        if (message.playRate != null && message.hasOwnProperty("playRate"))
            if (typeof message.playRate !== "number")
                return "playRate: number expected";
        if (message.isLoop != null && message.hasOwnProperty("isLoop"))
            if (typeof message.isLoop !== "boolean")
                return "isLoop: boolean expected";
        return null;
    };

    /**
     * Creates a oPlayAnimationPush message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oPlayAnimationPush
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oPlayAnimationPush} oPlayAnimationPush
     */
    oPlayAnimationPush.fromObject = function fromObject(object) {
        if (object instanceof $root.oPlayAnimationPush)
            return object;
        var message = new $root.oPlayAnimationPush();
        switch (object.code) {
        default:
            if (typeof object.code === "number") {
                message.code = object.code;
                break;
            }
            break;
        case "UNKNOWN":
        case 0:
            message.code = 0;
            break;
        case "SUCCESS":
        case 1:
            message.code = 1;
            break;
        case "FAILD":
        case 2:
            message.code = 2;
            break;
        case "ERROR_REQ_PARAM":
        case 41:
            message.code = 41;
            break;
        case "ERROR_OTHER_ROOM_OPEN":
        case 42:
            message.code = 42;
            break;
        case "ERROR_CREATE_ROOM_FAIL":
        case 43:
            message.code = 43;
            break;
        case "ERROR_ENTER_ROOM_FAIL":
        case 44:
            message.code = 44;
            break;
        case "EMPTY_INS_TOKEN":
        case 51:
            message.code = 51;
            break;
        case "UNSET_INS_TOKEN":
        case 52:
            message.code = 52;
            break;
        case "ERROR_INS_TOKEN":
        case 53:
            message.code = 53;
            break;
        case "ERROR_APP_SERVER_CONNECT_FAIL":
        case 61:
            message.code = 61;
            break;
        case "ERROR_APP_SERVER_RET_NOT_200":
        case 62:
            message.code = 62;
            break;
        case "ERROR_APP_SERVER_RET_NOT_JSON":
        case 63:
            message.code = 63;
            break;
        case "ERROR_APP_SERVER_RET_AUTH_FAIL":
        case 64:
            message.code = 64;
            break;
        case "ERROR_APP_SERVER_RET_CODE_FAIL":
        case 65:
            message.code = 65;
            break;
        case "ERROR_NO_ROOM":
        case 71:
            message.code = 71;
            break;
        case "ERROR_NOT_IN_ROOM":
        case 72:
            message.code = 72;
            break;
        case "ERROR_ALREADY_IN_STAGE":
        case 73:
            message.code = 73;
            break;
        case "ERROR_ALREADY_IN_QUEUE":
        case 74:
            message.code = 74;
            break;
        case "ERROR_ENTER_STAGE_FAIL":
        case 75:
            message.code = 75;
            break;
        case "ERROR_ENTER_STAGE_TIMEOUT":
        case 76:
            message.code = 76;
            break;
        case "ERROR_NOT_IN_STAGE":
        case 77:
            message.code = 77;
            break;
        case "ERROR_INVITER_NOT_IN_UE":
        case 80:
            message.code = 80;
            break;
        case "ERROR_INVITEE_NOT_IN_STAGE":
        case 81:
            message.code = 81;
            break;
        case "ERROR_INVITE_CONTEXT_NOT_EXIST":
        case 82:
            message.code = 82;
            break;
        case "ERROR_INVITEE_NOT_YOU":
        case 83:
            message.code = 83;
            break;
        }
        if (object.animId != null)
            message.animId = object.animId | 0;
        if (object.playRate != null)
            message.playRate = Number(object.playRate);
        if (object.isLoop != null)
            message.isLoop = Boolean(object.isLoop);
        return message;
    };

    /**
     * Creates a plain object from a oPlayAnimationPush message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oPlayAnimationPush
     * @static
     * @param {oPlayAnimationPush} message oPlayAnimationPush
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    oPlayAnimationPush.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.code = options.enums === String ? "UNKNOWN" : 0;
            object.animId = 0;
            object.playRate = 0;
            object.isLoop = false;
        }
        if (message.code != null && message.hasOwnProperty("code"))
            object.code = options.enums === String ? $root.eError[message.code] === undefined ? message.code : $root.eError[message.code] : message.code;
        if (message.animId != null && message.hasOwnProperty("animId"))
            object.animId = message.animId;
        if (message.playRate != null && message.hasOwnProperty("playRate"))
            object.playRate = options.json && !isFinite(message.playRate) ? String(message.playRate) : message.playRate;
        if (message.isLoop != null && message.hasOwnProperty("isLoop"))
            object.isLoop = message.isLoop;
        return object;
    };

    /**
     * Converts this oPlayAnimationPush to JSON.
     * @function toJSON
     * @memberof oPlayAnimationPush
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    oPlayAnimationPush.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for oPlayAnimationPush
     * @function getTypeUrl
     * @memberof oPlayAnimationPush
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    oPlayAnimationPush.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/oPlayAnimationPush";
    };

    return oPlayAnimationPush;
})();

$root.oChangeGarmentReq = (function() {

    /**
     * Properties of a oChangeGarmentReq.
     * @exports IoChangeGarmentReq
     * @interface IoChangeGarmentReq
     * @property {number|Long|null} [garment1Id] oChangeGarmentReq garment1Id
     * @property {number|Long|null} [garment2Id] oChangeGarmentReq garment2Id
     * @property {number|Long|null} [garment3Id] oChangeGarmentReq garment3Id
     * @property {number|null} [garment1Size] oChangeGarmentReq garment1Size
     * @property {number|null} [garment2Size] oChangeGarmentReq garment2Size
     * @property {number|null} [garment3Size] oChangeGarmentReq garment3Size
     */

    /**
     * Constructs a new oChangeGarmentReq.
     * @exports oChangeGarmentReq
     * @classdesc Represents a oChangeGarmentReq.
     * @implements IoChangeGarmentReq
     * @constructor
     * @param {IoChangeGarmentReq=} [properties] Properties to set
     */
    function oChangeGarmentReq(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * oChangeGarmentReq garment1Id.
     * @member {number|Long} garment1Id
     * @memberof oChangeGarmentReq
     * @instance
     */
    oChangeGarmentReq.prototype.garment1Id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * oChangeGarmentReq garment2Id.
     * @member {number|Long} garment2Id
     * @memberof oChangeGarmentReq
     * @instance
     */
    oChangeGarmentReq.prototype.garment2Id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * oChangeGarmentReq garment3Id.
     * @member {number|Long} garment3Id
     * @memberof oChangeGarmentReq
     * @instance
     */
    oChangeGarmentReq.prototype.garment3Id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * oChangeGarmentReq garment1Size.
     * @member {number} garment1Size
     * @memberof oChangeGarmentReq
     * @instance
     */
    oChangeGarmentReq.prototype.garment1Size = 0;

    /**
     * oChangeGarmentReq garment2Size.
     * @member {number} garment2Size
     * @memberof oChangeGarmentReq
     * @instance
     */
    oChangeGarmentReq.prototype.garment2Size = 0;

    /**
     * oChangeGarmentReq garment3Size.
     * @member {number} garment3Size
     * @memberof oChangeGarmentReq
     * @instance
     */
    oChangeGarmentReq.prototype.garment3Size = 0;

    /**
     * Creates a new oChangeGarmentReq instance using the specified properties.
     * @function create
     * @memberof oChangeGarmentReq
     * @static
     * @param {IoChangeGarmentReq=} [properties] Properties to set
     * @returns {oChangeGarmentReq} oChangeGarmentReq instance
     */
    oChangeGarmentReq.create = function create(properties) {
        return new oChangeGarmentReq(properties);
    };

    /**
     * Encodes the specified oChangeGarmentReq message. Does not implicitly {@link oChangeGarmentReq.verify|verify} messages.
     * @function encode
     * @memberof oChangeGarmentReq
     * @static
     * @param {IoChangeGarmentReq} message oChangeGarmentReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oChangeGarmentReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.garment1Id != null && Object.hasOwnProperty.call(message, "garment1Id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.garment1Id);
        if (message.garment2Id != null && Object.hasOwnProperty.call(message, "garment2Id"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.garment2Id);
        if (message.garment3Id != null && Object.hasOwnProperty.call(message, "garment3Id"))
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.garment3Id);
        if (message.garment1Size != null && Object.hasOwnProperty.call(message, "garment1Size"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.garment1Size);
        if (message.garment2Size != null && Object.hasOwnProperty.call(message, "garment2Size"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.garment2Size);
        if (message.garment3Size != null && Object.hasOwnProperty.call(message, "garment3Size"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.garment3Size);
        return writer;
    };

    /**
     * Encodes the specified oChangeGarmentReq message, length delimited. Does not implicitly {@link oChangeGarmentReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oChangeGarmentReq
     * @static
     * @param {IoChangeGarmentReq} message oChangeGarmentReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oChangeGarmentReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a oChangeGarmentReq message from the specified reader or buffer.
     * @function decode
     * @memberof oChangeGarmentReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oChangeGarmentReq} oChangeGarmentReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oChangeGarmentReq.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oChangeGarmentReq();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.garment1Id = reader.int64();
                    break;
                }
            case 2: {
                    message.garment2Id = reader.int64();
                    break;
                }
            case 3: {
                    message.garment3Id = reader.int64();
                    break;
                }
            case 4: {
                    message.garment1Size = reader.int32();
                    break;
                }
            case 5: {
                    message.garment2Size = reader.int32();
                    break;
                }
            case 6: {
                    message.garment3Size = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a oChangeGarmentReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oChangeGarmentReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oChangeGarmentReq} oChangeGarmentReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oChangeGarmentReq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a oChangeGarmentReq message.
     * @function verify
     * @memberof oChangeGarmentReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    oChangeGarmentReq.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.garment1Id != null && message.hasOwnProperty("garment1Id"))
            if (!$util.isInteger(message.garment1Id) && !(message.garment1Id && $util.isInteger(message.garment1Id.low) && $util.isInteger(message.garment1Id.high)))
                return "garment1Id: integer|Long expected";
        if (message.garment2Id != null && message.hasOwnProperty("garment2Id"))
            if (!$util.isInteger(message.garment2Id) && !(message.garment2Id && $util.isInteger(message.garment2Id.low) && $util.isInteger(message.garment2Id.high)))
                return "garment2Id: integer|Long expected";
        if (message.garment3Id != null && message.hasOwnProperty("garment3Id"))
            if (!$util.isInteger(message.garment3Id) && !(message.garment3Id && $util.isInteger(message.garment3Id.low) && $util.isInteger(message.garment3Id.high)))
                return "garment3Id: integer|Long expected";
        if (message.garment1Size != null && message.hasOwnProperty("garment1Size"))
            if (!$util.isInteger(message.garment1Size))
                return "garment1Size: integer expected";
        if (message.garment2Size != null && message.hasOwnProperty("garment2Size"))
            if (!$util.isInteger(message.garment2Size))
                return "garment2Size: integer expected";
        if (message.garment3Size != null && message.hasOwnProperty("garment3Size"))
            if (!$util.isInteger(message.garment3Size))
                return "garment3Size: integer expected";
        return null;
    };

    /**
     * Creates a oChangeGarmentReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oChangeGarmentReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oChangeGarmentReq} oChangeGarmentReq
     */
    oChangeGarmentReq.fromObject = function fromObject(object) {
        if (object instanceof $root.oChangeGarmentReq)
            return object;
        var message = new $root.oChangeGarmentReq();
        if (object.garment1Id != null)
            if ($util.Long)
                (message.garment1Id = $util.Long.fromValue(object.garment1Id)).unsigned = false;
            else if (typeof object.garment1Id === "string")
                message.garment1Id = parseInt(object.garment1Id, 10);
            else if (typeof object.garment1Id === "number")
                message.garment1Id = object.garment1Id;
            else if (typeof object.garment1Id === "object")
                message.garment1Id = new $util.LongBits(object.garment1Id.low >>> 0, object.garment1Id.high >>> 0).toNumber();
        if (object.garment2Id != null)
            if ($util.Long)
                (message.garment2Id = $util.Long.fromValue(object.garment2Id)).unsigned = false;
            else if (typeof object.garment2Id === "string")
                message.garment2Id = parseInt(object.garment2Id, 10);
            else if (typeof object.garment2Id === "number")
                message.garment2Id = object.garment2Id;
            else if (typeof object.garment2Id === "object")
                message.garment2Id = new $util.LongBits(object.garment2Id.low >>> 0, object.garment2Id.high >>> 0).toNumber();
        if (object.garment3Id != null)
            if ($util.Long)
                (message.garment3Id = $util.Long.fromValue(object.garment3Id)).unsigned = false;
            else if (typeof object.garment3Id === "string")
                message.garment3Id = parseInt(object.garment3Id, 10);
            else if (typeof object.garment3Id === "number")
                message.garment3Id = object.garment3Id;
            else if (typeof object.garment3Id === "object")
                message.garment3Id = new $util.LongBits(object.garment3Id.low >>> 0, object.garment3Id.high >>> 0).toNumber();
        if (object.garment1Size != null)
            message.garment1Size = object.garment1Size | 0;
        if (object.garment2Size != null)
            message.garment2Size = object.garment2Size | 0;
        if (object.garment3Size != null)
            message.garment3Size = object.garment3Size | 0;
        return message;
    };

    /**
     * Creates a plain object from a oChangeGarmentReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oChangeGarmentReq
     * @static
     * @param {oChangeGarmentReq} message oChangeGarmentReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    oChangeGarmentReq.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.garment1Id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.garment1Id = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.garment2Id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.garment2Id = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.garment3Id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.garment3Id = options.longs === String ? "0" : 0;
            object.garment1Size = 0;
            object.garment2Size = 0;
            object.garment3Size = 0;
        }
        if (message.garment1Id != null && message.hasOwnProperty("garment1Id"))
            if (typeof message.garment1Id === "number")
                object.garment1Id = options.longs === String ? String(message.garment1Id) : message.garment1Id;
            else
                object.garment1Id = options.longs === String ? $util.Long.prototype.toString.call(message.garment1Id) : options.longs === Number ? new $util.LongBits(message.garment1Id.low >>> 0, message.garment1Id.high >>> 0).toNumber() : message.garment1Id;
        if (message.garment2Id != null && message.hasOwnProperty("garment2Id"))
            if (typeof message.garment2Id === "number")
                object.garment2Id = options.longs === String ? String(message.garment2Id) : message.garment2Id;
            else
                object.garment2Id = options.longs === String ? $util.Long.prototype.toString.call(message.garment2Id) : options.longs === Number ? new $util.LongBits(message.garment2Id.low >>> 0, message.garment2Id.high >>> 0).toNumber() : message.garment2Id;
        if (message.garment3Id != null && message.hasOwnProperty("garment3Id"))
            if (typeof message.garment3Id === "number")
                object.garment3Id = options.longs === String ? String(message.garment3Id) : message.garment3Id;
            else
                object.garment3Id = options.longs === String ? $util.Long.prototype.toString.call(message.garment3Id) : options.longs === Number ? new $util.LongBits(message.garment3Id.low >>> 0, message.garment3Id.high >>> 0).toNumber() : message.garment3Id;
        if (message.garment1Size != null && message.hasOwnProperty("garment1Size"))
            object.garment1Size = message.garment1Size;
        if (message.garment2Size != null && message.hasOwnProperty("garment2Size"))
            object.garment2Size = message.garment2Size;
        if (message.garment3Size != null && message.hasOwnProperty("garment3Size"))
            object.garment3Size = message.garment3Size;
        return object;
    };

    /**
     * Converts this oChangeGarmentReq to JSON.
     * @function toJSON
     * @memberof oChangeGarmentReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    oChangeGarmentReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for oChangeGarmentReq
     * @function getTypeUrl
     * @memberof oChangeGarmentReq
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    oChangeGarmentReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/oChangeGarmentReq";
    };

    return oChangeGarmentReq;
})();

$root.oChangeGarmentSizeReq = (function() {

    /**
     * Properties of a oChangeGarmentSizeReq.
     * @exports IoChangeGarmentSizeReq
     * @interface IoChangeGarmentSizeReq
     * @property {number|null} [size] oChangeGarmentSizeReq size
     */

    /**
     * Constructs a new oChangeGarmentSizeReq.
     * @exports oChangeGarmentSizeReq
     * @classdesc Represents a oChangeGarmentSizeReq.
     * @implements IoChangeGarmentSizeReq
     * @constructor
     * @param {IoChangeGarmentSizeReq=} [properties] Properties to set
     */
    function oChangeGarmentSizeReq(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * oChangeGarmentSizeReq size.
     * @member {number} size
     * @memberof oChangeGarmentSizeReq
     * @instance
     */
    oChangeGarmentSizeReq.prototype.size = 0;

    /**
     * Creates a new oChangeGarmentSizeReq instance using the specified properties.
     * @function create
     * @memberof oChangeGarmentSizeReq
     * @static
     * @param {IoChangeGarmentSizeReq=} [properties] Properties to set
     * @returns {oChangeGarmentSizeReq} oChangeGarmentSizeReq instance
     */
    oChangeGarmentSizeReq.create = function create(properties) {
        return new oChangeGarmentSizeReq(properties);
    };

    /**
     * Encodes the specified oChangeGarmentSizeReq message. Does not implicitly {@link oChangeGarmentSizeReq.verify|verify} messages.
     * @function encode
     * @memberof oChangeGarmentSizeReq
     * @static
     * @param {IoChangeGarmentSizeReq} message oChangeGarmentSizeReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oChangeGarmentSizeReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.size != null && Object.hasOwnProperty.call(message, "size"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.size);
        return writer;
    };

    /**
     * Encodes the specified oChangeGarmentSizeReq message, length delimited. Does not implicitly {@link oChangeGarmentSizeReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oChangeGarmentSizeReq
     * @static
     * @param {IoChangeGarmentSizeReq} message oChangeGarmentSizeReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oChangeGarmentSizeReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a oChangeGarmentSizeReq message from the specified reader or buffer.
     * @function decode
     * @memberof oChangeGarmentSizeReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oChangeGarmentSizeReq} oChangeGarmentSizeReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oChangeGarmentSizeReq.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oChangeGarmentSizeReq();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.size = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a oChangeGarmentSizeReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oChangeGarmentSizeReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oChangeGarmentSizeReq} oChangeGarmentSizeReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oChangeGarmentSizeReq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a oChangeGarmentSizeReq message.
     * @function verify
     * @memberof oChangeGarmentSizeReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    oChangeGarmentSizeReq.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.size != null && message.hasOwnProperty("size"))
            if (!$util.isInteger(message.size))
                return "size: integer expected";
        return null;
    };

    /**
     * Creates a oChangeGarmentSizeReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oChangeGarmentSizeReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oChangeGarmentSizeReq} oChangeGarmentSizeReq
     */
    oChangeGarmentSizeReq.fromObject = function fromObject(object) {
        if (object instanceof $root.oChangeGarmentSizeReq)
            return object;
        var message = new $root.oChangeGarmentSizeReq();
        if (object.size != null)
            message.size = object.size | 0;
        return message;
    };

    /**
     * Creates a plain object from a oChangeGarmentSizeReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oChangeGarmentSizeReq
     * @static
     * @param {oChangeGarmentSizeReq} message oChangeGarmentSizeReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    oChangeGarmentSizeReq.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.size = 0;
        if (message.size != null && message.hasOwnProperty("size"))
            object.size = message.size;
        return object;
    };

    /**
     * Converts this oChangeGarmentSizeReq to JSON.
     * @function toJSON
     * @memberof oChangeGarmentSizeReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    oChangeGarmentSizeReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for oChangeGarmentSizeReq
     * @function getTypeUrl
     * @memberof oChangeGarmentSizeReq
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    oChangeGarmentSizeReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/oChangeGarmentSizeReq";
    };

    return oChangeGarmentSizeReq;
})();

/**
 * ePaymenType enum.
 * @exports ePaymenType
 * @enum {number}
 * @property {number} None=0 None value
 * @property {number} RtcVideo=1 RtcVideo value
 * @property {number} RtcVoice=2 RtcVoice value
 * @property {number} PlayAnimation=3 PlayAnimation value
 */
$root.ePaymenType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "None"] = 0;
    values[valuesById[1] = "RtcVideo"] = 1;
    values[valuesById[2] = "RtcVoice"] = 2;
    values[valuesById[3] = "PlayAnimation"] = 3;
    return values;
})();

$root.oQueryCurrencyReq = (function() {

    /**
     * Properties of a oQueryCurrencyReq.
     * @exports IoQueryCurrencyReq
     * @interface IoQueryCurrencyReq
     * @property {ePaymenType|null} [paymentType] oQueryCurrencyReq paymentType
     */

    /**
     * Constructs a new oQueryCurrencyReq.
     * @exports oQueryCurrencyReq
     * @classdesc Represents a oQueryCurrencyReq.
     * @implements IoQueryCurrencyReq
     * @constructor
     * @param {IoQueryCurrencyReq=} [properties] Properties to set
     */
    function oQueryCurrencyReq(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * oQueryCurrencyReq paymentType.
     * @member {ePaymenType} paymentType
     * @memberof oQueryCurrencyReq
     * @instance
     */
    oQueryCurrencyReq.prototype.paymentType = 0;

    /**
     * Creates a new oQueryCurrencyReq instance using the specified properties.
     * @function create
     * @memberof oQueryCurrencyReq
     * @static
     * @param {IoQueryCurrencyReq=} [properties] Properties to set
     * @returns {oQueryCurrencyReq} oQueryCurrencyReq instance
     */
    oQueryCurrencyReq.create = function create(properties) {
        return new oQueryCurrencyReq(properties);
    };

    /**
     * Encodes the specified oQueryCurrencyReq message. Does not implicitly {@link oQueryCurrencyReq.verify|verify} messages.
     * @function encode
     * @memberof oQueryCurrencyReq
     * @static
     * @param {IoQueryCurrencyReq} message oQueryCurrencyReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oQueryCurrencyReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.paymentType != null && Object.hasOwnProperty.call(message, "paymentType"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.paymentType);
        return writer;
    };

    /**
     * Encodes the specified oQueryCurrencyReq message, length delimited. Does not implicitly {@link oQueryCurrencyReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oQueryCurrencyReq
     * @static
     * @param {IoQueryCurrencyReq} message oQueryCurrencyReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oQueryCurrencyReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a oQueryCurrencyReq message from the specified reader or buffer.
     * @function decode
     * @memberof oQueryCurrencyReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oQueryCurrencyReq} oQueryCurrencyReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oQueryCurrencyReq.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oQueryCurrencyReq();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.paymentType = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a oQueryCurrencyReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oQueryCurrencyReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oQueryCurrencyReq} oQueryCurrencyReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oQueryCurrencyReq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a oQueryCurrencyReq message.
     * @function verify
     * @memberof oQueryCurrencyReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    oQueryCurrencyReq.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.paymentType != null && message.hasOwnProperty("paymentType"))
            switch (message.paymentType) {
            default:
                return "paymentType: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
                break;
            }
        return null;
    };

    /**
     * Creates a oQueryCurrencyReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oQueryCurrencyReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oQueryCurrencyReq} oQueryCurrencyReq
     */
    oQueryCurrencyReq.fromObject = function fromObject(object) {
        if (object instanceof $root.oQueryCurrencyReq)
            return object;
        var message = new $root.oQueryCurrencyReq();
        switch (object.paymentType) {
        default:
            if (typeof object.paymentType === "number") {
                message.paymentType = object.paymentType;
                break;
            }
            break;
        case "None":
        case 0:
            message.paymentType = 0;
            break;
        case "RtcVideo":
        case 1:
            message.paymentType = 1;
            break;
        case "RtcVoice":
        case 2:
            message.paymentType = 2;
            break;
        case "PlayAnimation":
        case 3:
            message.paymentType = 3;
            break;
        }
        return message;
    };

    /**
     * Creates a plain object from a oQueryCurrencyReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oQueryCurrencyReq
     * @static
     * @param {oQueryCurrencyReq} message oQueryCurrencyReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    oQueryCurrencyReq.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.paymentType = options.enums === String ? "None" : 0;
        if (message.paymentType != null && message.hasOwnProperty("paymentType"))
            object.paymentType = options.enums === String ? $root.ePaymenType[message.paymentType] === undefined ? message.paymentType : $root.ePaymenType[message.paymentType] : message.paymentType;
        return object;
    };

    /**
     * Converts this oQueryCurrencyReq to JSON.
     * @function toJSON
     * @memberof oQueryCurrencyReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    oQueryCurrencyReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for oQueryCurrencyReq
     * @function getTypeUrl
     * @memberof oQueryCurrencyReq
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    oQueryCurrencyReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/oQueryCurrencyReq";
    };

    return oQueryCurrencyReq;
})();

/**
 * eRtcType enum.
 * @exports eRtcType
 * @enum {number}
 * @property {number} NoType=0 NoType value
 * @property {number} Video=1 Video value
 * @property {number} Voice=2 Voice value
 */
$root.eRtcType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "NoType"] = 0;
    values[valuesById[1] = "Video"] = 1;
    values[valuesById[2] = "Voice"] = 2;
    return values;
})();

$root.oHeatMapReq = (function() {

    /**
     * Properties of a oHeatMapReq.
     * @exports IoHeatMapReq
     * @interface IoHeatMapReq
     * @property {boolean|null} [enable] oHeatMapReq enable
     */

    /**
     * Constructs a new oHeatMapReq.
     * @exports oHeatMapReq
     * @classdesc Represents a oHeatMapReq.
     * @implements IoHeatMapReq
     * @constructor
     * @param {IoHeatMapReq=} [properties] Properties to set
     */
    function oHeatMapReq(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * oHeatMapReq enable.
     * @member {boolean} enable
     * @memberof oHeatMapReq
     * @instance
     */
    oHeatMapReq.prototype.enable = false;

    /**
     * Creates a new oHeatMapReq instance using the specified properties.
     * @function create
     * @memberof oHeatMapReq
     * @static
     * @param {IoHeatMapReq=} [properties] Properties to set
     * @returns {oHeatMapReq} oHeatMapReq instance
     */
    oHeatMapReq.create = function create(properties) {
        return new oHeatMapReq(properties);
    };

    /**
     * Encodes the specified oHeatMapReq message. Does not implicitly {@link oHeatMapReq.verify|verify} messages.
     * @function encode
     * @memberof oHeatMapReq
     * @static
     * @param {IoHeatMapReq} message oHeatMapReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oHeatMapReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.enable != null && Object.hasOwnProperty.call(message, "enable"))
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.enable);
        return writer;
    };

    /**
     * Encodes the specified oHeatMapReq message, length delimited. Does not implicitly {@link oHeatMapReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oHeatMapReq
     * @static
     * @param {IoHeatMapReq} message oHeatMapReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oHeatMapReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a oHeatMapReq message from the specified reader or buffer.
     * @function decode
     * @memberof oHeatMapReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oHeatMapReq} oHeatMapReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oHeatMapReq.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oHeatMapReq();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.enable = reader.bool();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a oHeatMapReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oHeatMapReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oHeatMapReq} oHeatMapReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oHeatMapReq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a oHeatMapReq message.
     * @function verify
     * @memberof oHeatMapReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    oHeatMapReq.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.enable != null && message.hasOwnProperty("enable"))
            if (typeof message.enable !== "boolean")
                return "enable: boolean expected";
        return null;
    };

    /**
     * Creates a oHeatMapReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oHeatMapReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oHeatMapReq} oHeatMapReq
     */
    oHeatMapReq.fromObject = function fromObject(object) {
        if (object instanceof $root.oHeatMapReq)
            return object;
        var message = new $root.oHeatMapReq();
        if (object.enable != null)
            message.enable = Boolean(object.enable);
        return message;
    };

    /**
     * Creates a plain object from a oHeatMapReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oHeatMapReq
     * @static
     * @param {oHeatMapReq} message oHeatMapReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    oHeatMapReq.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.enable = false;
        if (message.enable != null && message.hasOwnProperty("enable"))
            object.enable = message.enable;
        return object;
    };

    /**
     * Converts this oHeatMapReq to JSON.
     * @function toJSON
     * @memberof oHeatMapReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    oHeatMapReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for oHeatMapReq
     * @function getTypeUrl
     * @memberof oHeatMapReq
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    oHeatMapReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/oHeatMapReq";
    };

    return oHeatMapReq;
})();

$root.oChangeRtcStateReq = (function() {

    /**
     * Properties of a oChangeRtcStateReq.
     * @exports IoChangeRtcStateReq
     * @interface IoChangeRtcStateReq
     * @property {eRtcType|null} [type] oChangeRtcStateReq type
     * @property {boolean|null} [isOn] oChangeRtcStateReq isOn
     */

    /**
     * Constructs a new oChangeRtcStateReq.
     * @exports oChangeRtcStateReq
     * @classdesc Represents a oChangeRtcStateReq.
     * @implements IoChangeRtcStateReq
     * @constructor
     * @param {IoChangeRtcStateReq=} [properties] Properties to set
     */
    function oChangeRtcStateReq(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * oChangeRtcStateReq type.
     * @member {eRtcType} type
     * @memberof oChangeRtcStateReq
     * @instance
     */
    oChangeRtcStateReq.prototype.type = 0;

    /**
     * oChangeRtcStateReq isOn.
     * @member {boolean} isOn
     * @memberof oChangeRtcStateReq
     * @instance
     */
    oChangeRtcStateReq.prototype.isOn = false;

    /**
     * Creates a new oChangeRtcStateReq instance using the specified properties.
     * @function create
     * @memberof oChangeRtcStateReq
     * @static
     * @param {IoChangeRtcStateReq=} [properties] Properties to set
     * @returns {oChangeRtcStateReq} oChangeRtcStateReq instance
     */
    oChangeRtcStateReq.create = function create(properties) {
        return new oChangeRtcStateReq(properties);
    };

    /**
     * Encodes the specified oChangeRtcStateReq message. Does not implicitly {@link oChangeRtcStateReq.verify|verify} messages.
     * @function encode
     * @memberof oChangeRtcStateReq
     * @static
     * @param {IoChangeRtcStateReq} message oChangeRtcStateReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oChangeRtcStateReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
        if (message.isOn != null && Object.hasOwnProperty.call(message, "isOn"))
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isOn);
        return writer;
    };

    /**
     * Encodes the specified oChangeRtcStateReq message, length delimited. Does not implicitly {@link oChangeRtcStateReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oChangeRtcStateReq
     * @static
     * @param {IoChangeRtcStateReq} message oChangeRtcStateReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oChangeRtcStateReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a oChangeRtcStateReq message from the specified reader or buffer.
     * @function decode
     * @memberof oChangeRtcStateReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oChangeRtcStateReq} oChangeRtcStateReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oChangeRtcStateReq.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oChangeRtcStateReq();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.type = reader.int32();
                    break;
                }
            case 2: {
                    message.isOn = reader.bool();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a oChangeRtcStateReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oChangeRtcStateReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oChangeRtcStateReq} oChangeRtcStateReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oChangeRtcStateReq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a oChangeRtcStateReq message.
     * @function verify
     * @memberof oChangeRtcStateReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    oChangeRtcStateReq.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.type != null && message.hasOwnProperty("type"))
            switch (message.type) {
            default:
                return "type: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
        if (message.isOn != null && message.hasOwnProperty("isOn"))
            if (typeof message.isOn !== "boolean")
                return "isOn: boolean expected";
        return null;
    };

    /**
     * Creates a oChangeRtcStateReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oChangeRtcStateReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oChangeRtcStateReq} oChangeRtcStateReq
     */
    oChangeRtcStateReq.fromObject = function fromObject(object) {
        if (object instanceof $root.oChangeRtcStateReq)
            return object;
        var message = new $root.oChangeRtcStateReq();
        switch (object.type) {
        default:
            if (typeof object.type === "number") {
                message.type = object.type;
                break;
            }
            break;
        case "NoType":
        case 0:
            message.type = 0;
            break;
        case "Video":
        case 1:
            message.type = 1;
            break;
        case "Voice":
        case 2:
            message.type = 2;
            break;
        }
        if (object.isOn != null)
            message.isOn = Boolean(object.isOn);
        return message;
    };

    /**
     * Creates a plain object from a oChangeRtcStateReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oChangeRtcStateReq
     * @static
     * @param {oChangeRtcStateReq} message oChangeRtcStateReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    oChangeRtcStateReq.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.type = options.enums === String ? "NoType" : 0;
            object.isOn = false;
        }
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = options.enums === String ? $root.eRtcType[message.type] === undefined ? message.type : $root.eRtcType[message.type] : message.type;
        if (message.isOn != null && message.hasOwnProperty("isOn"))
            object.isOn = message.isOn;
        return object;
    };

    /**
     * Converts this oChangeRtcStateReq to JSON.
     * @function toJSON
     * @memberof oChangeRtcStateReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    oChangeRtcStateReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for oChangeRtcStateReq
     * @function getTypeUrl
     * @memberof oChangeRtcStateReq
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    oChangeRtcStateReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/oChangeRtcStateReq";
    };

    return oChangeRtcStateReq;
})();

$root.oChangeMapReq = (function() {

    /**
     * Properties of a oChangeMapReq.
     * @exports IoChangeMapReq
     * @interface IoChangeMapReq
     * @property {string|null} [mapName] oChangeMapReq mapName
     */

    /**
     * Constructs a new oChangeMapReq.
     * @exports oChangeMapReq
     * @classdesc Represents a oChangeMapReq.
     * @implements IoChangeMapReq
     * @constructor
     * @param {IoChangeMapReq=} [properties] Properties to set
     */
    function oChangeMapReq(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * oChangeMapReq mapName.
     * @member {string} mapName
     * @memberof oChangeMapReq
     * @instance
     */
    oChangeMapReq.prototype.mapName = "";

    /**
     * Creates a new oChangeMapReq instance using the specified properties.
     * @function create
     * @memberof oChangeMapReq
     * @static
     * @param {IoChangeMapReq=} [properties] Properties to set
     * @returns {oChangeMapReq} oChangeMapReq instance
     */
    oChangeMapReq.create = function create(properties) {
        return new oChangeMapReq(properties);
    };

    /**
     * Encodes the specified oChangeMapReq message. Does not implicitly {@link oChangeMapReq.verify|verify} messages.
     * @function encode
     * @memberof oChangeMapReq
     * @static
     * @param {IoChangeMapReq} message oChangeMapReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oChangeMapReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mapName != null && Object.hasOwnProperty.call(message, "mapName"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.mapName);
        return writer;
    };

    /**
     * Encodes the specified oChangeMapReq message, length delimited. Does not implicitly {@link oChangeMapReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oChangeMapReq
     * @static
     * @param {IoChangeMapReq} message oChangeMapReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oChangeMapReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a oChangeMapReq message from the specified reader or buffer.
     * @function decode
     * @memberof oChangeMapReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oChangeMapReq} oChangeMapReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oChangeMapReq.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oChangeMapReq();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.mapName = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a oChangeMapReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oChangeMapReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oChangeMapReq} oChangeMapReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oChangeMapReq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a oChangeMapReq message.
     * @function verify
     * @memberof oChangeMapReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    oChangeMapReq.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.mapName != null && message.hasOwnProperty("mapName"))
            if (!$util.isString(message.mapName))
                return "mapName: string expected";
        return null;
    };

    /**
     * Creates a oChangeMapReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oChangeMapReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oChangeMapReq} oChangeMapReq
     */
    oChangeMapReq.fromObject = function fromObject(object) {
        if (object instanceof $root.oChangeMapReq)
            return object;
        var message = new $root.oChangeMapReq();
        if (object.mapName != null)
            message.mapName = String(object.mapName);
        return message;
    };

    /**
     * Creates a plain object from a oChangeMapReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oChangeMapReq
     * @static
     * @param {oChangeMapReq} message oChangeMapReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    oChangeMapReq.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.mapName = "";
        if (message.mapName != null && message.hasOwnProperty("mapName"))
            object.mapName = message.mapName;
        return object;
    };

    /**
     * Converts this oChangeMapReq to JSON.
     * @function toJSON
     * @memberof oChangeMapReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    oChangeMapReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for oChangeMapReq
     * @function getTypeUrl
     * @memberof oChangeMapReq
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    oChangeMapReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/oChangeMapReq";
    };

    return oChangeMapReq;
})();

$root.oChangeRtcStatePush = (function() {

    /**
     * Properties of a oChangeRtcStatePush.
     * @exports IoChangeRtcStatePush
     * @interface IoChangeRtcStatePush
     * @property {eError|null} [code] oChangeRtcStatePush code
     * @property {eRtcType|null} [type] oChangeRtcStatePush type
     * @property {boolean|null} [isOn] oChangeRtcStatePush isOn
     */

    /**
     * Constructs a new oChangeRtcStatePush.
     * @exports oChangeRtcStatePush
     * @classdesc Represents a oChangeRtcStatePush.
     * @implements IoChangeRtcStatePush
     * @constructor
     * @param {IoChangeRtcStatePush=} [properties] Properties to set
     */
    function oChangeRtcStatePush(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * oChangeRtcStatePush code.
     * @member {eError} code
     * @memberof oChangeRtcStatePush
     * @instance
     */
    oChangeRtcStatePush.prototype.code = 0;

    /**
     * oChangeRtcStatePush type.
     * @member {eRtcType} type
     * @memberof oChangeRtcStatePush
     * @instance
     */
    oChangeRtcStatePush.prototype.type = 0;

    /**
     * oChangeRtcStatePush isOn.
     * @member {boolean} isOn
     * @memberof oChangeRtcStatePush
     * @instance
     */
    oChangeRtcStatePush.prototype.isOn = false;

    /**
     * Creates a new oChangeRtcStatePush instance using the specified properties.
     * @function create
     * @memberof oChangeRtcStatePush
     * @static
     * @param {IoChangeRtcStatePush=} [properties] Properties to set
     * @returns {oChangeRtcStatePush} oChangeRtcStatePush instance
     */
    oChangeRtcStatePush.create = function create(properties) {
        return new oChangeRtcStatePush(properties);
    };

    /**
     * Encodes the specified oChangeRtcStatePush message. Does not implicitly {@link oChangeRtcStatePush.verify|verify} messages.
     * @function encode
     * @memberof oChangeRtcStatePush
     * @static
     * @param {IoChangeRtcStatePush} message oChangeRtcStatePush message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oChangeRtcStatePush.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.code != null && Object.hasOwnProperty.call(message, "code"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
        if (message.isOn != null && Object.hasOwnProperty.call(message, "isOn"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.isOn);
        return writer;
    };

    /**
     * Encodes the specified oChangeRtcStatePush message, length delimited. Does not implicitly {@link oChangeRtcStatePush.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oChangeRtcStatePush
     * @static
     * @param {IoChangeRtcStatePush} message oChangeRtcStatePush message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oChangeRtcStatePush.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a oChangeRtcStatePush message from the specified reader or buffer.
     * @function decode
     * @memberof oChangeRtcStatePush
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oChangeRtcStatePush} oChangeRtcStatePush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oChangeRtcStatePush.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oChangeRtcStatePush();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.code = reader.int32();
                    break;
                }
            case 2: {
                    message.type = reader.int32();
                    break;
                }
            case 3: {
                    message.isOn = reader.bool();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a oChangeRtcStatePush message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oChangeRtcStatePush
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oChangeRtcStatePush} oChangeRtcStatePush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oChangeRtcStatePush.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a oChangeRtcStatePush message.
     * @function verify
     * @memberof oChangeRtcStatePush
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    oChangeRtcStatePush.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.code != null && message.hasOwnProperty("code"))
            switch (message.code) {
            default:
                return "code: enum value expected";
            case 0:
            case 1:
            case 2:
            case 41:
            case 42:
            case 43:
            case 44:
            case 51:
            case 52:
            case 53:
            case 61:
            case 62:
            case 63:
            case 64:
            case 65:
            case 71:
            case 72:
            case 73:
            case 74:
            case 75:
            case 76:
            case 77:
            case 80:
            case 81:
            case 82:
            case 83:
                break;
            }
        if (message.type != null && message.hasOwnProperty("type"))
            switch (message.type) {
            default:
                return "type: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
        if (message.isOn != null && message.hasOwnProperty("isOn"))
            if (typeof message.isOn !== "boolean")
                return "isOn: boolean expected";
        return null;
    };

    /**
     * Creates a oChangeRtcStatePush message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oChangeRtcStatePush
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oChangeRtcStatePush} oChangeRtcStatePush
     */
    oChangeRtcStatePush.fromObject = function fromObject(object) {
        if (object instanceof $root.oChangeRtcStatePush)
            return object;
        var message = new $root.oChangeRtcStatePush();
        switch (object.code) {
        default:
            if (typeof object.code === "number") {
                message.code = object.code;
                break;
            }
            break;
        case "UNKNOWN":
        case 0:
            message.code = 0;
            break;
        case "SUCCESS":
        case 1:
            message.code = 1;
            break;
        case "FAILD":
        case 2:
            message.code = 2;
            break;
        case "ERROR_REQ_PARAM":
        case 41:
            message.code = 41;
            break;
        case "ERROR_OTHER_ROOM_OPEN":
        case 42:
            message.code = 42;
            break;
        case "ERROR_CREATE_ROOM_FAIL":
        case 43:
            message.code = 43;
            break;
        case "ERROR_ENTER_ROOM_FAIL":
        case 44:
            message.code = 44;
            break;
        case "EMPTY_INS_TOKEN":
        case 51:
            message.code = 51;
            break;
        case "UNSET_INS_TOKEN":
        case 52:
            message.code = 52;
            break;
        case "ERROR_INS_TOKEN":
        case 53:
            message.code = 53;
            break;
        case "ERROR_APP_SERVER_CONNECT_FAIL":
        case 61:
            message.code = 61;
            break;
        case "ERROR_APP_SERVER_RET_NOT_200":
        case 62:
            message.code = 62;
            break;
        case "ERROR_APP_SERVER_RET_NOT_JSON":
        case 63:
            message.code = 63;
            break;
        case "ERROR_APP_SERVER_RET_AUTH_FAIL":
        case 64:
            message.code = 64;
            break;
        case "ERROR_APP_SERVER_RET_CODE_FAIL":
        case 65:
            message.code = 65;
            break;
        case "ERROR_NO_ROOM":
        case 71:
            message.code = 71;
            break;
        case "ERROR_NOT_IN_ROOM":
        case 72:
            message.code = 72;
            break;
        case "ERROR_ALREADY_IN_STAGE":
        case 73:
            message.code = 73;
            break;
        case "ERROR_ALREADY_IN_QUEUE":
        case 74:
            message.code = 74;
            break;
        case "ERROR_ENTER_STAGE_FAIL":
        case 75:
            message.code = 75;
            break;
        case "ERROR_ENTER_STAGE_TIMEOUT":
        case 76:
            message.code = 76;
            break;
        case "ERROR_NOT_IN_STAGE":
        case 77:
            message.code = 77;
            break;
        case "ERROR_INVITER_NOT_IN_UE":
        case 80:
            message.code = 80;
            break;
        case "ERROR_INVITEE_NOT_IN_STAGE":
        case 81:
            message.code = 81;
            break;
        case "ERROR_INVITE_CONTEXT_NOT_EXIST":
        case 82:
            message.code = 82;
            break;
        case "ERROR_INVITEE_NOT_YOU":
        case 83:
            message.code = 83;
            break;
        }
        switch (object.type) {
        default:
            if (typeof object.type === "number") {
                message.type = object.type;
                break;
            }
            break;
        case "NoType":
        case 0:
            message.type = 0;
            break;
        case "Video":
        case 1:
            message.type = 1;
            break;
        case "Voice":
        case 2:
            message.type = 2;
            break;
        }
        if (object.isOn != null)
            message.isOn = Boolean(object.isOn);
        return message;
    };

    /**
     * Creates a plain object from a oChangeRtcStatePush message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oChangeRtcStatePush
     * @static
     * @param {oChangeRtcStatePush} message oChangeRtcStatePush
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    oChangeRtcStatePush.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.code = options.enums === String ? "UNKNOWN" : 0;
            object.type = options.enums === String ? "NoType" : 0;
            object.isOn = false;
        }
        if (message.code != null && message.hasOwnProperty("code"))
            object.code = options.enums === String ? $root.eError[message.code] === undefined ? message.code : $root.eError[message.code] : message.code;
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = options.enums === String ? $root.eRtcType[message.type] === undefined ? message.type : $root.eRtcType[message.type] : message.type;
        if (message.isOn != null && message.hasOwnProperty("isOn"))
            object.isOn = message.isOn;
        return object;
    };

    /**
     * Converts this oChangeRtcStatePush to JSON.
     * @function toJSON
     * @memberof oChangeRtcStatePush
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    oChangeRtcStatePush.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for oChangeRtcStatePush
     * @function getTypeUrl
     * @memberof oChangeRtcStatePush
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    oChangeRtcStatePush.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/oChangeRtcStatePush";
    };

    return oChangeRtcStatePush;
})();

$root.oQueryCurrencyPush = (function() {

    /**
     * Properties of a oQueryCurrencyPush.
     * @exports IoQueryCurrencyPush
     * @interface IoQueryCurrencyPush
     * @property {eError|null} [code] oQueryCurrencyPush code
     * @property {number|null} [Currency] oQueryCurrencyPush Currency
     * @property {ePaymenType|null} [paymentType] oQueryCurrencyPush paymentType
     * @property {number|null} [unitPrice] oQueryCurrencyPush unitPrice
     */

    /**
     * Constructs a new oQueryCurrencyPush.
     * @exports oQueryCurrencyPush
     * @classdesc Represents a oQueryCurrencyPush.
     * @implements IoQueryCurrencyPush
     * @constructor
     * @param {IoQueryCurrencyPush=} [properties] Properties to set
     */
    function oQueryCurrencyPush(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * oQueryCurrencyPush code.
     * @member {eError} code
     * @memberof oQueryCurrencyPush
     * @instance
     */
    oQueryCurrencyPush.prototype.code = 0;

    /**
     * oQueryCurrencyPush Currency.
     * @member {number} Currency
     * @memberof oQueryCurrencyPush
     * @instance
     */
    oQueryCurrencyPush.prototype.Currency = 0;

    /**
     * oQueryCurrencyPush paymentType.
     * @member {ePaymenType} paymentType
     * @memberof oQueryCurrencyPush
     * @instance
     */
    oQueryCurrencyPush.prototype.paymentType = 0;

    /**
     * oQueryCurrencyPush unitPrice.
     * @member {number} unitPrice
     * @memberof oQueryCurrencyPush
     * @instance
     */
    oQueryCurrencyPush.prototype.unitPrice = 0;

    /**
     * Creates a new oQueryCurrencyPush instance using the specified properties.
     * @function create
     * @memberof oQueryCurrencyPush
     * @static
     * @param {IoQueryCurrencyPush=} [properties] Properties to set
     * @returns {oQueryCurrencyPush} oQueryCurrencyPush instance
     */
    oQueryCurrencyPush.create = function create(properties) {
        return new oQueryCurrencyPush(properties);
    };

    /**
     * Encodes the specified oQueryCurrencyPush message. Does not implicitly {@link oQueryCurrencyPush.verify|verify} messages.
     * @function encode
     * @memberof oQueryCurrencyPush
     * @static
     * @param {IoQueryCurrencyPush} message oQueryCurrencyPush message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oQueryCurrencyPush.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.code != null && Object.hasOwnProperty.call(message, "code"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
        if (message.Currency != null && Object.hasOwnProperty.call(message, "Currency"))
            writer.uint32(/* id 2, wireType 1 =*/17).double(message.Currency);
        if (message.paymentType != null && Object.hasOwnProperty.call(message, "paymentType"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.paymentType);
        if (message.unitPrice != null && Object.hasOwnProperty.call(message, "unitPrice"))
            writer.uint32(/* id 4, wireType 5 =*/37).float(message.unitPrice);
        return writer;
    };

    /**
     * Encodes the specified oQueryCurrencyPush message, length delimited. Does not implicitly {@link oQueryCurrencyPush.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oQueryCurrencyPush
     * @static
     * @param {IoQueryCurrencyPush} message oQueryCurrencyPush message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oQueryCurrencyPush.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a oQueryCurrencyPush message from the specified reader or buffer.
     * @function decode
     * @memberof oQueryCurrencyPush
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oQueryCurrencyPush} oQueryCurrencyPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oQueryCurrencyPush.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oQueryCurrencyPush();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.code = reader.int32();
                    break;
                }
            case 2: {
                    message.Currency = reader.double();
                    break;
                }
            case 3: {
                    message.paymentType = reader.int32();
                    break;
                }
            case 4: {
                    message.unitPrice = reader.float();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a oQueryCurrencyPush message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oQueryCurrencyPush
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oQueryCurrencyPush} oQueryCurrencyPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oQueryCurrencyPush.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a oQueryCurrencyPush message.
     * @function verify
     * @memberof oQueryCurrencyPush
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    oQueryCurrencyPush.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.code != null && message.hasOwnProperty("code"))
            switch (message.code) {
            default:
                return "code: enum value expected";
            case 0:
            case 1:
            case 2:
            case 41:
            case 42:
            case 43:
            case 44:
            case 51:
            case 52:
            case 53:
            case 61:
            case 62:
            case 63:
            case 64:
            case 65:
            case 71:
            case 72:
            case 73:
            case 74:
            case 75:
            case 76:
            case 77:
            case 80:
            case 81:
            case 82:
            case 83:
                break;
            }
        if (message.Currency != null && message.hasOwnProperty("Currency"))
            if (typeof message.Currency !== "number")
                return "Currency: number expected";
        if (message.paymentType != null && message.hasOwnProperty("paymentType"))
            switch (message.paymentType) {
            default:
                return "paymentType: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
                break;
            }
        if (message.unitPrice != null && message.hasOwnProperty("unitPrice"))
            if (typeof message.unitPrice !== "number")
                return "unitPrice: number expected";
        return null;
    };

    /**
     * Creates a oQueryCurrencyPush message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oQueryCurrencyPush
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oQueryCurrencyPush} oQueryCurrencyPush
     */
    oQueryCurrencyPush.fromObject = function fromObject(object) {
        if (object instanceof $root.oQueryCurrencyPush)
            return object;
        var message = new $root.oQueryCurrencyPush();
        switch (object.code) {
        default:
            if (typeof object.code === "number") {
                message.code = object.code;
                break;
            }
            break;
        case "UNKNOWN":
        case 0:
            message.code = 0;
            break;
        case "SUCCESS":
        case 1:
            message.code = 1;
            break;
        case "FAILD":
        case 2:
            message.code = 2;
            break;
        case "ERROR_REQ_PARAM":
        case 41:
            message.code = 41;
            break;
        case "ERROR_OTHER_ROOM_OPEN":
        case 42:
            message.code = 42;
            break;
        case "ERROR_CREATE_ROOM_FAIL":
        case 43:
            message.code = 43;
            break;
        case "ERROR_ENTER_ROOM_FAIL":
        case 44:
            message.code = 44;
            break;
        case "EMPTY_INS_TOKEN":
        case 51:
            message.code = 51;
            break;
        case "UNSET_INS_TOKEN":
        case 52:
            message.code = 52;
            break;
        case "ERROR_INS_TOKEN":
        case 53:
            message.code = 53;
            break;
        case "ERROR_APP_SERVER_CONNECT_FAIL":
        case 61:
            message.code = 61;
            break;
        case "ERROR_APP_SERVER_RET_NOT_200":
        case 62:
            message.code = 62;
            break;
        case "ERROR_APP_SERVER_RET_NOT_JSON":
        case 63:
            message.code = 63;
            break;
        case "ERROR_APP_SERVER_RET_AUTH_FAIL":
        case 64:
            message.code = 64;
            break;
        case "ERROR_APP_SERVER_RET_CODE_FAIL":
        case 65:
            message.code = 65;
            break;
        case "ERROR_NO_ROOM":
        case 71:
            message.code = 71;
            break;
        case "ERROR_NOT_IN_ROOM":
        case 72:
            message.code = 72;
            break;
        case "ERROR_ALREADY_IN_STAGE":
        case 73:
            message.code = 73;
            break;
        case "ERROR_ALREADY_IN_QUEUE":
        case 74:
            message.code = 74;
            break;
        case "ERROR_ENTER_STAGE_FAIL":
        case 75:
            message.code = 75;
            break;
        case "ERROR_ENTER_STAGE_TIMEOUT":
        case 76:
            message.code = 76;
            break;
        case "ERROR_NOT_IN_STAGE":
        case 77:
            message.code = 77;
            break;
        case "ERROR_INVITER_NOT_IN_UE":
        case 80:
            message.code = 80;
            break;
        case "ERROR_INVITEE_NOT_IN_STAGE":
        case 81:
            message.code = 81;
            break;
        case "ERROR_INVITE_CONTEXT_NOT_EXIST":
        case 82:
            message.code = 82;
            break;
        case "ERROR_INVITEE_NOT_YOU":
        case 83:
            message.code = 83;
            break;
        }
        if (object.Currency != null)
            message.Currency = Number(object.Currency);
        switch (object.paymentType) {
        default:
            if (typeof object.paymentType === "number") {
                message.paymentType = object.paymentType;
                break;
            }
            break;
        case "None":
        case 0:
            message.paymentType = 0;
            break;
        case "RtcVideo":
        case 1:
            message.paymentType = 1;
            break;
        case "RtcVoice":
        case 2:
            message.paymentType = 2;
            break;
        case "PlayAnimation":
        case 3:
            message.paymentType = 3;
            break;
        }
        if (object.unitPrice != null)
            message.unitPrice = Number(object.unitPrice);
        return message;
    };

    /**
     * Creates a plain object from a oQueryCurrencyPush message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oQueryCurrencyPush
     * @static
     * @param {oQueryCurrencyPush} message oQueryCurrencyPush
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    oQueryCurrencyPush.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.code = options.enums === String ? "UNKNOWN" : 0;
            object.Currency = 0;
            object.paymentType = options.enums === String ? "None" : 0;
            object.unitPrice = 0;
        }
        if (message.code != null && message.hasOwnProperty("code"))
            object.code = options.enums === String ? $root.eError[message.code] === undefined ? message.code : $root.eError[message.code] : message.code;
        if (message.Currency != null && message.hasOwnProperty("Currency"))
            object.Currency = options.json && !isFinite(message.Currency) ? String(message.Currency) : message.Currency;
        if (message.paymentType != null && message.hasOwnProperty("paymentType"))
            object.paymentType = options.enums === String ? $root.ePaymenType[message.paymentType] === undefined ? message.paymentType : $root.ePaymenType[message.paymentType] : message.paymentType;
        if (message.unitPrice != null && message.hasOwnProperty("unitPrice"))
            object.unitPrice = options.json && !isFinite(message.unitPrice) ? String(message.unitPrice) : message.unitPrice;
        return object;
    };

    /**
     * Converts this oQueryCurrencyPush to JSON.
     * @function toJSON
     * @memberof oQueryCurrencyPush
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    oQueryCurrencyPush.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for oQueryCurrencyPush
     * @function getTypeUrl
     * @memberof oQueryCurrencyPush
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    oQueryCurrencyPush.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/oQueryCurrencyPush";
    };

    return oQueryCurrencyPush;
})();

/**
 * eKickUserOutStageReason enum.
 * @exports eKickUserOutStageReason
 * @enum {number}
 * @property {number} Exit=0 Exit value
 * @property {number} OutOfCurrency=1 OutOfCurrency value
 */
$root.eKickUserOutStageReason = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "Exit"] = 0;
    values[valuesById[1] = "OutOfCurrency"] = 1;
    return values;
})();

$root.oKickUserOutStagePush = (function() {

    /**
     * Properties of a oKickUserOutStagePush.
     * @exports IoKickUserOutStagePush
     * @interface IoKickUserOutStagePush
     * @property {eKickUserOutStageReason|null} [kickReason] oKickUserOutStagePush kickReason
     * @property {number|Long|null} [userid] oKickUserOutStagePush userid
     * @property {number|null} [countdown] oKickUserOutStagePush countdown
     */

    /**
     * Constructs a new oKickUserOutStagePush.
     * @exports oKickUserOutStagePush
     * @classdesc Represents a oKickUserOutStagePush.
     * @implements IoKickUserOutStagePush
     * @constructor
     * @param {IoKickUserOutStagePush=} [properties] Properties to set
     */
    function oKickUserOutStagePush(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * oKickUserOutStagePush kickReason.
     * @member {eKickUserOutStageReason} kickReason
     * @memberof oKickUserOutStagePush
     * @instance
     */
    oKickUserOutStagePush.prototype.kickReason = 0;

    /**
     * oKickUserOutStagePush userid.
     * @member {number|Long} userid
     * @memberof oKickUserOutStagePush
     * @instance
     */
    oKickUserOutStagePush.prototype.userid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * oKickUserOutStagePush countdown.
     * @member {number} countdown
     * @memberof oKickUserOutStagePush
     * @instance
     */
    oKickUserOutStagePush.prototype.countdown = 0;

    /**
     * Creates a new oKickUserOutStagePush instance using the specified properties.
     * @function create
     * @memberof oKickUserOutStagePush
     * @static
     * @param {IoKickUserOutStagePush=} [properties] Properties to set
     * @returns {oKickUserOutStagePush} oKickUserOutStagePush instance
     */
    oKickUserOutStagePush.create = function create(properties) {
        return new oKickUserOutStagePush(properties);
    };

    /**
     * Encodes the specified oKickUserOutStagePush message. Does not implicitly {@link oKickUserOutStagePush.verify|verify} messages.
     * @function encode
     * @memberof oKickUserOutStagePush
     * @static
     * @param {IoKickUserOutStagePush} message oKickUserOutStagePush message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oKickUserOutStagePush.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.kickReason != null && Object.hasOwnProperty.call(message, "kickReason"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.kickReason);
        if (message.userid != null && Object.hasOwnProperty.call(message, "userid"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.userid);
        if (message.countdown != null && Object.hasOwnProperty.call(message, "countdown"))
            writer.uint32(/* id 4, wireType 5 =*/37).float(message.countdown);
        return writer;
    };

    /**
     * Encodes the specified oKickUserOutStagePush message, length delimited. Does not implicitly {@link oKickUserOutStagePush.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oKickUserOutStagePush
     * @static
     * @param {IoKickUserOutStagePush} message oKickUserOutStagePush message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oKickUserOutStagePush.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a oKickUserOutStagePush message from the specified reader or buffer.
     * @function decode
     * @memberof oKickUserOutStagePush
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oKickUserOutStagePush} oKickUserOutStagePush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oKickUserOutStagePush.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oKickUserOutStagePush();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.kickReason = reader.int32();
                    break;
                }
            case 2: {
                    message.userid = reader.uint64();
                    break;
                }
            case 4: {
                    message.countdown = reader.float();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a oKickUserOutStagePush message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oKickUserOutStagePush
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oKickUserOutStagePush} oKickUserOutStagePush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oKickUserOutStagePush.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a oKickUserOutStagePush message.
     * @function verify
     * @memberof oKickUserOutStagePush
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    oKickUserOutStagePush.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.kickReason != null && message.hasOwnProperty("kickReason"))
            switch (message.kickReason) {
            default:
                return "kickReason: enum value expected";
            case 0:
            case 1:
                break;
            }
        if (message.userid != null && message.hasOwnProperty("userid"))
            if (!$util.isInteger(message.userid) && !(message.userid && $util.isInteger(message.userid.low) && $util.isInteger(message.userid.high)))
                return "userid: integer|Long expected";
        if (message.countdown != null && message.hasOwnProperty("countdown"))
            if (typeof message.countdown !== "number")
                return "countdown: number expected";
        return null;
    };

    /**
     * Creates a oKickUserOutStagePush message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oKickUserOutStagePush
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oKickUserOutStagePush} oKickUserOutStagePush
     */
    oKickUserOutStagePush.fromObject = function fromObject(object) {
        if (object instanceof $root.oKickUserOutStagePush)
            return object;
        var message = new $root.oKickUserOutStagePush();
        switch (object.kickReason) {
        default:
            if (typeof object.kickReason === "number") {
                message.kickReason = object.kickReason;
                break;
            }
            break;
        case "Exit":
        case 0:
            message.kickReason = 0;
            break;
        case "OutOfCurrency":
        case 1:
            message.kickReason = 1;
            break;
        }
        if (object.userid != null)
            if ($util.Long)
                (message.userid = $util.Long.fromValue(object.userid)).unsigned = true;
            else if (typeof object.userid === "string")
                message.userid = parseInt(object.userid, 10);
            else if (typeof object.userid === "number")
                message.userid = object.userid;
            else if (typeof object.userid === "object")
                message.userid = new $util.LongBits(object.userid.low >>> 0, object.userid.high >>> 0).toNumber(true);
        if (object.countdown != null)
            message.countdown = Number(object.countdown);
        return message;
    };

    /**
     * Creates a plain object from a oKickUserOutStagePush message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oKickUserOutStagePush
     * @static
     * @param {oKickUserOutStagePush} message oKickUserOutStagePush
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    oKickUserOutStagePush.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.kickReason = options.enums === String ? "Exit" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.userid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.userid = options.longs === String ? "0" : 0;
            object.countdown = 0;
        }
        if (message.kickReason != null && message.hasOwnProperty("kickReason"))
            object.kickReason = options.enums === String ? $root.eKickUserOutStageReason[message.kickReason] === undefined ? message.kickReason : $root.eKickUserOutStageReason[message.kickReason] : message.kickReason;
        if (message.userid != null && message.hasOwnProperty("userid"))
            if (typeof message.userid === "number")
                object.userid = options.longs === String ? String(message.userid) : message.userid;
            else
                object.userid = options.longs === String ? $util.Long.prototype.toString.call(message.userid) : options.longs === Number ? new $util.LongBits(message.userid.low >>> 0, message.userid.high >>> 0).toNumber(true) : message.userid;
        if (message.countdown != null && message.hasOwnProperty("countdown"))
            object.countdown = options.json && !isFinite(message.countdown) ? String(message.countdown) : message.countdown;
        return object;
    };

    /**
     * Converts this oKickUserOutStagePush to JSON.
     * @function toJSON
     * @memberof oKickUserOutStagePush
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    oKickUserOutStagePush.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for oKickUserOutStagePush
     * @function getTypeUrl
     * @memberof oKickUserOutStagePush
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    oKickUserOutStagePush.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/oKickUserOutStagePush";
    };

    return oKickUserOutStagePush;
})();

$root.oChangeMapPush = (function() {

    /**
     * Properties of a oChangeMapPush.
     * @exports IoChangeMapPush
     * @interface IoChangeMapPush
     * @property {eError|null} [code] oChangeMapPush code
     * @property {string|null} [mapName] oChangeMapPush mapName
     */

    /**
     * Constructs a new oChangeMapPush.
     * @exports oChangeMapPush
     * @classdesc Represents a oChangeMapPush.
     * @implements IoChangeMapPush
     * @constructor
     * @param {IoChangeMapPush=} [properties] Properties to set
     */
    function oChangeMapPush(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * oChangeMapPush code.
     * @member {eError} code
     * @memberof oChangeMapPush
     * @instance
     */
    oChangeMapPush.prototype.code = 0;

    /**
     * oChangeMapPush mapName.
     * @member {string} mapName
     * @memberof oChangeMapPush
     * @instance
     */
    oChangeMapPush.prototype.mapName = "";

    /**
     * Creates a new oChangeMapPush instance using the specified properties.
     * @function create
     * @memberof oChangeMapPush
     * @static
     * @param {IoChangeMapPush=} [properties] Properties to set
     * @returns {oChangeMapPush} oChangeMapPush instance
     */
    oChangeMapPush.create = function create(properties) {
        return new oChangeMapPush(properties);
    };

    /**
     * Encodes the specified oChangeMapPush message. Does not implicitly {@link oChangeMapPush.verify|verify} messages.
     * @function encode
     * @memberof oChangeMapPush
     * @static
     * @param {IoChangeMapPush} message oChangeMapPush message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oChangeMapPush.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.code != null && Object.hasOwnProperty.call(message, "code"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
        if (message.mapName != null && Object.hasOwnProperty.call(message, "mapName"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.mapName);
        return writer;
    };

    /**
     * Encodes the specified oChangeMapPush message, length delimited. Does not implicitly {@link oChangeMapPush.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oChangeMapPush
     * @static
     * @param {IoChangeMapPush} message oChangeMapPush message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oChangeMapPush.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a oChangeMapPush message from the specified reader or buffer.
     * @function decode
     * @memberof oChangeMapPush
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oChangeMapPush} oChangeMapPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oChangeMapPush.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oChangeMapPush();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.code = reader.int32();
                    break;
                }
            case 2: {
                    message.mapName = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a oChangeMapPush message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oChangeMapPush
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oChangeMapPush} oChangeMapPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oChangeMapPush.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a oChangeMapPush message.
     * @function verify
     * @memberof oChangeMapPush
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    oChangeMapPush.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.code != null && message.hasOwnProperty("code"))
            switch (message.code) {
            default:
                return "code: enum value expected";
            case 0:
            case 1:
            case 2:
            case 41:
            case 42:
            case 43:
            case 44:
            case 51:
            case 52:
            case 53:
            case 61:
            case 62:
            case 63:
            case 64:
            case 65:
            case 71:
            case 72:
            case 73:
            case 74:
            case 75:
            case 76:
            case 77:
            case 80:
            case 81:
            case 82:
            case 83:
                break;
            }
        if (message.mapName != null && message.hasOwnProperty("mapName"))
            if (!$util.isString(message.mapName))
                return "mapName: string expected";
        return null;
    };

    /**
     * Creates a oChangeMapPush message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oChangeMapPush
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oChangeMapPush} oChangeMapPush
     */
    oChangeMapPush.fromObject = function fromObject(object) {
        if (object instanceof $root.oChangeMapPush)
            return object;
        var message = new $root.oChangeMapPush();
        switch (object.code) {
        default:
            if (typeof object.code === "number") {
                message.code = object.code;
                break;
            }
            break;
        case "UNKNOWN":
        case 0:
            message.code = 0;
            break;
        case "SUCCESS":
        case 1:
            message.code = 1;
            break;
        case "FAILD":
        case 2:
            message.code = 2;
            break;
        case "ERROR_REQ_PARAM":
        case 41:
            message.code = 41;
            break;
        case "ERROR_OTHER_ROOM_OPEN":
        case 42:
            message.code = 42;
            break;
        case "ERROR_CREATE_ROOM_FAIL":
        case 43:
            message.code = 43;
            break;
        case "ERROR_ENTER_ROOM_FAIL":
        case 44:
            message.code = 44;
            break;
        case "EMPTY_INS_TOKEN":
        case 51:
            message.code = 51;
            break;
        case "UNSET_INS_TOKEN":
        case 52:
            message.code = 52;
            break;
        case "ERROR_INS_TOKEN":
        case 53:
            message.code = 53;
            break;
        case "ERROR_APP_SERVER_CONNECT_FAIL":
        case 61:
            message.code = 61;
            break;
        case "ERROR_APP_SERVER_RET_NOT_200":
        case 62:
            message.code = 62;
            break;
        case "ERROR_APP_SERVER_RET_NOT_JSON":
        case 63:
            message.code = 63;
            break;
        case "ERROR_APP_SERVER_RET_AUTH_FAIL":
        case 64:
            message.code = 64;
            break;
        case "ERROR_APP_SERVER_RET_CODE_FAIL":
        case 65:
            message.code = 65;
            break;
        case "ERROR_NO_ROOM":
        case 71:
            message.code = 71;
            break;
        case "ERROR_NOT_IN_ROOM":
        case 72:
            message.code = 72;
            break;
        case "ERROR_ALREADY_IN_STAGE":
        case 73:
            message.code = 73;
            break;
        case "ERROR_ALREADY_IN_QUEUE":
        case 74:
            message.code = 74;
            break;
        case "ERROR_ENTER_STAGE_FAIL":
        case 75:
            message.code = 75;
            break;
        case "ERROR_ENTER_STAGE_TIMEOUT":
        case 76:
            message.code = 76;
            break;
        case "ERROR_NOT_IN_STAGE":
        case 77:
            message.code = 77;
            break;
        case "ERROR_INVITER_NOT_IN_UE":
        case 80:
            message.code = 80;
            break;
        case "ERROR_INVITEE_NOT_IN_STAGE":
        case 81:
            message.code = 81;
            break;
        case "ERROR_INVITE_CONTEXT_NOT_EXIST":
        case 82:
            message.code = 82;
            break;
        case "ERROR_INVITEE_NOT_YOU":
        case 83:
            message.code = 83;
            break;
        }
        if (object.mapName != null)
            message.mapName = String(object.mapName);
        return message;
    };

    /**
     * Creates a plain object from a oChangeMapPush message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oChangeMapPush
     * @static
     * @param {oChangeMapPush} message oChangeMapPush
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    oChangeMapPush.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.code = options.enums === String ? "UNKNOWN" : 0;
            object.mapName = "";
        }
        if (message.code != null && message.hasOwnProperty("code"))
            object.code = options.enums === String ? $root.eError[message.code] === undefined ? message.code : $root.eError[message.code] : message.code;
        if (message.mapName != null && message.hasOwnProperty("mapName"))
            object.mapName = message.mapName;
        return object;
    };

    /**
     * Converts this oChangeMapPush to JSON.
     * @function toJSON
     * @memberof oChangeMapPush
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    oChangeMapPush.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for oChangeMapPush
     * @function getTypeUrl
     * @memberof oChangeMapPush
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    oChangeMapPush.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/oChangeMapPush";
    };

    return oChangeMapPush;
})();

$root.oGarment = (function() {

    /**
     * Properties of a oGarment.
     * @exports IoGarment
     * @interface IoGarment
     * @property {number|Long|null} [id] oGarment id
     * @property {string|null} [name] oGarment name
     * @property {string|null} [icon] oGarment icon
     */

    /**
     * Constructs a new oGarment.
     * @exports oGarment
     * @classdesc Represents a oGarment.
     * @implements IoGarment
     * @constructor
     * @param {IoGarment=} [properties] Properties to set
     */
    function oGarment(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * oGarment id.
     * @member {number|Long} id
     * @memberof oGarment
     * @instance
     */
    oGarment.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * oGarment name.
     * @member {string} name
     * @memberof oGarment
     * @instance
     */
    oGarment.prototype.name = "";

    /**
     * oGarment icon.
     * @member {string} icon
     * @memberof oGarment
     * @instance
     */
    oGarment.prototype.icon = "";

    /**
     * Creates a new oGarment instance using the specified properties.
     * @function create
     * @memberof oGarment
     * @static
     * @param {IoGarment=} [properties] Properties to set
     * @returns {oGarment} oGarment instance
     */
    oGarment.create = function create(properties) {
        return new oGarment(properties);
    };

    /**
     * Encodes the specified oGarment message. Does not implicitly {@link oGarment.verify|verify} messages.
     * @function encode
     * @memberof oGarment
     * @static
     * @param {IoGarment} message oGarment message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oGarment.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
        if (message.icon != null && Object.hasOwnProperty.call(message, "icon"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.icon);
        return writer;
    };

    /**
     * Encodes the specified oGarment message, length delimited. Does not implicitly {@link oGarment.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oGarment
     * @static
     * @param {IoGarment} message oGarment message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oGarment.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a oGarment message from the specified reader or buffer.
     * @function decode
     * @memberof oGarment
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oGarment} oGarment
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oGarment.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oGarment();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.id = reader.int64();
                    break;
                }
            case 2: {
                    message.name = reader.string();
                    break;
                }
            case 3: {
                    message.icon = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a oGarment message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oGarment
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oGarment} oGarment
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oGarment.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a oGarment message.
     * @function verify
     * @memberof oGarment
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    oGarment.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                return "id: integer|Long expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.icon != null && message.hasOwnProperty("icon"))
            if (!$util.isString(message.icon))
                return "icon: string expected";
        return null;
    };

    /**
     * Creates a oGarment message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oGarment
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oGarment} oGarment
     */
    oGarment.fromObject = function fromObject(object) {
        if (object instanceof $root.oGarment)
            return object;
        var message = new $root.oGarment();
        if (object.id != null)
            if ($util.Long)
                (message.id = $util.Long.fromValue(object.id)).unsigned = false;
            else if (typeof object.id === "string")
                message.id = parseInt(object.id, 10);
            else if (typeof object.id === "number")
                message.id = object.id;
            else if (typeof object.id === "object")
                message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
        if (object.name != null)
            message.name = String(object.name);
        if (object.icon != null)
            message.icon = String(object.icon);
        return message;
    };

    /**
     * Creates a plain object from a oGarment message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oGarment
     * @static
     * @param {oGarment} message oGarment
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    oGarment.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.id = options.longs === String ? "0" : 0;
            object.name = "";
            object.icon = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            if (typeof message.id === "number")
                object.id = options.longs === String ? String(message.id) : message.id;
            else
                object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.icon != null && message.hasOwnProperty("icon"))
            object.icon = message.icon;
        return object;
    };

    /**
     * Converts this oGarment to JSON.
     * @function toJSON
     * @memberof oGarment
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    oGarment.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for oGarment
     * @function getTypeUrl
     * @memberof oGarment
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    oGarment.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/oGarment";
    };

    return oGarment;
})();

$root.oChangeGarmentPush = (function() {

    /**
     * Properties of a oChangeGarmentPush.
     * @exports IoChangeGarmentPush
     * @interface IoChangeGarmentPush
     * @property {eError|null} [code] oChangeGarmentPush code
     * @property {IoGarment|null} [garment1] oChangeGarmentPush garment1
     * @property {IoGarment|null} [garment2] oChangeGarmentPush garment2
     * @property {IoGarment|null} [garment3] oChangeGarmentPush garment3
     */

    /**
     * Constructs a new oChangeGarmentPush.
     * @exports oChangeGarmentPush
     * @classdesc Represents a oChangeGarmentPush.
     * @implements IoChangeGarmentPush
     * @constructor
     * @param {IoChangeGarmentPush=} [properties] Properties to set
     */
    function oChangeGarmentPush(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * oChangeGarmentPush code.
     * @member {eError} code
     * @memberof oChangeGarmentPush
     * @instance
     */
    oChangeGarmentPush.prototype.code = 0;

    /**
     * oChangeGarmentPush garment1.
     * @member {IoGarment|null|undefined} garment1
     * @memberof oChangeGarmentPush
     * @instance
     */
    oChangeGarmentPush.prototype.garment1 = null;

    /**
     * oChangeGarmentPush garment2.
     * @member {IoGarment|null|undefined} garment2
     * @memberof oChangeGarmentPush
     * @instance
     */
    oChangeGarmentPush.prototype.garment2 = null;

    /**
     * oChangeGarmentPush garment3.
     * @member {IoGarment|null|undefined} garment3
     * @memberof oChangeGarmentPush
     * @instance
     */
    oChangeGarmentPush.prototype.garment3 = null;

    /**
     * Creates a new oChangeGarmentPush instance using the specified properties.
     * @function create
     * @memberof oChangeGarmentPush
     * @static
     * @param {IoChangeGarmentPush=} [properties] Properties to set
     * @returns {oChangeGarmentPush} oChangeGarmentPush instance
     */
    oChangeGarmentPush.create = function create(properties) {
        return new oChangeGarmentPush(properties);
    };

    /**
     * Encodes the specified oChangeGarmentPush message. Does not implicitly {@link oChangeGarmentPush.verify|verify} messages.
     * @function encode
     * @memberof oChangeGarmentPush
     * @static
     * @param {IoChangeGarmentPush} message oChangeGarmentPush message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oChangeGarmentPush.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.code != null && Object.hasOwnProperty.call(message, "code"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
        if (message.garment1 != null && Object.hasOwnProperty.call(message, "garment1"))
            $root.oGarment.encode(message.garment1, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.garment2 != null && Object.hasOwnProperty.call(message, "garment2"))
            $root.oGarment.encode(message.garment2, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.garment3 != null && Object.hasOwnProperty.call(message, "garment3"))
            $root.oGarment.encode(message.garment3, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified oChangeGarmentPush message, length delimited. Does not implicitly {@link oChangeGarmentPush.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oChangeGarmentPush
     * @static
     * @param {IoChangeGarmentPush} message oChangeGarmentPush message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oChangeGarmentPush.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a oChangeGarmentPush message from the specified reader or buffer.
     * @function decode
     * @memberof oChangeGarmentPush
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oChangeGarmentPush} oChangeGarmentPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oChangeGarmentPush.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oChangeGarmentPush();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.code = reader.int32();
                    break;
                }
            case 2: {
                    message.garment1 = $root.oGarment.decode(reader, reader.uint32());
                    break;
                }
            case 3: {
                    message.garment2 = $root.oGarment.decode(reader, reader.uint32());
                    break;
                }
            case 4: {
                    message.garment3 = $root.oGarment.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a oChangeGarmentPush message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oChangeGarmentPush
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oChangeGarmentPush} oChangeGarmentPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oChangeGarmentPush.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a oChangeGarmentPush message.
     * @function verify
     * @memberof oChangeGarmentPush
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    oChangeGarmentPush.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.code != null && message.hasOwnProperty("code"))
            switch (message.code) {
            default:
                return "code: enum value expected";
            case 0:
            case 1:
            case 2:
            case 41:
            case 42:
            case 43:
            case 44:
            case 51:
            case 52:
            case 53:
            case 61:
            case 62:
            case 63:
            case 64:
            case 65:
            case 71:
            case 72:
            case 73:
            case 74:
            case 75:
            case 76:
            case 77:
            case 80:
            case 81:
            case 82:
            case 83:
                break;
            }
        if (message.garment1 != null && message.hasOwnProperty("garment1")) {
            var error = $root.oGarment.verify(message.garment1);
            if (error)
                return "garment1." + error;
        }
        if (message.garment2 != null && message.hasOwnProperty("garment2")) {
            var error = $root.oGarment.verify(message.garment2);
            if (error)
                return "garment2." + error;
        }
        if (message.garment3 != null && message.hasOwnProperty("garment3")) {
            var error = $root.oGarment.verify(message.garment3);
            if (error)
                return "garment3." + error;
        }
        return null;
    };

    /**
     * Creates a oChangeGarmentPush message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oChangeGarmentPush
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oChangeGarmentPush} oChangeGarmentPush
     */
    oChangeGarmentPush.fromObject = function fromObject(object) {
        if (object instanceof $root.oChangeGarmentPush)
            return object;
        var message = new $root.oChangeGarmentPush();
        switch (object.code) {
        default:
            if (typeof object.code === "number") {
                message.code = object.code;
                break;
            }
            break;
        case "UNKNOWN":
        case 0:
            message.code = 0;
            break;
        case "SUCCESS":
        case 1:
            message.code = 1;
            break;
        case "FAILD":
        case 2:
            message.code = 2;
            break;
        case "ERROR_REQ_PARAM":
        case 41:
            message.code = 41;
            break;
        case "ERROR_OTHER_ROOM_OPEN":
        case 42:
            message.code = 42;
            break;
        case "ERROR_CREATE_ROOM_FAIL":
        case 43:
            message.code = 43;
            break;
        case "ERROR_ENTER_ROOM_FAIL":
        case 44:
            message.code = 44;
            break;
        case "EMPTY_INS_TOKEN":
        case 51:
            message.code = 51;
            break;
        case "UNSET_INS_TOKEN":
        case 52:
            message.code = 52;
            break;
        case "ERROR_INS_TOKEN":
        case 53:
            message.code = 53;
            break;
        case "ERROR_APP_SERVER_CONNECT_FAIL":
        case 61:
            message.code = 61;
            break;
        case "ERROR_APP_SERVER_RET_NOT_200":
        case 62:
            message.code = 62;
            break;
        case "ERROR_APP_SERVER_RET_NOT_JSON":
        case 63:
            message.code = 63;
            break;
        case "ERROR_APP_SERVER_RET_AUTH_FAIL":
        case 64:
            message.code = 64;
            break;
        case "ERROR_APP_SERVER_RET_CODE_FAIL":
        case 65:
            message.code = 65;
            break;
        case "ERROR_NO_ROOM":
        case 71:
            message.code = 71;
            break;
        case "ERROR_NOT_IN_ROOM":
        case 72:
            message.code = 72;
            break;
        case "ERROR_ALREADY_IN_STAGE":
        case 73:
            message.code = 73;
            break;
        case "ERROR_ALREADY_IN_QUEUE":
        case 74:
            message.code = 74;
            break;
        case "ERROR_ENTER_STAGE_FAIL":
        case 75:
            message.code = 75;
            break;
        case "ERROR_ENTER_STAGE_TIMEOUT":
        case 76:
            message.code = 76;
            break;
        case "ERROR_NOT_IN_STAGE":
        case 77:
            message.code = 77;
            break;
        case "ERROR_INVITER_NOT_IN_UE":
        case 80:
            message.code = 80;
            break;
        case "ERROR_INVITEE_NOT_IN_STAGE":
        case 81:
            message.code = 81;
            break;
        case "ERROR_INVITE_CONTEXT_NOT_EXIST":
        case 82:
            message.code = 82;
            break;
        case "ERROR_INVITEE_NOT_YOU":
        case 83:
            message.code = 83;
            break;
        }
        if (object.garment1 != null) {
            if (typeof object.garment1 !== "object")
                throw TypeError(".oChangeGarmentPush.garment1: object expected");
            message.garment1 = $root.oGarment.fromObject(object.garment1);
        }
        if (object.garment2 != null) {
            if (typeof object.garment2 !== "object")
                throw TypeError(".oChangeGarmentPush.garment2: object expected");
            message.garment2 = $root.oGarment.fromObject(object.garment2);
        }
        if (object.garment3 != null) {
            if (typeof object.garment3 !== "object")
                throw TypeError(".oChangeGarmentPush.garment3: object expected");
            message.garment3 = $root.oGarment.fromObject(object.garment3);
        }
        return message;
    };

    /**
     * Creates a plain object from a oChangeGarmentPush message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oChangeGarmentPush
     * @static
     * @param {oChangeGarmentPush} message oChangeGarmentPush
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    oChangeGarmentPush.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.code = options.enums === String ? "UNKNOWN" : 0;
            object.garment1 = null;
            object.garment2 = null;
            object.garment3 = null;
        }
        if (message.code != null && message.hasOwnProperty("code"))
            object.code = options.enums === String ? $root.eError[message.code] === undefined ? message.code : $root.eError[message.code] : message.code;
        if (message.garment1 != null && message.hasOwnProperty("garment1"))
            object.garment1 = $root.oGarment.toObject(message.garment1, options);
        if (message.garment2 != null && message.hasOwnProperty("garment2"))
            object.garment2 = $root.oGarment.toObject(message.garment2, options);
        if (message.garment3 != null && message.hasOwnProperty("garment3"))
            object.garment3 = $root.oGarment.toObject(message.garment3, options);
        return object;
    };

    /**
     * Converts this oChangeGarmentPush to JSON.
     * @function toJSON
     * @memberof oChangeGarmentPush
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    oChangeGarmentPush.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for oChangeGarmentPush
     * @function getTypeUrl
     * @memberof oChangeGarmentPush
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    oChangeGarmentPush.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/oChangeGarmentPush";
    };

    return oChangeGarmentPush;
})();

$root.oLatencyReq = (function() {

    /**
     * Properties of a oLatencyReq.
     * @exports IoLatencyReq
     * @interface IoLatencyReq
     * @property {number|Long|null} [timestamp] oLatencyReq timestamp
     */

    /**
     * Constructs a new oLatencyReq.
     * @exports oLatencyReq
     * @classdesc Represents a oLatencyReq.
     * @implements IoLatencyReq
     * @constructor
     * @param {IoLatencyReq=} [properties] Properties to set
     */
    function oLatencyReq(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * oLatencyReq timestamp.
     * @member {number|Long} timestamp
     * @memberof oLatencyReq
     * @instance
     */
    oLatencyReq.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Creates a new oLatencyReq instance using the specified properties.
     * @function create
     * @memberof oLatencyReq
     * @static
     * @param {IoLatencyReq=} [properties] Properties to set
     * @returns {oLatencyReq} oLatencyReq instance
     */
    oLatencyReq.create = function create(properties) {
        return new oLatencyReq(properties);
    };

    /**
     * Encodes the specified oLatencyReq message. Does not implicitly {@link oLatencyReq.verify|verify} messages.
     * @function encode
     * @memberof oLatencyReq
     * @static
     * @param {IoLatencyReq} message oLatencyReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oLatencyReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.timestamp);
        return writer;
    };

    /**
     * Encodes the specified oLatencyReq message, length delimited. Does not implicitly {@link oLatencyReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oLatencyReq
     * @static
     * @param {IoLatencyReq} message oLatencyReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oLatencyReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a oLatencyReq message from the specified reader or buffer.
     * @function decode
     * @memberof oLatencyReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oLatencyReq} oLatencyReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oLatencyReq.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oLatencyReq();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.timestamp = reader.uint64();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a oLatencyReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oLatencyReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oLatencyReq} oLatencyReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oLatencyReq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a oLatencyReq message.
     * @function verify
     * @memberof oLatencyReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    oLatencyReq.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                return "timestamp: integer|Long expected";
        return null;
    };

    /**
     * Creates a oLatencyReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oLatencyReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oLatencyReq} oLatencyReq
     */
    oLatencyReq.fromObject = function fromObject(object) {
        if (object instanceof $root.oLatencyReq)
            return object;
        var message = new $root.oLatencyReq();
        if (object.timestamp != null)
            if ($util.Long)
                (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = true;
            else if (typeof object.timestamp === "string")
                message.timestamp = parseInt(object.timestamp, 10);
            else if (typeof object.timestamp === "number")
                message.timestamp = object.timestamp;
            else if (typeof object.timestamp === "object")
                message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber(true);
        return message;
    };

    /**
     * Creates a plain object from a oLatencyReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oLatencyReq
     * @static
     * @param {oLatencyReq} message oLatencyReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    oLatencyReq.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.timestamp = options.longs === String ? "0" : 0;
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            if (typeof message.timestamp === "number")
                object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
            else
                object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber(true) : message.timestamp;
        return object;
    };

    /**
     * Converts this oLatencyReq to JSON.
     * @function toJSON
     * @memberof oLatencyReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    oLatencyReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for oLatencyReq
     * @function getTypeUrl
     * @memberof oLatencyReq
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    oLatencyReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/oLatencyReq";
    };

    return oLatencyReq;
})();

$root.oLatencyPush = (function() {

    /**
     * Properties of a oLatencyPush.
     * @exports IoLatencyPush
     * @interface IoLatencyPush
     * @property {number|Long|null} [timestamp] oLatencyPush timestamp
     */

    /**
     * Constructs a new oLatencyPush.
     * @exports oLatencyPush
     * @classdesc Represents a oLatencyPush.
     * @implements IoLatencyPush
     * @constructor
     * @param {IoLatencyPush=} [properties] Properties to set
     */
    function oLatencyPush(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * oLatencyPush timestamp.
     * @member {number|Long} timestamp
     * @memberof oLatencyPush
     * @instance
     */
    oLatencyPush.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Creates a new oLatencyPush instance using the specified properties.
     * @function create
     * @memberof oLatencyPush
     * @static
     * @param {IoLatencyPush=} [properties] Properties to set
     * @returns {oLatencyPush} oLatencyPush instance
     */
    oLatencyPush.create = function create(properties) {
        return new oLatencyPush(properties);
    };

    /**
     * Encodes the specified oLatencyPush message. Does not implicitly {@link oLatencyPush.verify|verify} messages.
     * @function encode
     * @memberof oLatencyPush
     * @static
     * @param {IoLatencyPush} message oLatencyPush message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oLatencyPush.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.timestamp);
        return writer;
    };

    /**
     * Encodes the specified oLatencyPush message, length delimited. Does not implicitly {@link oLatencyPush.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oLatencyPush
     * @static
     * @param {IoLatencyPush} message oLatencyPush message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oLatencyPush.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a oLatencyPush message from the specified reader or buffer.
     * @function decode
     * @memberof oLatencyPush
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oLatencyPush} oLatencyPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oLatencyPush.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oLatencyPush();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.timestamp = reader.uint64();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a oLatencyPush message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oLatencyPush
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oLatencyPush} oLatencyPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oLatencyPush.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a oLatencyPush message.
     * @function verify
     * @memberof oLatencyPush
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    oLatencyPush.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                return "timestamp: integer|Long expected";
        return null;
    };

    /**
     * Creates a oLatencyPush message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oLatencyPush
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oLatencyPush} oLatencyPush
     */
    oLatencyPush.fromObject = function fromObject(object) {
        if (object instanceof $root.oLatencyPush)
            return object;
        var message = new $root.oLatencyPush();
        if (object.timestamp != null)
            if ($util.Long)
                (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = true;
            else if (typeof object.timestamp === "string")
                message.timestamp = parseInt(object.timestamp, 10);
            else if (typeof object.timestamp === "number")
                message.timestamp = object.timestamp;
            else if (typeof object.timestamp === "object")
                message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber(true);
        return message;
    };

    /**
     * Creates a plain object from a oLatencyPush message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oLatencyPush
     * @static
     * @param {oLatencyPush} message oLatencyPush
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    oLatencyPush.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.timestamp = options.longs === String ? "0" : 0;
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            if (typeof message.timestamp === "number")
                object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
            else
                object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber(true) : message.timestamp;
        return object;
    };

    /**
     * Converts this oLatencyPush to JSON.
     * @function toJSON
     * @memberof oLatencyPush
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    oLatencyPush.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for oLatencyPush
     * @function getTypeUrl
     * @memberof oLatencyPush
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    oLatencyPush.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/oLatencyPush";
    };

    return oLatencyPush;
})();

/**
 * eTouchType enum.
 * @exports eTouchType
 * @enum {number}
 * @property {number} click=0 click value
 * @property {number} rotate=1 rotate value
 * @property {number} scale=2 scale value
 */
$root.eTouchType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "click"] = 0;
    values[valuesById[1] = "rotate"] = 1;
    values[valuesById[2] = "scale"] = 2;
    return values;
})();

$root.oVector3 = (function() {

    /**
     * Properties of a oVector3.
     * @exports IoVector3
     * @interface IoVector3
     * @property {number|null} [x] oVector3 x
     * @property {number|null} [y] oVector3 y
     * @property {number|null} [z] oVector3 z
     */

    /**
     * Constructs a new oVector3.
     * @exports oVector3
     * @classdesc Represents a oVector3.
     * @implements IoVector3
     * @constructor
     * @param {IoVector3=} [properties] Properties to set
     */
    function oVector3(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * oVector3 x.
     * @member {number} x
     * @memberof oVector3
     * @instance
     */
    oVector3.prototype.x = 0;

    /**
     * oVector3 y.
     * @member {number} y
     * @memberof oVector3
     * @instance
     */
    oVector3.prototype.y = 0;

    /**
     * oVector3 z.
     * @member {number} z
     * @memberof oVector3
     * @instance
     */
    oVector3.prototype.z = 0;

    /**
     * Creates a new oVector3 instance using the specified properties.
     * @function create
     * @memberof oVector3
     * @static
     * @param {IoVector3=} [properties] Properties to set
     * @returns {oVector3} oVector3 instance
     */
    oVector3.create = function create(properties) {
        return new oVector3(properties);
    };

    /**
     * Encodes the specified oVector3 message. Does not implicitly {@link oVector3.verify|verify} messages.
     * @function encode
     * @memberof oVector3
     * @static
     * @param {IoVector3} message oVector3 message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oVector3.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.x != null && Object.hasOwnProperty.call(message, "x"))
            writer.uint32(/* id 1, wireType 5 =*/13).float(message.x);
        if (message.y != null && Object.hasOwnProperty.call(message, "y"))
            writer.uint32(/* id 2, wireType 5 =*/21).float(message.y);
        if (message.z != null && Object.hasOwnProperty.call(message, "z"))
            writer.uint32(/* id 3, wireType 5 =*/29).float(message.z);
        return writer;
    };

    /**
     * Encodes the specified oVector3 message, length delimited. Does not implicitly {@link oVector3.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oVector3
     * @static
     * @param {IoVector3} message oVector3 message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oVector3.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a oVector3 message from the specified reader or buffer.
     * @function decode
     * @memberof oVector3
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oVector3} oVector3
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oVector3.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oVector3();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.x = reader.float();
                    break;
                }
            case 2: {
                    message.y = reader.float();
                    break;
                }
            case 3: {
                    message.z = reader.float();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a oVector3 message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oVector3
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oVector3} oVector3
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oVector3.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a oVector3 message.
     * @function verify
     * @memberof oVector3
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    oVector3.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.x != null && message.hasOwnProperty("x"))
            if (typeof message.x !== "number")
                return "x: number expected";
        if (message.y != null && message.hasOwnProperty("y"))
            if (typeof message.y !== "number")
                return "y: number expected";
        if (message.z != null && message.hasOwnProperty("z"))
            if (typeof message.z !== "number")
                return "z: number expected";
        return null;
    };

    /**
     * Creates a oVector3 message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oVector3
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oVector3} oVector3
     */
    oVector3.fromObject = function fromObject(object) {
        if (object instanceof $root.oVector3)
            return object;
        var message = new $root.oVector3();
        if (object.x != null)
            message.x = Number(object.x);
        if (object.y != null)
            message.y = Number(object.y);
        if (object.z != null)
            message.z = Number(object.z);
        return message;
    };

    /**
     * Creates a plain object from a oVector3 message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oVector3
     * @static
     * @param {oVector3} message oVector3
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    oVector3.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.x = 0;
            object.y = 0;
            object.z = 0;
        }
        if (message.x != null && message.hasOwnProperty("x"))
            object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
        if (message.y != null && message.hasOwnProperty("y"))
            object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
        if (message.z != null && message.hasOwnProperty("z"))
            object.z = options.json && !isFinite(message.z) ? String(message.z) : message.z;
        return object;
    };

    /**
     * Converts this oVector3 to JSON.
     * @function toJSON
     * @memberof oVector3
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    oVector3.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for oVector3
     * @function getTypeUrl
     * @memberof oVector3
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    oVector3.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/oVector3";
    };

    return oVector3;
})();

$root.oTouchScreenReq = (function() {

    /**
     * Properties of a oTouchScreenReq.
     * @exports IoTouchScreenReq
     * @interface IoTouchScreenReq
     * @property {eTouchType|null} [touchType] oTouchScreenReq touchType
     * @property {IoVector3|null} [pos] oTouchScreenReq pos
     * @property {number|Long|null} [timestamp] oTouchScreenReq timestamp
     */

    /**
     * Constructs a new oTouchScreenReq.
     * @exports oTouchScreenReq
     * @classdesc Represents a oTouchScreenReq.
     * @implements IoTouchScreenReq
     * @constructor
     * @param {IoTouchScreenReq=} [properties] Properties to set
     */
    function oTouchScreenReq(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * oTouchScreenReq touchType.
     * @member {eTouchType} touchType
     * @memberof oTouchScreenReq
     * @instance
     */
    oTouchScreenReq.prototype.touchType = 0;

    /**
     * oTouchScreenReq pos.
     * @member {IoVector3|null|undefined} pos
     * @memberof oTouchScreenReq
     * @instance
     */
    oTouchScreenReq.prototype.pos = null;

    /**
     * oTouchScreenReq timestamp.
     * @member {number|Long} timestamp
     * @memberof oTouchScreenReq
     * @instance
     */
    oTouchScreenReq.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Creates a new oTouchScreenReq instance using the specified properties.
     * @function create
     * @memberof oTouchScreenReq
     * @static
     * @param {IoTouchScreenReq=} [properties] Properties to set
     * @returns {oTouchScreenReq} oTouchScreenReq instance
     */
    oTouchScreenReq.create = function create(properties) {
        return new oTouchScreenReq(properties);
    };

    /**
     * Encodes the specified oTouchScreenReq message. Does not implicitly {@link oTouchScreenReq.verify|verify} messages.
     * @function encode
     * @memberof oTouchScreenReq
     * @static
     * @param {IoTouchScreenReq} message oTouchScreenReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oTouchScreenReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.touchType != null && Object.hasOwnProperty.call(message, "touchType"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.touchType);
        if (message.pos != null && Object.hasOwnProperty.call(message, "pos"))
            $root.oVector3.encode(message.pos, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.timestamp);
        return writer;
    };

    /**
     * Encodes the specified oTouchScreenReq message, length delimited. Does not implicitly {@link oTouchScreenReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oTouchScreenReq
     * @static
     * @param {IoTouchScreenReq} message oTouchScreenReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oTouchScreenReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a oTouchScreenReq message from the specified reader or buffer.
     * @function decode
     * @memberof oTouchScreenReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oTouchScreenReq} oTouchScreenReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oTouchScreenReq.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oTouchScreenReq();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.touchType = reader.int32();
                    break;
                }
            case 2: {
                    message.pos = $root.oVector3.decode(reader, reader.uint32());
                    break;
                }
            case 3: {
                    message.timestamp = reader.uint64();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a oTouchScreenReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oTouchScreenReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oTouchScreenReq} oTouchScreenReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oTouchScreenReq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a oTouchScreenReq message.
     * @function verify
     * @memberof oTouchScreenReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    oTouchScreenReq.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.touchType != null && message.hasOwnProperty("touchType"))
            switch (message.touchType) {
            default:
                return "touchType: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
        if (message.pos != null && message.hasOwnProperty("pos")) {
            var error = $root.oVector3.verify(message.pos);
            if (error)
                return "pos." + error;
        }
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                return "timestamp: integer|Long expected";
        return null;
    };

    /**
     * Creates a oTouchScreenReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oTouchScreenReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oTouchScreenReq} oTouchScreenReq
     */
    oTouchScreenReq.fromObject = function fromObject(object) {
        if (object instanceof $root.oTouchScreenReq)
            return object;
        var message = new $root.oTouchScreenReq();
        switch (object.touchType) {
        default:
            if (typeof object.touchType === "number") {
                message.touchType = object.touchType;
                break;
            }
            break;
        case "click":
        case 0:
            message.touchType = 0;
            break;
        case "rotate":
        case 1:
            message.touchType = 1;
            break;
        case "scale":
        case 2:
            message.touchType = 2;
            break;
        }
        if (object.pos != null) {
            if (typeof object.pos !== "object")
                throw TypeError(".oTouchScreenReq.pos: object expected");
            message.pos = $root.oVector3.fromObject(object.pos);
        }
        if (object.timestamp != null)
            if ($util.Long)
                (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = true;
            else if (typeof object.timestamp === "string")
                message.timestamp = parseInt(object.timestamp, 10);
            else if (typeof object.timestamp === "number")
                message.timestamp = object.timestamp;
            else if (typeof object.timestamp === "object")
                message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber(true);
        return message;
    };

    /**
     * Creates a plain object from a oTouchScreenReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oTouchScreenReq
     * @static
     * @param {oTouchScreenReq} message oTouchScreenReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    oTouchScreenReq.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.touchType = options.enums === String ? "click" : 0;
            object.pos = null;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.timestamp = options.longs === String ? "0" : 0;
        }
        if (message.touchType != null && message.hasOwnProperty("touchType"))
            object.touchType = options.enums === String ? $root.eTouchType[message.touchType] === undefined ? message.touchType : $root.eTouchType[message.touchType] : message.touchType;
        if (message.pos != null && message.hasOwnProperty("pos"))
            object.pos = $root.oVector3.toObject(message.pos, options);
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            if (typeof message.timestamp === "number")
                object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
            else
                object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber(true) : message.timestamp;
        return object;
    };

    /**
     * Converts this oTouchScreenReq to JSON.
     * @function toJSON
     * @memberof oTouchScreenReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    oTouchScreenReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for oTouchScreenReq
     * @function getTypeUrl
     * @memberof oTouchScreenReq
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    oTouchScreenReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/oTouchScreenReq";
    };

    return oTouchScreenReq;
})();

$root.oTouchScreenPush = (function() {

    /**
     * Properties of a oTouchScreenPush.
     * @exports IoTouchScreenPush
     * @interface IoTouchScreenPush
     * @property {number|Long|null} [timestamp] oTouchScreenPush timestamp
     * @property {number|null} [latency] oTouchScreenPush latency
     */

    /**
     * Constructs a new oTouchScreenPush.
     * @exports oTouchScreenPush
     * @classdesc Represents a oTouchScreenPush.
     * @implements IoTouchScreenPush
     * @constructor
     * @param {IoTouchScreenPush=} [properties] Properties to set
     */
    function oTouchScreenPush(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * oTouchScreenPush timestamp.
     * @member {number|Long} timestamp
     * @memberof oTouchScreenPush
     * @instance
     */
    oTouchScreenPush.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * oTouchScreenPush latency.
     * @member {number} latency
     * @memberof oTouchScreenPush
     * @instance
     */
    oTouchScreenPush.prototype.latency = 0;

    /**
     * Creates a new oTouchScreenPush instance using the specified properties.
     * @function create
     * @memberof oTouchScreenPush
     * @static
     * @param {IoTouchScreenPush=} [properties] Properties to set
     * @returns {oTouchScreenPush} oTouchScreenPush instance
     */
    oTouchScreenPush.create = function create(properties) {
        return new oTouchScreenPush(properties);
    };

    /**
     * Encodes the specified oTouchScreenPush message. Does not implicitly {@link oTouchScreenPush.verify|verify} messages.
     * @function encode
     * @memberof oTouchScreenPush
     * @static
     * @param {IoTouchScreenPush} message oTouchScreenPush message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oTouchScreenPush.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.timestamp);
        if (message.latency != null && Object.hasOwnProperty.call(message, "latency"))
            writer.uint32(/* id 2, wireType 5 =*/21).float(message.latency);
        return writer;
    };

    /**
     * Encodes the specified oTouchScreenPush message, length delimited. Does not implicitly {@link oTouchScreenPush.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oTouchScreenPush
     * @static
     * @param {IoTouchScreenPush} message oTouchScreenPush message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oTouchScreenPush.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a oTouchScreenPush message from the specified reader or buffer.
     * @function decode
     * @memberof oTouchScreenPush
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oTouchScreenPush} oTouchScreenPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oTouchScreenPush.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oTouchScreenPush();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.timestamp = reader.uint64();
                    break;
                }
            case 2: {
                    message.latency = reader.float();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a oTouchScreenPush message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oTouchScreenPush
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oTouchScreenPush} oTouchScreenPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oTouchScreenPush.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a oTouchScreenPush message.
     * @function verify
     * @memberof oTouchScreenPush
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    oTouchScreenPush.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                return "timestamp: integer|Long expected";
        if (message.latency != null && message.hasOwnProperty("latency"))
            if (typeof message.latency !== "number")
                return "latency: number expected";
        return null;
    };

    /**
     * Creates a oTouchScreenPush message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oTouchScreenPush
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oTouchScreenPush} oTouchScreenPush
     */
    oTouchScreenPush.fromObject = function fromObject(object) {
        if (object instanceof $root.oTouchScreenPush)
            return object;
        var message = new $root.oTouchScreenPush();
        if (object.timestamp != null)
            if ($util.Long)
                (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = true;
            else if (typeof object.timestamp === "string")
                message.timestamp = parseInt(object.timestamp, 10);
            else if (typeof object.timestamp === "number")
                message.timestamp = object.timestamp;
            else if (typeof object.timestamp === "object")
                message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber(true);
        if (object.latency != null)
            message.latency = Number(object.latency);
        return message;
    };

    /**
     * Creates a plain object from a oTouchScreenPush message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oTouchScreenPush
     * @static
     * @param {oTouchScreenPush} message oTouchScreenPush
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    oTouchScreenPush.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.timestamp = options.longs === String ? "0" : 0;
            object.latency = 0;
        }
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            if (typeof message.timestamp === "number")
                object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
            else
                object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber(true) : message.timestamp;
        if (message.latency != null && message.hasOwnProperty("latency"))
            object.latency = options.json && !isFinite(message.latency) ? String(message.latency) : message.latency;
        return object;
    };

    /**
     * Converts this oTouchScreenPush to JSON.
     * @function toJSON
     * @memberof oTouchScreenPush
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    oTouchScreenPush.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for oTouchScreenPush
     * @function getTypeUrl
     * @memberof oTouchScreenPush
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    oTouchScreenPush.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/oTouchScreenPush";
    };

    return oTouchScreenPush;
})();

$root.oEnterRoomReq = (function() {

    /**
     * Properties of a oEnterRoomReq.
     * @exports IoEnterRoomReq
     * @interface IoEnterRoomReq
     * @property {number|Long|null} [roomId] oEnterRoomReq roomId
     */

    /**
     * Constructs a new oEnterRoomReq.
     * @exports oEnterRoomReq
     * @classdesc Represents a oEnterRoomReq.
     * @implements IoEnterRoomReq
     * @constructor
     * @param {IoEnterRoomReq=} [properties] Properties to set
     */
    function oEnterRoomReq(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * oEnterRoomReq roomId.
     * @member {number|Long} roomId
     * @memberof oEnterRoomReq
     * @instance
     */
    oEnterRoomReq.prototype.roomId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Creates a new oEnterRoomReq instance using the specified properties.
     * @function create
     * @memberof oEnterRoomReq
     * @static
     * @param {IoEnterRoomReq=} [properties] Properties to set
     * @returns {oEnterRoomReq} oEnterRoomReq instance
     */
    oEnterRoomReq.create = function create(properties) {
        return new oEnterRoomReq(properties);
    };

    /**
     * Encodes the specified oEnterRoomReq message. Does not implicitly {@link oEnterRoomReq.verify|verify} messages.
     * @function encode
     * @memberof oEnterRoomReq
     * @static
     * @param {IoEnterRoomReq} message oEnterRoomReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oEnterRoomReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.roomId);
        return writer;
    };

    /**
     * Encodes the specified oEnterRoomReq message, length delimited. Does not implicitly {@link oEnterRoomReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oEnterRoomReq
     * @static
     * @param {IoEnterRoomReq} message oEnterRoomReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oEnterRoomReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a oEnterRoomReq message from the specified reader or buffer.
     * @function decode
     * @memberof oEnterRoomReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oEnterRoomReq} oEnterRoomReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oEnterRoomReq.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oEnterRoomReq();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.roomId = reader.uint64();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a oEnterRoomReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oEnterRoomReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oEnterRoomReq} oEnterRoomReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oEnterRoomReq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a oEnterRoomReq message.
     * @function verify
     * @memberof oEnterRoomReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    oEnterRoomReq.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.roomId != null && message.hasOwnProperty("roomId"))
            if (!$util.isInteger(message.roomId) && !(message.roomId && $util.isInteger(message.roomId.low) && $util.isInteger(message.roomId.high)))
                return "roomId: integer|Long expected";
        return null;
    };

    /**
     * Creates a oEnterRoomReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oEnterRoomReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oEnterRoomReq} oEnterRoomReq
     */
    oEnterRoomReq.fromObject = function fromObject(object) {
        if (object instanceof $root.oEnterRoomReq)
            return object;
        var message = new $root.oEnterRoomReq();
        if (object.roomId != null)
            if ($util.Long)
                (message.roomId = $util.Long.fromValue(object.roomId)).unsigned = true;
            else if (typeof object.roomId === "string")
                message.roomId = parseInt(object.roomId, 10);
            else if (typeof object.roomId === "number")
                message.roomId = object.roomId;
            else if (typeof object.roomId === "object")
                message.roomId = new $util.LongBits(object.roomId.low >>> 0, object.roomId.high >>> 0).toNumber(true);
        return message;
    };

    /**
     * Creates a plain object from a oEnterRoomReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oEnterRoomReq
     * @static
     * @param {oEnterRoomReq} message oEnterRoomReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    oEnterRoomReq.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.roomId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.roomId = options.longs === String ? "0" : 0;
        if (message.roomId != null && message.hasOwnProperty("roomId"))
            if (typeof message.roomId === "number")
                object.roomId = options.longs === String ? String(message.roomId) : message.roomId;
            else
                object.roomId = options.longs === String ? $util.Long.prototype.toString.call(message.roomId) : options.longs === Number ? new $util.LongBits(message.roomId.low >>> 0, message.roomId.high >>> 0).toNumber(true) : message.roomId;
        return object;
    };

    /**
     * Converts this oEnterRoomReq to JSON.
     * @function toJSON
     * @memberof oEnterRoomReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    oEnterRoomReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for oEnterRoomReq
     * @function getTypeUrl
     * @memberof oEnterRoomReq
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    oEnterRoomReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/oEnterRoomReq";
    };

    return oEnterRoomReq;
})();

/**
 * eStageType enum.
 * @exports eStageType
 * @enum {number}
 * @property {number} StageTypeFree=0 StageTypeFree value
 * @property {number} StageTypeWaitEnter=1 StageTypeWaitEnter value
 * @property {number} StageTypeTryEnter=2 StageTypeTryEnter value
 * @property {number} StageTypeWorking=3 StageTypeWorking value
 * @property {number} StageTypeOff=4 StageTypeOff value
 */
$root.eStageType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "StageTypeFree"] = 0;
    values[valuesById[1] = "StageTypeWaitEnter"] = 1;
    values[valuesById[2] = "StageTypeTryEnter"] = 2;
    values[valuesById[3] = "StageTypeWorking"] = 3;
    values[valuesById[4] = "StageTypeOff"] = 4;
    return values;
})();

$root.oStageInfo = (function() {

    /**
     * Properties of a oStageInfo.
     * @exports IoStageInfo
     * @interface IoStageInfo
     * @property {number|Long|null} [stageId] oStageInfo stageId
     * @property {number|Long|null} [onStageUserId] oStageInfo onStageUserId
     * @property {string|null} [rtcToken] oStageInfo rtcToken
     * @property {eStageType|null} [stageType] oStageInfo stageType
     */

    /**
     * Constructs a new oStageInfo.
     * @exports oStageInfo
     * @classdesc Represents a oStageInfo.
     * @implements IoStageInfo
     * @constructor
     * @param {IoStageInfo=} [properties] Properties to set
     */
    function oStageInfo(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * oStageInfo stageId.
     * @member {number|Long} stageId
     * @memberof oStageInfo
     * @instance
     */
    oStageInfo.prototype.stageId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * oStageInfo onStageUserId.
     * @member {number|Long} onStageUserId
     * @memberof oStageInfo
     * @instance
     */
    oStageInfo.prototype.onStageUserId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * oStageInfo rtcToken.
     * @member {string} rtcToken
     * @memberof oStageInfo
     * @instance
     */
    oStageInfo.prototype.rtcToken = "";

    /**
     * oStageInfo stageType.
     * @member {eStageType} stageType
     * @memberof oStageInfo
     * @instance
     */
    oStageInfo.prototype.stageType = 0;

    /**
     * Creates a new oStageInfo instance using the specified properties.
     * @function create
     * @memberof oStageInfo
     * @static
     * @param {IoStageInfo=} [properties] Properties to set
     * @returns {oStageInfo} oStageInfo instance
     */
    oStageInfo.create = function create(properties) {
        return new oStageInfo(properties);
    };

    /**
     * Encodes the specified oStageInfo message. Does not implicitly {@link oStageInfo.verify|verify} messages.
     * @function encode
     * @memberof oStageInfo
     * @static
     * @param {IoStageInfo} message oStageInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oStageInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.stageId != null && Object.hasOwnProperty.call(message, "stageId"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.stageId);
        if (message.onStageUserId != null && Object.hasOwnProperty.call(message, "onStageUserId"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.onStageUserId);
        if (message.rtcToken != null && Object.hasOwnProperty.call(message, "rtcToken"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.rtcToken);
        if (message.stageType != null && Object.hasOwnProperty.call(message, "stageType"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.stageType);
        return writer;
    };

    /**
     * Encodes the specified oStageInfo message, length delimited. Does not implicitly {@link oStageInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oStageInfo
     * @static
     * @param {IoStageInfo} message oStageInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oStageInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a oStageInfo message from the specified reader or buffer.
     * @function decode
     * @memberof oStageInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oStageInfo} oStageInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oStageInfo.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oStageInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.stageId = reader.int64();
                    break;
                }
            case 2: {
                    message.onStageUserId = reader.uint64();
                    break;
                }
            case 3: {
                    message.rtcToken = reader.string();
                    break;
                }
            case 4: {
                    message.stageType = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a oStageInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oStageInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oStageInfo} oStageInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oStageInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a oStageInfo message.
     * @function verify
     * @memberof oStageInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    oStageInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.stageId != null && message.hasOwnProperty("stageId"))
            if (!$util.isInteger(message.stageId) && !(message.stageId && $util.isInteger(message.stageId.low) && $util.isInteger(message.stageId.high)))
                return "stageId: integer|Long expected";
        if (message.onStageUserId != null && message.hasOwnProperty("onStageUserId"))
            if (!$util.isInteger(message.onStageUserId) && !(message.onStageUserId && $util.isInteger(message.onStageUserId.low) && $util.isInteger(message.onStageUserId.high)))
                return "onStageUserId: integer|Long expected";
        if (message.rtcToken != null && message.hasOwnProperty("rtcToken"))
            if (!$util.isString(message.rtcToken))
                return "rtcToken: string expected";
        if (message.stageType != null && message.hasOwnProperty("stageType"))
            switch (message.stageType) {
            default:
                return "stageType: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
                break;
            }
        return null;
    };

    /**
     * Creates a oStageInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oStageInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oStageInfo} oStageInfo
     */
    oStageInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.oStageInfo)
            return object;
        var message = new $root.oStageInfo();
        if (object.stageId != null)
            if ($util.Long)
                (message.stageId = $util.Long.fromValue(object.stageId)).unsigned = false;
            else if (typeof object.stageId === "string")
                message.stageId = parseInt(object.stageId, 10);
            else if (typeof object.stageId === "number")
                message.stageId = object.stageId;
            else if (typeof object.stageId === "object")
                message.stageId = new $util.LongBits(object.stageId.low >>> 0, object.stageId.high >>> 0).toNumber();
        if (object.onStageUserId != null)
            if ($util.Long)
                (message.onStageUserId = $util.Long.fromValue(object.onStageUserId)).unsigned = true;
            else if (typeof object.onStageUserId === "string")
                message.onStageUserId = parseInt(object.onStageUserId, 10);
            else if (typeof object.onStageUserId === "number")
                message.onStageUserId = object.onStageUserId;
            else if (typeof object.onStageUserId === "object")
                message.onStageUserId = new $util.LongBits(object.onStageUserId.low >>> 0, object.onStageUserId.high >>> 0).toNumber(true);
        if (object.rtcToken != null)
            message.rtcToken = String(object.rtcToken);
        switch (object.stageType) {
        default:
            if (typeof object.stageType === "number") {
                message.stageType = object.stageType;
                break;
            }
            break;
        case "StageTypeFree":
        case 0:
            message.stageType = 0;
            break;
        case "StageTypeWaitEnter":
        case 1:
            message.stageType = 1;
            break;
        case "StageTypeTryEnter":
        case 2:
            message.stageType = 2;
            break;
        case "StageTypeWorking":
        case 3:
            message.stageType = 3;
            break;
        case "StageTypeOff":
        case 4:
            message.stageType = 4;
            break;
        }
        return message;
    };

    /**
     * Creates a plain object from a oStageInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oStageInfo
     * @static
     * @param {oStageInfo} message oStageInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    oStageInfo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.stageId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.stageId = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.onStageUserId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.onStageUserId = options.longs === String ? "0" : 0;
            object.rtcToken = "";
            object.stageType = options.enums === String ? "StageTypeFree" : 0;
        }
        if (message.stageId != null && message.hasOwnProperty("stageId"))
            if (typeof message.stageId === "number")
                object.stageId = options.longs === String ? String(message.stageId) : message.stageId;
            else
                object.stageId = options.longs === String ? $util.Long.prototype.toString.call(message.stageId) : options.longs === Number ? new $util.LongBits(message.stageId.low >>> 0, message.stageId.high >>> 0).toNumber() : message.stageId;
        if (message.onStageUserId != null && message.hasOwnProperty("onStageUserId"))
            if (typeof message.onStageUserId === "number")
                object.onStageUserId = options.longs === String ? String(message.onStageUserId) : message.onStageUserId;
            else
                object.onStageUserId = options.longs === String ? $util.Long.prototype.toString.call(message.onStageUserId) : options.longs === Number ? new $util.LongBits(message.onStageUserId.low >>> 0, message.onStageUserId.high >>> 0).toNumber(true) : message.onStageUserId;
        if (message.rtcToken != null && message.hasOwnProperty("rtcToken"))
            object.rtcToken = message.rtcToken;
        if (message.stageType != null && message.hasOwnProperty("stageType"))
            object.stageType = options.enums === String ? $root.eStageType[message.stageType] === undefined ? message.stageType : $root.eStageType[message.stageType] : message.stageType;
        return object;
    };

    /**
     * Converts this oStageInfo to JSON.
     * @function toJSON
     * @memberof oStageInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    oStageInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for oStageInfo
     * @function getTypeUrl
     * @memberof oStageInfo
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    oStageInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/oStageInfo";
    };

    return oStageInfo;
})();

$root.oEnterRoomAsw = (function() {

    /**
     * Properties of a oEnterRoomAsw.
     * @exports IoEnterRoomAsw
     * @interface IoEnterRoomAsw
     * @property {eError|null} [code] oEnterRoomAsw code
     * @property {number|Long|null} [roomId] oEnterRoomAsw roomId
     * @property {Array.<number|Long>|null} [onlineUsers] oEnterRoomAsw onlineUsers
     * @property {string|null} [rtcToken] oEnterRoomAsw rtcToken
     * @property {Array.<IoStageInfo>|null} [stageRtcIds] oEnterRoomAsw stageRtcIds
     * @property {Array.<IoStageInfo>|null} [queueUserIds] oEnterRoomAsw queueUserIds
     * @property {number|null} [stageCount] oEnterRoomAsw stageCount
     * @property {string|null} [scene] oEnterRoomAsw scene
     * @property {boolean|null} [allMute] oEnterRoomAsw allMute
     * @property {Array.<number|Long>|null} [muteUsers] oEnterRoomAsw muteUsers
     */

    /**
     * Constructs a new oEnterRoomAsw.
     * @exports oEnterRoomAsw
     * @classdesc Represents a oEnterRoomAsw.
     * @implements IoEnterRoomAsw
     * @constructor
     * @param {IoEnterRoomAsw=} [properties] Properties to set
     */
    function oEnterRoomAsw(properties) {
        this.onlineUsers = [];
        this.stageRtcIds = [];
        this.queueUserIds = [];
        this.muteUsers = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * oEnterRoomAsw code.
     * @member {eError} code
     * @memberof oEnterRoomAsw
     * @instance
     */
    oEnterRoomAsw.prototype.code = 0;

    /**
     * oEnterRoomAsw roomId.
     * @member {number|Long} roomId
     * @memberof oEnterRoomAsw
     * @instance
     */
    oEnterRoomAsw.prototype.roomId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * oEnterRoomAsw onlineUsers.
     * @member {Array.<number|Long>} onlineUsers
     * @memberof oEnterRoomAsw
     * @instance
     */
    oEnterRoomAsw.prototype.onlineUsers = $util.emptyArray;

    /**
     * oEnterRoomAsw rtcToken.
     * @member {string} rtcToken
     * @memberof oEnterRoomAsw
     * @instance
     */
    oEnterRoomAsw.prototype.rtcToken = "";

    /**
     * oEnterRoomAsw stageRtcIds.
     * @member {Array.<IoStageInfo>} stageRtcIds
     * @memberof oEnterRoomAsw
     * @instance
     */
    oEnterRoomAsw.prototype.stageRtcIds = $util.emptyArray;

    /**
     * oEnterRoomAsw queueUserIds.
     * @member {Array.<IoStageInfo>} queueUserIds
     * @memberof oEnterRoomAsw
     * @instance
     */
    oEnterRoomAsw.prototype.queueUserIds = $util.emptyArray;

    /**
     * oEnterRoomAsw stageCount.
     * @member {number} stageCount
     * @memberof oEnterRoomAsw
     * @instance
     */
    oEnterRoomAsw.prototype.stageCount = 0;

    /**
     * oEnterRoomAsw scene.
     * @member {string} scene
     * @memberof oEnterRoomAsw
     * @instance
     */
    oEnterRoomAsw.prototype.scene = "";

    /**
     * oEnterRoomAsw allMute.
     * @member {boolean} allMute
     * @memberof oEnterRoomAsw
     * @instance
     */
    oEnterRoomAsw.prototype.allMute = false;

    /**
     * oEnterRoomAsw muteUsers.
     * @member {Array.<number|Long>} muteUsers
     * @memberof oEnterRoomAsw
     * @instance
     */
    oEnterRoomAsw.prototype.muteUsers = $util.emptyArray;

    /**
     * Creates a new oEnterRoomAsw instance using the specified properties.
     * @function create
     * @memberof oEnterRoomAsw
     * @static
     * @param {IoEnterRoomAsw=} [properties] Properties to set
     * @returns {oEnterRoomAsw} oEnterRoomAsw instance
     */
    oEnterRoomAsw.create = function create(properties) {
        return new oEnterRoomAsw(properties);
    };

    /**
     * Encodes the specified oEnterRoomAsw message. Does not implicitly {@link oEnterRoomAsw.verify|verify} messages.
     * @function encode
     * @memberof oEnterRoomAsw
     * @static
     * @param {IoEnterRoomAsw} message oEnterRoomAsw message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oEnterRoomAsw.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.code != null && Object.hasOwnProperty.call(message, "code"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
        if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.roomId);
        if (message.onlineUsers != null && message.onlineUsers.length) {
            writer.uint32(/* id 3, wireType 2 =*/26).fork();
            for (var i = 0; i < message.onlineUsers.length; ++i)
                writer.uint64(message.onlineUsers[i]);
            writer.ldelim();
        }
        if (message.rtcToken != null && Object.hasOwnProperty.call(message, "rtcToken"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.rtcToken);
        if (message.stageRtcIds != null && message.stageRtcIds.length)
            for (var i = 0; i < message.stageRtcIds.length; ++i)
                $root.oStageInfo.encode(message.stageRtcIds[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.queueUserIds != null && message.queueUserIds.length)
            for (var i = 0; i < message.queueUserIds.length; ++i)
                $root.oStageInfo.encode(message.queueUserIds[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.stageCount != null && Object.hasOwnProperty.call(message, "stageCount"))
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.stageCount);
        if (message.scene != null && Object.hasOwnProperty.call(message, "scene"))
            writer.uint32(/* id 8, wireType 2 =*/66).string(message.scene);
        if (message.allMute != null && Object.hasOwnProperty.call(message, "allMute"))
            writer.uint32(/* id 9, wireType 0 =*/72).bool(message.allMute);
        if (message.muteUsers != null && message.muteUsers.length) {
            writer.uint32(/* id 10, wireType 2 =*/82).fork();
            for (var i = 0; i < message.muteUsers.length; ++i)
                writer.uint64(message.muteUsers[i]);
            writer.ldelim();
        }
        return writer;
    };

    /**
     * Encodes the specified oEnterRoomAsw message, length delimited. Does not implicitly {@link oEnterRoomAsw.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oEnterRoomAsw
     * @static
     * @param {IoEnterRoomAsw} message oEnterRoomAsw message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oEnterRoomAsw.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a oEnterRoomAsw message from the specified reader or buffer.
     * @function decode
     * @memberof oEnterRoomAsw
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oEnterRoomAsw} oEnterRoomAsw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oEnterRoomAsw.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oEnterRoomAsw();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.code = reader.int32();
                    break;
                }
            case 2: {
                    message.roomId = reader.uint64();
                    break;
                }
            case 3: {
                    if (!(message.onlineUsers && message.onlineUsers.length))
                        message.onlineUsers = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.onlineUsers.push(reader.uint64());
                    } else
                        message.onlineUsers.push(reader.uint64());
                    break;
                }
            case 4: {
                    message.rtcToken = reader.string();
                    break;
                }
            case 5: {
                    if (!(message.stageRtcIds && message.stageRtcIds.length))
                        message.stageRtcIds = [];
                    message.stageRtcIds.push($root.oStageInfo.decode(reader, reader.uint32()));
                    break;
                }
            case 6: {
                    if (!(message.queueUserIds && message.queueUserIds.length))
                        message.queueUserIds = [];
                    message.queueUserIds.push($root.oStageInfo.decode(reader, reader.uint32()));
                    break;
                }
            case 7: {
                    message.stageCount = reader.int32();
                    break;
                }
            case 8: {
                    message.scene = reader.string();
                    break;
                }
            case 9: {
                    message.allMute = reader.bool();
                    break;
                }
            case 10: {
                    if (!(message.muteUsers && message.muteUsers.length))
                        message.muteUsers = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.muteUsers.push(reader.uint64());
                    } else
                        message.muteUsers.push(reader.uint64());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a oEnterRoomAsw message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oEnterRoomAsw
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oEnterRoomAsw} oEnterRoomAsw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oEnterRoomAsw.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a oEnterRoomAsw message.
     * @function verify
     * @memberof oEnterRoomAsw
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    oEnterRoomAsw.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.code != null && message.hasOwnProperty("code"))
            switch (message.code) {
            default:
                return "code: enum value expected";
            case 0:
            case 1:
            case 2:
            case 41:
            case 42:
            case 43:
            case 44:
            case 51:
            case 52:
            case 53:
            case 61:
            case 62:
            case 63:
            case 64:
            case 65:
            case 71:
            case 72:
            case 73:
            case 74:
            case 75:
            case 76:
            case 77:
            case 80:
            case 81:
            case 82:
            case 83:
                break;
            }
        if (message.roomId != null && message.hasOwnProperty("roomId"))
            if (!$util.isInteger(message.roomId) && !(message.roomId && $util.isInteger(message.roomId.low) && $util.isInteger(message.roomId.high)))
                return "roomId: integer|Long expected";
        if (message.onlineUsers != null && message.hasOwnProperty("onlineUsers")) {
            if (!Array.isArray(message.onlineUsers))
                return "onlineUsers: array expected";
            for (var i = 0; i < message.onlineUsers.length; ++i)
                if (!$util.isInteger(message.onlineUsers[i]) && !(message.onlineUsers[i] && $util.isInteger(message.onlineUsers[i].low) && $util.isInteger(message.onlineUsers[i].high)))
                    return "onlineUsers: integer|Long[] expected";
        }
        if (message.rtcToken != null && message.hasOwnProperty("rtcToken"))
            if (!$util.isString(message.rtcToken))
                return "rtcToken: string expected";
        if (message.stageRtcIds != null && message.hasOwnProperty("stageRtcIds")) {
            if (!Array.isArray(message.stageRtcIds))
                return "stageRtcIds: array expected";
            for (var i = 0; i < message.stageRtcIds.length; ++i) {
                var error = $root.oStageInfo.verify(message.stageRtcIds[i]);
                if (error)
                    return "stageRtcIds." + error;
            }
        }
        if (message.queueUserIds != null && message.hasOwnProperty("queueUserIds")) {
            if (!Array.isArray(message.queueUserIds))
                return "queueUserIds: array expected";
            for (var i = 0; i < message.queueUserIds.length; ++i) {
                var error = $root.oStageInfo.verify(message.queueUserIds[i]);
                if (error)
                    return "queueUserIds." + error;
            }
        }
        if (message.stageCount != null && message.hasOwnProperty("stageCount"))
            if (!$util.isInteger(message.stageCount))
                return "stageCount: integer expected";
        if (message.scene != null && message.hasOwnProperty("scene"))
            if (!$util.isString(message.scene))
                return "scene: string expected";
        if (message.allMute != null && message.hasOwnProperty("allMute"))
            if (typeof message.allMute !== "boolean")
                return "allMute: boolean expected";
        if (message.muteUsers != null && message.hasOwnProperty("muteUsers")) {
            if (!Array.isArray(message.muteUsers))
                return "muteUsers: array expected";
            for (var i = 0; i < message.muteUsers.length; ++i)
                if (!$util.isInteger(message.muteUsers[i]) && !(message.muteUsers[i] && $util.isInteger(message.muteUsers[i].low) && $util.isInteger(message.muteUsers[i].high)))
                    return "muteUsers: integer|Long[] expected";
        }
        return null;
    };

    /**
     * Creates a oEnterRoomAsw message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oEnterRoomAsw
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oEnterRoomAsw} oEnterRoomAsw
     */
    oEnterRoomAsw.fromObject = function fromObject(object) {
        if (object instanceof $root.oEnterRoomAsw)
            return object;
        var message = new $root.oEnterRoomAsw();
        switch (object.code) {
        default:
            if (typeof object.code === "number") {
                message.code = object.code;
                break;
            }
            break;
        case "UNKNOWN":
        case 0:
            message.code = 0;
            break;
        case "SUCCESS":
        case 1:
            message.code = 1;
            break;
        case "FAILD":
        case 2:
            message.code = 2;
            break;
        case "ERROR_REQ_PARAM":
        case 41:
            message.code = 41;
            break;
        case "ERROR_OTHER_ROOM_OPEN":
        case 42:
            message.code = 42;
            break;
        case "ERROR_CREATE_ROOM_FAIL":
        case 43:
            message.code = 43;
            break;
        case "ERROR_ENTER_ROOM_FAIL":
        case 44:
            message.code = 44;
            break;
        case "EMPTY_INS_TOKEN":
        case 51:
            message.code = 51;
            break;
        case "UNSET_INS_TOKEN":
        case 52:
            message.code = 52;
            break;
        case "ERROR_INS_TOKEN":
        case 53:
            message.code = 53;
            break;
        case "ERROR_APP_SERVER_CONNECT_FAIL":
        case 61:
            message.code = 61;
            break;
        case "ERROR_APP_SERVER_RET_NOT_200":
        case 62:
            message.code = 62;
            break;
        case "ERROR_APP_SERVER_RET_NOT_JSON":
        case 63:
            message.code = 63;
            break;
        case "ERROR_APP_SERVER_RET_AUTH_FAIL":
        case 64:
            message.code = 64;
            break;
        case "ERROR_APP_SERVER_RET_CODE_FAIL":
        case 65:
            message.code = 65;
            break;
        case "ERROR_NO_ROOM":
        case 71:
            message.code = 71;
            break;
        case "ERROR_NOT_IN_ROOM":
        case 72:
            message.code = 72;
            break;
        case "ERROR_ALREADY_IN_STAGE":
        case 73:
            message.code = 73;
            break;
        case "ERROR_ALREADY_IN_QUEUE":
        case 74:
            message.code = 74;
            break;
        case "ERROR_ENTER_STAGE_FAIL":
        case 75:
            message.code = 75;
            break;
        case "ERROR_ENTER_STAGE_TIMEOUT":
        case 76:
            message.code = 76;
            break;
        case "ERROR_NOT_IN_STAGE":
        case 77:
            message.code = 77;
            break;
        case "ERROR_INVITER_NOT_IN_UE":
        case 80:
            message.code = 80;
            break;
        case "ERROR_INVITEE_NOT_IN_STAGE":
        case 81:
            message.code = 81;
            break;
        case "ERROR_INVITE_CONTEXT_NOT_EXIST":
        case 82:
            message.code = 82;
            break;
        case "ERROR_INVITEE_NOT_YOU":
        case 83:
            message.code = 83;
            break;
        }
        if (object.roomId != null)
            if ($util.Long)
                (message.roomId = $util.Long.fromValue(object.roomId)).unsigned = true;
            else if (typeof object.roomId === "string")
                message.roomId = parseInt(object.roomId, 10);
            else if (typeof object.roomId === "number")
                message.roomId = object.roomId;
            else if (typeof object.roomId === "object")
                message.roomId = new $util.LongBits(object.roomId.low >>> 0, object.roomId.high >>> 0).toNumber(true);
        if (object.onlineUsers) {
            if (!Array.isArray(object.onlineUsers))
                throw TypeError(".oEnterRoomAsw.onlineUsers: array expected");
            message.onlineUsers = [];
            for (var i = 0; i < object.onlineUsers.length; ++i)
                if ($util.Long)
                    (message.onlineUsers[i] = $util.Long.fromValue(object.onlineUsers[i])).unsigned = true;
                else if (typeof object.onlineUsers[i] === "string")
                    message.onlineUsers[i] = parseInt(object.onlineUsers[i], 10);
                else if (typeof object.onlineUsers[i] === "number")
                    message.onlineUsers[i] = object.onlineUsers[i];
                else if (typeof object.onlineUsers[i] === "object")
                    message.onlineUsers[i] = new $util.LongBits(object.onlineUsers[i].low >>> 0, object.onlineUsers[i].high >>> 0).toNumber(true);
        }
        if (object.rtcToken != null)
            message.rtcToken = String(object.rtcToken);
        if (object.stageRtcIds) {
            if (!Array.isArray(object.stageRtcIds))
                throw TypeError(".oEnterRoomAsw.stageRtcIds: array expected");
            message.stageRtcIds = [];
            for (var i = 0; i < object.stageRtcIds.length; ++i) {
                if (typeof object.stageRtcIds[i] !== "object")
                    throw TypeError(".oEnterRoomAsw.stageRtcIds: object expected");
                message.stageRtcIds[i] = $root.oStageInfo.fromObject(object.stageRtcIds[i]);
            }
        }
        if (object.queueUserIds) {
            if (!Array.isArray(object.queueUserIds))
                throw TypeError(".oEnterRoomAsw.queueUserIds: array expected");
            message.queueUserIds = [];
            for (var i = 0; i < object.queueUserIds.length; ++i) {
                if (typeof object.queueUserIds[i] !== "object")
                    throw TypeError(".oEnterRoomAsw.queueUserIds: object expected");
                message.queueUserIds[i] = $root.oStageInfo.fromObject(object.queueUserIds[i]);
            }
        }
        if (object.stageCount != null)
            message.stageCount = object.stageCount | 0;
        if (object.scene != null)
            message.scene = String(object.scene);
        if (object.allMute != null)
            message.allMute = Boolean(object.allMute);
        if (object.muteUsers) {
            if (!Array.isArray(object.muteUsers))
                throw TypeError(".oEnterRoomAsw.muteUsers: array expected");
            message.muteUsers = [];
            for (var i = 0; i < object.muteUsers.length; ++i)
                if ($util.Long)
                    (message.muteUsers[i] = $util.Long.fromValue(object.muteUsers[i])).unsigned = true;
                else if (typeof object.muteUsers[i] === "string")
                    message.muteUsers[i] = parseInt(object.muteUsers[i], 10);
                else if (typeof object.muteUsers[i] === "number")
                    message.muteUsers[i] = object.muteUsers[i];
                else if (typeof object.muteUsers[i] === "object")
                    message.muteUsers[i] = new $util.LongBits(object.muteUsers[i].low >>> 0, object.muteUsers[i].high >>> 0).toNumber(true);
        }
        return message;
    };

    /**
     * Creates a plain object from a oEnterRoomAsw message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oEnterRoomAsw
     * @static
     * @param {oEnterRoomAsw} message oEnterRoomAsw
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    oEnterRoomAsw.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.onlineUsers = [];
            object.stageRtcIds = [];
            object.queueUserIds = [];
            object.muteUsers = [];
        }
        if (options.defaults) {
            object.code = options.enums === String ? "UNKNOWN" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.roomId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.roomId = options.longs === String ? "0" : 0;
            object.rtcToken = "";
            object.stageCount = 0;
            object.scene = "";
            object.allMute = false;
        }
        if (message.code != null && message.hasOwnProperty("code"))
            object.code = options.enums === String ? $root.eError[message.code] === undefined ? message.code : $root.eError[message.code] : message.code;
        if (message.roomId != null && message.hasOwnProperty("roomId"))
            if (typeof message.roomId === "number")
                object.roomId = options.longs === String ? String(message.roomId) : message.roomId;
            else
                object.roomId = options.longs === String ? $util.Long.prototype.toString.call(message.roomId) : options.longs === Number ? new $util.LongBits(message.roomId.low >>> 0, message.roomId.high >>> 0).toNumber(true) : message.roomId;
        if (message.onlineUsers && message.onlineUsers.length) {
            object.onlineUsers = [];
            for (var j = 0; j < message.onlineUsers.length; ++j)
                if (typeof message.onlineUsers[j] === "number")
                    object.onlineUsers[j] = options.longs === String ? String(message.onlineUsers[j]) : message.onlineUsers[j];
                else
                    object.onlineUsers[j] = options.longs === String ? $util.Long.prototype.toString.call(message.onlineUsers[j]) : options.longs === Number ? new $util.LongBits(message.onlineUsers[j].low >>> 0, message.onlineUsers[j].high >>> 0).toNumber(true) : message.onlineUsers[j];
        }
        if (message.rtcToken != null && message.hasOwnProperty("rtcToken"))
            object.rtcToken = message.rtcToken;
        if (message.stageRtcIds && message.stageRtcIds.length) {
            object.stageRtcIds = [];
            for (var j = 0; j < message.stageRtcIds.length; ++j)
                object.stageRtcIds[j] = $root.oStageInfo.toObject(message.stageRtcIds[j], options);
        }
        if (message.queueUserIds && message.queueUserIds.length) {
            object.queueUserIds = [];
            for (var j = 0; j < message.queueUserIds.length; ++j)
                object.queueUserIds[j] = $root.oStageInfo.toObject(message.queueUserIds[j], options);
        }
        if (message.stageCount != null && message.hasOwnProperty("stageCount"))
            object.stageCount = message.stageCount;
        if (message.scene != null && message.hasOwnProperty("scene"))
            object.scene = message.scene;
        if (message.allMute != null && message.hasOwnProperty("allMute"))
            object.allMute = message.allMute;
        if (message.muteUsers && message.muteUsers.length) {
            object.muteUsers = [];
            for (var j = 0; j < message.muteUsers.length; ++j)
                if (typeof message.muteUsers[j] === "number")
                    object.muteUsers[j] = options.longs === String ? String(message.muteUsers[j]) : message.muteUsers[j];
                else
                    object.muteUsers[j] = options.longs === String ? $util.Long.prototype.toString.call(message.muteUsers[j]) : options.longs === Number ? new $util.LongBits(message.muteUsers[j].low >>> 0, message.muteUsers[j].high >>> 0).toNumber(true) : message.muteUsers[j];
        }
        return object;
    };

    /**
     * Converts this oEnterRoomAsw to JSON.
     * @function toJSON
     * @memberof oEnterRoomAsw
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    oEnterRoomAsw.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for oEnterRoomAsw
     * @function getTypeUrl
     * @memberof oEnterRoomAsw
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    oEnterRoomAsw.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/oEnterRoomAsw";
    };

    return oEnterRoomAsw;
})();

$root.oEnterRoomPush = (function() {

    /**
     * Properties of a oEnterRoomPush.
     * @exports IoEnterRoomPush
     * @interface IoEnterRoomPush
     * @property {number|Long|null} [enterUserId] oEnterRoomPush enterUserId
     */

    /**
     * Constructs a new oEnterRoomPush.
     * @exports oEnterRoomPush
     * @classdesc Represents a oEnterRoomPush.
     * @implements IoEnterRoomPush
     * @constructor
     * @param {IoEnterRoomPush=} [properties] Properties to set
     */
    function oEnterRoomPush(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * oEnterRoomPush enterUserId.
     * @member {number|Long} enterUserId
     * @memberof oEnterRoomPush
     * @instance
     */
    oEnterRoomPush.prototype.enterUserId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Creates a new oEnterRoomPush instance using the specified properties.
     * @function create
     * @memberof oEnterRoomPush
     * @static
     * @param {IoEnterRoomPush=} [properties] Properties to set
     * @returns {oEnterRoomPush} oEnterRoomPush instance
     */
    oEnterRoomPush.create = function create(properties) {
        return new oEnterRoomPush(properties);
    };

    /**
     * Encodes the specified oEnterRoomPush message. Does not implicitly {@link oEnterRoomPush.verify|verify} messages.
     * @function encode
     * @memberof oEnterRoomPush
     * @static
     * @param {IoEnterRoomPush} message oEnterRoomPush message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oEnterRoomPush.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.enterUserId != null && Object.hasOwnProperty.call(message, "enterUserId"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.enterUserId);
        return writer;
    };

    /**
     * Encodes the specified oEnterRoomPush message, length delimited. Does not implicitly {@link oEnterRoomPush.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oEnterRoomPush
     * @static
     * @param {IoEnterRoomPush} message oEnterRoomPush message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oEnterRoomPush.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a oEnterRoomPush message from the specified reader or buffer.
     * @function decode
     * @memberof oEnterRoomPush
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oEnterRoomPush} oEnterRoomPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oEnterRoomPush.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oEnterRoomPush();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.enterUserId = reader.uint64();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a oEnterRoomPush message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oEnterRoomPush
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oEnterRoomPush} oEnterRoomPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oEnterRoomPush.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a oEnterRoomPush message.
     * @function verify
     * @memberof oEnterRoomPush
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    oEnterRoomPush.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.enterUserId != null && message.hasOwnProperty("enterUserId"))
            if (!$util.isInteger(message.enterUserId) && !(message.enterUserId && $util.isInteger(message.enterUserId.low) && $util.isInteger(message.enterUserId.high)))
                return "enterUserId: integer|Long expected";
        return null;
    };

    /**
     * Creates a oEnterRoomPush message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oEnterRoomPush
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oEnterRoomPush} oEnterRoomPush
     */
    oEnterRoomPush.fromObject = function fromObject(object) {
        if (object instanceof $root.oEnterRoomPush)
            return object;
        var message = new $root.oEnterRoomPush();
        if (object.enterUserId != null)
            if ($util.Long)
                (message.enterUserId = $util.Long.fromValue(object.enterUserId)).unsigned = true;
            else if (typeof object.enterUserId === "string")
                message.enterUserId = parseInt(object.enterUserId, 10);
            else if (typeof object.enterUserId === "number")
                message.enterUserId = object.enterUserId;
            else if (typeof object.enterUserId === "object")
                message.enterUserId = new $util.LongBits(object.enterUserId.low >>> 0, object.enterUserId.high >>> 0).toNumber(true);
        return message;
    };

    /**
     * Creates a plain object from a oEnterRoomPush message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oEnterRoomPush
     * @static
     * @param {oEnterRoomPush} message oEnterRoomPush
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    oEnterRoomPush.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.enterUserId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.enterUserId = options.longs === String ? "0" : 0;
        if (message.enterUserId != null && message.hasOwnProperty("enterUserId"))
            if (typeof message.enterUserId === "number")
                object.enterUserId = options.longs === String ? String(message.enterUserId) : message.enterUserId;
            else
                object.enterUserId = options.longs === String ? $util.Long.prototype.toString.call(message.enterUserId) : options.longs === Number ? new $util.LongBits(message.enterUserId.low >>> 0, message.enterUserId.high >>> 0).toNumber(true) : message.enterUserId;
        return object;
    };

    /**
     * Converts this oEnterRoomPush to JSON.
     * @function toJSON
     * @memberof oEnterRoomPush
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    oEnterRoomPush.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for oEnterRoomPush
     * @function getTypeUrl
     * @memberof oEnterRoomPush
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    oEnterRoomPush.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/oEnterRoomPush";
    };

    return oEnterRoomPush;
})();

$root.oLeaveRoomReq = (function() {

    /**
     * Properties of a oLeaveRoomReq.
     * @exports IoLeaveRoomReq
     * @interface IoLeaveRoomReq
     * @property {number|Long|null} [roomId] oLeaveRoomReq roomId
     */

    /**
     * Constructs a new oLeaveRoomReq.
     * @exports oLeaveRoomReq
     * @classdesc Represents a oLeaveRoomReq.
     * @implements IoLeaveRoomReq
     * @constructor
     * @param {IoLeaveRoomReq=} [properties] Properties to set
     */
    function oLeaveRoomReq(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * oLeaveRoomReq roomId.
     * @member {number|Long} roomId
     * @memberof oLeaveRoomReq
     * @instance
     */
    oLeaveRoomReq.prototype.roomId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Creates a new oLeaveRoomReq instance using the specified properties.
     * @function create
     * @memberof oLeaveRoomReq
     * @static
     * @param {IoLeaveRoomReq=} [properties] Properties to set
     * @returns {oLeaveRoomReq} oLeaveRoomReq instance
     */
    oLeaveRoomReq.create = function create(properties) {
        return new oLeaveRoomReq(properties);
    };

    /**
     * Encodes the specified oLeaveRoomReq message. Does not implicitly {@link oLeaveRoomReq.verify|verify} messages.
     * @function encode
     * @memberof oLeaveRoomReq
     * @static
     * @param {IoLeaveRoomReq} message oLeaveRoomReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oLeaveRoomReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.roomId);
        return writer;
    };

    /**
     * Encodes the specified oLeaveRoomReq message, length delimited. Does not implicitly {@link oLeaveRoomReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oLeaveRoomReq
     * @static
     * @param {IoLeaveRoomReq} message oLeaveRoomReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oLeaveRoomReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a oLeaveRoomReq message from the specified reader or buffer.
     * @function decode
     * @memberof oLeaveRoomReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oLeaveRoomReq} oLeaveRoomReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oLeaveRoomReq.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oLeaveRoomReq();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.roomId = reader.uint64();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a oLeaveRoomReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oLeaveRoomReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oLeaveRoomReq} oLeaveRoomReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oLeaveRoomReq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a oLeaveRoomReq message.
     * @function verify
     * @memberof oLeaveRoomReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    oLeaveRoomReq.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.roomId != null && message.hasOwnProperty("roomId"))
            if (!$util.isInteger(message.roomId) && !(message.roomId && $util.isInteger(message.roomId.low) && $util.isInteger(message.roomId.high)))
                return "roomId: integer|Long expected";
        return null;
    };

    /**
     * Creates a oLeaveRoomReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oLeaveRoomReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oLeaveRoomReq} oLeaveRoomReq
     */
    oLeaveRoomReq.fromObject = function fromObject(object) {
        if (object instanceof $root.oLeaveRoomReq)
            return object;
        var message = new $root.oLeaveRoomReq();
        if (object.roomId != null)
            if ($util.Long)
                (message.roomId = $util.Long.fromValue(object.roomId)).unsigned = true;
            else if (typeof object.roomId === "string")
                message.roomId = parseInt(object.roomId, 10);
            else if (typeof object.roomId === "number")
                message.roomId = object.roomId;
            else if (typeof object.roomId === "object")
                message.roomId = new $util.LongBits(object.roomId.low >>> 0, object.roomId.high >>> 0).toNumber(true);
        return message;
    };

    /**
     * Creates a plain object from a oLeaveRoomReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oLeaveRoomReq
     * @static
     * @param {oLeaveRoomReq} message oLeaveRoomReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    oLeaveRoomReq.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.roomId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.roomId = options.longs === String ? "0" : 0;
        if (message.roomId != null && message.hasOwnProperty("roomId"))
            if (typeof message.roomId === "number")
                object.roomId = options.longs === String ? String(message.roomId) : message.roomId;
            else
                object.roomId = options.longs === String ? $util.Long.prototype.toString.call(message.roomId) : options.longs === Number ? new $util.LongBits(message.roomId.low >>> 0, message.roomId.high >>> 0).toNumber(true) : message.roomId;
        return object;
    };

    /**
     * Converts this oLeaveRoomReq to JSON.
     * @function toJSON
     * @memberof oLeaveRoomReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    oLeaveRoomReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for oLeaveRoomReq
     * @function getTypeUrl
     * @memberof oLeaveRoomReq
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    oLeaveRoomReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/oLeaveRoomReq";
    };

    return oLeaveRoomReq;
})();

$root.oLeaveRoomAsw = (function() {

    /**
     * Properties of a oLeaveRoomAsw.
     * @exports IoLeaveRoomAsw
     * @interface IoLeaveRoomAsw
     * @property {eError|null} [code] oLeaveRoomAsw code
     */

    /**
     * Constructs a new oLeaveRoomAsw.
     * @exports oLeaveRoomAsw
     * @classdesc Represents a oLeaveRoomAsw.
     * @implements IoLeaveRoomAsw
     * @constructor
     * @param {IoLeaveRoomAsw=} [properties] Properties to set
     */
    function oLeaveRoomAsw(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * oLeaveRoomAsw code.
     * @member {eError} code
     * @memberof oLeaveRoomAsw
     * @instance
     */
    oLeaveRoomAsw.prototype.code = 0;

    /**
     * Creates a new oLeaveRoomAsw instance using the specified properties.
     * @function create
     * @memberof oLeaveRoomAsw
     * @static
     * @param {IoLeaveRoomAsw=} [properties] Properties to set
     * @returns {oLeaveRoomAsw} oLeaveRoomAsw instance
     */
    oLeaveRoomAsw.create = function create(properties) {
        return new oLeaveRoomAsw(properties);
    };

    /**
     * Encodes the specified oLeaveRoomAsw message. Does not implicitly {@link oLeaveRoomAsw.verify|verify} messages.
     * @function encode
     * @memberof oLeaveRoomAsw
     * @static
     * @param {IoLeaveRoomAsw} message oLeaveRoomAsw message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oLeaveRoomAsw.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.code != null && Object.hasOwnProperty.call(message, "code"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
        return writer;
    };

    /**
     * Encodes the specified oLeaveRoomAsw message, length delimited. Does not implicitly {@link oLeaveRoomAsw.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oLeaveRoomAsw
     * @static
     * @param {IoLeaveRoomAsw} message oLeaveRoomAsw message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oLeaveRoomAsw.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a oLeaveRoomAsw message from the specified reader or buffer.
     * @function decode
     * @memberof oLeaveRoomAsw
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oLeaveRoomAsw} oLeaveRoomAsw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oLeaveRoomAsw.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oLeaveRoomAsw();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.code = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a oLeaveRoomAsw message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oLeaveRoomAsw
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oLeaveRoomAsw} oLeaveRoomAsw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oLeaveRoomAsw.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a oLeaveRoomAsw message.
     * @function verify
     * @memberof oLeaveRoomAsw
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    oLeaveRoomAsw.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.code != null && message.hasOwnProperty("code"))
            switch (message.code) {
            default:
                return "code: enum value expected";
            case 0:
            case 1:
            case 2:
            case 41:
            case 42:
            case 43:
            case 44:
            case 51:
            case 52:
            case 53:
            case 61:
            case 62:
            case 63:
            case 64:
            case 65:
            case 71:
            case 72:
            case 73:
            case 74:
            case 75:
            case 76:
            case 77:
            case 80:
            case 81:
            case 82:
            case 83:
                break;
            }
        return null;
    };

    /**
     * Creates a oLeaveRoomAsw message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oLeaveRoomAsw
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oLeaveRoomAsw} oLeaveRoomAsw
     */
    oLeaveRoomAsw.fromObject = function fromObject(object) {
        if (object instanceof $root.oLeaveRoomAsw)
            return object;
        var message = new $root.oLeaveRoomAsw();
        switch (object.code) {
        default:
            if (typeof object.code === "number") {
                message.code = object.code;
                break;
            }
            break;
        case "UNKNOWN":
        case 0:
            message.code = 0;
            break;
        case "SUCCESS":
        case 1:
            message.code = 1;
            break;
        case "FAILD":
        case 2:
            message.code = 2;
            break;
        case "ERROR_REQ_PARAM":
        case 41:
            message.code = 41;
            break;
        case "ERROR_OTHER_ROOM_OPEN":
        case 42:
            message.code = 42;
            break;
        case "ERROR_CREATE_ROOM_FAIL":
        case 43:
            message.code = 43;
            break;
        case "ERROR_ENTER_ROOM_FAIL":
        case 44:
            message.code = 44;
            break;
        case "EMPTY_INS_TOKEN":
        case 51:
            message.code = 51;
            break;
        case "UNSET_INS_TOKEN":
        case 52:
            message.code = 52;
            break;
        case "ERROR_INS_TOKEN":
        case 53:
            message.code = 53;
            break;
        case "ERROR_APP_SERVER_CONNECT_FAIL":
        case 61:
            message.code = 61;
            break;
        case "ERROR_APP_SERVER_RET_NOT_200":
        case 62:
            message.code = 62;
            break;
        case "ERROR_APP_SERVER_RET_NOT_JSON":
        case 63:
            message.code = 63;
            break;
        case "ERROR_APP_SERVER_RET_AUTH_FAIL":
        case 64:
            message.code = 64;
            break;
        case "ERROR_APP_SERVER_RET_CODE_FAIL":
        case 65:
            message.code = 65;
            break;
        case "ERROR_NO_ROOM":
        case 71:
            message.code = 71;
            break;
        case "ERROR_NOT_IN_ROOM":
        case 72:
            message.code = 72;
            break;
        case "ERROR_ALREADY_IN_STAGE":
        case 73:
            message.code = 73;
            break;
        case "ERROR_ALREADY_IN_QUEUE":
        case 74:
            message.code = 74;
            break;
        case "ERROR_ENTER_STAGE_FAIL":
        case 75:
            message.code = 75;
            break;
        case "ERROR_ENTER_STAGE_TIMEOUT":
        case 76:
            message.code = 76;
            break;
        case "ERROR_NOT_IN_STAGE":
        case 77:
            message.code = 77;
            break;
        case "ERROR_INVITER_NOT_IN_UE":
        case 80:
            message.code = 80;
            break;
        case "ERROR_INVITEE_NOT_IN_STAGE":
        case 81:
            message.code = 81;
            break;
        case "ERROR_INVITE_CONTEXT_NOT_EXIST":
        case 82:
            message.code = 82;
            break;
        case "ERROR_INVITEE_NOT_YOU":
        case 83:
            message.code = 83;
            break;
        }
        return message;
    };

    /**
     * Creates a plain object from a oLeaveRoomAsw message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oLeaveRoomAsw
     * @static
     * @param {oLeaveRoomAsw} message oLeaveRoomAsw
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    oLeaveRoomAsw.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.code = options.enums === String ? "UNKNOWN" : 0;
        if (message.code != null && message.hasOwnProperty("code"))
            object.code = options.enums === String ? $root.eError[message.code] === undefined ? message.code : $root.eError[message.code] : message.code;
        return object;
    };

    /**
     * Converts this oLeaveRoomAsw to JSON.
     * @function toJSON
     * @memberof oLeaveRoomAsw
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    oLeaveRoomAsw.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for oLeaveRoomAsw
     * @function getTypeUrl
     * @memberof oLeaveRoomAsw
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    oLeaveRoomAsw.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/oLeaveRoomAsw";
    };

    return oLeaveRoomAsw;
})();

$root.oLeaveRoomPush = (function() {

    /**
     * Properties of a oLeaveRoomPush.
     * @exports IoLeaveRoomPush
     * @interface IoLeaveRoomPush
     * @property {number|Long|null} [leaveUserId] oLeaveRoomPush leaveUserId
     */

    /**
     * Constructs a new oLeaveRoomPush.
     * @exports oLeaveRoomPush
     * @classdesc Represents a oLeaveRoomPush.
     * @implements IoLeaveRoomPush
     * @constructor
     * @param {IoLeaveRoomPush=} [properties] Properties to set
     */
    function oLeaveRoomPush(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * oLeaveRoomPush leaveUserId.
     * @member {number|Long} leaveUserId
     * @memberof oLeaveRoomPush
     * @instance
     */
    oLeaveRoomPush.prototype.leaveUserId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Creates a new oLeaveRoomPush instance using the specified properties.
     * @function create
     * @memberof oLeaveRoomPush
     * @static
     * @param {IoLeaveRoomPush=} [properties] Properties to set
     * @returns {oLeaveRoomPush} oLeaveRoomPush instance
     */
    oLeaveRoomPush.create = function create(properties) {
        return new oLeaveRoomPush(properties);
    };

    /**
     * Encodes the specified oLeaveRoomPush message. Does not implicitly {@link oLeaveRoomPush.verify|verify} messages.
     * @function encode
     * @memberof oLeaveRoomPush
     * @static
     * @param {IoLeaveRoomPush} message oLeaveRoomPush message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oLeaveRoomPush.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.leaveUserId != null && Object.hasOwnProperty.call(message, "leaveUserId"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.leaveUserId);
        return writer;
    };

    /**
     * Encodes the specified oLeaveRoomPush message, length delimited. Does not implicitly {@link oLeaveRoomPush.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oLeaveRoomPush
     * @static
     * @param {IoLeaveRoomPush} message oLeaveRoomPush message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oLeaveRoomPush.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a oLeaveRoomPush message from the specified reader or buffer.
     * @function decode
     * @memberof oLeaveRoomPush
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oLeaveRoomPush} oLeaveRoomPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oLeaveRoomPush.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oLeaveRoomPush();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.leaveUserId = reader.uint64();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a oLeaveRoomPush message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oLeaveRoomPush
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oLeaveRoomPush} oLeaveRoomPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oLeaveRoomPush.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a oLeaveRoomPush message.
     * @function verify
     * @memberof oLeaveRoomPush
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    oLeaveRoomPush.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.leaveUserId != null && message.hasOwnProperty("leaveUserId"))
            if (!$util.isInteger(message.leaveUserId) && !(message.leaveUserId && $util.isInteger(message.leaveUserId.low) && $util.isInteger(message.leaveUserId.high)))
                return "leaveUserId: integer|Long expected";
        return null;
    };

    /**
     * Creates a oLeaveRoomPush message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oLeaveRoomPush
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oLeaveRoomPush} oLeaveRoomPush
     */
    oLeaveRoomPush.fromObject = function fromObject(object) {
        if (object instanceof $root.oLeaveRoomPush)
            return object;
        var message = new $root.oLeaveRoomPush();
        if (object.leaveUserId != null)
            if ($util.Long)
                (message.leaveUserId = $util.Long.fromValue(object.leaveUserId)).unsigned = true;
            else if (typeof object.leaveUserId === "string")
                message.leaveUserId = parseInt(object.leaveUserId, 10);
            else if (typeof object.leaveUserId === "number")
                message.leaveUserId = object.leaveUserId;
            else if (typeof object.leaveUserId === "object")
                message.leaveUserId = new $util.LongBits(object.leaveUserId.low >>> 0, object.leaveUserId.high >>> 0).toNumber(true);
        return message;
    };

    /**
     * Creates a plain object from a oLeaveRoomPush message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oLeaveRoomPush
     * @static
     * @param {oLeaveRoomPush} message oLeaveRoomPush
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    oLeaveRoomPush.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.leaveUserId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.leaveUserId = options.longs === String ? "0" : 0;
        if (message.leaveUserId != null && message.hasOwnProperty("leaveUserId"))
            if (typeof message.leaveUserId === "number")
                object.leaveUserId = options.longs === String ? String(message.leaveUserId) : message.leaveUserId;
            else
                object.leaveUserId = options.longs === String ? $util.Long.prototype.toString.call(message.leaveUserId) : options.longs === Number ? new $util.LongBits(message.leaveUserId.low >>> 0, message.leaveUserId.high >>> 0).toNumber(true) : message.leaveUserId;
        return object;
    };

    /**
     * Converts this oLeaveRoomPush to JSON.
     * @function toJSON
     * @memberof oLeaveRoomPush
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    oLeaveRoomPush.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for oLeaveRoomPush
     * @function getTypeUrl
     * @memberof oLeaveRoomPush
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    oLeaveRoomPush.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/oLeaveRoomPush";
    };

    return oLeaveRoomPush;
})();

$root.oDissolveRoomReq = (function() {

    /**
     * Properties of a oDissolveRoomReq.
     * @exports IoDissolveRoomReq
     * @interface IoDissolveRoomReq
     * @property {number|Long|null} [roomId] oDissolveRoomReq roomId
     */

    /**
     * Constructs a new oDissolveRoomReq.
     * @exports oDissolveRoomReq
     * @classdesc Represents a oDissolveRoomReq.
     * @implements IoDissolveRoomReq
     * @constructor
     * @param {IoDissolveRoomReq=} [properties] Properties to set
     */
    function oDissolveRoomReq(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * oDissolveRoomReq roomId.
     * @member {number|Long} roomId
     * @memberof oDissolveRoomReq
     * @instance
     */
    oDissolveRoomReq.prototype.roomId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Creates a new oDissolveRoomReq instance using the specified properties.
     * @function create
     * @memberof oDissolveRoomReq
     * @static
     * @param {IoDissolveRoomReq=} [properties] Properties to set
     * @returns {oDissolveRoomReq} oDissolveRoomReq instance
     */
    oDissolveRoomReq.create = function create(properties) {
        return new oDissolveRoomReq(properties);
    };

    /**
     * Encodes the specified oDissolveRoomReq message. Does not implicitly {@link oDissolveRoomReq.verify|verify} messages.
     * @function encode
     * @memberof oDissolveRoomReq
     * @static
     * @param {IoDissolveRoomReq} message oDissolveRoomReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oDissolveRoomReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.roomId);
        return writer;
    };

    /**
     * Encodes the specified oDissolveRoomReq message, length delimited. Does not implicitly {@link oDissolveRoomReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oDissolveRoomReq
     * @static
     * @param {IoDissolveRoomReq} message oDissolveRoomReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oDissolveRoomReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a oDissolveRoomReq message from the specified reader or buffer.
     * @function decode
     * @memberof oDissolveRoomReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oDissolveRoomReq} oDissolveRoomReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oDissolveRoomReq.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oDissolveRoomReq();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.roomId = reader.uint64();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a oDissolveRoomReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oDissolveRoomReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oDissolveRoomReq} oDissolveRoomReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oDissolveRoomReq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a oDissolveRoomReq message.
     * @function verify
     * @memberof oDissolveRoomReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    oDissolveRoomReq.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.roomId != null && message.hasOwnProperty("roomId"))
            if (!$util.isInteger(message.roomId) && !(message.roomId && $util.isInteger(message.roomId.low) && $util.isInteger(message.roomId.high)))
                return "roomId: integer|Long expected";
        return null;
    };

    /**
     * Creates a oDissolveRoomReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oDissolveRoomReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oDissolveRoomReq} oDissolveRoomReq
     */
    oDissolveRoomReq.fromObject = function fromObject(object) {
        if (object instanceof $root.oDissolveRoomReq)
            return object;
        var message = new $root.oDissolveRoomReq();
        if (object.roomId != null)
            if ($util.Long)
                (message.roomId = $util.Long.fromValue(object.roomId)).unsigned = true;
            else if (typeof object.roomId === "string")
                message.roomId = parseInt(object.roomId, 10);
            else if (typeof object.roomId === "number")
                message.roomId = object.roomId;
            else if (typeof object.roomId === "object")
                message.roomId = new $util.LongBits(object.roomId.low >>> 0, object.roomId.high >>> 0).toNumber(true);
        return message;
    };

    /**
     * Creates a plain object from a oDissolveRoomReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oDissolveRoomReq
     * @static
     * @param {oDissolveRoomReq} message oDissolveRoomReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    oDissolveRoomReq.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.roomId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.roomId = options.longs === String ? "0" : 0;
        if (message.roomId != null && message.hasOwnProperty("roomId"))
            if (typeof message.roomId === "number")
                object.roomId = options.longs === String ? String(message.roomId) : message.roomId;
            else
                object.roomId = options.longs === String ? $util.Long.prototype.toString.call(message.roomId) : options.longs === Number ? new $util.LongBits(message.roomId.low >>> 0, message.roomId.high >>> 0).toNumber(true) : message.roomId;
        return object;
    };

    /**
     * Converts this oDissolveRoomReq to JSON.
     * @function toJSON
     * @memberof oDissolveRoomReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    oDissolveRoomReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for oDissolveRoomReq
     * @function getTypeUrl
     * @memberof oDissolveRoomReq
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    oDissolveRoomReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/oDissolveRoomReq";
    };

    return oDissolveRoomReq;
})();

$root.oDissolveRoomAsw = (function() {

    /**
     * Properties of a oDissolveRoomAsw.
     * @exports IoDissolveRoomAsw
     * @interface IoDissolveRoomAsw
     * @property {eError|null} [code] oDissolveRoomAsw code
     * @property {number|Long|null} [roomId] oDissolveRoomAsw roomId
     */

    /**
     * Constructs a new oDissolveRoomAsw.
     * @exports oDissolveRoomAsw
     * @classdesc Represents a oDissolveRoomAsw.
     * @implements IoDissolveRoomAsw
     * @constructor
     * @param {IoDissolveRoomAsw=} [properties] Properties to set
     */
    function oDissolveRoomAsw(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * oDissolveRoomAsw code.
     * @member {eError} code
     * @memberof oDissolveRoomAsw
     * @instance
     */
    oDissolveRoomAsw.prototype.code = 0;

    /**
     * oDissolveRoomAsw roomId.
     * @member {number|Long} roomId
     * @memberof oDissolveRoomAsw
     * @instance
     */
    oDissolveRoomAsw.prototype.roomId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Creates a new oDissolveRoomAsw instance using the specified properties.
     * @function create
     * @memberof oDissolveRoomAsw
     * @static
     * @param {IoDissolveRoomAsw=} [properties] Properties to set
     * @returns {oDissolveRoomAsw} oDissolveRoomAsw instance
     */
    oDissolveRoomAsw.create = function create(properties) {
        return new oDissolveRoomAsw(properties);
    };

    /**
     * Encodes the specified oDissolveRoomAsw message. Does not implicitly {@link oDissolveRoomAsw.verify|verify} messages.
     * @function encode
     * @memberof oDissolveRoomAsw
     * @static
     * @param {IoDissolveRoomAsw} message oDissolveRoomAsw message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oDissolveRoomAsw.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.code != null && Object.hasOwnProperty.call(message, "code"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
        if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.roomId);
        return writer;
    };

    /**
     * Encodes the specified oDissolveRoomAsw message, length delimited. Does not implicitly {@link oDissolveRoomAsw.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oDissolveRoomAsw
     * @static
     * @param {IoDissolveRoomAsw} message oDissolveRoomAsw message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oDissolveRoomAsw.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a oDissolveRoomAsw message from the specified reader or buffer.
     * @function decode
     * @memberof oDissolveRoomAsw
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oDissolveRoomAsw} oDissolveRoomAsw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oDissolveRoomAsw.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oDissolveRoomAsw();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.code = reader.int32();
                    break;
                }
            case 2: {
                    message.roomId = reader.uint64();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a oDissolveRoomAsw message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oDissolveRoomAsw
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oDissolveRoomAsw} oDissolveRoomAsw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oDissolveRoomAsw.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a oDissolveRoomAsw message.
     * @function verify
     * @memberof oDissolveRoomAsw
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    oDissolveRoomAsw.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.code != null && message.hasOwnProperty("code"))
            switch (message.code) {
            default:
                return "code: enum value expected";
            case 0:
            case 1:
            case 2:
            case 41:
            case 42:
            case 43:
            case 44:
            case 51:
            case 52:
            case 53:
            case 61:
            case 62:
            case 63:
            case 64:
            case 65:
            case 71:
            case 72:
            case 73:
            case 74:
            case 75:
            case 76:
            case 77:
            case 80:
            case 81:
            case 82:
            case 83:
                break;
            }
        if (message.roomId != null && message.hasOwnProperty("roomId"))
            if (!$util.isInteger(message.roomId) && !(message.roomId && $util.isInteger(message.roomId.low) && $util.isInteger(message.roomId.high)))
                return "roomId: integer|Long expected";
        return null;
    };

    /**
     * Creates a oDissolveRoomAsw message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oDissolveRoomAsw
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oDissolveRoomAsw} oDissolveRoomAsw
     */
    oDissolveRoomAsw.fromObject = function fromObject(object) {
        if (object instanceof $root.oDissolveRoomAsw)
            return object;
        var message = new $root.oDissolveRoomAsw();
        switch (object.code) {
        default:
            if (typeof object.code === "number") {
                message.code = object.code;
                break;
            }
            break;
        case "UNKNOWN":
        case 0:
            message.code = 0;
            break;
        case "SUCCESS":
        case 1:
            message.code = 1;
            break;
        case "FAILD":
        case 2:
            message.code = 2;
            break;
        case "ERROR_REQ_PARAM":
        case 41:
            message.code = 41;
            break;
        case "ERROR_OTHER_ROOM_OPEN":
        case 42:
            message.code = 42;
            break;
        case "ERROR_CREATE_ROOM_FAIL":
        case 43:
            message.code = 43;
            break;
        case "ERROR_ENTER_ROOM_FAIL":
        case 44:
            message.code = 44;
            break;
        case "EMPTY_INS_TOKEN":
        case 51:
            message.code = 51;
            break;
        case "UNSET_INS_TOKEN":
        case 52:
            message.code = 52;
            break;
        case "ERROR_INS_TOKEN":
        case 53:
            message.code = 53;
            break;
        case "ERROR_APP_SERVER_CONNECT_FAIL":
        case 61:
            message.code = 61;
            break;
        case "ERROR_APP_SERVER_RET_NOT_200":
        case 62:
            message.code = 62;
            break;
        case "ERROR_APP_SERVER_RET_NOT_JSON":
        case 63:
            message.code = 63;
            break;
        case "ERROR_APP_SERVER_RET_AUTH_FAIL":
        case 64:
            message.code = 64;
            break;
        case "ERROR_APP_SERVER_RET_CODE_FAIL":
        case 65:
            message.code = 65;
            break;
        case "ERROR_NO_ROOM":
        case 71:
            message.code = 71;
            break;
        case "ERROR_NOT_IN_ROOM":
        case 72:
            message.code = 72;
            break;
        case "ERROR_ALREADY_IN_STAGE":
        case 73:
            message.code = 73;
            break;
        case "ERROR_ALREADY_IN_QUEUE":
        case 74:
            message.code = 74;
            break;
        case "ERROR_ENTER_STAGE_FAIL":
        case 75:
            message.code = 75;
            break;
        case "ERROR_ENTER_STAGE_TIMEOUT":
        case 76:
            message.code = 76;
            break;
        case "ERROR_NOT_IN_STAGE":
        case 77:
            message.code = 77;
            break;
        case "ERROR_INVITER_NOT_IN_UE":
        case 80:
            message.code = 80;
            break;
        case "ERROR_INVITEE_NOT_IN_STAGE":
        case 81:
            message.code = 81;
            break;
        case "ERROR_INVITE_CONTEXT_NOT_EXIST":
        case 82:
            message.code = 82;
            break;
        case "ERROR_INVITEE_NOT_YOU":
        case 83:
            message.code = 83;
            break;
        }
        if (object.roomId != null)
            if ($util.Long)
                (message.roomId = $util.Long.fromValue(object.roomId)).unsigned = true;
            else if (typeof object.roomId === "string")
                message.roomId = parseInt(object.roomId, 10);
            else if (typeof object.roomId === "number")
                message.roomId = object.roomId;
            else if (typeof object.roomId === "object")
                message.roomId = new $util.LongBits(object.roomId.low >>> 0, object.roomId.high >>> 0).toNumber(true);
        return message;
    };

    /**
     * Creates a plain object from a oDissolveRoomAsw message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oDissolveRoomAsw
     * @static
     * @param {oDissolveRoomAsw} message oDissolveRoomAsw
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    oDissolveRoomAsw.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.code = options.enums === String ? "UNKNOWN" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.roomId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.roomId = options.longs === String ? "0" : 0;
        }
        if (message.code != null && message.hasOwnProperty("code"))
            object.code = options.enums === String ? $root.eError[message.code] === undefined ? message.code : $root.eError[message.code] : message.code;
        if (message.roomId != null && message.hasOwnProperty("roomId"))
            if (typeof message.roomId === "number")
                object.roomId = options.longs === String ? String(message.roomId) : message.roomId;
            else
                object.roomId = options.longs === String ? $util.Long.prototype.toString.call(message.roomId) : options.longs === Number ? new $util.LongBits(message.roomId.low >>> 0, message.roomId.high >>> 0).toNumber(true) : message.roomId;
        return object;
    };

    /**
     * Converts this oDissolveRoomAsw to JSON.
     * @function toJSON
     * @memberof oDissolveRoomAsw
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    oDissolveRoomAsw.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for oDissolveRoomAsw
     * @function getTypeUrl
     * @memberof oDissolveRoomAsw
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    oDissolveRoomAsw.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/oDissolveRoomAsw";
    };

    return oDissolveRoomAsw;
})();

$root.oDissolveRoomPush = (function() {

    /**
     * Properties of a oDissolveRoomPush.
     * @exports IoDissolveRoomPush
     * @interface IoDissolveRoomPush
     * @property {number|Long|null} [roomId] oDissolveRoomPush roomId
     */

    /**
     * Constructs a new oDissolveRoomPush.
     * @exports oDissolveRoomPush
     * @classdesc Represents a oDissolveRoomPush.
     * @implements IoDissolveRoomPush
     * @constructor
     * @param {IoDissolveRoomPush=} [properties] Properties to set
     */
    function oDissolveRoomPush(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * oDissolveRoomPush roomId.
     * @member {number|Long} roomId
     * @memberof oDissolveRoomPush
     * @instance
     */
    oDissolveRoomPush.prototype.roomId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Creates a new oDissolveRoomPush instance using the specified properties.
     * @function create
     * @memberof oDissolveRoomPush
     * @static
     * @param {IoDissolveRoomPush=} [properties] Properties to set
     * @returns {oDissolveRoomPush} oDissolveRoomPush instance
     */
    oDissolveRoomPush.create = function create(properties) {
        return new oDissolveRoomPush(properties);
    };

    /**
     * Encodes the specified oDissolveRoomPush message. Does not implicitly {@link oDissolveRoomPush.verify|verify} messages.
     * @function encode
     * @memberof oDissolveRoomPush
     * @static
     * @param {IoDissolveRoomPush} message oDissolveRoomPush message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oDissolveRoomPush.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.roomId);
        return writer;
    };

    /**
     * Encodes the specified oDissolveRoomPush message, length delimited. Does not implicitly {@link oDissolveRoomPush.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oDissolveRoomPush
     * @static
     * @param {IoDissolveRoomPush} message oDissolveRoomPush message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oDissolveRoomPush.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a oDissolveRoomPush message from the specified reader or buffer.
     * @function decode
     * @memberof oDissolveRoomPush
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oDissolveRoomPush} oDissolveRoomPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oDissolveRoomPush.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oDissolveRoomPush();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.roomId = reader.uint64();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a oDissolveRoomPush message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oDissolveRoomPush
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oDissolveRoomPush} oDissolveRoomPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oDissolveRoomPush.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a oDissolveRoomPush message.
     * @function verify
     * @memberof oDissolveRoomPush
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    oDissolveRoomPush.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.roomId != null && message.hasOwnProperty("roomId"))
            if (!$util.isInteger(message.roomId) && !(message.roomId && $util.isInteger(message.roomId.low) && $util.isInteger(message.roomId.high)))
                return "roomId: integer|Long expected";
        return null;
    };

    /**
     * Creates a oDissolveRoomPush message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oDissolveRoomPush
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oDissolveRoomPush} oDissolveRoomPush
     */
    oDissolveRoomPush.fromObject = function fromObject(object) {
        if (object instanceof $root.oDissolveRoomPush)
            return object;
        var message = new $root.oDissolveRoomPush();
        if (object.roomId != null)
            if ($util.Long)
                (message.roomId = $util.Long.fromValue(object.roomId)).unsigned = true;
            else if (typeof object.roomId === "string")
                message.roomId = parseInt(object.roomId, 10);
            else if (typeof object.roomId === "number")
                message.roomId = object.roomId;
            else if (typeof object.roomId === "object")
                message.roomId = new $util.LongBits(object.roomId.low >>> 0, object.roomId.high >>> 0).toNumber(true);
        return message;
    };

    /**
     * Creates a plain object from a oDissolveRoomPush message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oDissolveRoomPush
     * @static
     * @param {oDissolveRoomPush} message oDissolveRoomPush
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    oDissolveRoomPush.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.roomId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.roomId = options.longs === String ? "0" : 0;
        if (message.roomId != null && message.hasOwnProperty("roomId"))
            if (typeof message.roomId === "number")
                object.roomId = options.longs === String ? String(message.roomId) : message.roomId;
            else
                object.roomId = options.longs === String ? $util.Long.prototype.toString.call(message.roomId) : options.longs === Number ? new $util.LongBits(message.roomId.low >>> 0, message.roomId.high >>> 0).toNumber(true) : message.roomId;
        return object;
    };

    /**
     * Converts this oDissolveRoomPush to JSON.
     * @function toJSON
     * @memberof oDissolveRoomPush
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    oDissolveRoomPush.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for oDissolveRoomPush
     * @function getTypeUrl
     * @memberof oDissolveRoomPush
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    oDissolveRoomPush.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/oDissolveRoomPush";
    };

    return oDissolveRoomPush;
})();

$root.oQuitRoomReq = (function() {

    /**
     * Properties of a oQuitRoomReq.
     * @exports IoQuitRoomReq
     * @interface IoQuitRoomReq
     * @property {number|Long|null} [roomId] oQuitRoomReq roomId
     */

    /**
     * Constructs a new oQuitRoomReq.
     * @exports oQuitRoomReq
     * @classdesc Represents a oQuitRoomReq.
     * @implements IoQuitRoomReq
     * @constructor
     * @param {IoQuitRoomReq=} [properties] Properties to set
     */
    function oQuitRoomReq(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * oQuitRoomReq roomId.
     * @member {number|Long} roomId
     * @memberof oQuitRoomReq
     * @instance
     */
    oQuitRoomReq.prototype.roomId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Creates a new oQuitRoomReq instance using the specified properties.
     * @function create
     * @memberof oQuitRoomReq
     * @static
     * @param {IoQuitRoomReq=} [properties] Properties to set
     * @returns {oQuitRoomReq} oQuitRoomReq instance
     */
    oQuitRoomReq.create = function create(properties) {
        return new oQuitRoomReq(properties);
    };

    /**
     * Encodes the specified oQuitRoomReq message. Does not implicitly {@link oQuitRoomReq.verify|verify} messages.
     * @function encode
     * @memberof oQuitRoomReq
     * @static
     * @param {IoQuitRoomReq} message oQuitRoomReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oQuitRoomReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.roomId);
        return writer;
    };

    /**
     * Encodes the specified oQuitRoomReq message, length delimited. Does not implicitly {@link oQuitRoomReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oQuitRoomReq
     * @static
     * @param {IoQuitRoomReq} message oQuitRoomReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oQuitRoomReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a oQuitRoomReq message from the specified reader or buffer.
     * @function decode
     * @memberof oQuitRoomReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oQuitRoomReq} oQuitRoomReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oQuitRoomReq.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oQuitRoomReq();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.roomId = reader.uint64();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a oQuitRoomReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oQuitRoomReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oQuitRoomReq} oQuitRoomReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oQuitRoomReq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a oQuitRoomReq message.
     * @function verify
     * @memberof oQuitRoomReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    oQuitRoomReq.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.roomId != null && message.hasOwnProperty("roomId"))
            if (!$util.isInteger(message.roomId) && !(message.roomId && $util.isInteger(message.roomId.low) && $util.isInteger(message.roomId.high)))
                return "roomId: integer|Long expected";
        return null;
    };

    /**
     * Creates a oQuitRoomReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oQuitRoomReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oQuitRoomReq} oQuitRoomReq
     */
    oQuitRoomReq.fromObject = function fromObject(object) {
        if (object instanceof $root.oQuitRoomReq)
            return object;
        var message = new $root.oQuitRoomReq();
        if (object.roomId != null)
            if ($util.Long)
                (message.roomId = $util.Long.fromValue(object.roomId)).unsigned = true;
            else if (typeof object.roomId === "string")
                message.roomId = parseInt(object.roomId, 10);
            else if (typeof object.roomId === "number")
                message.roomId = object.roomId;
            else if (typeof object.roomId === "object")
                message.roomId = new $util.LongBits(object.roomId.low >>> 0, object.roomId.high >>> 0).toNumber(true);
        return message;
    };

    /**
     * Creates a plain object from a oQuitRoomReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oQuitRoomReq
     * @static
     * @param {oQuitRoomReq} message oQuitRoomReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    oQuitRoomReq.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.roomId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.roomId = options.longs === String ? "0" : 0;
        if (message.roomId != null && message.hasOwnProperty("roomId"))
            if (typeof message.roomId === "number")
                object.roomId = options.longs === String ? String(message.roomId) : message.roomId;
            else
                object.roomId = options.longs === String ? $util.Long.prototype.toString.call(message.roomId) : options.longs === Number ? new $util.LongBits(message.roomId.low >>> 0, message.roomId.high >>> 0).toNumber(true) : message.roomId;
        return object;
    };

    /**
     * Converts this oQuitRoomReq to JSON.
     * @function toJSON
     * @memberof oQuitRoomReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    oQuitRoomReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for oQuitRoomReq
     * @function getTypeUrl
     * @memberof oQuitRoomReq
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    oQuitRoomReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/oQuitRoomReq";
    };

    return oQuitRoomReq;
})();

$root.oQuitRoomAsw = (function() {

    /**
     * Properties of a oQuitRoomAsw.
     * @exports IoQuitRoomAsw
     * @interface IoQuitRoomAsw
     * @property {eError|null} [code] oQuitRoomAsw code
     * @property {number|Long|null} [roomId] oQuitRoomAsw roomId
     */

    /**
     * Constructs a new oQuitRoomAsw.
     * @exports oQuitRoomAsw
     * @classdesc Represents a oQuitRoomAsw.
     * @implements IoQuitRoomAsw
     * @constructor
     * @param {IoQuitRoomAsw=} [properties] Properties to set
     */
    function oQuitRoomAsw(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * oQuitRoomAsw code.
     * @member {eError} code
     * @memberof oQuitRoomAsw
     * @instance
     */
    oQuitRoomAsw.prototype.code = 0;

    /**
     * oQuitRoomAsw roomId.
     * @member {number|Long} roomId
     * @memberof oQuitRoomAsw
     * @instance
     */
    oQuitRoomAsw.prototype.roomId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Creates a new oQuitRoomAsw instance using the specified properties.
     * @function create
     * @memberof oQuitRoomAsw
     * @static
     * @param {IoQuitRoomAsw=} [properties] Properties to set
     * @returns {oQuitRoomAsw} oQuitRoomAsw instance
     */
    oQuitRoomAsw.create = function create(properties) {
        return new oQuitRoomAsw(properties);
    };

    /**
     * Encodes the specified oQuitRoomAsw message. Does not implicitly {@link oQuitRoomAsw.verify|verify} messages.
     * @function encode
     * @memberof oQuitRoomAsw
     * @static
     * @param {IoQuitRoomAsw} message oQuitRoomAsw message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oQuitRoomAsw.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.code != null && Object.hasOwnProperty.call(message, "code"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
        if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.roomId);
        return writer;
    };

    /**
     * Encodes the specified oQuitRoomAsw message, length delimited. Does not implicitly {@link oQuitRoomAsw.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oQuitRoomAsw
     * @static
     * @param {IoQuitRoomAsw} message oQuitRoomAsw message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oQuitRoomAsw.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a oQuitRoomAsw message from the specified reader or buffer.
     * @function decode
     * @memberof oQuitRoomAsw
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oQuitRoomAsw} oQuitRoomAsw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oQuitRoomAsw.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oQuitRoomAsw();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.code = reader.int32();
                    break;
                }
            case 2: {
                    message.roomId = reader.uint64();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a oQuitRoomAsw message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oQuitRoomAsw
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oQuitRoomAsw} oQuitRoomAsw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oQuitRoomAsw.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a oQuitRoomAsw message.
     * @function verify
     * @memberof oQuitRoomAsw
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    oQuitRoomAsw.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.code != null && message.hasOwnProperty("code"))
            switch (message.code) {
            default:
                return "code: enum value expected";
            case 0:
            case 1:
            case 2:
            case 41:
            case 42:
            case 43:
            case 44:
            case 51:
            case 52:
            case 53:
            case 61:
            case 62:
            case 63:
            case 64:
            case 65:
            case 71:
            case 72:
            case 73:
            case 74:
            case 75:
            case 76:
            case 77:
            case 80:
            case 81:
            case 82:
            case 83:
                break;
            }
        if (message.roomId != null && message.hasOwnProperty("roomId"))
            if (!$util.isInteger(message.roomId) && !(message.roomId && $util.isInteger(message.roomId.low) && $util.isInteger(message.roomId.high)))
                return "roomId: integer|Long expected";
        return null;
    };

    /**
     * Creates a oQuitRoomAsw message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oQuitRoomAsw
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oQuitRoomAsw} oQuitRoomAsw
     */
    oQuitRoomAsw.fromObject = function fromObject(object) {
        if (object instanceof $root.oQuitRoomAsw)
            return object;
        var message = new $root.oQuitRoomAsw();
        switch (object.code) {
        default:
            if (typeof object.code === "number") {
                message.code = object.code;
                break;
            }
            break;
        case "UNKNOWN":
        case 0:
            message.code = 0;
            break;
        case "SUCCESS":
        case 1:
            message.code = 1;
            break;
        case "FAILD":
        case 2:
            message.code = 2;
            break;
        case "ERROR_REQ_PARAM":
        case 41:
            message.code = 41;
            break;
        case "ERROR_OTHER_ROOM_OPEN":
        case 42:
            message.code = 42;
            break;
        case "ERROR_CREATE_ROOM_FAIL":
        case 43:
            message.code = 43;
            break;
        case "ERROR_ENTER_ROOM_FAIL":
        case 44:
            message.code = 44;
            break;
        case "EMPTY_INS_TOKEN":
        case 51:
            message.code = 51;
            break;
        case "UNSET_INS_TOKEN":
        case 52:
            message.code = 52;
            break;
        case "ERROR_INS_TOKEN":
        case 53:
            message.code = 53;
            break;
        case "ERROR_APP_SERVER_CONNECT_FAIL":
        case 61:
            message.code = 61;
            break;
        case "ERROR_APP_SERVER_RET_NOT_200":
        case 62:
            message.code = 62;
            break;
        case "ERROR_APP_SERVER_RET_NOT_JSON":
        case 63:
            message.code = 63;
            break;
        case "ERROR_APP_SERVER_RET_AUTH_FAIL":
        case 64:
            message.code = 64;
            break;
        case "ERROR_APP_SERVER_RET_CODE_FAIL":
        case 65:
            message.code = 65;
            break;
        case "ERROR_NO_ROOM":
        case 71:
            message.code = 71;
            break;
        case "ERROR_NOT_IN_ROOM":
        case 72:
            message.code = 72;
            break;
        case "ERROR_ALREADY_IN_STAGE":
        case 73:
            message.code = 73;
            break;
        case "ERROR_ALREADY_IN_QUEUE":
        case 74:
            message.code = 74;
            break;
        case "ERROR_ENTER_STAGE_FAIL":
        case 75:
            message.code = 75;
            break;
        case "ERROR_ENTER_STAGE_TIMEOUT":
        case 76:
            message.code = 76;
            break;
        case "ERROR_NOT_IN_STAGE":
        case 77:
            message.code = 77;
            break;
        case "ERROR_INVITER_NOT_IN_UE":
        case 80:
            message.code = 80;
            break;
        case "ERROR_INVITEE_NOT_IN_STAGE":
        case 81:
            message.code = 81;
            break;
        case "ERROR_INVITE_CONTEXT_NOT_EXIST":
        case 82:
            message.code = 82;
            break;
        case "ERROR_INVITEE_NOT_YOU":
        case 83:
            message.code = 83;
            break;
        }
        if (object.roomId != null)
            if ($util.Long)
                (message.roomId = $util.Long.fromValue(object.roomId)).unsigned = true;
            else if (typeof object.roomId === "string")
                message.roomId = parseInt(object.roomId, 10);
            else if (typeof object.roomId === "number")
                message.roomId = object.roomId;
            else if (typeof object.roomId === "object")
                message.roomId = new $util.LongBits(object.roomId.low >>> 0, object.roomId.high >>> 0).toNumber(true);
        return message;
    };

    /**
     * Creates a plain object from a oQuitRoomAsw message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oQuitRoomAsw
     * @static
     * @param {oQuitRoomAsw} message oQuitRoomAsw
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    oQuitRoomAsw.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.code = options.enums === String ? "UNKNOWN" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.roomId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.roomId = options.longs === String ? "0" : 0;
        }
        if (message.code != null && message.hasOwnProperty("code"))
            object.code = options.enums === String ? $root.eError[message.code] === undefined ? message.code : $root.eError[message.code] : message.code;
        if (message.roomId != null && message.hasOwnProperty("roomId"))
            if (typeof message.roomId === "number")
                object.roomId = options.longs === String ? String(message.roomId) : message.roomId;
            else
                object.roomId = options.longs === String ? $util.Long.prototype.toString.call(message.roomId) : options.longs === Number ? new $util.LongBits(message.roomId.low >>> 0, message.roomId.high >>> 0).toNumber(true) : message.roomId;
        return object;
    };

    /**
     * Converts this oQuitRoomAsw to JSON.
     * @function toJSON
     * @memberof oQuitRoomAsw
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    oQuitRoomAsw.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for oQuitRoomAsw
     * @function getTypeUrl
     * @memberof oQuitRoomAsw
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    oQuitRoomAsw.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/oQuitRoomAsw";
    };

    return oQuitRoomAsw;
})();

$root.oQuitRoomPush = (function() {

    /**
     * Properties of a oQuitRoomPush.
     * @exports IoQuitRoomPush
     * @interface IoQuitRoomPush
     * @property {number|Long|null} [userId] oQuitRoomPush userId
     * @property {number|Long|null} [roomId] oQuitRoomPush roomId
     */

    /**
     * Constructs a new oQuitRoomPush.
     * @exports oQuitRoomPush
     * @classdesc Represents a oQuitRoomPush.
     * @implements IoQuitRoomPush
     * @constructor
     * @param {IoQuitRoomPush=} [properties] Properties to set
     */
    function oQuitRoomPush(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * oQuitRoomPush userId.
     * @member {number|Long} userId
     * @memberof oQuitRoomPush
     * @instance
     */
    oQuitRoomPush.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * oQuitRoomPush roomId.
     * @member {number|Long} roomId
     * @memberof oQuitRoomPush
     * @instance
     */
    oQuitRoomPush.prototype.roomId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Creates a new oQuitRoomPush instance using the specified properties.
     * @function create
     * @memberof oQuitRoomPush
     * @static
     * @param {IoQuitRoomPush=} [properties] Properties to set
     * @returns {oQuitRoomPush} oQuitRoomPush instance
     */
    oQuitRoomPush.create = function create(properties) {
        return new oQuitRoomPush(properties);
    };

    /**
     * Encodes the specified oQuitRoomPush message. Does not implicitly {@link oQuitRoomPush.verify|verify} messages.
     * @function encode
     * @memberof oQuitRoomPush
     * @static
     * @param {IoQuitRoomPush} message oQuitRoomPush message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oQuitRoomPush.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.userId);
        if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.roomId);
        return writer;
    };

    /**
     * Encodes the specified oQuitRoomPush message, length delimited. Does not implicitly {@link oQuitRoomPush.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oQuitRoomPush
     * @static
     * @param {IoQuitRoomPush} message oQuitRoomPush message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oQuitRoomPush.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a oQuitRoomPush message from the specified reader or buffer.
     * @function decode
     * @memberof oQuitRoomPush
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oQuitRoomPush} oQuitRoomPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oQuitRoomPush.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oQuitRoomPush();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.userId = reader.uint64();
                    break;
                }
            case 2: {
                    message.roomId = reader.uint64();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a oQuitRoomPush message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oQuitRoomPush
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oQuitRoomPush} oQuitRoomPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oQuitRoomPush.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a oQuitRoomPush message.
     * @function verify
     * @memberof oQuitRoomPush
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    oQuitRoomPush.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.userId != null && message.hasOwnProperty("userId"))
            if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                return "userId: integer|Long expected";
        if (message.roomId != null && message.hasOwnProperty("roomId"))
            if (!$util.isInteger(message.roomId) && !(message.roomId && $util.isInteger(message.roomId.low) && $util.isInteger(message.roomId.high)))
                return "roomId: integer|Long expected";
        return null;
    };

    /**
     * Creates a oQuitRoomPush message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oQuitRoomPush
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oQuitRoomPush} oQuitRoomPush
     */
    oQuitRoomPush.fromObject = function fromObject(object) {
        if (object instanceof $root.oQuitRoomPush)
            return object;
        var message = new $root.oQuitRoomPush();
        if (object.userId != null)
            if ($util.Long)
                (message.userId = $util.Long.fromValue(object.userId)).unsigned = true;
            else if (typeof object.userId === "string")
                message.userId = parseInt(object.userId, 10);
            else if (typeof object.userId === "number")
                message.userId = object.userId;
            else if (typeof object.userId === "object")
                message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber(true);
        if (object.roomId != null)
            if ($util.Long)
                (message.roomId = $util.Long.fromValue(object.roomId)).unsigned = true;
            else if (typeof object.roomId === "string")
                message.roomId = parseInt(object.roomId, 10);
            else if (typeof object.roomId === "number")
                message.roomId = object.roomId;
            else if (typeof object.roomId === "object")
                message.roomId = new $util.LongBits(object.roomId.low >>> 0, object.roomId.high >>> 0).toNumber(true);
        return message;
    };

    /**
     * Creates a plain object from a oQuitRoomPush message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oQuitRoomPush
     * @static
     * @param {oQuitRoomPush} message oQuitRoomPush
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    oQuitRoomPush.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.userId = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.roomId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.roomId = options.longs === String ? "0" : 0;
        }
        if (message.userId != null && message.hasOwnProperty("userId"))
            if (typeof message.userId === "number")
                object.userId = options.longs === String ? String(message.userId) : message.userId;
            else
                object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber(true) : message.userId;
        if (message.roomId != null && message.hasOwnProperty("roomId"))
            if (typeof message.roomId === "number")
                object.roomId = options.longs === String ? String(message.roomId) : message.roomId;
            else
                object.roomId = options.longs === String ? $util.Long.prototype.toString.call(message.roomId) : options.longs === Number ? new $util.LongBits(message.roomId.low >>> 0, message.roomId.high >>> 0).toNumber(true) : message.roomId;
        return object;
    };

    /**
     * Converts this oQuitRoomPush to JSON.
     * @function toJSON
     * @memberof oQuitRoomPush
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    oQuitRoomPush.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for oQuitRoomPush
     * @function getTypeUrl
     * @memberof oQuitRoomPush
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    oQuitRoomPush.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/oQuitRoomPush";
    };

    return oQuitRoomPush;
})();

$root.oKickUserOutRoom = (function() {

    /**
     * Properties of a oKickUserOutRoom.
     * @exports IoKickUserOutRoom
     * @interface IoKickUserOutRoom
     * @property {number|Long|null} [roomId] oKickUserOutRoom roomId
     * @property {number|Long|null} [kickUserId] oKickUserOutRoom kickUserId
     */

    /**
     * Constructs a new oKickUserOutRoom.
     * @exports oKickUserOutRoom
     * @classdesc Represents a oKickUserOutRoom.
     * @implements IoKickUserOutRoom
     * @constructor
     * @param {IoKickUserOutRoom=} [properties] Properties to set
     */
    function oKickUserOutRoom(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * oKickUserOutRoom roomId.
     * @member {number|Long} roomId
     * @memberof oKickUserOutRoom
     * @instance
     */
    oKickUserOutRoom.prototype.roomId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * oKickUserOutRoom kickUserId.
     * @member {number|Long} kickUserId
     * @memberof oKickUserOutRoom
     * @instance
     */
    oKickUserOutRoom.prototype.kickUserId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Creates a new oKickUserOutRoom instance using the specified properties.
     * @function create
     * @memberof oKickUserOutRoom
     * @static
     * @param {IoKickUserOutRoom=} [properties] Properties to set
     * @returns {oKickUserOutRoom} oKickUserOutRoom instance
     */
    oKickUserOutRoom.create = function create(properties) {
        return new oKickUserOutRoom(properties);
    };

    /**
     * Encodes the specified oKickUserOutRoom message. Does not implicitly {@link oKickUserOutRoom.verify|verify} messages.
     * @function encode
     * @memberof oKickUserOutRoom
     * @static
     * @param {IoKickUserOutRoom} message oKickUserOutRoom message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oKickUserOutRoom.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.roomId);
        if (message.kickUserId != null && Object.hasOwnProperty.call(message, "kickUserId"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.kickUserId);
        return writer;
    };

    /**
     * Encodes the specified oKickUserOutRoom message, length delimited. Does not implicitly {@link oKickUserOutRoom.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oKickUserOutRoom
     * @static
     * @param {IoKickUserOutRoom} message oKickUserOutRoom message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oKickUserOutRoom.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a oKickUserOutRoom message from the specified reader or buffer.
     * @function decode
     * @memberof oKickUserOutRoom
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oKickUserOutRoom} oKickUserOutRoom
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oKickUserOutRoom.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oKickUserOutRoom();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.roomId = reader.uint64();
                    break;
                }
            case 2: {
                    message.kickUserId = reader.uint64();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a oKickUserOutRoom message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oKickUserOutRoom
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oKickUserOutRoom} oKickUserOutRoom
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oKickUserOutRoom.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a oKickUserOutRoom message.
     * @function verify
     * @memberof oKickUserOutRoom
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    oKickUserOutRoom.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.roomId != null && message.hasOwnProperty("roomId"))
            if (!$util.isInteger(message.roomId) && !(message.roomId && $util.isInteger(message.roomId.low) && $util.isInteger(message.roomId.high)))
                return "roomId: integer|Long expected";
        if (message.kickUserId != null && message.hasOwnProperty("kickUserId"))
            if (!$util.isInteger(message.kickUserId) && !(message.kickUserId && $util.isInteger(message.kickUserId.low) && $util.isInteger(message.kickUserId.high)))
                return "kickUserId: integer|Long expected";
        return null;
    };

    /**
     * Creates a oKickUserOutRoom message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oKickUserOutRoom
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oKickUserOutRoom} oKickUserOutRoom
     */
    oKickUserOutRoom.fromObject = function fromObject(object) {
        if (object instanceof $root.oKickUserOutRoom)
            return object;
        var message = new $root.oKickUserOutRoom();
        if (object.roomId != null)
            if ($util.Long)
                (message.roomId = $util.Long.fromValue(object.roomId)).unsigned = true;
            else if (typeof object.roomId === "string")
                message.roomId = parseInt(object.roomId, 10);
            else if (typeof object.roomId === "number")
                message.roomId = object.roomId;
            else if (typeof object.roomId === "object")
                message.roomId = new $util.LongBits(object.roomId.low >>> 0, object.roomId.high >>> 0).toNumber(true);
        if (object.kickUserId != null)
            if ($util.Long)
                (message.kickUserId = $util.Long.fromValue(object.kickUserId)).unsigned = true;
            else if (typeof object.kickUserId === "string")
                message.kickUserId = parseInt(object.kickUserId, 10);
            else if (typeof object.kickUserId === "number")
                message.kickUserId = object.kickUserId;
            else if (typeof object.kickUserId === "object")
                message.kickUserId = new $util.LongBits(object.kickUserId.low >>> 0, object.kickUserId.high >>> 0).toNumber(true);
        return message;
    };

    /**
     * Creates a plain object from a oKickUserOutRoom message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oKickUserOutRoom
     * @static
     * @param {oKickUserOutRoom} message oKickUserOutRoom
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    oKickUserOutRoom.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.roomId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.roomId = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.kickUserId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.kickUserId = options.longs === String ? "0" : 0;
        }
        if (message.roomId != null && message.hasOwnProperty("roomId"))
            if (typeof message.roomId === "number")
                object.roomId = options.longs === String ? String(message.roomId) : message.roomId;
            else
                object.roomId = options.longs === String ? $util.Long.prototype.toString.call(message.roomId) : options.longs === Number ? new $util.LongBits(message.roomId.low >>> 0, message.roomId.high >>> 0).toNumber(true) : message.roomId;
        if (message.kickUserId != null && message.hasOwnProperty("kickUserId"))
            if (typeof message.kickUserId === "number")
                object.kickUserId = options.longs === String ? String(message.kickUserId) : message.kickUserId;
            else
                object.kickUserId = options.longs === String ? $util.Long.prototype.toString.call(message.kickUserId) : options.longs === Number ? new $util.LongBits(message.kickUserId.low >>> 0, message.kickUserId.high >>> 0).toNumber(true) : message.kickUserId;
        return object;
    };

    /**
     * Converts this oKickUserOutRoom to JSON.
     * @function toJSON
     * @memberof oKickUserOutRoom
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    oKickUserOutRoom.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for oKickUserOutRoom
     * @function getTypeUrl
     * @memberof oKickUserOutRoom
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    oKickUserOutRoom.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/oKickUserOutRoom";
    };

    return oKickUserOutRoom;
})();

$root.oKickUserOutRoomAsw = (function() {

    /**
     * Properties of a oKickUserOutRoomAsw.
     * @exports IoKickUserOutRoomAsw
     * @interface IoKickUserOutRoomAsw
     * @property {eError|null} [code] oKickUserOutRoomAsw code
     * @property {number|Long|null} [kickUserId] oKickUserOutRoomAsw kickUserId
     */

    /**
     * Constructs a new oKickUserOutRoomAsw.
     * @exports oKickUserOutRoomAsw
     * @classdesc Represents a oKickUserOutRoomAsw.
     * @implements IoKickUserOutRoomAsw
     * @constructor
     * @param {IoKickUserOutRoomAsw=} [properties] Properties to set
     */
    function oKickUserOutRoomAsw(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * oKickUserOutRoomAsw code.
     * @member {eError} code
     * @memberof oKickUserOutRoomAsw
     * @instance
     */
    oKickUserOutRoomAsw.prototype.code = 0;

    /**
     * oKickUserOutRoomAsw kickUserId.
     * @member {number|Long} kickUserId
     * @memberof oKickUserOutRoomAsw
     * @instance
     */
    oKickUserOutRoomAsw.prototype.kickUserId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Creates a new oKickUserOutRoomAsw instance using the specified properties.
     * @function create
     * @memberof oKickUserOutRoomAsw
     * @static
     * @param {IoKickUserOutRoomAsw=} [properties] Properties to set
     * @returns {oKickUserOutRoomAsw} oKickUserOutRoomAsw instance
     */
    oKickUserOutRoomAsw.create = function create(properties) {
        return new oKickUserOutRoomAsw(properties);
    };

    /**
     * Encodes the specified oKickUserOutRoomAsw message. Does not implicitly {@link oKickUserOutRoomAsw.verify|verify} messages.
     * @function encode
     * @memberof oKickUserOutRoomAsw
     * @static
     * @param {IoKickUserOutRoomAsw} message oKickUserOutRoomAsw message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oKickUserOutRoomAsw.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.code != null && Object.hasOwnProperty.call(message, "code"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
        if (message.kickUserId != null && Object.hasOwnProperty.call(message, "kickUserId"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.kickUserId);
        return writer;
    };

    /**
     * Encodes the specified oKickUserOutRoomAsw message, length delimited. Does not implicitly {@link oKickUserOutRoomAsw.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oKickUserOutRoomAsw
     * @static
     * @param {IoKickUserOutRoomAsw} message oKickUserOutRoomAsw message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oKickUserOutRoomAsw.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a oKickUserOutRoomAsw message from the specified reader or buffer.
     * @function decode
     * @memberof oKickUserOutRoomAsw
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oKickUserOutRoomAsw} oKickUserOutRoomAsw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oKickUserOutRoomAsw.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oKickUserOutRoomAsw();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.code = reader.int32();
                    break;
                }
            case 2: {
                    message.kickUserId = reader.uint64();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a oKickUserOutRoomAsw message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oKickUserOutRoomAsw
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oKickUserOutRoomAsw} oKickUserOutRoomAsw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oKickUserOutRoomAsw.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a oKickUserOutRoomAsw message.
     * @function verify
     * @memberof oKickUserOutRoomAsw
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    oKickUserOutRoomAsw.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.code != null && message.hasOwnProperty("code"))
            switch (message.code) {
            default:
                return "code: enum value expected";
            case 0:
            case 1:
            case 2:
            case 41:
            case 42:
            case 43:
            case 44:
            case 51:
            case 52:
            case 53:
            case 61:
            case 62:
            case 63:
            case 64:
            case 65:
            case 71:
            case 72:
            case 73:
            case 74:
            case 75:
            case 76:
            case 77:
            case 80:
            case 81:
            case 82:
            case 83:
                break;
            }
        if (message.kickUserId != null && message.hasOwnProperty("kickUserId"))
            if (!$util.isInteger(message.kickUserId) && !(message.kickUserId && $util.isInteger(message.kickUserId.low) && $util.isInteger(message.kickUserId.high)))
                return "kickUserId: integer|Long expected";
        return null;
    };

    /**
     * Creates a oKickUserOutRoomAsw message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oKickUserOutRoomAsw
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oKickUserOutRoomAsw} oKickUserOutRoomAsw
     */
    oKickUserOutRoomAsw.fromObject = function fromObject(object) {
        if (object instanceof $root.oKickUserOutRoomAsw)
            return object;
        var message = new $root.oKickUserOutRoomAsw();
        switch (object.code) {
        default:
            if (typeof object.code === "number") {
                message.code = object.code;
                break;
            }
            break;
        case "UNKNOWN":
        case 0:
            message.code = 0;
            break;
        case "SUCCESS":
        case 1:
            message.code = 1;
            break;
        case "FAILD":
        case 2:
            message.code = 2;
            break;
        case "ERROR_REQ_PARAM":
        case 41:
            message.code = 41;
            break;
        case "ERROR_OTHER_ROOM_OPEN":
        case 42:
            message.code = 42;
            break;
        case "ERROR_CREATE_ROOM_FAIL":
        case 43:
            message.code = 43;
            break;
        case "ERROR_ENTER_ROOM_FAIL":
        case 44:
            message.code = 44;
            break;
        case "EMPTY_INS_TOKEN":
        case 51:
            message.code = 51;
            break;
        case "UNSET_INS_TOKEN":
        case 52:
            message.code = 52;
            break;
        case "ERROR_INS_TOKEN":
        case 53:
            message.code = 53;
            break;
        case "ERROR_APP_SERVER_CONNECT_FAIL":
        case 61:
            message.code = 61;
            break;
        case "ERROR_APP_SERVER_RET_NOT_200":
        case 62:
            message.code = 62;
            break;
        case "ERROR_APP_SERVER_RET_NOT_JSON":
        case 63:
            message.code = 63;
            break;
        case "ERROR_APP_SERVER_RET_AUTH_FAIL":
        case 64:
            message.code = 64;
            break;
        case "ERROR_APP_SERVER_RET_CODE_FAIL":
        case 65:
            message.code = 65;
            break;
        case "ERROR_NO_ROOM":
        case 71:
            message.code = 71;
            break;
        case "ERROR_NOT_IN_ROOM":
        case 72:
            message.code = 72;
            break;
        case "ERROR_ALREADY_IN_STAGE":
        case 73:
            message.code = 73;
            break;
        case "ERROR_ALREADY_IN_QUEUE":
        case 74:
            message.code = 74;
            break;
        case "ERROR_ENTER_STAGE_FAIL":
        case 75:
            message.code = 75;
            break;
        case "ERROR_ENTER_STAGE_TIMEOUT":
        case 76:
            message.code = 76;
            break;
        case "ERROR_NOT_IN_STAGE":
        case 77:
            message.code = 77;
            break;
        case "ERROR_INVITER_NOT_IN_UE":
        case 80:
            message.code = 80;
            break;
        case "ERROR_INVITEE_NOT_IN_STAGE":
        case 81:
            message.code = 81;
            break;
        case "ERROR_INVITE_CONTEXT_NOT_EXIST":
        case 82:
            message.code = 82;
            break;
        case "ERROR_INVITEE_NOT_YOU":
        case 83:
            message.code = 83;
            break;
        }
        if (object.kickUserId != null)
            if ($util.Long)
                (message.kickUserId = $util.Long.fromValue(object.kickUserId)).unsigned = true;
            else if (typeof object.kickUserId === "string")
                message.kickUserId = parseInt(object.kickUserId, 10);
            else if (typeof object.kickUserId === "number")
                message.kickUserId = object.kickUserId;
            else if (typeof object.kickUserId === "object")
                message.kickUserId = new $util.LongBits(object.kickUserId.low >>> 0, object.kickUserId.high >>> 0).toNumber(true);
        return message;
    };

    /**
     * Creates a plain object from a oKickUserOutRoomAsw message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oKickUserOutRoomAsw
     * @static
     * @param {oKickUserOutRoomAsw} message oKickUserOutRoomAsw
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    oKickUserOutRoomAsw.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.code = options.enums === String ? "UNKNOWN" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.kickUserId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.kickUserId = options.longs === String ? "0" : 0;
        }
        if (message.code != null && message.hasOwnProperty("code"))
            object.code = options.enums === String ? $root.eError[message.code] === undefined ? message.code : $root.eError[message.code] : message.code;
        if (message.kickUserId != null && message.hasOwnProperty("kickUserId"))
            if (typeof message.kickUserId === "number")
                object.kickUserId = options.longs === String ? String(message.kickUserId) : message.kickUserId;
            else
                object.kickUserId = options.longs === String ? $util.Long.prototype.toString.call(message.kickUserId) : options.longs === Number ? new $util.LongBits(message.kickUserId.low >>> 0, message.kickUserId.high >>> 0).toNumber(true) : message.kickUserId;
        return object;
    };

    /**
     * Converts this oKickUserOutRoomAsw to JSON.
     * @function toJSON
     * @memberof oKickUserOutRoomAsw
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    oKickUserOutRoomAsw.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for oKickUserOutRoomAsw
     * @function getTypeUrl
     * @memberof oKickUserOutRoomAsw
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    oKickUserOutRoomAsw.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/oKickUserOutRoomAsw";
    };

    return oKickUserOutRoomAsw;
})();

$root.oKickUserOutRoomPush = (function() {

    /**
     * Properties of a oKickUserOutRoomPush.
     * @exports IoKickUserOutRoomPush
     * @interface IoKickUserOutRoomPush
     * @property {number|Long|null} [roomId] oKickUserOutRoomPush roomId
     * @property {number|Long|null} [kickUserId] oKickUserOutRoomPush kickUserId
     */

    /**
     * Constructs a new oKickUserOutRoomPush.
     * @exports oKickUserOutRoomPush
     * @classdesc Represents a oKickUserOutRoomPush.
     * @implements IoKickUserOutRoomPush
     * @constructor
     * @param {IoKickUserOutRoomPush=} [properties] Properties to set
     */
    function oKickUserOutRoomPush(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * oKickUserOutRoomPush roomId.
     * @member {number|Long} roomId
     * @memberof oKickUserOutRoomPush
     * @instance
     */
    oKickUserOutRoomPush.prototype.roomId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * oKickUserOutRoomPush kickUserId.
     * @member {number|Long} kickUserId
     * @memberof oKickUserOutRoomPush
     * @instance
     */
    oKickUserOutRoomPush.prototype.kickUserId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Creates a new oKickUserOutRoomPush instance using the specified properties.
     * @function create
     * @memberof oKickUserOutRoomPush
     * @static
     * @param {IoKickUserOutRoomPush=} [properties] Properties to set
     * @returns {oKickUserOutRoomPush} oKickUserOutRoomPush instance
     */
    oKickUserOutRoomPush.create = function create(properties) {
        return new oKickUserOutRoomPush(properties);
    };

    /**
     * Encodes the specified oKickUserOutRoomPush message. Does not implicitly {@link oKickUserOutRoomPush.verify|verify} messages.
     * @function encode
     * @memberof oKickUserOutRoomPush
     * @static
     * @param {IoKickUserOutRoomPush} message oKickUserOutRoomPush message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oKickUserOutRoomPush.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.roomId);
        if (message.kickUserId != null && Object.hasOwnProperty.call(message, "kickUserId"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.kickUserId);
        return writer;
    };

    /**
     * Encodes the specified oKickUserOutRoomPush message, length delimited. Does not implicitly {@link oKickUserOutRoomPush.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oKickUserOutRoomPush
     * @static
     * @param {IoKickUserOutRoomPush} message oKickUserOutRoomPush message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oKickUserOutRoomPush.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a oKickUserOutRoomPush message from the specified reader or buffer.
     * @function decode
     * @memberof oKickUserOutRoomPush
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oKickUserOutRoomPush} oKickUserOutRoomPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oKickUserOutRoomPush.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oKickUserOutRoomPush();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.roomId = reader.uint64();
                    break;
                }
            case 2: {
                    message.kickUserId = reader.uint64();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a oKickUserOutRoomPush message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oKickUserOutRoomPush
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oKickUserOutRoomPush} oKickUserOutRoomPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oKickUserOutRoomPush.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a oKickUserOutRoomPush message.
     * @function verify
     * @memberof oKickUserOutRoomPush
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    oKickUserOutRoomPush.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.roomId != null && message.hasOwnProperty("roomId"))
            if (!$util.isInteger(message.roomId) && !(message.roomId && $util.isInteger(message.roomId.low) && $util.isInteger(message.roomId.high)))
                return "roomId: integer|Long expected";
        if (message.kickUserId != null && message.hasOwnProperty("kickUserId"))
            if (!$util.isInteger(message.kickUserId) && !(message.kickUserId && $util.isInteger(message.kickUserId.low) && $util.isInteger(message.kickUserId.high)))
                return "kickUserId: integer|Long expected";
        return null;
    };

    /**
     * Creates a oKickUserOutRoomPush message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oKickUserOutRoomPush
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oKickUserOutRoomPush} oKickUserOutRoomPush
     */
    oKickUserOutRoomPush.fromObject = function fromObject(object) {
        if (object instanceof $root.oKickUserOutRoomPush)
            return object;
        var message = new $root.oKickUserOutRoomPush();
        if (object.roomId != null)
            if ($util.Long)
                (message.roomId = $util.Long.fromValue(object.roomId)).unsigned = true;
            else if (typeof object.roomId === "string")
                message.roomId = parseInt(object.roomId, 10);
            else if (typeof object.roomId === "number")
                message.roomId = object.roomId;
            else if (typeof object.roomId === "object")
                message.roomId = new $util.LongBits(object.roomId.low >>> 0, object.roomId.high >>> 0).toNumber(true);
        if (object.kickUserId != null)
            if ($util.Long)
                (message.kickUserId = $util.Long.fromValue(object.kickUserId)).unsigned = true;
            else if (typeof object.kickUserId === "string")
                message.kickUserId = parseInt(object.kickUserId, 10);
            else if (typeof object.kickUserId === "number")
                message.kickUserId = object.kickUserId;
            else if (typeof object.kickUserId === "object")
                message.kickUserId = new $util.LongBits(object.kickUserId.low >>> 0, object.kickUserId.high >>> 0).toNumber(true);
        return message;
    };

    /**
     * Creates a plain object from a oKickUserOutRoomPush message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oKickUserOutRoomPush
     * @static
     * @param {oKickUserOutRoomPush} message oKickUserOutRoomPush
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    oKickUserOutRoomPush.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.roomId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.roomId = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.kickUserId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.kickUserId = options.longs === String ? "0" : 0;
        }
        if (message.roomId != null && message.hasOwnProperty("roomId"))
            if (typeof message.roomId === "number")
                object.roomId = options.longs === String ? String(message.roomId) : message.roomId;
            else
                object.roomId = options.longs === String ? $util.Long.prototype.toString.call(message.roomId) : options.longs === Number ? new $util.LongBits(message.roomId.low >>> 0, message.roomId.high >>> 0).toNumber(true) : message.roomId;
        if (message.kickUserId != null && message.hasOwnProperty("kickUserId"))
            if (typeof message.kickUserId === "number")
                object.kickUserId = options.longs === String ? String(message.kickUserId) : message.kickUserId;
            else
                object.kickUserId = options.longs === String ? $util.Long.prototype.toString.call(message.kickUserId) : options.longs === Number ? new $util.LongBits(message.kickUserId.low >>> 0, message.kickUserId.high >>> 0).toNumber(true) : message.kickUserId;
        return object;
    };

    /**
     * Converts this oKickUserOutRoomPush to JSON.
     * @function toJSON
     * @memberof oKickUserOutRoomPush
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    oKickUserOutRoomPush.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for oKickUserOutRoomPush
     * @function getTypeUrl
     * @memberof oKickUserOutRoomPush
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    oKickUserOutRoomPush.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/oKickUserOutRoomPush";
    };

    return oKickUserOutRoomPush;
})();

$root.oChangeRoomNameReq = (function() {

    /**
     * Properties of a oChangeRoomNameReq.
     * @exports IoChangeRoomNameReq
     * @interface IoChangeRoomNameReq
     * @property {number|Long|null} [roomId] oChangeRoomNameReq roomId
     * @property {string|null} [name] oChangeRoomNameReq name
     */

    /**
     * Constructs a new oChangeRoomNameReq.
     * @exports oChangeRoomNameReq
     * @classdesc Represents a oChangeRoomNameReq.
     * @implements IoChangeRoomNameReq
     * @constructor
     * @param {IoChangeRoomNameReq=} [properties] Properties to set
     */
    function oChangeRoomNameReq(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * oChangeRoomNameReq roomId.
     * @member {number|Long} roomId
     * @memberof oChangeRoomNameReq
     * @instance
     */
    oChangeRoomNameReq.prototype.roomId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * oChangeRoomNameReq name.
     * @member {string} name
     * @memberof oChangeRoomNameReq
     * @instance
     */
    oChangeRoomNameReq.prototype.name = "";

    /**
     * Creates a new oChangeRoomNameReq instance using the specified properties.
     * @function create
     * @memberof oChangeRoomNameReq
     * @static
     * @param {IoChangeRoomNameReq=} [properties] Properties to set
     * @returns {oChangeRoomNameReq} oChangeRoomNameReq instance
     */
    oChangeRoomNameReq.create = function create(properties) {
        return new oChangeRoomNameReq(properties);
    };

    /**
     * Encodes the specified oChangeRoomNameReq message. Does not implicitly {@link oChangeRoomNameReq.verify|verify} messages.
     * @function encode
     * @memberof oChangeRoomNameReq
     * @static
     * @param {IoChangeRoomNameReq} message oChangeRoomNameReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oChangeRoomNameReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.roomId);
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
        return writer;
    };

    /**
     * Encodes the specified oChangeRoomNameReq message, length delimited. Does not implicitly {@link oChangeRoomNameReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oChangeRoomNameReq
     * @static
     * @param {IoChangeRoomNameReq} message oChangeRoomNameReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oChangeRoomNameReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a oChangeRoomNameReq message from the specified reader or buffer.
     * @function decode
     * @memberof oChangeRoomNameReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oChangeRoomNameReq} oChangeRoomNameReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oChangeRoomNameReq.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oChangeRoomNameReq();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.roomId = reader.uint64();
                    break;
                }
            case 2: {
                    message.name = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a oChangeRoomNameReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oChangeRoomNameReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oChangeRoomNameReq} oChangeRoomNameReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oChangeRoomNameReq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a oChangeRoomNameReq message.
     * @function verify
     * @memberof oChangeRoomNameReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    oChangeRoomNameReq.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.roomId != null && message.hasOwnProperty("roomId"))
            if (!$util.isInteger(message.roomId) && !(message.roomId && $util.isInteger(message.roomId.low) && $util.isInteger(message.roomId.high)))
                return "roomId: integer|Long expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        return null;
    };

    /**
     * Creates a oChangeRoomNameReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oChangeRoomNameReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oChangeRoomNameReq} oChangeRoomNameReq
     */
    oChangeRoomNameReq.fromObject = function fromObject(object) {
        if (object instanceof $root.oChangeRoomNameReq)
            return object;
        var message = new $root.oChangeRoomNameReq();
        if (object.roomId != null)
            if ($util.Long)
                (message.roomId = $util.Long.fromValue(object.roomId)).unsigned = true;
            else if (typeof object.roomId === "string")
                message.roomId = parseInt(object.roomId, 10);
            else if (typeof object.roomId === "number")
                message.roomId = object.roomId;
            else if (typeof object.roomId === "object")
                message.roomId = new $util.LongBits(object.roomId.low >>> 0, object.roomId.high >>> 0).toNumber(true);
        if (object.name != null)
            message.name = String(object.name);
        return message;
    };

    /**
     * Creates a plain object from a oChangeRoomNameReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oChangeRoomNameReq
     * @static
     * @param {oChangeRoomNameReq} message oChangeRoomNameReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    oChangeRoomNameReq.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.roomId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.roomId = options.longs === String ? "0" : 0;
            object.name = "";
        }
        if (message.roomId != null && message.hasOwnProperty("roomId"))
            if (typeof message.roomId === "number")
                object.roomId = options.longs === String ? String(message.roomId) : message.roomId;
            else
                object.roomId = options.longs === String ? $util.Long.prototype.toString.call(message.roomId) : options.longs === Number ? new $util.LongBits(message.roomId.low >>> 0, message.roomId.high >>> 0).toNumber(true) : message.roomId;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        return object;
    };

    /**
     * Converts this oChangeRoomNameReq to JSON.
     * @function toJSON
     * @memberof oChangeRoomNameReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    oChangeRoomNameReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for oChangeRoomNameReq
     * @function getTypeUrl
     * @memberof oChangeRoomNameReq
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    oChangeRoomNameReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/oChangeRoomNameReq";
    };

    return oChangeRoomNameReq;
})();

$root.oChangeRoomNameAsw = (function() {

    /**
     * Properties of a oChangeRoomNameAsw.
     * @exports IoChangeRoomNameAsw
     * @interface IoChangeRoomNameAsw
     * @property {eError|null} [code] oChangeRoomNameAsw code
     */

    /**
     * Constructs a new oChangeRoomNameAsw.
     * @exports oChangeRoomNameAsw
     * @classdesc Represents a oChangeRoomNameAsw.
     * @implements IoChangeRoomNameAsw
     * @constructor
     * @param {IoChangeRoomNameAsw=} [properties] Properties to set
     */
    function oChangeRoomNameAsw(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * oChangeRoomNameAsw code.
     * @member {eError} code
     * @memberof oChangeRoomNameAsw
     * @instance
     */
    oChangeRoomNameAsw.prototype.code = 0;

    /**
     * Creates a new oChangeRoomNameAsw instance using the specified properties.
     * @function create
     * @memberof oChangeRoomNameAsw
     * @static
     * @param {IoChangeRoomNameAsw=} [properties] Properties to set
     * @returns {oChangeRoomNameAsw} oChangeRoomNameAsw instance
     */
    oChangeRoomNameAsw.create = function create(properties) {
        return new oChangeRoomNameAsw(properties);
    };

    /**
     * Encodes the specified oChangeRoomNameAsw message. Does not implicitly {@link oChangeRoomNameAsw.verify|verify} messages.
     * @function encode
     * @memberof oChangeRoomNameAsw
     * @static
     * @param {IoChangeRoomNameAsw} message oChangeRoomNameAsw message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oChangeRoomNameAsw.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.code != null && Object.hasOwnProperty.call(message, "code"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
        return writer;
    };

    /**
     * Encodes the specified oChangeRoomNameAsw message, length delimited. Does not implicitly {@link oChangeRoomNameAsw.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oChangeRoomNameAsw
     * @static
     * @param {IoChangeRoomNameAsw} message oChangeRoomNameAsw message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oChangeRoomNameAsw.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a oChangeRoomNameAsw message from the specified reader or buffer.
     * @function decode
     * @memberof oChangeRoomNameAsw
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oChangeRoomNameAsw} oChangeRoomNameAsw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oChangeRoomNameAsw.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oChangeRoomNameAsw();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.code = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a oChangeRoomNameAsw message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oChangeRoomNameAsw
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oChangeRoomNameAsw} oChangeRoomNameAsw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oChangeRoomNameAsw.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a oChangeRoomNameAsw message.
     * @function verify
     * @memberof oChangeRoomNameAsw
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    oChangeRoomNameAsw.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.code != null && message.hasOwnProperty("code"))
            switch (message.code) {
            default:
                return "code: enum value expected";
            case 0:
            case 1:
            case 2:
            case 41:
            case 42:
            case 43:
            case 44:
            case 51:
            case 52:
            case 53:
            case 61:
            case 62:
            case 63:
            case 64:
            case 65:
            case 71:
            case 72:
            case 73:
            case 74:
            case 75:
            case 76:
            case 77:
            case 80:
            case 81:
            case 82:
            case 83:
                break;
            }
        return null;
    };

    /**
     * Creates a oChangeRoomNameAsw message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oChangeRoomNameAsw
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oChangeRoomNameAsw} oChangeRoomNameAsw
     */
    oChangeRoomNameAsw.fromObject = function fromObject(object) {
        if (object instanceof $root.oChangeRoomNameAsw)
            return object;
        var message = new $root.oChangeRoomNameAsw();
        switch (object.code) {
        default:
            if (typeof object.code === "number") {
                message.code = object.code;
                break;
            }
            break;
        case "UNKNOWN":
        case 0:
            message.code = 0;
            break;
        case "SUCCESS":
        case 1:
            message.code = 1;
            break;
        case "FAILD":
        case 2:
            message.code = 2;
            break;
        case "ERROR_REQ_PARAM":
        case 41:
            message.code = 41;
            break;
        case "ERROR_OTHER_ROOM_OPEN":
        case 42:
            message.code = 42;
            break;
        case "ERROR_CREATE_ROOM_FAIL":
        case 43:
            message.code = 43;
            break;
        case "ERROR_ENTER_ROOM_FAIL":
        case 44:
            message.code = 44;
            break;
        case "EMPTY_INS_TOKEN":
        case 51:
            message.code = 51;
            break;
        case "UNSET_INS_TOKEN":
        case 52:
            message.code = 52;
            break;
        case "ERROR_INS_TOKEN":
        case 53:
            message.code = 53;
            break;
        case "ERROR_APP_SERVER_CONNECT_FAIL":
        case 61:
            message.code = 61;
            break;
        case "ERROR_APP_SERVER_RET_NOT_200":
        case 62:
            message.code = 62;
            break;
        case "ERROR_APP_SERVER_RET_NOT_JSON":
        case 63:
            message.code = 63;
            break;
        case "ERROR_APP_SERVER_RET_AUTH_FAIL":
        case 64:
            message.code = 64;
            break;
        case "ERROR_APP_SERVER_RET_CODE_FAIL":
        case 65:
            message.code = 65;
            break;
        case "ERROR_NO_ROOM":
        case 71:
            message.code = 71;
            break;
        case "ERROR_NOT_IN_ROOM":
        case 72:
            message.code = 72;
            break;
        case "ERROR_ALREADY_IN_STAGE":
        case 73:
            message.code = 73;
            break;
        case "ERROR_ALREADY_IN_QUEUE":
        case 74:
            message.code = 74;
            break;
        case "ERROR_ENTER_STAGE_FAIL":
        case 75:
            message.code = 75;
            break;
        case "ERROR_ENTER_STAGE_TIMEOUT":
        case 76:
            message.code = 76;
            break;
        case "ERROR_NOT_IN_STAGE":
        case 77:
            message.code = 77;
            break;
        case "ERROR_INVITER_NOT_IN_UE":
        case 80:
            message.code = 80;
            break;
        case "ERROR_INVITEE_NOT_IN_STAGE":
        case 81:
            message.code = 81;
            break;
        case "ERROR_INVITE_CONTEXT_NOT_EXIST":
        case 82:
            message.code = 82;
            break;
        case "ERROR_INVITEE_NOT_YOU":
        case 83:
            message.code = 83;
            break;
        }
        return message;
    };

    /**
     * Creates a plain object from a oChangeRoomNameAsw message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oChangeRoomNameAsw
     * @static
     * @param {oChangeRoomNameAsw} message oChangeRoomNameAsw
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    oChangeRoomNameAsw.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.code = options.enums === String ? "UNKNOWN" : 0;
        if (message.code != null && message.hasOwnProperty("code"))
            object.code = options.enums === String ? $root.eError[message.code] === undefined ? message.code : $root.eError[message.code] : message.code;
        return object;
    };

    /**
     * Converts this oChangeRoomNameAsw to JSON.
     * @function toJSON
     * @memberof oChangeRoomNameAsw
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    oChangeRoomNameAsw.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for oChangeRoomNameAsw
     * @function getTypeUrl
     * @memberof oChangeRoomNameAsw
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    oChangeRoomNameAsw.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/oChangeRoomNameAsw";
    };

    return oChangeRoomNameAsw;
})();

$root.oChangeRoomNamePush = (function() {

    /**
     * Properties of a oChangeRoomNamePush.
     * @exports IoChangeRoomNamePush
     * @interface IoChangeRoomNamePush
     * @property {number|Long|null} [roomId] oChangeRoomNamePush roomId
     * @property {string|null} [name] oChangeRoomNamePush name
     */

    /**
     * Constructs a new oChangeRoomNamePush.
     * @exports oChangeRoomNamePush
     * @classdesc Represents a oChangeRoomNamePush.
     * @implements IoChangeRoomNamePush
     * @constructor
     * @param {IoChangeRoomNamePush=} [properties] Properties to set
     */
    function oChangeRoomNamePush(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * oChangeRoomNamePush roomId.
     * @member {number|Long} roomId
     * @memberof oChangeRoomNamePush
     * @instance
     */
    oChangeRoomNamePush.prototype.roomId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * oChangeRoomNamePush name.
     * @member {string} name
     * @memberof oChangeRoomNamePush
     * @instance
     */
    oChangeRoomNamePush.prototype.name = "";

    /**
     * Creates a new oChangeRoomNamePush instance using the specified properties.
     * @function create
     * @memberof oChangeRoomNamePush
     * @static
     * @param {IoChangeRoomNamePush=} [properties] Properties to set
     * @returns {oChangeRoomNamePush} oChangeRoomNamePush instance
     */
    oChangeRoomNamePush.create = function create(properties) {
        return new oChangeRoomNamePush(properties);
    };

    /**
     * Encodes the specified oChangeRoomNamePush message. Does not implicitly {@link oChangeRoomNamePush.verify|verify} messages.
     * @function encode
     * @memberof oChangeRoomNamePush
     * @static
     * @param {IoChangeRoomNamePush} message oChangeRoomNamePush message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oChangeRoomNamePush.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.roomId);
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
        return writer;
    };

    /**
     * Encodes the specified oChangeRoomNamePush message, length delimited. Does not implicitly {@link oChangeRoomNamePush.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oChangeRoomNamePush
     * @static
     * @param {IoChangeRoomNamePush} message oChangeRoomNamePush message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oChangeRoomNamePush.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a oChangeRoomNamePush message from the specified reader or buffer.
     * @function decode
     * @memberof oChangeRoomNamePush
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oChangeRoomNamePush} oChangeRoomNamePush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oChangeRoomNamePush.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oChangeRoomNamePush();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.roomId = reader.uint64();
                    break;
                }
            case 2: {
                    message.name = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a oChangeRoomNamePush message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oChangeRoomNamePush
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oChangeRoomNamePush} oChangeRoomNamePush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oChangeRoomNamePush.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a oChangeRoomNamePush message.
     * @function verify
     * @memberof oChangeRoomNamePush
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    oChangeRoomNamePush.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.roomId != null && message.hasOwnProperty("roomId"))
            if (!$util.isInteger(message.roomId) && !(message.roomId && $util.isInteger(message.roomId.low) && $util.isInteger(message.roomId.high)))
                return "roomId: integer|Long expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        return null;
    };

    /**
     * Creates a oChangeRoomNamePush message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oChangeRoomNamePush
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oChangeRoomNamePush} oChangeRoomNamePush
     */
    oChangeRoomNamePush.fromObject = function fromObject(object) {
        if (object instanceof $root.oChangeRoomNamePush)
            return object;
        var message = new $root.oChangeRoomNamePush();
        if (object.roomId != null)
            if ($util.Long)
                (message.roomId = $util.Long.fromValue(object.roomId)).unsigned = true;
            else if (typeof object.roomId === "string")
                message.roomId = parseInt(object.roomId, 10);
            else if (typeof object.roomId === "number")
                message.roomId = object.roomId;
            else if (typeof object.roomId === "object")
                message.roomId = new $util.LongBits(object.roomId.low >>> 0, object.roomId.high >>> 0).toNumber(true);
        if (object.name != null)
            message.name = String(object.name);
        return message;
    };

    /**
     * Creates a plain object from a oChangeRoomNamePush message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oChangeRoomNamePush
     * @static
     * @param {oChangeRoomNamePush} message oChangeRoomNamePush
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    oChangeRoomNamePush.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.roomId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.roomId = options.longs === String ? "0" : 0;
            object.name = "";
        }
        if (message.roomId != null && message.hasOwnProperty("roomId"))
            if (typeof message.roomId === "number")
                object.roomId = options.longs === String ? String(message.roomId) : message.roomId;
            else
                object.roomId = options.longs === String ? $util.Long.prototype.toString.call(message.roomId) : options.longs === Number ? new $util.LongBits(message.roomId.low >>> 0, message.roomId.high >>> 0).toNumber(true) : message.roomId;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        return object;
    };

    /**
     * Converts this oChangeRoomNamePush to JSON.
     * @function toJSON
     * @memberof oChangeRoomNamePush
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    oChangeRoomNamePush.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for oChangeRoomNamePush
     * @function getTypeUrl
     * @memberof oChangeRoomNamePush
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    oChangeRoomNamePush.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/oChangeRoomNamePush";
    };

    return oChangeRoomNamePush;
})();

/**
 * eMuteType enum.
 * @exports eMuteType
 * @enum {number}
 * @property {number} MuteOn=0 MuteOn value
 * @property {number} MuteOff=1 MuteOff value
 */
$root.eMuteType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "MuteOn"] = 0;
    values[valuesById[1] = "MuteOff"] = 1;
    return values;
})();

$root.oMuteUserReq = (function() {

    /**
     * Properties of a oMuteUserReq.
     * @exports IoMuteUserReq
     * @interface IoMuteUserReq
     * @property {number|Long|null} [roomId] oMuteUserReq roomId
     * @property {boolean|null} [muteAllUser] oMuteUserReq muteAllUser
     * @property {number|Long|null} [muteUserId] oMuteUserReq muteUserId
     * @property {eMuteType|null} [type] oMuteUserReq type
     */

    /**
     * Constructs a new oMuteUserReq.
     * @exports oMuteUserReq
     * @classdesc Represents a oMuteUserReq.
     * @implements IoMuteUserReq
     * @constructor
     * @param {IoMuteUserReq=} [properties] Properties to set
     */
    function oMuteUserReq(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * oMuteUserReq roomId.
     * @member {number|Long} roomId
     * @memberof oMuteUserReq
     * @instance
     */
    oMuteUserReq.prototype.roomId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * oMuteUserReq muteAllUser.
     * @member {boolean} muteAllUser
     * @memberof oMuteUserReq
     * @instance
     */
    oMuteUserReq.prototype.muteAllUser = false;

    /**
     * oMuteUserReq muteUserId.
     * @member {number|Long} muteUserId
     * @memberof oMuteUserReq
     * @instance
     */
    oMuteUserReq.prototype.muteUserId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * oMuteUserReq type.
     * @member {eMuteType} type
     * @memberof oMuteUserReq
     * @instance
     */
    oMuteUserReq.prototype.type = 0;

    /**
     * Creates a new oMuteUserReq instance using the specified properties.
     * @function create
     * @memberof oMuteUserReq
     * @static
     * @param {IoMuteUserReq=} [properties] Properties to set
     * @returns {oMuteUserReq} oMuteUserReq instance
     */
    oMuteUserReq.create = function create(properties) {
        return new oMuteUserReq(properties);
    };

    /**
     * Encodes the specified oMuteUserReq message. Does not implicitly {@link oMuteUserReq.verify|verify} messages.
     * @function encode
     * @memberof oMuteUserReq
     * @static
     * @param {IoMuteUserReq} message oMuteUserReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oMuteUserReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.roomId);
        if (message.muteAllUser != null && Object.hasOwnProperty.call(message, "muteAllUser"))
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.muteAllUser);
        if (message.muteUserId != null && Object.hasOwnProperty.call(message, "muteUserId"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.muteUserId);
        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.type);
        return writer;
    };

    /**
     * Encodes the specified oMuteUserReq message, length delimited. Does not implicitly {@link oMuteUserReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oMuteUserReq
     * @static
     * @param {IoMuteUserReq} message oMuteUserReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oMuteUserReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a oMuteUserReq message from the specified reader or buffer.
     * @function decode
     * @memberof oMuteUserReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oMuteUserReq} oMuteUserReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oMuteUserReq.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oMuteUserReq();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.roomId = reader.uint64();
                    break;
                }
            case 2: {
                    message.muteAllUser = reader.bool();
                    break;
                }
            case 3: {
                    message.muteUserId = reader.uint64();
                    break;
                }
            case 4: {
                    message.type = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a oMuteUserReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oMuteUserReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oMuteUserReq} oMuteUserReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oMuteUserReq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a oMuteUserReq message.
     * @function verify
     * @memberof oMuteUserReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    oMuteUserReq.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.roomId != null && message.hasOwnProperty("roomId"))
            if (!$util.isInteger(message.roomId) && !(message.roomId && $util.isInteger(message.roomId.low) && $util.isInteger(message.roomId.high)))
                return "roomId: integer|Long expected";
        if (message.muteAllUser != null && message.hasOwnProperty("muteAllUser"))
            if (typeof message.muteAllUser !== "boolean")
                return "muteAllUser: boolean expected";
        if (message.muteUserId != null && message.hasOwnProperty("muteUserId"))
            if (!$util.isInteger(message.muteUserId) && !(message.muteUserId && $util.isInteger(message.muteUserId.low) && $util.isInteger(message.muteUserId.high)))
                return "muteUserId: integer|Long expected";
        if (message.type != null && message.hasOwnProperty("type"))
            switch (message.type) {
            default:
                return "type: enum value expected";
            case 0:
            case 1:
                break;
            }
        return null;
    };

    /**
     * Creates a oMuteUserReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oMuteUserReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oMuteUserReq} oMuteUserReq
     */
    oMuteUserReq.fromObject = function fromObject(object) {
        if (object instanceof $root.oMuteUserReq)
            return object;
        var message = new $root.oMuteUserReq();
        if (object.roomId != null)
            if ($util.Long)
                (message.roomId = $util.Long.fromValue(object.roomId)).unsigned = true;
            else if (typeof object.roomId === "string")
                message.roomId = parseInt(object.roomId, 10);
            else if (typeof object.roomId === "number")
                message.roomId = object.roomId;
            else if (typeof object.roomId === "object")
                message.roomId = new $util.LongBits(object.roomId.low >>> 0, object.roomId.high >>> 0).toNumber(true);
        if (object.muteAllUser != null)
            message.muteAllUser = Boolean(object.muteAllUser);
        if (object.muteUserId != null)
            if ($util.Long)
                (message.muteUserId = $util.Long.fromValue(object.muteUserId)).unsigned = true;
            else if (typeof object.muteUserId === "string")
                message.muteUserId = parseInt(object.muteUserId, 10);
            else if (typeof object.muteUserId === "number")
                message.muteUserId = object.muteUserId;
            else if (typeof object.muteUserId === "object")
                message.muteUserId = new $util.LongBits(object.muteUserId.low >>> 0, object.muteUserId.high >>> 0).toNumber(true);
        switch (object.type) {
        default:
            if (typeof object.type === "number") {
                message.type = object.type;
                break;
            }
            break;
        case "MuteOn":
        case 0:
            message.type = 0;
            break;
        case "MuteOff":
        case 1:
            message.type = 1;
            break;
        }
        return message;
    };

    /**
     * Creates a plain object from a oMuteUserReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oMuteUserReq
     * @static
     * @param {oMuteUserReq} message oMuteUserReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    oMuteUserReq.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.roomId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.roomId = options.longs === String ? "0" : 0;
            object.muteAllUser = false;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.muteUserId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.muteUserId = options.longs === String ? "0" : 0;
            object.type = options.enums === String ? "MuteOn" : 0;
        }
        if (message.roomId != null && message.hasOwnProperty("roomId"))
            if (typeof message.roomId === "number")
                object.roomId = options.longs === String ? String(message.roomId) : message.roomId;
            else
                object.roomId = options.longs === String ? $util.Long.prototype.toString.call(message.roomId) : options.longs === Number ? new $util.LongBits(message.roomId.low >>> 0, message.roomId.high >>> 0).toNumber(true) : message.roomId;
        if (message.muteAllUser != null && message.hasOwnProperty("muteAllUser"))
            object.muteAllUser = message.muteAllUser;
        if (message.muteUserId != null && message.hasOwnProperty("muteUserId"))
            if (typeof message.muteUserId === "number")
                object.muteUserId = options.longs === String ? String(message.muteUserId) : message.muteUserId;
            else
                object.muteUserId = options.longs === String ? $util.Long.prototype.toString.call(message.muteUserId) : options.longs === Number ? new $util.LongBits(message.muteUserId.low >>> 0, message.muteUserId.high >>> 0).toNumber(true) : message.muteUserId;
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = options.enums === String ? $root.eMuteType[message.type] === undefined ? message.type : $root.eMuteType[message.type] : message.type;
        return object;
    };

    /**
     * Converts this oMuteUserReq to JSON.
     * @function toJSON
     * @memberof oMuteUserReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    oMuteUserReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for oMuteUserReq
     * @function getTypeUrl
     * @memberof oMuteUserReq
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    oMuteUserReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/oMuteUserReq";
    };

    return oMuteUserReq;
})();

$root.oMuteUserAsw = (function() {

    /**
     * Properties of a oMuteUserAsw.
     * @exports IoMuteUserAsw
     * @interface IoMuteUserAsw
     * @property {eError|null} [code] oMuteUserAsw code
     * @property {number|Long|null} [roomId] oMuteUserAsw roomId
     * @property {boolean|null} [muteAllUser] oMuteUserAsw muteAllUser
     * @property {number|Long|null} [muteUserId] oMuteUserAsw muteUserId
     * @property {eMuteType|null} [type] oMuteUserAsw type
     */

    /**
     * Constructs a new oMuteUserAsw.
     * @exports oMuteUserAsw
     * @classdesc Represents a oMuteUserAsw.
     * @implements IoMuteUserAsw
     * @constructor
     * @param {IoMuteUserAsw=} [properties] Properties to set
     */
    function oMuteUserAsw(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * oMuteUserAsw code.
     * @member {eError} code
     * @memberof oMuteUserAsw
     * @instance
     */
    oMuteUserAsw.prototype.code = 0;

    /**
     * oMuteUserAsw roomId.
     * @member {number|Long} roomId
     * @memberof oMuteUserAsw
     * @instance
     */
    oMuteUserAsw.prototype.roomId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * oMuteUserAsw muteAllUser.
     * @member {boolean} muteAllUser
     * @memberof oMuteUserAsw
     * @instance
     */
    oMuteUserAsw.prototype.muteAllUser = false;

    /**
     * oMuteUserAsw muteUserId.
     * @member {number|Long} muteUserId
     * @memberof oMuteUserAsw
     * @instance
     */
    oMuteUserAsw.prototype.muteUserId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * oMuteUserAsw type.
     * @member {eMuteType} type
     * @memberof oMuteUserAsw
     * @instance
     */
    oMuteUserAsw.prototype.type = 0;

    /**
     * Creates a new oMuteUserAsw instance using the specified properties.
     * @function create
     * @memberof oMuteUserAsw
     * @static
     * @param {IoMuteUserAsw=} [properties] Properties to set
     * @returns {oMuteUserAsw} oMuteUserAsw instance
     */
    oMuteUserAsw.create = function create(properties) {
        return new oMuteUserAsw(properties);
    };

    /**
     * Encodes the specified oMuteUserAsw message. Does not implicitly {@link oMuteUserAsw.verify|verify} messages.
     * @function encode
     * @memberof oMuteUserAsw
     * @static
     * @param {IoMuteUserAsw} message oMuteUserAsw message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oMuteUserAsw.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.code != null && Object.hasOwnProperty.call(message, "code"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
        if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.roomId);
        if (message.muteAllUser != null && Object.hasOwnProperty.call(message, "muteAllUser"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.muteAllUser);
        if (message.muteUserId != null && Object.hasOwnProperty.call(message, "muteUserId"))
            writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.muteUserId);
        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.type);
        return writer;
    };

    /**
     * Encodes the specified oMuteUserAsw message, length delimited. Does not implicitly {@link oMuteUserAsw.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oMuteUserAsw
     * @static
     * @param {IoMuteUserAsw} message oMuteUserAsw message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oMuteUserAsw.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a oMuteUserAsw message from the specified reader or buffer.
     * @function decode
     * @memberof oMuteUserAsw
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oMuteUserAsw} oMuteUserAsw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oMuteUserAsw.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oMuteUserAsw();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.code = reader.int32();
                    break;
                }
            case 2: {
                    message.roomId = reader.uint64();
                    break;
                }
            case 3: {
                    message.muteAllUser = reader.bool();
                    break;
                }
            case 4: {
                    message.muteUserId = reader.uint64();
                    break;
                }
            case 5: {
                    message.type = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a oMuteUserAsw message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oMuteUserAsw
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oMuteUserAsw} oMuteUserAsw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oMuteUserAsw.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a oMuteUserAsw message.
     * @function verify
     * @memberof oMuteUserAsw
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    oMuteUserAsw.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.code != null && message.hasOwnProperty("code"))
            switch (message.code) {
            default:
                return "code: enum value expected";
            case 0:
            case 1:
            case 2:
            case 41:
            case 42:
            case 43:
            case 44:
            case 51:
            case 52:
            case 53:
            case 61:
            case 62:
            case 63:
            case 64:
            case 65:
            case 71:
            case 72:
            case 73:
            case 74:
            case 75:
            case 76:
            case 77:
            case 80:
            case 81:
            case 82:
            case 83:
                break;
            }
        if (message.roomId != null && message.hasOwnProperty("roomId"))
            if (!$util.isInteger(message.roomId) && !(message.roomId && $util.isInteger(message.roomId.low) && $util.isInteger(message.roomId.high)))
                return "roomId: integer|Long expected";
        if (message.muteAllUser != null && message.hasOwnProperty("muteAllUser"))
            if (typeof message.muteAllUser !== "boolean")
                return "muteAllUser: boolean expected";
        if (message.muteUserId != null && message.hasOwnProperty("muteUserId"))
            if (!$util.isInteger(message.muteUserId) && !(message.muteUserId && $util.isInteger(message.muteUserId.low) && $util.isInteger(message.muteUserId.high)))
                return "muteUserId: integer|Long expected";
        if (message.type != null && message.hasOwnProperty("type"))
            switch (message.type) {
            default:
                return "type: enum value expected";
            case 0:
            case 1:
                break;
            }
        return null;
    };

    /**
     * Creates a oMuteUserAsw message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oMuteUserAsw
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oMuteUserAsw} oMuteUserAsw
     */
    oMuteUserAsw.fromObject = function fromObject(object) {
        if (object instanceof $root.oMuteUserAsw)
            return object;
        var message = new $root.oMuteUserAsw();
        switch (object.code) {
        default:
            if (typeof object.code === "number") {
                message.code = object.code;
                break;
            }
            break;
        case "UNKNOWN":
        case 0:
            message.code = 0;
            break;
        case "SUCCESS":
        case 1:
            message.code = 1;
            break;
        case "FAILD":
        case 2:
            message.code = 2;
            break;
        case "ERROR_REQ_PARAM":
        case 41:
            message.code = 41;
            break;
        case "ERROR_OTHER_ROOM_OPEN":
        case 42:
            message.code = 42;
            break;
        case "ERROR_CREATE_ROOM_FAIL":
        case 43:
            message.code = 43;
            break;
        case "ERROR_ENTER_ROOM_FAIL":
        case 44:
            message.code = 44;
            break;
        case "EMPTY_INS_TOKEN":
        case 51:
            message.code = 51;
            break;
        case "UNSET_INS_TOKEN":
        case 52:
            message.code = 52;
            break;
        case "ERROR_INS_TOKEN":
        case 53:
            message.code = 53;
            break;
        case "ERROR_APP_SERVER_CONNECT_FAIL":
        case 61:
            message.code = 61;
            break;
        case "ERROR_APP_SERVER_RET_NOT_200":
        case 62:
            message.code = 62;
            break;
        case "ERROR_APP_SERVER_RET_NOT_JSON":
        case 63:
            message.code = 63;
            break;
        case "ERROR_APP_SERVER_RET_AUTH_FAIL":
        case 64:
            message.code = 64;
            break;
        case "ERROR_APP_SERVER_RET_CODE_FAIL":
        case 65:
            message.code = 65;
            break;
        case "ERROR_NO_ROOM":
        case 71:
            message.code = 71;
            break;
        case "ERROR_NOT_IN_ROOM":
        case 72:
            message.code = 72;
            break;
        case "ERROR_ALREADY_IN_STAGE":
        case 73:
            message.code = 73;
            break;
        case "ERROR_ALREADY_IN_QUEUE":
        case 74:
            message.code = 74;
            break;
        case "ERROR_ENTER_STAGE_FAIL":
        case 75:
            message.code = 75;
            break;
        case "ERROR_ENTER_STAGE_TIMEOUT":
        case 76:
            message.code = 76;
            break;
        case "ERROR_NOT_IN_STAGE":
        case 77:
            message.code = 77;
            break;
        case "ERROR_INVITER_NOT_IN_UE":
        case 80:
            message.code = 80;
            break;
        case "ERROR_INVITEE_NOT_IN_STAGE":
        case 81:
            message.code = 81;
            break;
        case "ERROR_INVITE_CONTEXT_NOT_EXIST":
        case 82:
            message.code = 82;
            break;
        case "ERROR_INVITEE_NOT_YOU":
        case 83:
            message.code = 83;
            break;
        }
        if (object.roomId != null)
            if ($util.Long)
                (message.roomId = $util.Long.fromValue(object.roomId)).unsigned = true;
            else if (typeof object.roomId === "string")
                message.roomId = parseInt(object.roomId, 10);
            else if (typeof object.roomId === "number")
                message.roomId = object.roomId;
            else if (typeof object.roomId === "object")
                message.roomId = new $util.LongBits(object.roomId.low >>> 0, object.roomId.high >>> 0).toNumber(true);
        if (object.muteAllUser != null)
            message.muteAllUser = Boolean(object.muteAllUser);
        if (object.muteUserId != null)
            if ($util.Long)
                (message.muteUserId = $util.Long.fromValue(object.muteUserId)).unsigned = true;
            else if (typeof object.muteUserId === "string")
                message.muteUserId = parseInt(object.muteUserId, 10);
            else if (typeof object.muteUserId === "number")
                message.muteUserId = object.muteUserId;
            else if (typeof object.muteUserId === "object")
                message.muteUserId = new $util.LongBits(object.muteUserId.low >>> 0, object.muteUserId.high >>> 0).toNumber(true);
        switch (object.type) {
        default:
            if (typeof object.type === "number") {
                message.type = object.type;
                break;
            }
            break;
        case "MuteOn":
        case 0:
            message.type = 0;
            break;
        case "MuteOff":
        case 1:
            message.type = 1;
            break;
        }
        return message;
    };

    /**
     * Creates a plain object from a oMuteUserAsw message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oMuteUserAsw
     * @static
     * @param {oMuteUserAsw} message oMuteUserAsw
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    oMuteUserAsw.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.code = options.enums === String ? "UNKNOWN" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.roomId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.roomId = options.longs === String ? "0" : 0;
            object.muteAllUser = false;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.muteUserId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.muteUserId = options.longs === String ? "0" : 0;
            object.type = options.enums === String ? "MuteOn" : 0;
        }
        if (message.code != null && message.hasOwnProperty("code"))
            object.code = options.enums === String ? $root.eError[message.code] === undefined ? message.code : $root.eError[message.code] : message.code;
        if (message.roomId != null && message.hasOwnProperty("roomId"))
            if (typeof message.roomId === "number")
                object.roomId = options.longs === String ? String(message.roomId) : message.roomId;
            else
                object.roomId = options.longs === String ? $util.Long.prototype.toString.call(message.roomId) : options.longs === Number ? new $util.LongBits(message.roomId.low >>> 0, message.roomId.high >>> 0).toNumber(true) : message.roomId;
        if (message.muteAllUser != null && message.hasOwnProperty("muteAllUser"))
            object.muteAllUser = message.muteAllUser;
        if (message.muteUserId != null && message.hasOwnProperty("muteUserId"))
            if (typeof message.muteUserId === "number")
                object.muteUserId = options.longs === String ? String(message.muteUserId) : message.muteUserId;
            else
                object.muteUserId = options.longs === String ? $util.Long.prototype.toString.call(message.muteUserId) : options.longs === Number ? new $util.LongBits(message.muteUserId.low >>> 0, message.muteUserId.high >>> 0).toNumber(true) : message.muteUserId;
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = options.enums === String ? $root.eMuteType[message.type] === undefined ? message.type : $root.eMuteType[message.type] : message.type;
        return object;
    };

    /**
     * Converts this oMuteUserAsw to JSON.
     * @function toJSON
     * @memberof oMuteUserAsw
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    oMuteUserAsw.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for oMuteUserAsw
     * @function getTypeUrl
     * @memberof oMuteUserAsw
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    oMuteUserAsw.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/oMuteUserAsw";
    };

    return oMuteUserAsw;
})();

$root.oMuteUserPush = (function() {

    /**
     * Properties of a oMuteUserPush.
     * @exports IoMuteUserPush
     * @interface IoMuteUserPush
     * @property {number|Long|null} [roomId] oMuteUserPush roomId
     * @property {number|Long|null} [muteUserId] oMuteUserPush muteUserId
     * @property {boolean|null} [muteAllUser] oMuteUserPush muteAllUser
     * @property {eMuteType|null} [type] oMuteUserPush type
     */

    /**
     * Constructs a new oMuteUserPush.
     * @exports oMuteUserPush
     * @classdesc Represents a oMuteUserPush.
     * @implements IoMuteUserPush
     * @constructor
     * @param {IoMuteUserPush=} [properties] Properties to set
     */
    function oMuteUserPush(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * oMuteUserPush roomId.
     * @member {number|Long} roomId
     * @memberof oMuteUserPush
     * @instance
     */
    oMuteUserPush.prototype.roomId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * oMuteUserPush muteUserId.
     * @member {number|Long} muteUserId
     * @memberof oMuteUserPush
     * @instance
     */
    oMuteUserPush.prototype.muteUserId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * oMuteUserPush muteAllUser.
     * @member {boolean} muteAllUser
     * @memberof oMuteUserPush
     * @instance
     */
    oMuteUserPush.prototype.muteAllUser = false;

    /**
     * oMuteUserPush type.
     * @member {eMuteType} type
     * @memberof oMuteUserPush
     * @instance
     */
    oMuteUserPush.prototype.type = 0;

    /**
     * Creates a new oMuteUserPush instance using the specified properties.
     * @function create
     * @memberof oMuteUserPush
     * @static
     * @param {IoMuteUserPush=} [properties] Properties to set
     * @returns {oMuteUserPush} oMuteUserPush instance
     */
    oMuteUserPush.create = function create(properties) {
        return new oMuteUserPush(properties);
    };

    /**
     * Encodes the specified oMuteUserPush message. Does not implicitly {@link oMuteUserPush.verify|verify} messages.
     * @function encode
     * @memberof oMuteUserPush
     * @static
     * @param {IoMuteUserPush} message oMuteUserPush message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oMuteUserPush.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.roomId);
        if (message.muteUserId != null && Object.hasOwnProperty.call(message, "muteUserId"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.muteUserId);
        if (message.muteAllUser != null && Object.hasOwnProperty.call(message, "muteAllUser"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.muteAllUser);
        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.type);
        return writer;
    };

    /**
     * Encodes the specified oMuteUserPush message, length delimited. Does not implicitly {@link oMuteUserPush.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oMuteUserPush
     * @static
     * @param {IoMuteUserPush} message oMuteUserPush message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oMuteUserPush.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a oMuteUserPush message from the specified reader or buffer.
     * @function decode
     * @memberof oMuteUserPush
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oMuteUserPush} oMuteUserPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oMuteUserPush.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oMuteUserPush();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.roomId = reader.uint64();
                    break;
                }
            case 2: {
                    message.muteUserId = reader.uint64();
                    break;
                }
            case 3: {
                    message.muteAllUser = reader.bool();
                    break;
                }
            case 4: {
                    message.type = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a oMuteUserPush message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oMuteUserPush
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oMuteUserPush} oMuteUserPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oMuteUserPush.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a oMuteUserPush message.
     * @function verify
     * @memberof oMuteUserPush
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    oMuteUserPush.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.roomId != null && message.hasOwnProperty("roomId"))
            if (!$util.isInteger(message.roomId) && !(message.roomId && $util.isInteger(message.roomId.low) && $util.isInteger(message.roomId.high)))
                return "roomId: integer|Long expected";
        if (message.muteUserId != null && message.hasOwnProperty("muteUserId"))
            if (!$util.isInteger(message.muteUserId) && !(message.muteUserId && $util.isInteger(message.muteUserId.low) && $util.isInteger(message.muteUserId.high)))
                return "muteUserId: integer|Long expected";
        if (message.muteAllUser != null && message.hasOwnProperty("muteAllUser"))
            if (typeof message.muteAllUser !== "boolean")
                return "muteAllUser: boolean expected";
        if (message.type != null && message.hasOwnProperty("type"))
            switch (message.type) {
            default:
                return "type: enum value expected";
            case 0:
            case 1:
                break;
            }
        return null;
    };

    /**
     * Creates a oMuteUserPush message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oMuteUserPush
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oMuteUserPush} oMuteUserPush
     */
    oMuteUserPush.fromObject = function fromObject(object) {
        if (object instanceof $root.oMuteUserPush)
            return object;
        var message = new $root.oMuteUserPush();
        if (object.roomId != null)
            if ($util.Long)
                (message.roomId = $util.Long.fromValue(object.roomId)).unsigned = true;
            else if (typeof object.roomId === "string")
                message.roomId = parseInt(object.roomId, 10);
            else if (typeof object.roomId === "number")
                message.roomId = object.roomId;
            else if (typeof object.roomId === "object")
                message.roomId = new $util.LongBits(object.roomId.low >>> 0, object.roomId.high >>> 0).toNumber(true);
        if (object.muteUserId != null)
            if ($util.Long)
                (message.muteUserId = $util.Long.fromValue(object.muteUserId)).unsigned = true;
            else if (typeof object.muteUserId === "string")
                message.muteUserId = parseInt(object.muteUserId, 10);
            else if (typeof object.muteUserId === "number")
                message.muteUserId = object.muteUserId;
            else if (typeof object.muteUserId === "object")
                message.muteUserId = new $util.LongBits(object.muteUserId.low >>> 0, object.muteUserId.high >>> 0).toNumber(true);
        if (object.muteAllUser != null)
            message.muteAllUser = Boolean(object.muteAllUser);
        switch (object.type) {
        default:
            if (typeof object.type === "number") {
                message.type = object.type;
                break;
            }
            break;
        case "MuteOn":
        case 0:
            message.type = 0;
            break;
        case "MuteOff":
        case 1:
            message.type = 1;
            break;
        }
        return message;
    };

    /**
     * Creates a plain object from a oMuteUserPush message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oMuteUserPush
     * @static
     * @param {oMuteUserPush} message oMuteUserPush
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    oMuteUserPush.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.roomId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.roomId = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.muteUserId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.muteUserId = options.longs === String ? "0" : 0;
            object.muteAllUser = false;
            object.type = options.enums === String ? "MuteOn" : 0;
        }
        if (message.roomId != null && message.hasOwnProperty("roomId"))
            if (typeof message.roomId === "number")
                object.roomId = options.longs === String ? String(message.roomId) : message.roomId;
            else
                object.roomId = options.longs === String ? $util.Long.prototype.toString.call(message.roomId) : options.longs === Number ? new $util.LongBits(message.roomId.low >>> 0, message.roomId.high >>> 0).toNumber(true) : message.roomId;
        if (message.muteUserId != null && message.hasOwnProperty("muteUserId"))
            if (typeof message.muteUserId === "number")
                object.muteUserId = options.longs === String ? String(message.muteUserId) : message.muteUserId;
            else
                object.muteUserId = options.longs === String ? $util.Long.prototype.toString.call(message.muteUserId) : options.longs === Number ? new $util.LongBits(message.muteUserId.low >>> 0, message.muteUserId.high >>> 0).toNumber(true) : message.muteUserId;
        if (message.muteAllUser != null && message.hasOwnProperty("muteAllUser"))
            object.muteAllUser = message.muteAllUser;
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = options.enums === String ? $root.eMuteType[message.type] === undefined ? message.type : $root.eMuteType[message.type] : message.type;
        return object;
    };

    /**
     * Converts this oMuteUserPush to JSON.
     * @function toJSON
     * @memberof oMuteUserPush
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    oMuteUserPush.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for oMuteUserPush
     * @function getTypeUrl
     * @memberof oMuteUserPush
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    oMuteUserPush.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/oMuteUserPush";
    };

    return oMuteUserPush;
})();

$root.oRoomSetMaxStageCountReq = (function() {

    /**
     * Properties of a oRoomSetMaxStageCountReq.
     * @exports IoRoomSetMaxStageCountReq
     * @interface IoRoomSetMaxStageCountReq
     * @property {number|Long|null} [roomId] oRoomSetMaxStageCountReq roomId
     * @property {number|Long|null} [maxStageCount] oRoomSetMaxStageCountReq maxStageCount
     */

    /**
     * Constructs a new oRoomSetMaxStageCountReq.
     * @exports oRoomSetMaxStageCountReq
     * @classdesc Represents a oRoomSetMaxStageCountReq.
     * @implements IoRoomSetMaxStageCountReq
     * @constructor
     * @param {IoRoomSetMaxStageCountReq=} [properties] Properties to set
     */
    function oRoomSetMaxStageCountReq(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * oRoomSetMaxStageCountReq roomId.
     * @member {number|Long} roomId
     * @memberof oRoomSetMaxStageCountReq
     * @instance
     */
    oRoomSetMaxStageCountReq.prototype.roomId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * oRoomSetMaxStageCountReq maxStageCount.
     * @member {number|Long} maxStageCount
     * @memberof oRoomSetMaxStageCountReq
     * @instance
     */
    oRoomSetMaxStageCountReq.prototype.maxStageCount = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Creates a new oRoomSetMaxStageCountReq instance using the specified properties.
     * @function create
     * @memberof oRoomSetMaxStageCountReq
     * @static
     * @param {IoRoomSetMaxStageCountReq=} [properties] Properties to set
     * @returns {oRoomSetMaxStageCountReq} oRoomSetMaxStageCountReq instance
     */
    oRoomSetMaxStageCountReq.create = function create(properties) {
        return new oRoomSetMaxStageCountReq(properties);
    };

    /**
     * Encodes the specified oRoomSetMaxStageCountReq message. Does not implicitly {@link oRoomSetMaxStageCountReq.verify|verify} messages.
     * @function encode
     * @memberof oRoomSetMaxStageCountReq
     * @static
     * @param {IoRoomSetMaxStageCountReq} message oRoomSetMaxStageCountReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oRoomSetMaxStageCountReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.roomId);
        if (message.maxStageCount != null && Object.hasOwnProperty.call(message, "maxStageCount"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.maxStageCount);
        return writer;
    };

    /**
     * Encodes the specified oRoomSetMaxStageCountReq message, length delimited. Does not implicitly {@link oRoomSetMaxStageCountReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oRoomSetMaxStageCountReq
     * @static
     * @param {IoRoomSetMaxStageCountReq} message oRoomSetMaxStageCountReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oRoomSetMaxStageCountReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a oRoomSetMaxStageCountReq message from the specified reader or buffer.
     * @function decode
     * @memberof oRoomSetMaxStageCountReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oRoomSetMaxStageCountReq} oRoomSetMaxStageCountReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oRoomSetMaxStageCountReq.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oRoomSetMaxStageCountReq();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.roomId = reader.uint64();
                    break;
                }
            case 2: {
                    message.maxStageCount = reader.uint64();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a oRoomSetMaxStageCountReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oRoomSetMaxStageCountReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oRoomSetMaxStageCountReq} oRoomSetMaxStageCountReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oRoomSetMaxStageCountReq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a oRoomSetMaxStageCountReq message.
     * @function verify
     * @memberof oRoomSetMaxStageCountReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    oRoomSetMaxStageCountReq.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.roomId != null && message.hasOwnProperty("roomId"))
            if (!$util.isInteger(message.roomId) && !(message.roomId && $util.isInteger(message.roomId.low) && $util.isInteger(message.roomId.high)))
                return "roomId: integer|Long expected";
        if (message.maxStageCount != null && message.hasOwnProperty("maxStageCount"))
            if (!$util.isInteger(message.maxStageCount) && !(message.maxStageCount && $util.isInteger(message.maxStageCount.low) && $util.isInteger(message.maxStageCount.high)))
                return "maxStageCount: integer|Long expected";
        return null;
    };

    /**
     * Creates a oRoomSetMaxStageCountReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oRoomSetMaxStageCountReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oRoomSetMaxStageCountReq} oRoomSetMaxStageCountReq
     */
    oRoomSetMaxStageCountReq.fromObject = function fromObject(object) {
        if (object instanceof $root.oRoomSetMaxStageCountReq)
            return object;
        var message = new $root.oRoomSetMaxStageCountReq();
        if (object.roomId != null)
            if ($util.Long)
                (message.roomId = $util.Long.fromValue(object.roomId)).unsigned = true;
            else if (typeof object.roomId === "string")
                message.roomId = parseInt(object.roomId, 10);
            else if (typeof object.roomId === "number")
                message.roomId = object.roomId;
            else if (typeof object.roomId === "object")
                message.roomId = new $util.LongBits(object.roomId.low >>> 0, object.roomId.high >>> 0).toNumber(true);
        if (object.maxStageCount != null)
            if ($util.Long)
                (message.maxStageCount = $util.Long.fromValue(object.maxStageCount)).unsigned = true;
            else if (typeof object.maxStageCount === "string")
                message.maxStageCount = parseInt(object.maxStageCount, 10);
            else if (typeof object.maxStageCount === "number")
                message.maxStageCount = object.maxStageCount;
            else if (typeof object.maxStageCount === "object")
                message.maxStageCount = new $util.LongBits(object.maxStageCount.low >>> 0, object.maxStageCount.high >>> 0).toNumber(true);
        return message;
    };

    /**
     * Creates a plain object from a oRoomSetMaxStageCountReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oRoomSetMaxStageCountReq
     * @static
     * @param {oRoomSetMaxStageCountReq} message oRoomSetMaxStageCountReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    oRoomSetMaxStageCountReq.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.roomId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.roomId = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.maxStageCount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.maxStageCount = options.longs === String ? "0" : 0;
        }
        if (message.roomId != null && message.hasOwnProperty("roomId"))
            if (typeof message.roomId === "number")
                object.roomId = options.longs === String ? String(message.roomId) : message.roomId;
            else
                object.roomId = options.longs === String ? $util.Long.prototype.toString.call(message.roomId) : options.longs === Number ? new $util.LongBits(message.roomId.low >>> 0, message.roomId.high >>> 0).toNumber(true) : message.roomId;
        if (message.maxStageCount != null && message.hasOwnProperty("maxStageCount"))
            if (typeof message.maxStageCount === "number")
                object.maxStageCount = options.longs === String ? String(message.maxStageCount) : message.maxStageCount;
            else
                object.maxStageCount = options.longs === String ? $util.Long.prototype.toString.call(message.maxStageCount) : options.longs === Number ? new $util.LongBits(message.maxStageCount.low >>> 0, message.maxStageCount.high >>> 0).toNumber(true) : message.maxStageCount;
        return object;
    };

    /**
     * Converts this oRoomSetMaxStageCountReq to JSON.
     * @function toJSON
     * @memberof oRoomSetMaxStageCountReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    oRoomSetMaxStageCountReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for oRoomSetMaxStageCountReq
     * @function getTypeUrl
     * @memberof oRoomSetMaxStageCountReq
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    oRoomSetMaxStageCountReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/oRoomSetMaxStageCountReq";
    };

    return oRoomSetMaxStageCountReq;
})();

$root.oRoomSetMaxStageCountAsw = (function() {

    /**
     * Properties of a oRoomSetMaxStageCountAsw.
     * @exports IoRoomSetMaxStageCountAsw
     * @interface IoRoomSetMaxStageCountAsw
     * @property {eError|null} [code] oRoomSetMaxStageCountAsw code
     * @property {number|Long|null} [roomId] oRoomSetMaxStageCountAsw roomId
     * @property {number|Long|null} [maxStageCount] oRoomSetMaxStageCountAsw maxStageCount
     */

    /**
     * Constructs a new oRoomSetMaxStageCountAsw.
     * @exports oRoomSetMaxStageCountAsw
     * @classdesc Represents a oRoomSetMaxStageCountAsw.
     * @implements IoRoomSetMaxStageCountAsw
     * @constructor
     * @param {IoRoomSetMaxStageCountAsw=} [properties] Properties to set
     */
    function oRoomSetMaxStageCountAsw(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * oRoomSetMaxStageCountAsw code.
     * @member {eError} code
     * @memberof oRoomSetMaxStageCountAsw
     * @instance
     */
    oRoomSetMaxStageCountAsw.prototype.code = 0;

    /**
     * oRoomSetMaxStageCountAsw roomId.
     * @member {number|Long} roomId
     * @memberof oRoomSetMaxStageCountAsw
     * @instance
     */
    oRoomSetMaxStageCountAsw.prototype.roomId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * oRoomSetMaxStageCountAsw maxStageCount.
     * @member {number|Long} maxStageCount
     * @memberof oRoomSetMaxStageCountAsw
     * @instance
     */
    oRoomSetMaxStageCountAsw.prototype.maxStageCount = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Creates a new oRoomSetMaxStageCountAsw instance using the specified properties.
     * @function create
     * @memberof oRoomSetMaxStageCountAsw
     * @static
     * @param {IoRoomSetMaxStageCountAsw=} [properties] Properties to set
     * @returns {oRoomSetMaxStageCountAsw} oRoomSetMaxStageCountAsw instance
     */
    oRoomSetMaxStageCountAsw.create = function create(properties) {
        return new oRoomSetMaxStageCountAsw(properties);
    };

    /**
     * Encodes the specified oRoomSetMaxStageCountAsw message. Does not implicitly {@link oRoomSetMaxStageCountAsw.verify|verify} messages.
     * @function encode
     * @memberof oRoomSetMaxStageCountAsw
     * @static
     * @param {IoRoomSetMaxStageCountAsw} message oRoomSetMaxStageCountAsw message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oRoomSetMaxStageCountAsw.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.code != null && Object.hasOwnProperty.call(message, "code"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
        if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.roomId);
        if (message.maxStageCount != null && Object.hasOwnProperty.call(message, "maxStageCount"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.maxStageCount);
        return writer;
    };

    /**
     * Encodes the specified oRoomSetMaxStageCountAsw message, length delimited. Does not implicitly {@link oRoomSetMaxStageCountAsw.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oRoomSetMaxStageCountAsw
     * @static
     * @param {IoRoomSetMaxStageCountAsw} message oRoomSetMaxStageCountAsw message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oRoomSetMaxStageCountAsw.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a oRoomSetMaxStageCountAsw message from the specified reader or buffer.
     * @function decode
     * @memberof oRoomSetMaxStageCountAsw
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oRoomSetMaxStageCountAsw} oRoomSetMaxStageCountAsw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oRoomSetMaxStageCountAsw.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oRoomSetMaxStageCountAsw();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.code = reader.int32();
                    break;
                }
            case 2: {
                    message.roomId = reader.uint64();
                    break;
                }
            case 3: {
                    message.maxStageCount = reader.uint64();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a oRoomSetMaxStageCountAsw message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oRoomSetMaxStageCountAsw
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oRoomSetMaxStageCountAsw} oRoomSetMaxStageCountAsw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oRoomSetMaxStageCountAsw.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a oRoomSetMaxStageCountAsw message.
     * @function verify
     * @memberof oRoomSetMaxStageCountAsw
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    oRoomSetMaxStageCountAsw.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.code != null && message.hasOwnProperty("code"))
            switch (message.code) {
            default:
                return "code: enum value expected";
            case 0:
            case 1:
            case 2:
            case 41:
            case 42:
            case 43:
            case 44:
            case 51:
            case 52:
            case 53:
            case 61:
            case 62:
            case 63:
            case 64:
            case 65:
            case 71:
            case 72:
            case 73:
            case 74:
            case 75:
            case 76:
            case 77:
            case 80:
            case 81:
            case 82:
            case 83:
                break;
            }
        if (message.roomId != null && message.hasOwnProperty("roomId"))
            if (!$util.isInteger(message.roomId) && !(message.roomId && $util.isInteger(message.roomId.low) && $util.isInteger(message.roomId.high)))
                return "roomId: integer|Long expected";
        if (message.maxStageCount != null && message.hasOwnProperty("maxStageCount"))
            if (!$util.isInteger(message.maxStageCount) && !(message.maxStageCount && $util.isInteger(message.maxStageCount.low) && $util.isInteger(message.maxStageCount.high)))
                return "maxStageCount: integer|Long expected";
        return null;
    };

    /**
     * Creates a oRoomSetMaxStageCountAsw message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oRoomSetMaxStageCountAsw
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oRoomSetMaxStageCountAsw} oRoomSetMaxStageCountAsw
     */
    oRoomSetMaxStageCountAsw.fromObject = function fromObject(object) {
        if (object instanceof $root.oRoomSetMaxStageCountAsw)
            return object;
        var message = new $root.oRoomSetMaxStageCountAsw();
        switch (object.code) {
        default:
            if (typeof object.code === "number") {
                message.code = object.code;
                break;
            }
            break;
        case "UNKNOWN":
        case 0:
            message.code = 0;
            break;
        case "SUCCESS":
        case 1:
            message.code = 1;
            break;
        case "FAILD":
        case 2:
            message.code = 2;
            break;
        case "ERROR_REQ_PARAM":
        case 41:
            message.code = 41;
            break;
        case "ERROR_OTHER_ROOM_OPEN":
        case 42:
            message.code = 42;
            break;
        case "ERROR_CREATE_ROOM_FAIL":
        case 43:
            message.code = 43;
            break;
        case "ERROR_ENTER_ROOM_FAIL":
        case 44:
            message.code = 44;
            break;
        case "EMPTY_INS_TOKEN":
        case 51:
            message.code = 51;
            break;
        case "UNSET_INS_TOKEN":
        case 52:
            message.code = 52;
            break;
        case "ERROR_INS_TOKEN":
        case 53:
            message.code = 53;
            break;
        case "ERROR_APP_SERVER_CONNECT_FAIL":
        case 61:
            message.code = 61;
            break;
        case "ERROR_APP_SERVER_RET_NOT_200":
        case 62:
            message.code = 62;
            break;
        case "ERROR_APP_SERVER_RET_NOT_JSON":
        case 63:
            message.code = 63;
            break;
        case "ERROR_APP_SERVER_RET_AUTH_FAIL":
        case 64:
            message.code = 64;
            break;
        case "ERROR_APP_SERVER_RET_CODE_FAIL":
        case 65:
            message.code = 65;
            break;
        case "ERROR_NO_ROOM":
        case 71:
            message.code = 71;
            break;
        case "ERROR_NOT_IN_ROOM":
        case 72:
            message.code = 72;
            break;
        case "ERROR_ALREADY_IN_STAGE":
        case 73:
            message.code = 73;
            break;
        case "ERROR_ALREADY_IN_QUEUE":
        case 74:
            message.code = 74;
            break;
        case "ERROR_ENTER_STAGE_FAIL":
        case 75:
            message.code = 75;
            break;
        case "ERROR_ENTER_STAGE_TIMEOUT":
        case 76:
            message.code = 76;
            break;
        case "ERROR_NOT_IN_STAGE":
        case 77:
            message.code = 77;
            break;
        case "ERROR_INVITER_NOT_IN_UE":
        case 80:
            message.code = 80;
            break;
        case "ERROR_INVITEE_NOT_IN_STAGE":
        case 81:
            message.code = 81;
            break;
        case "ERROR_INVITE_CONTEXT_NOT_EXIST":
        case 82:
            message.code = 82;
            break;
        case "ERROR_INVITEE_NOT_YOU":
        case 83:
            message.code = 83;
            break;
        }
        if (object.roomId != null)
            if ($util.Long)
                (message.roomId = $util.Long.fromValue(object.roomId)).unsigned = true;
            else if (typeof object.roomId === "string")
                message.roomId = parseInt(object.roomId, 10);
            else if (typeof object.roomId === "number")
                message.roomId = object.roomId;
            else if (typeof object.roomId === "object")
                message.roomId = new $util.LongBits(object.roomId.low >>> 0, object.roomId.high >>> 0).toNumber(true);
        if (object.maxStageCount != null)
            if ($util.Long)
                (message.maxStageCount = $util.Long.fromValue(object.maxStageCount)).unsigned = true;
            else if (typeof object.maxStageCount === "string")
                message.maxStageCount = parseInt(object.maxStageCount, 10);
            else if (typeof object.maxStageCount === "number")
                message.maxStageCount = object.maxStageCount;
            else if (typeof object.maxStageCount === "object")
                message.maxStageCount = new $util.LongBits(object.maxStageCount.low >>> 0, object.maxStageCount.high >>> 0).toNumber(true);
        return message;
    };

    /**
     * Creates a plain object from a oRoomSetMaxStageCountAsw message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oRoomSetMaxStageCountAsw
     * @static
     * @param {oRoomSetMaxStageCountAsw} message oRoomSetMaxStageCountAsw
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    oRoomSetMaxStageCountAsw.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.code = options.enums === String ? "UNKNOWN" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.roomId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.roomId = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.maxStageCount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.maxStageCount = options.longs === String ? "0" : 0;
        }
        if (message.code != null && message.hasOwnProperty("code"))
            object.code = options.enums === String ? $root.eError[message.code] === undefined ? message.code : $root.eError[message.code] : message.code;
        if (message.roomId != null && message.hasOwnProperty("roomId"))
            if (typeof message.roomId === "number")
                object.roomId = options.longs === String ? String(message.roomId) : message.roomId;
            else
                object.roomId = options.longs === String ? $util.Long.prototype.toString.call(message.roomId) : options.longs === Number ? new $util.LongBits(message.roomId.low >>> 0, message.roomId.high >>> 0).toNumber(true) : message.roomId;
        if (message.maxStageCount != null && message.hasOwnProperty("maxStageCount"))
            if (typeof message.maxStageCount === "number")
                object.maxStageCount = options.longs === String ? String(message.maxStageCount) : message.maxStageCount;
            else
                object.maxStageCount = options.longs === String ? $util.Long.prototype.toString.call(message.maxStageCount) : options.longs === Number ? new $util.LongBits(message.maxStageCount.low >>> 0, message.maxStageCount.high >>> 0).toNumber(true) : message.maxStageCount;
        return object;
    };

    /**
     * Converts this oRoomSetMaxStageCountAsw to JSON.
     * @function toJSON
     * @memberof oRoomSetMaxStageCountAsw
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    oRoomSetMaxStageCountAsw.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for oRoomSetMaxStageCountAsw
     * @function getTypeUrl
     * @memberof oRoomSetMaxStageCountAsw
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    oRoomSetMaxStageCountAsw.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/oRoomSetMaxStageCountAsw";
    };

    return oRoomSetMaxStageCountAsw;
})();

$root.oRoomSetMaxStageCountPush = (function() {

    /**
     * Properties of a oRoomSetMaxStageCountPush.
     * @exports IoRoomSetMaxStageCountPush
     * @interface IoRoomSetMaxStageCountPush
     * @property {number|Long|null} [roomId] oRoomSetMaxStageCountPush roomId
     * @property {number|Long|null} [maxStageCount] oRoomSetMaxStageCountPush maxStageCount
     */

    /**
     * Constructs a new oRoomSetMaxStageCountPush.
     * @exports oRoomSetMaxStageCountPush
     * @classdesc Represents a oRoomSetMaxStageCountPush.
     * @implements IoRoomSetMaxStageCountPush
     * @constructor
     * @param {IoRoomSetMaxStageCountPush=} [properties] Properties to set
     */
    function oRoomSetMaxStageCountPush(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * oRoomSetMaxStageCountPush roomId.
     * @member {number|Long} roomId
     * @memberof oRoomSetMaxStageCountPush
     * @instance
     */
    oRoomSetMaxStageCountPush.prototype.roomId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * oRoomSetMaxStageCountPush maxStageCount.
     * @member {number|Long} maxStageCount
     * @memberof oRoomSetMaxStageCountPush
     * @instance
     */
    oRoomSetMaxStageCountPush.prototype.maxStageCount = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Creates a new oRoomSetMaxStageCountPush instance using the specified properties.
     * @function create
     * @memberof oRoomSetMaxStageCountPush
     * @static
     * @param {IoRoomSetMaxStageCountPush=} [properties] Properties to set
     * @returns {oRoomSetMaxStageCountPush} oRoomSetMaxStageCountPush instance
     */
    oRoomSetMaxStageCountPush.create = function create(properties) {
        return new oRoomSetMaxStageCountPush(properties);
    };

    /**
     * Encodes the specified oRoomSetMaxStageCountPush message. Does not implicitly {@link oRoomSetMaxStageCountPush.verify|verify} messages.
     * @function encode
     * @memberof oRoomSetMaxStageCountPush
     * @static
     * @param {IoRoomSetMaxStageCountPush} message oRoomSetMaxStageCountPush message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oRoomSetMaxStageCountPush.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.roomId);
        if (message.maxStageCount != null && Object.hasOwnProperty.call(message, "maxStageCount"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.maxStageCount);
        return writer;
    };

    /**
     * Encodes the specified oRoomSetMaxStageCountPush message, length delimited. Does not implicitly {@link oRoomSetMaxStageCountPush.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oRoomSetMaxStageCountPush
     * @static
     * @param {IoRoomSetMaxStageCountPush} message oRoomSetMaxStageCountPush message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oRoomSetMaxStageCountPush.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a oRoomSetMaxStageCountPush message from the specified reader or buffer.
     * @function decode
     * @memberof oRoomSetMaxStageCountPush
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oRoomSetMaxStageCountPush} oRoomSetMaxStageCountPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oRoomSetMaxStageCountPush.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oRoomSetMaxStageCountPush();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.roomId = reader.uint64();
                    break;
                }
            case 3: {
                    message.maxStageCount = reader.uint64();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a oRoomSetMaxStageCountPush message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oRoomSetMaxStageCountPush
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oRoomSetMaxStageCountPush} oRoomSetMaxStageCountPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oRoomSetMaxStageCountPush.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a oRoomSetMaxStageCountPush message.
     * @function verify
     * @memberof oRoomSetMaxStageCountPush
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    oRoomSetMaxStageCountPush.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.roomId != null && message.hasOwnProperty("roomId"))
            if (!$util.isInteger(message.roomId) && !(message.roomId && $util.isInteger(message.roomId.low) && $util.isInteger(message.roomId.high)))
                return "roomId: integer|Long expected";
        if (message.maxStageCount != null && message.hasOwnProperty("maxStageCount"))
            if (!$util.isInteger(message.maxStageCount) && !(message.maxStageCount && $util.isInteger(message.maxStageCount.low) && $util.isInteger(message.maxStageCount.high)))
                return "maxStageCount: integer|Long expected";
        return null;
    };

    /**
     * Creates a oRoomSetMaxStageCountPush message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oRoomSetMaxStageCountPush
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oRoomSetMaxStageCountPush} oRoomSetMaxStageCountPush
     */
    oRoomSetMaxStageCountPush.fromObject = function fromObject(object) {
        if (object instanceof $root.oRoomSetMaxStageCountPush)
            return object;
        var message = new $root.oRoomSetMaxStageCountPush();
        if (object.roomId != null)
            if ($util.Long)
                (message.roomId = $util.Long.fromValue(object.roomId)).unsigned = true;
            else if (typeof object.roomId === "string")
                message.roomId = parseInt(object.roomId, 10);
            else if (typeof object.roomId === "number")
                message.roomId = object.roomId;
            else if (typeof object.roomId === "object")
                message.roomId = new $util.LongBits(object.roomId.low >>> 0, object.roomId.high >>> 0).toNumber(true);
        if (object.maxStageCount != null)
            if ($util.Long)
                (message.maxStageCount = $util.Long.fromValue(object.maxStageCount)).unsigned = true;
            else if (typeof object.maxStageCount === "string")
                message.maxStageCount = parseInt(object.maxStageCount, 10);
            else if (typeof object.maxStageCount === "number")
                message.maxStageCount = object.maxStageCount;
            else if (typeof object.maxStageCount === "object")
                message.maxStageCount = new $util.LongBits(object.maxStageCount.low >>> 0, object.maxStageCount.high >>> 0).toNumber(true);
        return message;
    };

    /**
     * Creates a plain object from a oRoomSetMaxStageCountPush message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oRoomSetMaxStageCountPush
     * @static
     * @param {oRoomSetMaxStageCountPush} message oRoomSetMaxStageCountPush
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    oRoomSetMaxStageCountPush.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.roomId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.roomId = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.maxStageCount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.maxStageCount = options.longs === String ? "0" : 0;
        }
        if (message.roomId != null && message.hasOwnProperty("roomId"))
            if (typeof message.roomId === "number")
                object.roomId = options.longs === String ? String(message.roomId) : message.roomId;
            else
                object.roomId = options.longs === String ? $util.Long.prototype.toString.call(message.roomId) : options.longs === Number ? new $util.LongBits(message.roomId.low >>> 0, message.roomId.high >>> 0).toNumber(true) : message.roomId;
        if (message.maxStageCount != null && message.hasOwnProperty("maxStageCount"))
            if (typeof message.maxStageCount === "number")
                object.maxStageCount = options.longs === String ? String(message.maxStageCount) : message.maxStageCount;
            else
                object.maxStageCount = options.longs === String ? $util.Long.prototype.toString.call(message.maxStageCount) : options.longs === Number ? new $util.LongBits(message.maxStageCount.low >>> 0, message.maxStageCount.high >>> 0).toNumber(true) : message.maxStageCount;
        return object;
    };

    /**
     * Converts this oRoomSetMaxStageCountPush to JSON.
     * @function toJSON
     * @memberof oRoomSetMaxStageCountPush
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    oRoomSetMaxStageCountPush.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for oRoomSetMaxStageCountPush
     * @function getTypeUrl
     * @memberof oRoomSetMaxStageCountPush
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    oRoomSetMaxStageCountPush.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/oRoomSetMaxStageCountPush";
    };

    return oRoomSetMaxStageCountPush;
})();

$root.oEnterStageReq = (function() {

    /**
     * Properties of a oEnterStageReq.
     * @exports IoEnterStageReq
     * @interface IoEnterStageReq
     * @property {string|null} [context] oEnterStageReq context
     */

    /**
     * Constructs a new oEnterStageReq.
     * @exports oEnterStageReq
     * @classdesc Represents a oEnterStageReq.
     * @implements IoEnterStageReq
     * @constructor
     * @param {IoEnterStageReq=} [properties] Properties to set
     */
    function oEnterStageReq(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * oEnterStageReq context.
     * @member {string} context
     * @memberof oEnterStageReq
     * @instance
     */
    oEnterStageReq.prototype.context = "";

    /**
     * Creates a new oEnterStageReq instance using the specified properties.
     * @function create
     * @memberof oEnterStageReq
     * @static
     * @param {IoEnterStageReq=} [properties] Properties to set
     * @returns {oEnterStageReq} oEnterStageReq instance
     */
    oEnterStageReq.create = function create(properties) {
        return new oEnterStageReq(properties);
    };

    /**
     * Encodes the specified oEnterStageReq message. Does not implicitly {@link oEnterStageReq.verify|verify} messages.
     * @function encode
     * @memberof oEnterStageReq
     * @static
     * @param {IoEnterStageReq} message oEnterStageReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oEnterStageReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.context != null && Object.hasOwnProperty.call(message, "context"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.context);
        return writer;
    };

    /**
     * Encodes the specified oEnterStageReq message, length delimited. Does not implicitly {@link oEnterStageReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oEnterStageReq
     * @static
     * @param {IoEnterStageReq} message oEnterStageReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oEnterStageReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a oEnterStageReq message from the specified reader or buffer.
     * @function decode
     * @memberof oEnterStageReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oEnterStageReq} oEnterStageReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oEnterStageReq.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oEnterStageReq();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.context = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a oEnterStageReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oEnterStageReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oEnterStageReq} oEnterStageReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oEnterStageReq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a oEnterStageReq message.
     * @function verify
     * @memberof oEnterStageReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    oEnterStageReq.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.context != null && message.hasOwnProperty("context"))
            if (!$util.isString(message.context))
                return "context: string expected";
        return null;
    };

    /**
     * Creates a oEnterStageReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oEnterStageReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oEnterStageReq} oEnterStageReq
     */
    oEnterStageReq.fromObject = function fromObject(object) {
        if (object instanceof $root.oEnterStageReq)
            return object;
        var message = new $root.oEnterStageReq();
        if (object.context != null)
            message.context = String(object.context);
        return message;
    };

    /**
     * Creates a plain object from a oEnterStageReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oEnterStageReq
     * @static
     * @param {oEnterStageReq} message oEnterStageReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    oEnterStageReq.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.context = "";
        if (message.context != null && message.hasOwnProperty("context"))
            object.context = message.context;
        return object;
    };

    /**
     * Converts this oEnterStageReq to JSON.
     * @function toJSON
     * @memberof oEnterStageReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    oEnterStageReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for oEnterStageReq
     * @function getTypeUrl
     * @memberof oEnterStageReq
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    oEnterStageReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/oEnterStageReq";
    };

    return oEnterStageReq;
})();

$root.oEnterStageAsw = (function() {

    /**
     * Properties of a oEnterStageAsw.
     * @exports IoEnterStageAsw
     * @interface IoEnterStageAsw
     * @property {eError|null} [code] oEnterStageAsw code
     * @property {number|Long|null} [roomId] oEnterStageAsw roomId
     * @property {number|Long|null} [stageId] oEnterStageAsw stageId
     */

    /**
     * Constructs a new oEnterStageAsw.
     * @exports oEnterStageAsw
     * @classdesc Represents a oEnterStageAsw.
     * @implements IoEnterStageAsw
     * @constructor
     * @param {IoEnterStageAsw=} [properties] Properties to set
     */
    function oEnterStageAsw(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * oEnterStageAsw code.
     * @member {eError} code
     * @memberof oEnterStageAsw
     * @instance
     */
    oEnterStageAsw.prototype.code = 0;

    /**
     * oEnterStageAsw roomId.
     * @member {number|Long} roomId
     * @memberof oEnterStageAsw
     * @instance
     */
    oEnterStageAsw.prototype.roomId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * oEnterStageAsw stageId.
     * @member {number|Long} stageId
     * @memberof oEnterStageAsw
     * @instance
     */
    oEnterStageAsw.prototype.stageId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Creates a new oEnterStageAsw instance using the specified properties.
     * @function create
     * @memberof oEnterStageAsw
     * @static
     * @param {IoEnterStageAsw=} [properties] Properties to set
     * @returns {oEnterStageAsw} oEnterStageAsw instance
     */
    oEnterStageAsw.create = function create(properties) {
        return new oEnterStageAsw(properties);
    };

    /**
     * Encodes the specified oEnterStageAsw message. Does not implicitly {@link oEnterStageAsw.verify|verify} messages.
     * @function encode
     * @memberof oEnterStageAsw
     * @static
     * @param {IoEnterStageAsw} message oEnterStageAsw message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oEnterStageAsw.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.code != null && Object.hasOwnProperty.call(message, "code"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
        if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.roomId);
        if (message.stageId != null && Object.hasOwnProperty.call(message, "stageId"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.stageId);
        return writer;
    };

    /**
     * Encodes the specified oEnterStageAsw message, length delimited. Does not implicitly {@link oEnterStageAsw.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oEnterStageAsw
     * @static
     * @param {IoEnterStageAsw} message oEnterStageAsw message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oEnterStageAsw.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a oEnterStageAsw message from the specified reader or buffer.
     * @function decode
     * @memberof oEnterStageAsw
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oEnterStageAsw} oEnterStageAsw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oEnterStageAsw.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oEnterStageAsw();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.code = reader.int32();
                    break;
                }
            case 2: {
                    message.roomId = reader.uint64();
                    break;
                }
            case 3: {
                    message.stageId = reader.uint64();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a oEnterStageAsw message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oEnterStageAsw
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oEnterStageAsw} oEnterStageAsw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oEnterStageAsw.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a oEnterStageAsw message.
     * @function verify
     * @memberof oEnterStageAsw
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    oEnterStageAsw.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.code != null && message.hasOwnProperty("code"))
            switch (message.code) {
            default:
                return "code: enum value expected";
            case 0:
            case 1:
            case 2:
            case 41:
            case 42:
            case 43:
            case 44:
            case 51:
            case 52:
            case 53:
            case 61:
            case 62:
            case 63:
            case 64:
            case 65:
            case 71:
            case 72:
            case 73:
            case 74:
            case 75:
            case 76:
            case 77:
            case 80:
            case 81:
            case 82:
            case 83:
                break;
            }
        if (message.roomId != null && message.hasOwnProperty("roomId"))
            if (!$util.isInteger(message.roomId) && !(message.roomId && $util.isInteger(message.roomId.low) && $util.isInteger(message.roomId.high)))
                return "roomId: integer|Long expected";
        if (message.stageId != null && message.hasOwnProperty("stageId"))
            if (!$util.isInteger(message.stageId) && !(message.stageId && $util.isInteger(message.stageId.low) && $util.isInteger(message.stageId.high)))
                return "stageId: integer|Long expected";
        return null;
    };

    /**
     * Creates a oEnterStageAsw message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oEnterStageAsw
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oEnterStageAsw} oEnterStageAsw
     */
    oEnterStageAsw.fromObject = function fromObject(object) {
        if (object instanceof $root.oEnterStageAsw)
            return object;
        var message = new $root.oEnterStageAsw();
        switch (object.code) {
        default:
            if (typeof object.code === "number") {
                message.code = object.code;
                break;
            }
            break;
        case "UNKNOWN":
        case 0:
            message.code = 0;
            break;
        case "SUCCESS":
        case 1:
            message.code = 1;
            break;
        case "FAILD":
        case 2:
            message.code = 2;
            break;
        case "ERROR_REQ_PARAM":
        case 41:
            message.code = 41;
            break;
        case "ERROR_OTHER_ROOM_OPEN":
        case 42:
            message.code = 42;
            break;
        case "ERROR_CREATE_ROOM_FAIL":
        case 43:
            message.code = 43;
            break;
        case "ERROR_ENTER_ROOM_FAIL":
        case 44:
            message.code = 44;
            break;
        case "EMPTY_INS_TOKEN":
        case 51:
            message.code = 51;
            break;
        case "UNSET_INS_TOKEN":
        case 52:
            message.code = 52;
            break;
        case "ERROR_INS_TOKEN":
        case 53:
            message.code = 53;
            break;
        case "ERROR_APP_SERVER_CONNECT_FAIL":
        case 61:
            message.code = 61;
            break;
        case "ERROR_APP_SERVER_RET_NOT_200":
        case 62:
            message.code = 62;
            break;
        case "ERROR_APP_SERVER_RET_NOT_JSON":
        case 63:
            message.code = 63;
            break;
        case "ERROR_APP_SERVER_RET_AUTH_FAIL":
        case 64:
            message.code = 64;
            break;
        case "ERROR_APP_SERVER_RET_CODE_FAIL":
        case 65:
            message.code = 65;
            break;
        case "ERROR_NO_ROOM":
        case 71:
            message.code = 71;
            break;
        case "ERROR_NOT_IN_ROOM":
        case 72:
            message.code = 72;
            break;
        case "ERROR_ALREADY_IN_STAGE":
        case 73:
            message.code = 73;
            break;
        case "ERROR_ALREADY_IN_QUEUE":
        case 74:
            message.code = 74;
            break;
        case "ERROR_ENTER_STAGE_FAIL":
        case 75:
            message.code = 75;
            break;
        case "ERROR_ENTER_STAGE_TIMEOUT":
        case 76:
            message.code = 76;
            break;
        case "ERROR_NOT_IN_STAGE":
        case 77:
            message.code = 77;
            break;
        case "ERROR_INVITER_NOT_IN_UE":
        case 80:
            message.code = 80;
            break;
        case "ERROR_INVITEE_NOT_IN_STAGE":
        case 81:
            message.code = 81;
            break;
        case "ERROR_INVITE_CONTEXT_NOT_EXIST":
        case 82:
            message.code = 82;
            break;
        case "ERROR_INVITEE_NOT_YOU":
        case 83:
            message.code = 83;
            break;
        }
        if (object.roomId != null)
            if ($util.Long)
                (message.roomId = $util.Long.fromValue(object.roomId)).unsigned = true;
            else if (typeof object.roomId === "string")
                message.roomId = parseInt(object.roomId, 10);
            else if (typeof object.roomId === "number")
                message.roomId = object.roomId;
            else if (typeof object.roomId === "object")
                message.roomId = new $util.LongBits(object.roomId.low >>> 0, object.roomId.high >>> 0).toNumber(true);
        if (object.stageId != null)
            if ($util.Long)
                (message.stageId = $util.Long.fromValue(object.stageId)).unsigned = true;
            else if (typeof object.stageId === "string")
                message.stageId = parseInt(object.stageId, 10);
            else if (typeof object.stageId === "number")
                message.stageId = object.stageId;
            else if (typeof object.stageId === "object")
                message.stageId = new $util.LongBits(object.stageId.low >>> 0, object.stageId.high >>> 0).toNumber(true);
        return message;
    };

    /**
     * Creates a plain object from a oEnterStageAsw message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oEnterStageAsw
     * @static
     * @param {oEnterStageAsw} message oEnterStageAsw
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    oEnterStageAsw.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.code = options.enums === String ? "UNKNOWN" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.roomId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.roomId = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.stageId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.stageId = options.longs === String ? "0" : 0;
        }
        if (message.code != null && message.hasOwnProperty("code"))
            object.code = options.enums === String ? $root.eError[message.code] === undefined ? message.code : $root.eError[message.code] : message.code;
        if (message.roomId != null && message.hasOwnProperty("roomId"))
            if (typeof message.roomId === "number")
                object.roomId = options.longs === String ? String(message.roomId) : message.roomId;
            else
                object.roomId = options.longs === String ? $util.Long.prototype.toString.call(message.roomId) : options.longs === Number ? new $util.LongBits(message.roomId.low >>> 0, message.roomId.high >>> 0).toNumber(true) : message.roomId;
        if (message.stageId != null && message.hasOwnProperty("stageId"))
            if (typeof message.stageId === "number")
                object.stageId = options.longs === String ? String(message.stageId) : message.stageId;
            else
                object.stageId = options.longs === String ? $util.Long.prototype.toString.call(message.stageId) : options.longs === Number ? new $util.LongBits(message.stageId.low >>> 0, message.stageId.high >>> 0).toNumber(true) : message.stageId;
        return object;
    };

    /**
     * Converts this oEnterStageAsw to JSON.
     * @function toJSON
     * @memberof oEnterStageAsw
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    oEnterStageAsw.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for oEnterStageAsw
     * @function getTypeUrl
     * @memberof oEnterStageAsw
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    oEnterStageAsw.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/oEnterStageAsw";
    };

    return oEnterStageAsw;
})();

$root.oEnterStagePush = (function() {

    /**
     * Properties of a oEnterStagePush.
     * @exports IoEnterStagePush
     * @interface IoEnterStagePush
     * @property {number|Long|null} [userId] oEnterStagePush userId
     * @property {number|Long|null} [stageId] oEnterStagePush stageId
     */

    /**
     * Constructs a new oEnterStagePush.
     * @exports oEnterStagePush
     * @classdesc Represents a oEnterStagePush.
     * @implements IoEnterStagePush
     * @constructor
     * @param {IoEnterStagePush=} [properties] Properties to set
     */
    function oEnterStagePush(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * oEnterStagePush userId.
     * @member {number|Long} userId
     * @memberof oEnterStagePush
     * @instance
     */
    oEnterStagePush.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * oEnterStagePush stageId.
     * @member {number|Long} stageId
     * @memberof oEnterStagePush
     * @instance
     */
    oEnterStagePush.prototype.stageId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Creates a new oEnterStagePush instance using the specified properties.
     * @function create
     * @memberof oEnterStagePush
     * @static
     * @param {IoEnterStagePush=} [properties] Properties to set
     * @returns {oEnterStagePush} oEnterStagePush instance
     */
    oEnterStagePush.create = function create(properties) {
        return new oEnterStagePush(properties);
    };

    /**
     * Encodes the specified oEnterStagePush message. Does not implicitly {@link oEnterStagePush.verify|verify} messages.
     * @function encode
     * @memberof oEnterStagePush
     * @static
     * @param {IoEnterStagePush} message oEnterStagePush message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oEnterStagePush.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.userId);
        if (message.stageId != null && Object.hasOwnProperty.call(message, "stageId"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.stageId);
        return writer;
    };

    /**
     * Encodes the specified oEnterStagePush message, length delimited. Does not implicitly {@link oEnterStagePush.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oEnterStagePush
     * @static
     * @param {IoEnterStagePush} message oEnterStagePush message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oEnterStagePush.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a oEnterStagePush message from the specified reader or buffer.
     * @function decode
     * @memberof oEnterStagePush
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oEnterStagePush} oEnterStagePush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oEnterStagePush.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oEnterStagePush();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.userId = reader.uint64();
                    break;
                }
            case 2: {
                    message.stageId = reader.uint64();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a oEnterStagePush message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oEnterStagePush
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oEnterStagePush} oEnterStagePush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oEnterStagePush.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a oEnterStagePush message.
     * @function verify
     * @memberof oEnterStagePush
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    oEnterStagePush.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.userId != null && message.hasOwnProperty("userId"))
            if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                return "userId: integer|Long expected";
        if (message.stageId != null && message.hasOwnProperty("stageId"))
            if (!$util.isInteger(message.stageId) && !(message.stageId && $util.isInteger(message.stageId.low) && $util.isInteger(message.stageId.high)))
                return "stageId: integer|Long expected";
        return null;
    };

    /**
     * Creates a oEnterStagePush message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oEnterStagePush
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oEnterStagePush} oEnterStagePush
     */
    oEnterStagePush.fromObject = function fromObject(object) {
        if (object instanceof $root.oEnterStagePush)
            return object;
        var message = new $root.oEnterStagePush();
        if (object.userId != null)
            if ($util.Long)
                (message.userId = $util.Long.fromValue(object.userId)).unsigned = true;
            else if (typeof object.userId === "string")
                message.userId = parseInt(object.userId, 10);
            else if (typeof object.userId === "number")
                message.userId = object.userId;
            else if (typeof object.userId === "object")
                message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber(true);
        if (object.stageId != null)
            if ($util.Long)
                (message.stageId = $util.Long.fromValue(object.stageId)).unsigned = true;
            else if (typeof object.stageId === "string")
                message.stageId = parseInt(object.stageId, 10);
            else if (typeof object.stageId === "number")
                message.stageId = object.stageId;
            else if (typeof object.stageId === "object")
                message.stageId = new $util.LongBits(object.stageId.low >>> 0, object.stageId.high >>> 0).toNumber(true);
        return message;
    };

    /**
     * Creates a plain object from a oEnterStagePush message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oEnterStagePush
     * @static
     * @param {oEnterStagePush} message oEnterStagePush
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    oEnterStagePush.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.userId = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.stageId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.stageId = options.longs === String ? "0" : 0;
        }
        if (message.userId != null && message.hasOwnProperty("userId"))
            if (typeof message.userId === "number")
                object.userId = options.longs === String ? String(message.userId) : message.userId;
            else
                object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber(true) : message.userId;
        if (message.stageId != null && message.hasOwnProperty("stageId"))
            if (typeof message.stageId === "number")
                object.stageId = options.longs === String ? String(message.stageId) : message.stageId;
            else
                object.stageId = options.longs === String ? $util.Long.prototype.toString.call(message.stageId) : options.longs === Number ? new $util.LongBits(message.stageId.low >>> 0, message.stageId.high >>> 0).toNumber(true) : message.stageId;
        return object;
    };

    /**
     * Converts this oEnterStagePush to JSON.
     * @function toJSON
     * @memberof oEnterStagePush
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    oEnterStagePush.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for oEnterStagePush
     * @function getTypeUrl
     * @memberof oEnterStagePush
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    oEnterStagePush.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/oEnterStagePush";
    };

    return oEnterStagePush;
})();

$root.oLeaveStageReq = (function() {

    /**
     * Properties of a oLeaveStageReq.
     * @exports IoLeaveStageReq
     * @interface IoLeaveStageReq
     */

    /**
     * Constructs a new oLeaveStageReq.
     * @exports oLeaveStageReq
     * @classdesc Represents a oLeaveStageReq.
     * @implements IoLeaveStageReq
     * @constructor
     * @param {IoLeaveStageReq=} [properties] Properties to set
     */
    function oLeaveStageReq(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new oLeaveStageReq instance using the specified properties.
     * @function create
     * @memberof oLeaveStageReq
     * @static
     * @param {IoLeaveStageReq=} [properties] Properties to set
     * @returns {oLeaveStageReq} oLeaveStageReq instance
     */
    oLeaveStageReq.create = function create(properties) {
        return new oLeaveStageReq(properties);
    };

    /**
     * Encodes the specified oLeaveStageReq message. Does not implicitly {@link oLeaveStageReq.verify|verify} messages.
     * @function encode
     * @memberof oLeaveStageReq
     * @static
     * @param {IoLeaveStageReq} message oLeaveStageReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oLeaveStageReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified oLeaveStageReq message, length delimited. Does not implicitly {@link oLeaveStageReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oLeaveStageReq
     * @static
     * @param {IoLeaveStageReq} message oLeaveStageReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oLeaveStageReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a oLeaveStageReq message from the specified reader or buffer.
     * @function decode
     * @memberof oLeaveStageReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oLeaveStageReq} oLeaveStageReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oLeaveStageReq.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oLeaveStageReq();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a oLeaveStageReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oLeaveStageReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oLeaveStageReq} oLeaveStageReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oLeaveStageReq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a oLeaveStageReq message.
     * @function verify
     * @memberof oLeaveStageReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    oLeaveStageReq.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a oLeaveStageReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oLeaveStageReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oLeaveStageReq} oLeaveStageReq
     */
    oLeaveStageReq.fromObject = function fromObject(object) {
        if (object instanceof $root.oLeaveStageReq)
            return object;
        return new $root.oLeaveStageReq();
    };

    /**
     * Creates a plain object from a oLeaveStageReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oLeaveStageReq
     * @static
     * @param {oLeaveStageReq} message oLeaveStageReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    oLeaveStageReq.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this oLeaveStageReq to JSON.
     * @function toJSON
     * @memberof oLeaveStageReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    oLeaveStageReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for oLeaveStageReq
     * @function getTypeUrl
     * @memberof oLeaveStageReq
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    oLeaveStageReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/oLeaveStageReq";
    };

    return oLeaveStageReq;
})();

$root.oLeaveStageAsw = (function() {

    /**
     * Properties of a oLeaveStageAsw.
     * @exports IoLeaveStageAsw
     * @interface IoLeaveStageAsw
     * @property {eError|null} [code] oLeaveStageAsw code
     * @property {number|Long|null} [stageId] oLeaveStageAsw stageId
     */

    /**
     * Constructs a new oLeaveStageAsw.
     * @exports oLeaveStageAsw
     * @classdesc Represents a oLeaveStageAsw.
     * @implements IoLeaveStageAsw
     * @constructor
     * @param {IoLeaveStageAsw=} [properties] Properties to set
     */
    function oLeaveStageAsw(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * oLeaveStageAsw code.
     * @member {eError} code
     * @memberof oLeaveStageAsw
     * @instance
     */
    oLeaveStageAsw.prototype.code = 0;

    /**
     * oLeaveStageAsw stageId.
     * @member {number|Long} stageId
     * @memberof oLeaveStageAsw
     * @instance
     */
    oLeaveStageAsw.prototype.stageId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Creates a new oLeaveStageAsw instance using the specified properties.
     * @function create
     * @memberof oLeaveStageAsw
     * @static
     * @param {IoLeaveStageAsw=} [properties] Properties to set
     * @returns {oLeaveStageAsw} oLeaveStageAsw instance
     */
    oLeaveStageAsw.create = function create(properties) {
        return new oLeaveStageAsw(properties);
    };

    /**
     * Encodes the specified oLeaveStageAsw message. Does not implicitly {@link oLeaveStageAsw.verify|verify} messages.
     * @function encode
     * @memberof oLeaveStageAsw
     * @static
     * @param {IoLeaveStageAsw} message oLeaveStageAsw message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oLeaveStageAsw.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.code != null && Object.hasOwnProperty.call(message, "code"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
        if (message.stageId != null && Object.hasOwnProperty.call(message, "stageId"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.stageId);
        return writer;
    };

    /**
     * Encodes the specified oLeaveStageAsw message, length delimited. Does not implicitly {@link oLeaveStageAsw.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oLeaveStageAsw
     * @static
     * @param {IoLeaveStageAsw} message oLeaveStageAsw message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oLeaveStageAsw.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a oLeaveStageAsw message from the specified reader or buffer.
     * @function decode
     * @memberof oLeaveStageAsw
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oLeaveStageAsw} oLeaveStageAsw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oLeaveStageAsw.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oLeaveStageAsw();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.code = reader.int32();
                    break;
                }
            case 2: {
                    message.stageId = reader.uint64();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a oLeaveStageAsw message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oLeaveStageAsw
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oLeaveStageAsw} oLeaveStageAsw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oLeaveStageAsw.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a oLeaveStageAsw message.
     * @function verify
     * @memberof oLeaveStageAsw
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    oLeaveStageAsw.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.code != null && message.hasOwnProperty("code"))
            switch (message.code) {
            default:
                return "code: enum value expected";
            case 0:
            case 1:
            case 2:
            case 41:
            case 42:
            case 43:
            case 44:
            case 51:
            case 52:
            case 53:
            case 61:
            case 62:
            case 63:
            case 64:
            case 65:
            case 71:
            case 72:
            case 73:
            case 74:
            case 75:
            case 76:
            case 77:
            case 80:
            case 81:
            case 82:
            case 83:
                break;
            }
        if (message.stageId != null && message.hasOwnProperty("stageId"))
            if (!$util.isInteger(message.stageId) && !(message.stageId && $util.isInteger(message.stageId.low) && $util.isInteger(message.stageId.high)))
                return "stageId: integer|Long expected";
        return null;
    };

    /**
     * Creates a oLeaveStageAsw message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oLeaveStageAsw
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oLeaveStageAsw} oLeaveStageAsw
     */
    oLeaveStageAsw.fromObject = function fromObject(object) {
        if (object instanceof $root.oLeaveStageAsw)
            return object;
        var message = new $root.oLeaveStageAsw();
        switch (object.code) {
        default:
            if (typeof object.code === "number") {
                message.code = object.code;
                break;
            }
            break;
        case "UNKNOWN":
        case 0:
            message.code = 0;
            break;
        case "SUCCESS":
        case 1:
            message.code = 1;
            break;
        case "FAILD":
        case 2:
            message.code = 2;
            break;
        case "ERROR_REQ_PARAM":
        case 41:
            message.code = 41;
            break;
        case "ERROR_OTHER_ROOM_OPEN":
        case 42:
            message.code = 42;
            break;
        case "ERROR_CREATE_ROOM_FAIL":
        case 43:
            message.code = 43;
            break;
        case "ERROR_ENTER_ROOM_FAIL":
        case 44:
            message.code = 44;
            break;
        case "EMPTY_INS_TOKEN":
        case 51:
            message.code = 51;
            break;
        case "UNSET_INS_TOKEN":
        case 52:
            message.code = 52;
            break;
        case "ERROR_INS_TOKEN":
        case 53:
            message.code = 53;
            break;
        case "ERROR_APP_SERVER_CONNECT_FAIL":
        case 61:
            message.code = 61;
            break;
        case "ERROR_APP_SERVER_RET_NOT_200":
        case 62:
            message.code = 62;
            break;
        case "ERROR_APP_SERVER_RET_NOT_JSON":
        case 63:
            message.code = 63;
            break;
        case "ERROR_APP_SERVER_RET_AUTH_FAIL":
        case 64:
            message.code = 64;
            break;
        case "ERROR_APP_SERVER_RET_CODE_FAIL":
        case 65:
            message.code = 65;
            break;
        case "ERROR_NO_ROOM":
        case 71:
            message.code = 71;
            break;
        case "ERROR_NOT_IN_ROOM":
        case 72:
            message.code = 72;
            break;
        case "ERROR_ALREADY_IN_STAGE":
        case 73:
            message.code = 73;
            break;
        case "ERROR_ALREADY_IN_QUEUE":
        case 74:
            message.code = 74;
            break;
        case "ERROR_ENTER_STAGE_FAIL":
        case 75:
            message.code = 75;
            break;
        case "ERROR_ENTER_STAGE_TIMEOUT":
        case 76:
            message.code = 76;
            break;
        case "ERROR_NOT_IN_STAGE":
        case 77:
            message.code = 77;
            break;
        case "ERROR_INVITER_NOT_IN_UE":
        case 80:
            message.code = 80;
            break;
        case "ERROR_INVITEE_NOT_IN_STAGE":
        case 81:
            message.code = 81;
            break;
        case "ERROR_INVITE_CONTEXT_NOT_EXIST":
        case 82:
            message.code = 82;
            break;
        case "ERROR_INVITEE_NOT_YOU":
        case 83:
            message.code = 83;
            break;
        }
        if (object.stageId != null)
            if ($util.Long)
                (message.stageId = $util.Long.fromValue(object.stageId)).unsigned = true;
            else if (typeof object.stageId === "string")
                message.stageId = parseInt(object.stageId, 10);
            else if (typeof object.stageId === "number")
                message.stageId = object.stageId;
            else if (typeof object.stageId === "object")
                message.stageId = new $util.LongBits(object.stageId.low >>> 0, object.stageId.high >>> 0).toNumber(true);
        return message;
    };

    /**
     * Creates a plain object from a oLeaveStageAsw message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oLeaveStageAsw
     * @static
     * @param {oLeaveStageAsw} message oLeaveStageAsw
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    oLeaveStageAsw.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.code = options.enums === String ? "UNKNOWN" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.stageId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.stageId = options.longs === String ? "0" : 0;
        }
        if (message.code != null && message.hasOwnProperty("code"))
            object.code = options.enums === String ? $root.eError[message.code] === undefined ? message.code : $root.eError[message.code] : message.code;
        if (message.stageId != null && message.hasOwnProperty("stageId"))
            if (typeof message.stageId === "number")
                object.stageId = options.longs === String ? String(message.stageId) : message.stageId;
            else
                object.stageId = options.longs === String ? $util.Long.prototype.toString.call(message.stageId) : options.longs === Number ? new $util.LongBits(message.stageId.low >>> 0, message.stageId.high >>> 0).toNumber(true) : message.stageId;
        return object;
    };

    /**
     * Converts this oLeaveStageAsw to JSON.
     * @function toJSON
     * @memberof oLeaveStageAsw
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    oLeaveStageAsw.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for oLeaveStageAsw
     * @function getTypeUrl
     * @memberof oLeaveStageAsw
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    oLeaveStageAsw.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/oLeaveStageAsw";
    };

    return oLeaveStageAsw;
})();

$root.oLeaveStagePush = (function() {

    /**
     * Properties of a oLeaveStagePush.
     * @exports IoLeaveStagePush
     * @interface IoLeaveStagePush
     * @property {number|Long|null} [userId] oLeaveStagePush userId
     * @property {number|Long|null} [stageId] oLeaveStagePush stageId
     */

    /**
     * Constructs a new oLeaveStagePush.
     * @exports oLeaveStagePush
     * @classdesc Represents a oLeaveStagePush.
     * @implements IoLeaveStagePush
     * @constructor
     * @param {IoLeaveStagePush=} [properties] Properties to set
     */
    function oLeaveStagePush(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * oLeaveStagePush userId.
     * @member {number|Long} userId
     * @memberof oLeaveStagePush
     * @instance
     */
    oLeaveStagePush.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * oLeaveStagePush stageId.
     * @member {number|Long} stageId
     * @memberof oLeaveStagePush
     * @instance
     */
    oLeaveStagePush.prototype.stageId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Creates a new oLeaveStagePush instance using the specified properties.
     * @function create
     * @memberof oLeaveStagePush
     * @static
     * @param {IoLeaveStagePush=} [properties] Properties to set
     * @returns {oLeaveStagePush} oLeaveStagePush instance
     */
    oLeaveStagePush.create = function create(properties) {
        return new oLeaveStagePush(properties);
    };

    /**
     * Encodes the specified oLeaveStagePush message. Does not implicitly {@link oLeaveStagePush.verify|verify} messages.
     * @function encode
     * @memberof oLeaveStagePush
     * @static
     * @param {IoLeaveStagePush} message oLeaveStagePush message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oLeaveStagePush.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.userId);
        if (message.stageId != null && Object.hasOwnProperty.call(message, "stageId"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.stageId);
        return writer;
    };

    /**
     * Encodes the specified oLeaveStagePush message, length delimited. Does not implicitly {@link oLeaveStagePush.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oLeaveStagePush
     * @static
     * @param {IoLeaveStagePush} message oLeaveStagePush message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oLeaveStagePush.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a oLeaveStagePush message from the specified reader or buffer.
     * @function decode
     * @memberof oLeaveStagePush
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oLeaveStagePush} oLeaveStagePush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oLeaveStagePush.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oLeaveStagePush();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.userId = reader.uint64();
                    break;
                }
            case 2: {
                    message.stageId = reader.uint64();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a oLeaveStagePush message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oLeaveStagePush
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oLeaveStagePush} oLeaveStagePush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oLeaveStagePush.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a oLeaveStagePush message.
     * @function verify
     * @memberof oLeaveStagePush
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    oLeaveStagePush.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.userId != null && message.hasOwnProperty("userId"))
            if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                return "userId: integer|Long expected";
        if (message.stageId != null && message.hasOwnProperty("stageId"))
            if (!$util.isInteger(message.stageId) && !(message.stageId && $util.isInteger(message.stageId.low) && $util.isInteger(message.stageId.high)))
                return "stageId: integer|Long expected";
        return null;
    };

    /**
     * Creates a oLeaveStagePush message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oLeaveStagePush
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oLeaveStagePush} oLeaveStagePush
     */
    oLeaveStagePush.fromObject = function fromObject(object) {
        if (object instanceof $root.oLeaveStagePush)
            return object;
        var message = new $root.oLeaveStagePush();
        if (object.userId != null)
            if ($util.Long)
                (message.userId = $util.Long.fromValue(object.userId)).unsigned = true;
            else if (typeof object.userId === "string")
                message.userId = parseInt(object.userId, 10);
            else if (typeof object.userId === "number")
                message.userId = object.userId;
            else if (typeof object.userId === "object")
                message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber(true);
        if (object.stageId != null)
            if ($util.Long)
                (message.stageId = $util.Long.fromValue(object.stageId)).unsigned = true;
            else if (typeof object.stageId === "string")
                message.stageId = parseInt(object.stageId, 10);
            else if (typeof object.stageId === "number")
                message.stageId = object.stageId;
            else if (typeof object.stageId === "object")
                message.stageId = new $util.LongBits(object.stageId.low >>> 0, object.stageId.high >>> 0).toNumber(true);
        return message;
    };

    /**
     * Creates a plain object from a oLeaveStagePush message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oLeaveStagePush
     * @static
     * @param {oLeaveStagePush} message oLeaveStagePush
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    oLeaveStagePush.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.userId = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.stageId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.stageId = options.longs === String ? "0" : 0;
        }
        if (message.userId != null && message.hasOwnProperty("userId"))
            if (typeof message.userId === "number")
                object.userId = options.longs === String ? String(message.userId) : message.userId;
            else
                object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber(true) : message.userId;
        if (message.stageId != null && message.hasOwnProperty("stageId"))
            if (typeof message.stageId === "number")
                object.stageId = options.longs === String ? String(message.stageId) : message.stageId;
            else
                object.stageId = options.longs === String ? $util.Long.prototype.toString.call(message.stageId) : options.longs === Number ? new $util.LongBits(message.stageId.low >>> 0, message.stageId.high >>> 0).toNumber(true) : message.stageId;
        return object;
    };

    /**
     * Converts this oLeaveStagePush to JSON.
     * @function toJSON
     * @memberof oLeaveStagePush
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    oLeaveStagePush.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for oLeaveStagePush
     * @function getTypeUrl
     * @memberof oLeaveStagePush
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    oLeaveStagePush.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/oLeaveStagePush";
    };

    return oLeaveStagePush;
})();

/**
 * eStageQueueType enum.
 * @exports eStageQueueType
 * @enum {number}
 * @property {number} RoomQueue=0 RoomQueue value
 * @property {number} HardWare=1 HardWare value
 */
$root.eStageQueueType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "RoomQueue"] = 0;
    values[valuesById[1] = "HardWare"] = 1;
    return values;
})();

$root.oStageQueueInfoPush = (function() {

    /**
     * Properties of a oStageQueueInfoPush.
     * @exports IoStageQueueInfoPush
     * @interface IoStageQueueInfoPush
     * @property {eStageQueueType|null} [type] oStageQueueInfoPush type
     * @property {number|null} [queueCount] oStageQueueInfoPush queueCount
     * @property {Array.<IoStageInfo>|null} [queueUserIds] oStageQueueInfoPush queueUserIds
     * @property {number|null} [stageCount] oStageQueueInfoPush stageCount
     * @property {Array.<IoStageInfo>|null} [stageUserIds] oStageQueueInfoPush stageUserIds
     * @property {Array.<number|Long>|null} [stageQueueUserIds] oStageQueueInfoPush stageQueueUserIds
     */

    /**
     * Constructs a new oStageQueueInfoPush.
     * @exports oStageQueueInfoPush
     * @classdesc Represents a oStageQueueInfoPush.
     * @implements IoStageQueueInfoPush
     * @constructor
     * @param {IoStageQueueInfoPush=} [properties] Properties to set
     */
    function oStageQueueInfoPush(properties) {
        this.queueUserIds = [];
        this.stageUserIds = [];
        this.stageQueueUserIds = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * oStageQueueInfoPush type.
     * @member {eStageQueueType} type
     * @memberof oStageQueueInfoPush
     * @instance
     */
    oStageQueueInfoPush.prototype.type = 0;

    /**
     * oStageQueueInfoPush queueCount.
     * @member {number} queueCount
     * @memberof oStageQueueInfoPush
     * @instance
     */
    oStageQueueInfoPush.prototype.queueCount = 0;

    /**
     * oStageQueueInfoPush queueUserIds.
     * @member {Array.<IoStageInfo>} queueUserIds
     * @memberof oStageQueueInfoPush
     * @instance
     */
    oStageQueueInfoPush.prototype.queueUserIds = $util.emptyArray;

    /**
     * oStageQueueInfoPush stageCount.
     * @member {number} stageCount
     * @memberof oStageQueueInfoPush
     * @instance
     */
    oStageQueueInfoPush.prototype.stageCount = 0;

    /**
     * oStageQueueInfoPush stageUserIds.
     * @member {Array.<IoStageInfo>} stageUserIds
     * @memberof oStageQueueInfoPush
     * @instance
     */
    oStageQueueInfoPush.prototype.stageUserIds = $util.emptyArray;

    /**
     * oStageQueueInfoPush stageQueueUserIds.
     * @member {Array.<number|Long>} stageQueueUserIds
     * @memberof oStageQueueInfoPush
     * @instance
     */
    oStageQueueInfoPush.prototype.stageQueueUserIds = $util.emptyArray;

    /**
     * Creates a new oStageQueueInfoPush instance using the specified properties.
     * @function create
     * @memberof oStageQueueInfoPush
     * @static
     * @param {IoStageQueueInfoPush=} [properties] Properties to set
     * @returns {oStageQueueInfoPush} oStageQueueInfoPush instance
     */
    oStageQueueInfoPush.create = function create(properties) {
        return new oStageQueueInfoPush(properties);
    };

    /**
     * Encodes the specified oStageQueueInfoPush message. Does not implicitly {@link oStageQueueInfoPush.verify|verify} messages.
     * @function encode
     * @memberof oStageQueueInfoPush
     * @static
     * @param {IoStageQueueInfoPush} message oStageQueueInfoPush message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oStageQueueInfoPush.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
        if (message.queueCount != null && Object.hasOwnProperty.call(message, "queueCount"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.queueCount);
        if (message.queueUserIds != null && message.queueUserIds.length)
            for (var i = 0; i < message.queueUserIds.length; ++i)
                $root.oStageInfo.encode(message.queueUserIds[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.stageCount != null && Object.hasOwnProperty.call(message, "stageCount"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.stageCount);
        if (message.stageUserIds != null && message.stageUserIds.length)
            for (var i = 0; i < message.stageUserIds.length; ++i)
                $root.oStageInfo.encode(message.stageUserIds[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.stageQueueUserIds != null && message.stageQueueUserIds.length) {
            writer.uint32(/* id 6, wireType 2 =*/50).fork();
            for (var i = 0; i < message.stageQueueUserIds.length; ++i)
                writer.uint64(message.stageQueueUserIds[i]);
            writer.ldelim();
        }
        return writer;
    };

    /**
     * Encodes the specified oStageQueueInfoPush message, length delimited. Does not implicitly {@link oStageQueueInfoPush.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oStageQueueInfoPush
     * @static
     * @param {IoStageQueueInfoPush} message oStageQueueInfoPush message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oStageQueueInfoPush.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a oStageQueueInfoPush message from the specified reader or buffer.
     * @function decode
     * @memberof oStageQueueInfoPush
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oStageQueueInfoPush} oStageQueueInfoPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oStageQueueInfoPush.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oStageQueueInfoPush();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.type = reader.int32();
                    break;
                }
            case 2: {
                    message.queueCount = reader.int32();
                    break;
                }
            case 3: {
                    if (!(message.queueUserIds && message.queueUserIds.length))
                        message.queueUserIds = [];
                    message.queueUserIds.push($root.oStageInfo.decode(reader, reader.uint32()));
                    break;
                }
            case 4: {
                    message.stageCount = reader.int32();
                    break;
                }
            case 5: {
                    if (!(message.stageUserIds && message.stageUserIds.length))
                        message.stageUserIds = [];
                    message.stageUserIds.push($root.oStageInfo.decode(reader, reader.uint32()));
                    break;
                }
            case 6: {
                    if (!(message.stageQueueUserIds && message.stageQueueUserIds.length))
                        message.stageQueueUserIds = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.stageQueueUserIds.push(reader.uint64());
                    } else
                        message.stageQueueUserIds.push(reader.uint64());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a oStageQueueInfoPush message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oStageQueueInfoPush
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oStageQueueInfoPush} oStageQueueInfoPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oStageQueueInfoPush.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a oStageQueueInfoPush message.
     * @function verify
     * @memberof oStageQueueInfoPush
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    oStageQueueInfoPush.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.type != null && message.hasOwnProperty("type"))
            switch (message.type) {
            default:
                return "type: enum value expected";
            case 0:
            case 1:
                break;
            }
        if (message.queueCount != null && message.hasOwnProperty("queueCount"))
            if (!$util.isInteger(message.queueCount))
                return "queueCount: integer expected";
        if (message.queueUserIds != null && message.hasOwnProperty("queueUserIds")) {
            if (!Array.isArray(message.queueUserIds))
                return "queueUserIds: array expected";
            for (var i = 0; i < message.queueUserIds.length; ++i) {
                var error = $root.oStageInfo.verify(message.queueUserIds[i]);
                if (error)
                    return "queueUserIds." + error;
            }
        }
        if (message.stageCount != null && message.hasOwnProperty("stageCount"))
            if (!$util.isInteger(message.stageCount))
                return "stageCount: integer expected";
        if (message.stageUserIds != null && message.hasOwnProperty("stageUserIds")) {
            if (!Array.isArray(message.stageUserIds))
                return "stageUserIds: array expected";
            for (var i = 0; i < message.stageUserIds.length; ++i) {
                var error = $root.oStageInfo.verify(message.stageUserIds[i]);
                if (error)
                    return "stageUserIds." + error;
            }
        }
        if (message.stageQueueUserIds != null && message.hasOwnProperty("stageQueueUserIds")) {
            if (!Array.isArray(message.stageQueueUserIds))
                return "stageQueueUserIds: array expected";
            for (var i = 0; i < message.stageQueueUserIds.length; ++i)
                if (!$util.isInteger(message.stageQueueUserIds[i]) && !(message.stageQueueUserIds[i] && $util.isInteger(message.stageQueueUserIds[i].low) && $util.isInteger(message.stageQueueUserIds[i].high)))
                    return "stageQueueUserIds: integer|Long[] expected";
        }
        return null;
    };

    /**
     * Creates a oStageQueueInfoPush message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oStageQueueInfoPush
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oStageQueueInfoPush} oStageQueueInfoPush
     */
    oStageQueueInfoPush.fromObject = function fromObject(object) {
        if (object instanceof $root.oStageQueueInfoPush)
            return object;
        var message = new $root.oStageQueueInfoPush();
        switch (object.type) {
        default:
            if (typeof object.type === "number") {
                message.type = object.type;
                break;
            }
            break;
        case "RoomQueue":
        case 0:
            message.type = 0;
            break;
        case "HardWare":
        case 1:
            message.type = 1;
            break;
        }
        if (object.queueCount != null)
            message.queueCount = object.queueCount | 0;
        if (object.queueUserIds) {
            if (!Array.isArray(object.queueUserIds))
                throw TypeError(".oStageQueueInfoPush.queueUserIds: array expected");
            message.queueUserIds = [];
            for (var i = 0; i < object.queueUserIds.length; ++i) {
                if (typeof object.queueUserIds[i] !== "object")
                    throw TypeError(".oStageQueueInfoPush.queueUserIds: object expected");
                message.queueUserIds[i] = $root.oStageInfo.fromObject(object.queueUserIds[i]);
            }
        }
        if (object.stageCount != null)
            message.stageCount = object.stageCount | 0;
        if (object.stageUserIds) {
            if (!Array.isArray(object.stageUserIds))
                throw TypeError(".oStageQueueInfoPush.stageUserIds: array expected");
            message.stageUserIds = [];
            for (var i = 0; i < object.stageUserIds.length; ++i) {
                if (typeof object.stageUserIds[i] !== "object")
                    throw TypeError(".oStageQueueInfoPush.stageUserIds: object expected");
                message.stageUserIds[i] = $root.oStageInfo.fromObject(object.stageUserIds[i]);
            }
        }
        if (object.stageQueueUserIds) {
            if (!Array.isArray(object.stageQueueUserIds))
                throw TypeError(".oStageQueueInfoPush.stageQueueUserIds: array expected");
            message.stageQueueUserIds = [];
            for (var i = 0; i < object.stageQueueUserIds.length; ++i)
                if ($util.Long)
                    (message.stageQueueUserIds[i] = $util.Long.fromValue(object.stageQueueUserIds[i])).unsigned = true;
                else if (typeof object.stageQueueUserIds[i] === "string")
                    message.stageQueueUserIds[i] = parseInt(object.stageQueueUserIds[i], 10);
                else if (typeof object.stageQueueUserIds[i] === "number")
                    message.stageQueueUserIds[i] = object.stageQueueUserIds[i];
                else if (typeof object.stageQueueUserIds[i] === "object")
                    message.stageQueueUserIds[i] = new $util.LongBits(object.stageQueueUserIds[i].low >>> 0, object.stageQueueUserIds[i].high >>> 0).toNumber(true);
        }
        return message;
    };

    /**
     * Creates a plain object from a oStageQueueInfoPush message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oStageQueueInfoPush
     * @static
     * @param {oStageQueueInfoPush} message oStageQueueInfoPush
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    oStageQueueInfoPush.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.queueUserIds = [];
            object.stageUserIds = [];
            object.stageQueueUserIds = [];
        }
        if (options.defaults) {
            object.type = options.enums === String ? "RoomQueue" : 0;
            object.queueCount = 0;
            object.stageCount = 0;
        }
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = options.enums === String ? $root.eStageQueueType[message.type] === undefined ? message.type : $root.eStageQueueType[message.type] : message.type;
        if (message.queueCount != null && message.hasOwnProperty("queueCount"))
            object.queueCount = message.queueCount;
        if (message.queueUserIds && message.queueUserIds.length) {
            object.queueUserIds = [];
            for (var j = 0; j < message.queueUserIds.length; ++j)
                object.queueUserIds[j] = $root.oStageInfo.toObject(message.queueUserIds[j], options);
        }
        if (message.stageCount != null && message.hasOwnProperty("stageCount"))
            object.stageCount = message.stageCount;
        if (message.stageUserIds && message.stageUserIds.length) {
            object.stageUserIds = [];
            for (var j = 0; j < message.stageUserIds.length; ++j)
                object.stageUserIds[j] = $root.oStageInfo.toObject(message.stageUserIds[j], options);
        }
        if (message.stageQueueUserIds && message.stageQueueUserIds.length) {
            object.stageQueueUserIds = [];
            for (var j = 0; j < message.stageQueueUserIds.length; ++j)
                if (typeof message.stageQueueUserIds[j] === "number")
                    object.stageQueueUserIds[j] = options.longs === String ? String(message.stageQueueUserIds[j]) : message.stageQueueUserIds[j];
                else
                    object.stageQueueUserIds[j] = options.longs === String ? $util.Long.prototype.toString.call(message.stageQueueUserIds[j]) : options.longs === Number ? new $util.LongBits(message.stageQueueUserIds[j].low >>> 0, message.stageQueueUserIds[j].high >>> 0).toNumber(true) : message.stageQueueUserIds[j];
        }
        return object;
    };

    /**
     * Converts this oStageQueueInfoPush to JSON.
     * @function toJSON
     * @memberof oStageQueueInfoPush
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    oStageQueueInfoPush.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for oStageQueueInfoPush
     * @function getTypeUrl
     * @memberof oStageQueueInfoPush
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    oStageQueueInfoPush.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/oStageQueueInfoPush";
    };

    return oStageQueueInfoPush;
})();

$root.oLeaveQueueReq = (function() {

    /**
     * Properties of a oLeaveQueueReq.
     * @exports IoLeaveQueueReq
     * @interface IoLeaveQueueReq
     */

    /**
     * Constructs a new oLeaveQueueReq.
     * @exports oLeaveQueueReq
     * @classdesc Represents a oLeaveQueueReq.
     * @implements IoLeaveQueueReq
     * @constructor
     * @param {IoLeaveQueueReq=} [properties] Properties to set
     */
    function oLeaveQueueReq(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new oLeaveQueueReq instance using the specified properties.
     * @function create
     * @memberof oLeaveQueueReq
     * @static
     * @param {IoLeaveQueueReq=} [properties] Properties to set
     * @returns {oLeaveQueueReq} oLeaveQueueReq instance
     */
    oLeaveQueueReq.create = function create(properties) {
        return new oLeaveQueueReq(properties);
    };

    /**
     * Encodes the specified oLeaveQueueReq message. Does not implicitly {@link oLeaveQueueReq.verify|verify} messages.
     * @function encode
     * @memberof oLeaveQueueReq
     * @static
     * @param {IoLeaveQueueReq} message oLeaveQueueReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oLeaveQueueReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified oLeaveQueueReq message, length delimited. Does not implicitly {@link oLeaveQueueReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oLeaveQueueReq
     * @static
     * @param {IoLeaveQueueReq} message oLeaveQueueReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oLeaveQueueReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a oLeaveQueueReq message from the specified reader or buffer.
     * @function decode
     * @memberof oLeaveQueueReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oLeaveQueueReq} oLeaveQueueReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oLeaveQueueReq.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oLeaveQueueReq();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a oLeaveQueueReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oLeaveQueueReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oLeaveQueueReq} oLeaveQueueReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oLeaveQueueReq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a oLeaveQueueReq message.
     * @function verify
     * @memberof oLeaveQueueReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    oLeaveQueueReq.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a oLeaveQueueReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oLeaveQueueReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oLeaveQueueReq} oLeaveQueueReq
     */
    oLeaveQueueReq.fromObject = function fromObject(object) {
        if (object instanceof $root.oLeaveQueueReq)
            return object;
        return new $root.oLeaveQueueReq();
    };

    /**
     * Creates a plain object from a oLeaveQueueReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oLeaveQueueReq
     * @static
     * @param {oLeaveQueueReq} message oLeaveQueueReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    oLeaveQueueReq.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this oLeaveQueueReq to JSON.
     * @function toJSON
     * @memberof oLeaveQueueReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    oLeaveQueueReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for oLeaveQueueReq
     * @function getTypeUrl
     * @memberof oLeaveQueueReq
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    oLeaveQueueReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/oLeaveQueueReq";
    };

    return oLeaveQueueReq;
})();

$root.oLeaveQueueAsw = (function() {

    /**
     * Properties of a oLeaveQueueAsw.
     * @exports IoLeaveQueueAsw
     * @interface IoLeaveQueueAsw
     * @property {eError|null} [code] oLeaveQueueAsw code
     */

    /**
     * Constructs a new oLeaveQueueAsw.
     * @exports oLeaveQueueAsw
     * @classdesc Represents a oLeaveQueueAsw.
     * @implements IoLeaveQueueAsw
     * @constructor
     * @param {IoLeaveQueueAsw=} [properties] Properties to set
     */
    function oLeaveQueueAsw(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * oLeaveQueueAsw code.
     * @member {eError} code
     * @memberof oLeaveQueueAsw
     * @instance
     */
    oLeaveQueueAsw.prototype.code = 0;

    /**
     * Creates a new oLeaveQueueAsw instance using the specified properties.
     * @function create
     * @memberof oLeaveQueueAsw
     * @static
     * @param {IoLeaveQueueAsw=} [properties] Properties to set
     * @returns {oLeaveQueueAsw} oLeaveQueueAsw instance
     */
    oLeaveQueueAsw.create = function create(properties) {
        return new oLeaveQueueAsw(properties);
    };

    /**
     * Encodes the specified oLeaveQueueAsw message. Does not implicitly {@link oLeaveQueueAsw.verify|verify} messages.
     * @function encode
     * @memberof oLeaveQueueAsw
     * @static
     * @param {IoLeaveQueueAsw} message oLeaveQueueAsw message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oLeaveQueueAsw.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.code != null && Object.hasOwnProperty.call(message, "code"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
        return writer;
    };

    /**
     * Encodes the specified oLeaveQueueAsw message, length delimited. Does not implicitly {@link oLeaveQueueAsw.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oLeaveQueueAsw
     * @static
     * @param {IoLeaveQueueAsw} message oLeaveQueueAsw message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oLeaveQueueAsw.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a oLeaveQueueAsw message from the specified reader or buffer.
     * @function decode
     * @memberof oLeaveQueueAsw
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oLeaveQueueAsw} oLeaveQueueAsw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oLeaveQueueAsw.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oLeaveQueueAsw();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.code = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a oLeaveQueueAsw message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oLeaveQueueAsw
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oLeaveQueueAsw} oLeaveQueueAsw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oLeaveQueueAsw.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a oLeaveQueueAsw message.
     * @function verify
     * @memberof oLeaveQueueAsw
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    oLeaveQueueAsw.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.code != null && message.hasOwnProperty("code"))
            switch (message.code) {
            default:
                return "code: enum value expected";
            case 0:
            case 1:
            case 2:
            case 41:
            case 42:
            case 43:
            case 44:
            case 51:
            case 52:
            case 53:
            case 61:
            case 62:
            case 63:
            case 64:
            case 65:
            case 71:
            case 72:
            case 73:
            case 74:
            case 75:
            case 76:
            case 77:
            case 80:
            case 81:
            case 82:
            case 83:
                break;
            }
        return null;
    };

    /**
     * Creates a oLeaveQueueAsw message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oLeaveQueueAsw
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oLeaveQueueAsw} oLeaveQueueAsw
     */
    oLeaveQueueAsw.fromObject = function fromObject(object) {
        if (object instanceof $root.oLeaveQueueAsw)
            return object;
        var message = new $root.oLeaveQueueAsw();
        switch (object.code) {
        default:
            if (typeof object.code === "number") {
                message.code = object.code;
                break;
            }
            break;
        case "UNKNOWN":
        case 0:
            message.code = 0;
            break;
        case "SUCCESS":
        case 1:
            message.code = 1;
            break;
        case "FAILD":
        case 2:
            message.code = 2;
            break;
        case "ERROR_REQ_PARAM":
        case 41:
            message.code = 41;
            break;
        case "ERROR_OTHER_ROOM_OPEN":
        case 42:
            message.code = 42;
            break;
        case "ERROR_CREATE_ROOM_FAIL":
        case 43:
            message.code = 43;
            break;
        case "ERROR_ENTER_ROOM_FAIL":
        case 44:
            message.code = 44;
            break;
        case "EMPTY_INS_TOKEN":
        case 51:
            message.code = 51;
            break;
        case "UNSET_INS_TOKEN":
        case 52:
            message.code = 52;
            break;
        case "ERROR_INS_TOKEN":
        case 53:
            message.code = 53;
            break;
        case "ERROR_APP_SERVER_CONNECT_FAIL":
        case 61:
            message.code = 61;
            break;
        case "ERROR_APP_SERVER_RET_NOT_200":
        case 62:
            message.code = 62;
            break;
        case "ERROR_APP_SERVER_RET_NOT_JSON":
        case 63:
            message.code = 63;
            break;
        case "ERROR_APP_SERVER_RET_AUTH_FAIL":
        case 64:
            message.code = 64;
            break;
        case "ERROR_APP_SERVER_RET_CODE_FAIL":
        case 65:
            message.code = 65;
            break;
        case "ERROR_NO_ROOM":
        case 71:
            message.code = 71;
            break;
        case "ERROR_NOT_IN_ROOM":
        case 72:
            message.code = 72;
            break;
        case "ERROR_ALREADY_IN_STAGE":
        case 73:
            message.code = 73;
            break;
        case "ERROR_ALREADY_IN_QUEUE":
        case 74:
            message.code = 74;
            break;
        case "ERROR_ENTER_STAGE_FAIL":
        case 75:
            message.code = 75;
            break;
        case "ERROR_ENTER_STAGE_TIMEOUT":
        case 76:
            message.code = 76;
            break;
        case "ERROR_NOT_IN_STAGE":
        case 77:
            message.code = 77;
            break;
        case "ERROR_INVITER_NOT_IN_UE":
        case 80:
            message.code = 80;
            break;
        case "ERROR_INVITEE_NOT_IN_STAGE":
        case 81:
            message.code = 81;
            break;
        case "ERROR_INVITE_CONTEXT_NOT_EXIST":
        case 82:
            message.code = 82;
            break;
        case "ERROR_INVITEE_NOT_YOU":
        case 83:
            message.code = 83;
            break;
        }
        return message;
    };

    /**
     * Creates a plain object from a oLeaveQueueAsw message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oLeaveQueueAsw
     * @static
     * @param {oLeaveQueueAsw} message oLeaveQueueAsw
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    oLeaveQueueAsw.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.code = options.enums === String ? "UNKNOWN" : 0;
        if (message.code != null && message.hasOwnProperty("code"))
            object.code = options.enums === String ? $root.eError[message.code] === undefined ? message.code : $root.eError[message.code] : message.code;
        return object;
    };

    /**
     * Converts this oLeaveQueueAsw to JSON.
     * @function toJSON
     * @memberof oLeaveQueueAsw
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    oLeaveQueueAsw.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for oLeaveQueueAsw
     * @function getTypeUrl
     * @memberof oLeaveQueueAsw
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    oLeaveQueueAsw.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/oLeaveQueueAsw";
    };

    return oLeaveQueueAsw;
})();

$root.oKickOutStagePush = (function() {

    /**
     * Properties of a oKickOutStagePush.
     * @exports IoKickOutStagePush
     * @interface IoKickOutStagePush
     * @property {number|Long|null} [userId] oKickOutStagePush userId
     */

    /**
     * Constructs a new oKickOutStagePush.
     * @exports oKickOutStagePush
     * @classdesc Represents a oKickOutStagePush.
     * @implements IoKickOutStagePush
     * @constructor
     * @param {IoKickOutStagePush=} [properties] Properties to set
     */
    function oKickOutStagePush(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * oKickOutStagePush userId.
     * @member {number|Long} userId
     * @memberof oKickOutStagePush
     * @instance
     */
    oKickOutStagePush.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Creates a new oKickOutStagePush instance using the specified properties.
     * @function create
     * @memberof oKickOutStagePush
     * @static
     * @param {IoKickOutStagePush=} [properties] Properties to set
     * @returns {oKickOutStagePush} oKickOutStagePush instance
     */
    oKickOutStagePush.create = function create(properties) {
        return new oKickOutStagePush(properties);
    };

    /**
     * Encodes the specified oKickOutStagePush message. Does not implicitly {@link oKickOutStagePush.verify|verify} messages.
     * @function encode
     * @memberof oKickOutStagePush
     * @static
     * @param {IoKickOutStagePush} message oKickOutStagePush message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oKickOutStagePush.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.userId);
        return writer;
    };

    /**
     * Encodes the specified oKickOutStagePush message, length delimited. Does not implicitly {@link oKickOutStagePush.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oKickOutStagePush
     * @static
     * @param {IoKickOutStagePush} message oKickOutStagePush message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oKickOutStagePush.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a oKickOutStagePush message from the specified reader or buffer.
     * @function decode
     * @memberof oKickOutStagePush
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oKickOutStagePush} oKickOutStagePush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oKickOutStagePush.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oKickOutStagePush();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.userId = reader.uint64();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a oKickOutStagePush message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oKickOutStagePush
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oKickOutStagePush} oKickOutStagePush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oKickOutStagePush.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a oKickOutStagePush message.
     * @function verify
     * @memberof oKickOutStagePush
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    oKickOutStagePush.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.userId != null && message.hasOwnProperty("userId"))
            if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                return "userId: integer|Long expected";
        return null;
    };

    /**
     * Creates a oKickOutStagePush message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oKickOutStagePush
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oKickOutStagePush} oKickOutStagePush
     */
    oKickOutStagePush.fromObject = function fromObject(object) {
        if (object instanceof $root.oKickOutStagePush)
            return object;
        var message = new $root.oKickOutStagePush();
        if (object.userId != null)
            if ($util.Long)
                (message.userId = $util.Long.fromValue(object.userId)).unsigned = true;
            else if (typeof object.userId === "string")
                message.userId = parseInt(object.userId, 10);
            else if (typeof object.userId === "number")
                message.userId = object.userId;
            else if (typeof object.userId === "object")
                message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber(true);
        return message;
    };

    /**
     * Creates a plain object from a oKickOutStagePush message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oKickOutStagePush
     * @static
     * @param {oKickOutStagePush} message oKickOutStagePush
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    oKickOutStagePush.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.userId = options.longs === String ? "0" : 0;
        if (message.userId != null && message.hasOwnProperty("userId"))
            if (typeof message.userId === "number")
                object.userId = options.longs === String ? String(message.userId) : message.userId;
            else
                object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber(true) : message.userId;
        return object;
    };

    /**
     * Converts this oKickOutStagePush to JSON.
     * @function toJSON
     * @memberof oKickOutStagePush
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    oKickOutStagePush.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for oKickOutStagePush
     * @function getTypeUrl
     * @memberof oKickOutStagePush
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    oKickOutStagePush.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/oKickOutStagePush";
    };

    return oKickOutStagePush;
})();

$root.oLeaveUeReq = (function() {

    /**
     * Properties of a oLeaveUeReq.
     * @exports IoLeaveUeReq
     * @interface IoLeaveUeReq
     */

    /**
     * Constructs a new oLeaveUeReq.
     * @exports oLeaveUeReq
     * @classdesc Represents a oLeaveUeReq.
     * @implements IoLeaveUeReq
     * @constructor
     * @param {IoLeaveUeReq=} [properties] Properties to set
     */
    function oLeaveUeReq(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new oLeaveUeReq instance using the specified properties.
     * @function create
     * @memberof oLeaveUeReq
     * @static
     * @param {IoLeaveUeReq=} [properties] Properties to set
     * @returns {oLeaveUeReq} oLeaveUeReq instance
     */
    oLeaveUeReq.create = function create(properties) {
        return new oLeaveUeReq(properties);
    };

    /**
     * Encodes the specified oLeaveUeReq message. Does not implicitly {@link oLeaveUeReq.verify|verify} messages.
     * @function encode
     * @memberof oLeaveUeReq
     * @static
     * @param {IoLeaveUeReq} message oLeaveUeReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oLeaveUeReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified oLeaveUeReq message, length delimited. Does not implicitly {@link oLeaveUeReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oLeaveUeReq
     * @static
     * @param {IoLeaveUeReq} message oLeaveUeReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oLeaveUeReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a oLeaveUeReq message from the specified reader or buffer.
     * @function decode
     * @memberof oLeaveUeReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oLeaveUeReq} oLeaveUeReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oLeaveUeReq.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oLeaveUeReq();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a oLeaveUeReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oLeaveUeReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oLeaveUeReq} oLeaveUeReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oLeaveUeReq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a oLeaveUeReq message.
     * @function verify
     * @memberof oLeaveUeReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    oLeaveUeReq.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a oLeaveUeReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oLeaveUeReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oLeaveUeReq} oLeaveUeReq
     */
    oLeaveUeReq.fromObject = function fromObject(object) {
        if (object instanceof $root.oLeaveUeReq)
            return object;
        return new $root.oLeaveUeReq();
    };

    /**
     * Creates a plain object from a oLeaveUeReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oLeaveUeReq
     * @static
     * @param {oLeaveUeReq} message oLeaveUeReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    oLeaveUeReq.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this oLeaveUeReq to JSON.
     * @function toJSON
     * @memberof oLeaveUeReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    oLeaveUeReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for oLeaveUeReq
     * @function getTypeUrl
     * @memberof oLeaveUeReq
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    oLeaveUeReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/oLeaveUeReq";
    };

    return oLeaveUeReq;
})();

$root.oLeaveUeAsw = (function() {

    /**
     * Properties of a oLeaveUeAsw.
     * @exports IoLeaveUeAsw
     * @interface IoLeaveUeAsw
     * @property {eError|null} [code] oLeaveUeAsw code
     * @property {number|null} [index] oLeaveUeAsw index
     * @property {number|null} [stageId] oLeaveUeAsw stageId
     */

    /**
     * Constructs a new oLeaveUeAsw.
     * @exports oLeaveUeAsw
     * @classdesc Represents a oLeaveUeAsw.
     * @implements IoLeaveUeAsw
     * @constructor
     * @param {IoLeaveUeAsw=} [properties] Properties to set
     */
    function oLeaveUeAsw(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * oLeaveUeAsw code.
     * @member {eError} code
     * @memberof oLeaveUeAsw
     * @instance
     */
    oLeaveUeAsw.prototype.code = 0;

    /**
     * oLeaveUeAsw index.
     * @member {number} index
     * @memberof oLeaveUeAsw
     * @instance
     */
    oLeaveUeAsw.prototype.index = 0;

    /**
     * oLeaveUeAsw stageId.
     * @member {number} stageId
     * @memberof oLeaveUeAsw
     * @instance
     */
    oLeaveUeAsw.prototype.stageId = 0;

    /**
     * Creates a new oLeaveUeAsw instance using the specified properties.
     * @function create
     * @memberof oLeaveUeAsw
     * @static
     * @param {IoLeaveUeAsw=} [properties] Properties to set
     * @returns {oLeaveUeAsw} oLeaveUeAsw instance
     */
    oLeaveUeAsw.create = function create(properties) {
        return new oLeaveUeAsw(properties);
    };

    /**
     * Encodes the specified oLeaveUeAsw message. Does not implicitly {@link oLeaveUeAsw.verify|verify} messages.
     * @function encode
     * @memberof oLeaveUeAsw
     * @static
     * @param {IoLeaveUeAsw} message oLeaveUeAsw message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oLeaveUeAsw.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.code != null && Object.hasOwnProperty.call(message, "code"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
        if (message.index != null && Object.hasOwnProperty.call(message, "index"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.index);
        if (message.stageId != null && Object.hasOwnProperty.call(message, "stageId"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.stageId);
        return writer;
    };

    /**
     * Encodes the specified oLeaveUeAsw message, length delimited. Does not implicitly {@link oLeaveUeAsw.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oLeaveUeAsw
     * @static
     * @param {IoLeaveUeAsw} message oLeaveUeAsw message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oLeaveUeAsw.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a oLeaveUeAsw message from the specified reader or buffer.
     * @function decode
     * @memberof oLeaveUeAsw
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oLeaveUeAsw} oLeaveUeAsw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oLeaveUeAsw.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oLeaveUeAsw();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.code = reader.int32();
                    break;
                }
            case 2: {
                    message.index = reader.int32();
                    break;
                }
            case 3: {
                    message.stageId = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a oLeaveUeAsw message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oLeaveUeAsw
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oLeaveUeAsw} oLeaveUeAsw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oLeaveUeAsw.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a oLeaveUeAsw message.
     * @function verify
     * @memberof oLeaveUeAsw
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    oLeaveUeAsw.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.code != null && message.hasOwnProperty("code"))
            switch (message.code) {
            default:
                return "code: enum value expected";
            case 0:
            case 1:
            case 2:
            case 41:
            case 42:
            case 43:
            case 44:
            case 51:
            case 52:
            case 53:
            case 61:
            case 62:
            case 63:
            case 64:
            case 65:
            case 71:
            case 72:
            case 73:
            case 74:
            case 75:
            case 76:
            case 77:
            case 80:
            case 81:
            case 82:
            case 83:
                break;
            }
        if (message.index != null && message.hasOwnProperty("index"))
            if (!$util.isInteger(message.index))
                return "index: integer expected";
        if (message.stageId != null && message.hasOwnProperty("stageId"))
            if (!$util.isInteger(message.stageId))
                return "stageId: integer expected";
        return null;
    };

    /**
     * Creates a oLeaveUeAsw message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oLeaveUeAsw
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oLeaveUeAsw} oLeaveUeAsw
     */
    oLeaveUeAsw.fromObject = function fromObject(object) {
        if (object instanceof $root.oLeaveUeAsw)
            return object;
        var message = new $root.oLeaveUeAsw();
        switch (object.code) {
        default:
            if (typeof object.code === "number") {
                message.code = object.code;
                break;
            }
            break;
        case "UNKNOWN":
        case 0:
            message.code = 0;
            break;
        case "SUCCESS":
        case 1:
            message.code = 1;
            break;
        case "FAILD":
        case 2:
            message.code = 2;
            break;
        case "ERROR_REQ_PARAM":
        case 41:
            message.code = 41;
            break;
        case "ERROR_OTHER_ROOM_OPEN":
        case 42:
            message.code = 42;
            break;
        case "ERROR_CREATE_ROOM_FAIL":
        case 43:
            message.code = 43;
            break;
        case "ERROR_ENTER_ROOM_FAIL":
        case 44:
            message.code = 44;
            break;
        case "EMPTY_INS_TOKEN":
        case 51:
            message.code = 51;
            break;
        case "UNSET_INS_TOKEN":
        case 52:
            message.code = 52;
            break;
        case "ERROR_INS_TOKEN":
        case 53:
            message.code = 53;
            break;
        case "ERROR_APP_SERVER_CONNECT_FAIL":
        case 61:
            message.code = 61;
            break;
        case "ERROR_APP_SERVER_RET_NOT_200":
        case 62:
            message.code = 62;
            break;
        case "ERROR_APP_SERVER_RET_NOT_JSON":
        case 63:
            message.code = 63;
            break;
        case "ERROR_APP_SERVER_RET_AUTH_FAIL":
        case 64:
            message.code = 64;
            break;
        case "ERROR_APP_SERVER_RET_CODE_FAIL":
        case 65:
            message.code = 65;
            break;
        case "ERROR_NO_ROOM":
        case 71:
            message.code = 71;
            break;
        case "ERROR_NOT_IN_ROOM":
        case 72:
            message.code = 72;
            break;
        case "ERROR_ALREADY_IN_STAGE":
        case 73:
            message.code = 73;
            break;
        case "ERROR_ALREADY_IN_QUEUE":
        case 74:
            message.code = 74;
            break;
        case "ERROR_ENTER_STAGE_FAIL":
        case 75:
            message.code = 75;
            break;
        case "ERROR_ENTER_STAGE_TIMEOUT":
        case 76:
            message.code = 76;
            break;
        case "ERROR_NOT_IN_STAGE":
        case 77:
            message.code = 77;
            break;
        case "ERROR_INVITER_NOT_IN_UE":
        case 80:
            message.code = 80;
            break;
        case "ERROR_INVITEE_NOT_IN_STAGE":
        case 81:
            message.code = 81;
            break;
        case "ERROR_INVITE_CONTEXT_NOT_EXIST":
        case 82:
            message.code = 82;
            break;
        case "ERROR_INVITEE_NOT_YOU":
        case 83:
            message.code = 83;
            break;
        }
        if (object.index != null)
            message.index = object.index | 0;
        if (object.stageId != null)
            message.stageId = object.stageId | 0;
        return message;
    };

    /**
     * Creates a plain object from a oLeaveUeAsw message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oLeaveUeAsw
     * @static
     * @param {oLeaveUeAsw} message oLeaveUeAsw
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    oLeaveUeAsw.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.code = options.enums === String ? "UNKNOWN" : 0;
            object.index = 0;
            object.stageId = 0;
        }
        if (message.code != null && message.hasOwnProperty("code"))
            object.code = options.enums === String ? $root.eError[message.code] === undefined ? message.code : $root.eError[message.code] : message.code;
        if (message.index != null && message.hasOwnProperty("index"))
            object.index = message.index;
        if (message.stageId != null && message.hasOwnProperty("stageId"))
            object.stageId = message.stageId;
        return object;
    };

    /**
     * Converts this oLeaveUeAsw to JSON.
     * @function toJSON
     * @memberof oLeaveUeAsw
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    oLeaveUeAsw.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for oLeaveUeAsw
     * @function getTypeUrl
     * @memberof oLeaveUeAsw
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    oLeaveUeAsw.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/oLeaveUeAsw";
    };

    return oLeaveUeAsw;
})();

$root.oLeaveUePush = (function() {

    /**
     * Properties of a oLeaveUePush.
     * @exports IoLeaveUePush
     * @interface IoLeaveUePush
     * @property {number|Long|null} [userId] oLeaveUePush userId
     * @property {number|null} [index] oLeaveUePush index
     * @property {number|null} [stageId] oLeaveUePush stageId
     */

    /**
     * Constructs a new oLeaveUePush.
     * @exports oLeaveUePush
     * @classdesc Represents a oLeaveUePush.
     * @implements IoLeaveUePush
     * @constructor
     * @param {IoLeaveUePush=} [properties] Properties to set
     */
    function oLeaveUePush(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * oLeaveUePush userId.
     * @member {number|Long} userId
     * @memberof oLeaveUePush
     * @instance
     */
    oLeaveUePush.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * oLeaveUePush index.
     * @member {number} index
     * @memberof oLeaveUePush
     * @instance
     */
    oLeaveUePush.prototype.index = 0;

    /**
     * oLeaveUePush stageId.
     * @member {number} stageId
     * @memberof oLeaveUePush
     * @instance
     */
    oLeaveUePush.prototype.stageId = 0;

    /**
     * Creates a new oLeaveUePush instance using the specified properties.
     * @function create
     * @memberof oLeaveUePush
     * @static
     * @param {IoLeaveUePush=} [properties] Properties to set
     * @returns {oLeaveUePush} oLeaveUePush instance
     */
    oLeaveUePush.create = function create(properties) {
        return new oLeaveUePush(properties);
    };

    /**
     * Encodes the specified oLeaveUePush message. Does not implicitly {@link oLeaveUePush.verify|verify} messages.
     * @function encode
     * @memberof oLeaveUePush
     * @static
     * @param {IoLeaveUePush} message oLeaveUePush message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oLeaveUePush.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.userId);
        if (message.index != null && Object.hasOwnProperty.call(message, "index"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.index);
        if (message.stageId != null && Object.hasOwnProperty.call(message, "stageId"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.stageId);
        return writer;
    };

    /**
     * Encodes the specified oLeaveUePush message, length delimited. Does not implicitly {@link oLeaveUePush.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oLeaveUePush
     * @static
     * @param {IoLeaveUePush} message oLeaveUePush message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oLeaveUePush.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a oLeaveUePush message from the specified reader or buffer.
     * @function decode
     * @memberof oLeaveUePush
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oLeaveUePush} oLeaveUePush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oLeaveUePush.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oLeaveUePush();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.userId = reader.uint64();
                    break;
                }
            case 2: {
                    message.index = reader.int32();
                    break;
                }
            case 3: {
                    message.stageId = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a oLeaveUePush message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oLeaveUePush
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oLeaveUePush} oLeaveUePush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oLeaveUePush.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a oLeaveUePush message.
     * @function verify
     * @memberof oLeaveUePush
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    oLeaveUePush.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.userId != null && message.hasOwnProperty("userId"))
            if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                return "userId: integer|Long expected";
        if (message.index != null && message.hasOwnProperty("index"))
            if (!$util.isInteger(message.index))
                return "index: integer expected";
        if (message.stageId != null && message.hasOwnProperty("stageId"))
            if (!$util.isInteger(message.stageId))
                return "stageId: integer expected";
        return null;
    };

    /**
     * Creates a oLeaveUePush message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oLeaveUePush
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oLeaveUePush} oLeaveUePush
     */
    oLeaveUePush.fromObject = function fromObject(object) {
        if (object instanceof $root.oLeaveUePush)
            return object;
        var message = new $root.oLeaveUePush();
        if (object.userId != null)
            if ($util.Long)
                (message.userId = $util.Long.fromValue(object.userId)).unsigned = true;
            else if (typeof object.userId === "string")
                message.userId = parseInt(object.userId, 10);
            else if (typeof object.userId === "number")
                message.userId = object.userId;
            else if (typeof object.userId === "object")
                message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber(true);
        if (object.index != null)
            message.index = object.index | 0;
        if (object.stageId != null)
            message.stageId = object.stageId | 0;
        return message;
    };

    /**
     * Creates a plain object from a oLeaveUePush message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oLeaveUePush
     * @static
     * @param {oLeaveUePush} message oLeaveUePush
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    oLeaveUePush.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.userId = options.longs === String ? "0" : 0;
            object.index = 0;
            object.stageId = 0;
        }
        if (message.userId != null && message.hasOwnProperty("userId"))
            if (typeof message.userId === "number")
                object.userId = options.longs === String ? String(message.userId) : message.userId;
            else
                object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber(true) : message.userId;
        if (message.index != null && message.hasOwnProperty("index"))
            object.index = message.index;
        if (message.stageId != null && message.hasOwnProperty("stageId"))
            object.stageId = message.stageId;
        return object;
    };

    /**
     * Converts this oLeaveUePush to JSON.
     * @function toJSON
     * @memberof oLeaveUePush
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    oLeaveUePush.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for oLeaveUePush
     * @function getTypeUrl
     * @memberof oLeaveUePush
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    oLeaveUePush.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/oLeaveUePush";
    };

    return oLeaveUePush;
})();

$root.oReEnterStageReq = (function() {

    /**
     * Properties of a oReEnterStageReq.
     * @exports IoReEnterStageReq
     * @interface IoReEnterStageReq
     * @property {string|null} [context] oReEnterStageReq context
     */

    /**
     * Constructs a new oReEnterStageReq.
     * @exports oReEnterStageReq
     * @classdesc Represents a oReEnterStageReq.
     * @implements IoReEnterStageReq
     * @constructor
     * @param {IoReEnterStageReq=} [properties] Properties to set
     */
    function oReEnterStageReq(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * oReEnterStageReq context.
     * @member {string} context
     * @memberof oReEnterStageReq
     * @instance
     */
    oReEnterStageReq.prototype.context = "";

    /**
     * Creates a new oReEnterStageReq instance using the specified properties.
     * @function create
     * @memberof oReEnterStageReq
     * @static
     * @param {IoReEnterStageReq=} [properties] Properties to set
     * @returns {oReEnterStageReq} oReEnterStageReq instance
     */
    oReEnterStageReq.create = function create(properties) {
        return new oReEnterStageReq(properties);
    };

    /**
     * Encodes the specified oReEnterStageReq message. Does not implicitly {@link oReEnterStageReq.verify|verify} messages.
     * @function encode
     * @memberof oReEnterStageReq
     * @static
     * @param {IoReEnterStageReq} message oReEnterStageReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oReEnterStageReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.context != null && Object.hasOwnProperty.call(message, "context"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.context);
        return writer;
    };

    /**
     * Encodes the specified oReEnterStageReq message, length delimited. Does not implicitly {@link oReEnterStageReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oReEnterStageReq
     * @static
     * @param {IoReEnterStageReq} message oReEnterStageReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oReEnterStageReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a oReEnterStageReq message from the specified reader or buffer.
     * @function decode
     * @memberof oReEnterStageReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oReEnterStageReq} oReEnterStageReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oReEnterStageReq.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oReEnterStageReq();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.context = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a oReEnterStageReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oReEnterStageReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oReEnterStageReq} oReEnterStageReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oReEnterStageReq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a oReEnterStageReq message.
     * @function verify
     * @memberof oReEnterStageReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    oReEnterStageReq.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.context != null && message.hasOwnProperty("context"))
            if (!$util.isString(message.context))
                return "context: string expected";
        return null;
    };

    /**
     * Creates a oReEnterStageReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oReEnterStageReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oReEnterStageReq} oReEnterStageReq
     */
    oReEnterStageReq.fromObject = function fromObject(object) {
        if (object instanceof $root.oReEnterStageReq)
            return object;
        var message = new $root.oReEnterStageReq();
        if (object.context != null)
            message.context = String(object.context);
        return message;
    };

    /**
     * Creates a plain object from a oReEnterStageReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oReEnterStageReq
     * @static
     * @param {oReEnterStageReq} message oReEnterStageReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    oReEnterStageReq.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.context = "";
        if (message.context != null && message.hasOwnProperty("context"))
            object.context = message.context;
        return object;
    };

    /**
     * Converts this oReEnterStageReq to JSON.
     * @function toJSON
     * @memberof oReEnterStageReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    oReEnterStageReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for oReEnterStageReq
     * @function getTypeUrl
     * @memberof oReEnterStageReq
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    oReEnterStageReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/oReEnterStageReq";
    };

    return oReEnterStageReq;
})();

$root.oUpdateEnterStageContextReq = (function() {

    /**
     * Properties of a oUpdateEnterStageContextReq.
     * @exports IoUpdateEnterStageContextReq
     * @interface IoUpdateEnterStageContextReq
     * @property {string|null} [context] oUpdateEnterStageContextReq context
     */

    /**
     * Constructs a new oUpdateEnterStageContextReq.
     * @exports oUpdateEnterStageContextReq
     * @classdesc Represents a oUpdateEnterStageContextReq.
     * @implements IoUpdateEnterStageContextReq
     * @constructor
     * @param {IoUpdateEnterStageContextReq=} [properties] Properties to set
     */
    function oUpdateEnterStageContextReq(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * oUpdateEnterStageContextReq context.
     * @member {string} context
     * @memberof oUpdateEnterStageContextReq
     * @instance
     */
    oUpdateEnterStageContextReq.prototype.context = "";

    /**
     * Creates a new oUpdateEnterStageContextReq instance using the specified properties.
     * @function create
     * @memberof oUpdateEnterStageContextReq
     * @static
     * @param {IoUpdateEnterStageContextReq=} [properties] Properties to set
     * @returns {oUpdateEnterStageContextReq} oUpdateEnterStageContextReq instance
     */
    oUpdateEnterStageContextReq.create = function create(properties) {
        return new oUpdateEnterStageContextReq(properties);
    };

    /**
     * Encodes the specified oUpdateEnterStageContextReq message. Does not implicitly {@link oUpdateEnterStageContextReq.verify|verify} messages.
     * @function encode
     * @memberof oUpdateEnterStageContextReq
     * @static
     * @param {IoUpdateEnterStageContextReq} message oUpdateEnterStageContextReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oUpdateEnterStageContextReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.context != null && Object.hasOwnProperty.call(message, "context"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.context);
        return writer;
    };

    /**
     * Encodes the specified oUpdateEnterStageContextReq message, length delimited. Does not implicitly {@link oUpdateEnterStageContextReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oUpdateEnterStageContextReq
     * @static
     * @param {IoUpdateEnterStageContextReq} message oUpdateEnterStageContextReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oUpdateEnterStageContextReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a oUpdateEnterStageContextReq message from the specified reader or buffer.
     * @function decode
     * @memberof oUpdateEnterStageContextReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oUpdateEnterStageContextReq} oUpdateEnterStageContextReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oUpdateEnterStageContextReq.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oUpdateEnterStageContextReq();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.context = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a oUpdateEnterStageContextReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oUpdateEnterStageContextReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oUpdateEnterStageContextReq} oUpdateEnterStageContextReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oUpdateEnterStageContextReq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a oUpdateEnterStageContextReq message.
     * @function verify
     * @memberof oUpdateEnterStageContextReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    oUpdateEnterStageContextReq.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.context != null && message.hasOwnProperty("context"))
            if (!$util.isString(message.context))
                return "context: string expected";
        return null;
    };

    /**
     * Creates a oUpdateEnterStageContextReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oUpdateEnterStageContextReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oUpdateEnterStageContextReq} oUpdateEnterStageContextReq
     */
    oUpdateEnterStageContextReq.fromObject = function fromObject(object) {
        if (object instanceof $root.oUpdateEnterStageContextReq)
            return object;
        var message = new $root.oUpdateEnterStageContextReq();
        if (object.context != null)
            message.context = String(object.context);
        return message;
    };

    /**
     * Creates a plain object from a oUpdateEnterStageContextReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oUpdateEnterStageContextReq
     * @static
     * @param {oUpdateEnterStageContextReq} message oUpdateEnterStageContextReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    oUpdateEnterStageContextReq.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.context = "";
        if (message.context != null && message.hasOwnProperty("context"))
            object.context = message.context;
        return object;
    };

    /**
     * Converts this oUpdateEnterStageContextReq to JSON.
     * @function toJSON
     * @memberof oUpdateEnterStageContextReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    oUpdateEnterStageContextReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for oUpdateEnterStageContextReq
     * @function getTypeUrl
     * @memberof oUpdateEnterStageContextReq
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    oUpdateEnterStageContextReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/oUpdateEnterStageContextReq";
    };

    return oUpdateEnterStageContextReq;
})();

$root.oUpdateEnterStageContextAsw = (function() {

    /**
     * Properties of a oUpdateEnterStageContextAsw.
     * @exports IoUpdateEnterStageContextAsw
     * @interface IoUpdateEnterStageContextAsw
     * @property {eError|null} [code] oUpdateEnterStageContextAsw code
     */

    /**
     * Constructs a new oUpdateEnterStageContextAsw.
     * @exports oUpdateEnterStageContextAsw
     * @classdesc Represents a oUpdateEnterStageContextAsw.
     * @implements IoUpdateEnterStageContextAsw
     * @constructor
     * @param {IoUpdateEnterStageContextAsw=} [properties] Properties to set
     */
    function oUpdateEnterStageContextAsw(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * oUpdateEnterStageContextAsw code.
     * @member {eError} code
     * @memberof oUpdateEnterStageContextAsw
     * @instance
     */
    oUpdateEnterStageContextAsw.prototype.code = 0;

    /**
     * Creates a new oUpdateEnterStageContextAsw instance using the specified properties.
     * @function create
     * @memberof oUpdateEnterStageContextAsw
     * @static
     * @param {IoUpdateEnterStageContextAsw=} [properties] Properties to set
     * @returns {oUpdateEnterStageContextAsw} oUpdateEnterStageContextAsw instance
     */
    oUpdateEnterStageContextAsw.create = function create(properties) {
        return new oUpdateEnterStageContextAsw(properties);
    };

    /**
     * Encodes the specified oUpdateEnterStageContextAsw message. Does not implicitly {@link oUpdateEnterStageContextAsw.verify|verify} messages.
     * @function encode
     * @memberof oUpdateEnterStageContextAsw
     * @static
     * @param {IoUpdateEnterStageContextAsw} message oUpdateEnterStageContextAsw message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oUpdateEnterStageContextAsw.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.code != null && Object.hasOwnProperty.call(message, "code"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
        return writer;
    };

    /**
     * Encodes the specified oUpdateEnterStageContextAsw message, length delimited. Does not implicitly {@link oUpdateEnterStageContextAsw.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oUpdateEnterStageContextAsw
     * @static
     * @param {IoUpdateEnterStageContextAsw} message oUpdateEnterStageContextAsw message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oUpdateEnterStageContextAsw.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a oUpdateEnterStageContextAsw message from the specified reader or buffer.
     * @function decode
     * @memberof oUpdateEnterStageContextAsw
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oUpdateEnterStageContextAsw} oUpdateEnterStageContextAsw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oUpdateEnterStageContextAsw.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oUpdateEnterStageContextAsw();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.code = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a oUpdateEnterStageContextAsw message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oUpdateEnterStageContextAsw
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oUpdateEnterStageContextAsw} oUpdateEnterStageContextAsw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oUpdateEnterStageContextAsw.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a oUpdateEnterStageContextAsw message.
     * @function verify
     * @memberof oUpdateEnterStageContextAsw
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    oUpdateEnterStageContextAsw.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.code != null && message.hasOwnProperty("code"))
            switch (message.code) {
            default:
                return "code: enum value expected";
            case 0:
            case 1:
            case 2:
            case 41:
            case 42:
            case 43:
            case 44:
            case 51:
            case 52:
            case 53:
            case 61:
            case 62:
            case 63:
            case 64:
            case 65:
            case 71:
            case 72:
            case 73:
            case 74:
            case 75:
            case 76:
            case 77:
            case 80:
            case 81:
            case 82:
            case 83:
                break;
            }
        return null;
    };

    /**
     * Creates a oUpdateEnterStageContextAsw message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oUpdateEnterStageContextAsw
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oUpdateEnterStageContextAsw} oUpdateEnterStageContextAsw
     */
    oUpdateEnterStageContextAsw.fromObject = function fromObject(object) {
        if (object instanceof $root.oUpdateEnterStageContextAsw)
            return object;
        var message = new $root.oUpdateEnterStageContextAsw();
        switch (object.code) {
        default:
            if (typeof object.code === "number") {
                message.code = object.code;
                break;
            }
            break;
        case "UNKNOWN":
        case 0:
            message.code = 0;
            break;
        case "SUCCESS":
        case 1:
            message.code = 1;
            break;
        case "FAILD":
        case 2:
            message.code = 2;
            break;
        case "ERROR_REQ_PARAM":
        case 41:
            message.code = 41;
            break;
        case "ERROR_OTHER_ROOM_OPEN":
        case 42:
            message.code = 42;
            break;
        case "ERROR_CREATE_ROOM_FAIL":
        case 43:
            message.code = 43;
            break;
        case "ERROR_ENTER_ROOM_FAIL":
        case 44:
            message.code = 44;
            break;
        case "EMPTY_INS_TOKEN":
        case 51:
            message.code = 51;
            break;
        case "UNSET_INS_TOKEN":
        case 52:
            message.code = 52;
            break;
        case "ERROR_INS_TOKEN":
        case 53:
            message.code = 53;
            break;
        case "ERROR_APP_SERVER_CONNECT_FAIL":
        case 61:
            message.code = 61;
            break;
        case "ERROR_APP_SERVER_RET_NOT_200":
        case 62:
            message.code = 62;
            break;
        case "ERROR_APP_SERVER_RET_NOT_JSON":
        case 63:
            message.code = 63;
            break;
        case "ERROR_APP_SERVER_RET_AUTH_FAIL":
        case 64:
            message.code = 64;
            break;
        case "ERROR_APP_SERVER_RET_CODE_FAIL":
        case 65:
            message.code = 65;
            break;
        case "ERROR_NO_ROOM":
        case 71:
            message.code = 71;
            break;
        case "ERROR_NOT_IN_ROOM":
        case 72:
            message.code = 72;
            break;
        case "ERROR_ALREADY_IN_STAGE":
        case 73:
            message.code = 73;
            break;
        case "ERROR_ALREADY_IN_QUEUE":
        case 74:
            message.code = 74;
            break;
        case "ERROR_ENTER_STAGE_FAIL":
        case 75:
            message.code = 75;
            break;
        case "ERROR_ENTER_STAGE_TIMEOUT":
        case 76:
            message.code = 76;
            break;
        case "ERROR_NOT_IN_STAGE":
        case 77:
            message.code = 77;
            break;
        case "ERROR_INVITER_NOT_IN_UE":
        case 80:
            message.code = 80;
            break;
        case "ERROR_INVITEE_NOT_IN_STAGE":
        case 81:
            message.code = 81;
            break;
        case "ERROR_INVITE_CONTEXT_NOT_EXIST":
        case 82:
            message.code = 82;
            break;
        case "ERROR_INVITEE_NOT_YOU":
        case 83:
            message.code = 83;
            break;
        }
        return message;
    };

    /**
     * Creates a plain object from a oUpdateEnterStageContextAsw message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oUpdateEnterStageContextAsw
     * @static
     * @param {oUpdateEnterStageContextAsw} message oUpdateEnterStageContextAsw
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    oUpdateEnterStageContextAsw.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.code = options.enums === String ? "UNKNOWN" : 0;
        if (message.code != null && message.hasOwnProperty("code"))
            object.code = options.enums === String ? $root.eError[message.code] === undefined ? message.code : $root.eError[message.code] : message.code;
        return object;
    };

    /**
     * Converts this oUpdateEnterStageContextAsw to JSON.
     * @function toJSON
     * @memberof oUpdateEnterStageContextAsw
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    oUpdateEnterStageContextAsw.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for oUpdateEnterStageContextAsw
     * @function getTypeUrl
     * @memberof oUpdateEnterStageContextAsw
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    oUpdateEnterStageContextAsw.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/oUpdateEnterStageContextAsw";
    };

    return oUpdateEnterStageContextAsw;
})();

$root.oStageStatusChangePush = (function() {

    /**
     * Properties of a oStageStatusChangePush.
     * @exports IoStageStatusChangePush
     * @interface IoStageStatusChangePush
     * @property {number|null} [index] oStageStatusChangePush index
     * @property {number|Long|null} [stageId] oStageStatusChangePush stageId
     * @property {number|Long|null} [userId] oStageStatusChangePush userId
     * @property {eStageType|null} [stageType] oStageStatusChangePush stageType
     */

    /**
     * Constructs a new oStageStatusChangePush.
     * @exports oStageStatusChangePush
     * @classdesc Represents a oStageStatusChangePush.
     * @implements IoStageStatusChangePush
     * @constructor
     * @param {IoStageStatusChangePush=} [properties] Properties to set
     */
    function oStageStatusChangePush(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * oStageStatusChangePush index.
     * @member {number} index
     * @memberof oStageStatusChangePush
     * @instance
     */
    oStageStatusChangePush.prototype.index = 0;

    /**
     * oStageStatusChangePush stageId.
     * @member {number|Long} stageId
     * @memberof oStageStatusChangePush
     * @instance
     */
    oStageStatusChangePush.prototype.stageId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * oStageStatusChangePush userId.
     * @member {number|Long} userId
     * @memberof oStageStatusChangePush
     * @instance
     */
    oStageStatusChangePush.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * oStageStatusChangePush stageType.
     * @member {eStageType} stageType
     * @memberof oStageStatusChangePush
     * @instance
     */
    oStageStatusChangePush.prototype.stageType = 0;

    /**
     * Creates a new oStageStatusChangePush instance using the specified properties.
     * @function create
     * @memberof oStageStatusChangePush
     * @static
     * @param {IoStageStatusChangePush=} [properties] Properties to set
     * @returns {oStageStatusChangePush} oStageStatusChangePush instance
     */
    oStageStatusChangePush.create = function create(properties) {
        return new oStageStatusChangePush(properties);
    };

    /**
     * Encodes the specified oStageStatusChangePush message. Does not implicitly {@link oStageStatusChangePush.verify|verify} messages.
     * @function encode
     * @memberof oStageStatusChangePush
     * @static
     * @param {IoStageStatusChangePush} message oStageStatusChangePush message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oStageStatusChangePush.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.index != null && Object.hasOwnProperty.call(message, "index"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.index);
        if (message.stageId != null && Object.hasOwnProperty.call(message, "stageId"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.stageId);
        if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.userId);
        if (message.stageType != null && Object.hasOwnProperty.call(message, "stageType"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.stageType);
        return writer;
    };

    /**
     * Encodes the specified oStageStatusChangePush message, length delimited. Does not implicitly {@link oStageStatusChangePush.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oStageStatusChangePush
     * @static
     * @param {IoStageStatusChangePush} message oStageStatusChangePush message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oStageStatusChangePush.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a oStageStatusChangePush message from the specified reader or buffer.
     * @function decode
     * @memberof oStageStatusChangePush
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oStageStatusChangePush} oStageStatusChangePush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oStageStatusChangePush.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oStageStatusChangePush();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.index = reader.int32();
                    break;
                }
            case 2: {
                    message.stageId = reader.int64();
                    break;
                }
            case 3: {
                    message.userId = reader.uint64();
                    break;
                }
            case 4: {
                    message.stageType = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a oStageStatusChangePush message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oStageStatusChangePush
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oStageStatusChangePush} oStageStatusChangePush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oStageStatusChangePush.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a oStageStatusChangePush message.
     * @function verify
     * @memberof oStageStatusChangePush
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    oStageStatusChangePush.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.index != null && message.hasOwnProperty("index"))
            if (!$util.isInteger(message.index))
                return "index: integer expected";
        if (message.stageId != null && message.hasOwnProperty("stageId"))
            if (!$util.isInteger(message.stageId) && !(message.stageId && $util.isInteger(message.stageId.low) && $util.isInteger(message.stageId.high)))
                return "stageId: integer|Long expected";
        if (message.userId != null && message.hasOwnProperty("userId"))
            if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                return "userId: integer|Long expected";
        if (message.stageType != null && message.hasOwnProperty("stageType"))
            switch (message.stageType) {
            default:
                return "stageType: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
                break;
            }
        return null;
    };

    /**
     * Creates a oStageStatusChangePush message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oStageStatusChangePush
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oStageStatusChangePush} oStageStatusChangePush
     */
    oStageStatusChangePush.fromObject = function fromObject(object) {
        if (object instanceof $root.oStageStatusChangePush)
            return object;
        var message = new $root.oStageStatusChangePush();
        if (object.index != null)
            message.index = object.index | 0;
        if (object.stageId != null)
            if ($util.Long)
                (message.stageId = $util.Long.fromValue(object.stageId)).unsigned = false;
            else if (typeof object.stageId === "string")
                message.stageId = parseInt(object.stageId, 10);
            else if (typeof object.stageId === "number")
                message.stageId = object.stageId;
            else if (typeof object.stageId === "object")
                message.stageId = new $util.LongBits(object.stageId.low >>> 0, object.stageId.high >>> 0).toNumber();
        if (object.userId != null)
            if ($util.Long)
                (message.userId = $util.Long.fromValue(object.userId)).unsigned = true;
            else if (typeof object.userId === "string")
                message.userId = parseInt(object.userId, 10);
            else if (typeof object.userId === "number")
                message.userId = object.userId;
            else if (typeof object.userId === "object")
                message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber(true);
        switch (object.stageType) {
        default:
            if (typeof object.stageType === "number") {
                message.stageType = object.stageType;
                break;
            }
            break;
        case "StageTypeFree":
        case 0:
            message.stageType = 0;
            break;
        case "StageTypeWaitEnter":
        case 1:
            message.stageType = 1;
            break;
        case "StageTypeTryEnter":
        case 2:
            message.stageType = 2;
            break;
        case "StageTypeWorking":
        case 3:
            message.stageType = 3;
            break;
        case "StageTypeOff":
        case 4:
            message.stageType = 4;
            break;
        }
        return message;
    };

    /**
     * Creates a plain object from a oStageStatusChangePush message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oStageStatusChangePush
     * @static
     * @param {oStageStatusChangePush} message oStageStatusChangePush
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    oStageStatusChangePush.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.index = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.stageId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.stageId = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.userId = options.longs === String ? "0" : 0;
            object.stageType = options.enums === String ? "StageTypeFree" : 0;
        }
        if (message.index != null && message.hasOwnProperty("index"))
            object.index = message.index;
        if (message.stageId != null && message.hasOwnProperty("stageId"))
            if (typeof message.stageId === "number")
                object.stageId = options.longs === String ? String(message.stageId) : message.stageId;
            else
                object.stageId = options.longs === String ? $util.Long.prototype.toString.call(message.stageId) : options.longs === Number ? new $util.LongBits(message.stageId.low >>> 0, message.stageId.high >>> 0).toNumber() : message.stageId;
        if (message.userId != null && message.hasOwnProperty("userId"))
            if (typeof message.userId === "number")
                object.userId = options.longs === String ? String(message.userId) : message.userId;
            else
                object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber(true) : message.userId;
        if (message.stageType != null && message.hasOwnProperty("stageType"))
            object.stageType = options.enums === String ? $root.eStageType[message.stageType] === undefined ? message.stageType : $root.eStageType[message.stageType] : message.stageType;
        return object;
    };

    /**
     * Converts this oStageStatusChangePush to JSON.
     * @function toJSON
     * @memberof oStageStatusChangePush
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    oStageStatusChangePush.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for oStageStatusChangePush
     * @function getTypeUrl
     * @memberof oStageStatusChangePush
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    oStageStatusChangePush.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/oStageStatusChangePush";
    };

    return oStageStatusChangePush;
})();

$root.oInviteUser = (function() {

    /**
     * Properties of a oInviteUser.
     * @exports IoInviteUser
     * @interface IoInviteUser
     * @property {number|null} [index] oInviteUser index
     * @property {number|Long|null} [userId] oInviteUser userId
     */

    /**
     * Constructs a new oInviteUser.
     * @exports oInviteUser
     * @classdesc Represents a oInviteUser.
     * @implements IoInviteUser
     * @constructor
     * @param {IoInviteUser=} [properties] Properties to set
     */
    function oInviteUser(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * oInviteUser index.
     * @member {number} index
     * @memberof oInviteUser
     * @instance
     */
    oInviteUser.prototype.index = 0;

    /**
     * oInviteUser userId.
     * @member {number|Long} userId
     * @memberof oInviteUser
     * @instance
     */
    oInviteUser.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Creates a new oInviteUser instance using the specified properties.
     * @function create
     * @memberof oInviteUser
     * @static
     * @param {IoInviteUser=} [properties] Properties to set
     * @returns {oInviteUser} oInviteUser instance
     */
    oInviteUser.create = function create(properties) {
        return new oInviteUser(properties);
    };

    /**
     * Encodes the specified oInviteUser message. Does not implicitly {@link oInviteUser.verify|verify} messages.
     * @function encode
     * @memberof oInviteUser
     * @static
     * @param {IoInviteUser} message oInviteUser message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oInviteUser.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.index != null && Object.hasOwnProperty.call(message, "index"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.index);
        if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.userId);
        return writer;
    };

    /**
     * Encodes the specified oInviteUser message, length delimited. Does not implicitly {@link oInviteUser.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oInviteUser
     * @static
     * @param {IoInviteUser} message oInviteUser message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oInviteUser.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a oInviteUser message from the specified reader or buffer.
     * @function decode
     * @memberof oInviteUser
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oInviteUser} oInviteUser
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oInviteUser.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oInviteUser();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.index = reader.int32();
                    break;
                }
            case 2: {
                    message.userId = reader.uint64();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a oInviteUser message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oInviteUser
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oInviteUser} oInviteUser
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oInviteUser.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a oInviteUser message.
     * @function verify
     * @memberof oInviteUser
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    oInviteUser.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.index != null && message.hasOwnProperty("index"))
            if (!$util.isInteger(message.index))
                return "index: integer expected";
        if (message.userId != null && message.hasOwnProperty("userId"))
            if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                return "userId: integer|Long expected";
        return null;
    };

    /**
     * Creates a oInviteUser message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oInviteUser
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oInviteUser} oInviteUser
     */
    oInviteUser.fromObject = function fromObject(object) {
        if (object instanceof $root.oInviteUser)
            return object;
        var message = new $root.oInviteUser();
        if (object.index != null)
            message.index = object.index | 0;
        if (object.userId != null)
            if ($util.Long)
                (message.userId = $util.Long.fromValue(object.userId)).unsigned = true;
            else if (typeof object.userId === "string")
                message.userId = parseInt(object.userId, 10);
            else if (typeof object.userId === "number")
                message.userId = object.userId;
            else if (typeof object.userId === "object")
                message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber(true);
        return message;
    };

    /**
     * Creates a plain object from a oInviteUser message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oInviteUser
     * @static
     * @param {oInviteUser} message oInviteUser
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    oInviteUser.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.index = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.userId = options.longs === String ? "0" : 0;
        }
        if (message.index != null && message.hasOwnProperty("index"))
            object.index = message.index;
        if (message.userId != null && message.hasOwnProperty("userId"))
            if (typeof message.userId === "number")
                object.userId = options.longs === String ? String(message.userId) : message.userId;
            else
                object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber(true) : message.userId;
        return object;
    };

    /**
     * Converts this oInviteUser to JSON.
     * @function toJSON
     * @memberof oInviteUser
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    oInviteUser.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for oInviteUser
     * @function getTypeUrl
     * @memberof oInviteUser
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    oInviteUser.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/oInviteUser";
    };

    return oInviteUser;
})();

$root.oMultiActionReq = (function() {

    /**
     * Properties of a oMultiActionReq.
     * @exports IoMultiActionReq
     * @interface IoMultiActionReq
     * @property {string|null} [context] oMultiActionReq context
     * @property {Array.<IoInviteUser>|null} [users] oMultiActionReq users
     * @property {string|null} [inviteText] oMultiActionReq inviteText
     */

    /**
     * Constructs a new oMultiActionReq.
     * @exports oMultiActionReq
     * @classdesc Represents a oMultiActionReq.
     * @implements IoMultiActionReq
     * @constructor
     * @param {IoMultiActionReq=} [properties] Properties to set
     */
    function oMultiActionReq(properties) {
        this.users = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * oMultiActionReq context.
     * @member {string} context
     * @memberof oMultiActionReq
     * @instance
     */
    oMultiActionReq.prototype.context = "";

    /**
     * oMultiActionReq users.
     * @member {Array.<IoInviteUser>} users
     * @memberof oMultiActionReq
     * @instance
     */
    oMultiActionReq.prototype.users = $util.emptyArray;

    /**
     * oMultiActionReq inviteText.
     * @member {string} inviteText
     * @memberof oMultiActionReq
     * @instance
     */
    oMultiActionReq.prototype.inviteText = "";

    /**
     * Creates a new oMultiActionReq instance using the specified properties.
     * @function create
     * @memberof oMultiActionReq
     * @static
     * @param {IoMultiActionReq=} [properties] Properties to set
     * @returns {oMultiActionReq} oMultiActionReq instance
     */
    oMultiActionReq.create = function create(properties) {
        return new oMultiActionReq(properties);
    };

    /**
     * Encodes the specified oMultiActionReq message. Does not implicitly {@link oMultiActionReq.verify|verify} messages.
     * @function encode
     * @memberof oMultiActionReq
     * @static
     * @param {IoMultiActionReq} message oMultiActionReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oMultiActionReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.context != null && Object.hasOwnProperty.call(message, "context"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.context);
        if (message.users != null && message.users.length)
            for (var i = 0; i < message.users.length; ++i)
                $root.oInviteUser.encode(message.users[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.inviteText != null && Object.hasOwnProperty.call(message, "inviteText"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.inviteText);
        return writer;
    };

    /**
     * Encodes the specified oMultiActionReq message, length delimited. Does not implicitly {@link oMultiActionReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oMultiActionReq
     * @static
     * @param {IoMultiActionReq} message oMultiActionReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oMultiActionReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a oMultiActionReq message from the specified reader or buffer.
     * @function decode
     * @memberof oMultiActionReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oMultiActionReq} oMultiActionReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oMultiActionReq.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oMultiActionReq();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.context = reader.string();
                    break;
                }
            case 2: {
                    if (!(message.users && message.users.length))
                        message.users = [];
                    message.users.push($root.oInviteUser.decode(reader, reader.uint32()));
                    break;
                }
            case 3: {
                    message.inviteText = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a oMultiActionReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oMultiActionReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oMultiActionReq} oMultiActionReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oMultiActionReq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a oMultiActionReq message.
     * @function verify
     * @memberof oMultiActionReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    oMultiActionReq.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.context != null && message.hasOwnProperty("context"))
            if (!$util.isString(message.context))
                return "context: string expected";
        if (message.users != null && message.hasOwnProperty("users")) {
            if (!Array.isArray(message.users))
                return "users: array expected";
            for (var i = 0; i < message.users.length; ++i) {
                var error = $root.oInviteUser.verify(message.users[i]);
                if (error)
                    return "users." + error;
            }
        }
        if (message.inviteText != null && message.hasOwnProperty("inviteText"))
            if (!$util.isString(message.inviteText))
                return "inviteText: string expected";
        return null;
    };

    /**
     * Creates a oMultiActionReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oMultiActionReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oMultiActionReq} oMultiActionReq
     */
    oMultiActionReq.fromObject = function fromObject(object) {
        if (object instanceof $root.oMultiActionReq)
            return object;
        var message = new $root.oMultiActionReq();
        if (object.context != null)
            message.context = String(object.context);
        if (object.users) {
            if (!Array.isArray(object.users))
                throw TypeError(".oMultiActionReq.users: array expected");
            message.users = [];
            for (var i = 0; i < object.users.length; ++i) {
                if (typeof object.users[i] !== "object")
                    throw TypeError(".oMultiActionReq.users: object expected");
                message.users[i] = $root.oInviteUser.fromObject(object.users[i]);
            }
        }
        if (object.inviteText != null)
            message.inviteText = String(object.inviteText);
        return message;
    };

    /**
     * Creates a plain object from a oMultiActionReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oMultiActionReq
     * @static
     * @param {oMultiActionReq} message oMultiActionReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    oMultiActionReq.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.users = [];
        if (options.defaults) {
            object.context = "";
            object.inviteText = "";
        }
        if (message.context != null && message.hasOwnProperty("context"))
            object.context = message.context;
        if (message.users && message.users.length) {
            object.users = [];
            for (var j = 0; j < message.users.length; ++j)
                object.users[j] = $root.oInviteUser.toObject(message.users[j], options);
        }
        if (message.inviteText != null && message.hasOwnProperty("inviteText"))
            object.inviteText = message.inviteText;
        return object;
    };

    /**
     * Converts this oMultiActionReq to JSON.
     * @function toJSON
     * @memberof oMultiActionReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    oMultiActionReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for oMultiActionReq
     * @function getTypeUrl
     * @memberof oMultiActionReq
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    oMultiActionReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/oMultiActionReq";
    };

    return oMultiActionReq;
})();

$root.oMultiActionAsw = (function() {

    /**
     * Properties of a oMultiActionAsw.
     * @exports IoMultiActionAsw
     * @interface IoMultiActionAsw
     * @property {eError|null} [code] oMultiActionAsw code
     */

    /**
     * Constructs a new oMultiActionAsw.
     * @exports oMultiActionAsw
     * @classdesc Represents a oMultiActionAsw.
     * @implements IoMultiActionAsw
     * @constructor
     * @param {IoMultiActionAsw=} [properties] Properties to set
     */
    function oMultiActionAsw(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * oMultiActionAsw code.
     * @member {eError} code
     * @memberof oMultiActionAsw
     * @instance
     */
    oMultiActionAsw.prototype.code = 0;

    /**
     * Creates a new oMultiActionAsw instance using the specified properties.
     * @function create
     * @memberof oMultiActionAsw
     * @static
     * @param {IoMultiActionAsw=} [properties] Properties to set
     * @returns {oMultiActionAsw} oMultiActionAsw instance
     */
    oMultiActionAsw.create = function create(properties) {
        return new oMultiActionAsw(properties);
    };

    /**
     * Encodes the specified oMultiActionAsw message. Does not implicitly {@link oMultiActionAsw.verify|verify} messages.
     * @function encode
     * @memberof oMultiActionAsw
     * @static
     * @param {IoMultiActionAsw} message oMultiActionAsw message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oMultiActionAsw.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.code != null && Object.hasOwnProperty.call(message, "code"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
        return writer;
    };

    /**
     * Encodes the specified oMultiActionAsw message, length delimited. Does not implicitly {@link oMultiActionAsw.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oMultiActionAsw
     * @static
     * @param {IoMultiActionAsw} message oMultiActionAsw message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oMultiActionAsw.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a oMultiActionAsw message from the specified reader or buffer.
     * @function decode
     * @memberof oMultiActionAsw
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oMultiActionAsw} oMultiActionAsw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oMultiActionAsw.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oMultiActionAsw();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.code = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a oMultiActionAsw message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oMultiActionAsw
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oMultiActionAsw} oMultiActionAsw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oMultiActionAsw.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a oMultiActionAsw message.
     * @function verify
     * @memberof oMultiActionAsw
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    oMultiActionAsw.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.code != null && message.hasOwnProperty("code"))
            switch (message.code) {
            default:
                return "code: enum value expected";
            case 0:
            case 1:
            case 2:
            case 41:
            case 42:
            case 43:
            case 44:
            case 51:
            case 52:
            case 53:
            case 61:
            case 62:
            case 63:
            case 64:
            case 65:
            case 71:
            case 72:
            case 73:
            case 74:
            case 75:
            case 76:
            case 77:
            case 80:
            case 81:
            case 82:
            case 83:
                break;
            }
        return null;
    };

    /**
     * Creates a oMultiActionAsw message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oMultiActionAsw
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oMultiActionAsw} oMultiActionAsw
     */
    oMultiActionAsw.fromObject = function fromObject(object) {
        if (object instanceof $root.oMultiActionAsw)
            return object;
        var message = new $root.oMultiActionAsw();
        switch (object.code) {
        default:
            if (typeof object.code === "number") {
                message.code = object.code;
                break;
            }
            break;
        case "UNKNOWN":
        case 0:
            message.code = 0;
            break;
        case "SUCCESS":
        case 1:
            message.code = 1;
            break;
        case "FAILD":
        case 2:
            message.code = 2;
            break;
        case "ERROR_REQ_PARAM":
        case 41:
            message.code = 41;
            break;
        case "ERROR_OTHER_ROOM_OPEN":
        case 42:
            message.code = 42;
            break;
        case "ERROR_CREATE_ROOM_FAIL":
        case 43:
            message.code = 43;
            break;
        case "ERROR_ENTER_ROOM_FAIL":
        case 44:
            message.code = 44;
            break;
        case "EMPTY_INS_TOKEN":
        case 51:
            message.code = 51;
            break;
        case "UNSET_INS_TOKEN":
        case 52:
            message.code = 52;
            break;
        case "ERROR_INS_TOKEN":
        case 53:
            message.code = 53;
            break;
        case "ERROR_APP_SERVER_CONNECT_FAIL":
        case 61:
            message.code = 61;
            break;
        case "ERROR_APP_SERVER_RET_NOT_200":
        case 62:
            message.code = 62;
            break;
        case "ERROR_APP_SERVER_RET_NOT_JSON":
        case 63:
            message.code = 63;
            break;
        case "ERROR_APP_SERVER_RET_AUTH_FAIL":
        case 64:
            message.code = 64;
            break;
        case "ERROR_APP_SERVER_RET_CODE_FAIL":
        case 65:
            message.code = 65;
            break;
        case "ERROR_NO_ROOM":
        case 71:
            message.code = 71;
            break;
        case "ERROR_NOT_IN_ROOM":
        case 72:
            message.code = 72;
            break;
        case "ERROR_ALREADY_IN_STAGE":
        case 73:
            message.code = 73;
            break;
        case "ERROR_ALREADY_IN_QUEUE":
        case 74:
            message.code = 74;
            break;
        case "ERROR_ENTER_STAGE_FAIL":
        case 75:
            message.code = 75;
            break;
        case "ERROR_ENTER_STAGE_TIMEOUT":
        case 76:
            message.code = 76;
            break;
        case "ERROR_NOT_IN_STAGE":
        case 77:
            message.code = 77;
            break;
        case "ERROR_INVITER_NOT_IN_UE":
        case 80:
            message.code = 80;
            break;
        case "ERROR_INVITEE_NOT_IN_STAGE":
        case 81:
            message.code = 81;
            break;
        case "ERROR_INVITE_CONTEXT_NOT_EXIST":
        case 82:
            message.code = 82;
            break;
        case "ERROR_INVITEE_NOT_YOU":
        case 83:
            message.code = 83;
            break;
        }
        return message;
    };

    /**
     * Creates a plain object from a oMultiActionAsw message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oMultiActionAsw
     * @static
     * @param {oMultiActionAsw} message oMultiActionAsw
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    oMultiActionAsw.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.code = options.enums === String ? "UNKNOWN" : 0;
        if (message.code != null && message.hasOwnProperty("code"))
            object.code = options.enums === String ? $root.eError[message.code] === undefined ? message.code : $root.eError[message.code] : message.code;
        return object;
    };

    /**
     * Converts this oMultiActionAsw to JSON.
     * @function toJSON
     * @memberof oMultiActionAsw
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    oMultiActionAsw.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for oMultiActionAsw
     * @function getTypeUrl
     * @memberof oMultiActionAsw
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    oMultiActionAsw.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/oMultiActionAsw";
    };

    return oMultiActionAsw;
})();

$root.oMultiActionInvitePush = (function() {

    /**
     * Properties of a oMultiActionInvitePush.
     * @exports IoMultiActionInvitePush
     * @interface IoMultiActionInvitePush
     * @property {string|null} [inviteText] oMultiActionInvitePush inviteText
     * @property {number|Long|null} [userId] oMultiActionInvitePush userId
     */

    /**
     * Constructs a new oMultiActionInvitePush.
     * @exports oMultiActionInvitePush
     * @classdesc Represents a oMultiActionInvitePush.
     * @implements IoMultiActionInvitePush
     * @constructor
     * @param {IoMultiActionInvitePush=} [properties] Properties to set
     */
    function oMultiActionInvitePush(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * oMultiActionInvitePush inviteText.
     * @member {string} inviteText
     * @memberof oMultiActionInvitePush
     * @instance
     */
    oMultiActionInvitePush.prototype.inviteText = "";

    /**
     * oMultiActionInvitePush userId.
     * @member {number|Long} userId
     * @memberof oMultiActionInvitePush
     * @instance
     */
    oMultiActionInvitePush.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Creates a new oMultiActionInvitePush instance using the specified properties.
     * @function create
     * @memberof oMultiActionInvitePush
     * @static
     * @param {IoMultiActionInvitePush=} [properties] Properties to set
     * @returns {oMultiActionInvitePush} oMultiActionInvitePush instance
     */
    oMultiActionInvitePush.create = function create(properties) {
        return new oMultiActionInvitePush(properties);
    };

    /**
     * Encodes the specified oMultiActionInvitePush message. Does not implicitly {@link oMultiActionInvitePush.verify|verify} messages.
     * @function encode
     * @memberof oMultiActionInvitePush
     * @static
     * @param {IoMultiActionInvitePush} message oMultiActionInvitePush message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oMultiActionInvitePush.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.inviteText != null && Object.hasOwnProperty.call(message, "inviteText"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.inviteText);
        if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.userId);
        return writer;
    };

    /**
     * Encodes the specified oMultiActionInvitePush message, length delimited. Does not implicitly {@link oMultiActionInvitePush.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oMultiActionInvitePush
     * @static
     * @param {IoMultiActionInvitePush} message oMultiActionInvitePush message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oMultiActionInvitePush.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a oMultiActionInvitePush message from the specified reader or buffer.
     * @function decode
     * @memberof oMultiActionInvitePush
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oMultiActionInvitePush} oMultiActionInvitePush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oMultiActionInvitePush.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oMultiActionInvitePush();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.inviteText = reader.string();
                    break;
                }
            case 2: {
                    message.userId = reader.uint64();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a oMultiActionInvitePush message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oMultiActionInvitePush
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oMultiActionInvitePush} oMultiActionInvitePush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oMultiActionInvitePush.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a oMultiActionInvitePush message.
     * @function verify
     * @memberof oMultiActionInvitePush
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    oMultiActionInvitePush.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.inviteText != null && message.hasOwnProperty("inviteText"))
            if (!$util.isString(message.inviteText))
                return "inviteText: string expected";
        if (message.userId != null && message.hasOwnProperty("userId"))
            if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                return "userId: integer|Long expected";
        return null;
    };

    /**
     * Creates a oMultiActionInvitePush message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oMultiActionInvitePush
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oMultiActionInvitePush} oMultiActionInvitePush
     */
    oMultiActionInvitePush.fromObject = function fromObject(object) {
        if (object instanceof $root.oMultiActionInvitePush)
            return object;
        var message = new $root.oMultiActionInvitePush();
        if (object.inviteText != null)
            message.inviteText = String(object.inviteText);
        if (object.userId != null)
            if ($util.Long)
                (message.userId = $util.Long.fromValue(object.userId)).unsigned = true;
            else if (typeof object.userId === "string")
                message.userId = parseInt(object.userId, 10);
            else if (typeof object.userId === "number")
                message.userId = object.userId;
            else if (typeof object.userId === "object")
                message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber(true);
        return message;
    };

    /**
     * Creates a plain object from a oMultiActionInvitePush message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oMultiActionInvitePush
     * @static
     * @param {oMultiActionInvitePush} message oMultiActionInvitePush
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    oMultiActionInvitePush.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.inviteText = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.userId = options.longs === String ? "0" : 0;
        }
        if (message.inviteText != null && message.hasOwnProperty("inviteText"))
            object.inviteText = message.inviteText;
        if (message.userId != null && message.hasOwnProperty("userId"))
            if (typeof message.userId === "number")
                object.userId = options.longs === String ? String(message.userId) : message.userId;
            else
                object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber(true) : message.userId;
        return object;
    };

    /**
     * Converts this oMultiActionInvitePush to JSON.
     * @function toJSON
     * @memberof oMultiActionInvitePush
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    oMultiActionInvitePush.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for oMultiActionInvitePush
     * @function getTypeUrl
     * @memberof oMultiActionInvitePush
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    oMultiActionInvitePush.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/oMultiActionInvitePush";
    };

    return oMultiActionInvitePush;
})();

$root.oMultiActionReply = (function() {

    /**
     * Properties of a oMultiActionReply.
     * @exports IoMultiActionReply
     * @interface IoMultiActionReply
     * @property {boolean|null} [agree] oMultiActionReply agree
     * @property {number|Long|null} [inviterUserId] oMultiActionReply inviterUserId
     */

    /**
     * Constructs a new oMultiActionReply.
     * @exports oMultiActionReply
     * @classdesc Represents a oMultiActionReply.
     * @implements IoMultiActionReply
     * @constructor
     * @param {IoMultiActionReply=} [properties] Properties to set
     */
    function oMultiActionReply(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * oMultiActionReply agree.
     * @member {boolean} agree
     * @memberof oMultiActionReply
     * @instance
     */
    oMultiActionReply.prototype.agree = false;

    /**
     * oMultiActionReply inviterUserId.
     * @member {number|Long} inviterUserId
     * @memberof oMultiActionReply
     * @instance
     */
    oMultiActionReply.prototype.inviterUserId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Creates a new oMultiActionReply instance using the specified properties.
     * @function create
     * @memberof oMultiActionReply
     * @static
     * @param {IoMultiActionReply=} [properties] Properties to set
     * @returns {oMultiActionReply} oMultiActionReply instance
     */
    oMultiActionReply.create = function create(properties) {
        return new oMultiActionReply(properties);
    };

    /**
     * Encodes the specified oMultiActionReply message. Does not implicitly {@link oMultiActionReply.verify|verify} messages.
     * @function encode
     * @memberof oMultiActionReply
     * @static
     * @param {IoMultiActionReply} message oMultiActionReply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oMultiActionReply.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.agree != null && Object.hasOwnProperty.call(message, "agree"))
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.agree);
        if (message.inviterUserId != null && Object.hasOwnProperty.call(message, "inviterUserId"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.inviterUserId);
        return writer;
    };

    /**
     * Encodes the specified oMultiActionReply message, length delimited. Does not implicitly {@link oMultiActionReply.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oMultiActionReply
     * @static
     * @param {IoMultiActionReply} message oMultiActionReply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oMultiActionReply.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a oMultiActionReply message from the specified reader or buffer.
     * @function decode
     * @memberof oMultiActionReply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oMultiActionReply} oMultiActionReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oMultiActionReply.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oMultiActionReply();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.agree = reader.bool();
                    break;
                }
            case 2: {
                    message.inviterUserId = reader.uint64();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a oMultiActionReply message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oMultiActionReply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oMultiActionReply} oMultiActionReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oMultiActionReply.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a oMultiActionReply message.
     * @function verify
     * @memberof oMultiActionReply
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    oMultiActionReply.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.agree != null && message.hasOwnProperty("agree"))
            if (typeof message.agree !== "boolean")
                return "agree: boolean expected";
        if (message.inviterUserId != null && message.hasOwnProperty("inviterUserId"))
            if (!$util.isInteger(message.inviterUserId) && !(message.inviterUserId && $util.isInteger(message.inviterUserId.low) && $util.isInteger(message.inviterUserId.high)))
                return "inviterUserId: integer|Long expected";
        return null;
    };

    /**
     * Creates a oMultiActionReply message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oMultiActionReply
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oMultiActionReply} oMultiActionReply
     */
    oMultiActionReply.fromObject = function fromObject(object) {
        if (object instanceof $root.oMultiActionReply)
            return object;
        var message = new $root.oMultiActionReply();
        if (object.agree != null)
            message.agree = Boolean(object.agree);
        if (object.inviterUserId != null)
            if ($util.Long)
                (message.inviterUserId = $util.Long.fromValue(object.inviterUserId)).unsigned = true;
            else if (typeof object.inviterUserId === "string")
                message.inviterUserId = parseInt(object.inviterUserId, 10);
            else if (typeof object.inviterUserId === "number")
                message.inviterUserId = object.inviterUserId;
            else if (typeof object.inviterUserId === "object")
                message.inviterUserId = new $util.LongBits(object.inviterUserId.low >>> 0, object.inviterUserId.high >>> 0).toNumber(true);
        return message;
    };

    /**
     * Creates a plain object from a oMultiActionReply message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oMultiActionReply
     * @static
     * @param {oMultiActionReply} message oMultiActionReply
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    oMultiActionReply.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.agree = false;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.inviterUserId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.inviterUserId = options.longs === String ? "0" : 0;
        }
        if (message.agree != null && message.hasOwnProperty("agree"))
            object.agree = message.agree;
        if (message.inviterUserId != null && message.hasOwnProperty("inviterUserId"))
            if (typeof message.inviterUserId === "number")
                object.inviterUserId = options.longs === String ? String(message.inviterUserId) : message.inviterUserId;
            else
                object.inviterUserId = options.longs === String ? $util.Long.prototype.toString.call(message.inviterUserId) : options.longs === Number ? new $util.LongBits(message.inviterUserId.low >>> 0, message.inviterUserId.high >>> 0).toNumber(true) : message.inviterUserId;
        return object;
    };

    /**
     * Converts this oMultiActionReply to JSON.
     * @function toJSON
     * @memberof oMultiActionReply
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    oMultiActionReply.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for oMultiActionReply
     * @function getTypeUrl
     * @memberof oMultiActionReply
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    oMultiActionReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/oMultiActionReply";
    };

    return oMultiActionReply;
})();

$root.oMultiActionReplyAsw = (function() {

    /**
     * Properties of a oMultiActionReplyAsw.
     * @exports IoMultiActionReplyAsw
     * @interface IoMultiActionReplyAsw
     * @property {eError|null} [code] oMultiActionReplyAsw code
     */

    /**
     * Constructs a new oMultiActionReplyAsw.
     * @exports oMultiActionReplyAsw
     * @classdesc Represents a oMultiActionReplyAsw.
     * @implements IoMultiActionReplyAsw
     * @constructor
     * @param {IoMultiActionReplyAsw=} [properties] Properties to set
     */
    function oMultiActionReplyAsw(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * oMultiActionReplyAsw code.
     * @member {eError} code
     * @memberof oMultiActionReplyAsw
     * @instance
     */
    oMultiActionReplyAsw.prototype.code = 0;

    /**
     * Creates a new oMultiActionReplyAsw instance using the specified properties.
     * @function create
     * @memberof oMultiActionReplyAsw
     * @static
     * @param {IoMultiActionReplyAsw=} [properties] Properties to set
     * @returns {oMultiActionReplyAsw} oMultiActionReplyAsw instance
     */
    oMultiActionReplyAsw.create = function create(properties) {
        return new oMultiActionReplyAsw(properties);
    };

    /**
     * Encodes the specified oMultiActionReplyAsw message. Does not implicitly {@link oMultiActionReplyAsw.verify|verify} messages.
     * @function encode
     * @memberof oMultiActionReplyAsw
     * @static
     * @param {IoMultiActionReplyAsw} message oMultiActionReplyAsw message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oMultiActionReplyAsw.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.code != null && Object.hasOwnProperty.call(message, "code"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
        return writer;
    };

    /**
     * Encodes the specified oMultiActionReplyAsw message, length delimited. Does not implicitly {@link oMultiActionReplyAsw.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oMultiActionReplyAsw
     * @static
     * @param {IoMultiActionReplyAsw} message oMultiActionReplyAsw message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oMultiActionReplyAsw.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a oMultiActionReplyAsw message from the specified reader or buffer.
     * @function decode
     * @memberof oMultiActionReplyAsw
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oMultiActionReplyAsw} oMultiActionReplyAsw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oMultiActionReplyAsw.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oMultiActionReplyAsw();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.code = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a oMultiActionReplyAsw message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oMultiActionReplyAsw
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oMultiActionReplyAsw} oMultiActionReplyAsw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oMultiActionReplyAsw.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a oMultiActionReplyAsw message.
     * @function verify
     * @memberof oMultiActionReplyAsw
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    oMultiActionReplyAsw.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.code != null && message.hasOwnProperty("code"))
            switch (message.code) {
            default:
                return "code: enum value expected";
            case 0:
            case 1:
            case 2:
            case 41:
            case 42:
            case 43:
            case 44:
            case 51:
            case 52:
            case 53:
            case 61:
            case 62:
            case 63:
            case 64:
            case 65:
            case 71:
            case 72:
            case 73:
            case 74:
            case 75:
            case 76:
            case 77:
            case 80:
            case 81:
            case 82:
            case 83:
                break;
            }
        return null;
    };

    /**
     * Creates a oMultiActionReplyAsw message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oMultiActionReplyAsw
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oMultiActionReplyAsw} oMultiActionReplyAsw
     */
    oMultiActionReplyAsw.fromObject = function fromObject(object) {
        if (object instanceof $root.oMultiActionReplyAsw)
            return object;
        var message = new $root.oMultiActionReplyAsw();
        switch (object.code) {
        default:
            if (typeof object.code === "number") {
                message.code = object.code;
                break;
            }
            break;
        case "UNKNOWN":
        case 0:
            message.code = 0;
            break;
        case "SUCCESS":
        case 1:
            message.code = 1;
            break;
        case "FAILD":
        case 2:
            message.code = 2;
            break;
        case "ERROR_REQ_PARAM":
        case 41:
            message.code = 41;
            break;
        case "ERROR_OTHER_ROOM_OPEN":
        case 42:
            message.code = 42;
            break;
        case "ERROR_CREATE_ROOM_FAIL":
        case 43:
            message.code = 43;
            break;
        case "ERROR_ENTER_ROOM_FAIL":
        case 44:
            message.code = 44;
            break;
        case "EMPTY_INS_TOKEN":
        case 51:
            message.code = 51;
            break;
        case "UNSET_INS_TOKEN":
        case 52:
            message.code = 52;
            break;
        case "ERROR_INS_TOKEN":
        case 53:
            message.code = 53;
            break;
        case "ERROR_APP_SERVER_CONNECT_FAIL":
        case 61:
            message.code = 61;
            break;
        case "ERROR_APP_SERVER_RET_NOT_200":
        case 62:
            message.code = 62;
            break;
        case "ERROR_APP_SERVER_RET_NOT_JSON":
        case 63:
            message.code = 63;
            break;
        case "ERROR_APP_SERVER_RET_AUTH_FAIL":
        case 64:
            message.code = 64;
            break;
        case "ERROR_APP_SERVER_RET_CODE_FAIL":
        case 65:
            message.code = 65;
            break;
        case "ERROR_NO_ROOM":
        case 71:
            message.code = 71;
            break;
        case "ERROR_NOT_IN_ROOM":
        case 72:
            message.code = 72;
            break;
        case "ERROR_ALREADY_IN_STAGE":
        case 73:
            message.code = 73;
            break;
        case "ERROR_ALREADY_IN_QUEUE":
        case 74:
            message.code = 74;
            break;
        case "ERROR_ENTER_STAGE_FAIL":
        case 75:
            message.code = 75;
            break;
        case "ERROR_ENTER_STAGE_TIMEOUT":
        case 76:
            message.code = 76;
            break;
        case "ERROR_NOT_IN_STAGE":
        case 77:
            message.code = 77;
            break;
        case "ERROR_INVITER_NOT_IN_UE":
        case 80:
            message.code = 80;
            break;
        case "ERROR_INVITEE_NOT_IN_STAGE":
        case 81:
            message.code = 81;
            break;
        case "ERROR_INVITE_CONTEXT_NOT_EXIST":
        case 82:
            message.code = 82;
            break;
        case "ERROR_INVITEE_NOT_YOU":
        case 83:
            message.code = 83;
            break;
        }
        return message;
    };

    /**
     * Creates a plain object from a oMultiActionReplyAsw message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oMultiActionReplyAsw
     * @static
     * @param {oMultiActionReplyAsw} message oMultiActionReplyAsw
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    oMultiActionReplyAsw.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.code = options.enums === String ? "UNKNOWN" : 0;
        if (message.code != null && message.hasOwnProperty("code"))
            object.code = options.enums === String ? $root.eError[message.code] === undefined ? message.code : $root.eError[message.code] : message.code;
        return object;
    };

    /**
     * Converts this oMultiActionReplyAsw to JSON.
     * @function toJSON
     * @memberof oMultiActionReplyAsw
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    oMultiActionReplyAsw.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for oMultiActionReplyAsw
     * @function getTypeUrl
     * @memberof oMultiActionReplyAsw
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    oMultiActionReplyAsw.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/oMultiActionReplyAsw";
    };

    return oMultiActionReplyAsw;
})();

$root.oMultiActionReplyResult = (function() {

    /**
     * Properties of a oMultiActionReplyResult.
     * @exports IoMultiActionReplyResult
     * @interface IoMultiActionReplyResult
     * @property {boolean|null} [agree] oMultiActionReplyResult agree
     * @property {number|Long|null} [userId] oMultiActionReplyResult userId
     */

    /**
     * Constructs a new oMultiActionReplyResult.
     * @exports oMultiActionReplyResult
     * @classdesc Represents a oMultiActionReplyResult.
     * @implements IoMultiActionReplyResult
     * @constructor
     * @param {IoMultiActionReplyResult=} [properties] Properties to set
     */
    function oMultiActionReplyResult(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * oMultiActionReplyResult agree.
     * @member {boolean} agree
     * @memberof oMultiActionReplyResult
     * @instance
     */
    oMultiActionReplyResult.prototype.agree = false;

    /**
     * oMultiActionReplyResult userId.
     * @member {number|Long} userId
     * @memberof oMultiActionReplyResult
     * @instance
     */
    oMultiActionReplyResult.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Creates a new oMultiActionReplyResult instance using the specified properties.
     * @function create
     * @memberof oMultiActionReplyResult
     * @static
     * @param {IoMultiActionReplyResult=} [properties] Properties to set
     * @returns {oMultiActionReplyResult} oMultiActionReplyResult instance
     */
    oMultiActionReplyResult.create = function create(properties) {
        return new oMultiActionReplyResult(properties);
    };

    /**
     * Encodes the specified oMultiActionReplyResult message. Does not implicitly {@link oMultiActionReplyResult.verify|verify} messages.
     * @function encode
     * @memberof oMultiActionReplyResult
     * @static
     * @param {IoMultiActionReplyResult} message oMultiActionReplyResult message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oMultiActionReplyResult.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.agree != null && Object.hasOwnProperty.call(message, "agree"))
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.agree);
        if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.userId);
        return writer;
    };

    /**
     * Encodes the specified oMultiActionReplyResult message, length delimited. Does not implicitly {@link oMultiActionReplyResult.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oMultiActionReplyResult
     * @static
     * @param {IoMultiActionReplyResult} message oMultiActionReplyResult message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    oMultiActionReplyResult.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a oMultiActionReplyResult message from the specified reader or buffer.
     * @function decode
     * @memberof oMultiActionReplyResult
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oMultiActionReplyResult} oMultiActionReplyResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oMultiActionReplyResult.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oMultiActionReplyResult();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.agree = reader.bool();
                    break;
                }
            case 2: {
                    message.userId = reader.uint64();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a oMultiActionReplyResult message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oMultiActionReplyResult
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oMultiActionReplyResult} oMultiActionReplyResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    oMultiActionReplyResult.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a oMultiActionReplyResult message.
     * @function verify
     * @memberof oMultiActionReplyResult
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    oMultiActionReplyResult.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.agree != null && message.hasOwnProperty("agree"))
            if (typeof message.agree !== "boolean")
                return "agree: boolean expected";
        if (message.userId != null && message.hasOwnProperty("userId"))
            if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                return "userId: integer|Long expected";
        return null;
    };

    /**
     * Creates a oMultiActionReplyResult message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oMultiActionReplyResult
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oMultiActionReplyResult} oMultiActionReplyResult
     */
    oMultiActionReplyResult.fromObject = function fromObject(object) {
        if (object instanceof $root.oMultiActionReplyResult)
            return object;
        var message = new $root.oMultiActionReplyResult();
        if (object.agree != null)
            message.agree = Boolean(object.agree);
        if (object.userId != null)
            if ($util.Long)
                (message.userId = $util.Long.fromValue(object.userId)).unsigned = true;
            else if (typeof object.userId === "string")
                message.userId = parseInt(object.userId, 10);
            else if (typeof object.userId === "number")
                message.userId = object.userId;
            else if (typeof object.userId === "object")
                message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber(true);
        return message;
    };

    /**
     * Creates a plain object from a oMultiActionReplyResult message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oMultiActionReplyResult
     * @static
     * @param {oMultiActionReplyResult} message oMultiActionReplyResult
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    oMultiActionReplyResult.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.agree = false;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.userId = options.longs === String ? "0" : 0;
        }
        if (message.agree != null && message.hasOwnProperty("agree"))
            object.agree = message.agree;
        if (message.userId != null && message.hasOwnProperty("userId"))
            if (typeof message.userId === "number")
                object.userId = options.longs === String ? String(message.userId) : message.userId;
            else
                object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber(true) : message.userId;
        return object;
    };

    /**
     * Converts this oMultiActionReplyResult to JSON.
     * @function toJSON
     * @memberof oMultiActionReplyResult
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    oMultiActionReplyResult.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for oMultiActionReplyResult
     * @function getTypeUrl
     * @memberof oMultiActionReplyResult
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    oMultiActionReplyResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/oMultiActionReplyResult";
    };

    return oMultiActionReplyResult;
})();

module.exports = $root;
