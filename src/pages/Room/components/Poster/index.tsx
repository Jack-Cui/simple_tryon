import { useEffect, useState } from "react";
import { Swiper } from "tdesign-mobile-react";
import './index.css';
import RoomLoad from "../Loading";
interface Props {
    isShow?: boolean;
}
const Poster = (props: Props) => {
    const [imageList, setImageList] = useState<any[]>([])

    const getImgList = () => {
        // 这里写轮询接口
        [
        'https://admins3.tos-cn-shanghai.volces.com/20250904-01.jpg',
        'https://admins3.tos-cn-shanghai.volces.com/20250904-04.jpg',
        'https://admins3.tos-cn-shanghai.volces.com/20250904-07.jpg'
        ].forEach((item: any) => {
            // 轮询查询图片
            setTimeout(() => {
                setImageList([...imageList, item])
            }, 1000);
        })
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