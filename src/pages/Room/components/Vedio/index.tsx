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
                            setVideoPathUrl(dataObj.data.videoPath);
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
    
    // // update by chao 2025.10.04 安卓微信环境下 video 标签无法自动播放，需手动调用 play 方法    
    const videoRefMain = useRef<HTMLVideoElement>(null);
    const videoRefSmall = useRef<HTMLVideoElement>(null);

    // 定时检查视频播放状态，尝试恢复播放
    useEffect(() => {
        const interval = setInterval(() => {
          
          const video = videoRefMain.current;
          if (!video) return;
          try{
            // 检查视频是否意外暂停
            if (video.paused && !video.ended) {
                console.log('检测到视频暂停，尝试恢复播放...');
                video.play().catch(error => {
                console.log('恢复播放失败:', error);
                });
            }
          }
          catch(e){
            console.log('视频元素获取异常:', e);
            return;
          }
        }, 500); // 每秒检查一次

        return () => {
          clearInterval(interval); // 清理interval
        };
      }, []);

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
                        autoPlay
                        muted
                        loop
                        playsInline
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
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