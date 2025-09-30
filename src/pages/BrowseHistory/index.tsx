import { useNavigate } from "react-router-dom";
import { CountDown, Navbar } from "tdesign-mobile-react";
import { IconFont } from 'tdesign-icons-react';
import './index.css';
import { useEffect, useState } from "react";
import { getLoginCache } from "../../utils/loginCache";
import { modelAPI, uploadAPI } from "../../services/api";
import ErrorToast from "../../components/errorToast";
import MediaView from "../../components/MediaView";
import { checkVideo } from "../../utils/videoCheck";
const BrowseHistory = (props?: { onBack?: any , isShow?: boolean}) => {
    const navigate = useNavigate();
    const [aigcList, setAigcList] = useState<any[]>([]);
    const [showError, setShowError] = useState(false);
    const [deleteMsg, setDeleteMsg] = useState({});
    const [showVideo, setShowVideo] = useState(false);
    const [videoInfo, setVideoInfo] = useState<any>({});
    useEffect(() => {
        getActionList();
    }, [])

    const getActionList = async () => {
        const loginCache: any = getLoginCache();
        if (!loginCache?.token) {
            throw new Error('用户未登录或登录信息缺失');
        }
        const resultResponse = await uploadAPI.getAiVideoResult(loginCache.token, 1, 10);
        if (resultResponse.ok) {
            const resultData = JSON.parse(resultResponse.data);
            console.log('动作视频结果:', resultData);

            if (resultData.code === 0) {
                setAigcList(resultData.data?.records || []);
                console.log('动作视频结果获取成功:', resultData.data?.records);
            } else {
                console.warn('获取动作视频结果失败:', resultData.message);
            }
        } else {
            console.warn('获取动作视频结果HTTP错误:', resultResponse.status);
        }
    }

    const checkVideo = (msg: any) => {
        setVideoInfo(msg);
        setShowVideo(true);
    }

    const clearAction = (msg: any) => {
        console.log(msg);
        setDeleteMsg(msg);
        setShowError(true);
    }

    const listItemCountdown = (time: string) => {
        const createT = new Date(time).getTime();
        const newT = new Date().getTime();
        const num = createT + 5 * 60 * 1000 - newT;
        return num > 0 ? num : 0;
    }

    const comfirmClear = async () => {
        const loginCache: any = getLoginCache();
        const response = await modelAPI.deleteAigcVideo(loginCache.token, (deleteMsg as any).id);
        if (response.ok) {
            const result = JSON.parse(response.data);
            if (result.code === 0) {
                console.log('删除动作视频成功:', result.data);
                getActionList();
                //   alert('动作视频删除成功！');
            } else {
                throw new Error(result.message || '删除失败');
            }
        } else {
            throw new Error(`删除失败: HTTP ${response.status}`);
        }
    }

    const handleClick = () => {
        // navigate(-1);
        props?.onBack && props.onBack();
    }
    return (
        <div className="browse-history" style={props?.isShow ? {} : {display: 'none'}}>
            <Navbar className='browse-history-navbar' fixed={false} leftArrow onLeftClick={handleClick}>收藏历史</Navbar>
            <div className="browse-history-content">
                {aigcList.map((item: any) => {
                    return (
                        <div className='browse-history-content-detail'>
                            {item.videoStatus !== '2' && <div className='browse-history-content-detail-mask'>
                                {(item.videoStatus === '1' || item.videoStatus === '0') && <div className='mask-upload-review'>
                                    <div className='info'>上传成功，正在审核中，预计等待时间</div>
                                    <CountDown size='large' time={listItemCountdown(item.createTime)} />
                                </div>}
                                {item.videoStatus === '3' && <div className='mask-upload-error'>
                                    <div className='info'>
                                        <span>处理失败</span>
                                        <div>{item.extra2}</div>
                                    </div>
                                    <div className='btn'>
                                    </div>
                                </div>}
                            </div>}
                            <div className='browse-history-content-detail-img' onClick={() => checkVideo(item)}>
                                <img src={item.imgs ? item.imgs.split(',')[0] : ''} alt="" />
                            </div>
                            <div className={item.videoStatus === '2' ? 'browse-history-content-detail-info' : 'browse-history-content-detail-info browse-history-content-detail-blur'}>
                                <div className='browse-history-content-detail-info-item'>
                                    <span>{item.title || ''}</span>
                                    {/* <IconFont name='edit-2' onClick={editAction} className='edit' size="large"/> */}
                                </div>
                                <div className='browse-history-detail-info-item'>
                                    <span>{item.createTime || ''}</span>
                                </div>
                                <IconFont name='delete-1' onClick={() => clearAction(item)} className='clear' style={{ color: 'red' }} size="large" />
                            </div>
                        </div>
                    )
                })}
                <ErrorToast isConfirm info={'确认删除该视频？'} onBtnClick={comfirmClear} visible={showError} onClick={() => setShowError(false)} />
                {showVideo && <MediaView src={videoInfo.videoPath} smallSrc={videoInfo.actionPath} onCloseClick={() => setShowVideo(false)} />}
            </div>
        </div>
    )
}
export default BrowseHistory;