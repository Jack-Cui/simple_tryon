import './index.css';
import { Button, Navbar, Progress, CountDown } from 'tdesign-mobile-react';
import { useEffect, useRef, useState } from 'react';
import { CheckCircleIcon, IconFont } from 'tdesign-icons-react';
import ErrorToast from '../../components/errorToast';
import { modelAPI } from '../../services/api';
import { getLoginCache } from '../../utils/loginCache';
import ModelDefault from '../../assets/model-default.jpg';
interface Props {
    status: number;
    errorMsg?: string;
    list: any[];
    backStep?: any;
    handleBack?: any;
}
const MyModel = (props: Props) => {
    // const [status, setStatus] = useState(0); // 0 成功 1上传中 2审核中 3 审核失败
    const [loadRogress, setLoadRogress] = useState(0); // 上传进度
    const [countdown, setCountdown] = useState(24 * 60 * 60 * 1000);
    const [showError, setShowError] = useState(false);
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

    const closeModel = (msg: any) => {
        setDeleteMsg(msg);
        setShowError(true);
    }

    const comfirmClear = async () => {
        console.log('删除项目', deleteMsg);
        const loginCache: any = getLoginCache();
        const response = await modelAPI.deleteModel(loginCache.token, (deleteMsg as any).id);
        // 跳转会创建页面
        if (response.ok) {
            const result = JSON.parse(response.data);
            if (result.code === 0) {
                console.log('删除模型成功:', result.data);
                props?.backStep && props.backStep();
                // alert('模型删除成功！');
            } else {
                throw new Error(result.message || '删除失败');
            }
        } else {
            throw new Error(`删除失败: HTTP ${response.status}`);
        }
    }

    return (
        <div className="my-model">
            <Navbar className='my-model-navbar' leftArrow onLeftClick={handleClick} fixed={false}>我的模型</Navbar>
            <div className="my-model-content">
                {/* 遍历props.list数组，为每个模型渲染一个detail组件 */}
                {props.list.length > 0 ? (
                    props.list.map((model, index) => (
                        <div className='my-model-content-detail' key={model.id || index}>
                            {/* 注意：这里简化了状态管理，实际使用时可能需要为每个模型维护独立状态 */}
                            {/* 当前状态仍然使用props传入的全局状态，仅做示例 */}
                            
                            {model.modelStatus !== 0 && <div className='my-model-content-detail-mask'>
                                {/* 场景1：上传中 */}               
                                {model.modelStatus === 1 && <div className='mask-upload-ing'>
                                <div className='center'>
                                        <div className='title'>
                                            <span>正在上传中...</span>
                                            <span>{loadRogress}%</span>
                                        </div>
                                        <Progress label={false} percentage={loadRogress} />            
                                    </div>
                                    <div className='btn'>
                                        {/* <Button size="small" variant="outline" shape="round">取消上传</Button> */}
                                    </div>
                                </div>}
                                {/* 场景2：上传成功，审核中 */}
                                {model.modelStatus === 0 && (model.applyStatus ===1 || model.applyStatus ===2) && <div className='mask-upload-review'>
                                    <div className='info'>上传成功，正在审核中，预计等待时间</div>
                                    <CountDown size='large' time={countdown} />            
                                </div>}
                                {/* 场景6：建模失败，审核通过 */}
                                {model.applyStatus === 3 && (model.modelStatus ===1 || model.modelStatus ===5) && <div className='mask-upload-error'>
                                    <div className='info'>
                                        <span>审核失败</span>
                                        <div>{model.applyNote}</div>
                                    </div>
                                    <div className='btn'>
                                        {/* <Button size="small" variant="outline" shape="round" block>重新上传</Button> */}
                                        <Button size="small" variant="outline" shape="round" block onClick={() => closeModel(model)}>删除</Button>
                                    </div>
                                </div>}
                            </div>}


                            <div className='my-model-content-detail-img'>
                                <img src={model?.modelPictureUrl || ModelDefault} alt="" />
                            </div>
                            <div className={props.status === 0 ? 'my-model-content-detail-info' : 'my-model-content-detail-info my-model-content-detail-blur'}>
                                <div className='my-model-content-detail-info-item'>
                                    <span>名称：</span>
                                    {model.modelName || '我的模型'}
                                </div>
                                <div className='my-model-content-detail-info-item'>
                                    <span>身高：</span>
                                    {props.status === 0 ? model.height : ''}
                                </div>
                                <div className='my-model-content-detail-info-item'>
                                    <span>时间：</span>
                                    {props.status === 0 ? model.createTime : ''}
                                    {props.status === 0 && <IconFont name='delete-1' onClick={() => closeModel(model)} className='close' style={{ color: 'red' }} size="large" />}
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    // 当列表为空时显示的内容
                    <div className='my-model-content-empty'>
                        <div className='empty-info'>暂无模型，请先创建</div>
                    </div>
                )}
            </div>
            <ErrorToast isConfirm info={'确认删除该模型？'} onBtnClick={comfirmClear} visible={showError} onClick={() => setShowError(false)} />
        </div>
    )

   // return (
    //     <div className="my-model">
    //         <Navbar className='my-model-navbar' leftArrow onLeftClick={handleClick} fixed={false}>我的模型</Navbar>
    //         <div className="my-model-content">
    //             <div className='my-model-content-detail'>
    //                 {props.status !== 0 && <div className='my-model-content-detail-mask'>                        
    //                         {props.status === 1 && <div className='mask-upload-ing'>
    //                         <div className='center'>
    //                             <div className='title'>
    //                                 <span>正在上传中...</span>
    //                                 <span>{loadRogress}%</span>
    //                             </div>
    //                             <Progress label={false} percentage={loadRogress} />
    //                         </div>
    //                         <div className='btn'>
    //                             {/* <Button size="small" variant="outline" shape="round">取消上传</Button> */}
    //                         </div>
    //                     </div>}
    //                     {props.status === 2 && <div className='mask-upload-review'>
    //                         <div className='info'>上传成功，正在审核中，预计等待时间</div>
    //                         <CountDown size='large' time={countdown} />
    //                     </div>}
    //                     {props.status === 3 && <div className='mask-upload-error'>
    //                         <div className='info'>
    //                             <span>审核失败</span>
    //                             <div>{props.list.length > 0 && props.list[props.list.length - 1].applyNote}</div>
    //                         </div>
    //                         <div className='btn'>
    //                             {/* <Button size="small" variant="outline" shape="round" block>重新上传</Button> */}
    //                             <Button size="small" variant="outline" shape="round" block onClick={() => closeModel(props.list.length > 0 ? props.list[props.list.length - 1] : {})}>删除</Button>
    //                         </div>
    //                     </div>}
    //                 </div>}
    //                 <div className='my-model-content-detail-img'>
    //                     <img src={(props.list.length > 0 && props.list[props.list.length - 1]?.modelPictureUrl) || ModelDefault} alt="" />
    //                 </div>
    //                 <div className={props.status === 0 ? 'my-model-content-detail-info' : 'my-model-content-detail-info my-model-content-detail-blur'}>
    //                     <div className='my-model-content-detail-info-item'>
    //                         <span>名称：</span>
    //                         我的模型
    //                         {/* {props.status === 0 ? (props.list.length > 0 && props.list[props.list.length - 1].modelName) : ''} */}
    //                     </div>
    //                     <div className='my-model-content-detail-info-item'>
    //                         <span>身高：</span>
    //                         {props.status === 0 ? (props.list.length > 0 && props.list[props.list.length - 1].height) : ''}
    //                     </div>
    //                     <div className='my-model-content-detail-info-item'>
    //                         <span>时间：</span>
    //                         {props.status === 0 ? (props.list.length > 0 && props.list[props.list.length - 1].createTime) : ''}
    //                         {props.status === 0 && <IconFont name='delete-1' onClick={() => closeModel(props.list.length > 0 ? props.list[props.list.length - 1] : {})} className='close' style={{ color: 'red' }} size="large" />}
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //         <ErrorToast isConfirm info={'确认删除该模型？'} onBtnClick={comfirmClear} visible={showError} onClick={() => setShowError(false)} />
    //     </div>
    // )    
}

 
export default MyModel;