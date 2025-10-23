import { Button, Overlay } from "tdesign-mobile-react";
import { CloseIcon, CheckCircleIcon } from 'tdesign-icons-react';
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
                        <CloseIcon 
                            className="success-toast-close" 
                            size="large" 
                            onClick={props.onConfirm}
                        />
                        <div className="success-toast-title">
                            {props.title}
                        </div>
                        <Button 
                            size="small" 
                            block 
                            theme="light" 
                            shape="round" 
                            style={{ 
                                background: '#27DC97', 
                                border: 'none',
                                outline: 'none',
                                boxShadow: 'none',
                                color: 'white'
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