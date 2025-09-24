import React, { useEffect, useState } from 'react';
import './index.css';
import { Button, Navbar, Toast } from 'tdesign-mobile-react';
import { useRef } from 'react';
import { checkVideo } from '../../utils/videoCheck';
import UploadFile from '../../components/uploadFile';
import ErrorToast from '../../components/errorToast';
import { getLoginCache } from '../../utils/loginCache';
import { modelAPI, uploadAPI } from '../../services/api';
import { TosCredentials, tosUploadService } from '../../services/tosUploadService';
import { TTPCredentials, ttpUploadService } from '../../services/ttpUploadService';
import MyModel from '../MyModel';
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
  const uploadFileEl = useRef<HTMLInputElement>(null);
  const [step, setStep] = useState(0);
  const [showError, setShowError] = useState(false);
  const [errorInfo, setErrorInfo] = useState('');
  const [status, setStatus] = useState(0); // 0 成功 1上传中 2审核中 3 审核失败
  const [modelList, setModelList] = useState<any[]>([]);
  const [selectedImages, setSelectedImages] = useState<any[]>([]);
  const [selectedVideos, setSelectedVideos] = useState<any[]>([]);
  const ringRefEl = useRef(null);
  const beautyRefEl = useRef(null);
  useEffect(() => {
    getModelList();
  },[])
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
    console.log('back');
    if (step === 1) {
        setStep(0)
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
    setSelectedVideos([(ringRefEl?.current as any).getFile()])
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
      setSelectedImages([(beautyRefEl?.current as any).getFile()]);
    }
    handleUpload();
    setStep(2);
  }

  const onSkip = () => {
    // 跳过
    handleUpload();
    setStep(2);
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

  // 获取模型列表
  const getModelList = async () => {
    const loginCache: any = getLoginCache();
    const response = await modelAPI.getModelList(loginCache.token, loginCache.userId);
    const dataObj = JSON.parse(response.data);
    if (!(dataObj.code !== 0 || !dataObj.data || dataObj.data.length === 0)) {
      setStep(2);
      setModelList(dataObj.data);
      if (dataObj.data[dataObj.data.length - 1].modelStatus === 4) {
        setStatus(0);
      }
    }
  }
  // 上传
  const handleUpload = async () => {
    try {
      // 获取登录缓存中的用户信息
      const loginCache = getLoginCache();
      if (!loginCache?.token) {
        throw new Error('用户未登录或登录信息缺失');
      }

      console.log('开始上传流程');

      // 初始化模型URL
      let modelPictureUrl = '';
      let modelVideoUrl = '';
      let uploadResults: any[] = [];

      // 处理视频上传
      if (selectedVideos.length > 0) {
        console.log('开始处理视频上传');
        const tokenResponse = await uploadAPI.getUploadVedioToken(loginCache.token);
        if (tokenResponse.ok) {
          const tokenResult = JSON.parse(tokenResponse.data);
          console.log('获取视频上传token成功:', tokenResult);
          
          if (tokenResult.code === 0) {
            console.log('视频token数据结构:', tokenResult);
            console.log('credentials路径:', tokenResult.data?.result?.credentials);
            
            const credentials: TosCredentials = {
              accessKeyId: tokenResult.data.result.credentials.accessKeyId,
              secretAccessKey: tokenResult.data.result.credentials.secretAccessKey,
              sessionToken: tokenResult.data.result.credentials.sessionToken,
              expiredTime: tokenResult.data.result.credentials.expiredTime
            };
            
            console.log('构建的credentials:', credentials);
            
            // 对比视频和图片的凭证差异
            console.log('=== 视频上传凭证信息 ===');
            console.log('accessKeyId:', credentials.accessKeyId);
            console.log('secretAccessKey长度:', credentials.secretAccessKey?.length);
            console.log('sessionToken长度:', credentials.sessionToken?.length);
            console.log('expiredTime:', credentials.expiredTime);
            
            // 检查sessionToken是否包含正确的权限
            if (credentials.sessionToken) {
              try {
                const tokenParts = credentials.sessionToken.split('.');
                if (tokenParts.length >= 2) {
                  const payload = JSON.parse(atob(tokenParts[1]));
                  console.log('视频sessionToken payload:', payload);
                }
              } catch (e) {
                console.log('无法解析视频sessionToken payload');
              }
            }
            
            console.log('初始化TOS客户端用于视频上传');
            tosUploadService.initialize(credentials);
            setStatus(1);
            console.log('开始上传视频文件');
            const videoResults = await tosUploadService.uploadFiles(selectedVideos);
            uploadResults.push(...videoResults);
            
            console.log('视频上传结果:', videoResults);
            setStatus(2);
            // 如果视频上传成功，使用第一个视频的URL
            if (videoResults.length > 0 && videoResults[0].success && videoResults[0].url) {
              modelVideoUrl = videoResults[0].url;
              console.log('设置视频URL:', modelVideoUrl);
            }
          } else {
            setStep(1);
            throw new Error(tokenResult.message || '获取视频上传token失败');
          }
        } else {
          setStep(1);
          throw new Error(`获取视频上传token失败: HTTP ${tokenResponse.status}`);
        }
      }

      // 处理图片上传
      if (selectedImages.length > 0) {
        console.log('开始处理图片上传');
        const tokenResponse = await uploadAPI.getUploadImageToken(loginCache.token);
        
        if (tokenResponse.ok) {
          const tokenResult = JSON.parse(tokenResponse.data);
          console.log('获取图片上传token成功:', tokenResult);
          
          if (tokenResult.code === 0) {
            console.log('图片token数据结构:', tokenResult);
            console.log('tokenResult.data:', tokenResult.data);
            console.log('sessionToken:', tokenResult.data?.sessionToken);
            
            // 检查 sessionToken 是否存在
            if (!tokenResult.data?.sessionToken) {
              throw new Error('获取到的 sessionToken 为空，请检查服务器返回的数据结构');
            }
            
            const credentials: TTPCredentials = {
              stsToken: {
                accessKeyId: tokenResult.data.accessKeyId,
                secretAccessKey: tokenResult.data.secretAccessKey,
                sessionToken: tokenResult.data.sessionToken,
                expiredTime: tokenResult.data.expiredTime
              },
              userId: '1234567890', // 可以根据实际需要设置
              appId: 653371 // 可以根据实际需要设置
            };
            
            console.log('初始化TTP客户端用于图片上传');
            ttpUploadService.initialize(credentials);
            
            console.log('开始上传图片文件');
            const imageResults = await ttpUploadService.uploadFiles(selectedImages);
            uploadResults.push(...imageResults);
            
            console.log('图片上传结果:', imageResults);
            
            // 如果图片上传成功，使用第一个图片的URL
            if (imageResults.length > 0 && imageResults[0].success && imageResults[0].url) {
              modelPictureUrl = imageResults[0].url;
              console.log('设置图片URL:', modelPictureUrl);
            }
          } else {
            throw new Error(tokenResult.message || '获取图片上传token失败');
          }
        } else {
          throw new Error(`获取图片上传token失败: HTTP ${tokenResponse.status}`);
        }
      }
    }  catch (error) {
      console.error('上传失败:', error);
      alert(`上传失败: ${error instanceof Error ? error.message : '未知错误'}`);
    } 
  }

  return (
    <>
    {step === 2 ?
      <MyModel status={status} list={modelList}/>
      :
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
    </div>}
    </>
  );
}

export default CreateModel;
