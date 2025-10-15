import './index.css';
import HotsOff from '../../../../assets/hots-off.png';
import HotsOn from '../../../../assets/hots-on.png';
import SizeXll from '../../../../assets/size-xll.png';
import SizeXll1 from '../../../../assets/size-xll1.png';
import SizeXllShow from '../../../../assets/size-xll-show.png';
import SizeXl from '../../../../assets/size-xl.png';
import SizeXl1 from '../../../../assets/size-xl1.png';
import SizeXlShow from '../../../../assets/size-xl-show.png';
import SizeL from '../../../../assets/size-l.png';
import SizeL1 from '../../../../assets/size-l1.png';
import SizeLShow from '../../../../assets/size-l-show.png';
import SizeM from '../../../../assets/size-m.png';
import SizeM1 from '../../../../assets/size-m1.png';
import SizeMShow from '../../../../assets/size-m-show.png';
import SizeS from '../../../../assets/size-s.png';
import SizeS1 from '../../../../assets/size-s1.png';
import SizeSShow from '../../../../assets/size-s-show.png';
import SizeXs from '../../../../assets/size-xs.png';
import SizeXs1 from '../../../../assets/size-xs1.png';
import SizeXsShow from '../../../../assets/size-xl-show.png';
import Models from '../../../../assets/models.png';
import Foot from '../../../../assets/foot.png';
import Sub from '../../../../assets/sub.png';
import HotsExp from '../../../../assets/hots-exm.png';
import { useNavigate } from 'react-router-dom';
import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { modelAPI, uploadAPI } from '../../../../services/api';
import { getClothDefaultSizeFromCache, getLoginCache } from '../../../../utils/loginCache';
import { rtcVideoService } from '../../../../services/rtcVideoService';
interface Props {
    hotClick?: (flag: boolean) => void;
    actionClick?: (msg: any) => void;
    sizeClick?: (size: string) => void;
    loginScene?: string;
    toPage?: (type: string) => void;
    showLeft?: boolean;
}
const IconPageTo = forwardRef((props: Props, ref: any) => {
    const { hotClick, actionClick, sizeClick, loginScene } = props;
    const navigate = useNavigate();
    const [showHot, setShowHot] = useState(false);
    const [showAction, setShowAction] = useState(false);
    const [actionList, setActionList] = useState([]);
    const [showIcon, setShowIcon] = useState(false);
    // const actionIconList = [Action1, Action2, Action3, Action4, Action5];
    // const actionCheckIconList = [Action1Check, Action2Check, Action3Check, Action4Check, Action5Check];
    const sizeMsg: any = {
        'XS': 0,
        'S': 1, 
        'M': 2, 
        'L': 3, 
        'XL': 4,
        'XLL': 5
    };
    const sizeList = [SizeXs1, SizeS1, SizeM1, SizeL1, SizeXl1, SizeXll1];
    const sizeCheckList = [SizeXs, SizeS, SizeM, SizeL, SizeXl, SizeXll];
    const sizeShowList = [SizeXsShow, SizeSShow, SizeMShow, SizeLShow, SizeXlShow, SizeXllShow];
    const [showSize, setShowSize] = useState('');
    const [aigcList, setAigcList] = useState<any[]>([]); // 点击过的动作
    const [showError, setShowError] = useState(false);
    useEffect(() => {
        showAction && getActionList();
    }, [showAction])

    useEffect(() => {
        hotClick && hotClick(showHot);
    }, [showHot, hotClick])

    //add by chao: 2025.10.12
    // 获取当前用户的默认尺码,动态加载尺码控件效果
    //TODO:根据尺码设置选中状态
    const getUserDefaultSize = () => {
        const clothDefaultSize: string = getClothDefaultSizeFromCache();
        if (!clothDefaultSize) {
            console.log('获取尺码失败！');
            return;
        }
        console.log('获取默认尺码..' + clothDefaultSize);
        setShowSize(clothDefaultSize);
        return;
    }
    useEffect(() => {
        getUserDefaultSize();

    }, [])


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

    const checkSize = (num: number) => {
        const item = ['XS','S', 'M', 'L', 'XL', 'XLL'][num];
        console.log('选中尺寸', item);
        if (item === showSize) {
            return setShowIcon(false);
        }
        setShowSize(item);
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
            // navigate('/create-model');
            props?.toPage && props.toPage('create-model');
        }
        const goToUpload = () => {
            // navigate('/upload-action');
            props?.toPage && props.toPage('upload-action');
        }
        const goToSubs = () => {
            props?.toPage && props.toPage('subs-package');
        }
    
        const goToHistory = () => {
            // navigate('/browse-history');
            props?.toPage && props.toPage('browse-historry');
        }
    
        useImperativeHandle(ref, () => ({
            closeOpen: () => {
                // 关闭打开的页面
                console.log('关闭所有打开的状态');
                setShowIcon(false);
                setShowAction(false);
            }
        }));
    
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
        <div className="icon-page-to">
            <div className='left'  style={props?.showLeft ? {}: {display: 'none'}}>
                {showHot && <div className='exm'>
                    <span>紧</span>
                    <img src={HotsExp} alt="" />
                    <span>松</span>
                </div>}
                <div className="hot"  onClick={() => {setShowHot(!showHot);setShowIcon(false);setShowAction(false);}} >
                    <img src={showHot ? HotsOn : HotsOff} alt="" />
                    {/* <span>热力图</span> */}
                </div>
                <div className="size">
                    <div className='item'  onClick={(e) => {
                        e.stopPropagation();
                        setShowIcon(!showIcon);
                        setShowAction(false)
                    }}>
                        <img src={sizeShowList[sizeMsg[showSize]]} alt="" />
                        {/* <img src={sizeShowList[0]} alt="" /> */}
                        {/* <span>尺码</span> */}
                    </div>
                    {showIcon &&
                        sizeList.map((item, index) => {
                            return <div className='item'  onClick={(e) => {
                                e.stopPropagation();
                                checkSize(index);
                            }}>
                            <img src={sizeMsg[showSize] === index ? sizeCheckList[index] : item} alt="" />
                        </div>
                        })
                    }
                </div>
            </div>
            <div className='right'>
                <div>
                    <img src={Models} alt="" onClick={goToModel}  />
                    <span>模型</span>
                </div>
                <div>
                    <img src={Foot} alt="" onClick={goToHistory} />
                    <span>足迹</span>
                </div>
                {/* <div>
                    <img src={Sub} alt="" onClick={goToSubs} />
                    <span>订阅包</span>
                </div> */}
            </div>
        </div>
    )
})

export default IconPageTo;