import './index.css';
import { Input, Loading, Toast } from 'tdesign-mobile-react';
import { CheckCircleIcon, CloseCircleIcon } from 'tdesign-icons-react';
import HeightIcon from '../../assets/height.png';
import ActionIcon from '../../assets//action.png';
import UploadIcon from '../../assets//upload.png';
import Example2Icon from '../../assets//example2.png';
import videoPreviewImg from '../../assets/introduction/videoframe0.png';
import { forwardRef, use, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { checkVideo } from '../../utils/videoCheck';
import {checkImg} from '../../utils/imgCheck';
import { getVideoFirstFrame } from '../../utils/vedioToImg';
import ErrorToast from '../errorToast';
import { setupWechatVideoCapture, wechatExtractVideoFrame } from '../../utils/wxVideoToImg';
import { apiService, uploadAPI } from '../../services/api';

interface Props {
  // ...existing props...
  onIOSUploadVideo?: (file: File) => Promise<any>;
}

interface Props {
    title: String;
    info?: string[];
    example?: any[];
    isRing?: Boolean; // 环拍视频
    isPersonal?: Boolean; // 个人视频
    is3DBeauty?: Boolean; // 3d美颜
    isHide?: boolean; //
}
const UploadFile = forwardRef((props: Props, ref: any) => {
    const uploadFileEl = useRef<HTMLInputElement>(null);
    const [firstFrame, setFirstFrame] = useState(''); // 视频第一帧图片
    const [file, setFile] = useState(''); // 文件
    const [perHeight, setPerHeight] = useState<any>(''); // 身高
    const [perActionName, setPerActionName] = useState(''); // 动作名称
    const [showError, setShowError] = useState(false);
    const [errorInfo, setErrorInfo] = useState('');

    //update by chao 2025.09.28 修改校验报错问题， 注释该段
    // useEffect(() => {
    //     // setupWechatVideoCapture();

    //     if (perHeight > 240 || perHeight < 100) {
    //         setErrorInfo('身高输入异常，请重新输入');
    //         setShowError(true); 
    //         return;
    //     }
    // },[perHeight])
    useEffect(() => {
        if (showError) {
            const timer: any = setTimeout(() => {
                setShowError(false);
            }, 1500)
            return () => {
                clearTimeout(timer);
            }
        }
    }, [showError])
    const getAccept = () => {
        let accept = '';
        if (props?.isRing) {
            // accept = 'video/*';
            accept = '.mov,.mp4';
        } else if (props?.isPersonal) {
            // accept = 'video/*';
            accept = '.mov,.mp4';
        } else if (props?.is3DBeauty) {
            accept = 'image/jpeg, image/png';
        }
        return accept;
    }
    const uploadFile = () => {
        uploadFileEl?.current?.click();
    }

    const verifyFiles = async (file: any) => {
        console.log('fileChange..3');
        console.log(file.name.split('.').pop());
        console.log('fileChange..4');
        console.log(file);

        const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);  
        if (props?.isRing) {
            if (isIOS) {
            // if (false) {
                // IOS暂时不校验
                return true;
            } else{
                if (!['mov', 'mp4'].includes((file.name.split('.').pop() as never))) {
                    setErrorInfo('请上传mov/mp4格式视频');
                    setShowError(true);
                    return false;
                }
                // 环拍视频
                const res: any = await checkVideo(file);
                // const frameRate = res.frame;
                // alert('帧率：' + frameRate);
               
                if (!(res.duration >= 45 && res.duration <= 60)) {
                    setErrorInfo('请上传时长45s-60s的视频');
                    setShowError(true);
                    return false;
                }
                console.log(res);
                if (!(res.videoWidth === 2160 && res.videoHeight === 3840)) {
                    setErrorInfo('请上传分辨率为4k的视频');
                    setShowError(true);
                    return false;
                }
                if (false) {
                    setErrorInfo('请上传帧率为60fps的视频');
                    setShowError(true); 
                    return false;
                }
            }
        }
        
        if (props?.is3DBeauty) {
            const res: any = await checkImg(file);
            console.log("width:" + res.fileInfo.width + "height:" + res.fileInfo.height );
                // 美图
                const short = res.fileInfo.width < res.fileInfo.height ? res.fileInfo.width : res.fileInfo.height;
                const long = res.fileInfo.width < res.fileInfo.height ? res.fileInfo.height : res.fileInfo.width;
                if (!((short > 1440 || short === 1440) && (long < 3840 || long === 3840))) {
                    // 短边≥1440，长边≤3840
                    setErrorInfo('请上传分辨率2k-4k的美颜照片');
                    setShowError(true); 
                    return false;
                }
        }

        if (props?.isPersonal) {
            const res: any = await checkVideo(file);
            // 个人视频
            if (!(res.duration === 10 || res.duration < 10)) {
                setErrorInfo('请上传时长小于等于10s的视频');
                setShowError(true);
                return false;
            }
        }
        return true;
    }

    //add by chao:2025.10.13
    // 获取 jpg 图片并转为 base64
    // 获取 jpg 图片并转为 base64（只返回纯base64数据，不带前缀）
    async function fetchJpgAsBase64(fPicUrl: string): Promise<string> {
    const response = await fetch(fPicUrl, { method: 'GET' });
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
        // 取出base64部分
        const result = reader.result as string;
        // 兼容 data:image/jpeg;base64,xxxx 或 data:image/jpg;base64,xxxx
        const base64 = result.replace(/^data:(image|application)\/\w+;base64,/, '');
        resolve(base64);
        };
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
    }

    // 倒计时相关状态
    const [countdown, setCountdown] = useState(40); // 默认3分钟 180
    const [showToast, setShowToast] = useState(false); // 控制是否显示Toast
    const countdownRef = useRef<HTMLDivElement>(null); // 引用倒计时文本元素
    const timeTextRef = useRef<HTMLDivElement>(null); // 引用时间文本元素

    useEffect(() => {
        // 更新倒计时
        if (countdown > 0) {
            const timerId = setInterval(() => {
                setCountdown(prevCount => prevCount - 1);
            }, 1000);
            return () => {
                clearInterval(timerId);
            };
        }
    }, [countdown]);

    // 监听countdown变化，直接更新DOM文本而不重建Toast
    useEffect(() => {
        if (countdownRef.current && timeTextRef.current) {
            // 直接更新DOM元素的文本内容
            countdownRef.current.textContent = `视频正在上传审核中...`;
            // const minutes = Math.floor(countdown / 60);
            const seconds = (countdown % 60).toString().padStart(2, '0');
            // timeTextRef.current.textContent = `预估时间：${minutes}分${seconds}秒`;
            timeTextRef.current.textContent = `预估时间：${seconds}秒`;
        }
    }, [countdown]);

    // 监听showToast状态，只在显示/隐藏时操作Toast
    useEffect(() => {
        if (showToast) {
            // 只创建一次Toast
            Toast({
                message: (
                    <div>                    
                    <div ref={countdownRef}>视频正在上传审核中...</div>
                    {/* <div style={{ marginTop: 8, fontSize: 14, color: '#666' }}></div> */}
                    <div ref={timeTextRef} style={{ marginTop: 8, fontSize: 14, color: '#666' }}>
                        {/* {countdown}预估时间11：{Math.floor(countdown / 60)}分{(countdown % 60).toString().padStart(2, '0')}秒 */}
                    </div>
                    </div>
                ),
                direction: 'column',
                placement: 'middle',
                duration: 0,
                preventScrollThrough: true,
                showOverlay: true,
                icon: <Loading size="large" />,
            });
        }
    }, [showToast]);

    const fileChange = async (event: any) => {
        
        console.log('fileChange..1');
        if (!event.target.files[0]) return;
        console.log('fileChange..2');

        //add by chao:2025.10.12
        //IOS特殊处理
        //如果是iOS环境，直接先上传文件，再校验文件信息
        const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);  
        // if(true){
        if(isIOS){
            // 调用父组件传递的上传方法
            if (props.onIOSUploadVideo) {
                setCountdown(40);
                console.log("{countdown}:",countdown);
                // 设置showToast为true，触发Toast的显示和更新
                // setCountdown(180); // 重置倒计时
                setShowToast(true);
                
                let modelVideoUrlRes: string = '';
                let videoResultsRes: any = null;
                
                try {
                    const result = await props.onIOSUploadVideo(event.target.files[0]);
                    modelVideoUrlRes = result.modelVideoUrlRes;
                    videoResultsRes = result.videoResultsRes;
                } finally {
                    // 无论上传成功还是失败，都清除Toast
                    setShowToast(false);
                    Toast.clear();
                }
                console.log('uploadVideo result:', modelVideoUrlRes);

                if(modelVideoUrlRes){
                    let r_frame_rate = '';
                    let width = ''; 
                    let height = ''; 
                    let duration = '';
                    //1.获取视频基本信息
                    try {
                        const response = await uploadAPI.getTOSVideoResult(modelVideoUrlRes);
                            
                        if (response.ok) {
                            // 假设 response.data 已经是 JSON 字符串
                            const vData = typeof response.data === 'string' ? JSON.parse(response.data) : response.data;

                            // 找到视频流（codec_type === 'video'）
                            const videoStream = (vData.streams || []).find((s: any) => s.codec_type === 'video');

                             r_frame_rate = videoStream?.r_frame_rate; // 如 "60/1"
                             width = videoStream?.width;
                             height = videoStream?.height;

                            // 视频时长（单位：秒，字符串类型，可转为数字）
                             duration = vData.format?.duration;

                            console.log('帧率:', r_frame_rate);
                            console.log('宽度:', width);
                            console.log('高度:', height);
                            console.log('时长:', duration);                            
                        }
                    } catch (error) {
                        console.error('获取视频基本信息失败:', error);
                        return;
                    } 

                    //2.校验视频基本信息
                    if (!(Number(duration) >= 45 && (Number(duration) <= 60))) {
                        setErrorInfo('请上传时长45s-60s的视频');
                        setShowError(true);
                        return;
                    }                    
                    if (!(Number(height) === 2160 && Number(width) === 3840)) {
                        setErrorInfo('请上传分辨率为4k的视频');
                        setShowError(true);
                        return;
                    }
                    // if (!(r_frame_rate === "30/1" )) {
                    const numerator = Number(r_frame_rate.split('/')[0]);
                    if (numerator <= 29 ) {    
                        setErrorInfo('请上传帧率为60fps的视频');
                        setShowError(true);
                        return;
                    }

                    //3.获取视频帧截图
                    const fPicUrl = modelVideoUrlRes+'?x-tos-process=video/snapshot,t_1000,w_500,h_800,f_jpg';
                    const base64 = await fetchJpgAsBase64(fPicUrl);
                    console.log('fPic base64:',base64);
                    setFirstFrame(fPicUrl); // 显示 Base64 图片
                    

                    setFile(event.target.files[0]);
                    return;
                }

            } 
        }


        //add by chao:2025.10.12 尝试自动播放方案解决iOS获取不到视频信息问题，没有有效解决，先注释 
            // 自动播放并立即暂停视频（无感知）
        //     await new Promise<void>((resolve) => {
        //         console.log('fileChange..s.1.1'+' '+ performance.now());
        //         const tempVideo = document.createElement('video');
        //         console.log('fileChange..s.1.2'+' '+ performance.now());
        //         tempVideo.src = URL.createObjectURL(event.target.files[0]);
        //         tempVideo.muted = true;
        //         tempVideo.style.display = 'none';
        //         document.body.appendChild(tempVideo);
        //         console.log('fileChange..s.1.3'+' '+ performance.now());
        //         tempVideo.onloadeddata = () => {
        //             tempVideo.play().then(() => {
        //                 tempVideo.pause();
        //                 document.body.removeChild(tempVideo);
        //                 resolve();
        //             }).catch(() => {
        //                 document.body.removeChild(tempVideo);
        //                 resolve();
        //             });
        //         };
        //         console.log('fileChange..s.1.4'+' '+ performance.now());
        //         // 防止 onloadeddata 不触发
        //         setTimeout(() => {
        //             console.log('fileChange..s.1.5'+' '+ performance.now());
        //             if (document.body.contains(tempVideo)) {
        //                 document.body.removeChild(tempVideo);
        //                 resolve();
        //             }
        //         }, 2000);
        //     });
        // const isConfirmed = window.confirm('确定要执行这个操作吗？');
        // if (isConfirmed) {
        //     // 用户点击了确认，继续执行后续代码
        //     console.log('用户确认，继续执行...');
        // } else {
        //     // 用户点击了取消
        //     console.log('用户取消操作');
        // }

      

        
        const flag: boolean = await verifyFiles(event.target.files[0]);
        console.log('flag', flag);
        if (!flag) return;
        setFile(event.target.files[0]);
        if (props?.isRing || props?.isPersonal) {
            const { base64 } = await wechatExtractVideoFrame(event.target.files[0]);
            setFirstFrame(base64); // 显示 Base64 图片
        }
        if (props?.is3DBeauty) {
            setFirstFrame(URL.createObjectURL(event.target.files[0])); // 显示 Base64 图片
        }
    }

    // 原始代码没有组件卸载时的清理逻辑
    
    // 使用useImperativeHandle自定义暴露给父组件的内容
    useImperativeHandle(ref, () => ({
        // 暴露给父组件的方法，用于获取数据
        // 获取文件
        getFile: () => {
            return file;
        },
        // 获取身高
        getPerHeight: () => {
            return perHeight;
        },
        // 获取动作名称
        getPerActionName: () => {
            return perActionName;
        },
    })); // 依赖项变化时更新暴露的方法
    return (
        <div className="upload-content" style={props?.isHide ? {display: 'none'} : {}}>
            <div className="title">{props.title}</div>
            <div className="btn" id='selectVideoBtn'>
                <img src={firstFrame || UploadIcon} onClick={uploadFile} />
                <input ref={uploadFileEl} accept={getAccept()} type="file" style={{ display: 'none' }} onChange={fileChange}  />
                {/* <input ref={uploadFileEl}  type="file" style={{ display: 'none' }} onChange={fileChange} /> */}
            </div>
            {props.isRing && <Input className='input' value={perHeight} onChange={(value: any) => setPerHeight(value)} label={<img src={HeightIcon} />} suffix={<div>厘米</div>} type="number"  borderless placeholder="请输入您的身高" />}
            {props.isPersonal && <Input className='input' value={perActionName} onChange={(value: any) => setPerActionName(value)} maxlength={4} label={<img src={ActionIcon} />} borderless placeholder="请输入动作名称" />}
            <div className="info">
                {/* <div className='info_title'>环拍视频要求：</div> */}
                {/* 环拍视频要求标题 */}
                {props.isRing && (
                    <div className="info_title">环拍视频教程：</div>
                )}
                
                {/* 环拍视频教程播放区域 */}
                {props.isRing && (
                    <div style={{ 
                        margin: '15px 0', 
                        padding: '10px', 
                        backgroundColor: '#f8f9fa', 
                        borderRadius: '8px',
                        textAlign: 'center'
                    }}>
                        <video 
                            style={{
                                width: '100%',
                                maxWidth: '300px',
                                borderRadius: '4px',
                                cursor: 'pointer'
                            }}
                            controls 
                            poster={videoPreviewImg}
                        >
                            <source src="https://admins3.tos-cn-shanghai.volces.com/Panoramic%20video%20tutorial.mp4" type="video/mp4" />
                            您的浏览器不支持视频播放。请使用更新的浏览器。
                        </video>
                        {/* <div style={{ 
                            marginTop: '8px', 
                            fontSize: '12px', 
                            color: '#666'
                        }}>点击播放环拍视频教程</div> */}
                    </div>
                )}                

                <div className="info_title">
                    {props.isRing
                        ? '环拍视频要求：'
                        : props.is3DBeauty
                        ? '拍照要求：'
                        : '动作视频要求：'}
                </div>                
                {(props?.info || []).map((item) => {
                    return <div className='info_item'>{item}</div>
                })}
            </div>
            {
                props?.example ? <div className="example">
                    {
                        props?.example.map(item => {
                            return <div className='example_item'>
                                        <img src={item.img} />
                                        <div className='title'>
                                            {item.isError ? <CloseCircleIcon color='red' /> : <CheckCircleIcon color='green' />}
                                            <span>{item.name}</span>
                                        </div>
                                    </div>
                        })
                    }
                    
                </div> : 
                <div className="example">
                <div className='example_item'>
                    <img src={Example2Icon} />
                    <div className='title'>
                        <CheckCircleIcon color='green' />
                        <span>清晰正面照</span>
                    </div>
                </div>
                <div className='example_item'>
                    <img src={Example2Icon} />
                    <div className='title'>
                        <CloseCircleIcon color='red' />
                        <span>大角度侧面照</span>
                    </div>
                </div>
                <div className='example_item'>
                    <img src={Example2Icon} />
                    <div className='title'>
                        <CloseCircleIcon color='red' />
                        <span>刘海遮挡</span>
                    </div>
                </div>
                <div className='example_item'>
                    <img src={Example2Icon} />
                    <div className='title'>
                        <CloseCircleIcon color='red' />
                        <span>墨镜遮挡</span>
                    </div>
                </div>
            </div>
            }
            <ErrorToast info={errorInfo} visible={showError} onClick={() => setShowError(false)} />
        </div>
    )
})

export default UploadFile;
