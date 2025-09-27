import { useNavigate } from "react-router-dom";
import { Navbar } from "tdesign-mobile-react";
import { IconFont } from 'tdesign-icons-react';
import './index.css';
import { useEffect, useState } from "react";
import { getLoginCache } from "../../utils/loginCache";
import { uploadAPI } from "../../services/api";
import ErrorToast from "../../components/errorToast";
const BrowseHistory = () => {
    const navigate = useNavigate();
    const [aigcList, setAigcList] = useState<any[]>([]);
    const [showError, setShowError] = useState(false);
    const [deleteMsg, setDeleteMsg] = useState({});

    useEffect(() => {
        getActionList();
    }, [])

    const getActionList = async () => {
        const loginCache: any = getLoginCache();
        if (!loginCache?.token) {
            throw new Error('用户未登录或登录信息缺失');
        }
        const resultResponse = await uploadAPI.getActionVideoResult(loginCache.token, 1, 10);
        if (resultResponse.ok) {
            const resultData = JSON.parse(resultResponse.data);
            console.log('动作视频结果:', resultData);

            if (resultData.code === 0) {
                setAigcList(resultData.data?.records || []);
                console.log('动作视频结果获取成功:', resultData.data?.records);
            } else {
                console.warn('获取动作视频结果失败:', resultData.message);
            }
        } else {
            console.warn('获取动作视频结果HTTP错误:', resultResponse.status);
        }
    }

    const clearAction = (msg: any) => {
        console.log(msg);
        setDeleteMsg(msg);
        setShowError(true);
    }

    const comfirmClear = async () => {
        const loginCache: any = getLoginCache();
        // const response = await uploadAPI.deleteActionVideo(loginCache.token, (deleteMsg as any).id);
        // if (response.ok) {
        //     const result = JSON.parse(response.data);
        //     if (result.code === 0) {
        //       console.log('删除动作视频成功:', result.data);
        //     //   alert('动作视频删除成功！');
        //     } else {
        //       throw new Error(result.message || '删除失败');
        //     }
        //   } else {
        //     throw new Error(`删除失败: HTTP ${response.status}`);
        //   }
    }

    const handleClick = () => {
        navigate(-1);
      }
    return (
        <div className="browse-history">
            <Navbar className='browse-history-navbar' fixed={false} leftArrow onLeftClick={handleClick}>收藏历史</Navbar>
            <div className="browse-history-content">
            {aigcList.map((item:any) => {
                return (
                    <div className='browse-history-content-detail'>
                    <div className='browse-history-content-detail-img'>
                        <img src={item.imgs || ''} alt="" />
                    </div>
                    <div className='browse-history-content-detail-info'>
                    <div className='browse-history-content-detail-info-item'>
                            <span>{item.remark || ''}</span>
                            {/* <IconFont name='edit-2' onClick={editAction} className='edit' size="large"/> */}
                        </div>
                        <div className='browse-history-detail-info-item'>
                            <span>{item.createTime || ''}</span>
                        </div>
                        <IconFont name='delete-1'  onClick={() => clearAction(item)} className='clear' style={{color:'red'}} size="large"/>
                    </div>
                </div>
                )
            })}
            <ErrorToast isConfirm info={'确认删除该视频？'} onBtnClick={comfirmClear} visible={showError} onClick={() => setShowError(false)}/>
            </div>
        </div>
    )
}
export default BrowseHistory;