import React, { useEffect, useState } from 'react';
import './index.css';
import { Button, Navbar, Toast } from 'tdesign-mobile-react';
import { useRef } from 'react';
import { checkVideo } from '../../utils/videoCheck';
import UploadFile from '../../components/uploadFile';
import ErrorToast from '../../components/errorToast';
import { useNavigate } from 'react-router-dom';
const infoList1 = [
  '1.光线与背景：光线明亮均匀，背景简洁非纯白；避免镜面反光和他人入镜。',
  '2.形象与着装：露额耳，无刘海，不戴眼镜饰品；穿贴身无装饰背心短裤，赤脚。',
  '3.设备与距离：后摄4K60帧；距人0.7–1米稳定绕行；相机始终与拍摄部位同高。',
  '4.拍摄流程：双脚分开站立，双臂侧举与腿成45°；45–60秒转4圈，顺序拍头→胸→臀腿→腿脚；最后拉远全身结束。'
];
const infoList2 = [
    '1. 画质与构图： 照片分辨率需在2K至4K之间，且脸部需占据整个画面比例的1/3以上。',
    '2. 正面与露脸： 必须为正脸照片，头顶和面部完整露出，无侧转或倾斜，双眼睁开。',
    '3. 光线与面部： 光线均匀，避免阴阳脸；确保面部无眼镜、饰品遮挡，且无刘海碎发。',
    '4. 清晰与整洁： 面部五官清晰无遮挡，表情自然。'
]
const CreateModel = () => {
  
  const navigate = useNavigate();
  const uploadFileEl = useRef<HTMLInputElement>(null);
  const [step, setStep] = useState(0);
  const [showError, setShowError] = useState(false);
  const [errorInfo, setErrorInfo] = useState('');
  const ringRefEl = useRef(null);
  const beautyRefEl = useRef(null);
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
  const handleClick = () => {
    if (step === 1) {
        setStep(0)
    } else {
      navigate(-1);
    }
  }

  const onNext = () => {
    if (ringRefEl?.current) {
      if (!(ringRefEl?.current as any).getFile()) {
        setErrorInfo('请上传环拍视频');
        setShowError(true);
        return;
      }
      if (!(ringRefEl?.current as any).getPerHeight()) {
        setErrorInfo('请输入身高');
        setShowError(true);
        return;
      }
    }
    console.log('模型视频', (ringRefEl?.current as any).getFile());
    console.log('身高', (ringRefEl?.current as any).getPerHeight());
    setStep(1);
  }

  const onCreate = () => {
    // 创建
    if (beautyRefEl?.current) {
      if (!(beautyRefEl?.current as any).getFile()) {
        setErrorInfo('请上传美颜照');
        setShowError(true);
        return;
      }
    }
    console.log('美颜照', (ringRefEl?.current as any).getFile());
    // next
    navigate('/my-model');
  }

  const onSkip = () => {
    // 跳过
    // next
    navigate('/my-model');
  }

  const uploadFile = () => {
    uploadFileEl?.current?.click();
  }

  const fileChange = async (event: any) => {
    const res: any = await checkVideo(event.target.files[0]);
    console.log(res.duration);
    if (res.duration > 15) {
      Toast({ message: '请选择时长15秒内的视频', theme: 'error' });
    }
  }
  return (
    <div className="create-Model">
      <Navbar className='create-Model-navbar' fixed={false} leftArrow onLeftClick={handleClick}>{step === 0 ? '创建模型' : '3D美颜'}</Navbar>
      <div className='content'>
        {step === 0 && <UploadFile ref={ringRefEl} isRing title="上传环拍视频"  info={infoList1}/>}
        {step === 1 && <UploadFile ref={beautyRefEl} is3DBeauty title="上传清晰正面美颜照"  info={infoList2}/>}
      </div>
      <div className='create-Model-btn'>
        {step === 0 && <Button size="large" theme="light" block shape="round" style={{ border: 0, background: 'linear-gradient(90deg, #27DC9A 0%, #02DABF 100%)', color: '#fff' }} onClick={onNext}>下一步</Button>}
        {step === 1 && 
            <>
            <Button className='create-Model-btn-skip' shape="round" onClick={onSkip}>跳过</Button>
            <Button size="large" theme="light" block shape="round" style={{ border: 0, background: 'linear-gradient(90deg, #27DC9A 0%, #02DABF 100%)', color: '#fff' }} onClick={onCreate}>立刻创建</Button>
            </>
        }
      </div> 
      <ErrorToast info={errorInfo} visible={showError} onClick={() => setShowError(false)}/>
    </div>
    
  );
}

export default CreateModel;
