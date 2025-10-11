import './index.css';
interface Props {
    isShow?: boolean;
}
const Vedio = (props: Props) => {
    return <div className="vedio"  style={{display: props.isShow ? 'block' : 'none'}}>
        这是视频
    </div>
}

export default Vedio;