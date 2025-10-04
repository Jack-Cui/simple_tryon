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
    // props.src || '' control
    // let sr = 'https://ssl.resource.synconize.com/cf99abd63eba493883a44a7d5f03cfe1.mp4';

    // update by chao 2025.10.04 安卓微信环境下 video 标签无法自动播放，需手动调用 play 方法
    const mainVideoRef = useRef<HTMLVideoElement>(null);
    const smallVideoRef = useRef<HTMLVideoElement>(null);
    const needControls = isWeixinAndroid();
    function isWeixinAndroid() {
    const ua = navigator.userAgent.toLowerCase();
    return /micromessenger/.test(ua) && /android/.test(ua);
    }
    useEffect(() => {
        // 安卓微信环境下主动调用 play
        if (needControls && mainVideoRef.current) {
            mainVideoRef.current.play().catch(() => {});
        }
        if (needControls && smallVideoRef.current) {
            smallVideoRef.current.play().catch(() => {});
        }
    }, [props.src, props.smallSrc, needControls]);    

    return (
        <div className="media-view">
            <IconFont name="close-circle" className="media-view-close" size="large" onClick={props?.onCloseClick as any} />
            <video src={ props.src || ''} width="100%" height="100%"
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
            <video className='media-view-samll-videl' src={props.smallSrc || ''} width="140px" height="280px" autoPlay
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