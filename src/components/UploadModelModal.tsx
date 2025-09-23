import React, { useState, useRef } from 'react';
import './UploadModelModal.css';

interface UploadModelModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpload: (files: { images: File[]; videos: File[] }) => void;
}

const UploadModelModal: React.FC<UploadModelModalProps> = ({
  isOpen,
  onClose,
  onUpload
}) => {
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [selectedVideos, setSelectedVideos] = useState<File[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  
  const imageInputRef = useRef<HTMLInputElement>(null);
  const videoInputRef = useRef<HTMLInputElement>(null);

  console.log('UploadModelModal渲染，isOpen:', isOpen);

  if (!isOpen) {
    console.log('UploadModelModal未显示，isOpen为false');
    return null;
  }

  console.log('UploadModelModal正在显示');

  // 处理图片选择
  const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const imageFiles = files.filter(file => file.type.startsWith('image/'));
    setSelectedImages(prev => [...prev, ...imageFiles]);
  };

  // 处理视频选择
  const handleVideoSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const videoFiles = files.filter(file => file.type.startsWith('video/'));
    setSelectedVideos(prev => [...prev, ...videoFiles]);
  };

  // 移除图片
  const removeImage = (index: number) => {
    setSelectedImages(prev => prev.filter((_, i) => i !== index));
  };

  // 移除视频
  const removeVideo = (index: number) => {
    setSelectedVideos(prev => prev.filter((_, i) => i !== index));
  };

  // 处理上传
  const handleUpload = async () => {
    if (selectedImages.length === 0 && selectedVideos.length === 0) {
      alert('请至少选择一个图片或视频文件');
      return;
    }

    setIsUploading(true);
    try {
      await onUpload({
        images: selectedImages,
        videos: selectedVideos
      });
      // 上传成功后清空选择
      setSelectedImages([]);
      setSelectedVideos([]);
    } catch (error) {
      console.error('上传失败:', error);
      alert('上传失败，请重试');
    } finally {
      setIsUploading(false);
    }
  };

  // 格式化文件大小
  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="upload-model-modal-overlay" onClick={onClose}>
      <div className="upload-model-modal" onClick={(e) => e.stopPropagation()}>
        {/* 标题栏 */}
        <div className="modal-header">
          <span className="modal-title">上传模型素材</span>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        
        {/* 内容区域 */}
        <div className="modal-content">
          {/* 上传区域 */}
          <div className="upload-section">
            {/* 图片上传 */}
            <div className="upload-group">
              <h3>上传图片</h3>
              <div className="upload-area">
                <input
                  ref={imageInputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageSelect}
                  style={{ display: 'none' }}
                />
                <button
                  className="upload-button"
                  onClick={() => imageInputRef.current?.click()}
                >
                  <span className="upload-icon"></span>
                  <span>选择图片</span>
                </button>
                <p className="upload-hint">支持 JPG、PNG、GIF 格式</p>
              </div>
              
              {/* 已选择的图片 */}
              {selectedImages.length > 0 && (
                <div className="selected-files">
                  <h4>已选择的图片 ({selectedImages.length})</h4>
                  <div className="file-list">
                    {selectedImages.map((file, index) => (
                      <div key={index} className="file-item">
                        <div className="file-info">
                          <span className="file-name">{file.name}</span>
                          <span className="file-size">({formatFileSize(file.size)})</span>
                        </div>
                        <button
                          className="remove-button"
                          onClick={() => removeImage(index)}
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 视频上传 */}
            <div className="upload-group">
              <h3>上传视频</h3>
              <div className="upload-area">
                <input
                  ref={videoInputRef}
                  type="file"
                  accept="video/*"
                  multiple
                  onChange={handleVideoSelect}
                  style={{ display: 'none' }}
                />
                <button
                  className="upload-button"
                  onClick={() => videoInputRef.current?.click()}
                >
                  <span className="upload-icon"></span>
                  <span>选择视频</span>
                </button>
                <p className="upload-hint">支持 MP4、MOV、AVI 格式</p>
              </div>
              
              {/* 已选择的视频 */}
              {selectedVideos.length > 0 && (
                <div className="selected-files">
                  <h4>已选择的视频 ({selectedVideos.length})</h4>
                  <div className="file-list">
                    {selectedVideos.map((file, index) => (
                      <div key={index} className="file-item">
                        <div className="file-info">
                          <span className="file-name">{file.name}</span>
                          <span className="file-size">({formatFileSize(file.size)})</span>
                        </div>
                        <button
                          className="remove-button"
                          onClick={() => removeVideo(index)}
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* 按钮区域 */}
          <div className="modal-footer">
            <button 
              className="cancel-button"
              onClick={onClose}
              disabled={isUploading}
            >
              取消
            </button>
            <button 
              className="upload-submit-button"
              onClick={handleUpload}
              disabled={isUploading || (selectedImages.length === 0 && selectedVideos.length === 0)}
            >
              {isUploading ? '上传中...' : '开始上传'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadModelModal;
