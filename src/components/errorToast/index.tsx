import { Button, Overlay } from "tdesign-mobile-react";
import { CheckCircleIcon } from 'tdesign-icons-react';
import './index.css';
interface Props {
    info?: string;
    visible: boolean;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    isConfirm?: boolean; // 是否确认提示
    btnName?: string;
    // onBtnClick?: () => void;
}
const ErrorToast = (props: Props) => {

    // const btnClick = () => {
    //     props?.onBtnClick();
    // }
    return (
        <Overlay visible={props.visible} 
        onClick={props?.onClick as any}
        children={
            props?.isConfirm ? 
            <div className="error-toast-confirm">
                <CheckCircleIcon className="close" size="large"/>
                <CheckCircleIcon style={{color:'red'}} size="large"/>
                <div className="content">
                    {props?.info}很多次换行啦呀很多次换行啦呀很多次换行啦呀很多次换行啦呀很多次换行啦呀很多次换行啦呀很多次换行啦呀很多次换行啦呀很多次换行啦呀
                </div>
                <Button 
                    size="small" 
                    block 
                    theme="light" 
                    shape="round" 
                    style={{ border: 0, background: 'linear-gradient(90deg, #27DC9A 0%, #02DABF 100%)', color: '#fff' }}
                    // onClick={btnClick()}
                >{props?.btnName}确认</Button>
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
