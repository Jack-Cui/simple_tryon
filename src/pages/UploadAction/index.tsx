
import { Button, Navbar } from "tdesign-mobile-react";
import UploadFile from "../../components/uploadFile";
import './index.css';
const infoList1 = [
    '1.光线与背景：光线明亮均匀，背景简洁非纯白；避免镜面反光和他人入镜。',
    '2.形象与着装：露额耳，无刘海，不戴眼镜饰品；穿贴身无装饰背心短裤，赤脚。',
    '3.设备与距离：后摄4K60帧；距人0.7–1米稳定绕行；相机始终与拍摄部位同高。',
    '4.拍摄流程：双脚分开站立，双臂侧举与腿成45°；45–60秒转4圈，顺序拍头→胸→臀腿→腿脚；最后拉远全身结束。'
  ];
const UploadAction = () => {
    const handleClick = () => {

    }

    const onConfrim = () => {

    }
    
    return (
        <div className="upload-action">
      <Navbar className='upload-action-navbar' fixed={false} leftArrow onLeftClick={handleClick}>上传个人视频</Navbar>
      <div className='content'>
        <UploadFile isPersonal title="请上传个人视频"  info={infoList1}/>
      </div>
      <div className='upload-action-btn'>
      <Button size="large" theme="light" block shape="round" style={{ border: 0, background: 'linear-gradient(90deg, #27DC9A 0%, #02DABF 100%)', color: '#fff' }} onClick={onConfrim}>确认上传</Button>
      </div> 
    </div>
    )
}
export default UploadAction;