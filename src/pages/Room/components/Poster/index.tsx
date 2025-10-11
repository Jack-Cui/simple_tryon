import { useState } from "react";
import { Swiper } from "tdesign-mobile-react";
import './index.css';
interface Props {
    isShow?: boolean;
}
const Poster = (props: Props) => {
    const [imageList, setImageList] = useState([
        'https://tdesign.gtimg.com/mobile/demos/swiper1.png',
        'https://tdesign.gtimg.com/mobile/demos/swiper2.png',
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