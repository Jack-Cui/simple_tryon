import { useState } from "react";
import { Swiper } from "tdesign-mobile-react";
import './index.css';
interface Props {
    isShow?: boolean;
}
const Poster = (props: Props) => {
    const [imageList, setImageList] = useState([
        'https://admins3.tos-cn-shanghai.volces.com/20250904-01.jpg',
        'https://admins3.tos-cn-shanghai.volces.com/20250904-04.jpg',
        'https://admins3.tos-cn-shanghai.volces.com/20250904-07.jpg'
    ])
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
    </div>
}
export default Poster;