import React from 'react';
import './CreateModelModal.css';

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
              onClick={onCreateModel}
            >
              去建模
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateModelModal;
