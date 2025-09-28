
import HotOff from '../../assets/hot-off.png';
import HotOn from '../../assets/hot-on.png';
import HotExm from '../../assets/hot-exm.png';
import ActionOff from '../../assets/action-off.png';
import ActionOn from '../../assets/action-on.png';
import ActionAdd from '../../assets/action-add.png';
import Size from '../../assets/size.png';
import Model from '../../assets/model.png';
import UploadVoide from '../../assets/upload-voide.png';
import Subscribe from '../../assets/subscribe.png';
import Aigc from '../../assets/aigc.png';
import AigcTag from '../../assets/aigc-tag.png';

import Action1 from '../../assets/action1.png';
import Action2 from '../../assets/action2.png';
import Action3 from '../../assets/action3.png';
import Action4 from '../../assets/action4.png';
import Action5 from '../../assets/action5.png';
import Action1Check from '../../assets/action1.png';
import Action2Check from '../../assets/action2-check.png';
import Action3Check from '../../assets/action3-check.png';
import Action4Check from '../../assets/action4-check.png';
import Action5Check from '../../assets/action5-check.png';
import './index.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getLoginCache } from '../../utils/loginCache';
import { modelAPI, uploadAPI } from '../../services/api';
import { rtcVideoService } from '../../services/rtcVideoService';
import ErrorToast from '../errorToast';
interface Props {
    hotClick?: (flag: boolean) => void;
    actionClick?: (msg: any) => void;
    sizeClick?: (size: string) => void;
    loginScene?: string;
}
const HomeOpt = (props: Props) => {
    const { hotClick, actionClick, sizeClick, loginScene } = props;
    const navigate = useNavigate();
    const [showHot, setShowHot] = useState(false);
    const [showAction, setShowAction] = useState(false);
    const [actionList, setActionList] = useState([]);
    const [showIcon, setShowIcon] = useState(false);
    const actionIconList = [Action1, Action2, Action3, Action4, Action5];
    const actionCheckIconList = [Action1Check, Action2Check, Action3Check, Action4Check, Action5Check];
    // const sizeList = ['3XL', 'XXL', 'XL', 'L', 'M', 'S'];
    const sizeList = ['XXL', 'XL', 'L', 'M', 'S', 'XS'];
    const [aigcList, setAigcList] = useState<any[]>([]); // 点击过的动作
    const [showError, setShowError] = useState(false);
    useEffect(() => {
        showAction && getActionList();
    }, [showAction])

    useEffect(() => {
        hotClick && hotClick(showHot);
    }, [showHot, hotClick])

    const checkAction = async (msg: any) => {
        if (aigcList.includes(msg.id)) return;
        setAigcList([...aigcList, msg.id]);
        const loginCache: any = getLoginCache();
        const res: any = await modelAPI.getAiVideoResult(loginCache.token, msg.id);
        const dataObj = JSON.parse(res.data);
        if (!dataObj.data) {
            // 没有视频需要生成
            const room_info = JSON.parse(sessionStorage.getItem('roomInfo') as any);
            const response: any = await modelAPI.generateAiVideo(loginCache.token, room_info.data.clothesList[0].clothesItems[0].clothesId, loginCache.roomId, msg.remark, msg.videoUrl);
            if (response.ok) {
                const dataObj = JSON.parse(response.data);
                if (dataObj.code === 0) {
                    console.log('生成AI视频成功', dataObj);
                    rtcVideoService.sendGetImagesInfo(dataObj.data.id);
                    setShowError(true); // 提示
                } else {
                    console.log('生成AI视频失败', dataObj);
                }
            }
            setShowError(true); // 提示
        }
        setShowAction(false);
        actionClick && actionClick(msg);
    }

    const comfirmClear = () => {
        setShowError(false);
    }

    const checkSize = (item: string) => {
        console.log('选中尺寸', item);
        
        // 将尺寸字符串转换为数字
        const sizeMap: { [key: string]: number } = {
            'XS': 1,
            'S': 2,
            'M': 3,
            'L': 4,
            'XL': 5,
            'XXL': 6,
            '3XL': 7
        };
        
        const sizeNumber = sizeMap[item];
        if (sizeNumber) {
            console.log('发送更换服装尺寸消息:', sizeNumber);
            rtcVideoService.sendChangeGarmentSize(sizeNumber);
        } else {
            console.warn('未知的尺寸:', item);
        }
        
        // 选中尺寸后自动折叠尺寸列表
        setShowIcon(false);
        
        sizeClick && sizeClick(item);
    }

    const goToModel = () => {
        navigate('/create-model');
    }
    const goToUpload = () => {
        navigate('/upload-action');
    }
    const goToSubs = () => {
        navigate('/subs-package');
    }

    const goToHistory = () => {
        navigate('/browse-history');
    }

    const getActionList = async () => {
        const loginCache: any = getLoginCache();
        if (!loginCache?.token) {
            throw new Error('用户未登录或登录信息缺失');
        }
        const resultResponse = await uploadAPI.getActionVideoResult(loginCache.token, 1, 10);
        if (resultResponse.ok) {
            const resultData = JSON.parse(resultResponse.data);
            console.log('动作视频结果:', resultData);

            if (resultData.code === 0) {
                setActionList(resultData.data?.records || []);
                console.log('动作视频结果获取成功:', resultData.data?.records);
            } else {
                console.warn('获取动作视频结果失败:', resultData.message);
            }
        } else {
            console.warn('获取动作视频结果HTTP错误:', resultResponse.status);
        }
    }

    return (
        <div className="home-opt">
            <img className="home-opt-hot-btn" onClick={() => setShowHot(!showHot)} src={showHot ? HotOn : HotOff} alt="" />
            {showHot && <img className="home-opt-hot-exm" src={HotExm} alt="" />}
            <div className="home-opt-list">
                <div className="home-opt-list-item">
                    {showAction && <>
                        {!(actionList.length === 5) && <div  className='home-opt-list-item-atcion'>
                            <img className="home-opt-list-item-action-img" onClick={goToUpload} src={ActionAdd} alt="" />
                            <span>&nbsp;</span>
                        </div>}
                        {actionList.map((item: any, index: number) => {
                            return (
                                <div className='home-opt-list-item-atcion' onClick={() => checkAction(item)}>
                                    <img className="home-opt-list-item-action-img" src={aigcList.includes(item.id) ? actionCheckIconList[index] : actionIconList[index]} alt="" />
                                    {aigcList.includes(item.id) && <img  className="home-opt-list-item-action-aigc" src={AigcTag}/>}
                                    <span>{item.remark}</span>
                                </div>
                            )
                        })}
                    </>}
                    {loginScene !== 'onshare' && (
                    <img className="home-opt-list-img" onClick={() => {setShowAction(!showAction);setShowIcon(false)}} src={showAction ? ActionOn : ActionOff} alt="" />
                    )}
                </div>
                <div className='home-opt-list-item'>
                   {showIcon && 
                    sizeList.map(item => <div className='home-opt-list-item-size' onClick={() => checkSize(item)}>{item}</div> )
                   }
                    <img className="home-opt-list-img"  onClick={() => {setShowIcon(!showIcon);setShowAction(false)}} src={Size} alt="" />
                </div>
                {loginScene !== 'onshare' && (
                    <img className="home-opt-list-img" src={Model} alt="" onClick={goToModel} />
                )}
                {/* <img className="home-opt-list-img" src={UploadVoide} onClick={goToUpload} alt="" /> */}
                {loginScene !== 'onshare' && (
                    <img className="home-opt-list-img" src={Subscribe} onClick={goToSubs} alt="" />
                )}
                <img className="home-opt-list-img" src={Aigc} onClick={goToHistory} alt="" />
            </div>
            <ErrorToast isConfirm info={`动态视频正在快马加鞭地生成中，预计2分钟后闪亮登场！您可以先去逛逛，别忘了在"收藏记录"里检阅成果哦~`} onBtnClick={comfirmClear} visible={showError} onClick={() => setShowError(false)}/>
        </div>
    )
}

export default HomeOpt;