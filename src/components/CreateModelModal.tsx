import React, { useState } from 'react';
import './CreateModelModal.css';
import UploadModelModal from './UploadModelModal';
import { modelAPI } from '../services/api';
import { getLoginCache } from '../utils/loginCache';

interface CreateModelModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateModel: () => void;
}

const CreateModelModal: React.FC<CreateModelModalProps> = ({
  isOpen,
  onClose,
  onCreateModel
}) => {
  const [showUploadModal, setShowUploadModal] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="create-model-modal-overlay" onClick={onClose}>
      <div className="create-model-modal" onClick={(e) => e.stopPropagation()}>
        {/* 标题栏 */}
        <div className="modal-header">
          <span className="modal-title">dev-h5.ai1010.cn 显示</span>
        </div>
        
        {/* 内容区域 */}
        <div className="modal-content">
          {/* 消息文本 */}
          <div className="modal-text">
            <p className="modal-message">您还没有制作自己的3D美颜模型</p>
          </div>

          {/* 按钮区域 */}
          <div className="modal-footer">
            <button 
              className="cancel-button"
              onClick={onClose}
            >
              再想想
            </button>
            <button 
              className="confirm-button"
              onClick={() => {
                console.log('去建模按钮被点击');
                console.log('当前showUploadModal状态:', showUploadModal);
                setShowUploadModal(true);
                console.log('设置showUploadModal为true');
                onCreateModel();
                console.log('调用onCreateModel回调');
              }}
            >
              去建模
            </button>
          </div>
        </div>
      </div>

      {/* 上传模型弹窗 */}
      <UploadModelModal
        isOpen={showUploadModal}
        onClose={() => setShowUploadModal(false)}
        onUpload={async (files) => {
          console.log('开始上传模型素材:', files);
          
          try {
            // 获取登录缓存中的用户信息
            const loginCache = getLoginCache();
            if (!loginCache?.token || !loginCache?.userId) {
              throw new Error('用户未登录或登录信息缺失');
            }
            
            console.log('上传的图片:', files.images);
            console.log('上传的视频:', files.videos);
            
            // 调用实际的上传接口
            const response = await modelAPI.uploadModelMaterials(
              loginCache.token,
              loginCache.userId,
              files
            );
            
            if (response.ok) {
              const result = JSON.parse(response.data);
              if (result.code === 0) {
                console.log('上传成功:', result.data);
                alert(`模型素材上传成功！\n模型ID: ${result.data.model_id}\n处理状态: ${result.data.processing_status}`);
                setShowUploadModal(false);
                onClose(); // 关闭整个弹窗
              } else {
                throw new Error(result.message || '上传失败');
              }
            } else {
              throw new Error(`上传失败: HTTP ${response.status}`);
            }
          } catch (error) {
            console.error('上传失败:', error);
            alert(`上传失败: ${error instanceof Error ? error.message : '未知错误'}`);
          }
        }}
      />
    </div>
  );
};

export default CreateModelModal;
