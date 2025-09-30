import { Button, Navbar } from "tdesign-mobile-react";
import './index.css';
import { useState } from "react";
import SubsCheck from '../../assets/subs-check.png';
import Remember from '../../assets/remember.png';
import DataSafetyMsg from "../../components/DataSafetyMsg";
import { useNavigate } from "react-router-dom";
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
            <DataSafetyMsg visible={showMsg} onClick={() => setShowMsg(false)} />
        </div>
    )
}

export default SubscribePackage;