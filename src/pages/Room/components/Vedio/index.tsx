import { useEffect, useRef, useState } from 'react';
import './index.css';
import RoomLoad from '../Loading';
import { tryonService } from "../../../../services/tryonService";
import { modelAPI, roomAPI } from "../../../../services/api";
import { getLoginCache } from "../../../../utils/loginCache";

interface Props {
    isShow?: boolean;
}
const Vedio = (props: Props) => {
//自动轮询事件，加载所需的图片和视频
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
                        console.log('获取到视频:', ',dataObj.data.videoPathBack:',dataObj.data.videoPathBack,',dataObj.data.videoPathFront:',dataObj.data.videoPathFront,',dataObj.data.videoPathCloth:',dataObj.data.videoPathCloth);
                        if((!videoPathBackUrl) || videoPathBackUrl === "" ){
                            if(dataObj.data.videoPathBack){
                               setVideoPathBack(dataObj.data.videoPathBack);                               
                            }                            
                        }
                         if((!videoPathFrontUrl) || videoPathFrontUrl === "" ){
                            if(dataObj.data.videoPathFront){
                               setVideoPathFrontUrl(dataObj.data.videoPathFront);
                            }                            
                        }
                        if((!videoPathClothUrl) || videoPathClothUrl === "" ){
                            if(dataObj.data.videoPathCloth){
                               setVideoPathClothUrl(dataObj.data.videoPathCloth);
                            }                            
                        }
                        if(videoPathFrontUrl && videoPathFrontUrl !== "" && videoPathBackUrl && videoPathBackUrl !== "" && videoPathClothUrl && videoPathClothUrl !== ""){
                            //都获取到，再停止轮询
                            clearInterval(videoTimer);
                        }                                                                       
                    }
                }, 5000);
                
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
    
    // // update by chao 2025.10.04 安卓微信环境下 video 标签无法自动播放，需手动调用 play 方法    
    const videoRefMain = useRef<HTMLVideoElement>(null);
    const videoRefSmall = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const video = videoRefMain.current;
      if (!video) return;

      // 检查视频是否意外暂停
      if (video.paused && !video.ended) {
        console.log('检测到视频暂停，尝试恢复播放...');
        video.play().catch(error => {
          console.log('恢复播放失败:', error);
        });
      }
    }, 500); // 每秒检查一次

    return () => {
      clearInterval(interval); // 清理interval
    };
  }, []);


    // useEffect(() => {
    //     const video = videoRefMain.current;

    //     if (!video) {
    //         alert('video 元素未找到');
    //         return;
    //     };
    //     const handleVisibilityChange = () => {        
    //     if (!document.hidden && video.paused) {
    //         alert('页面可见，尝试播放视频!');
    //         video.play().catch(e => console.log('Autoplay prevented:', e));
    //     }
    //     };

    //     document.addEventListener('visibilitychange', handleVisibilityChange);
        
    //     return () => {
    //     document.removeEventListener('visibilitychange', handleVisibilityChange);
    //     };
    // }, []);

    //动态获取视频地址-正面视频（只有获取到正面视频，才结束loading状态）
    const [videoPathFrontUrl, setVideoPathFrontUrl] = useState<string>('');
    //动态获取视频地址-背身视频
    const [videoPathBackUrl, setVideoPathBack] = useState<string>('');  //动态获取视频地址-详细视频
    const [videoPathClothUrl, setVideoPathClothUrl] = useState<string>('');
    const [videoNum, setVideoNum] = useState<number>(0);
    const initSingleVideo = (video: HTMLVideoElement | null): Promise<void> => {
        return new Promise((resolve) => {
            if (!video) return resolve();

            video.muted = true;
            const playAttempt = setInterval(() => {
                video.play()
                    .then(() => {
                        clearInterval(playAttempt);
                        resolve();
                    })
                    .catch(() => { });
            }, 300);


        });
    };


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


    useEffect(() => {
        if (videoPathFrontUrl) {
            const initVideos = async () => {
                await Promise.all([
                    initSingleVideo(videoRefMain.current),
                    initSingleVideo(videoRefSmall.current)
                ]);
            };
    
            if (typeof WeixinJSBridge !== 'undefined') {
                WeixinJSBridge.invoke('getNetworkType', {}, initVideos);
            } else {
                document.addEventListener('WeixinJSBridgeReady', initVideos);
            }

        // const video = videoRefMain.current;
        //     if (!video) {
        //     alert('video 元素未找到1');
        //     return;
        // };

        // const handleVisibilityChange = () => {        
        // if (!document.hidden && video.paused) {
        //     alert('页面可见，尝试播放视频!');
        //     video.play().catch(e => console.log('Autoplay prevented:', e));
        // }
        // };

        // document.addEventListener('visibilitychange', handleVisibilityChange);
        
        // return () => {
        // document.removeEventListener('visibilitychange', handleVisibilityChange);
        // };

            // 页面显示时恢复播放
        // window.addEventListener('pageshow', function(event) {
        //     this.alert('页面显示事件触发1!');
        //     if (event.persisted) {
        //         console.log('页面从缓存恢复!!!');
        //         // 从缓存恢复的页面
        //         const video = videoRefMain.current;
        //         if (video) {
        //             try {
        //                 video.play().catch(e => {
        //                     console.log('页面恢复后播放失败');
        //                 });
        //             } catch (e) {
        //                 console.log('播放异常:', e);
        //             }
        //         }
        //     }
        // });
        }
    }, [videoPathFrontUrl]);

    //针对安卓微信环境的control属性特殊处理：
    const needControls = isWeixinAndroid();
    function isWeixinAndroid() {
        const ua = navigator.userAgent.toLowerCase();
        return /micromessenger/.test(ua) && /android/.test(ua);
    }
    useEffect(() => {
        if (videoPathFrontUrl) {
            // 安卓微信环境下主动调用 play
            if (needControls && videoRefMain.current) {
                videoRefMain.current.play().catch(() => { });
            }
            if (needControls && videoRefSmall.current) {
                videoRefSmall.current.play().catch(() => { });
            }
        }
    }, [videoPathFrontUrl]);
    

    const handleVideoEnded = () => {
        switch (videoNum) {
            case 0:
                // 
                if (videoPathClothUrl) {
                    setVideoNum(1);
                } else if (videoPathBackUrl) {
                    setVideoNum(2);
                } else {
                    setVideoNum(0);
                }
                break;
            case 1:
                if (videoPathBackUrl) {
                    setVideoNum(2);
                } else {
                    setVideoNum(0);
                }
                break;
            case 2:
                setVideoNum(0);
                break;

            default:
                break;
        }
        videoRefMain.current && videoRefMain.current.play();
    }
    return <div className="vedio" style={{ display: props.isShow ? 'block' : 'none' }}>
        {
            videoPathFrontUrl ?
                // <video src={videoNum === 0 ? videoPathFrontUrl : (videoNum === 1 ? videoPathBackUrl : videoPathClothUrl)} width="100%" height="100%"
                //     ref={videoRefMain}
                //     controls={needControls}
                //     autoPlay
                //     // loop
                //     onEnded={handleVideoEnded}
                //     muted
                //     playsInline
                //     webkit-playsinline
                //     x5-video-player-type="h5-page"
                //     x5-video-orientation="portraint"
                //     x5-video-player-fullscreen="false"
                //     preload="auto">
                //     您的浏览器不支持 video 标签。
                // </video>
                <video 
                src={videoNum === 0 ? videoPathFrontUrl : (videoNum === 1 ? videoPathClothUrl : videoPathBackUrl)}
                style={{
                    width: '100vw',
                    height: '100vh',
                    objectFit: 'cover'
                }}
                ref={videoRefMain}
                autoPlay
                muted
                playsInline
                // controls
                webkit-playsinline="true"
                x5-video-player-type="h5-page"
                x5-video-orientation="portraint"
                x5-video-player-fullscreen="false"
                preload="auto"
                onEnded={handleVideoEnded}
                >
                您的浏览器不支持 video 标签。
                </video>                
                :
                <RoomLoad />
        }

    </div>
}

export default Vedio;