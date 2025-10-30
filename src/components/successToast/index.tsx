import { Button, Overlay } from "tdesign-mobile-react";
import { CheckCircleIcon, IconFont } from 'tdesign-icons-react';
import './index.css';

interface Props {
    title: React.ReactNode;
    visible: boolean;
    onConfirm: () => void;
}

const SuccessToast = (props: Props) => {
    return (
        <Overlay 
            visible={props.visible} 
            onClick={props.onConfirm}
            children={
                <div className="success-toast-container">
                    <div className="success-toast-content">
                        <IconFont name="close-circle" className="success-toast-close" size="large" onClick={props.onConfirm} />
                        <CheckCircleIcon style={{color:'#27DC97'}} size="large" />
                        <div className="success-toast-title">
                            {props.title}
                        </div>
                        <Button 
                            size="small" 
                            block 
                            theme="light" 
                            shape="round" 
                            style={{ 
                                border: 0, 
                                background: 'linear-gradient(90deg, #27DC9A 0%, #02DABF 100%)', 
                                color: '#fff'
                            }}
                            onClick={props.onConfirm}
                        >
                            确定
                        </Button>
                    </div>
                </div>
            } 
        />
    );
};

export default SuccessToast;