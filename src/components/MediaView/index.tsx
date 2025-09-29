import './index.css'
import { IconFont } from 'tdesign-icons-react';
interface Props {
    isImage?: string;
    onCloseClick?: React.MouseEventHandler<HTMLDivElement>;
    src?: string;
    smallSrc?: string;
}
const MediaView = (props: Props) => {
    return (
        <div className="media-view">
            <IconFont name="close-circle" className="media-view-close" size="large" onClick={props?.onCloseClick as any} />
            <video src={props.src || ''} width="100vw" height="100vh"
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