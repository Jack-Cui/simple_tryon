import { Button } from 'tdesign-mobile-react';

import EmptyImg from '../../../../assets/empty.png';
import './index.css';
interface Props {
    toPage?: () => void;
    applyStatus?: number | null;
}
const Empty = (props: Props) => {
    const gotoCreate = () => {
        props?.toPage && props.toPage();
    }
    console.log('applyStatus', props?.applyStatus);
    return <div className="empty">
        <img className='img' src={EmptyImg} alt="" />
        <div className='tip'>您还没有人物模型无法试穿</div>
        <Button
            size="small"
            theme="light"
            shape="round"
            style={{ border: 0, background: 'linear-gradient(90deg, #27DC9A 0%, #02DABF 100%)', color: '#fff' }}
            onClick={gotoCreate}
        >{props?.applyStatus ? '去查看模型' : '去创建模型'}</Button>
    </div>
}

export default Empty;