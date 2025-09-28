import React, { useState, useRef } from 'react';
import { uploadAPI, modelAPI } from '../services/api';
import { getLoginCache } from '../utils/loginCache';
import { tosUploadService, TosCredentials } from '../services/tosUploadService';
import { ttpUploadService, TTPCredentials } from '../services/ttpUploadService';
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
  const [selectedActionVideos, setSelectedActionVideos] = useState<File[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [isUploadingActionVideo, setIsUploadingActionVideo] = useState(false);
  const [actionVideoResults, setActionVideoResults] = useState<any[]>([]);
  
  const imageInputRef = useRef<HTMLInputElement>(null);
  const videoInputRef = useRef<HTMLInputElement>(null);
  const actionVideoInputRef = useRef<HTMLInputElement>(null);

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

  // 处理动作视频选择
  const handleActionVideoSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const videoFiles = files.filter(file => file.type.startsWith('video/'));
    setSelectedActionVideos(prev => [...prev, ...videoFiles]);
  };

  // 移除图片
  const removeImage = (index: number) => {
    setSelectedImages(prev => prev.filter((_, i) => i !== index));
  };

  // 移除视频
  const removeVideo = (index: number) => {
    setSelectedVideos(prev => prev.filter((_, i) => i !== index));
  };

  // 移除动作视频
  const removeActionVideo = (index: number) => {
    setSelectedActionVideos(prev => prev.filter((_, i) => i !== index));
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
      
      // 初始化模型URL
      let modelPictureUrl = '';
      let modelVideoUrl = '';
      
      // 检查是否至少有一个文件
      if (selectedImages.length === 0 && selectedVideos.length === 0) {
        alert('请至少选择一个图片或视频文件');
        return;
      }
      
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
            
            // 如果视频上传成功，使用第一个视频的URL
            if (videoResults.length > 0 && videoResults[0].success && videoResults[0].url) {
              modelVideoUrl = videoResults[0].url;
              console.log('设置视频URL:', modelVideoUrl);
            }
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
            console.log('tokenResult.data:', tokenResult.data);
            console.log('sessionToken:', tokenResult.data?.sessionToken);
            
            // 检查 sessionToken 是否存在
            if (!tokenResult.data?.sessionToken) {
              throw new Error('获取到的 sessionToken 为空，请检查服务器返回的数据结构');
            }
            
            const credentials: TTPCredentials = {
              stsToken: {
                accessKeyId: tokenResult.data.accessKeyId,
                secretAccessKey: tokenResult.data.secretAccessKey,
                sessionToken: tokenResult.data.sessionToken,
                expiredTime: tokenResult.data.expiredTime
              },
              userId: '1234567890', // 可以根据实际需要设置
              appId: 653371 // 可以根据实际需要设置
            };
            
            console.log('初始化TTP客户端用于图片上传');
            ttpUploadService.initialize(credentials);
            
            console.log('开始上传图片文件');
            const imageResults = await ttpUploadService.uploadFiles(selectedImages);
            uploadResults.push(...imageResults);
            
            console.log('图片上传结果:', imageResults);
            
            // 如果图片上传成功，使用第一个图片的URL
            if (imageResults.length > 0 && imageResults[0].success && imageResults[0].url) {
              modelPictureUrl = imageResults[0].url;
              console.log('设置图片URL:', modelPictureUrl);
            }
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
        console.log('模型图片URL:', modelPictureUrl);
        console.log('模型视频URL:', modelVideoUrl);
        
        // 检查是否至少有一个URL
        if (!modelPictureUrl && !modelVideoUrl) {
          alert('上传失败，无法获取文件URL');
          return;
        }
        
        // 调用创建模型API
        console.log('开始创建模型...');
        const createModelResponse = await modelAPI.createModel(loginCache.token, modelPictureUrl, modelVideoUrl, 180);
        
        if (createModelResponse.ok) {
          const createResult = JSON.parse(createModelResponse.data);
          console.log('创建模型响应:', createResult);
          
          if (createResult.code === 0) {
            console.log('创建模型成功:', createResult.data);
            alert(`模型创建成功！\n图片: ${modelPictureUrl ? '已上传' : '无'}\n视频: ${modelVideoUrl ? '已上传' : '无'}`);
            
            // 调用原来的上传回调
            await onUpload({
              images: selectedImages,
              videos: selectedVideos
            });
            
            // 上传成功后清空选择
            setSelectedImages([]);
            setSelectedVideos([]);
          } else {
            console.error('创建模型失败，响应数据:', createResult);
            const errorMsg = createResult.msg || createResult.message || '创建模型失败';
            throw new Error(`创建模型失败: ${errorMsg} (code: ${createResult.code})`);
          }
        } else {
          console.error('创建模型HTTP错误:', createModelResponse.status, createModelResponse.data);
          throw new Error(`创建模型失败: HTTP ${createModelResponse.status} - ${createModelResponse.data}`);
        }
      }
      
    } catch (error) {
      console.error('上传失败:', error);
      alert(`上传失败: ${error instanceof Error ? error.message : '未知错误'}`);
    } finally {
      setIsUploading(false);
    }
  };

  // 处理动作视频上传
  const handleActionVideoUpload = async () => {
    if (selectedActionVideos.length === 0) {
      alert('请至少选择一个动作视频文件');
      return;
    }

    setIsUploadingActionVideo(true);
    try {
      // 获取登录缓存中的用户信息
      const loginCache = getLoginCache();
      if (!loginCache?.token) {
        throw new Error('用户未登录或登录信息缺失');
      }

      console.log('开始动作视频上传流程，视频数量:', selectedActionVideos.length);
      
      // 处理动作视频上传
      console.log('开始处理动作视频上传');
      const tokenResponse = await uploadAPI.getUploadVedioToken(loginCache.token);
      
      if (tokenResponse.ok) {
        const tokenResult = JSON.parse(tokenResponse.data);
        console.log('获取动作视频上传token成功:', tokenResult);
        
        if (tokenResult.code === 0) {
          console.log('动作视频token数据结构:', tokenResult);
          
          const credentials: TosCredentials = {
            accessKeyId: tokenResult.data.result.credentials.accessKeyId,
            secretAccessKey: tokenResult.data.result.credentials.secretAccessKey,
            sessionToken: tokenResult.data.result.credentials.sessionToken,
            expiredTime: tokenResult.data.result.credentials.expiredTime
          };
          
          console.log('初始化TOS客户端用于动作视频上传');
          tosUploadService.initialize(credentials);
          
          console.log('开始上传动作视频文件');
          const videoResults = await tosUploadService.uploadFiles(selectedActionVideos);
          
          console.log('动作视频上传结果:', videoResults);
          
          // 检查上传结果
          const failedUploads = videoResults.filter(result => !result.success);
          if (failedUploads.length > 0) {
            console.error('部分动作视频上传失败:', failedUploads);
            alert(`部分动作视频上传失败: ${failedUploads.map(f => f.error).join(', ')}`);
            return;
          }
          
          // 上传成功后，调用 uploadActionVideo API
          const successfulUploads = videoResults.filter(result => result.success);
          console.log('成功上传的动作视频:', successfulUploads);
          
          for (const uploadResult of successfulUploads) {
            if (uploadResult.url) {
              console.log('开始调用 uploadActionVideo API，视频URL:', uploadResult.url);
              
              // 使用文件名作为动作名称
              const actionName = selectedActionVideos.find(file => 
                file.name.includes(uploadResult.key || '')
              )?.name || '动作视频';
              
              const uploadActionResponse = await uploadAPI.uploadActionVideo(
                loginCache.token,
                actionName,
                uploadResult.url
              );
              
              if (uploadActionResponse.ok) {
                const uploadActionResult = JSON.parse(uploadActionResponse.data);
                console.log('uploadActionVideo API响应:', uploadActionResult);
                
                if (uploadActionResult.code === 0) {
                  console.log('动作视频上传API调用成功');
                  
                  // 调用 getActionVideoResult 查看结果
                  console.log('开始获取动作视频结果');
                  const resultResponse = await uploadAPI.getActionVideoResult(loginCache.token, 1, 10);
                  
                  if (resultResponse.ok) {
                    const resultData = JSON.parse(resultResponse.data);
                    console.log('动作视频结果:', resultData);
                    
                    if (resultData.code === 0) {
                      setActionVideoResults(resultData.data?.records || []);
                      console.log('动作视频结果获取成功:', resultData.data?.records);
                    } else {
                      console.warn('获取动作视频结果失败:', resultData.message);
                    }
                  } else {
                    console.warn('获取动作视频结果HTTP错误:', resultResponse.status);
                  }
                } else {
                  console.error('动作视频上传API调用失败:', uploadActionResult.message);
                  alert(`动作视频上传失败: ${uploadActionResult.message}`);
                }
              } else {
                console.error('动作视频上传API HTTP错误:', uploadActionResponse.status);
                alert(`动作视频上传失败: HTTP ${uploadActionResponse.status}`);
              }
            }
          }
          
          // 显示成功消息
          alert(`动作视频上传成功！\n成功上传: ${successfulUploads.length} 个文件`);
          
          // 上传成功后清空选择
          setSelectedActionVideos([]);
          
        } else {
          throw new Error(tokenResult.message || '获取动作视频上传token失败');
        }
      } else {
        throw new Error(`获取动作视频上传token失败: HTTP ${tokenResponse.status}`);
      }
      
    } catch (error) {
      console.error('动作视频上传失败:', error);
      alert(`动作视频上传失败: ${error instanceof Error ? error.message : '未知错误'}`);
    } finally {
      setIsUploadingActionVideo(false);
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

            {/* 动作视频上传 */}
            <div className="upload-group">
              <h3>上传动作视频</h3>
              <div className="upload-area">
                <input
                  ref={actionVideoInputRef}
                  type="file"
                  accept="video/*"
                  multiple
                  onChange={handleActionVideoSelect}
                  style={{ display: 'none' }}
                />
                <button
                  className="upload-button"
                  onClick={() => actionVideoInputRef.current?.click()}
                >
                  <span className="upload-icon"></span>
                  <span>选择动作视频</span>
                </button>
                <p className="upload-hint">支持 MP4、MOV、AVI 格式</p>
              </div>
              
              {/* 已选择的动作视频 */}
              {selectedActionVideos.length > 0 && (
                <div className="selected-files">
                  <h4>已选择的动作视频 ({selectedActionVideos.length})</h4>
                  <div className="file-list">
                    {selectedActionVideos.map((file, index) => (
                      <div key={index} className="file-item">
                        <div className="file-info">
                          <span className="file-name">{file.name}</span>
                          <span className="file-size">({formatFileSize(file.size)})</span>
                        </div>
                        <button
                          className="remove-button"
                          onClick={() => removeActionVideo(index)}
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

          {/* 动作视频结果展示区域 */}
          {actionVideoResults.length > 0 && (
            <div className="action-video-results">
              <h3>动作视频结果</h3>
              <div className="results-list">
                {actionVideoResults.map((result, index) => (
                  <div key={index} className="result-item">
                    <div className="result-info">
                      <span className="result-name">{result.remark || `动作视频 ${index + 1}`}</span>
                      <span className="result-status">{result.status || '处理中'}</span>
                    </div>
                    {result.videoUrl && (
                      <div className="result-video">
                        <video controls width="200" height="150">
                          <source src={result.videoUrl} type="video/mp4" />
                          您的浏览器不支持视频播放
                        </video>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 按钮区域 */}
          <div className="modal-footer">
            <button 
              className="cancel-button"
              onClick={onClose}
              disabled={isUploading || isUploadingActionVideo}
            >
              取消
            </button>
            <button 
              className="upload-submit-button"
              onClick={handleUpload}
              disabled={isUploading || isUploadingActionVideo || (selectedImages.length === 0 && selectedVideos.length === 0)}
            >
              {isUploading ? '上传中...' : '开始上传'}
            </button>
            <button 
              className="upload-action-video-button"
              onClick={handleActionVideoUpload}
              disabled={isUploading || isUploadingActionVideo || selectedActionVideos.length === 0}
            >
              {isUploadingActionVideo ? '动作视频上传中...' : '上传动作视频'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadModelModal;
