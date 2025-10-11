import './index.css';
interface Props {
    isShow?: boolean;
}
const D3 = (props: Props) => {
    return <div className="D3"  style={{display: props.isShow ? 'block' : 'none'}}>
        这是3d
    </div>
}

export default D3;