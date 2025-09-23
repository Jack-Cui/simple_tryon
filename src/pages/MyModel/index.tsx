import './index.css';
import { Button, Navbar, Progress, CountDown } from 'tdesign-mobile-react';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const MyModel = () => {
    const navigate = useNavigate();
    const [status, setStatus] = useState(1); // 0 成功 1上传中 2审核中 3 审核失败
    const [loadRogress, setLoadRogress] = useState(0); // 上传进度
    const [countdown, setCountdown] = useState(24 * 60 * 60 * 1000);
    // 返回
    const handleClick = () => {
        navigate(-1);
    }

    useEffect(() => {
        if (loadRogress < 99 && loadRogress !== 0) {
            const timerId = setInterval(() => {
                setLoadRogress(prevCount => prevCount + 1);
            }, 1000);
            return () => {
                clearInterval(timerId);
            };
        }
    }, [loadRogress])

    useEffect(() => {
        switch (status) {
            case 0:
                // 返回审核结果后删除存储数据
                localStorage.removeItem('model_review_time_last');
                break;
            case 1:
                // 上传中开启定时器
                setLoadRogress(1);
                break;
            case 2:
                // 第一次审核中 记录当前时间+1d 为倒计时最后时间
                if (!localStorage.getItem('model_review_time_last')) {
                    localStorage.setItem('model_review_time_last', (new Date().getTime() + 24 * 60 * 60 * 1000).toString());
                    setCountdown(24 * 60 * 60 * 1000);
                } else {
                    const num = localStorage.getItem('model_review_time_last') as any - new Date().getTime();
                    setCountdown(num > 0 ? num : 0);
                }
                break;
            case 3:
                // 返回审核结果后删除存储数据
                localStorage.removeItem('model_review_time_last');
                break;
            default:
                break;
        };
        // return () => timer && clearInterval(timer);
    }, [status])

    return (
        <div className="my-model">
            <Navbar className='my-model-navbar' fixed={false} leftArrow onLeftClick={handleClick}>我的模型</Navbar>
            <div className="my-model-content">
                <div className='my-model-content-detail'>
                    {status !== 0 && <div className='my-model-content-detail-mask'>
                        {status === 1 && <div className='mask-upload-ing'>
                            <div className='center'>
                                <div className='title'>
                                    <span>正在上传中...</span>
                                    <span>{loadRogress}%</span>
                                </div>
                                <Progress label={false} percentage={loadRogress} />
                            </div>
                            <div className='btn'>
                                <Button size="small" variant="outline" shape="round">取消上传</Button>
                            </div>
                        </div>}
                        {status === 2 && <div className='mask-upload-review'>
                            <div className='info'>上传成功，正在审核中，预计等待时间</div>
                            <CountDown size='large' time={countdown} />
                        </div>}
                        {status === 3 && <div className='mask-upload-error'>
                            <div className='info'>
                                <span>审核失败</span>
                                <div>失败原因，字很多</div>
                            </div>
                            <div className='btn'>
                                <Button size="small" variant="outline" shape="round" block>重新上传</Button>
                                <Button size="small" variant="outline" shape="round" block>删除</Button>
                            </div>
                        </div>}
                    </div>}
                    <div className='my-model-content-detail-img'>
                        <img src="" alt="" />
                    </div>
                    <div className='my-model-content-detail-info'>
                        <div className='my-model-content-detail-info-item'>
                            <span>名称：</span>

                        </div>
                        <div className='my-model-content-detail-info-item'>
                            <span>身高：</span>

                        </div>
                        <div className='my-model-content-detail-info-item'>
                            <span>时间：</span>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MyModel;