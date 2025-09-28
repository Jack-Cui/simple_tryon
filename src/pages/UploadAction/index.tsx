
import { Button, Navbar } from "tdesign-mobile-react";
import UploadFile from "../../components/uploadFile";
import './index.css';
import { useEffect, useRef, useState } from "react";
import ErrorToast from "../../components/errorToast";
import MyAction from "../MyAction";
import { getLoginCache } from "../../utils/loginCache";
import { uploadAPI } from "../../services/api";
import { TosCredentials, tosUploadService } from "../../services/tosUploadService";
import { useNavigate } from "react-router-dom";
const infoList1 = [
  '1.光线与背景：光线明亮均匀，背景简洁非纯白；避免镜面反光和他人入镜。',
  '2.形象与着装：露额耳，无刘海，不戴眼镜饰品；穿贴身无装饰背心短裤，赤脚。',
  '3.设备与距离：后摄4K60帧；距人0.7–1米稳定绕行；相机始终与拍摄部位同高。',
  '4.拍摄流程：双脚分开站立，双臂侧举与腿成45°；45–60秒转4圈，顺序拍头→胸→臀腿→腿脚；最后拉远全身结束。'
];
const UploadAction = () => {
  const personRefEl = useRef(null);
  const [step, setStep] = useState(0);
  const [showError, setShowError] = useState(false);
  const [errorInfo, setErrorInfo] = useState('');
  const [status, setStatus] = useState(0); // 0 成功 1上传中 2审核中 3 审核失败
  const [actionList, setActionList] = useState<any[]>([]);
  const [selectedActionVideos, setSelectedActionVideos] = useState<any[]>([]);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  }
  const goToBack = () => {
    (actionList.length === 4 && status > 0) || actionList.length === 5 ? navigate(-1) : setStep(0);
  }
  useEffect(() => {
    getActionList();
  }, [])

  // 动作视频
  const onConfrim = () => {
    if (personRefEl?.current) {
      if (!(personRefEl?.current as any).getFile()) {
        setErrorInfo('请上传个人视频');
        setShowError(true);
        return;
      }
      setSelectedActionVideos([(personRefEl?.current as any).getFile()]);
    }
  }
  
  const createAction = () => {
    setStep(0);
  }

  useEffect(() => {
    if (selectedActionVideos.length > 0) {
      handleActionVideoUpload();
      setStep(1);
    }
  }, [selectedActionVideos])

  const handleActionVideoUpload = async () => {
    try {
      const loginCache = getLoginCache();
      if (!loginCache?.token) {
        throw new Error('用户未登录或登录信息缺失');
      }

      console.log('开始动作视频上传流程，视频数量:', selectedActionVideos.length);

      // 处理动作视频上传
      console.log('开始处理动作视频上传');
      const tokenResponse = await uploadAPI.getUploadVedioToken(loginCache.token);

      if (tokenResponse.ok) {
        const tokenResult = JSON.parse(tokenResponse.data);
        console.log('获取动作视频上传token成功:', tokenResult);

        if (tokenResult.code === 0) {
          console.log('动作视频token数据结构:', tokenResult);

          const credentials: TosCredentials = {
            accessKeyId: tokenResult.data.result.credentials.accessKeyId,
            secretAccessKey: tokenResult.data.result.credentials.secretAccessKey,
            sessionToken: tokenResult.data.result.credentials.sessionToken,
            expiredTime: tokenResult.data.result.credentials.expiredTime
          };

          console.log('初始化TOS客户端用于动作视频上传');
          tosUploadService.initialize(credentials);
          setStatus(1);
          console.log('开始上传动作视频文件');
          const videoResults = await tosUploadService.uploadFiles(selectedActionVideos);

          console.log('动作视频上传结果:', videoResults);

          // 检查上传结果
          const failedUploads = videoResults.filter(result => !result.success);
          if (failedUploads.length > 0) {
            console.error('部分动作视频上传失败:', failedUploads);
            alert(`部分动作视频上传失败: ${failedUploads.map(f => f.error).join(', ')}`);
            return;
          }
          // 上传成功后，调用 uploadActionVideo API
          const successfulUploads = videoResults.filter((result: any) => result.success);
          console.log('成功上传的动作视频:', successfulUploads);

          for (const uploadResult of successfulUploads) {
            if (uploadResult.url) {
              console.log('开始调用 uploadActionVideo API，视频URL:', uploadResult.url);

              // 使用文件名作为动作名称
              const actionName = selectedActionVideos.find(file =>
                file.name.includes(uploadResult.key || '')
              )?.name || '动作视频';

              const uploadActionResponse = await uploadAPI.uploadActionVideo(
                loginCache.token,
                (personRefEl?.current as any).getPerActionName(), // 动作名称
                uploadResult.url
              );

              if (uploadActionResponse.ok) {
                const uploadActionResult = JSON.parse(uploadActionResponse.data);
                console.log('uploadActionVideo API响应:', uploadActionResult);
                if (uploadActionResult.code === 0) {
                setStatus(2);
                  console.log('动作视频上传API调用成功');
                } else {
                  console.error('动作视频上传API调用失败:', uploadActionResult.message);
                  alert(`动作视频上传失败: ${uploadActionResult.message}`);
                }
              } else {
                console.error('动作视频上传API HTTP错误:', uploadActionResponse.status);
                alert(`动作视频上传失败: HTTP ${uploadActionResponse.status}`);
              }
            }
          }

          // 显示成功消息
          alert(`动作视频上传成功！\n成功上传: ${successfulUploads.length} 个文件`);

          // 上传成功后清空选择
          setSelectedActionVideos([]);

        } else {
          throw new Error(tokenResult.message || '获取动作视频上传token失败');
        }
      } else {
        throw new Error(`获取动作视频上传token失败: HTTP ${tokenResponse.status}`);
      }
    } catch (error) {
      console.error('动作视频上传失败:', error);
      alert(`动作视频上传失败: ${error instanceof Error ? error.message : '未知错误'}`);
    }
  }

  const getActionList = async () => {
    const loginCache: any = getLoginCache();
    const resultResponse = await uploadAPI.getActionVideoResult(loginCache.token, 1, 10);
    if (resultResponse.ok) {
      const resultData = JSON.parse(resultResponse.data);
      console.log('动作视频结果:', resultData);
      
      if (resultData.code === 0) {
        setActionList(resultData.data?.records || []);
        if ((resultData.data?.records || []).length === 5) {
          setStep(1);
          setStatus(NaN);
        }
        console.log('动作视频结果获取成功:', resultData.data?.records);
      } else {
        console.warn('获取动作视频结果失败:', resultData.message);
      }
    } else {
      console.warn('获取动作视频结果HTTP错误:', resultResponse.status);
    }
  }

  return (
    <>
      {step === 1 ?
        <MyAction status={status} list={actionList} setStep={createAction} upDateList={getActionList} handleBack={goToBack}/>
        :
        <div className="upload-action">
          <Navbar className='upload-action-navbar' fixed={false} leftArrow onLeftClick={handleClick}>上传个人视频</Navbar>
          <div className='content'>
            <UploadFile ref={personRefEl} isPersonal title="请上传个人视频" info={infoList1} />
          </div>
          <div className='upload-action-btn'>
            <Button size="large" theme="light" block shape="round" style={{ border: 0, background: 'linear-gradient(90deg, #27DC9A 0%, #02DABF 100%)', color: '#fff' }} onClick={onConfrim}>确认上传</Button>
          </div>
          <ErrorToast info={errorInfo} visible={showError} onClick={() => setShowError(false)} />
        </div>
      }
    </>
  )
}
export default UploadAction;