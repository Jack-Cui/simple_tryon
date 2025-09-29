import './index.css';
import { Button, Navbar, Progress, CountDown, Input } from 'tdesign-mobile-react';
import { useEffect, useRef, useState } from 'react';
import { CheckCircleIcon, IconFont } from 'tdesign-icons-react';
import ErrorToast from '../../components/errorToast';
import { getLoginCache } from '../../utils/loginCache';
import { uploadAPI } from '../../services/api';
interface Props {
    status: number;
    errorMsg?: string;
    list?: any[];
    setStep?: any;
    upDateList?: any;
    handleBack?: any;
}
const MyAction = (props: Props) => {
    // const [status, setStatus] = useState(0); // 0 成功 1上传中 2审核中 3 审核失败
    const [loadRogress, setLoadRogress] = useState(0); // 上传进度
    const [countdown, setCountdown] = useState(24 * 60 * 60 * 1000);
    const [showError, setShowError] = useState(false);
    const [isEditAction, setIsEditAction] = useState(false); // 是否修改
    const [editNum, setEditNum] = useState(0); // 修改第几项
    const [editValue, setEditValue] = useState(''); // 修改第几项
    const [deleteMsg, setDeleteMsg] = useState({});
    // 返回
    const handleClick = () => {
        // setStatus(status === 2 ? 1 : 2)
        props?.handleBack && props.handleBack();
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
        switch (props.status) {
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
    }, [props.status])

    const nameChange = (e: any) => {
        console.log(e.target.value);
        setEditValue(e.target.value);
    }
    const keepName = () => {
        console.log('失去焦点，保存数据');
        setIsEditAction(false);
    }
    const editAction = () => {
        setIsEditAction(true);
    }

    const listItemCountdown = (time: string) => {
        const createT = new Date(time).getTime();
        const newT = new Date(time).getTime();
        const num = createT + 24 * 60 * 60 * 1000 - newT;
        return num > 0 ? num : 0;
    }

    const createAction = () => {
        props?.setStep && props.setStep();
    }

    const comfirmClear = async () => {
        const loginCache: any = getLoginCache();
        const response = await uploadAPI.deleteActionVideo(loginCache.token, (deleteMsg as any).id);
        if (response.ok) {
            const result = JSON.parse(response.data);
            if (result.code === 0) {
                console.log('删除动作视频成功:', result.data);
                props?.upDateList && props.upDateList();
                //   alert('动作视频删除成功！');
            } else {
                throw new Error(result.message || '删除失败');
            }
        } else {
            throw new Error(`删除失败: HTTP ${response.status}`);
        }
    }

    const clearAction = (msg: any) => {
        setDeleteMsg(msg);
        setShowError(true);
    }

    return (
        <div className="my-action">
            <Navbar className='my-action-navbar' fixed={false} leftArrow onLeftClick={handleClick}>我的动作</Navbar>
            <div className="my-action-content">
                <div className='my-action-content-detail'>
                    {props.status !== 0 && <div className='my-action-content-detail-mask'>
                        {props.status === 1 && <div className='mask-upload-ing'>
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
                        {props.status === 2 && <div className='mask-upload-review'>
                            <div className='info'>上传成功，正在审核中，预计等待时间</div>
                            <CountDown size='large' time={countdown} />
                        </div>}
                        {props.status === 3 && <div className='mask-upload-error'>
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
                    <div className={props.status === 0 ? 'my-action-content-detail-info' : 'my-action-content-detail-info my-action-content--detail-blur'}>
                        {isEditAction ?
                            <input maxLength={4} value={editValue} type="text" onChange={nameChange} autoFocus onBlur={keepName} />
                            :
                            <div className='my-action-content-detail-info-item'>
                                动作名称：
                                {/* <IconFont name='edit-2' onClick={editAction} className='edit' size="large"/> */}
                            </div>}

                        {/* {props.status === 0 && <IconFont name='delete-1'  onClick={() => clearAction()} className='clear' style={{color:'red'}} size="large"/>} */}
                    </div>
                </div>
                {(props?.list && props.list.length > 0) && props.list.map((item: any) => {
                    // state 0：未审核，1审核通过, 2审核失败
                    return (
                        <div className='my-action-content-detail'>
                                {item.status !== '1' && <div className='my-action-content-detail-mask'>
                                    {item.status === '0' && <div className='mask-upload-review'>
                                        <div className='info'>上传成功，正在审核中，预计等待时间</div>
                                        <CountDown size='large' time={listItemCountdown(item.createTime)} />
                                    </div>}
                                    {item.status === '2' && <div className='mask-upload-error'>
                                        <div className='info'>
                                            <span>审核失败</span>
                                            <div>{item.extra2}</div>
                                        </div>
                                        <div className='btn'>
                                            <Button size="small" variant="outline" shape="round" block>重新上传</Button>
                                            <Button size="small" variant="outline" shape="round" onClick={() => clearAction(item)} block>删除</Button>
                                        </div>
                                    </div>}
                                </div>}
                                <div className='my-action-content-detail-img'>
                                    <img src="" alt="" />
                                </div>
                                <div className={item.status === '1' ? 'my-action-content-detail-info' : 'my-action-content-detail-info my-action-content--detail-blur'}>
                                    {isEditAction ?
                                        <input maxLength={4} value={editValue} type="text" onChange={nameChange} autoFocus onBlur={keepName} />
                                        :
                                        <div className='my-action-content-detail-info-item'>
                                            动作名称：{item.remark}
                                            {/* <IconFont name='edit-2' onClick={editAction} className='edit' size="large" /> */}
                                        </div>}

                                    <IconFont name='delete-1' onClick={() => clearAction(item)} className='clear' style={{ color: 'red' }} size="large" />
                                </div>
                            </div>
                    )
                })
                }

            </div>
            <div className='my-action-btn'>
                <Button size="large" theme="light" disabled={(props?.list && props.list.length === 4 && props.status > 0) || (props?.list && props.list.length === 5)} block shape="round" style={{ border: 0, background: 'linear-gradient(90deg, #27DC9A 0%, #02DABF 100%)', color: '#fff' }} onClick={createAction}>创建个性化动作</Button>
            </div>
            <ErrorToast isConfirm info={'确认删除该动作？'} onBtnClick={comfirmClear} visible={showError} onClick={() => setShowError(false)} />
        </div>
    )
}
export default MyAction;