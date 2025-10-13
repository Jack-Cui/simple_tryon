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
const Room = () => {
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
    return (
        <>
            <div className="room" 
            style={page === 'room' ? {}: {display: 'none'}}
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
                        <Empty />
                        :
                        <>
                            <Poster isShow={value === 'poster'} />
                            <Vedio isShow={value === 'vedio'} />
                            <D3 ref={d3El} isShow={value === '3d'} />
                            <div className='room-bottom-tab-bar'>
                                <TabBar value={value} onChange={change} shape="round" style={{ width: '50%' }} theme="tag" fixed={false} split={false}>
                                    {list.map((item, i) => (
                                        <TabBarItem key={item.value || i} value={item.value}>
                                            {item.label}
                                        </TabBarItem>
                                    ))}
                                </TabBar>
                            </div>
                        </>
                }
                <IconPageTo ref={homeOptEl} showLeft={value === '3d'} toPage={(type) => setPage(type)} hotClick={(flag: boolean) => handleHotClick(flag)} loginScene={loginScene} />
            </div>
            {page === 'create-model' && <CreateModel onBack={() => setPage('room')}/>}
            {page === 'upload-action' && <UploadAction onBack={() => setPage('room')}/>}
            {page === 'subs-package' && <SubscribePackage onBack={() => setPage('room')}/>}
            <BrowseHistory isShow={page === 'browse-historry'} onBack={() => setPage('room')}/>
        </>
    )
}

export default Room;