import './index.css';
import { Input, Toast } from 'tdesign-mobile-react';
import { CheckCircleIcon, CloseCircleIcon } from 'tdesign-icons-react';
import HeightIcon from '../../assets/height.png';
import ActionIcon from '../../assets//action.png';
import UploadIcon from '../../assets//upload.png';
import Example2Icon from '../../assets//example2.png';
import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { checkVideo } from '../../utils/videoCheck';
import { getVideoFirstFrame } from '../../utils/vedioToImg';
interface Props {
    title: String;
    info?: string[];
    example?: any[];
    isRing?: Boolean; // 环拍视频
    isPersonal?: Boolean; // 个人视频
    is3DBeauty?: Boolean; // 3d美颜
}
const UploadFile = forwardRef((props: Props, ref: any) => {
    const uploadFileEl = useRef<HTMLInputElement>(null);
    const [firstFrame, setFirstFrame] = useState(''); // 视频第一帧图片
    const [file, setFile] = useState(''); // 文件
    const [perHeight, setPerHeight] = useState(''); // 身高
    const [perActionName, setPerActionName] = useState(''); // 动作名称
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

    const fileChange = async (event: any) => {
        if (props?.isRing || props?.isPersonal) {
            const result = await getVideoFirstFrame(event.target.files[0], 'png');
            setFirstFrame(result.base64); // 显示 Base64 图片
        }
        if (props?.is3DBeauty) {
            setFirstFrame(URL.createObjectURL(event.target.files[0])); // 显示 Base64 图片
        }
        const res: any = await checkVideo(event.target.files[0]);
        setFile(event.target.files[0]);
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
        <div className="upload-content">
            <div className="title">{props.title}</div>
            <div className="btn" >
                <img src={firstFrame || UploadIcon} onClick={uploadFile} />
                <input ref={uploadFileEl} accept={getAccept()} type="file" style={{ display: 'none' }} onChange={fileChange} />
            </div>
            {props.isRing && <Input className='input' value={perHeight} onChange={(value: any) => setPerHeight(value)} label={<img src={HeightIcon} />} suffix={<div>厘米</div>} type="number" borderless placeholder="请输入您的身高" />}
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
        </div>
    )
})

export default UploadFile;