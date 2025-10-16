import { useEffect, useRef, useState } from "react";
import { Swiper } from "tdesign-mobile-react";
import './index.css';
import RoomLoad from "../Loading";
import { tryonService } from "../../../../services/tryonService";
import { modelAPI, roomAPI } from "../../../../services/api";
import { getLoginCache } from "../../../../utils/loginCache";

interface Props {
    isShow?: boolean;
}
const Poster = (props: Props) => {
    //自动轮询事件，加载所需的图片和视频
    // const pollRef = useRef<number | null>(null);
    // useEffect(() => {
    //     const poll = () => {
    //         const { imageIds, videoId } = tryonService.getMediaIds();
    //         console.log('轮询结果:', { imageIds, videoId });
    //         // 1.获取imageIds, videoId
    //         if ((imageIds && imageIds.length > 0) && (videoId && videoId !== "")) {
    //             const loginCache = getLoginCache();
    //             console.log('获取到数据，停止轮询');
    //             console.log('最终结果:', { imageIds, videoId });
    //             if (!loginCache?.token) {
    //                 throw new Error('用户未登录或登录信息缺失');
    //             }                
    //             // 2.分别设置4张图片轮询事件
    //             imageIds.forEach((imgId, idx) => {
    //                 const timer = setInterval(async () => {

    //                         console.log('轮询imgId查询AI图片地址:', imgId +' '+ performance.now());
    //                         const res = await modelAPI.getUserStartImage(imgId,loginCache.token); // 你的接口
    //                         if (res.ok ) {
    //                             const dataObj = JSON.parse(res.data);
    //                             if(dataObj.data.imgUrl && dataObj.data.imgUrl !== ""){
    //                                 console.log('获取到图片:', dataObj.data.imgUrl);
    //                                 setImageList(prevList => [...prevList, dataObj.data.imgUrl]);
    //                                 console.log('停止轮询imgId:', imgId);
    //                                 clearInterval(timer);                                                          
    //                             }                                
    //                         }
    //                 }, 2000); // 每2秒轮询一次
    //             });
    //             //3. 轮询获取视频地址
    //             //videoPathFront ， videoPathBack ， videoPathCloth
    //             const videoTimer = setInterval(async () => {
    //                 const res = await modelAPI.getUserStartVideo(videoId,loginCache.token); // 你的接口
    //                 if (res.ok) {
    //                     const dataObj = JSON.parse(res.data);
    //                     console.log('轮询videoId查询AI视频地址:', videoId +' '+ performance.now());
    //                     console.log('获取到视频:', ',dataObj.data.videoPathBack:',dataObj.data.videoPathBack,',dataObj.data.videoPathFront:',dataObj.data.videoPathFront,',dataObj.data.videoPathCloth:',dataObj.data.videoPathCloth);
    //                     if((!videoPathBackUrl) || videoPathBackUrl === "" ){
    //                         if(dataObj.data.videoPathBack){
    //                            setVideoPathBack(dataObj.data.videoPathBack);
    //                         }                            
    //                     }
    //                      if((!videoPathFrontUrl) || videoPathFrontUrl === "" ){
    //                         if(dataObj.data.videoPathFront){
    //                            setVideoPathFrontUrl(dataObj.data.videoPathFront);
    //                         }                            
    //                     }
    //                     if((!videoPathClothUrl) || videoPathClothUrl === "" ){
    //                         if(dataObj.data.videoPathCloth){
    //                            setVideoPathClothUrl(dataObj.data.videoPathCloth);
    //                         }                            
    //                     }
    //                     if(videoPathFrontUrl && videoPathFrontUrl !== "" && videoPathBackUrl && videoPathBackUrl !== "" && videoPathClothUrl && videoPathClothUrl !== ""){
    //                         //都获取到，再停止轮询
    //                         clearInterval(videoTimer);
    //                     }                                                                       
    //                 }
    //             }, 2000);
                
    //             if (pollRef.current) {
    //                 clearTimeout(pollRef.current);
    //             }
    //             // 这里可以处理获取到的数据，比如 setImageList(imageIds)
    //             return;
    //         }
    //         // 继续轮询
    //         pollRef.current = window.setTimeout(poll, 1000);
    //     };
    //     // 开始轮询
    //     pollRef.current = window.setTimeout(poll, 1000);

    //     // 清理函数
    //     return () => {
    //         if (pollRef.current) {
    //             clearTimeout(pollRef.current);
    //         }
    //     };
    // }, []);  
    
    //动态获取图片地址
    const [imageList, setImageList] = useState<any[]>([])
    //动态获取视频地址-正面视频（只有获取到正面视频，才结束loading状态）
    const [videoPathFrontUrl, setVideoPathFrontUrl] = useState<string>('')
    //动态获取视频地址-背身视频
    const [videoPathBackUrl, setVideoPathBack] = useState<string>('')   //动态获取视频地址-详细视频
    const [videoPathClothUrl, setVideoPathClothUrl] = useState<string>('')


    setTimeout(() => {
        const { imageIds, videoId } = tryonService.getMediaIds(); // 你自己的接口
        console.log('轮询中：');
        console.log('imageIds', imageIds);
        console.log('videoId', videoId);
    }, 5000);

    const imgUrls = [
        'https://admins3.tos-cn-shanghai.volces.com/20250904-01.jpg',
        'https://admins3.tos-cn-shanghai.volces.com/20250904-04.jpg',
        'https://admins3.tos-cn-shanghai.volces.com/20250904-07.jpg'
    ];
    
    /*
       预加载逻辑：
       1.有第一张图片，就先展示一张，没有全部生成完之前，不支持滑动。
       2.四张图片全部生成完了，再出来轮播图。
    */
    const getImgList = () => {
        imgUrls.forEach((item, index) => {
            setTimeout(() => {
                setImageList(prevList => [...prevList, item]);
                console.log('轮询设置图片', item);
            }, (index + 1) * 5000); // 5秒、10秒、15秒...
        });
    }

    useEffect(() => {
        getImgList();
    }, []);
    const swiperItems = () => (
        <>
            {imageList.map((item, index) => (
                <Swiper.SwiperItem key={index}>
                    <img style={{ height: '100%' }} src={item} />
                </Swiper.SwiperItem>
            ))}
        </>
    );
    return <div className="poster" style={{display: props.isShow ? 'block' : 'none'}}>
        {imageList.length > 0 ? 
            <Swiper
            height="100%"
            interval={3000}
            duration={500}
            autoplay={true}
            defaultCurrent={1}
            navigation={{ type: 'dots' }}
        >
            {swiperItems()}
        </Swiper>
        :
        <RoomLoad />
        }
    </div>
}
export default Poster;