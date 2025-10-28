import { Loading, Overlay, Progress, Swiper } from 'tdesign-mobile-react';
import './index.css';
import { useEffect, useState } from 'react';
// 导入轮播图目录下的所有图片
import img1 from '../../../../assets/loadSwaperPic/2c8423bedfe85a7fd9762f7ebf3d6d3d.jpg';
import img2 from '../../../../assets/loadSwaperPic/2f1ac91c6ebbd9bacfec566392185aef.jpg';
import img3 from '../../../../assets/loadSwaperPic/4163548b5904c0ab16876455b19acae0.jpg';
import img4 from '../../../../assets/loadSwaperPic/7ffd35b42d9d171e46e05121bc219380.jpg';
import img5 from '../../../../assets/loadSwaperPic/9a619a3954d95a7117176a990e684456.jpg';
import img6 from '../../../../assets/loadSwaperPic/b3429cc34b8fe7a8635d034599ba51dd.jpg';
import img7 from '../../../../assets/loadSwaperPic/c2b46ce62f36134fe500bc808c189935.jpg';
import img8 from '../../../../assets/loadSwaperPic/d1c6f08de6ffcd1863816176f3466632.jpg';
import img9 from '../../../../assets/loadSwaperPic/d5083d61af272e68bad2ba7b4ba92b3c.jpg';
import img10 from '../../../../assets/loadSwaperPic/dc9a5cd8734841cb4bdab68b6e500666.jpg';


interface Props {
    msg?: string;
}

const RoomLoad = (props: Props) => {
    const [imageList, setImageList] = useState<any[]>([]);
    const [percentage, setPercentage] = useState<number>(0);
    useEffect(() => {
        // 初始化轮播图片列表，包含所有loadSwaperPic目录下的图片
        setImageList([
            img1, img2, img3, img4, img5, img6, img7, img8, img9, img10
        ]);
    }, []);

    useEffect(() => {
        if (percentage < 92) {
            //chen提的需求:需要按80秒钟跑到99%
            const timerId = setInterval(() => {
                setPercentage(prevCount => prevCount + 1);
            }, 800);
            return () => {
                clearInterval(timerId);
            };
        }
        //注释说明：当percentage达到100时，停止转圈
        // else {
        //     setPercentage(0);
        // }
    }, [percentage]);

    // 生成轮播项
    const swiperItems = () => (
        <>
            {imageList.map((item, index) => (
                <Swiper.SwiperItem key={index}>
                    <div className="carousel-item">
                        <img 
                            src={item} 
                            alt={`轮播图${index + 1}`} 
                            style={{ 
                                width: '100%', 
                                height: '100%', 
                                objectFit: 'cover',
                                borderRadius: '8px'
                            }} 
                        />
                    </div>
                </Swiper.SwiperItem>
            ))}
        </>
    );

    return (
        <Overlay visible={true}>
            <div className='room-load'>
                {/* 轮播图区域 */}
                <div className="carousel-container">
                    <Swiper
                        height="400px"
                        interval={3000}
                        duration={500}
                        autoplay={true}
                        navigation={{ type: 'dots' }}
                    >
                        {swiperItems()}
                    </Swiper>
                </div>
                
                {/* 加载动画区域 */}
                <div className="loading-content">
                    <div style={{ textAlign: 'center' }}>
                        <div className='tips1' style={{ color: '#fff', fontSize: '18px', marginBottom: '5px' }}>
                            AI正在全力为您打造试衣效果...
                        </div>
                        <div className='tips2' style={{ color: '#fff', fontSize: '20px', fontWeight: 'bold', marginBottom: '20px' }}>
                            完成后即可为您呈现试穿效果
                        </div>
                        <div className='load-back'>
                        {/* <Loading/> */}
                            {/* <div style={{ width: '40px', height: '40px', border: '4px solid #f3f3f3', borderTop: '4px solid #3498db', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div> */}
                            <Progress theme="circle" size={42} percentage={percentage} label={false} color='#545151' strokeWidth={4} />
                        </div>
                    </div>
                </div>
            </div>
        </Overlay>
    );
};

export default RoomLoad;