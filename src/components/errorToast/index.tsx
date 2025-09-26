import { Button, Overlay } from "tdesign-mobile-react";
import { CheckCircleIcon, IconFont } from 'tdesign-icons-react';
import './index.css';
interface Props {
    info?: string;
    visible: boolean;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    isConfirm?: boolean; // 是否确认提示
    btnName?: string;
    onBtnClick?: any;
}
const ErrorToast = (props: Props) => {

    const onClose = (e: any) => {
        // e.target.stopPropagation();
        props?.onClick && props.onClick(e)
    }
    const btnClick = () => {
        props?.onBtnClick && props.onBtnClick();
    }
    return (
        <Overlay visible={props.visible} 
        onClick={onClose}
        children={
            props?.isConfirm ? 
            <div className="error-toast-confirm">
                <IconFont name="close-circle" className="close" size="large"/>
                <IconFont name="error-circle" style={{color:'red'}} size="large" onClick={props?.onClick as any}/>
                <div className="content">
                    {props?.info}
                </div>
                <Button 
                    size="small" 
                    block 
                    theme="light" 
                    shape="round" 
                    style={{ border: 0, background: 'linear-gradient(90deg, #27DC9A 0%, #02DABF 100%)', color: '#fff' }}
                    onClick={btnClick}
                >{props?.btnName || '确认'}</Button>
            </div>
            :
            <div className="error-toast-tips">
                <CheckCircleIcon style={{color:'red'}}/>
                {props?.info}
            </div>
        } 
        />
    )
}

export default ErrorToast