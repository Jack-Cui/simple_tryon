import './index.css';
import { Input, Toast } from 'tdesign-mobile-react';
import { CheckCircleIcon, CloseCircleIcon } from 'tdesign-icons-react';
import HeightIcon from '../../assets/height.png';
import ActionIcon from '../../assets//action.png';
import UploadIcon from '../../assets//upload.png';
import Example2Icon from '../../assets//example2.png';
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { checkVideo } from '../../utils/videoCheck';
import {checkImg} from '../../utils/imgCheck';
import { getVideoFirstFrame } from '../../utils/vedioToImg';
import ErrorToast from '../errorToast';
import { setupWechatVideoCapture, wechatExtractVideoFrame } from '../../utils/wxVideoToImg';
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
            accept = 'video/mov,video/mp4';
        } else if (props?.isPersonal) {
            accept = 'video/*';
        } else if (props?.is3DBeauty) {
            accept = 'image/jpeg, image/png';
        }
        return accept;
    }
    const uploadFile = () => {
        uploadFileEl?.current?.click();
    }

    const verifyFiles = async (file: any) => {
        if (props?.isRing) {
            // 环拍视频
            const res: any = await checkVideo(file);
            if (!(res.duration > 45 && res.duration < 60)) {
                setErrorInfo('请上传时长45s-60s的视频');
                setShowError(true);
                return false;
            }
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
        if (props?.is3DBeauty) {
        const res: any = await checkImg(file);
        console.log(res);
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

    const fileChange = async (event: any) => {
        if (!event.target.files[0]) return;
        // const flag: boolean = await verifyFiles(event.target.files[0]);
        // console.log('flag', flag);
        // if (!flag) return;
        setFile(event.target.files[0]);
        if (props?.isRing || props?.isPersonal) {
            // const result = await getVideoFirstFrame(event.target.files[0], 'png');
            const { base64 } = await wechatExtractVideoFrame(event.target.files[0]);
            setFirstFrame(base64); // 显示 Base64 图片
            // const { base64 } = await wechatExtractVideoFrame(event.target.files[0]);
            // setFirstFrame(base64); // 显示 Base64 图片
        }
        if (props?.is3DBeauty) {
            setFirstFrame(URL.createObjectURL(event.target.files[0])); // 显示 Base64 图片
        }
    }

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
                <input ref={uploadFileEl} accept={getAccept()} type="file" style={{ display: 'none' }} onChange={fileChange} />
            </div>
            {props.isRing && <Input className='input' value={perHeight} onChange={(value: any) => setPerHeight(value)} label={<img src={HeightIcon} />} suffix={<div>厘米</div>} type="number"  borderless placeholder="请输入您的身高" />}
            {props.isPersonal && <Input className='input' value={perActionName} onChange={(value: any) => setPerActionName(value)} maxlength={4} label={<img src={ActionIcon} />} borderless placeholder="请输入动作名称" />}
            <div className="info">
                <div className='info_title'>环拍视频要求：</div>
                {(props?.info || []).map((item) => {
                    return <div className='info_item'>{item}</div>
                })}
            </div>
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
            <ErrorToast info={errorInfo} visible={showError} onClick={() => setShowError(false)} />
        </div>
    )
})

export default UploadFile;
