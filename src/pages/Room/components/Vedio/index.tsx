import { useEffect, useRef, useState } from 'react';
import './index.css';
import RoomLoad from '../Loading';
interface Props {
    isShow?: boolean;
}
const Vedio = (props: Props) => {
    // // update by chao 2025.10.04 安卓微信环境下 video 标签无法自动播放，需手动调用 play 方法    
    const videoRefMain = useRef<HTMLVideoElement>(null);
    const videoRefSmall = useRef<HTMLVideoElement>(null);
    //动态获取视频地址-正面视频（只有获取到正面视频，才结束loading状态）
    const [videoPathFrontUrl, setVideoPathFrontUrl] = useState<string>('');
    //动态获取视频地址-背身视频
    const [videoPathBackUrl, setVideoPathBack] = useState<string>('');  //动态获取视频地址-详细视频
    const [videoPathClothUrl, setVideoPathClothUrl] = useState<string>('');
    const [videoNum, setVideoNum] = useState<number>(0);
    const initSingleVideo = (video: HTMLVideoElement | null): Promise<void> => {
        return new Promise((resolve) => {
            if (!video) return resolve();

            video.muted = true;
            const playAttempt = setInterval(() => {
                video.play()
                    .then(() => {
                        clearInterval(playAttempt);
                        resolve();
                    })
                    .catch(() => { });
            }, 300);
        });
    };

    //测试预加载视频loading效果
    const getVideoInfo = () => {
        // setTimeout(() => {
        //     setVideoPathFrontUrl('https://admins3.tos-cn-shanghai.volces.com/xinyu.mp4')
        // }, 3000)
        //加载背身视频
        setTimeout(() => {
            setVideoPathBack('https://admins3.tos-cn-shanghai.volces.com/xinyu5.mp4');
            console.log('轮询设置视频', 'https://admins3.tos-cn-shanghai.volces.com/xinyu5.mp4');
        }, 5000); // 5秒、10秒、15秒...        
        //加载正面视频
        setTimeout(() => {
            setVideoPathFrontUrl('https://admins3.tos-cn-shanghai.volces.com/xinyu3.mp4');
            console.log('轮询设置视频', 'https://admins3.tos-cn-shanghai.volces.com/xinyu3.mp4');
        }, 10000); // 5秒、10秒、15秒...     
        //加载细节视频
        setTimeout(() => {
            setVideoPathClothUrl('https://admins3.tos-cn-shanghai.volces.com/xinyu2.mp4');
            console.log('轮询设置视频', 'https://admins3.tos-cn-shanghai.volces.com/xinyu2.mp4');
        }, 15000); // 5秒、10秒、15秒...            
    }

    useEffect(() => {
        getVideoInfo();
    }, [])
    useEffect(() => {
        if (videoPathFrontUrl) {
            const initVideos = async () => {
                await Promise.all([
                    initSingleVideo(videoRefMain.current),
                    initSingleVideo(videoRefSmall.current)
                ]);
            };
    
            if (typeof WeixinJSBridge !== 'undefined') {
                WeixinJSBridge.invoke('getNetworkType', {}, initVideos);
            } else {
                document.addEventListener('WeixinJSBridgeReady', initVideos);
            }
        }
    }, [videoPathFrontUrl]);

    //针对安卓微信环境的control属性特殊处理：
    const needControls = isWeixinAndroid();
    function isWeixinAndroid() {
        const ua = navigator.userAgent.toLowerCase();
        return /micromessenger/.test(ua) && /android/.test(ua);
    }
    useEffect(() => {
        if (videoPathFrontUrl) {
            // 安卓微信环境下主动调用 play
            if (needControls && videoRefMain.current) {
                videoRefMain.current.play().catch(() => { });
            }
            if (needControls && videoRefSmall.current) {
                videoRefSmall.current.play().catch(() => { });
            }
        }
    }, [videoPathFrontUrl]);

    const handleVideoEnded = () => {
        switch (videoNum) {
            case 0:
                // 
                if (videoPathBackUrl) {
                    setVideoNum(1);
                } else if (videoPathClothUrl) {
                    setVideoNum(2);
                } else {
                    setVideoNum(0);
                }
                break;
            case 1:
                if (videoPathClothUrl) {
                    setVideoNum(2);
                } else {
                    setVideoNum(0);
                }
                break;
            case 2:
                setVideoNum(0);
                break;

            default:
                break;
        }
        videoRefMain.current && videoRefMain.current.play();
    }
    return <div className="vedio" style={{ display: props.isShow ? 'block' : 'none' }}>
        {
            videoPathFrontUrl ?
                <video src={videoNum === 0 ? videoPathFrontUrl : (videoNum === 1 ? videoPathBackUrl : videoPathClothUrl)} width="100%" height="100%"
                    ref={videoRefMain}
                    controls={needControls}
                    autoPlay
                    // loop
                    onEnded={handleVideoEnded}
                    muted
                    playsInline
                    webkit-playsinline
                    x5-video-player-type="h5-page"
                    x5-video-orientation="portraint"
                    x5-video-player-fullscreen="false"
                    preload="auto">
                    您的浏览器不支持 video 标签。
                </video>
                :
                <RoomLoad />
        }

    </div>
}

export default Vedio;