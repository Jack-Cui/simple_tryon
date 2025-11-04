import { useEffect, useRef, useState } from 'react';
import './index.css';
import RoomLoad from '../Loading';
import { tryonService } from "../../../../services/tryonService";
import { modelAPI, roomAPI } from "../../../../services/api";
import { getLoginCache } from "../../../../utils/loginCache";

interface Props {
    isShow?: boolean;
    onContentReady?: (ready: boolean) => void;
}
const Vedio = (props: Props) => {
    const { isShow, onContentReady } = props;
    
    // 声明状态变量
    const [videoPathUrl, setVideoPathUrl] = useState<string>('');
    const [videoPathFrontUrl, setVideoPathFrontUrl] = useState<string>('');
    const [videoPathBackUrl, setVideoPathBack] = useState<string>('');
    const [videoPathClothUrl, setVideoPathClothUrl] = useState<string>('');
    const [videoNum, setVideoNum] = useState<number>(0);

    // 判断是否在微信环境
    const isWeixin = () => {
        const ua = navigator.userAgent.toLowerCase();
        return /micromessenger/.test(ua);
    };
    
    // 判断是否在安卓环境
    const isAndroid = () => {
        const ua = navigator.userAgent.toLowerCase();
        return /android/.test(ua);
    };
    
    // 安卓微信环境下需要特殊处理
    const needControls = isWeixin() && isAndroid();


    // 监听videoPathUrl变化，当有视频URL时通知父组件内容已准备就绪
    useEffect(() => {
        if (onContentReady && videoPathUrl) {
            onContentReady(true);
        }
    }, [videoPathUrl, onContentReady]);
    
    // 组件卸载时重置状态
    useEffect(() => {
        return () => {
            if (onContentReady) {
                onContentReady(false);
            }
        };
    }, [onContentReady]);
    
    // 自动轮询事件，加载所需的图片和视频
    const pollRef = useRef<number | null>(null);
    useEffect(() => {
        const poll = () => {
            const loginCache = getLoginCache();
            const shareScene = loginCache?.shareScene || "";
            
            const { imageIds, videoId } = tryonService.getMediaIds();
            console.log('轮询结果2:', { imageIds, videoId });
            // 1.获取imageIds, videoId
            if ((imageIds && imageIds.length > 0) && (videoId && videoId !== "")) {
                console.log('获取到数据，停止轮询2');
                console.log('最终结果:', { imageIds, videoId });
                if (!loginCache?.token) {
                    throw new Error('用户未登录或登录信息缺失');
                }
                
                //3. 轮询获取视频地址
                //videoPathFront ， videoPathBack ， videoPathCloth
                const videoTimer = setInterval(async () => {
                    let res = null;
                    //区分试衣模式和分享模式
                    if (shareScene !== "onshare") {
                        //试衣模式下
                        res = await modelAPI.getUserStartVideo(videoId,loginCache.token); // 你的接口
                    }else{
                        res = await modelAPI.getUserStartVideoOnShare(loginCache.coUserId, videoId, loginCache.token); // 你的接口
                    }
                    if (res.ok) {
                        const dataObj = JSON.parse(res.data);
                        console.log('轮询videoId查询AI视频地址:', videoId +' '+ performance.now());
                        console.log('获取到视频:', ',dataObj.data.videoPath:',dataObj.data.videoPath);
                        if(dataObj.data && dataObj.data.videoPath){ 
                            // 延迟10秒后设置视频路径
                            // setTimeout(() => {
                                setVideoPathUrl(dataObj.data.videoPath);
                                // 设置完URL后立即尝试播放
                                setTimeout(() => {
                                  const video = videoRefMain.current;
                                  if (video) {
                                    try {
                                      // 确保是静音状态
                                      video.muted = true;
                                      
                                      // 显式设置src以确保更新
                                      video.src = dataObj.data.videoPath;
                                      video.load();
                                      
                                      // 尝试播放
                                      video.play().then(() => {
                                        console.log('延迟设置URL后播放成功');
                                      }).catch(error => {
                                        console.log('首次播放失败，添加错误处理并准备重试:', error);
                                        // 1秒后重试
                                        setTimeout(() => {
                                          video.play().catch(err => {
                                            console.log('第二次播放尝试失败:', err);
                                            // 2秒后再次重试
                                            setTimeout(() => {
                                              video.play().catch(finalErr => {
                                                console.log('第三次播放尝试失败，等待用户交互:', finalErr);
                                              });
                                            }, 2000);
                                          });
                                        }, 1000);
                                      });
                                    } catch (err) {
                                      console.log('播放设置错误:', err);
                                    }
                                  }
                                }, 300); // 稍等一下确保video元素更新
                            // }, 10000);
                            clearInterval(videoTimer);
                        }

                        //2025.10.23 chao 注释：变更获取视频地址的逻辑，不再分3个视频查询，直接查询统一的视频地址
                        // console.log('轮询videoId查询AI视频地址:', videoId +' '+ performance.now());
                        // console.log('获取到视频:', ',dataObj.data.videoPathBack:',dataObj.data.videoPathBack,',dataObj.data.videoPathFront:',dataObj.data.videoPathFront,',dataObj.data.videoPathCloth:',dataObj.data.videoPathCloth);
                        // if((!videoPathBackUrl) || videoPathBackUrl === "" ){
                        //     if(dataObj.data.videoPathBack){
                        //        setVideoPathBack(dataObj.data.videoPathBack);                                
                        //     }                            
                        // }
                        //  if((!videoPathFrontUrl) || videoPathFrontUrl === "" ){
                        //     if(dataObj.data.videoPathFront){
                        //        setVideoPathFrontUrl(dataObj.data.videoPathFront);
                        //     }                            
                        // }
                        // if((!videoPathClothUrl) || videoPathClothUrl === "" ){
                        //     if(dataObj.data.videoPathCloth){
                        //        setVideoPathClothUrl(dataObj.data.videoPathCloth);
                        //     }                            
                        // }
                        // if(videoPathFrontUrl && videoPathFrontUrl !== "" && videoPathBackUrl && videoPathBackUrl !== "" && videoPathClothUrl && videoPathClothUrl !== ""){
                        //     //都获取到，再停止轮询
                        //     clearInterval(videoTimer);
                        // }                                                                        
                    }
                }, 1000);
                
                if (pollRef.current) {
                    clearTimeout(pollRef.current);
                }
                // 这里可以处理获取到的数据，比如 setImageList(imageIds)
                return;
            }
            // 继续轮询
            pollRef.current = window.setTimeout(poll, 1000);
        };
        // 开始轮询
        pollRef.current = window.setTimeout(poll, 1000);

        // 清理函数
        return () => {
            if (pollRef.current) {
                clearTimeout(pollRef.current);
            }
        };
    }, []);
    
    // 视频引用
    const videoRefMain = useRef<HTMLVideoElement>(null);
    const videoRefSmall = useRef<HTMLVideoElement>(null);
    
    // 简单直接的播放尝试函数
    const tryPlayVideo = () => {
        const video = videoRefMain.current;
        if (!video || !videoPathUrl) return;
        
        // 确保静音，这对于移动设备自动播放至关重要
        video.muted = true;
        
        // 尝试播放
        video.play()
            .then(() => {
                console.log('视频播放成功');
            })
            .catch((error) => {
                console.log('视频播放失败，将在用户交互时重试:', error);
            });
    };
    
    // 当视频URL变化时，尝试播放
    useEffect(() => {
        if (videoPathUrl && videoRefMain.current) {
            const video = videoRefMain.current;
            
            // 增强的播放尝试函数，包含重试逻辑
            const enhancedTryPlay = (attempt = 1, maxAttempts = 3) => {
                if (!video || attempt > maxAttempts) return;
                
                // 确保是静音状态
                video.muted = true;
                
                video.play().then(() => {
                    console.log(`第${attempt}次视频播放成功`);
                }).catch((error) => {
                    console.log(`第${attempt}次视频播放失败，将在${attempt * 1000}ms后重试:`, error);
                    setTimeout(() => {
                        enhancedTryPlay(attempt + 1, maxAttempts);
                    }, attempt * 1000); // 指数退避
                });
            };
            
            // 给视频元素一点时间来更新src属性
            setTimeout(() => {
                enhancedTryPlay();
            }, 500); // 稍长的延迟以确保视频元素完全更新
            
            // 监听多个视频加载事件
            const handleCanPlay = () => {
                console.log('视频可以播放了');
                enhancedTryPlay();
            };
            
            const handleLoadedData = () => {
                console.log('视频数据加载完成');
                enhancedTryPlay();
            };
            
            video.addEventListener('canplay', handleCanPlay);
            video.addEventListener('loadeddata', handleLoadedData);
            
            // 为视频元素本身添加更多交互监听
            const handleVideoInteraction = () => {
                enhancedTryPlay();
            };
            
            video.addEventListener('click', handleVideoInteraction);
            video.addEventListener('touchstart', handleVideoInteraction);
            video.addEventListener('pointerdown', handleVideoInteraction);
            
            return () => {
                video.removeEventListener('canplay', handleCanPlay);
                video.removeEventListener('loadeddata', handleLoadedData);
                video.removeEventListener('click', handleVideoInteraction);
                video.removeEventListener('touchstart', handleVideoInteraction);
                video.removeEventListener('pointerdown', handleVideoInteraction);
            };
        }
    }, [videoPathUrl]);
    
    // 用户交互时尝试播放
    useEffect(() => {
        if (!videoPathUrl) return;
        
        // 增强的播放尝试
        const enhancedTryPlay = () => {
            const video = videoRefMain.current;
            if (!video) return;
            
            video.muted = true;
            video.play().then(() => {
                console.log('全局交互触发视频播放成功');
            }).catch((error) => {
                console.log('全局交互触发播放失败:', error);
            });
        };
        
        const handleInteraction = () => {
            enhancedTryPlay();
            // 对于微信环境，保留监听器以确保可靠播放
            if (!isWeixin()) {
                document.removeEventListener('click', handleInteraction);
                document.removeEventListener('touchstart', handleInteraction);
                document.removeEventListener('keydown', handleInteraction);
            }
        };
        
        // 添加更多类型的交互事件监听器
        document.addEventListener('click', handleInteraction);
        document.addEventListener('touchstart', handleInteraction);
        document.addEventListener('keydown', handleInteraction);
        
        // 微信环境特殊处理
        if (isWeixin()) {
            const wxPlay = () => {
                setTimeout(enhancedTryPlay, 500); // 延迟播放以提高成功率
            };
            
            if (window.WeixinJSBridge) {
                WeixinJSBridge.invoke('getNetworkType', {}, wxPlay);
            } else {
                document.addEventListener('WeixinJSBridgeReady', () => {
                    WeixinJSBridge.invoke('getNetworkType', {}, wxPlay);
                });
            }
        }
        
        return () => {
            document.removeEventListener('click', handleInteraction);
            document.removeEventListener('touchstart', handleInteraction);
            document.removeEventListener('keydown', handleInteraction);
        };
    }, [videoPathUrl]);
    
    // 智能视频状态监控，确保视频持续播放
    useEffect(() => {
        if (!videoPathUrl) return;
        
        // 检查并尝试播放的函数
        const checkAndPlay = () => {
            const video = videoRefMain.current;
            if (!video) return;
            
            // 检查视频状态并采取相应措施
            if (videoPathUrl && video.paused && !video.ended) {
                console.log('检测到视频暂停，尝试恢复播放');
                
                // 先检查视频是否已加载
                if (video.readyState >= 2) { // HAVE_CURRENT_DATA
                    video.muted = true;
                    video.play().catch(error => {
                        console.log('恢复播放失败:', error);
                        // 如果播放失败，尝试重新加载视频
                        setTimeout(() => {
                            if (video) {
                                video.src = videoPathUrl;
                                video.load();
                                setTimeout(() => video.play(), 300);
                            }
                        }, 1000);
                    });
                }
            }
        };
        
        // 设置较长的检查间隔，减少性能影响
        const interval = setInterval(checkAndPlay, 2000);
        
        return () => clearInterval(interval);
    }, [videoPathUrl]);


    // //<---------  测试开场视频加载效果，用下面这段代码 --------->  
    // //测试预加载视频loading效果
    // const getVideoInfo = () => {
    //     // setTimeout(() => {
    //     //     setVideoPathFrontUrl('https://admins3.tos-cn-shanghai.volces.com/xinyu.mp4')
    //     // }, 3000)
    //     //加载背身视频
    //     setTimeout(() => {
    //         setVideoPathBack('https://admins3.tos-cn-shanghai.volces.com/aigc/video/1058_1760621239689.mp4');
    //         console.log('轮询设置视频', 'https://admins3.tos-cn-shanghai.volces.com/xinyu5.mp4');
    //     }, 5000); // 5秒、10秒、15秒...        
    //     //加载正面视频
    //     setTimeout(() => {
    //         setVideoPathFrontUrl('https://admins3.tos-cn-shanghai.volces.com/aigc/video/1057_1760621015780.mp4');
    //         console.log('轮询设置视频', 'https://admins3.tos-cn-shanghai.volces.com/xinyu3.mp4');
    //     }, 10000); // 5秒、10秒、15秒...     
    //     //加载细节视频
    //     setTimeout(() => {
    //         setVideoPathClothUrl('http://admins3.tos-s3-cn-shanghai.volces.com/4b976c0e7da549d5807116da687f79c7.mp4');
    //         console.log('轮询设置视频', 'https://admins3.tos-cn-shanghai.volces.com/xinyu2.mp4');
    //     }, 1000); // 5秒、10秒、15秒...            
    // }

    // //测试预加载视频
    // useEffect(() => {
    //     getVideoInfo();
    // }, [])
    //<---------  测试开场视频加载效果，用上面这段代码 ---------> 

    //2025.10.23 chao 注释：变更获取视频地址的逻辑，不再分3个视频查询，直接查询统一的视频地址
    // useEffect(() => {
    //     if (videoPathFrontUrl) {
    //         const initVideos = async () => {

    // 渲染部分（保留原组件的其余渲染逻辑）
    return (
        <div className="video-container" style={{display: props.isShow ? 'block' : 'none'}}>
            {videoPathUrl.length > 0 ? (
                <div className="video-content">
                    <video
                        ref={videoRefMain}
                        // controls={true}
                        muted
                        autoPlay
                        loop
                        playsInline
                        webkit-playsinline
                        x5-playsinline
                        x5-video-player-type="h5-page"
                        x5-video-orientation="portrait"
                        x5-video-player-fullscreen="false"
                        preload="metadata"
                        style={{ 
                            width: '100%', 
                            height: '100%', 
                            objectFit: 'cover',
                            display: 'block'
                        }}
                    >
                        <source src={videoPathUrl} type="video/mp4" />
                    </video>
                </div>
            ) : (
                <RoomLoad source="video" />
            )}
        </div>
    );
};

export default Vedio;