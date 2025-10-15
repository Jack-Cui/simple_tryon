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
    const [videoList, setVideoList] = useState<any[]>(['https://admins3.tos-cn-shanghai.volces.com/xinyu.mp4'])
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
            .catch(() => {});
        }, 300);
        });
    };

    useEffect(() => {
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
    }, []);

    //针对安卓微信环境的control属性特殊处理：
    const needControls = isWeixinAndroid();
    function isWeixinAndroid() {
    const ua = navigator.userAgent.toLowerCase();
    return /micromessenger/.test(ua) && /android/.test(ua);
    }
    useEffect(() => {
        // 安卓微信环境下主动调用 play
        if (needControls && videoRefMain.current) {
            videoRefMain.current.play().catch(() => {});
        }
        if (needControls && videoRefSmall.current) {
            videoRefSmall.current.play().catch(() => {});
        }
    }, []);
    return <div className="vedio"  style={{display: props.isShow ? 'block' : 'none'}}>
        {
            videoList.length > 0 ? 
            <video src={videoList[0]} width="100%" height="100%"
                ref={videoRefMain}
                controls={needControls}
                autoPlay
                loop
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