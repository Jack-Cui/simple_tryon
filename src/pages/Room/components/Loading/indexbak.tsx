import { Loading, Overlay } from 'tdesign-mobile-react';
import './index.css';
interface Props {
    msg?: string;
}
const RoomLoad = (props: Props) => {
    return <Overlay visible={true} children={
        <div className='room-load'>
            <Loading theme="spinner" inheritColor size="26px" style={{color: '#fff'}} text={props?.msg || 'AI正在全力为您打造试衣效果...'} layout="vertical" />
        </div>
    } />
}

export default RoomLoad;