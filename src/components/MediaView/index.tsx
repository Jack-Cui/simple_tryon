import './index.css'
import {IconFont } from 'tdesign-icons-react';
interface Props {
    isImage?: string;
    onCloseClick?: React.MouseEventHandler<HTMLDivElement>;
    src?: string;
    smallSrc?: string;
}
const MediaView = (props: Props) => {
    return (
        <div className="media-view">
            <IconFont name="close-circle" className="media-view-close" size="large" onClick={props?.onCloseClick as any}/>
            <video src={props.src || ''} width="100%" height="100%" autoPlay loop>
                您的浏览器不支持 video 标签。
            </video>
            <video className='media-view-samll-videl' src={props.smallSrc || ''} width="140px" height="280px" autoPlay loop>
                您的浏览器不支持 video 标签。
            </video>
        </div>
    )
}

export default MediaView;