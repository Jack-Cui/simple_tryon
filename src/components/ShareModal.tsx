import React from 'react';
import './ShareModal.css';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShare: () => void;
  shareData: {
    title: string;
    desc: string;
    link: string;
    imgUrl: string;
  };
}

const ShareModal: React.FC<ShareModalProps> = ({
  isOpen,
  onClose,
  onShare,
  shareData
}) => {
  if (!isOpen) return null;

  return (
    <div className="share-modal-overlay" onClick={onClose}>
      <div className="share-modal" onClick={(e) => e.stopPropagation()}>
        <div className="share-modal-header">
          <h3>分享到</h3>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        
        <div className="share-preview">
          <div className="share-card">
            <div className="share-image">
              <img 
                src={shareData.imgUrl} 
                alt={shareData.title}
                onError={(e) => {
                  // 如果图片加载失败，显示默认占位符
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent && !parent.querySelector('.image-placeholder')) {
                    const placeholder = document.createElement('div');
                    placeholder.className = 'image-placeholder';
                    placeholder.innerHTML = '📷';
                    placeholder.style.cssText = `
                      width: 100%;
                      height: 100%;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      background: #f5f5f5;
                      font-size: 32px;
                      color: #ccc;
                    `;
                    parent.appendChild(placeholder);
                  }
                }}
              />
            </div>
            <div className="share-content">
              <h4 className="share-title">{shareData.title}</h4>
              <p className="share-desc">{shareData.desc}</p>
              <p className="share-link">{shareData.link}</p>
            </div>
          </div>
        </div>
        

        
        <div className="share-modal-footer">
          <button 
            className="footer-button cancel-button"
            onClick={onClose}
          >
            取消
          </button>
          <button 
            className="footer-button share-button-footer"
            onClick={onShare}
          >
            分享
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
