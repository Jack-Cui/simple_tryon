import { TabBar, TabBarItem } from 'tdesign-mobile-react';
import './index.css';
import { useEffect, useRef, useState } from 'react';
import Poster from './components/Poster';
import Vedio from './components/Vedio';
import D3 from './components/D3';
import Empty from './components/Empty';
import IconPageTo from './components/IconPageTo';
import { useLoginScene } from '../../contexts/LoginSceneContext';
import CreateModel from '../CreateModel';
import UploadAction from '../UploadAction';
import SubscribePackage from '../SubscribePackage';
import BrowseHistory from '../BrowseHistory';
import { modelAPI } from '../../services/api';
import { getLoginCache } from '../../utils/loginCache';
import WatermarkMsg from '../../assets/watermark-msg.png';
import WatermarkTitle from '../../assets/watermark-title.png';


const Room = () => {

    const [applyStatus, setApplyStatus] = useState<number | null>(null);
    const homeOptEl = useRef(null);
    const d3El = useRef(null);
    const { loginScene } = useLoginScene();
    const list = [
        { value: 'poster', label: '海报' },
        { value: 'vedio', label: '视频' },
        { value: '3d', label: '3D' },
    ];
    const [page, setPage] = useState('room');
    const [isEmpty, setIsEmpty] = useState(false);
    const [value, setValue] = useState('poster');
    const change = (changeValue: any) => {
        // 隐藏/展示3D试穿功能
        // if (changeValue === '3d') {
        //     alert('功能即将上线，敬请期待！');
        //     return;
        // }
        setValue(changeValue);
        console.log('TabBar 值改变为：', changeValue);
    };

    const handleHotClick = (flag: boolean) => {
        if (d3El?.current) {
            (d3El?.current as any).handleHotClick(flag);
        }
    }

    useEffect(() => {
        console.log('当前值：', value);
    }, [value]);
    useEffect(() => {
        getModelList();
    }, [])

    //2025.10.26 现有逻辑：根据模型列表，判断是否进入空页面
    //TODO: 判断是否显示 “去创建模型”、“去查看建模情况”
    // 获取模型列表
    const getModelList = async () => {
        //chao:2025.10.15  
        const loginCache: any = getLoginCache();
        let qUserId = '';
        if (loginCache && loginCache.userId) {
            if (loginCache.coUserId) {
                qUserId = loginCache.coUserId;
            } else {
                qUserId = loginCache.userId;
            }
        } else {
            console.log('获取用户信息失败！');
            return;
        }
        console.log('获取模型列表，用户ID：' + qUserId);

        const response = await modelAPI.getModelList(loginCache.token, qUserId);
        const dataObj = JSON.parse(response.data);
        // if (!(dataObj.code !== 0 || !dataObj.data || dataObj.data.length === 0)) {
        console.log('dataObj', dataObj);

        //2025.10.26 TODO：应该改为：如果查询到成功的记录，就进入正式页面，否则无模型页面
        //页面跳转逻辑：是否展示无模型页面
        // if (dataObj.data && dataObj.data.length > 0 && dataObj.data[0].modelStatus === 4) {
        //     setIsEmpty(false)
        // } else {
        //     setIsEmpty(true)
        // }
        
        // if (dataObj.data && dataObj.data.length > 0 && dataObj.data[0].applyStatus) {
        //     console.log('dataObj.data.applyStatus', dataObj.data[0].applyStatus);
        //     setApplyStatus(dataObj.data[0].applyStatus);
        // }

        //2025.10.26：完善判断逻辑1
        //1）没有返回结果，就提示新建模型
        //2）有返回结果、但是没有成功的模型，就提示查看模型
        //3）有返回结果、有成功的模型，就进入正式页面
        // 处理数据逻辑
        if (!dataObj.data || dataObj.data.length === 0) {
            // 情况1：data没有数据            
            setIsEmpty(true);
        } else {
            // 检查是否有modelStatus=4的数据
            const hasValidModel = dataObj.data.some((item: any) => item.modelStatus === 4);            
            if (hasValidModel) {
                // 情况2：有modelStatus=4的数据
                setIsEmpty(false);
            } else {
                // 情况3：有数据但没有modelStatus=4的数据
                setApplyStatus(1);
                setIsEmpty(true);
            }
        }

    }
    return (
        
        <>

            <div className="room"
                style={page === 'room' ? {} : { display: 'none' }}
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (homeOptEl?.current) {
                        (homeOptEl?.current as any).closeOpen();
                    }
                }}
            >
                {
                    isEmpty ?
                        <Empty toPageCreateModel={() => setPage('create-model')} applyStatus={applyStatus} />
                        :
                        <>
                            <Poster isShow={value === 'poster'} />
                            <Vedio isShow={value === 'vedio'} />
                            <D3 ref={d3El} isShow={value === '3d'} />
                            <div className='room-bottom-tab-bar' style={{ zIndex: value === 'poster' ? 99 : 1099 }} >
                                <div className='room-page-fix'>
                                    <div onClick={() => change('poster')} className={value === 'poster' ? 'active' : ''}>试穿海报</div>
                                    <div onClick={() => change('vedio')} className={value === 'vedio' ? 'active' : ''}>动感模拟</div>
                                    {/* 隐藏/展示3D试穿功能 */}
                                    <div onClick={() => change('3d')} className={value === '3d' ? 'active' : ''}>尺码合身</div>
                                </div>
                               
                            </div>
                        </>
                }
                
                
                <IconPageTo ref={homeOptEl} hideWatermark={isEmpty} showLeft={value === '3d'} toPage={(type) => setPage(type)} hotClick={(flag: boolean) => handleHotClick(flag)} loginScene={loginScene} />
            </div>
            {/* 2025.10.24 */}
            {/* {page === 'create-model' && <CreateModel onBack={() => setPage('room')} />} */}
            {page === 'create-model' && <CreateModel onBack={() => setPage('room')} onModelCreated={getModelList} />}
            {page === 'upload-action' && <UploadAction onBack={() => setPage('room')} />}
            {page === 'subs-package' && <SubscribePackage onBack={() => setPage('room')} />}
            <BrowseHistory isShow={page === 'browse-historry'} onBack={() => setPage('room')} />
        </>
    )
}

export default Room;