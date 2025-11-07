import { Button } from 'tdesign-mobile-react';
import { useState } from 'react';

import EmptyImg from '../../../../assets/empty.png';
import './index.css';
import DataSafetyMsg from '../../../../components/DataSafetyMsg/index';

interface Props {
    toPageCreateModel?: () => void;
    applyStatus?: number | null;
}
const Empty = (props: Props) => {
    const [showMsg, setShowMsg] = useState(true);
    
    const gotoCreateModel = () => {
        props?.toPageCreateModel && props.toPageCreateModel();
    }
 
    console.log('applyStatus', props?.applyStatus);
    return <div className="empty">
        <img className='img' src={EmptyImg} alt="" />
        <div className='tip'>{props?.applyStatus ? '您的专属模型正在生成中，过一会再回来看看吧' : '您还没有人物模型无法试穿'}</div>
        <Button
            size="small"
            theme="light"
            shape="round"
            style={{ border: 0, background: 'linear-gradient(90deg, #27DC9A 0%, #02DABF 100%)', color: '#fff' }}
            onClick={gotoCreateModel}
        >{props?.applyStatus ? '查看建模情况' : '去创建模型'}</Button>
        <DataSafetyMsg visible={showMsg} onClick={() => setShowMsg(false)} />
    </div>
}

export default Empty;