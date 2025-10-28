import './index.css';
import { Button, Navbar, Progress, CountDown } from 'tdesign-mobile-react';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircleIcon, IconFont } from 'tdesign-icons-react';
import ErrorToast from '../../components/errorToast';
import { modelAPI } from '../../services/api';
import { getLoginCache } from '../../utils/loginCache';
import ModelDefault from '../../assets/model-default.jpg';
interface Props {
    status: number;
    errorMsg?: string;
    list: any[];
    setStep?: any;
    backStep?: any;
    handleBack?: any;
    onRefresh?: () => void;
}
const MyModel = (props: Props) => {
    const navigate = useNavigate();
    // const [status, setStatus] = useState(0); // 0 成功 1上传中 2审核中 3 审核失败
    const [loadRogress, setLoadRogress] = useState(0); // 上传进度
    const [countdown, setCountdown] = useState(24 * 60 * 60 * 1000);
    const [showError, setShowError] = useState(false);
    const [deleteMsg, setDeleteMsg] = useState({});
    // 下拉刷新相关状态
    const [isPulling, setIsPulling] = useState(false);
    const [pullDistance, setPullDistance] = useState(0);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const startY = useRef(0);
    const pullThreshold = 80; // 下拉触发刷新的阈值
    const [lastUpdateTime, setLastUpdateTime] = useState<string>('');
    
    // 格式化最后更新时间
    const formatLastUpdateTime = () => {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        return `今天${hours}:${minutes}`;
    };
    
    // 初始化时设置最后更新时间
    useEffect(() => {
        setLastUpdateTime(formatLastUpdateTime());
    }, []);
    // 返回
    const handleClick = () => {
        // setStatus(status === 2 ? 1 : 2)
        props?.handleBack && props.handleBack();
    }

    //TODO 2025.10.25
    // 跳转到创建模型页面的函数
    const gotoCreate = () => {
        props?.backStep && props.backStep();
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

    // 根据模型创建时间计算倒计时时间
    const calculateCountdownTime = (createTimeStr: string,countHours:number) => {
        // 5小时的毫秒数
        const FIVE_HOURS = countHours * 60 * 60 * 1000;
        
        try {
            // 解析创建时间字符串（格式：2025-10-24 21:34:59）
            const createTime = new Date(createTimeStr).getTime();
            const currentTime = new Date().getTime();
            
            // 计算时间差
            const timeDiff = currentTime - createTime;
            
            // 根据条件计算倒计时
            if (timeDiff >= 0 && timeDiff <= FIVE_HOURS) {
                // 0<= 当前时间 - 创建时间 <=5个小时，显示剩余时间
                return FIVE_HOURS - timeDiff;
            } else if (timeDiff > FIVE_HOURS) {
                // 当前时间 - 创建时间 >5个小时，显示0
                return 0;
            } else {
                // 其他情况（如时间差为负数），显示5小时
                return FIVE_HOURS;
            }
        } catch (error) {
            console.error('时间解析错误:', error);
            // 解析错误时默认显示5小时
            return FIVE_HOURS;
        }
    }
    
    // 下拉刷新相关函数
    const handleTouchStart = (e: React.TouchEvent) => {
        // 只要不在刷新状态就启用下拉刷新，不再限制必须在页面顶部
        if (!isRefreshing) {
            startY.current = e.touches[0].clientY;
            setIsPulling(true);
        }
    };
    
    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isPulling || isRefreshing) return;
        
        const currentY = e.touches[0].clientY;
        const diff = currentY - startY.current;
        
        // 只允许向下拉
        if (diff > 0) {
            e.preventDefault(); // 阻止默认滚动行为
            // 计算下拉距离，添加阻尼效果
            const distance = Math.min(diff * 0.5, pullThreshold * 1.5);
            setPullDistance(distance);
        }
    };
    
    const handleTouchEnd = () => {
        if (!isPulling) return;
        
        if (pullDistance >= pullThreshold && !isRefreshing) {
            // 触发刷新
            setIsRefreshing(true);
            setPullDistance(pullThreshold);
            setLastUpdateTime(formatLastUpdateTime());
            
            // 调用刷新函数
            if (props.onRefresh) {
                props.onRefresh();
            } else {
                // 如果没有传入刷新函数，模拟刷新
                setTimeout(() => {
                    setIsRefreshing(false);
                    setPullDistance(0);
                    setIsPulling(false);
                }, 1500);
            }
        } else {
            // 回弹
            setPullDistance(0);
            setIsPulling(false);
        }
    };
    
    // 结束刷新
    const finishRefresh = () => {
        setIsRefreshing(false);
        setPullDistance(0);
        setIsPulling(false);
    };
    
    // 监听列表数据变化，当数据更新时自动结束刷新
    useEffect(() => {
        if (isRefreshing) {
            // 延迟一点时间再结束刷新，让用户看到刷新效果
            const timer = setTimeout(() => {
                finishRefresh();
            }, 1000);
            
            return () => clearTimeout(timer);
        }
    }, [props.list]);
    
    // 组件卸载时清理状态
    useEffect(() => {
        return () => {
            setIsPulling(false);
            setIsRefreshing(false);
            setPullDistance(0);
        };
    }, []);

    return (
        <div 
            className="my-model"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <Navbar className='my-model-navbar' leftArrow onLeftClick={handleClick} fixed={false}>我的模型</Navbar>
            {/* 下拉刷新指示器 */}
            {pullDistance > 0 && (
                <div 
                    className={`pull-refresh-indicator ${isRefreshing ? 'refreshing' : ''}`}
                    style={{ height: `${pullDistance}px`, transition: isRefreshing ? 'height 0.2s' : 'none' }}
                >
                    <div className="pull-refresh-content">
                        <IconFont 
                            name="refresh" 
                            size="24" 
                            style={{ 
                                background: 'linear-gradient(135deg, #333 0%, #666 50%, #333 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                transform: `rotate(${isRefreshing ? '360deg' : pullDistance / pullThreshold * 180}deg)`,
                                transition: isRefreshing ? 'transform 0.4s linear infinite' : 'transform 0.2s'
                            }} 
                        />
                        <div style={{fontSize: '14px', marginLeft: '8px', color: '#999' }}>
                            <div>{isRefreshing ? '正在刷新数据中...' : 
                             pullDistance >= pullThreshold ? '松开立即刷新' : '下拉可以刷新'}</div>
                            <div style={{ fontSize: '14px', marginTop: '4px', color: '#999' }}>
                                最后更新：{lastUpdateTime}
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div 
                className="my-model-content"
            >
                {/* 只有上传状态才显示的内容 */}
               {props.status === 1 &&  <div className='my-model-content-detail'>
                    {/* props.status !== 0 && <div className='my-model-content-detail-mask'>  */}
                    { <div className='my-model-content-detail-mask'>                        
                            {props.status === 1 && <div className='mask-upload-ing'>
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
                    </div>}                            
                    <div className='my-model-content-detail-img my-model-content-detail-blur'>
                            <img src={ ModelDefault} alt="" />
                    </div>                    
                    <div className={'my-model-content-detail-info my-model-content-detail-blur'}>                    
                        <div className='my-model-content-detail-info-item'>                      
                            <span>名称：</span>
                            我的模型
                        </div>
                        <div className='my-model-content-detail-info-item'>
                            <span>身高：</span>
                            { ''}
                        </div>
                        <div className='my-model-content-detail-info-item'>
                            <span>时间：</span>
                            { ''}                           
                        </div>
                    </div>
                </div>}    
                {<div style={{ height: '5px' }}></div> }
                {/* 遍历props.list数组，为每个模型渲染一个detail组件 */}
                {props.list.length > 0 ? (
                    props.list.map((model, index) => (
                    <div>
                        {/* 场景5：审核通过，建模成功 */} 
                        {(model.modelStatus === 4 && model.applyStatus === 3) && <div className='my-model-content-detail' key={model.id || index}>           
                                {/* 模型图片 */}
                                <div className='my-model-content-detail-img'>
                                    <img src={model?.modelPictureUrl || ModelDefault} alt="" />
                                </div>
                                <div className={ 'my-model-content-detail-info' }>
                                    <div className='my-model-content-detail-info-item'>
                                        <span>名称：</span>
                                        {/* {model.modelName || '我的模型'} */}
                                        {'我的模型'}
                                    </div>
                                    <div className='my-model-content-detail-info-item'>
                                        <span>身高：</span>
                                        { model.height }
                                    </div>
                                    <div className='my-model-content-detail-info-item'>
                                        <span>时间：</span>
                                        { model.createTime }
                                        {<IconFont name='delete-1' onClick={() => closeModel(model)} className='close' style={{ color: 'red' }} size="large" />}
                                    </div>
                                </div>                                      
                        </div>}

                        {/* 场景2：上传成功，审核中 */} 
                        { (model.modelStatus === 0 && (model.applyStatus === 1 || model.applyStatus === 2)) && <div className='my-model-content-detail' key={model.id || index}>                        
                            {<div className='my-model-content-detail-mask'>                                
                                {<div className='mask-upload-review'>
                                    <div className='info'>上传成功，正在审核中，预计等待时间</div>
                                    <CountDown size='large' time={calculateCountdownTime(model.createTime,5)} />
                                </div>}
                            </div>}
                                {/* 模型图片 */}
                                <div className='my-model-content-detail-img my-model-content-detail-blur'>
                                    <img src={model?.modelPictureUrl || ModelDefault} alt="" />
                                </div>                                 
                        </div>}

                        {/* 场景6：审核通过，建模失败 */} 
                        { (model.applyStatus === 3 && (model.modelStatus === 1 || model.modelStatus === 5)) && <div className='my-model-content-detail' key={model.id || index}>                           
                            {<div className='my-model-content-detail-mask'>                                
                                {/* 场景6：建模失败，审核通过 */}
                                {model.applyStatus === 3 && (model.modelStatus ===1 || model.modelStatus ===5) && <div className='mask-upload-error'>
                                    <div className='applyErrInfo'>
                                        <span>建模失败</span>
                                        <div>{model.applyNote||'模型创建失败，请更换美颜图并重新上传。'}</div>                                        
                                    </div>
                                    <div className='btn'>
                                        {/* <Button size="small" variant="outline" shape="round" block>重新上传</Button> */}
                                        <Button size="small" variant="outline" shape="round" block onClick={() => closeModel(model)}>删除</Button>
                                    </div>
                                </div>}
                            </div>}                                 
                                {/* 模型图片 */}
                                <div className='my-model-content-detail-img my-model-content-detail-blur-plus'>
                                    <img src={model?.modelPictureUrl || ModelDefault} alt="" />
                                </div> 
                        </div>}

                        {/* 场景3：上传成功，审核不通过 */} 
                        { (model.applyStatus === 4 && model.modelStatus === 0) && <div className='my-model-content-detail' key={model.id || index}>                           
                            {<div className='my-model-content-detail-mask'>                                
                                { <div className='mask-upload-error'>
                                    <div className='applyErrInfo'>
                                        <span>审核失败</span>
                                        <div>{model.applyNote||'请您仔细查看教程说明后再重新拍摄上传吧'}</div>                                        
                                    </div>
                                    <div className='btn'>
                                        {/* <Button size="small" variant="outline" shape="round" block>重新上传</Button> */}
                                        <Button size="small" variant="outline" shape="round" block onClick={() => closeModel(model)}>删除</Button>
                                    </div>
                                </div>}
                            </div>}                                 
                                {/* 模型图片 */}
                                <div className='my-model-content-detail-img my-model-content-detail-blur-plus'>
                                    <img src={model?.modelPictureUrl || ModelDefault} alt="" />
                                </div> 
                        </div>}

                        {/* 场景4：审核通过，建模中 */} 
                        { (model.applyStatus === 3 && (model.modelStatus === 2 || model.modelStatus === 3 || model.modelStatus === 7 || model.modelStatus === 8)) &&<div className='my-model-content-detail' key={model.id || index}>                        
                            {<div className='my-model-content-detail-mask'>                                
                                {<div className='mask-upload-review'>
                                    <div className='info'>已通过审核，正在为您创建专属模型，预计等待时间</div>
                                    <CountDown size='large' time={calculateCountdownTime(model.createTime,3.5)} />
                                </div>}
                            </div>}
                                {/* 模型图片 */}
                                <div className='my-model-content-detail-img my-model-content-detail-blur'>
                                    {/* <img src={model?.modelPictureUrl || ModelDefault} alt="" /> */}

                                </div>                                 
                        </div>}
                        <div style={{ height: '5px' }}></div>    
                     </div>
                    ))
                ) 
                : null
                }
                {/* : (
                    // 当列表为空时显示的内容
                    <div className='my-model-content-empty'>
                        <div className='empty-info'>暂无模型，请先创建</div>
                    </div>
                )
                } */}
                
            </div>
            {/* 2025.10.26 二次创建模型 */}
            <div className='create-model-btn'>
                <Button size="large" theme="light" block shape="round" style={{ border: 0, background: 'linear-gradient(90deg, #27DC9A 0%, #02DABF 100%)', color: '#fff' }} onClick={gotoCreate}>添加个人模型</Button>
            </div>

            <ErrorToast isConfirm info={'确认删除该模型？'} onBtnClick={comfirmClear} visible={showError} onClick={() => setShowError(false)} />
        </div>
        
    )

//    return (
//         <div className="my-model">
//             <Navbar className='my-model-navbar' leftArrow onLeftClick={handleClick} fixed={false}>我的模型</Navbar>
//             <div className="my-model-content">
//                 <div className='my-model-content-detail'>
//                     {props.status !== 0 && <div className='my-model-content-detail-mask'>                        
//                             {props.status === 1 && <div className='mask-upload-ing'>
//                             <div className='center'>
//                                 <div className='title'>
//                                     <span>正在上传中...</span>
//                                     <span>{loadRogress}%</span>
//                                 </div>
//                                 <Progress label={false} percentage={loadRogress} />
//                             </div>
//                             <div className='btn'>
//                                 {/* <Button size="small" variant="outline" shape="round">取消上传</Button> */}
//                             </div>
//                         </div>}
//                         {props.status === 2 && <div className='mask-upload-review'>
//                             <div className='info'>上传成功，正在审核中，预计等待时间</div>
//                             <CountDown size='large' time={countdown} />
//                         </div>}
//                         {props.status === 3 && <div className='mask-upload-error'>
//                             <div className='info'>
//                                 <span>审核失败</span>
//                                 <div>{props.list.length > 0 && props.list[props.list.length - 1].applyNote}</div>
//                             </div>
//                             <div className='btn'>
//                                 {/* <Button size="small" variant="outline" shape="round" block>重新上传</Button> */}
//                                 <Button size="small" variant="outline" shape="round" block onClick={() => closeModel(props.list.length > 0 ? props.list[props.list.length - 1] : {})}>删除</Button>
//                             </div>
//                         </div>}
//                     </div>}
//                     <div className='my-model-content-detail-img'>
//                         <img src={(props.list.length > 0 && props.list[props.list.length - 1]?.modelPictureUrl) || ModelDefault} alt="" />
//                     </div>
//                     <div className={props.status === 0 ? 'my-model-content-detail-info' : 'my-model-content-detail-info my-model-content-detail-blur'}>
//                         <div className='my-model-content-detail-info-item'>
//                             <span>名称：</span>
//                             我的模型
//                             {/* {props.status === 0 ? (props.list.length > 0 && props.list[props.list.length - 1].modelName) : ''} */}
//                         </div>
//                         <div className='my-model-content-detail-info-item'>
//                             <span>身高：</span>
//                             {props.status === 0 ? (props.list.length > 0 && props.list[props.list.length - 1].height) : ''}
//                         </div>
//                         <div className='my-model-content-detail-info-item'>
//                             <span>时间：</span>
//                             {props.status === 0 ? (props.list.length > 0 && props.list[props.list.length - 1].createTime) : ''}
//                             {props.status === 0 && <IconFont name='delete-1' onClick={() => closeModel(props.list.length > 0 ? props.list[props.list.length - 1] : {})} className='close' style={{ color: 'red' }} size="large" />}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <ErrorToast isConfirm info={'确认删除该模型？'} onBtnClick={comfirmClear} visible={showError} onClick={() => setShowError(false)} />
//         </div>
//     )    
}

 
export default MyModel;