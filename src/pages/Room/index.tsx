import { TabBar, TabBarItem } from 'tdesign-mobile-react';
import './index.css';
import { useEffect, useState } from 'react';
import Poster from './components/Poster';
import Vedio from './components/Vedio';
import D3 from './components/D3';
import Empty from './components/Empty';
const Room = () => {
    const list = [
        { value: 'poster', label: '海报' },
        { value: 'vedio', label: '视频' },
        { value: '3d', label: '3D' },
    ];
    const [isEmpty, setIsEmpty] = useState(true);
    const [value, setValue] = useState('poster');
    const change = (changeValue: any) => {
        setValue(changeValue);
        console.log('TabBar 值改变为：', changeValue);
    };

    useEffect(() => {
        console.log('当前值：', value);
    }, [value]);
    return <div className="room">
        {
            isEmpty ?
                <Empty />
                :
                <>
                    <Poster isShow={value === 'poster'} />
                    <Vedio isShow={value === 'vedio'} />
                    <D3 isShow={value === '3d'} />
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

    </div>
}

export default Room;