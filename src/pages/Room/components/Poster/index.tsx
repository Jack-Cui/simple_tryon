import { useEffect, useRef, useState } from "react";
import { Swiper } from "tdesign-mobile-react";
// import '@t-design/mobile/dist/css/tdesign-mobile.css';
import './index.css';
import RoomLoad from "../Loading/index";
import { tryonService } from "../../../../services/tryonService";
import { modelAPI, roomAPI } from "../../../../services/api";
import { getLoginCache } from "../../../../utils/loginCache";
import logoPic from "../../../../assets/watermark/tryon_logo.png";

interface Props {
    isShow?: boolean;
}
const Poster = (props: Props) => {
    //自动轮询事件，加载所需的图片和视频
    const pollRef = useRef<number | null>(null);
    useEffect(() => {
    const loginCache = getLoginCache();
    const shareScene = loginCache?.shareScene || "";

        const poll = () => {
            const { imageIds, videoId } = tryonService.getMediaIds();
            console.log('轮询结果:', { imageIds, videoId });
            // 1.获取imageIds, videoId
            if ((imageIds && imageIds.length > 0) && (videoId && videoId !== "")) {
                
                console.log('获取到数据，停止轮询');
                console.log('最终结果:', { imageIds, videoId });
                if (!loginCache?.token) {
                    throw new Error('用户未登录或登录信息缺失');
                }                
                // 2.分别设置4张图片轮询事件
                imageIds.forEach((imgId, idx) => {
                    const timer = setInterval(async () => {

                            console.log('轮询imgId查询AI图片地址:', imgId +' '+ performance.now());
                            let res = null;
                            //区分试衣模式和分享模式
                            if (shareScene !== "onshare") {
                                //试衣模式下
                                res = await modelAPI.getUserStartImage(imgId,loginCache.token); // 你的接口
                            }else{
                                res = await modelAPI.getUserStartImageOnShare(loginCache.coUserId, imgId, loginCache.token); // 你的接口
                            }
                            
                            if (res.ok ) {
                                const dataObj = JSON.parse(res.data);
                                if(dataObj.data && dataObj.data.imgUrl && dataObj.data.imgUrl !== ""){
                                    console.log('获取到图片:', dataObj.data.imgUrl);
                                    setImageList(prevList => [...prevList, dataObj.data.imgUrl]);
                                    console.log('停止轮询imgId:', imgId);
                                    clearInterval(timer);                                                          
                                }                                
                            }
                    }, 2000); // 每2秒轮询一次
                });                
                
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
    
    //动态获取图片地址
    const [imageList, setImageList] = useState<any[]>([])

    setTimeout(() => {
        const { imageIds, videoId } = tryonService.getMediaIds(); // 你自己的接口
        console.log('轮询中：');
        console.log('imageIds', imageIds);
        console.log('videoId', videoId);
    }, 5000);

    //<---------  测试开场图加载效果，用下面这段代码 --------->    
    // const imgUrls = [
    //     'https://admins3.tos-cn-shanghai.volces.com/aigc/video/1041_1760620009077.jpeg',
    //     'https://admins3.tos-cn-shanghai.volces.com/aigc/video/1042_1760620112078.jpeg',
    //     'https://admins3.tos-cn-shanghai.volces.com/aigc/video/1043_1760620220078.jpeg'
    // ];    
    // /*
    //    预加载逻辑：
    //    1.有第一张图片，就先展示一张，没有全部生成完之前，不支持滑动。
    //    2.四张图片全部生成完了，再出来轮播图。
    // */
    // const getImgList = () => {
    //     imgUrls.forEach((item, index) => {
    //         setTimeout(() => {
    //             setImageList(prevList => [...prevList, item]);
    //             console.log('轮询设置图片', item);
    //         }, (index + 1) * 5000); // 5秒、10秒、15秒...
    //     });
    // }

    // useEffect(() => {
    //     getImgList();
    // }, []);
    //<---------  测试开场图加载效果，用上面这段代码 --------->  

    useEffect(() => {
        // 添加事件监听器阻止滚动
        const preventScroll = (e: Event) => {
            e.preventDefault();
        };
        
        document.addEventListener('touchmove', preventScroll, false);
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
        
        // 清理函数，移除滚动限制
        return () => {
            document.removeEventListener('touchmove', preventScroll, false);
            document.body.style.overflow = 'auto';
            document.documentElement.style.overflow = 'auto';
        };
    }, []);
    const swiperItems = () => (
        
        <>
            {imageList.map((item, index) => (
                <Swiper.SwiperItem key={index}>
                    {/* <img style={{ height: '100%' }} src={item} /> */}
                    <div style={{
                    backgroundImage: `url(${item})`,
                    backgroundSize: 'cover',        // 背景图覆盖整个容器
                    backgroundPosition: 'center',   // 背景图居中显示
                    backgroundRepeat: 'no-repeat',  // 不重复显示背景图
                    width: '100vw',                 // 宽度占满视口宽度
                    height: '100vh'                 // 高度占满视口高度
                    }} />
                </Swiper.SwiperItem>
            ))}
        </>
    );
    return <div className="poster" style={{display: props.isShow ? 'block' : 'none'}}>
        {imageList.length > 0 ? 
            <>
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
        {/* 透明水印层 */}
        <div className="watermark-container">
            <div className="watermark-content">
                
            <div className="watermark-icon-tryon"><img src={logoPic} alt="airU logo" style={{ width: '100%', height: '100%', borderRadius: '50%' }} /></div>
                 
                                
                <div className="watermark-text">
                    airU
                </div>
            </div>
            <div className="watermark-content">
                <div className="watermark-icon">i</div>
                <div className="watermark-text">
                    内容使用AI技术个性化生成，由于技术局限性，<br/>
                    部分商品细节可能与实物存在差异，建议您以<br/>
                    实物为准。
                </div>
            </div>
        </div>
        </>
        :
        <RoomLoad />
        }
    </div>
}
export default Poster;