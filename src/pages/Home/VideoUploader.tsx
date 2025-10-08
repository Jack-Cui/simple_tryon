import React, { useState, useRef } from 'react';

const VideoUploader = () => {
  const [videoInfo, setVideoInfo] = useState<{ width: number; height: number; duration: number } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const metadata = await getVideoMetadata(file);
      setVideoInfo(metadata);
    } catch (error) {
      console.error('获取视频信息失败:', error);
    }
  };

  const getVideoMetadata = (file: File): Promise<{ width: number; height: number; duration: number }> => {
    return new Promise((resolve, reject) => {
      const video = document.createElement('video');
      video.preload = 'metadata';
      video.crossOrigin = 'anonymous';

      video.onloadedmetadata = () => {
        resolve({
          width: video.videoWidth,
          height: video.videoHeight,
          duration: video.duration
        });
        URL.revokeObjectURL(video.src);
      };

      video.onerror = (err) => {
        reject(err);
        URL.revokeObjectURL(video.src);
      };

      video.src = URL.createObjectURL(file);
    });
  };

  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  return (
    <div>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="video/*"
        capture="environment"
        style={{ display: 'none' }}
      />
      <button onClick={triggerFileSelect}>选择视频</button>
      {videoInfo && (
        <div>
          <p>分辨率: {videoInfo.width} × {videoInfo.height}</p>
          <p>时长: {videoInfo.duration} 秒</p>
        </div>
      )}
    </div>
  );
};

export default VideoUploader;
