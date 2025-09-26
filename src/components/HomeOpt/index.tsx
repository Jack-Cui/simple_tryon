
import HotOff from '../../assets/hot-off.png';
import HotOn from '../../assets/hot-on.png';
import HotExm from '../../assets/hot-exm.png';
import ActionOff from '../../assets/action-off.png';
import ActionOn from '../../assets/action-on.png';
import Size from '../../assets/size.png';
import Model from '../../assets/model.png';
import UploadVoide from '../../assets/upload-voide.png';
import Subscribe from '../../assets/subscribe.png';
import Aigc from '../../assets/aigc.png';

import Action1 from '../../assets/action1.png';
import Action2 from '../../assets/action2.png';
import Action3 from '../../assets/action3.png';
import Action4 from '../../assets/action4.png';
import Action5 from '../../assets/action5.png';
import './index.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getLoginCache } from '../../utils/loginCache';
import { uploadAPI } from '../../services/api';
import { rtcVideoService } from '../../services/rtcVideoService';
interface Props {
    hotClick?: (flag: boolean) => void;
    actionClick?: (msg: any) => void;
    sizeClick?: (size: string) => void;
}
const HomeOpt = (props: any) => {
    const navigate = useNavigate();
    const [showHot, setShowHot] = useState(false);
    const [showAction, setShowAction] = useState(false);
    const [actionList, setActionList] = useState([]);
    const [showIcon, setShowIcon] = useState(false);
    const actionIconList = [Action1, Action2, Action3, Action4, Action5];
    const sizeList = ['3XL', 'XXL', 'XL', 'L', 'M', 'S'];

    useEffect(() => {
        showAction && getActionList();
    }, [showAction])

    useEffect(() => {
        props?.hotClick && props.hotClick(showHot);
    }, [showHot])

    const checkAction = (msg: any) => {
        console.log('选中动作', msg);
        props?.actionClick && props.actionClick(msg);
    }

    const checkSize = (item: string) => {
        console.log('选中尺寸', item);
        
        // 将尺寸字符串转换为数字
        const sizeMap: { [key: string]: number } = {
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
        
        props?.sizeClick && props.sizeClick(item);
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
                        {actionList.map((item: any, index: number) => {
                            return (
                                <div className='home-opt-list-item-atcion' onClick={() => checkAction(item)}>
                                    <img className="home-opt-list-item-action-img" src={actionIconList[index]} alt="" />
                                    <span>{item.remark}</span>
                                </div>
                            )
                        })}
                    </>}
                    <img className="home-opt-list-img" onClick={() => setShowAction(!showAction)} src={showAction ? ActionOn : ActionOff} alt="" />
                </div>
                <div className='home-opt-list-item'>
                   {showIcon && 
                    sizeList.map(item => <div className='home-opt-list-item-size' onClick={() => checkSize(item)}>{item}</div> )
                   }
                    <img className="home-opt-list-img"  onClick={() => setShowIcon(!showIcon)} src={Size} alt="" />
                </div>
                <img className="home-opt-list-img" src={Model} alt="" onClick={goToModel} />
                <img className="home-opt-list-img" src={UploadVoide} onClick={goToUpload} alt="" />
                <img className="home-opt-list-img" src={Subscribe} onClick={goToSubs} alt="" />
                <img className="home-opt-list-img" src={Aigc} alt="" />
            </div>
        </div>
    )
}

export default HomeOpt;