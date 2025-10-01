import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './index.css';
import { tryonService } from '../../services/tryonService';
import { rtcVideoService } from '../../services/rtcVideoService';
import { RTCVideoConfig } from '../../services/rtcVideoService';
import { webSocketService } from '../../services/websocketService';
import { wechatShareService } from '../../services/wechatShareService';
import { getLoginCache, clearLoginCache } from '../../utils/loginCache';
import { getCoCreationId, getCoCreationIdWithUrlPriority, isValidCoCreationId, showCoCreationIdError, clearCoCreationIdCache } from '../../utils/coCreationIdHelper';
import { ClothesItem } from '../../types/api';
import { WECHAT_CONFIG } from '../../config/config';
import * as proto from '../../proto/xproto';
import { rtcMessageHandler } from '../../services/rtcMessageHandler';
// 导入图片
import actionIcon from '../../assets/动作.png';
import balletIcon from '../../assets/芭蕾.png';
import dressIcon from '../../assets/连衣裙.png';
import coatIcon from '../../assets/外套.png';
import suitIcon from '../../assets/套装.png';
import skirtIcon from '../../assets/裙子.png';
import hatIcon from '../../assets/帽子.png';
import topIcon from '../../assets/上衣.png';
import socksIcon from '../../assets/袜子.png';
import pantsIcon from '../../assets/下装.png';
import shoesIcon from '../../assets/鞋子.png';
// import shareIcon from '../../assets/相机.png';
// import shareCoverImage from '../../assets/分享封面.png';
// import realSceneIcon from '../../assets/实景.png';
// import heatMapIcon from '../../assets/松紧热图片.png';
import { apiService, authAPI } from '../../services/api';
import DownloadAppModal from '../../components/DownloadAppModal';
// import FixedDownloadPrompt from '../../components/FixedDownloadPrompt';
import ShareModal from '../../components/ShareModal';
import CreateModelModal from '../../components/CreateModelModal';
import ReactHowler from 'react-howler';
import HomeOpt from '../../components/HomeOpt';
import { useLoginScene } from '../../contexts/LoginSceneContext';
import BrowseHistory from '../BrowseHistory';
import UploadAction from '../UploadAction';
import CreateModel from '../CreateModel';
import SubscribePackage from '../SubscribePackage';

const Long = require('long');
// add by chao 2025.09.30 增加日志开关
const isHotMapLog = false;
const isVideoPlayLog = false;
const isDeductLog = false;
const isRtcLog = false;

//add by chao 2025.09.29 增加路由监听事件
let locRouteNum = 0;
console.log('性能调优 a1.0.0：' + new Date().toLocaleString() +' '+ performance.now() )
const MyContext = React.createContext({});

const HomeVideo = (props: {goToPage?: (str: string) => void;}) => {
  const location = useLocation();

//add by chao 2025.09.29 增加路由监听事件
  // useEffect(() => {    
  //   console.log('locRouteNum:' + locRouteNum);
  //   console.log('location： ' + location.pathname);
  //   if (location.pathname === '/') {
  //     // console.log('返回主页面');      
  //     if(locRouteNum>0){
  //       const loginCache = getLoginCache();
  //       console.log('getLoginCache:', getLoginCache());
  //       console.log('locationState:', locationState);
  //       //重新执行登台操作
  //       // tryonInitializedRef.current = false;

  //     if (!loginCache) {
  //       alert("缓存失效")
  //       return;
  //     }
  //     // setLoginParams({
  //     //   token: loginCache.token,
  //     //   userId: loginCache.userId,
  //     //   tenantId: loginCache.tenantId,
  //     //   roomId: loginCache.roomId,
  //     //   coCreationId: loginCache.coCreationId,
  //     //   shareScene: loginCache.shareScene,
  //     // });

  //       console.log('🏠 Home组件登录参数更新:', loginParams);
  //       startUpDressUp();
  //     }
  //     locRouteNum = locRouteNum + 1;      
  //   }
  // }, [location]);  

  const navigate = useNavigate();
  const locationState = location.state || {};
  const { loginScene } = useLoginScene();
  const hasStartedTryon = useRef(false);
  const [videoStreams, setVideoStreams] = useState<Array<{ userId: string, domId: string }>>([]);
  const [videoPlayingStatus, setVideoPlayingStatus] = useState<{ [key: string]: boolean }>({});
  const [showSelectionScreen, setShowSelectionScreen] = useState(true); // 新增状态控制显示选择界面
  const [roomName, setRoomName] = useState<string>('PADA2024秀款礼服系列'); // 添加房间名称状态，默认值为原来的文本

  // 触摸事件相关状态
  const [isDragging, setIsDragging] = useState(false);
  const [lastTouchPos, setLastTouchPos] = useState<{ x: number, y: number } | null>(null);
  const [touchStartTime, setTouchStartTime] = useState<number>(0); // 触摸开始时间
  const [isProcessingClick, setIsProcessingClick] = useState(false); // 是否正在处理点击

  // 缩放事件相关状态
  const [initialDistance, setInitialDistance] = useState<number | null>(null);
  const [lastScaleDistance, setLastScaleDistance] = useState<number | null>(null);

  // 视频暂停状态
  const [isVideoPaused, setIsVideoPaused] = useState(false);
  const [clothesList, setClothesList] = useState<ClothesItem[]>([]); // 添加服饰列表状态
  const [loginParams, setLoginParams] = useState<{
    token: string;
    userId: string;
    // phone: string;
    tenantId: string;
    coCreationId: string;
    roomId: string;
    shareScene: string;
  } | null>(null);

  // 新增状态：服装浏览相关
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null); // 当前选中的分类
  const [isBrowsingClothes, setIsBrowsingClothes] = useState(false); // 是否在浏览具体服装
  const [selectedClothesIndex, setSelectedClothesIndex] = useState(0); // 选中的服装索引（用于顶部显示）

  // 新增状态：动作和实景展开相关
  const [isActionExpanded, setIsActionExpanded] = useState(false); // 动作是否展开
  const [isRealSceneExpanded, setIsRealSceneExpanded] = useState(false); // 实景是否展开
  const [selectedActionIndex, setSelectedActionIndex] = useState(0); // 当前选中的动作索引（0: 动作.png, 1: 芭蕾.png）
  const [selectedRealSceneIndex, setSelectedRealSceneIndex] = useState(0); // 当前选中的实景索引
  const [isHeatMapEnabled, setIsHeatMapEnabled] = useState(false); // 热力图开关状态

  const [isMoveExpanded, setIsMoveExpanded] = useState(false); // 是否展开
  const [selectedMoveIndex, setSelectedMoveIndex] = useState(NaN); // 当前选中的更多索引（0: 动作.png, 1: 芭蕾.png）

  // 新增状态：视频播放界面的图标控制
  const [showVideoIcons, setShowVideoIcons] = useState(true); // 视频播放时是否显示左右侧图标 - 常驻显示
  const [iconHideTimer, setIconHideTimer] = useState<NodeJS.Timeout | null>(null); // 图标自动隐藏定时器

  // 新增状态：微信分享相关
  const [isWechatShareReady, setIsWechatShareReady] = useState(false); // 微信分享是否已准备好
  const [showShareTip, setShowShareTip] = useState(false); // 是否显示分享提示
  const [shareTipMessage, setShareTipMessage] = useState(''); // 分享提示消息
  const [shareTipType, setShareTipType] = useState(''); // 分享提示类型

  // 分享弹窗状态
  const [showShareModal, setShowShareModal] = useState(false);

  // 新增状态：用户是否已离开过舞台
  const [hasLeftStage, setHasLeftStage] = useState(false);

  // 余额弹窗状态
  const [showBalanceModal, setShowBalanceModal] = useState(false);

  // 创建模型弹窗状态
  const [showCreateModelModal, setShowCreateModelModal] = useState(false);



  // 定时扣费相关状态
  const [isVideoPlaying, setIsVideoPlaying] = useState(false); // 视频是否正在播放
  const [videoPlayTime, setVideoPlayTime] = useState(0); // 视频播放时间（秒）
  const deductionTimerRef = useRef<NodeJS.Timeout | null>(null); // 扣费定时器
  const playTimeTimerRef = useRef<NodeJS.Timeout | null>(null); // 播放时间计时器

  const [musicUrl, setMusicUrl] = useState('https://admins3.tos-cn-shanghai.volces.com/25dcee31d9034129bffc2e52518a5f19.mp3');
  const [musicPlay, setMusicPlay] = useState(true);
  const [currentSceneName, setCurrentSceneName] = useState<string>('教堂'); // 当前场景名称

  // 新增状态：右侧顶部图片
  const [lastSelectedClothes, setLastSelectedClothes] = useState<ClothesItem | null>(null);

  const homeOptEl = useRef(null);

  // 获取当前视频流的video/canvas元素
  const getCurrentVideoElement = (): HTMLVideoElement | HTMLCanvasElement | null => {
    if (videoStreams.length > 0) {
      const domId = videoStreams[0].domId;
      const videoElement = document.getElementById(domId);
      if (videoElement) {
        // 优先video标签，其次canvas
        const videoTag = videoElement.querySelector('video') as HTMLVideoElement | null;
        if (videoTag) {
          return videoTag;
        }
        const canvasTag = videoElement.querySelector('canvas') as HTMLCanvasElement | null;
        if (canvasTag) {
          return canvasTag;
        }
      }
    }

    // 如果找不到视频流，尝试从所有video元素中获取
    const allVideos = document.querySelectorAll('video');
    for (const video of allVideos) {
      if (video.srcObject instanceof MediaStream) {
        return video;
      }
    }

    // 尝试从所有canvas元素中获取
    const allCanvases = document.querySelectorAll('canvas');
    for (const canvas of allCanvases) {
      if (canvas.width > 0 && canvas.height > 0) {
        return canvas;
      }
    }

    return null;
  };



  useEffect(() => {
    if (loginParams?.token) {
      let intervalId: NodeJS.Timeout;

      const checkLoginStatus = async () => {
        try {
          const response = await authAPI.checkLogin(loginParams?.token);
          const parsed = authAPI.parseCheckLoginResponse(response);

          if (parsed?.status === 424) {
            console.log('账号在其他地方登录');
            // 立即清理定时器，防止重复弹窗
            if (intervalId) {
              clearInterval(intervalId);
            }
            alert('账号在其他地方登录，请重新登录');

            // //Update by chao 2025.09.29
            // window.close();
            // 在H5页面中，当需要返回时
            // wx.miniProgram.postMessage({ data: { action: 'back' } });
            window.location.href = 'blank.html';
            // window.location.href = '/login';
            return; // 提前返回，不执行后续代码
          } else {
            // //Update by chao 2025.09.27
            // window.close();
            // console.log('账号未在其他地方登录')
          }
        } catch (error) {
          console.error('检查登录状态失败:', error);
        }
      };
      // Initial check
      checkLoginStatus();

      // Set up interval for periodic checks
      intervalId = setInterval(checkLoginStatus, 5000);

      // Cleanup interval on unmount
      return () => {
        if (intervalId) {
          clearInterval(intervalId);
        }
      };
    }


  }, [loginParams?.token]);



  // 服饰分类名称映射到图标
  const getClothesIcon = (classifyName: string) => {
    const iconMap: { [key: string]: string } = {
      '套装': suitIcon,
      '裙子': skirtIcon,
      '帽子': hatIcon,
      '上衣': topIcon,
      '袜子': socksIcon,
      '外套': coatIcon,
      '下装': pantsIcon,
      '鞋子': shoesIcon,
      '连衣裙': dressIcon,
    };
    return iconMap[classifyName] || topIcon; // 默认使用上衣图标
  };

  // 获取分类ID
  const getClassifyId = (classifyName: string): number => {
    const classifyIdMap: { [key: string]: number } = {
      '上衣': 1,
      '下装': 2,
      '外套': 3,
      '套装': 4,
      '帽子': 5,
      '鞋子': 6,
      '裙子': 7,
      '袜子': 8,
      '连衣裙': 9,
    };
    return classifyIdMap[classifyName] || 1; // 默认返回上衣ID
  };

  // 发送更换服装RTC请求
  const sendChangeGarmentRequest = async (clothesItemInfoList: any[], isClothesSuit: boolean) => {
    try {
      console.log('👕 准备发送更换服装RTC请求:', {
        clothesItemInfoList: clothesItemInfoList,
        isClothesSuit: isClothesSuit
      });

      // 检查RTC连接状态
      if (!rtcVideoService.getConnectionStatus()) {
        console.error('❌ RTC未连接，无法发送更换服装请求');
        return;
      }

      // 构建服装参数
      const garment1Id = clothesItemInfoList.length >= 1 ? clothesItemInfoList[0].clothesId : 0;
      const garment2Id = clothesItemInfoList.length >= 2 ? clothesItemInfoList[1].clothesId : 0;
      const garment3Id = clothesItemInfoList.length >= 3 ? clothesItemInfoList[2].clothesId : 0;
      const garment1Size = 4; // 默认尺寸，实际应该从服务器获取
      const garment2Size = garment2Id > 0 ? 4 : 1; // 默认尺寸，实际应该从服务器获取
      const garment3Size = garment3Id > 0 ? 4 : 1; // 默认尺寸，实际应该从服务器获取

      console.log('👕 构建的服装参数:', {
        garment1Id, garment2Id, garment3Id,
        garment1Size, garment2Size, garment3Size
      });

      // 发送更换服装消息
      rtcVideoService.sendChangeGarment(garment1Id, garment2Id, garment3Id, garment1Size, garment2Size, garment3Size);

      console.log('✅ 更换服装RTC消息发送成功');

    } catch (error) {
      console.error('❌ 发送更换服装RTC消息失败:', error);
    }
  };

  // 处理衣服管理逻辑
  const handleClothesManagement = async (clothesItem: any) => {
    const classifyId = selectedClassifyId || getClassifyId(clothesItem.classifyName);
    const clothesId = clothesItem.clothesId;

    console.log('👕 开始处理衣服管理逻辑:', {
      classifyId: classifyId,
      clothesId: clothesId,
      classifyName: clothesItem.classifyName,
      suitIds: clothesItem.suitIds
    });

    let newClothesItemInfoList: any[] = [];
    let newMClothesSuit = false;

    if (classifyId === 4) {
      // 套装
      newMClothesSuit = true;

      // 处理套装逻辑
      const suitIds = clothesItem.suitIds || '';
      const arr = suitIds.split(',');

      if (suitIds === '' || arr.length === 0) {
        const item = {
          classifyId: classifyId,
          clothesId: clothesId
        };
        newClothesItemInfoList.push(item);
      } else {
        for (let i = 0; i < arr.length; ++i) {
          // const longValue = BigInt(arr[i]);
          const longValue = Long.fromString(arr[i]);
          const item = {
            classifyId: classifyId,
            clothesId: longValue
          };
          newClothesItemInfoList.push(item);
        }
      }

      console.log('👕 套装处理完成:', newClothesItemInfoList);

    } else {
      // 非套装
      if (mClothesSuit) {
        // 之前是套装
        newMClothesSuit = false;

        const item = {
          classifyId: classifyId,
          clothesId: clothesId
        };
        newClothesItemInfoList.push(item);

        console.log('👕 从套装切换到非套装:', newClothesItemInfoList);

      } else {
        // 之前不是套装
        newClothesItemInfoList = [...mClothesItemInfoList];

        // 1. 删除存储的同类型衣服
        for (let i = newClothesItemInfoList.length - 1; i >= 0; --i) {
          const item = newClothesItemInfoList[i];
          if (item.classifyId === classifyId) {
            newClothesItemInfoList.splice(i, 1);
          }
        }

        // 2. 特殊处理
        // 穿裙子 脱下上下衣
        if (classifyId === 7) {
          for (let i = newClothesItemInfoList.length - 1; i >= 0; --i) {
            const item = newClothesItemInfoList[i];
            if (item.classifyId === 1 || item.classifyId === 2) {
              newClothesItemInfoList.splice(i, 1);
            }
          }
        }

        // 穿上下衣 脱下裙子
        if (classifyId === 1 || classifyId === 2) {
          for (let i = newClothesItemInfoList.length - 1; i >= 0; --i) {
            const item = newClothesItemInfoList[i];
            if (item.classifyId === 7) {
              newClothesItemInfoList.splice(i, 1);
            }
          }
        }

        let index = -1;
        for (let i = 0; i < newClothesItemInfoList.length; ++i) {
          const item = newClothesItemInfoList[i];
          if (classifyId === item.classifyId) {
            item.clothesId = clothesId;
            newClothesItemInfoList[i] = item;
            index = i;
          }
        }

        if (newClothesItemInfoList.length >= 3) {
          newClothesItemInfoList.splice(0, 1);
        }

        const cii = {
          classifyId: classifyId,
          clothesId: clothesId
        };
        newClothesItemInfoList.push(cii);

        console.log('👕 非套装处理完成:', newClothesItemInfoList);
      }
    }

    // 更新状态
    setMClothesSuit(newMClothesSuit);
    setMClothesItemInfoList(newClothesItemInfoList);

    // 发送RTC请求，直接传递最新的数据
    await sendChangeGarmentRequest(newClothesItemInfoList, newMClothesSuit);
  };

  // 动作图标数组
  const actionIcons = [
    { icon: actionIcon, name: '情侣笔芯' },
    { icon: balletIcon, name: '芭蕾' }
  ];

  // 默认动作图标（未展开时显示）
  const defaultActionIcon = { icon: actionIcon, name: '动作' };

  // 动作图标数组
  const moveIcons = [
    { icon: actionIcon, name: '去建模' },
    { icon: balletIcon, name: '上传动作视频' }
  ];

  // 默认动作图标（未展开时显示）
  const defaultMoveIcon = { icon: actionIcon, name: '更多' };

  // 实景图标数组，对应不同的地图 - 动态从服务器获取
  const [realSceneIcons, setRealSceneIcons] = useState<Array<{ icon: string, name: string, mapName: string }>>([
  ]);

  // 衣服管理相关状态
  const [mClothesItemInfoList, setMClothesItemInfoList] = useState<any[]>([]);
  const [mClothesSuit, setMClothesSuit] = useState<boolean>(false);
  const [selectedClassifyId, setSelectedClassifyId] = useState<number | null>(null);

  // 处理动作图标点击
  const handleActionClick = (index?: number) => {
    if (index === undefined) {
      // 点击主动作图标，切换展开/收起状态
      setIsActionExpanded(!isActionExpanded);
      // 收起实景展开状态
      setIsRealSceneExpanded(false);
    } else {
      // 点击具体的动作，更新选中状态和主图标，然后自动收起
      setSelectedActionIndex(index);
      setIsActionExpanded(false); // 自动收起
      console.log('选中动作:', actionIcons[index].name);
    }
  };

  // update by chao 2025.10.01 注释热力图
  // // 处理热力图图标点击
  // const handleHeatMapClick = async () => {
  //   if(isHotMapLog){
  //     console.log('🔥 111热力图图标被点击，当前状态:', isHeatMapEnabled);
  //   }
  //   // 切换热力图开关状态
  //   const newHeatMapState = !isHeatMapEnabled;
  //   setIsHeatMapEnabled(newHeatMapState);

  //   // 检查RTC连接状态
  //   if(isHotMapLog){
  //     if (!rtcVideoService.getConnectionStatus()) {
  //       console.error('❌ RTC未连接，无法发送热力图请求1');
  //       console.log('🔍 RTC连接状态检查失败，可能需要等待RTC初始化完成');
  //       console.log('💡 提示：请确保已完成登台流程，RTC服务已启动');
  //       console.log('🔧 调试信息：');
  //       console.log('  - showSelectionScreen:', showSelectionScreen);
  //       console.log('  - hasStartedTryon.current:', hasStartedTryon.current);
  //       console.log('  - RTC SDK版本:', rtcVideoService.getSDKVersion());
  //       console.log('  - RTC连接状态:', rtcVideoService.getConnectionStatus());
  //       return;
  //     }
  //   }
  //   // 检查是否在视频播放状态（已登台）
  //   if (showSelectionScreen) {
  //     console.error('❌ 未在视频播放状态，无法发送热力图请求');
  //     return;
  //   }

  //   // 发送热力图RTC消息
  //   try {
  //     if(isHotMapLog){
  //       console.log('🚀 开始发送热力图RTC消息...', newHeatMapState);
  //     }      
  //     rtcVideoService.sendHeatMap(newHeatMapState);
  //     if(isHotMapLog){
  //       console.log('✅ 热力图RTC消息已发送:', newHeatMapState);
  //     }
  //   } catch (error) {
  //     console.error('❌ 发送热力图RTC消息失败:', error);
  //     // 显示错误提示
  //     alert(`热力图操作失败: ${error instanceof Error ? error.message : String(error)}`);
  //   }
  // };


  const handleActionModelClick = (msg: any) => {
    console.log('选中动作11111', msg);
  }

  const toPage = (type: string) => {
      props?.goToPage && props.goToPage(type)
  }

  const handleHotClick = (flag: boolean) => {
    if(isHotMapLog){
      console.log('🔥 111热力图图标被点击，当前状态:', isHeatMapEnabled);
    }
    // 切换热力图开关状态
    const newHeatMapState = flag;
    setIsHeatMapEnabled(newHeatMapState);

    // 检查RTC连接状态
    if (!rtcVideoService.getConnectionStatus()) {
      console.error('❌ RTC未连接，无法发送热力图请求2');
      // console.log('🔍 RTC连接状态检查失败，可能需要等待RTC初始化完成');
      // console.log('💡 提示：请确保已完成登台流程，RTC服务已启动');
      // console.log('🔧 调试信息：');
      // console.log('  - showSelectionScreen:', showSelectionScreen);
      // console.log('  - hasStartedTryon.current:', hasStartedTryon.current);
      // console.log('  - RTC SDK版本:', rtcVideoService.getSDKVersion());
      // console.log('  - RTC连接状态:', rtcVideoService.getConnectionStatus());
      return;
    }

    // 检查是否在视频播放状态（已登台）
    if (showSelectionScreen) {
      console.error('❌ 未在视频播放状态，无法发送热力图请求');
      return;
    }

    // 发送热力图RTC消息
    try {
      if(isHotMapLog){
        console.log('🚀 开始发送热力图RTC消息...', newHeatMapState);
      }
      rtcVideoService.sendHeatMap(newHeatMapState);
      if(isHotMapLog){
        console.log('✅ 热力图RTC消息已发送:', newHeatMapState);
      }
    } catch (error) {
      console.error('❌ 发送热力图RTC消息失败:', error);
      // 显示错误提示
      alert(`热力图操作失败: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  // // 处理实景图标点击
  // const handleRealSceneClick = async (index?: number) => {
  //   if (index === undefined) {
  //     // 点击主实景图标，切换展开/收起状态
  //     setIsRealSceneExpanded(!isRealSceneExpanded);
  //     // 收起动作展开状态
  //     setIsActionExpanded(false);
  //   } else {
  //     // 点击具体的实景，更新选中状态和主图标，然后自动收起
  //     setSelectedRealSceneIndex(index);
  //     setIsRealSceneExpanded(false); // 自动收起

  //     const selectedScene = realSceneIcons[index];
  //     console.log('选中实景:', selectedScene.name, '地图名称:', selectedScene.mapName);

  //     // 切换场景音乐
  //     switchSceneMusic(selectedScene.name);
  //     if(isVideoPlayLog){
  //       // 检查RTC连接状态
  //       if (!rtcVideoService.getConnectionStatus()) {
  //         console.error('❌ RTC未连接，无法切换地图');
  //         console.log('🔍 RTC连接状态检查失败，可能需要等待RTC初始化完成');
  //         console.log('💡 提示：请确保已完成登台流程，RTC服务已启动');
  //         console.log('🔧 调试信息：');
  //         console.log('  - showSelectionScreen:', showSelectionScreen);
  //         console.log('  - hasStartedTryon.current:', hasStartedTryon.current);
  //         console.log('  - RTC SDK版本:', rtcVideoService.getSDKVersion());
  //         console.log('  - RTC连接状态:', rtcVideoService.getConnectionStatus());
  //         return;
  //       }
  //     }
  //     // 检查是否在视频播放状态（已登台）
  //     if (showSelectionScreen) {
  //       console.error('❌ 未在视频播放状态，无法切换地图');
  //       return;
  //     }

  //     // 发送切换地图的RTC消息
  //     try {
  //       console.log('🚀 开始发送切换地图RTC消息...');
  //       rtcVideoService.sendChangeMap(selectedScene.mapName);
  //       console.log('✅ 切换地图RTC消息已发送:', selectedScene.mapName);
  //     } catch (error) {
  //       console.error('❌ 发送切换地图RTC消息失败:', error);
  //       // 显示错误提示
  //       alert(`切换地图失败: ${error instanceof Error ? error.message : String(error)}`);
  //     }
  //   }
  // };

  // // 获取分类的实际图标URL（优先使用服务器返回的classifyUrl）
  // const getCategoryIcon = (classifyName: string): string => {
  //   // const categoryItem = clothesList.find(item => item.classifyName === classifyName);
  //   // // 优先使用服务器返回的classifyUrl，如果没有则使用本地图标
  //   // return categoryItem?.classifyUrl || getClothesIcon(classifyName);
  //   return getClothesIcon(classifyName);
  // };

  // 根据场景名称获取对应的BGM
  const getBGMBySceneName = (sceneName: string): string => {
    const cachedLoginData = getLoginCache();
    if (cachedLoginData && cachedLoginData.scenesList) {
      const sceneEntry = Object.entries(cachedLoginData.scenesList).find(([id, scene]) => scene.name === sceneName);
      if (sceneEntry && sceneEntry[1].bgm) {
        return sceneEntry[1].bgm;
      }
    }
    // 默认BGM
    return 'https://admins3.tos-cn-shanghai.volces.com/25dcee31d9034129bffc2e52518a5f19.mp3';
  };

  // 切换场景音乐
  const switchSceneMusic = (sceneName: string) => {
    const newBGM = getBGMBySceneName(sceneName);
    if (newBGM !== musicUrl) {
      setMusicUrl(newBGM);
      setCurrentSceneName(sceneName);
      console.log('🎵 切换场景音乐:', sceneName, 'BGM:', newBGM);
    }
  };

  // // 获取第一个分类的第一个服装（用于顶部显示）
  // const getFirstClothesOfFirstCategory = (): any | null => {
  //   if (clothesList.length === 0) return null;

  //   const firstCategory = getUniqueCategories()[0];
  //   if (!firstCategory) return null;

  //   const firstCategoryClothes = getClothesForCategory(firstCategory);
  //   return firstCategoryClothes.length > 0 ? firstCategoryClothes[0] : null;
  // };

  // // 获取当前应该在顶部显示的服装
  // const getCurrentDisplayClothes = (): any | null => {
  //   console.log('🔍 getCurrentDisplayClothes 被调用');
  //   console.log('🔍 lastSelectedClothes:', lastSelectedClothes);
  //   console.log('🔍 isBrowsingClothes:', isBrowsingClothes);
  //   console.log('🔍 selectedCategory:', selectedCategory);
  //   console.log('🔍 selectedClothesIndex:', selectedClothesIndex);

  //   // 优先显示从房间信息获取的衣服
  //   if (lastSelectedClothes) {
  //     console.log('✅ 返回从房间信息获取的衣服:', lastSelectedClothes);
  //     // 确保返回的衣服对象有正确的图片字段
  //     const normalizedClothes = {
  //       ...lastSelectedClothes,
  //       clothesImageUrl: lastSelectedClothes.clothesImageUrl || lastSelectedClothes.image || '',
  //       clothesName: lastSelectedClothes.clothesName || lastSelectedClothes.name || '',
  //       classifyName: lastSelectedClothes.classifyName || lastSelectedClothes.type || ''
  //     };
  //     console.log('✅ 标准化后的衣服对象:', normalizedClothes);
  //     return normalizedClothes;
  //   }

  //   // 如果正在浏览某个分类，显示选中的服装
  //   if (isBrowsingClothes && selectedCategory) {
  //     const categoryClothes = getClothesForCategory(selectedCategory);
  //     const result = categoryClothes.length > selectedClothesIndex ? categoryClothes[selectedClothesIndex] : null;
  //     console.log('✅ 返回分类中选中的衣服:', result);
  //     return result;
  //   }

  //   // 否则显示第一个分类的第一个服装
  //   const result = getFirstClothesOfFirstCategory();
  //   console.log('✅ 返回第一个分类的第一个衣服:', result);
  //   return result;
  // };

  // // 获取某个分类下的所有服装（从clothesItems中获取）
  // const getClothesForCategory = (category: string): any[] => {
  //   const categoryItem = clothesList.find(item => item.classifyName === category);
  //   return categoryItem?.clothesItems || [];
  // };

  // // 获取所有分类
  // const getUniqueCategories = (): string[] => {
  //   return clothesList.map(item => item.classifyName);
  // };

  // // 处理分类点击
  // const handleCategoryClick = (category: string) => {
  //   setSelectedCategory(category);
  //   setIsBrowsingClothes(true);

  //   // 设置当前选中的分类ID
  //   const classifyId = getClassifyId(category);
  //   setSelectedClassifyId(classifyId);

  //   // 调试：打印分类下的服装数量
  //   const categoryClothes = getClothesForCategory(category);
  //   console.log(`分类 "${category}" 下的服装数量:`, categoryClothes.length);
  //   console.log(`分类 "${category}" 下的服装列表:`, categoryClothes.slice(0, 3)); // 只打印前3个用于调试
  // };

  // // 处理返回到分类列表
  // const handleBackToCategories = () => {
  //   setIsBrowsingClothes(false);
  //   setSelectedCategory(null);
  //   setSelectedClothesIndex(0); // 重置到第一个服装
  // };

  // // 处理服装点击
  // const handleClothesClick = async (clothesItem: any, index: number) => {
  //   // 更新顶部显示的服装 - 使用在当前分类下的相对索引
  //   setSelectedClothesIndex(index);

  //   // 更新右侧顶部图片显示的衣服
  //   setLastSelectedClothes(clothesItem);

  //   // 打印详细的衣服信息日志
  //   console.log('👕 选中服装详细信息:', {
  //     服装名称: clothesItem.clothesName || '未知',
  //     服装分类: clothesItem.classifyName || '未知',
  //     服装ID: clothesItem.clothesId || '未知',
  //     图片URL: clothesItem.clothesImageUrl || '未知',
  //     分类内索引: index,
  //     完整对象: clothesItem
  //   });

  //   console.log('选中服装:', clothesItem, '分类内索引:', index);
  //   console.log('选中服装图片URL:', clothesItem.clothesImageUrl);

  //   // 处理衣服管理逻辑
  //   await handleClothesManagement(clothesItem);
  // };

  // 开始图标自动隐藏定时器（视频播放界面用）
  const startIconHideTimer = () => {
    // 清除现有定时器
    if (iconHideTimer) {
      clearTimeout(iconHideTimer);
    }

    // 设置新的定时器，3秒后隐藏图标
    const timer = setTimeout(() => {
      setShowVideoIcons(false);
      setIconHideTimer(null);
    }, 3000);

    setIconHideTimer(timer);
  };

  // 处理视频区域点击（切换图标显示/隐藏 + 暂停/播放）
  const handleVideoAreaClick = () => {
    console.log('🎬 视频区域被点击');
    console.log('🎬 当前视频暂停状态:', isVideoPaused);

    // 直接切换暂停状态，不检查RTC连接
    const newPausedState = !isVideoPaused;
    setIsVideoPaused(newPausedState);
    console.log('⏸️ 切换视频暂停状态:', newPausedState);

    // 直接控制视频元素暂停/播放
    const videoElement = getCurrentVideoElement();
    if (videoElement && videoElement.tagName === 'VIDEO') {
      const video = videoElement as HTMLVideoElement;
      if (newPausedState) {
        video.pause();
        console.log('⏸️ 视频元素已暂停');
      } else {
        video.play().catch(error => {
          console.error('❌ 播放视频失败:', error);
        });
        console.log('▶️ 视频元素已播放');
      }
    } else {
      console.log('⚠️ 未找到可控制的视频元素，元素类型:', videoElement?.tagName);
    }

    // 尝试发送RTC消息（不阻塞UI）
    try {
      if (rtcVideoService.getConnectionStatus()) {
        console.log('👆 发送点击触摸消息');
        rtcVideoService.sendTouchScreen(
          proto.eTouchType.click,
          { x: 0, y: 0, z: 0 },
          Date.now()
        );
        console.log('✅ 点击触摸消息发送成功');
      } else {
        console.log('⚠️ RTC未连接，跳过消息发送');
      }
    } catch (error) {
      console.error('❌ 发送点击触摸消息失败:', error);
    }
  };

  // // 处理视频播放界面的更多点击
  // const handleVideoMoveClick = (index?: number) => {
  //   if (index === undefined) {
  //     // 点击主动作图标，切换展开/收起状态
  //     setIsMoveExpanded(!isMoveExpanded);
  //     // 收起实景展开状态
  //     setIsRealSceneExpanded(false);
  //   } else {
  //     // 点击具体的动作，更新选中状态和主图标，然后自动收起
  //     setSelectedMoveIndex(index);
  //     setIsMoveExpanded(false); // 自动收起

  //     console.log('选中更多， 跳转:', moveIcons[index].name);
  //     navigate('/upload');
  //   }

  //   // 移除隐藏定时器，让icon常驻显示
  //   // startIconHideTimer();
  // };

  // // 处理视频播放界面的动作点击
  // const handleVideoActionClick = (index?: number) => {
  //   if (index === undefined) {
  //     // 点击主动作图标，切换展开/收起状态
  //     setIsActionExpanded(!isActionExpanded);
  //     // 收起实景展开状态
  //     setIsRealSceneExpanded(false);
  //   } else {
  //     // 点击具体的动作，更新选中状态和主图标，然后自动收起
  //     setSelectedActionIndex(index);
  //     setIsActionExpanded(false); // 自动收起
  //     console.log('选中动作:', actionIcons[index].name);
      
  //   }

  //   // 移除隐藏定时器，让icon常驻显示
  //   // startIconHideTimer();
  // };

  // 处理视频播放界面的实景点击
  const handleVideoRealSceneClick = async (index?: number) => {
    if (index === undefined) {
      // 点击主实景图标，切换展开/收起状态
      setIsRealSceneExpanded(!isRealSceneExpanded);
      // 收起动作展开状态
      setIsActionExpanded(false);
    } else {
      // 点击具体的实景，更新选中状态和主图标，然后自动收起
      setSelectedRealSceneIndex(index);
      setIsRealSceneExpanded(false); // 自动收起

      const selectedScene = realSceneIcons[index];
      console.log('选中实景:', selectedScene.name, '地图名称:', selectedScene.mapName);

      // 切换场景音乐
      switchSceneMusic(selectedScene.name);

      // 检查RTC连接状态
      if (!rtcVideoService.getConnectionStatus()) {
        console.error('❌ RTC未连接，无法切换地图');
        console.log('🔍 RTC连接状态检查失败，可能需要等待RTC初始化完成');
        console.log('💡 提示：请确保已完成登台流程，RTC服务已启动');
        console.log('🔧 调试信息：');
        console.log('  - showSelectionScreen:', showSelectionScreen);
        console.log('  - hasStartedTryon.current:', hasStartedTryon.current);
        console.log('  - RTC SDK版本:', rtcVideoService.getSDKVersion());
        console.log('  - RTC连接状态:', rtcVideoService.getConnectionStatus());
        return;
      }

      // 发送切换地图的RTC消息
      try {
        console.log('🚀 开始发送切换地图RTC消息...');
        rtcVideoService.sendChangeMap(selectedScene.mapName);
        console.log('✅ 切换地图RTC消息已发送:', selectedScene.mapName);
      } catch (error) {
        console.error('❌ 发送切换地图RTC消息失败:', error);
        // 显示错误提示
        alert(`切换地图失败: ${error instanceof Error ? error.message : String(error)}`);
      }
    }

    // 移除隐藏定时器，让icon常驻显示
    // startIconHideTimer();
  };

  // // 处理视频播放界面的服装分类点击
  // const handleVideoCategoryClick = (category: string) => {
  //   setSelectedCategory(category);
  //   setIsBrowsingClothes(true);

  //   // 设置当前选中的分类ID
  //   const classifyId = getClassifyId(category);
  //   setSelectedClassifyId(classifyId);

  //   // 移除隐藏定时器，让icon常驻显示
  //   // startIconHideTimer();

  //   // 调试：打印分类下的服装数量
  //   const categoryClothes = getClothesForCategory(category);
  //   console.log(`分类 "${category}" 下的服装数量:`, categoryClothes.length);
  //   console.log(`分类 "${category}" 下的服装列表:`, categoryClothes.slice(0, 3)); // 只打印前3个用于调试
  // };

  // // 处理视频播放界面的返回到分类列表
  // const handleVideoBackToCategories = () => {
  //   setIsBrowsingClothes(false);
  //   setSelectedCategory(null);
  //   setSelectedClothesIndex(0); // 重置到第一个服装

  //   // 移除隐藏定时器，让icon常驻显示
  //   // startIconHideTimer();
  // };

  // // 处理视频播放界面的服装点击
  // const handleVideoClothesClick = async (clothesItem: any, index: number) => {
  //   // 更新顶部显示的服装 - 使用在当前分类下的相对索引
  //   setSelectedClothesIndex(index);

  //   // 更新右侧顶部图片显示的衣服
  //   setLastSelectedClothes(clothesItem);

  //   // 打印详细的衣服信息日志
  //   console.log('🎬 视频界面选中服装详细信息:', {
  //     服装名称: clothesItem.clothesName || '未知',
  //     服装分类: clothesItem.classifyName || '未知',
  //     服装ID: clothesItem.clothesId || '未知',
  //     图片URL: clothesItem.clothesImageUrl || '未知',
  //     分类内索引: index,
  //     完整对象: clothesItem
  //   });

  //   console.log('选中服装:', clothesItem, '分类内索引:', index);
  //   console.log('选中服装图片URL:', clothesItem.clothesImageUrl);

  //   // 处理衣服管理逻辑
  //   await handleClothesManagement(clothesItem);

  //   // 移除隐藏定时器，让icon常驻显示
  //   // startIconHideTimer();
  // };

  // 处理触摸开始事件
  const handleTouchStart = (event: React.TouchEvent | React.MouseEvent) => {
    console.log('👆 handleTouchStart 被调用');

    const pos = getEventPosition(event);
    setLastTouchPos(pos);
    setIsDragging(false);
    setTouchStartTime(Date.now()); // 记录触摸开始时间

    // 检测多点触摸（缩放手势）
    if ('touches' in event && event.touches.length === 2) {
      // 双指触摸时阻止默认行为
      event.preventDefault();
      const positions = getTouchPositions(event as React.TouchEvent);
      const distance = getDistance(positions[0], positions[1]);
      setInitialDistance(distance);
      setLastScaleDistance(distance);
      console.log('🔍 缩放开始:', {
        distance: distance.toFixed(2),
        positions: positions.map(p => ({ x: p.x.toFixed(0), y: p.y.toFixed(0) })),
        touchCount: event.touches.length
      });
    } else {
      setInitialDistance(null);
      setLastScaleDistance(null);
      console.log('👆 单点触摸开始，触摸点数量:', 'touches' in event ? event.touches.length : 0);
    }

    console.log('👆 触摸开始:', pos);
  };

  //add by chao 2025.09.30 触控优化 y1
  // 新增状态：记录上一次拖动方向
  const [lastDragDirection, setLastDragDirection] = useState<{ x: number, y: number } | null>(null);

  // 处理触摸移动事件
  const handleTouchMove = (event: React.TouchEvent | React.MouseEvent) => {
    // 双指缩放逻辑
    if ('touches' in event && event.touches.length === 2 && initialDistance !== null) {
      event.preventDefault();
      const positions = getTouchPositions(event as React.TouchEvent);
      const currentDistance = getDistance(positions[0], positions[1]);
      const scaleDelta = currentDistance - (lastScaleDistance || initialDistance);
      if (Math.abs(scaleDelta) > 5) {
        if (!rtcVideoService.getConnectionStatus()) return;
        try {
          // 缩小缩放比例，使用0.1的缩放因子
          const scaleFactor = 0.1;
          rtcVideoService.sendTouchScreen(
            proto.eTouchType.scale,
            { x: scaleDelta * scaleFactor, y: 0, z: 0 },
            Date.now()
          );
          //update by chao 2025.09.25
          if(!isVideoPaused) setIsVideoPaused(true);
         
        } catch { }
        setLastScaleDistance(currentDistance);
      }
      return; // 只要是双指缩放，后面单指逻辑都不走
    }
    // 单指拖动逻辑
    if (!lastTouchPos) return;
    const currentPos = getEventPosition(event);
    const deltaX = currentPos.x - lastTouchPos.x;
    const deltaY = currentPos.y - lastTouchPos.y;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    //add by chao 2025.09.30 触控优化 y1
    // 判断当前拖动方向
    const currentDirection = {
      x: deltaX === 0 ? 0 : deltaX / Math.abs(deltaX),
      y: deltaY === 0 ? 0 : deltaY / Math.abs(deltaY)
    };
    //add by chao 2025.09.30 触控优化 y1 -->

    // 拖动阈值恢复到10像素
    if (distance > 10) {
      setIsDragging(true);

    //add by chao 2025.09.30 触控优化 y1
    // 判断方向是否切换
    if (
      lastDragDirection &&
      (lastDragDirection.x !== currentDirection.x || lastDragDirection.y !== currentDirection.y)
    ) {
      // 方向切换，降低灵敏度或重置累计
      // 可选：setLastTouchPos(currentPos); // 归零累计
      // 可选：return; // 本次不发送旋转
    }
    setLastDragDirection(currentDirection);
     //add by chao 2025.09.30 触控优化 y1 -->

      if (!rtcVideoService.getConnectionStatus()) return;
      try {
        //update by chao 2025.09.25 0.3
        const rotationScale = 0.08;
        // 修复旋转方向：向上移动时Y值为负，向下移动时Y值为正
        rtcVideoService.sendTouchScreen(
          proto.eTouchType.rotate,
          { x: deltaX * rotationScale, y: -deltaY * rotationScale, z: 0 },
          Date.now()
        );
        if (!isVideoPaused) setIsVideoPaused(true);
      } catch { }
    }
  };

  // 处理触摸结束事件
  const handleTouchEnd = (event: React.TouchEvent | React.MouseEvent) => {
    //add by chao 2025.09.30 触控优化 y1
    setLastDragDirection(null);

    if (isDragging) {
      // 拖动结束
    }
    const currentPos = getEventPosition(event);
    const deltaX = currentPos.x - (lastTouchPos?.x || 0);
    const deltaY = currentPos.y - (lastTouchPos?.y || 0);
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const touchDuration = Date.now() - touchStartTime;
    // 点击判定：距离<20像素，时间0~500ms
    if (!isDragging && lastTouchPos) {
      if (distance < 20 && touchDuration >= 0 && touchDuration <= 500) {
        const clickX = currentPos.x;
        const clickY = currentPos.y;
        const isLeftIconArea = clickX >= 10 && clickX <= 120 && clickY >= window.innerHeight * 0.3 && clickY <= window.innerHeight * 0.7;
        const isRightIconArea = clickX >= window.innerWidth - 120 && clickX <= window.innerWidth - 10 && clickY >= window.innerHeight * 0.3 && clickY <= window.innerHeight * 0.7;
        if (!isLeftIconArea && !isRightIconArea) {
          handleVideoAreaClick();
        }
      }
    }
    setIsDragging(false);
    setLastTouchPos(null);
    setInitialDistance(null);
    setLastScaleDistance(null);
  };

  // 获取事件位置
  const getEventPosition = (event: React.TouchEvent | React.MouseEvent): { x: number, y: number } => {
    if ('touches' in event && event.touches.length > 0) {
      // 触摸事件
      return {
        x: event.touches[0].clientX,
        y: event.touches[0].clientY
      };
    } else if ('clientX' in event) {
      // 鼠标事件
      return {
        x: event.clientX,
        y: event.clientY
      };
    }
    return { x: 0, y: 0 };
  };

  // 计算两点之间的距离
  const getDistance = (pos1: { x: number, y: number }, pos2: { x: number, y: number }): number => {
    const deltaX = pos1.x - pos2.x;
    const deltaY = pos1.y - pos2.y;
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  };

  // 获取多点触摸的位置
  const getTouchPositions = (event: React.TouchEvent): { x: number, y: number }[] => {
    const positions: { x: number, y: number }[] = [];
    for (let i = 0; i < event.touches.length; i++) {
      positions.push({
        x: event.touches[i].clientX,
        y: event.touches[i].clientY
      });
    }
    return positions;
  };



  // 调试双指缩放功能
  const debugPinchZoom = () => {
    console.log('🔍 双指缩放调试信息:');
    console.log('  - 初始距离:', initialDistance);
    console.log('  - 最后缩放距离:', lastScaleDistance);
    console.log('  - RTC连接状态:', rtcVideoService.getConnectionStatus());
    console.log('  - 触摸事件处理器已绑定');
    console.log('  - 触摸事件阻止默认行为已启用');
    console.log('  - 浏览器用户代理:', navigator.userAgent);
    console.log('  - 是否支持触摸事件:', 'ontouchstart' in window);
    console.log('  - 是否支持多点触摸:', 'ontouchstart' in window && 'touches' in TouchEvent.prototype);

    // 检查触摸事件处理器
    const videoContainer = document.querySelector('[style*="touchAction: none"]');
    if (videoContainer) {
      console.log('  - 找到视频容器元素:', videoContainer);
      console.log('  - 视频容器样式:', videoContainer.getAttribute('style'));
    } else {
      console.log('  - 未找到视频容器元素');
    }

    // 测试触摸事件
    try {
      const testEvent = new TouchEvent('touchstart', {
        touches: [
          new Touch({ clientX: 100, clientY: 100, identifier: 1 } as any),
          new Touch({ clientX: 200, clientY: 200, identifier: 2 } as any)
        ]
      });
      console.log('  - 测试双指触摸事件创建成功:', testEvent);
    } catch (error) {
      console.log('  - 测试双指触摸事件创建失败:', error);
    }

    // 检查是否有其他元素阻止了触摸事件
    const allElements = document.querySelectorAll('*');
    const elementsWithTouchAction = Array.from(allElements).filter(el => {
      const style = window.getComputedStyle(el);
      return style.touchAction !== 'auto';
    });
    console.log('  - 设置了touchAction的元素数量:', elementsWithTouchAction.length);
    elementsWithTouchAction.slice(0, 5).forEach(el => {
      console.log('    - 元素:', el.tagName, 'touchAction:', window.getComputedStyle(el).touchAction);
    });
  };

  // 处理分享按钮点击 - 创建分享并显示分享弹窗
  const handleShareClick = async () => {
    try {
      console.log('📤 点击分享按钮，开始创建分享...');

      // 调用创建分享接口
      const shareResult = await tryonService.createShare();

      console.log('✅ 创建分享成功:', shareResult);

      // 显示分享弹窗
      setShowShareModal(true);

    } catch (error) {
      console.error('❌ 创建分享失败:', error);
      // 即使创建分享失败，也显示分享弹窗
      setShowShareModal(true);
    }
  };

  // 关闭分享弹窗
  const handleCloseShareModal = () => {
    setShowShareModal(false);
  };

  // 分享给好友
  const handleShareToFriend = async () => {
    try {
      console.log('📤 分享给好友...');

      // 检测是否在微信浏览器中
      const isWechatBrowser = /MicroMessenger/i.test(navigator.userAgent);

      if (isWechatBrowser) {
        // 微信浏览器：使用微信选择好友发送功能
        console.log('📱 检测到微信浏览器，使用微信选择好友发送');

        // 检查微信分享服务是否已初始化
        if (!wechatShareService.isInitialized()) {
          console.log('🔧 初始化微信分享服务...');

          // 初始化微信分享服务
          await wechatShareService.initialize({
            appId: WECHAT_CONFIG.APP_ID,
            title: WECHAT_CONFIG.DEFAULT_SHARE.title,
            desc: WECHAT_CONFIG.DEFAULT_SHARE.desc,
            link: WECHAT_CONFIG.DEFAULT_SHARE.link,
            imgUrl: WECHAT_CONFIG.DEFAULT_SHARE.imgUrl
          });
        }

        // 执行微信选择好友发送
        try {
          await wechatShareService.chooseAndShareToFriend({
            title: WECHAT_CONFIG.DEFAULT_SHARE.title,
            desc: WECHAT_CONFIG.DEFAULT_SHARE.desc,
            link: WECHAT_CONFIG.DEFAULT_SHARE.link,
            imgUrl: WECHAT_CONFIG.DEFAULT_SHARE.imgUrl
          });

          console.log('✅ 微信选择好友发送完成');
          setShowShareModal(false);
        } catch (error) {
          console.warn('⚠️ 微信选择好友发送失败，显示手动分享提示:', error);
          // 不抛出错误，让微信分享服务显示友好的提示
        }

      } else {
        // 手机浏览器：复制链接并提示
        console.log('🌐 检测到手机浏览器，复制分享链接');

        const shareData = {
          title: 'airU-3D试衣间',
          desc: '快来和我一起共创动画',
          link: window.location.href.split('#')[0],
          imgUrl: 'https://dev-h5.ai1010.cn/logo192.png'
        };

        try {
          if (navigator.clipboard && navigator.clipboard.writeText) {
            await navigator.clipboard.writeText(shareData.link);
            console.log('✅ 分享链接已复制到剪贴板');
          } else {
            // 降级方案：使用传统方法
            const textArea = document.createElement('textarea');
            textArea.value = shareData.link;
            textArea.style.position = 'fixed';
            textArea.style.left = '-999999px';
            textArea.style.top = '-999999px';
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            console.log('✅ 分享链接已复制到剪贴板（降级方案）');
          }

          // 显示成功提示
          setShareTipMessage('分享链接已复制到剪贴板！');
          setShareTipType('success');
          setShowShareTip(true);
          setTimeout(() => setShowShareTip(false), 3000);
          setShowShareModal(false);

        } catch (copyError) {
          console.error('❌ 复制分享链接失败:', copyError);
          setShareTipMessage('复制失败，请手动复制链接');
          setShareTipType('error');
          setShowShareTip(true);
          setTimeout(() => setShowShareTip(false), 3000);
        }
      }

    } catch (error) {
      console.error('❌ 分享给好友失败:', error);
      setShareTipMessage(`分享失败: ${error instanceof Error ? error.message : String(error)}`);
      setShareTipType('error');
      setShowShareTip(true);
      setTimeout(() => setShowShareTip(false), 3000);
    }
  };


  // 监听微信分享准备就绪事件
  useEffect(() => {
    const handleWechatShareReady = (event: CustomEvent) => {
      console.log('📤 微信分享准备就绪:', event.detail);
      setIsWechatShareReady(true);

      // 根据不同类型显示不同的提示信息
      const { message, type } = event.detail;
      console.log('📤 分享提示类型:', type, '消息:', message);

      setShareTipMessage(message || '请在微信中点击右上角菜单进行分享');
      setShareTipType(type || 'wechat');
      setShowShareTip(true);

      // 3秒后自动隐藏提示
      setTimeout(() => {
        setShowShareTip(false);
      }, 3000);
    };

    window.addEventListener('wechatShareReady', handleWechatShareReady as EventListener);

    return () => {
      window.removeEventListener('wechatShareReady', handleWechatShareReady as EventListener);
    };
  }, []);

  // 监听更新右侧顶部图片事件
  useEffect(() => {
    const handleUpdateTopRightClothesImage = (event: CustomEvent) => {
      console.log('🖼️ 收到更新右侧顶部图片事件:', event.detail);
      const { clothesData } = event.detail;

      if (clothesData) {
        // 更新右侧顶部图片显示的衣服
        setLastSelectedClothes(clothesData);
        console.log('✅ 右侧顶部图片已更新为:', clothesData);
      }
    };

    window.addEventListener('updateTopRightClothesImage', handleUpdateTopRightClothesImage as EventListener);

    return () => {
      window.removeEventListener('updateTopRightClothesImage', handleUpdateTopRightClothesImage as EventListener);
    };
  }, []);

  // 设置创建模型回调函数
  useEffect(() => {
    tryonService.setOnCreateModelCallback(() => {
      setShowCreateModelModal(true);
    });
  }, []);

  // 初始化登录参数
  const loginParamsInitializedRef = useRef(false);

  useEffect(() => {
    console.log('🏠 Home组件初始化，检查登录参数...');
    console.log('性能调优 组件初始化1：' + new Date().toLocaleString() +' '+ performance.now() )
    if (loginParamsInitializedRef.current) return;
    loginParamsInitializedRef.current = true;

    // 首先尝试从路由state获取参数
    if (locationState.token && locationState.userId && locationState.phone && locationState.coCreationId) {
      console.log('✅ 从路由state获取登录参数, coCreationId:', locationState.coCreationId);
      setLoginParams({
        token: locationState.token,
        userId: locationState.userId,
        // phone: locationState.phone,
        tenantId: locationState.tenantId,
        roomId: locationState.roomId,
        coCreationId: locationState.coCreationId,
        shareScene: locationState.shareScene,
      });

      // 如果路由state中有房间名称，也设置到状态中
      if (locationState.roomName) {
        setRoomName(locationState.roomName);
        console.log('✅ 从路由state获取到房间名称:', locationState.roomName);
      }

      // 即使从路由state获取登录参数，也要检查缓存中的服饰列表
      const cachedLoginData = getLoginCache();
      if (cachedLoginData && cachedLoginData.clothesList && cachedLoginData.clothesList.length > 0) {
        setClothesList(cachedLoginData.clothesList);
        console.log('✅ 从缓存获取到服饰列表:', cachedLoginData.clothesList);
      }
      return;
    }

    // 如果路由state没有参数，优先从URL获取coCreationId
    const urlCoCreationId = getCoCreationIdWithUrlPriority();
    console.log('🔍 URL中的coCreationId:', urlCoCreationId);

    // 尝试从缓存获取
    const cachedLoginData = getLoginCache();
    console.log('🔍 缓存中的登录数据:', cachedLoginData);

    if (cachedLoginData) {
      // 优先使用URL参数，如果没有URL参数则使用缓存
      // const finalCoCreationId = isValidCoCreationId(urlCoCreationId) ? urlCoCreationId! : cachedLoginData.coCreationId;

      if (isValidCoCreationId(urlCoCreationId)) {
        console.log('✅ 从URL获取到coCreationId:', urlCoCreationId);
      }

      setLoginParams({
        token: cachedLoginData.token,
        userId: cachedLoginData.userId,
        tenantId: cachedLoginData.tenantId,
        roomId: cachedLoginData.roomId,
        coCreationId: cachedLoginData.coCreationId,
        shareScene: cachedLoginData.shareScene,
      });

      // 如果缓存中有房间名称，也设置到状态中
      if (cachedLoginData.roomName) {
        setRoomName(cachedLoginData.roomName);
      }

      // 如果缓存中有服饰列表，也设置到状态中
      if (cachedLoginData.clothesList && cachedLoginData.clothesList.length > 0) {
        setClothesList(cachedLoginData.clothesList);
      }

      // 如果缓存中有默认场景名称，设置到状态中
      if (cachedLoginData.defaultSceneName) {
        setCurrentSceneName(cachedLoginData.defaultSceneName);
        // 设置对应的音乐
        const defaultBGM = getBGMBySceneName(cachedLoginData.defaultSceneName);
        setMusicUrl(defaultBGM);
      }
    } else {
      // 没有缓存，检查URL参数
      if (isValidCoCreationId(urlCoCreationId)) {
        console.log('✅ 从URL获取到coCreationId:', urlCoCreationId);
        // 有URL参数但没有缓存，跳转登录页面
        navigate('/login?redirect=' + encodeURIComponent(location.pathname));
        return;
      }

      console.log('❌ 缓存中没有有效的登录参数，且URL中也没有coCreationId，跳转到登录页面');
      clearLoginCache();
      navigate('/login?redirect=' + encodeURIComponent(location.pathname));
    }

    console.log('性能调优 组件初始化2：' + new Date().toLocaleString() +' '+ performance.now() )
  }, []); // 空依赖数组，只在组件挂载时执行一次

  // 初始化房间名称和服饰列表
  const tryonInitializedRef = useRef(false);

  // update by chao 2025.09.29 登台刷新问题：定位登台代码段
  useEffect(() => {
    console.log('性能调优 a1.0.5：' + new Date().toLocaleString() +' '+ performance.now() )
    console.log('🏠 Home组件登录参数更新2:', loginParams);
    startUpDressUp();
  }, [loginParams]); // 只依赖loginParams，避免重复执行
  // add by chao 2025.09.29 登台刷新问题：将登台代码段独立成函数，方便控制执行时机
  const startUpDressUp = () => {
    if(isRtcLog) console.log('🔍 tryonInitializedRef.current:', tryonInitializedRef.current);

    if (!loginParams || tryonInitializedRef.current) {
      console.log('性能调优 a1.0.4：' + new Date().toLocaleString() +' '+ performance.now() )
      console.log('🔍 条件不满足，退出useEffect');
      return;
    }

    if(isRtcLog) console.log('🔍 设置tryonInitializedRef.current = true');
    tryonInitializedRef.current = true;

    // 如果当前房间名称还是默认值，尝试从 tryonService 获取
    if (roomName === 'PADA2024秀款礼服系列') {
      const roomNameFromService = tryonService.getRoomName();
      if (roomNameFromService) {
        setRoomName(roomNameFromService);
        // console.log('✅ 从 tryonService 获取到房间名称:', roomNameFromService);
      } else {
        console.log('⚠️ tryonService 中没有房间名称，使用默认名称');
      }
    } else {
      // console.log('✅ 已从缓存获取到房间名称，跳过 tryonService 获取');
    }

    // 获取服饰列表（只有当前状态为空时才尝试从服务获取）
    if (clothesList.length === 0) {
      const clothesListFromService = tryonService.getClothesList();
      if (clothesListFromService && clothesListFromService.length > 0) {
        setClothesList(clothesListFromService);
        // console.log('✅ 从 tryonService 获取到服饰列表');
        // console.log('服饰分类数量:', clothesListFromService.length);
      } else {
        console.log('⚠️ tryonService 中没有服饰列表，等待服务器数据');
        // 不清空列表，保持从缓存读取的数据
      }
    }

    // 预加载衣服详情到缓存
    // if (loginParams?.token) {
    //   console.log('🔄 开始预加载衣服详情到缓存');
    // }

    // 获取场景列表（只有当前状态为空时才尝试从服务获取）
    if (realSceneIcons.length === 0) { // 如果场景列表为空
      const scenesListFromService = tryonService.getScenesList();
      if(isRtcLog) console.log('🔍 尝试从 tryonService 获取场景列表:', scenesListFromService);

      if (scenesListFromService && Object.keys(scenesListFromService).length > 0) {
        // 将服务器返回的场景数据转换为UI需要的格式
        // const newRealSceneIcons = Object.entries(scenesListFromService).map(([id, scene]: [string, any], index) => {
        //   const iconData = {
        //     icon: realSceneActionIcon, // 使用默认图标
        //     name: scene.name || '未知场景',
        //     mapName: scene.code || 'Maps_unknown'
        //   };
        //   console.log(`场景 ${index}:`, iconData);
        //   return iconData;
        // });

        // console.log('✅ 从 tryonService 获取到场景列表');
        // console.log('场景数量:', Object.keys(scenesListFromService).length);
        // console.log('转换后的场景列表:', newRealSceneIcons);
        // setRealSceneIcons(newRealSceneIcons);
      } else {
        console.log('⚠️ tryonService 中没有场景列表，等待服务器数据');
      }
    } else {
      console.log('✅ 场景列表已更新，跳过从 tryonService 获取');
      if(isRtcLog) console.log('当前场景列表:', realSceneIcons);
    }

    // 自动执行登台流程（只有在用户没有离开过舞台时才执行）
    const autoStartTryon = async () => {

      // 延迟一点时间确保页面完全加载
      setTimeout(async () => {
        // 强制检查：如果URL参数变化了，重置hasLeftStage状态
        const urlCoCreationId = getCoCreationIdWithUrlPriority();
        
        if (!hasLeftStage) {
          if(isRtcLog) console.log('🚀 自动开始登台流程...');
          await handleStartTryon();
        } else {
          if(isRtcLog) console.log('⚠️ 用户已离开过舞台，跳过自动登台');
          // 即使离开过舞台，也要检查RTC连接状态
          if (!rtcVideoService.getConnectionStatus()) {
            if(isRtcLog) console.log('🔄 检测到RTC未连接，尝试重新连接...');
            await handleStartTryon();
          } else {
            console.log('✅ RTC已连接，无需重新连接');
          }
        }
      //update by chao 2025.10.01 优化性能
      // }, 1000);
      }, 10);
    };

    autoStartTryon();
  }


  // 检查视频是否真正开始播放的函数
  const checkVideoPlayingStatus = (userId: string, domId: string, retryCount: number = 0) => {
    if(isRtcLog) console.log(`🔍 checkVideoPlayingStatus: ${userId} -> ${domId}, 重试次数: ${retryCount}`);

    const videoElement = document.getElementById(domId);
    if (videoElement) {
      // 尝试多种方式查找video标签
      let videoTag = videoElement.querySelector('video');
      if (!videoTag) {
        // 如果直接查找不到，尝试查找canvas（RTC可能使用canvas）
        const canvas = videoElement.querySelector('canvas');
        if (canvas) {
          console.log(`✅ 找到canvas标签用于视频播放: ${domId}`);
          videoTag = canvas as any; // 临时处理
        }
      }

      if (videoTag) {
        if(isRtcLog) console.log(`✅ 找到视频元素: ${domId}, 标签名: ${videoTag.tagName}`);

        // 设置视频样式以适应容器
        videoTag.style.width = '100%';
        videoTag.style.height = '100%';
        videoTag.style.objectFit = 'cover';

        const checkPlaying = () => {
          // 对于canvas，我们假设它总是"播放"的
          if (videoTag && (videoTag.tagName === 'CANVAS' || (!videoTag.paused && !videoTag.ended && videoTag.readyState > 2))) {
            console.log(`✅ 视频 ${userId} 已开始播放`);
            console.log('性能调优 b2.2：' + new Date().toLocaleString()+' '+ performance.now())
            setVideoPlayingStatus(prev => ({
              ...prev,
              [userId]: true
            }));
            // 设置全局视频播放状态为true
            setIsVideoPlaying(true);
            return true; // 表示检查成功
          } else {
            console.log(`⏳ 视频 ${userId} 还未开始播放，继续检查...`);
            return false; // 表示需要继续检查
          }
        };

        // 监听视频事件（仅对video标签）
        if (videoTag && videoTag.tagName === 'VIDEO') {
          // 检查是否已经添加过事件监听器，避免重复添加
          if (!videoTag.hasAttribute('data-events-added')) {
            videoTag.setAttribute('data-events-added', 'true');

            videoTag.addEventListener('playing', () => {
              console.log(`✅ 视频 ${userId} 播放事件触发`);
              setVideoPlayingStatus(prev => ({
                ...prev,
                [userId]: true
              }));
              // 设置全局视频播放状态为true
              setIsVideoPlaying(true);
            });

            videoTag.addEventListener('pause', () => {
              console.log(`⏸️ 视频 ${userId} 暂停事件触发`);
              setIsVideoPlaying(false);
            });

            videoTag.addEventListener('ended', () => {
              console.log(`🔚 视频 ${userId} 结束事件触发`);
              setIsVideoPlaying(false);
            });

            videoTag.addEventListener('loadeddata', () => {
              console.log(`✅ 视频 ${userId} 数据加载完成`);
              checkPlaying();
            });

            videoTag.addEventListener('canplay', () => {
              if(isRtcLog) console.log(`✅ 视频 ${userId} 可以播放`);
              setVideoPlayingStatus(prev => ({
                ...prev,
                [userId]: true
              }));
              setIsVideoPlaying(true);
            });
          }
        }

        // 立即检查一次
        const isPlaying = checkPlaying();

        // 如果视频还没开始播放且重试次数少于10次，继续检查
        if (!isPlaying && retryCount < 10) {
          setTimeout(() => checkVideoPlayingStatus(userId, domId, retryCount + 1), 1000);
        } else if (retryCount >= 10) {
          console.log(`⚠️ 视频 ${userId} 检查超时，停止重试`);
        }
      } else {
        // 如果还没有video标签，延迟检查，但限制重试次数
        if (retryCount < 10) {
          console.log(`⏳ 视频元素 ${domId} 还未创建，${retryCount + 1}秒后重试`);
          setTimeout(() => checkVideoPlayingStatus(userId, domId, retryCount + 1), 1000);
        } else {
          console.log(`⚠️ 视频元素 ${domId} 创建超时，停止重试`);
        }
      }
    } else {
      // 如果DOM元素还没有创建，延迟检查，但限制重试次数
      if (retryCount < 10) {
        console.log(`⏳ DOM元素 ${domId} 还未创建，${retryCount + 1}秒后重试`);
        setTimeout(() => checkVideoPlayingStatus(userId, domId, retryCount + 1), 1000);
      } else {
        console.log(`⚠️ DOM元素 ${domId} 创建超时，停止重试`);
      }
    }
  };

  // 设置RTC事件处理器
  useEffect(() => {
    webSocketService.setRTCEventHandlers({
      onUserJoin: (userId: string) => {
        console.log('👤 用户加入RTC房间:', userId);
        if (userId === '1') {
          console.log('✅ 用户1加入房间');
        }
      },

      onUserLeave: (userId: string) => {
        console.log('👤 用户离开RTC房间:', userId);
        setVideoStreams(prev => prev.filter(stream => stream.userId !== userId));
        setVideoPlayingStatus(prev => {
          const newStatus = { ...prev };
          delete newStatus[userId];
          return newStatus;
        });

        // 如果没有其他用户，停止视频播放状态
        if (videoStreams.length <= 1) {
          setIsVideoPlaying(false);
        }
      },

      onUserPublishStream: (userId: string, hasVideo: boolean, hasAudio: boolean) => {
        if(isRtcLog) console.log('📹 用户发布流:', userId, { hasVideo, hasAudio });
        // 过滤掉userid=0的流
        if (userId === '0') {
          if(isRtcLog) console.log('⚠️ 跳过userid=0的流:', userId);
        } else {
          console.log('✅ 处理用户流:', userId);
        }
        // 这个事件由tryonService处理，不需要在这里重复处理
      },

      onUserUnpublishStream: (userId: string) => {
        console.log('📹 用户取消发布流:', userId);
        setVideoStreams(prev => prev.filter(stream => stream.userId !== userId));
        setVideoPlayingStatus(prev => {
          const newStatus = { ...prev };
          delete newStatus[userId];
          return newStatus;
        });

        // 如果没有其他用户，停止视频播放状态
        if (videoStreams.length <= 1) {
          setIsVideoPlaying(false);
        }
      },

      onError: (error: any) => {
        console.error('❌ RTC错误:', error);
      }
    });
  }, []); // 移除loginParams依赖，避免重复设置

  // 设置余额扣费事件监听器（独立useEffect）
  useEffect(() => {
    if(isRtcLog) console.log('🔧 设置余额扣费事件监听器');

    const handleBalanceDeduction = (event: Event) => {
      const customEvent = event as CustomEvent;
      if(isRtcLog) console.log('💰 收到余额扣费事件:', customEvent.detail);

      // 异步执行余额扣费，不阻塞事件处理
      (async () => {
        try {
          // 构建扣费数据
          const balanceRaw = {
            deducteList: [{
              deductionType: 2,
              // billPrice: 0.3,
              billPrice: 0.1,
              sourceId: BigInt(tryonService.getRoomPrimaryId()),
              reduceCount: 1,
              clotheId: 0
            }]
          };

          // 使用新的API函数进行余额扣费请求
          const response = await authAPI.getBalanceDeductionRequest(
            balanceRaw,
            loginParams?.token || '',
            loginParams?.userId || '' // 用户ID
          );

          if (response.ok) {
            console.log('✅ 余额扣费请求成功:', response.data);
            // 解析返回的余额数据
            try {
              let parsedData = response.data;
              if (typeof parsedData === 'string') {
                parsedData = JSON.parse(parsedData);
                if(isDeductLog){
                  // if(isRtcLog) console.log('✅ 余额扣费请求成功111:', parsedData);
                }
              } else {
                parsedData = response.data;
                // console.log('✅ 余额扣费请求成功222:', parsedData);
              }
              // 彻底修复 TS 报错：Property 'data' does not exist on type 'never'
              // 通过类型断言 any，保证 TS 不会推断为 never
              const accountBalance = (parsedData as any)?.data?.accountBalance;
              if (typeof accountBalance === 'number') {
                // console.log('✅ 余额扣费请求成功333:', accountBalance);
                // 余额乘以10取模5等于0时，弹窗提示
                // if ((accountBalance * 10) % 5 === 0) {
                if (accountBalance < 0.1) {
                  // console.log('✅ 余额扣费请求成功444:', accountBalance);
                  setShowBalanceModal(true);
                }
              } else {
                if(isDeductLog){
                  // console.log('✅ 余额扣费请求成功555:', parsedData);
                }
              }
            } catch (e) {
              console.error('解析余额数据失败:', e);
            }
          } else {
            console.error('❌ 余额扣费请求失败:', response.status);
          }
        } catch (error) {
          console.error('❌ 余额扣费请求异常:', error);
        }
      })();
    };

    // 监听余额扣费事件
    window.addEventListener('rtcBalanceDeduction', handleBalanceDeduction);
    console.log('✅ 余额扣费事件监听器设置完成');

    // 测试事件监听器是否正常工作
    setTimeout(() => {
      console.log('🧪 测试余额扣费事件监听器...');
      const testEvent = new CustomEvent('rtcBalanceDeduction', {
        detail: {
          userId: 'test',
          timestamp: Date.now()
        }
      });
      window.dispatchEvent(testEvent);
    }, 1000);

    // 清理函数
    return () => {
      window.removeEventListener('rtcBalanceDeduction', handleBalanceDeduction);
      console.log('🧹 余额扣费事件监听器已清理');
    };
  }, [loginParams?.token]); // 只依赖token，避免不必要的重复设置

  // 定时扣费功能
  useEffect(() => {
    // 每分钟执行一次扣费
    const startDeductionTimer = () => {
      if (deductionTimerRef.current) {
        clearInterval(deductionTimerRef.current);
      }

      deductionTimerRef.current = setInterval(async () => {
        if (isVideoPlaying && loginParams?.token && loginParams?.userId) {
          console.log('⏰ 执行定时扣费，视频播放时间:', videoPlayTime, '秒');

          try {
            // 构建扣费数据
            const balanceRaw = {
              deducteList: [{
                deductionType: 2,
                // billPrice: 0.3,
                billPrice: 0.1,
                sourceId: BigInt(tryonService.getRoomPrimaryId()),
                reduceCount: 1,
                clotheId: 0
              }]
            };

            // 发送扣费请求
            const response = await authAPI.getBalanceDeductionRequest(
              balanceRaw,
              loginParams.token,
              loginParams.userId
            );

            if (response.ok) {
              if(isRtcLog) console.log('✅ 定时扣费请求成功:', response.data);
              // 解析返回的余额数据
              try {
                let parsedData = response.data;
                if (typeof parsedData === 'string') {
                  parsedData = JSON.parse(parsedData);
                }
                const accountBalance = (parsedData as any)?.data?.accountBalance;
                if (typeof accountBalance === 'number') {
                  // 余额乘以10取模5等于0时，弹窗提示
                  // if ((accountBalance * 10) % 5 === 0) {
                  if (accountBalance < 0.1) {
                    setShowBalanceModal(true);
                  }
                }
              } catch (e) {
                console.error('解析余额数据失败:', e);
              }
            } else {
              console.error('❌ 定时扣费请求失败:', response.status);
            }
          } catch (error) {
            console.error('❌ 定时扣费请求异常:', error);
          }
        }
      }, 3000); // 每60秒（1分钟）执行一次
    };

    // 启动播放时间计时器
    const startPlayTimeTimer = () => {
      if (playTimeTimerRef.current) {
        clearInterval(playTimeTimerRef.current);
      }

      playTimeTimerRef.current = setInterval(() => {
        if (isVideoPlaying) {
          setVideoPlayTime(prev => prev + 1);
        }
      }, 1000); // 每秒更新一次播放时间
    };

    // 当视频播放状态改变时，启动或停止定时器
    if (isVideoPlaying) {
      if(isVideoPlayLog){
        if(isRtcLog) console.log('🎬 视频开始播放，启动定时扣费');
      }
      startDeductionTimer();
      startPlayTimeTimer();
    } else {
      console.log('⏸️ 视频停止播放，清除定时扣费');
      if (deductionTimerRef.current) {
        clearInterval(deductionTimerRef.current);
        deductionTimerRef.current = null;
      }
      if (playTimeTimerRef.current) {
        clearInterval(playTimeTimerRef.current);
        playTimeTimerRef.current = null;
      }
      setVideoPlayTime(0); // 重置播放时间
    }

    // 清理函数
    return () => {
      if (deductionTimerRef.current) {
        clearInterval(deductionTimerRef.current);
      }
      if (playTimeTimerRef.current) {
        clearInterval(playTimeTimerRef.current);
      }
    };
  }, [isVideoPlaying, loginParams?.token, loginParams?.userId, videoPlayTime]);

  // 登台按钮点击处理
  const handleStartTryon = async () => {
    if(isRtcLog) console.log('🔍 开始试穿流程，登录参数:', loginParams);
    if (!loginParams) {
      console.warn('缺少登录参数，无法开始试穿');
      return;
    }
console.log('性能调优 c1.0.0.1：' + new Date().toLocaleString() +' '+ performance.now() )
    // 检查RTC连接状态，如果已连接则跳过
    if (rtcVideoService.getConnectionStatus()) {
      console.log('RTC已连接，跳过重复初始化');
      setShowSelectionScreen(false); // 确保显示视频播放界面
      return;
    }

    if (hasStartedTryon.current) {
      console.log('试穿流程已启动，跳过重复执行');
      return;
    }

    try {
      hasStartedTryon.current = true;
      setShowSelectionScreen(false); // 隐藏选择界面，显示视频播放界面
      console.log('性能调优 c1.0.0.2：' + new Date().toLocaleString() +' '+ performance.now() )
      // 获取房间信息以获取userId
      if(isRtcLog) console.log('🔍 开始获取房间信息...');
      const { roomAPI } = await import('../../services/api');
      const roomResponse = await roomAPI.getSysRoomShare(loginParams.roomId, loginParams.token);
      console.log('性能调优 c1.0.0.3：' + new Date().toLocaleString() +' '+ performance.now() )
      if (!roomResponse.ok || !roomResponse.data) {
        console.warn('⚠️ 获取房间信息失败，使用默认userId');
        // 如果获取房间信息失败，使用loginParams中的userId作为备用
        const rtcConfig: RTCVideoConfig = {
          appId: '643e46acb15c24012c963951',
          appKey: 'b329b39ca8df4b5185078f29d8d8025f',
          roomId: loginParams.roomId,
          userId: loginParams.userId
        };

        const config = {
          tenantId: loginParams.tenantId,
          userId: loginParams.userId,
          accessToken: loginParams.token,
          rtcConfig,
          roomId: loginParams.roomId,
          coCreationId: loginParams.coCreationId,
          shareScene: loginParams.shareScene,
        };
        console.log('性能调优 c1.0.0.4：' + new Date().toLocaleString() +' '+ performance.now() )
        if(isRtcLog) console.log('开始自动试穿流程，配置:', config);
        await tryonService.startTryonFlow(config);
        console.log('性能调优 c1.0.0.5：' + new Date().toLocaleString() +' '+ performance.now() )
        if(isRtcLog) console.log('✅ 试穿流程启动成功');
        return;
      }
console.log('性能调优 c1.0.0.6：' + new Date().toLocaleString() +' '+ performance.now() )
      const roomInfo = roomAPI.parseRoomInfoResponse(roomResponse);
      if (!roomInfo || !roomInfo.data) {
        console.warn('⚠️ 解析房间信息失败，使用默认userId');
        const rtcConfig: RTCVideoConfig = {
          appId: '643e46acb15c24012c963951',
          appKey: 'b329b39ca8df4b5185078f29d8d8025f',
          roomId: loginParams.roomId,
          userId: loginParams.userId
        };

        const config = {
          tenantId: loginParams.tenantId,
          userId: loginParams.userId,
          accessToken: loginParams.token,
          rtcConfig,
          roomId: loginParams.roomId,
          coCreationId: loginParams.coCreationId,
          shareScene: loginParams.shareScene,
        };

        if(isRtcLog) console.log('开始自动试穿流程，配置:', config);
        await tryonService.startTryonFlow(config);
        if(isRtcLog) console.log('✅ 试穿流程启动成功');
        return;
      }
console.log('性能调优 c1.0.0.7：' + new Date().toLocaleString() +' '+ performance.now() )
      if(isRtcLog) console.log('✅ 房间信息获取成功:', roomInfo);
      console.log('🔍 房间信息中的userId:', roomInfo.data.userId);

      const rtcConfig: RTCVideoConfig = {
        appId: '643e46acb15c24012c963951',
        appKey: 'b329b39ca8df4b5185078f29d8d8025f',
        roomId: roomInfo.data.roomId,
        //update by chao 2025.09.19
        // userId: roomInfo.data.userId || loginParams.userId
        userId: loginParams.userId
      };

      const config = {
        tenantId: loginParams.tenantId,
        userId: loginParams.userId,
        accessToken: loginParams.token,
        rtcConfig,
        roomId: roomInfo.data.roomId,
        coCreationId: loginParams.coCreationId,
        shareScene: loginParams.shareScene,
      };
console.log('性能调优 c1.0.0.8：' + new Date().toLocaleString() +' '+ performance.now() )
      console.log('开始自动试穿流程，配置:', config);
      await tryonService.startTryonFlow(config);
console.log('性能调优 c1.0.0.9：' + new Date().toLocaleString() +' '+ performance.now() )
      if(isRtcLog) console.log('✅ 试穿流程启动成功');

    } catch (error) {
      console.error('试穿流程启动失败:', error);
      hasStartedTryon.current = false;
      setShowSelectionScreen(true); // 出错时重新显示选择界面
    }
  };

  // 管理视频播放界面图标的自动隐藏
  useEffect(() => {
    if (!showSelectionScreen) {
      // 进入视频播放界面时，显示图标并开始定时器
      setShowVideoIcons(true);
      startIconHideTimer();

      return () => {
        // 清理定时器
        if (iconHideTimer) {
          clearTimeout(iconHideTimer);
          setIconHideTimer(null);
        }
      };
    }
  }, [showSelectionScreen]);

  // 清理定时器
  useEffect(() => {
    return () => {
      if (iconHideTimer) {
        clearTimeout(iconHideTimer);
      }
    };
  }, [iconHideTimer]);

  // 监听服饰列表更新事件
  useEffect(() => {
    const handleClothesListUpdate = (event: CustomEvent) => {
      const { clothesList } = event.detail;
      if(isRtcLog) console.log('收到服饰列表更新事件');
      if(isRtcLog) console.log('服饰分类数量:', clothesList?.length || 0);

      // 避免重复设置相同的数据
      setClothesList(prevClothesList => {
        // 如果新数据与当前数据相同，则不更新
        if (JSON.stringify(prevClothesList) === JSON.stringify(clothesList)) {
          if(isRtcLog) console.log('服饰列表数据未变化，跳过更新');
          return prevClothesList;
        }
        if(isRtcLog) console.log('服饰列表数据已更新');
        return clothesList || [];
      });
    };

    window.addEventListener('clothesListUpdate', handleClothesListUpdate as EventListener);

    return () => {
      window.removeEventListener('clothesListUpdate', handleClothesListUpdate as EventListener);
    };
  }, []);

  // 监听场景列表更新事件
  useEffect(() => {
    const handleScenesListUpdate = (event: CustomEvent) => {
      const { scenesList } = event.detail;
      console.log('收到场景列表更新事件');
      console.log('场景数量:', scenesList ? Object.keys(scenesList).length : 0);
      console.log('原始场景数据:', scenesList);

      if (scenesList && typeof scenesList === 'object' && Object.keys(scenesList).length > 0) {
        // 将服务器返回的场景数据转换为UI需要的格式
        // const newRealSceneIcons = Object.entries(scenesList).map(([id, scene]: [string, any], index) => {
        //   const iconData = {
        //     icon: realSceneActionIcon, // 使用默认图标
        //     name: scene.name || '未知场景',
        //     mapName: scene.code || 'Maps_unknown'
        //   };
        //   console.log(`场景 ${index}:`, iconData);
        //   return iconData;
        // });

        // console.log('转换后的场景列表:', newRealSceneIcons);
        // setRealSceneIcons(newRealSceneIcons);

        // 设置默认场景名称和音乐
        const cachedLoginData = getLoginCache();
        if (cachedLoginData && cachedLoginData.defaultSceneName) {
          setCurrentSceneName(cachedLoginData.defaultSceneName);
          switchSceneMusic(cachedLoginData.defaultSceneName);
        }
      } else {
        console.log('场景列表为空或格式不正确，保持默认场景');
      }
    };

    window.addEventListener('scenesListUpdate', handleScenesListUpdate as EventListener);

    return () => {
      window.removeEventListener('scenesListUpdate', handleScenesListUpdate as EventListener);
    };
  }, []);

  // 监听RTC视频流更新事件
  useEffect(() => {
    const handleVideoStreamUpdate = (event: CustomEvent) => {
      const { userId, domId, type } = event.detail;

      // 过滤掉userid=0的流
      if (type === 'add' && userId !== '0') {
        setVideoStreams(prev => {
          if (prev.find(stream => stream.userId === userId)) {
            return prev;
          }
          return [...prev, { userId, domId }];
        });
        console.log('添加视频流:', userId, domId);



        // 开始检查视频播放状态 - 立即开始，不延迟
        if(isRtcLog) console.log(`🔍 开始检查视频播放状态: ${userId} -> ${domId}`);
        checkVideoPlayingStatus(userId, domId);

        // 使用更频繁的检查策略，因为RTC SDK渲染时间不确定
        const checkVideoElement = (attempt: number = 1) => {
          if(isRtcLog) console.log(`🔍 第${attempt}次检查视频元素: ${domId}`);

          const videoElement = document.getElementById(domId);
          if (videoElement) {
            if(isRtcLog) console.log(`✅ 找到视频DOM元素: ${domId}`);
            if(isRtcLog) console.log(`🔍 DOM元素内容:`, videoElement.innerHTML);
            if(isRtcLog) console.log(`🔍 DOM元素标签名:`, videoElement.tagName);
            if(isRtcLog) console.log(`🔍 DOM元素类名:`, videoElement.className);

            // 尝试多种方式查找video标签
            let videoTag = videoElement.querySelector('video');
            if (!videoTag) {
              // 如果直接查找不到，尝试查找canvas（RTC可能使用canvas）
              const canvas = videoElement.querySelector('canvas');
              if (canvas) {
                if(isRtcLog) console.log(`✅ 找到canvas标签: ${domId}`);
                videoTag = canvas as any; // 临时处理
              }
            }

            if (videoTag) {
              if(isRtcLog) console.log(`✅ 找到video标签: ${domId}`);
              videoTag.style.width = '100%';
              videoTag.style.height = '100%';
              videoTag.style.objectFit = 'cover';

              // 添加更多调试信息
              if(isRtcLog) console.log(`📹 视频元素信息:`, {
                paused: videoTag.paused,
                ended: videoTag.ended,
                readyState: videoTag.readyState,
                currentTime: videoTag.currentTime,
                duration: videoTag.duration,
                src: videoTag.src
              });

              // 标记视频为播放状态
              setVideoPlayingStatus(prev => ({
                ...prev,
                [userId]: true
              }));

              return true; // 找到视频元素，停止检查
            } else {
              console.log(`❌ 未找到video标签: ${domId}`);
              // 打印所有子元素
              const children = videoElement.children;
              if(isRtcLog) console.log(`🔍 子元素数量:`, children.length);
              for (let i = 0; i < children.length; i++) {
                const child = children[i];
                if(isRtcLog) console.log(`🔍 子元素 ${i}:`, {
                  tagName: child.tagName,
                  className: child.className,
                  id: child.id
                });
              }
            }
          } else {
            console.log(`❌ 未找到视频DOM元素: ${domId}`);
          }

          // 使用更频繁的检查，减少间隔时间
          if (attempt < 20) { // 增加检查次数
            setTimeout(() => checkVideoElement(attempt + 1), 500); // 减少间隔到500ms
          } else {
            console.log(`⚠️ 视频元素检查超时: ${domId}`);
          }
        };

        // 立即开始检查，然后定期检查
        checkVideoElement();

        // 添加MutationObserver监听DOM变化，确保能及时检测到RTC SDK创建的video元素
        const observer = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            if (mutation.type === 'childList') {
              const addedNodes = Array.from(mutation.addedNodes);
              const hasVideoElement = addedNodes.some(node => {
                if (node.nodeType === Node.ELEMENT_NODE) {
                  const element = node as Element;
                  return element.tagName === 'VIDEO' || element.querySelector('video') || element.querySelector('canvas');
                }
                return false;
              });

              if (hasVideoElement) {
                console.log(`🎬 检测到新的视频元素添加到 ${domId}，立即检查`);
                checkVideoElement();
              }
            }
          });
        });

        // 开始观察DOM变化
        const videoElement = document.getElementById(domId);
        if (videoElement) {
          observer.observe(videoElement, {
            childList: true,
            subtree: true
          });

          // 10秒后停止观察，避免内存泄漏
          setTimeout(() => {
            observer.disconnect();
          }, 10000);
        }
      } else if (type === 'remove') {
        setVideoStreams(prev => prev.filter(stream => stream.userId !== userId));
        setVideoPlayingStatus(prev => {
          const newStatus = { ...prev };
          delete newStatus[userId];
          return newStatus;
        });
        console.log('移除视频流:', userId);
      }
    };

    // 监听播放器事件
    const handlePlayerEvent = (event: CustomEvent) => {
      const { eventType, userId } = event.detail;
      console.log('🎬 收到播放器事件:', eventType, userId);

      if (eventType === 'onFirstFrame') {
        if(isRtcLog) console.log('🎬 视频第一帧渲染完成，立即检查视频元素:', userId);
        const domId = `remoteStream_${userId}`;
        checkVideoPlayingStatus(userId, domId);
      } else if (eventType === 'canplay') {
        if(isRtcLog) console.log('🎬 视频可以播放，立即检查视频元素:', userId);
        const domId = `remoteStream_${userId}`;
        checkVideoPlayingStatus(userId, domId);
      }
    };

    // 监听RTC连接状态变化
    const handleRTCConnectionStatus = () => {
      if (rtcVideoService.getConnectionStatus()) {
        if(isRtcLog) console.log('✅ RTC连接成功，重置试穿流程标志');
        hasStartedTryon.current = false; // 重置标志，允许重新连接
      }
    };

    // 定期检查RTC连接状态
    const rtcStatusCheckInterval = setInterval(handleRTCConnectionStatus, 5000); // 每5秒检查一次

    window.addEventListener('rtcVideoStreamUpdate', handleVideoStreamUpdate as EventListener);
    window.addEventListener('rtcPlayerEvent', handlePlayerEvent as EventListener);

    return () => {
      window.removeEventListener('rtcVideoStreamUpdate', handleVideoStreamUpdate as EventListener);
      window.removeEventListener('rtcPlayerEvent', handlePlayerEvent as EventListener);
      clearInterval(rtcStatusCheckInterval);
    };
  }, []);

  // 监听地图切换结果事件
  useEffect(() => {
    const handleMapChangeResult = (event: CustomEvent) => {
      const { success, code, mapName, errorText } = event.detail;

      console.log('🗺️ 地图切换结果事件:', {
        success,
        code,
        mapName,
        errorText
      });

      if (success) {
        console.log('✅ 地图切换成功!', mapName);
      } else {
        console.log('❌ 地图切换失败!', mapName, '原因:', errorText);
      }
    };

    // 监听WebSocket的地图切换结果
    window.addEventListener('mapChangeResult', handleMapChangeResult as EventListener);

    // 监听RTC的地图切换结果
    const handleRTCMapChangeResult = (event: CustomEvent) => {
      const { message, timestamp } = event.detail;

      console.log('🗺️ RTC地图切换结果事件:', {
        message,
        timestamp
      });

      // 解析消息内容
      if (message.includes('change_map')) {
        console.log('✅ RTC地图切换消息已收到:', message);
        // 这里可以添加更多处理逻辑
      }
    };

    window.addEventListener('rtcMapChangeResult', handleRTCMapChangeResult as EventListener);

    return () => {
      window.removeEventListener('mapChangeResult', handleMapChangeResult as EventListener);
      window.removeEventListener('rtcMapChangeResult', handleRTCMapChangeResult as EventListener);
    };
  }, []);

  // 清理录制相关资源
  useEffect(() => {
    return () => {
      // 清理定时扣费相关定时器
      if (deductionTimerRef.current) {
        clearInterval(deductionTimerRef.current);
      }
      if (playTimeTimerRef.current) {
        clearInterval(playTimeTimerRef.current);
      }
    };
  }, []);

  // 如果缺少必要参数，显示加载页面
  if (!loginParams) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f8f9fa',
        flexDirection: 'column',
        padding: '20px'
      }}>
        <div style={{ fontSize: '16px', marginBottom: '10px', color: '#1890ff' }}>
          🔄 正在验证登录信息...
        </div>
        <div style={{ fontSize: '14px', color: '#666' }}>
          请稍等，正在从缓存读取登录信息
        </div>
      </div>
    );
  }
  // 选择界面
  if (showSelectionScreen) {
    return (
      <div style={{
        minHeight: '100vh',
        backgroundColor: '#a8d5ba', // 浅绿色背景
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
      }}
      onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          if (homeOptEl?.current) {
            (homeOptEl?.current as any).closeOpen();
          }
      }}
      >
        <HomeOpt ref={homeOptEl} toPage={(type) => toPage(type)} hotClick={(flag: boolean) => handleHotClick(flag)} actionClick={(msg: any) => handleActionModelClick(msg)} loginScene={loginScene}/>
        {/* 音乐开始 */}
        <ReactHowler
          src={musicUrl}
          playing={musicPlay}
        />
        {/* 音乐结束 */}
        {/* 顶部标题区域 - 与视频播放界面对齐 */}
        {/* <div style={{
          position: 'fixed',
          top: '0',
          left: '0',
          right: '0',
          zIndex: 10,
          background: 'linear-gradient(180deg, rgba(168,213,186,0.9) 0%, rgba(168,213,186,0.7) 50%, transparent 100%)',
          color: '#333',
          padding: '20px 20px 60px 20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <h1 style={{
            margin: 0,
            fontSize: '24px',
            fontWeight: 'bold',
            textAlign: 'center'
          }}>
            {roomName}
          </h1>
        </div> */}

        {/* 中间图标区域 - 左右布局 */}
        <div style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '100px 20px 140px 20px', // 与视频播放界面相同的padding
          position: 'relative'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'stretch', // 改为stretch，让左右两侧高度一致
            justifyContent: 'space-between',
            maxWidth: '600px', // 增加最大宽度，给展开提供更多空间
            width: '100%',
            padding: '0 10px', // 减少左右padding，让icon更靠边缘
            height: '400px' // 固定高度，确保对齐
          }}>
            {/* 左侧动作和实景图标 */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center', // 居中对齐
              alignItems: 'flex-start',
              height: '100%',
              gap: '40px', // 与右侧保持一致的间距
              position: 'relative',
              transform: 'translateY(30px)' // 向下移动
            }}>
              {/* 热力图区域 */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                {/* 热力图图标 */}
                {/* <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '8px',
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease'
                }}
                  onClick={() => handleHeatMapClick()}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px',
                    borderRadius: '12px',
                    backgroundColor: isHeatMapEnabled ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.6)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    border: isHeatMapEnabled ? '2px solid #ff4d4f' : '2px solid transparent'
                  }}>
                    <img
                      src={heatMapIcon}
                      alt="松紧热图"
                      style={{
                        width: '24px',
                        height: '24px',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                  <div style={{
                    fontSize: '10px',
                    color: '#333',
                    fontWeight: 'normal',
                    textAlign: 'center',
                    lineHeight: '1',
                    whiteSpace: 'nowrap'
                  }}>
                    松紧热图
                  </div>
                </div> */}
              </div>

              {/* 动作区域 */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                {/* 主动作图标 */}
                {/* <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '8px',
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease'
                }}
                  onClick={() => handleActionClick()}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px',
                    borderRadius: '12px',
                    backgroundColor: isActionExpanded ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.6)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    border: isActionExpanded ? '2px solid #1890ff' : '2px solid transparent'
                  }}>
                    <img
                      src={isActionExpanded ? actionIcons[selectedActionIndex].icon : defaultActionIcon.icon}
                      alt={isActionExpanded ? actionIcons[selectedActionIndex].name : defaultActionIcon.name}
                      style={{
                        width: '24px',
                        height: '24px',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                  <div style={{
                    fontSize: '10px',
                    color: '#333',
                    fontWeight: 'normal',
                    textAlign: 'center',
                    lineHeight: '1',
                    whiteSpace: 'nowrap'
                  }}>
                    {isActionExpanded ? actionIcons[selectedActionIndex].name : defaultActionIcon.name}
                  </div>
                </div> */}

                {/* 展开的动作选项 */}
                {/* {isActionExpanded && (
                  <div style={{
                    display: 'flex',
                    gap: '8px', // 减少间距，确保不超出屏幕
                    animation: 'slideInFromLeft 0.3s ease'
                  }}>
                    {actionIcons.map((action, index) => (
                      <div key={index} style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '4px',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                        onClick={() => handleActionClick(index)}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'scale(1.1)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'scale(1)';
                        }}
                      >
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '40px', // 缩小尺寸
                          height: '40px',
                          borderRadius: '10px', // 与主图标保持一致
                          backgroundColor: selectedActionIndex === index ? 'rgba(24,144,255,0.2)' : 'rgba(255,255,255,0.8)',
                          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                          border: selectedActionIndex === index ? '2px solid #1890ff' : '2px solid transparent'
                        }}>
                          <img
                            src={action.icon}
                            alt={action.name}
                            style={{
                              width: '20px', // 缩小图标尺寸
                              height: '20px',
                              objectFit: 'contain'
                            }}
                          />
                        </div>
                        <div style={{
                          fontSize: '9px', // 缩小字体
                          color: selectedActionIndex === index ? '#1890ff' : '#333',
                          fontWeight: selectedActionIndex === index ? 'bold' : 'normal',
                          textAlign: 'center',
                          lineHeight: '1',
                          whiteSpace: 'nowrap'
                        }}>
                          {action.name}
                        </div>
                      </div>
                    ))}
                  </div>
                )} */}
              </div>

              {/* 实景区域已删除 */}
            </div>
            {/* 右侧服装展示区域已删除 */}
          </div>
        </div>

        {/* 底部登台按钮 - 已隐藏，改为自动执行 */}
        {/* <div style={{
          position: 'fixed',
          bottom: '0',
          left: '0',
          right: '0',
          zIndex: 10,
          background: 'linear-gradient(0deg, rgba(168,213,186,0.9) 0%, rgba(168,213,186,0.7) 50%, transparent 100%)',
          padding: '60px 20px 20px 20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <button
            onClick={handleStartTryon}
            style={{
              backgroundColor: '#333',
              color: 'white',
              border: 'none',
              padding: '16px 60px',
              borderRadius: '25px',
              fontSize: '18px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
            }}
          >
            登台
          </button>
        </div> */}

        {/* 自动登台提示 */}
        {/* {showSelectionScreen && !hasLeftStage && (
          <div style={{
            position: 'fixed',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 10,
            backgroundColor: 'rgba(0,0,0,0.8)',
            color: 'white',
            padding: '12px 24px',
            borderRadius: '20px',
            fontSize: '14px',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <div style={{
              width: '16px',
              height: '16px',
              border: '2px solid #fff',
              borderTop: '2px solid transparent',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite'
            }}></div>
            正在自动登台...
          </div>
        )} */}



        {/* 右上角重新登录按钮 */}
        {/* <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('重新登录按钮被点击');
            // 清除缓存和服务状态
            clearLoginCache();
            tryonService.disconnect();
            console.log('✅ 已清除登录缓存和服务状态');
            navigate('/login');
          }}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            backgroundColor: '#ff4d4f !important',
            color: 'white !important',
            border: 'none !important',
            padding: '8px 16px',
            borderRadius: '6px',
            fontSize: '12px',
            cursor: 'pointer !important',
            fontWeight: 'bold',
            transition: 'all 0.3s ease',
            zIndex: 9999,
            boxShadow: '0 2px 8px rgba(255, 77, 79, 0.3)',
            outline: 'none !important',
            opacity: 1,
            pointerEvents: 'auto',
            display: 'inline-block',
            userSelect: 'none',
            WebkitUserSelect: 'none',
            MozUserSelect: 'none',
            msUserSelect: 'none'
          }}
          onMouseEnter={(e) => {
            console.log('鼠标悬停在重新登录按钮上');
            e.currentTarget.style.backgroundColor = '#ff7875';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            console.log('鼠标离开重新登录按钮');
            e.currentTarget.style.backgroundColor = '#ff4d4f';
            e.currentTarget.style.transform = 'scale(1)';
          }}
          onMouseDown={(e) => {
            console.log('重新登录按钮被按下');
            e.currentTarget.style.transform = 'scale(0.95)';
          }}
          onMouseUp={(e) => {
            console.log('重新登录按钮被释放');
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
        >
          🔄 重新登录
        </button> */}

        {/* 开发环境测试微信分享按钮 */}
        {/* {process.env.NODE_ENV === 'development' && (
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              console.log('测试微信分享按钮被点击');
              handleShareClick();
            }}
            style={{
              position: 'absolute',
              top: '20px',
              right: '120px',
              backgroundColor: '#07c160 !important',
              color: 'white !important',
              border: 'none !important',
              padding: '8px 16px',
              borderRadius: '6px',
              fontSize: '12px',
              cursor: 'pointer !important',
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
              zIndex: 9999,
              boxShadow: '0 2px 8px rgba(7, 193, 96, 0.3)',
              outline: 'none !important',
              opacity: 1,
              pointerEvents: 'auto',
              display: 'inline-block',
              userSelect: 'none',
              WebkitUserSelect: 'none',
              MozUserSelect: 'none',
              msUserSelect: 'none'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#52c41a';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#07c160';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            📤 测试分享
          </button>
        )} */}

        {/* 开发环境调试双指缩放按钮 */}
        {process.env.NODE_ENV === 'development' && (
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              console.log('调试双指缩放按钮被点击');
              debugPinchZoom();
            }}
            style={{
              position: 'absolute',
              top: '20px',
              right: '200px',
              backgroundColor: '#1890ff !important',
              color: 'white !important',
              border: 'none !important',
              padding: '8px 16px',
              borderRadius: '6px',
              fontSize: '12px',
              cursor: 'pointer !important',
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
              zIndex: 9999,
              boxShadow: '0 2px 8px rgba(24, 144, 255, 0.3)',
              outline: 'none !important',
              opacity: 1,
              pointerEvents: 'auto',
              display: 'inline-block',
              userSelect: 'none',
              WebkitUserSelect: 'none',
              MozUserSelect: 'none',
              msUserSelect: 'none'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#40a9ff';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#1890ff';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            🔍 调试缩放
          </button>
        )}

        {/* 开发环境调试场景列表按钮 */}
        {process.env.NODE_ENV === 'development' && (
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              console.log('调试场景列表按钮被点击');
              console.log('当前场景列表状态:', {
                realSceneIcons,
                selectedRealSceneIndex,
                isRealSceneExpanded,
                scenesListFromService: tryonService.getScenesList()
              });
            }}
            style={{
              position: 'absolute',
              top: '20px',
              right: '280px',
              backgroundColor: '#722ed1 !important',
              color: 'white !important',
              border: 'none !important',
              padding: '8px 16px',
              borderRadius: '6px',
              fontSize: '12px',
              cursor: 'pointer !important',
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
              zIndex: 9999,
              boxShadow: '0 2px 8px rgba(114, 46, 209, 0.3)',
              outline: 'none !important',
              opacity: 1,
              pointerEvents: 'auto',
              display: 'inline-block',
              userSelect: 'none',
              WebkitUserSelect: 'none',
              MozUserSelect: 'none',
              msUserSelect: 'none'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#9254de';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#722ed1';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            🎭 调试场景
          </button>
        )}
      </div>
    );
  }

  // 视频播放界面（原有的界面）
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#fff',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative'
    }}
    onClick={(e) => {
      e.preventDefault();
      e.stopPropagation();
      if (homeOptEl?.current) {
        (homeOptEl?.current as any).closeOpen();
      }
  }}
    >
      <HomeOpt  ref={homeOptEl} toPage={(type) => toPage(type)} hotClick={(flag: boolean) => handleHotClick(flag)} actionClick={(msg: any) => handleActionModelClick(msg)} loginScene={loginScene}/>
      {/* 音乐开始 */}
      <ReactHowler
        src={musicUrl}
        playing={musicPlay}
      />
      {/* 音乐结束 */}
      {/* 顶部标题区域 - 放在正中间 */}
      {/* <div style={{
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        zIndex: 200, // 提高z-index确保显示在视频和图标上方
        background: 'linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)',
        color: '#fff',
        padding: '20px 20px 60px 20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px'
      }}>
        <h1 style={{
          margin: 0,
          fontSize: '24px',
          fontWeight: 'bold',
          textAlign: 'center'
        }}>
          {roomName}
        </h1>
      </div> */}

      {/* 主要内容区域 - 包含左侧图标、视频和右侧图标 */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0', // 移除padding让视频铺满
        zIndex: 1,
        touchAction: 'none' // 屏蔽浏览器默认的触摸行为
      }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleTouchStart}
        onMouseMove={handleTouchMove}
        onMouseUp={handleTouchEnd}
        onMouseLeave={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
      >

        {/* 暂停图标 - 显示在视频正中央 */}
        {/* {isVideoPaused && (
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 150,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '80px',
            height: '80px',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            borderRadius: '50%',
            border: '2px solid rgba(255, 255, 255, 0.8)',
            animation: 'pulse 2s infinite'
          }}>
            <div style={{
              width: 0,
              height: 0,
              borderTop: '18px solid transparent',
              borderBottom: '18px solid transparent',
              borderLeft: '28px solid white',
              marginLeft: '6px'
            }} />
          </div>
        )} */}

        {/* 左侧图标区域 - 常驻显示 */}
        <div style={{
          position: 'fixed',
          left: '10px', // 更靠近左边缘
          top: '50%',
          transform: 'translateY(-20px)', // 向下移动，与选择界面保持一致
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center', // 居中对齐
          alignItems: 'flex-start',
          gap: '40px', // 与选择界面保持一致的间距
          height: '200px', // 固定高度，确保对齐
          zIndex: 200, // 提高z-index确保显示在视频上方
          pointerEvents: 'auto', // 确保点击事件正常工作
          touchAction: 'none' // 防止触摸事件被阻止
        }}>
          {/* 热力图区域 */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            {/* 热力图图标 */}
            {/* <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer',
              transition: 'transform 0.2s ease'
            }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleHeatMapClick();
              }}
              onTouchStart={(e) => {
                // 只处理单指触摸，双指触摸让给缩放处理
                if (e.touches.length === 1) {
                  e.stopPropagation();
                }
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                backgroundColor: isHeatMapEnabled ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.6)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                border: isHeatMapEnabled ? '2px solid #ff4d4f' : '2px solid transparent'
              }}>
                <img
                  src={heatMapIcon}
                  alt="松紧热图"
                  style={{
                    width: '24px',
                    height: '24px',
                    objectFit: 'contain'
                  }}
                />
              </div>
              <div style={{
                fontSize: '10px',
                color: '#fff',
                fontWeight: 'normal',
                textAlign: 'center',
                lineHeight: '1',
                whiteSpace: 'nowrap',
                textShadow: '0 1px 2px rgba(0,0,0,0.8)'
              }}>
                松紧热图
              </div>
            </div> */}
          </div>

          {/* 动作区域 */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            {/* 主动作图标 */}
            {/* <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer',
              transition: 'transform 0.2s ease'
            }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleVideoActionClick();
              }}
              onTouchStart={(e) => {
                // 只处理单指触摸，双指触摸让给缩放处理
                if (e.touches.length === 1) {
                  e.stopPropagation();
                }
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px', // 缩小尺寸
                height: '40px',
                borderRadius: '10px',
                backgroundColor: isActionExpanded ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.6)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                border: isActionExpanded ? '2px solid #1890ff' : '2px solid transparent'
              }}>
                <img
                  src={isActionExpanded ? actionIcons[selectedActionIndex].icon : defaultActionIcon.icon}
                  alt={isActionExpanded ? actionIcons[selectedActionIndex].name : defaultActionIcon.name}
                  style={{
                    width: '24px', // 缩小图标尺寸
                    height: '24px',
                    objectFit: 'contain'
                  }}
                />
              </div>
              <div style={{
                fontSize: '10px', // 缩小字体
                color: '#fff',
                fontWeight: 'normal',
                textAlign: 'center',
                lineHeight: '1',
                whiteSpace: 'nowrap',
                textShadow: '0 1px 2px rgba(0,0,0,0.8)'
              }}>
                {isActionExpanded ? actionIcons[selectedActionIndex].name : defaultActionIcon.name}
              </div>
            </div> */}

            {/* 展开的动作选项 */}
            {/* {isActionExpanded && (
              <div style={{
                display: 'flex',
                gap: '8px', // 减少间距，确保不超出屏幕
                animation: 'slideInFromLeft 0.3s ease'
              }}>
                {actionIcons.map((action, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '4px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleVideoActionClick(index);
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '40px', // 缩小尺寸
                      height: '40px',
                      borderRadius: '10px', // 与主图标保持一致
                      backgroundColor: selectedActionIndex === index ? 'rgba(24,144,255,0.2)' : 'rgba(255,255,255,0.8)',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                      border: selectedActionIndex === index ? '2px solid #1890ff' : '2px solid transparent'
                    }}>
                      <img
                        src={action.icon}
                        alt={action.name}
                        style={{
                          width: '20px', // 缩小图标尺寸
                          height: '20px',
                          objectFit: 'contain'
                        }}
                      />
                    </div>
                    <div style={{
                      fontSize: '9px', // 缩小字体
                      color: selectedActionIndex === index ? '#1890ff' : '#fff',
                      fontWeight: selectedActionIndex === index ? 'bold' : 'normal',
                      textAlign: 'center',
                      lineHeight: '1',
                      whiteSpace: 'nowrap',
                      textShadow: '0 1px 2px rgba(0,0,0,0.8)'
                    }}>
                      {action.name}
                    </div>
                  </div>
                ))}
              </div>
            )} */}
          </div>

          {/* 实景区域 - 只在有场景数据时显示 */}
          {realSceneIcons.length > 0 && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              position: 'relative' // 为绝对定位的展开选项提供定位基准
            }}>
              {/* 主实景图标 */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer',
                transition: 'transform 0.2s ease'
              }}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleVideoRealSceneClick();
                }}
                onTouchStart={(e) => {
                  // 只处理单指触摸，双指触摸让给缩放处理
                  if (e.touches.length === 1) {
                    e.stopPropagation();
                  }
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
              </div>

              {/* 展开的实景选项 */}
              {isRealSceneExpanded && (
                <div style={{
                  position: 'absolute',
                  left: '70px', // 向右展开
                  top: '0',
                  display: 'flex',
                  gap: '8px', // 减少间距，确保不超出屏幕
                  animation: 'slideInFromLeft 0.3s ease',
                  zIndex: 120
                }}>
                  {realSceneIcons.map((scene, index) => (
                    <div key={index} style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '4px',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        console.log(`🎬 点击视频界面实景按钮 ${index}:`, scene);
                        handleVideoRealSceneClick(index);
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    >
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '40px', // 缩小尺寸
                        height: '40px',
                        borderRadius: '10px', // 与主图标保持一致
                        backgroundColor: selectedRealSceneIndex === index ? 'rgba(82,196,26,0.2)' : 'rgba(255,255,255,0.8)',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                        border: selectedRealSceneIndex === index ? '2px solid #52c41a' : '2px solid transparent'
                      }}>
                        <img
                          src={scene.icon}
                          alt={scene.name}
                          style={{
                            width: '20px', // 缩小图标尺寸
                            height: '20px',
                            objectFit: 'contain'
                          }}
                        />
                      </div>
                      <div style={{
                        fontSize: '9px', // 缩小字体
                        color: selectedRealSceneIndex === index ? '#52c41a' : '#fff',
                        fontWeight: selectedRealSceneIndex === index ? 'bold' : 'normal',
                        textAlign: 'center',
                        lineHeight: '1',
                        whiteSpace: 'nowrap',
                        textShadow: '0 1px 2px rgba(0,0,0,0.8)'
                      }}>
                        {scene.name}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
        {/* 右侧图标区域 - 常驻显示  */}
        <div style={{
          position: 'fixed',
          right: '10px', // 更靠近左边缘
          top: '50%',
          transform: 'translateY(-20px)', // 向下移动，与选择界面保持一致
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center', // 居中对齐
          alignItems: 'flex-start',
          gap: '40px', // 与选择界面保持一致的间距
          height: '200px', // 固定高度，确保对齐
          zIndex: 200, // 提高z-index确保显示在视频上方
          pointerEvents: 'auto', // 确保点击事件正常工作
          touchAction: 'none' // 防止触摸事件被阻止
        }}>

          {/* 更多  环拍视频、美颜图、动作视频  */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>

            {/* 展开的动作选项 */}
            {/* {isMoveExpanded && (
              <div style={{
                display: 'flex',
                gap: '8px', // 减少间距，确保不超出屏幕
                animation: 'slideInFromLeft 0.3s ease'
              }}>
                {moveIcons.map((action, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '4px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleVideoMoveClick(index);
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '40px', // 缩小尺寸
                      height: '40px',
                      borderRadius: '10px', // 与主图标保持一致
                      backgroundColor: selectedMoveIndex === index ? 'rgba(24,144,255,0.2)' : 'rgba(255,255,255,0.8)',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                      border: selectedMoveIndex === index ? '2px solid #1890ff' : '2px solid transparent'
                    }}>
                      <img
                        src={action.icon}
                        alt={action.name}
                        style={{
                          width: '20px', // 缩小图标尺寸
                          height: '20px',
                          objectFit: 'contain'
                        }}
                      />
                    </div>
                    <div style={{
                      fontSize: '9px', // 缩小字体
                      color: selectedMoveIndex === index ? '#1890ff' : '#fff',
                      fontWeight: selectedMoveIndex === index ? 'bold' : 'normal',
                      textAlign: 'center',
                      lineHeight: '1',
                      whiteSpace: 'nowrap',
                      textShadow: '0 1px 2px rgba(0,0,0,0.8)'
                    }}>
                      {action.name}
                    </div>
                  </div>
                ))}
              </div>
            )} */}
            {/* 更多图标 */}
            {/* <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer',
              transition: 'transform 0.2s ease'
            }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleVideoMoveClick();
              }}
              onTouchStart={(e) => {
                // 只处理单指触摸，双指触摸让给缩放处理
                if (e.touches.length === 1) {
                  e.stopPropagation();
                }
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px', // 缩小尺寸
                height: '40px',
                borderRadius: '10px',
                backgroundColor: isMoveExpanded ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.6)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                border: isMoveExpanded ? '2px solid #1890ff' : '2px solid transparent'
              }}>
                <img
                  src={defaultMoveIcon.icon}
                  alt={defaultMoveIcon.name}
                  style={{
                    width: '24px', // 缩小图标尺寸
                    height: '24px',
                    objectFit: 'contain'
                  }}
                />
              </div>
              <div style={{
                fontSize: '10px', // 缩小字体
                color: '#fff',
                fontWeight: 'normal',
                textAlign: 'center',
                lineHeight: '1',
                whiteSpace: 'nowrap',
                textShadow: '0 1px 2px rgba(0,0,0,0.8)'
              }}>
                {defaultMoveIcon.name}
              </div>
            </div> */}
          </div>
        </div>
        {/* 视频播放区域 - 全屏显示 */}
        {videoStreams.length === 0 ? (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff',
            zIndex: 10
          }}>
            {/* <div style={{
              textAlign: 'center',
              color: '#fff',
              padding: '40px 20px'
            }}>
              <div style={{ fontSize: '48px', marginBottom: '20px' }}>📹</div>
              <div style={{ fontSize: '20px', marginBottom: '12px' }}>
                等待视频流...
              </div>
              <div style={{ fontSize: '14px', opacity: 0.7 }}>
                试穿流程正在进行中，请稍候
              </div>
              <div style={{ fontSize: '12px', opacity: 0.5, marginTop: '10px' }}>
                当前视频流数量: {videoStreams.length}
              </div>
              <button 
                onClick={() => {
                  console.log('🔍 调试：检查所有视频流DOM元素');
                  videoStreams.forEach(stream => {
                    const element = document.getElementById(stream.domId);
                    if (element) {
                      console.log(`🔍 ${stream.domId}:`, {
                        tagName: element.tagName,
                        className: element.className,
                        innerHTML: element.innerHTML,
                        children: element.children.length
                      });
                    }
                  });
                }}
                style={{
                  marginTop: '10px',
                  padding: '5px 10px',
                  fontSize: '12px',
                  backgroundColor: '#1890ff',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                调试DOM结构
              </button>
            </div> */}
          </div>
        ) : (
          // 视频流全屏显示
          videoStreams.map(stream => (
            <div key={stream.userId} style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              backgroundColor: '#000',
              zIndex: 10,
              overflow: 'hidden'
            }}>
              <div
                id={stream.domId}
                style={{
                  width: '100vw',
                  height: '100vh',
                  backgroundColor: '#333',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontSize: '16px',
                  position: 'relative'
                }}
              >
                {/* 只在视频未播放时显示加载文本 */}
                {/* {!videoPlayingStatus[stream.userId] && (
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                    zIndex: 2,
                    backgroundColor: 'rgba(0,0,0,0.7)',
                    padding: '20px',
                    borderRadius: '8px'
                  }}>
                    <div style={{ fontSize: '24px', marginBottom: '8px' }}>🎬</div>
                    <div>加载视频中...</div>
                  </div>
                )} */}
              </div>
            </div>
          ))
        )}

      </div>

      {/* 底部控制区域 - 已移除，按钮现在在录制按钮旁边 */}

      {/* 分享提示 */}
      {showShareTip && (
        <div style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 300,
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          color: 'white',
          padding: '20px',
          borderRadius: '12px',
          textAlign: 'center',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
          animation: 'fadeIn 0.3s ease',
          maxWidth: '300px',
          minWidth: '250px'
        }}>
          <div style={{
            fontSize: '24px',
            marginBottom: '10px',
            color: shareTipType === 'success' ? '#52c41a' : shareTipType === 'error' ? '#ff4d4f' : '#1890ff'
          }}>
            {shareTipType === 'success' ? '✅' : shareTipType === 'error' ? '❌' : '📤'}
          </div>
          <div style={{ fontSize: '16px', marginBottom: '8px' }}>
            {shareTipType === 'success' ? '复制成功' : shareTipType === 'error' ? '复制失败' : '微信分享'}
          </div>
          <div style={{ fontSize: '14px', opacity: 0.8, lineHeight: '1.4' }}>
            {shareTipMessage}
          </div>
          {shareTipType === 'success' && (
            <div style={{
              fontSize: '12px',
              color: '#52c41a',
              marginTop: '8px',
              padding: '4px 8px',
              backgroundColor: 'rgba(82, 196, 26, 0.1)',
              borderRadius: '4px'
            }}>
              分享链接：https://baidu.com
            </div>
          )}
        </div>
      )}

      {/* 双指缩放提示 - 只在开发环境显示 */}
      {process.env.NODE_ENV === 'development' && (
        <div style={{
          position: 'fixed',
          bottom: '100px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 300,
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          color: 'white',
          padding: '12px 20px',
          borderRadius: '20px',
          fontSize: '14px',
          textAlign: 'center',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
          animation: 'fadeIn 0.3s ease'
        }}>
          <div style={{ marginBottom: '8px' }}>🔍 双指缩放测试</div>
          <div style={{ fontSize: '12px', opacity: 0.8 }}>
            在视频区域使用双指进行缩放操作
          </div>
        </div>
      )}

      {/* 离开舞台按钮 - 完全透明，在底部中间 */}
      {/* {!showSelectionScreen && (
              <div style={{
                position: 'fixed',
                bottom: '30px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 300
              }}>
                <button
                  onClick={async () => {
                    try {
                      console.log('🚪 用户点击离开舞台按钮');
                      
                      // 断开WebSocket连接
                      if (webSocketService) {
                        webSocketService.disconnect();
                        console.log('✅ WebSocket连接已断开');
                      }
                      
                      // 断开RTC连接
                      if (rtcVideoService) {
                        try {
                          await rtcVideoService.leaveRoom();
                          rtcVideoService.destroy();
                          console.log('✅ RTC连接已断开');
                        } catch (error) {
                          console.warn('⚠️ RTC断开时出现警告:', error);
                        }
                      }
                      
                      // 断开试衣服务
                      if (tryonService) {
                        tryonService.disconnect();
                        console.log('✅ 试衣服务已断开');
                      }
                      

                      setShowSelectionScreen(true);
                      setHasLeftStage(true);
                      
                      console.log('✅ 所有资源已清理，准备返回首页');
                      
                      // 返回首页
                      navigate('/');
                      
                    } catch (error) {
                      console.error('❌ 离开舞台时发生错误:', error);
                      // 即使出错也返回首页
                      navigate('/');
                    }
                  }}
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    color: 'white',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '25px',
                    padding: '12px 30px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    backdropFilter: 'blur(5px)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  离开舞台
                </button>
              </div>
            )} */}



      {/* 余额弹窗 */}
      <DownloadAppModal
        isOpen={showBalanceModal}
        onClose={() => setShowBalanceModal(false)}
        title="体验已结束"
        description="请下载APP继续体验更多功能！"
        buttonText="去下载APP"
        showCloseButton={true}
      />

      {/* 分享弹窗 */}
      <ShareModal
        isOpen={showShareModal}
        onClose={handleCloseShareModal}
        onShare={handleShareToFriend}
        shareData={{
          title: WECHAT_CONFIG.DEFAULT_SHARE.title,
          desc: WECHAT_CONFIG.DEFAULT_SHARE.desc,
          link: WECHAT_CONFIG.DEFAULT_SHARE.link,
          imgUrl: WECHAT_CONFIG.DEFAULT_SHARE.imgUrl
        }}
      />

        {/* 创建模型弹窗 */}
        <CreateModelModal
          isOpen={showCreateModelModal}
          onClose={() => setShowCreateModelModal(false)}
          onCreateModel={() => {
            // 不要在这里关闭弹窗，让CreateModelModal内部处理
            console.log('开始创建模型流程');
          }}
        />

        {/* 固定下载APP提示 */}
        {/* <FixedDownloadPrompt /> */}
      </div>
    );
  };

const Home = () => {
  const [step, setStep] = useState<string>('home'); // home 
  //<--add by chao 2025.10.01
//   const animationFrameRef = useRef<number | null>(null);
//   const lastTimeRef = useRef<number>(0);
//   const targetFPS = 30; // 目标帧率30FPS
//   const interval = 1000 / targetFPS;
//   const boxRef = useRef(null);
//   const angleRef = useRef(0);

// // 帧率控制逻辑
//   useEffect(() => {
//     // alert('ssss');
//     if (boxRef.current) {
//       boxRef.current.style.transform = `rotate(${angleRef.current}deg)`;
//     }
//     const animate = (currentTime: number) => {
//       if (currentTime - lastTimeRef.current >= interval) {
//         // 在这里添加需要每帧执行的逻辑
//         // 例如更新动画状态或渲染数据
//         angleRef.current += 2;
//         boxRef.current.style.transform = `rotate(${angleRef.current}deg)`;
//         alert('动画帧执行');
//         lastTimeRef.current = currentTime;
//       }
//       animationFrameRef.current = requestAnimationFrame(animate);
//     };

//     animationFrameRef.current = requestAnimationFrame(animate);
    
//     return () => {
//       let requestId = requestAnimationFrame(animate);
//       cancelAnimationFrame(requestId);
//     };
//   }, []);

  //-->add by chao 2025.10.01
  const onClickBack = () => {
    setStep('home');
  }
  return (
    <>
    <div style={step === 'home' ? {}: {display: 'none'}}>
      <HomeVideo goToPage={(msg) => setStep(msg)} />
    </div>
    {step === 'create-model' && <CreateModel onBack={onClickBack}/>}
    {step === 'upload-action' && <UploadAction onBack={onClickBack}/>}
    {step === 'subs-package' && <SubscribePackage onBack={onClickBack}/>}
    <BrowseHistory isShow={step === 'browse-historry'} onBack={onClickBack}/>
    </>
  )
}

export default Home; 