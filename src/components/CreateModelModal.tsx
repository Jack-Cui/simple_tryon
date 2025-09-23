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
        {/* 关闭按钮 */}
        <button className="close-button" onClick={onClose}>×</button>
        
        {/* 内容区域 */}
        <div className="modal-content">
          {/* 警告图标 */}
          <div className="warning-icon">
            <div className="icon-inner">
              <span className="exclamation-mark">!</span>
            </div>
          </div>

          {/* 消息文本 */}
          <div className="modal-text">
            <p className="modal-message">你还未创建模型</p>
          </div>

          {/* 创建按钮 */}
          <button 
            className="create-button"
            onClick={onCreateModel}
          >
            去创建
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateModelModal;
