import './index.css';
import { Button, Navbar, Progress, CountDown } from 'tdesign-mobile-react';
import { useEffect, useRef, useState } from 'react';
const MyAction= () => {
    const [status, setStatus] = useState(0); // 0 成功 1上传中 2审核中 3 审核失败
    const [loadRogress, setLoadRogress] = useState(0); // 上传进度
    const [countdown, setCountdown] = useState(24 * 60 * 60 * 1000);
    // 返回
    const handleClick = () => {
        // setStatus(status === 2 ? 1 : 2)
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
        <div className="my-action">
            <Navbar className='my-action-navbar' fixed={false} leftArrow onLeftClick={handleClick}>我的动作</Navbar>
            <div className="my-action-content">
                <div className='my-action-content-detail'>
                    {status !== 0 && <div className='my-action-content-detail-mask'>
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
                    <div className='my-action-content-detail-img'>
                        <img src="" alt="" />
                    </div>
                    <div className='my-action-content-detail-info'>
                        <div className='my-action-content-detail-info-item'>
                        动作名称：

                        </div>
                    </div>
                </div>
            </div>
            <div className='my-action-btn'>
                <Button size="large" theme="light" block shape="round" style={{ border: 0, background: 'linear-gradient(90deg, #27DC9A 0%, #02DABF 100%)', color: '#fff' }}>创建个性化动作</Button>
            </div>
        </div>
    )
}
export default MyAction;