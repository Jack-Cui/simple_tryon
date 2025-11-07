import { Button, Navbar } from "tdesign-mobile-react";
import './index.css';
import { useState } from "react";
import SubsCheck from '../../assets/subs-check.png';
import Remember from '../../assets/remember.png';
import { useNavigate } from "react-router-dom";

// 为window对象添加aplus_queue属性的类型定义
declare global {
  interface Window {
    aplus_queue?: any[];
  }
}
const SubscribePackage = (props?: { onBack?: any}) => {
    const navigate = useNavigate();
    const [subList, setSubList] = useState([
        {
            title: '建模订阅包',
            price: 39.9,
            msg: '享受1次3D美颜 | 赠送100pts | 购买月度订阅包9折 | 长期有效'
        },
        {
            title: '月度订阅包',
            price: 99.9,
            msg: '享受10,000pts｜月底有效'
        },
    ]);
    const [checkSubNum, setCheckSubNum] = useState<number | null>(null);
    const [isRemember, setIsRemember] = useState(false);

    const [showMsg, setShowMsg] = useState(false);
    const checkItem = (num: number) => {
        setCheckSubNum(num);
    }
    const handleClick = () => {
        props?.onBack && props.onBack();
    }
    const goToBuy = () => {
        //2025.11.05 订阅包提交 0:39.9套餐 1:99.9套餐
        const subNum = checkSubNum === null ? 0 : checkSubNum;
        //2025.11.05 订阅包提交
        if(subNum === 0){            
            // 检查aplus_queue是否存在，避免SDK未加载时的报错
            if (window.aplus_queue ) {
                window.aplus_queue.push({
                    action: 'aplus.record',
                    arguments: ['buyPackage', 'CLK', {
                        package: '39.9'
                    }]
                });
            // alert(1);
            }
            // alert(2);
        }else if(subNum === 1){
            if (window.aplus_queue ) {
                window.aplus_queue.push({
                    action: 'aplus.record',
                    arguments: ['buyPackage', 'CLK', {
                        package: '99.9'
                    }]
                });
            }            
        }
        setIsRemember(true);
        setShowMsg(true);
    }
    return (
        <div className="subscribe-package">
            <Navbar className='subscribe-package-navbar' fixed={false} leftArrow onLeftClick={handleClick}>订阅包</Navbar>
            {isRemember ?
                <div className="remember">
                    <img src={Remember} alt="" />
                    <div>我们悄悄记下了您的选择,敬请期待我们的正式见面吧!</div>
                </div>
                :
                <>
                    <div className='content'>
                        {subList.map((item, index) => {
                            return (
                                <div className={checkSubNum === index ? "item check" : "item"} key={index} onClick={() => checkItem(index)}>
                                    <div className="top">
                                        <div className="title">{item.title}</div>
                                        <div className="price">{item.price}
                                            <span>元</span>
                                        </div>
                                    </div>
                                    <div className="center">{item.msg}</div>
                                    {checkSubNum === index && <img className="triangle" src={SubsCheck}/>}
                                </div>
                            )
                        })}
                    </div>
                    <div className='subscribe-package-btn'>
                        <div className="price">{checkSubNum === null ? 0 : subList[checkSubNum].price}
                            <span>元</span>
                        </div>
                        <Button size="large" theme="light" disabled={checkSubNum === null} onClick={goToBuy} shape="round" style={{ border: 0, background: 'linear-gradient(90deg, #27DC9A 0%, #02DABF 100%)', color: '#fff' }}>立刻购买</Button>
                    </div>
                </>
            }
            
        </div>
    )
}

export default SubscribePackage;