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

        //页面跳转逻辑：是否展示无模型页面
        if (dataObj.data && dataObj.data.length > 0 && dataObj.data[0].modelStatus === 4) {
            setIsEmpty(false)
        } else {
            setIsEmpty(true)
        }
        console.log('dataObj.data.applyStatus', dataObj.data[0].applyStatus);
        if (dataObj.data && dataObj.data.length > 0 && dataObj.data[0].applyStatus) {
            setApplyStatus(dataObj.data[0].applyStatus);
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
                        <Empty toPage={() => setPage('create-model')} applyStatus={applyStatus} />
                        :
                        <>
                            <Poster isShow={value === 'poster'} />
                            <Vedio isShow={value === 'vedio'} />
                            <D3 ref={d3El} isShow={value === '3d'} />
                            <div className='room-bottom-tab-bar' style={{ zIndex: value === 'poster' ? 99 : 1099 }} >
                                <div className='room-page-fix'>
                                    <div onClick={() => change('poster')} className={value === 'poster' ? 'active' : ''}>海报</div>
                                    <div onClick={() => change('vedio')} className={value === 'vedio' ? 'active' : ''}>视频</div>
                                    <div onClick={() => change('3d')} className={value === '3d' ? 'active' : ''}>3D</div>
                                </div>
                                {/* <TabBar value={value} onChange={change} shape="round" style={{ width: '50%' }} theme="tag" fixed={false} split={false}>
                                    {list.map((item, i) => (
                                        <TabBarItem key={item.value || i} value={item.value}>
                                            {item.label}
                                        </TabBarItem>
                                    ))}
                                </TabBar> */}
                            </div>
                        </>
                }
                <IconPageTo ref={homeOptEl} showLeft={value === '3d'} toPage={(type) => setPage(type)} hotClick={(flag: boolean) => handleHotClick(flag)} loginScene={loginScene} />
            </div>
            {page === 'create-model' && <CreateModel onBack={() => setPage('room')} />}
            {page === 'upload-action' && <UploadAction onBack={() => setPage('room')} />}
            {page === 'subs-package' && <SubscribePackage onBack={() => setPage('room')} />}
            <BrowseHistory isShow={page === 'browse-historry'} onBack={() => setPage('room')} />
        </>
    )
}

export default Room;