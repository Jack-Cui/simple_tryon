import React, { useState, useRef } from 'react';
import { uploadAPI } from '../services/api';
import { getLoginCache } from '../utils/loginCache';
import { tosUploadService, TosCredentials } from '../services/tosUploadService';
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
      // 获取登录缓存中的用户信息
      const loginCache = getLoginCache();
      if (!loginCache?.token) {
        throw new Error('用户未登录或登录信息缺失');
      }

      console.log('开始上传流程，图片数量:', selectedImages.length, '视频数量:', selectedVideos.length);
      
      let uploadResults: any[] = [];
      
      // 处理视频上传
      if (selectedVideos.length > 0) {
        console.log('开始处理视频上传');
        const tokenResponse = await uploadAPI.getUploadVedioToken(loginCache.token);
        
        if (tokenResponse.ok) {
          const tokenResult = JSON.parse(tokenResponse.data);
          console.log('获取视频上传token成功:', tokenResult);
          
          if (tokenResult.code === 0) {
            console.log('视频token数据结构:', tokenResult);
            console.log('credentials路径:', tokenResult.data?.result?.credentials);
            
            const credentials: TosCredentials = {
              accessKeyId: tokenResult.data.result.credentials.accessKeyId,
              secretAccessKey: tokenResult.data.result.credentials.secretAccessKey,
              sessionToken: tokenResult.data.result.credentials.sessionToken,
              expiredTime: tokenResult.data.result.credentials.expiredTime
            };
            
            console.log('构建的credentials:', credentials);
            
            // 对比视频和图片的凭证差异
            console.log('=== 视频上传凭证信息 ===');
            console.log('accessKeyId:', credentials.accessKeyId);
            console.log('secretAccessKey长度:', credentials.secretAccessKey?.length);
            console.log('sessionToken长度:', credentials.sessionToken?.length);
            console.log('expiredTime:', credentials.expiredTime);
            
            // 检查sessionToken是否包含正确的权限
            if (credentials.sessionToken) {
              try {
                const tokenParts = credentials.sessionToken.split('.');
                if (tokenParts.length >= 2) {
                  const payload = JSON.parse(atob(tokenParts[1]));
                  console.log('视频sessionToken payload:', payload);
                }
              } catch (e) {
                console.log('无法解析视频sessionToken payload');
              }
            }
            
            console.log('初始化TOS客户端用于视频上传');
            tosUploadService.initialize(credentials);
            
            console.log('开始上传视频文件');
            const videoResults = await tosUploadService.uploadFiles(selectedVideos);
            uploadResults.push(...videoResults);
            
            console.log('视频上传结果:', videoResults);
          } else {
            throw new Error(tokenResult.message || '获取视频上传token失败');
          }
        } else {
          throw new Error(`获取视频上传token失败: HTTP ${tokenResponse.status}`);
        }
      }
      
      // 处理图片上传
      if (selectedImages.length > 0) {
        console.log('开始处理图片上传');
        const tokenResponse = await uploadAPI.getUploadImageToken(loginCache.token);
        
        if (tokenResponse.ok) {
          const tokenResult = JSON.parse(tokenResponse.data);
          console.log('获取图片上传token成功:', tokenResult);
          
          if (tokenResult.code === 0) {
            console.log('图片token数据结构:', tokenResult);
            
            const credentials: TosCredentials = {
              accessKeyId: tokenResult.data.accessKeyId,
              secretAccessKey: tokenResult.data.secretAccessKey,
              sessionToken: tokenResult.data.sessionToken,
              expiredTime: tokenResult.data.expiredTime
            };
            
            console.log('构建的图片credentials:', credentials);
            
            // 对比视频和图片的凭证差异
            console.log('=== 图片上传凭证信息 ===');
            console.log('accessKeyId:', credentials.accessKeyId);
            console.log('secretAccessKey长度:', credentials.secretAccessKey?.length);
            console.log('sessionToken长度:', credentials.sessionToken?.length);
            console.log('expiredTime:', credentials.expiredTime);
            
            // 检查sessionToken是否包含正确的权限
            if (credentials.sessionToken) {
              try {
                const tokenParts = credentials.sessionToken.split('.');
                if (tokenParts.length >= 2) {
                  const payload = JSON.parse(atob(tokenParts[1]));
                  console.log('图片sessionToken payload:', payload);
                }
              } catch (e) {
                console.log('无法解析图片sessionToken payload');
              }
            }
            
            console.log('初始化TOS客户端用于图片上传');
            tosUploadService.initialize(credentials);
            
            console.log('开始上传图片文件');
            const imageResults = await tosUploadService.uploadFiles(selectedImages);
            uploadResults.push(...imageResults);
            
            console.log('图片上传结果:', imageResults);
          } else {
            throw new Error(tokenResult.message || '获取图片上传token失败');
          }
        } else {
          throw new Error(`获取图片上传token失败: HTTP ${tokenResponse.status}`);
        }
      }
      
      // 检查上传结果
      const failedUploads = uploadResults.filter(result => !result.success);
      if (failedUploads.length > 0) {
        console.error('部分文件上传失败:', failedUploads);
        alert(`部分文件上传失败: ${failedUploads.map(f => f.error).join(', ')}`);
      } else {
        console.log('所有文件上传成功:', uploadResults);
        alert(`上传成功！共上传 ${uploadResults.length} 个文件`);
        
        // 调用原来的上传回调
        await onUpload({
          images: selectedImages,
          videos: selectedVideos
        });
        
        // 上传成功后清空选择
        setSelectedImages([]);
        setSelectedVideos([]);
      }
      
    } catch (error) {
      console.error('上传失败:', error);
      alert(`上传失败: ${error instanceof Error ? error.message : '未知错误'}`);
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
