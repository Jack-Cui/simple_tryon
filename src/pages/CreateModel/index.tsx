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
  const [status, setStatus] = useState(0); // 0 成功 1上传中 2审核中 3 审核失败
  const [modelList, setModelList] = useState<any[]>([]);
  const [selectedImages, setSelectedImages] = useState<any[]>([]);
  const [selectedVideos, setSelectedVideos] = useState<any[]>([]);
  const ringRefEl = useRef(null);
  const beautyRefEl = useRef(null);
  useEffect(() => {
    step === 0 && getModelList();
  },[step])
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

      //update by chao 2025.09.28 修改校验报错问题 直接在点击下一步时，进行校验
      let perHeight = (ringRefEl?.current as any).getPerHeight();
        if (perHeight > 240 || perHeight < 100) {
            setErrorInfo('身高输入异常，请重新输入');
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

  const goBackStep = () => {
    setStep(0);
  }

  const goToBack = () => {
    navigate(-1);
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
        setStatus(0); // 成功
      } else if (dataObj.data[dataObj.data.length - 1].modelStatus === 0) {
        if (dataObj.data[dataObj.data.length - 1].applyStatus === 4) {
          // 审核失败
          setStatus(3); // 失败
        } else {
          setStatus(2); // 审核中
        }
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

      // 检查上传结果
            const failedUploads = uploadResults.filter(result => !result.success);
            if (failedUploads.length > 0) {
              console.error('部分文件上传失败:', failedUploads);
              alert(`部分文件上传失败: ${failedUploads.map(f => f.error).join(', ')}`);
            } else {
              console.log('所有文件上传成功:', uploadResults);
              console.log('模型图片URL:', modelPictureUrl);
              console.log('模型视频URL:', modelVideoUrl);
              
              // 检查是否至少有一个URL
              if (!modelPictureUrl && !modelVideoUrl) {
                alert('上传失败，无法获取文件URL');
                return;
              }
              
              // 调用创建模型API
              console.log('开始创建模型...');
              // const createModelResponse = await modelAPI.createModel(loginCache.token, modelPictureUrl, modelVideoUrl, (ringRefEl?.current as any).getPerHeight());
              //update by chao 2025.09.28 上传视频后报错：获取Cannot read properties of null (reading 'getPerHeight')
              const createModelResponse = await modelAPI.createModel(loginCache.token, modelPictureUrl, modelVideoUrl,185);

              if (createModelResponse.ok) {
                const createResult = JSON.parse(createModelResponse.data);
                console.log('创建模型响应:', createResult);
                
                if (createResult.code === 0) {
                  console.log('创建模型成功:', createResult.data);
                  alert(`模型创建成功！\n图片: ${modelPictureUrl ? '已上传' : '无'}\n视频: ${modelVideoUrl ? '已上传' : '无'}`);
                  
                  // 调用原来的上传回调
                  await onUpload({
                    images: selectedImages,
                    videos: selectedVideos
                  });
                  
                  // 上传成功后清空选择
                  setSelectedImages([]);
                  setSelectedVideos([]);
                } else {
                  console.error('创建模型失败，响应数据:', createResult);
                  const errorMsg = createResult.msg || createResult.message || '创建模型失败';
                  throw new Error(`创建模型失败: ${errorMsg} (code: ${createResult.code})`);
                }
              } else {
                console.error('创建模型HTTP错误:', createModelResponse.status, createModelResponse.data);
                throw new Error(`创建模型失败: HTTP ${createModelResponse.status} - ${createModelResponse.data}`);
              }
            }
    }  catch (error) {
      console.error('上传失败:', error);
      alert(`上传失败: ${error instanceof Error ? error.message : '未知错误'}`);
    } 
  }

  const onUpload = async (files: any) => {

          try {
            // 获取登录缓存中的用户信息
            const loginCache = getLoginCache();
            if (!loginCache?.token || !loginCache?.userId) {
              throw new Error('用户未登录或登录信息缺失');
            }
            
            console.log('上传的图片:', files.images);
            console.log('上传的视频:', files.videos);
            
            // 调用实际的上传接口
            const response = await modelAPI.uploadModelMaterials(
              loginCache.token,
              loginCache.userId,
              files
            );
            
            if (response.ok) {
              const result = JSON.parse(response.data);
              if (result.code === 0) {
                console.log('上传成功:', result.data);
                // alert(`模型素材上传成功！\n模型ID: ${result.data.model_id}\n处理状态: ${result.data.processing_status}`);
              } else {
                throw new Error(result.message || '上传失败');
              }
            } else {
              throw new Error(`上传失败: HTTP ${response.status}`);
            }
          } catch (error) {
            console.error('上传失败:', error);
            // alert(`上传失败: ${error instanceof Error ? error.message : '未知错误'}`);
          }
  }

  return (
    <>
    {step === 2 ?
      <MyModel status={status} list={modelList} backStep={goBackStep} handleBack={goToBack}/>
      :
      <div className="create-Model">
      <Navbar className='create-Model-navbar' fixed={false} leftArrow onLeftClick={handleClick}>{step === 0 ? '创建模型' : '3D美颜'}</Navbar>
      <div className='content'>
        <UploadFile isHide={!(step === 0)} ref={ringRefEl} isRing title="上传环拍视频"  info={infoList1}/>
        <UploadFile isHide={!(step === 1)}  ref={beautyRefEl} is3DBeauty title="上传清晰正面美颜照"  info={infoList2}/>
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
