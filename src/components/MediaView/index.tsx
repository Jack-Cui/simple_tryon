import './index.css'
import { IconFont } from 'tdesign-icons-react';
import { useEffect, useRef } from 'react';


interface Props {
    isImage?: string;
    onCloseClick?: React.MouseEventHandler<HTMLDivElement>;
    src?: string;
    smallSrc?: string;
}
const MediaView = (props: Props) => {

    // // update by chao 2025.10.04 安卓微信环境下 video 标签无法自动播放，需手动调用 play 方法    
    const videoRefMain = useRef<HTMLVideoElement>(null);
    const videoRefSmall = useRef<HTMLVideoElement>(null);
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
    }, [props.src, props.smallSrc, needControls]);    

    return (
        <div className="media-view">
            <IconFont name="close-circle" className="media-view-close" size="large" onClick={props?.onCloseClick as any} />
            <video src={ props.src || ''} width="100%" height="100%"
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
            <video className='media-view-samll-videl' src={props.smallSrc || ''} width="140px" height="280px"       autoPlay
                ref={videoRefSmall}
                loop
                controls={needControls}
                muted
                playsInline
                webkit-playsinline
                x5-playsinline
                x5-video-player-type="h5-page"
                x5-video-orientation="portraint" 
                x5-video-player-fullscreen="false"
                preload="auto">
                您的浏览器不支持 video 标签。
            </video>
        </div>
    )
}

export default MediaView;