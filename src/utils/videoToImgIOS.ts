/**
 * 通用视频第一帧提取工具
 * 同时兼容：iOS Safari + 微信浏览器（iOS/Android）
 * 核心特性：处理自动播放限制、Canvas安全策略、格式兼容性
 */
export function extractVideoFirstFrame(
    videoFile: File,
    format: "png" | "jpeg" = "png",
    quality: number = 0.9
  ): Promise<{ base64: string; blob?: Blob }> {
    // 环境检测
    const isWechat = /MicroMessenger/i.test(navigator.userAgent);
    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
  
    return new Promise((resolve, reject) => {
      // 1. 基础校验与环境限制
      if (!videoFile.type.startsWith('video/')) {
        reject(new Error('请选择视频文件'));
        return;
      }
  
      // 微信特有：限制文件大小（iOS微信对大文件处理能力弱）
      if (isWechat && videoFile.size > (isIOS ? 30 : 50) * 1024 * 1024) {
        reject(new Error(`视频过大，请选择${isIOS ? 30 : 50}MB以内的视频`));
        return;
      }
  
      // 2. 创建视频元素（混合适配配置）
      const video = document.createElement('video');
      // 基础配置（iOS和微信通用）
      video.muted = true;
      video.playsInline = true;
      video.preload = isWechat ? 'auto' : 'metadata'; // 微信需要更多元数据
      video.crossOrigin = isWechat ? 'use-credentials' : 'anonymous'; // 微信跨域策略
  
      // 样式适配：iOS需要视口内元素，微信需要实际尺寸
      video.style.cssText = isWechat 
        ? `position: fixed; top: 0; left: 0; width: 2px; height: 2px; visibility: hidden;`
        : `position: fixed; top: -1px; left: -1px; width: 1px; height: 1px; opacity: 0;`;
  
      // 3. 资源清理函数
      let cleaned = false;
      const cleanup = () => {
        if (cleaned) return;
        cleaned = true;
        clearTimeout(timeoutTimer);
        URL.revokeObjectURL(video.src);
        video.remove();
      };
  
      // 4. 超时设置（微信和iOS加载较慢）
      const timeout = isWechat ? 20000 : 15000;
      const timeoutTimer = setTimeout(() => {
        cleanup();
        reject(new Error('提取超时，请重试'));
      }, timeout);
  
      // 5. 加载触发策略（环境差异化）
      let loadTriggered = false;
      const triggerLoad = () => {
        if (loadTriggered) return;
        loadTriggered = true;
  
        // 微信环境：强制播放-暂停流程（必须在用户交互中）
        if (isWechat) {
          video.play()
            .then(() => {
              video.pause();
              attemptSeek(0.2); // 微信建议稍晚的时间点
            })
            .catch(() => {
              // 微信低版本可能播放失败，直接尝试定位
              attemptSeek(0.2);
            });
        } 
        // iOS Safari：简化触发（静音视频可直接定位）
        else {
          attemptSeek(0.1);
        }
      };
  
      // 6. 事件监听（冗余保障）
      video.addEventListener('loadedmetadata', triggerLoad);
      video.addEventListener('canplay', triggerLoad);
      // 微信额外监听：loadeddata事件
      if (isWechat) {
        video.addEventListener('loadeddata', triggerLoad);
      }
  
      // 7. 帧定位与重试机制
      let seekAttempts = 0;
      const MAX_ATTEMPTS = isWechat ? 6 : 4; // 微信重试次数更多
  
      const attemptSeek = (time: number) => {
        if (seekAttempts >= MAX_ATTEMPTS) {
          cleanup();
          const msg = isWechat 
            ? '微信暂无法提取该视频帧，请尝试MP4格式' 
            : '无法提取视频帧，请更换视频';
          reject(new Error(msg));
          return;
        }
  
        // 尺寸容错：iOS和微信都可能延迟获取尺寸
        if (video.videoWidth === 0) {
          seekAttempts++;
          // 微信重试间隔更长
          const delay = isWechat ? 1000 : 600;
          setTimeout(() => attemptSeek(time + (isWechat ? 0.8 : 0.5)), delay);
          return;
        }
  
        video.currentTime = Math.max(0.1, Math.min(time, video.duration || 1));
        seekAttempts++;
      };
  
      // 8. 绘制帧图像（环境差异化处理）
      video.addEventListener('seeked', () => {
        try {
          const canvas = document.createElement('canvas');
          // 基础尺寸设置
          canvas.width = Math.max(1, video.videoWidth);
          canvas.height = Math.max(1, video.videoHeight);
          const ctx = canvas.getContext('2d');
  
          if (!ctx) throw new Error('浏览器不支持Canvas');
  
          // 微信特殊处理：先绘制背景规避安全限制
          if (isWechat) {
            ctx.fillStyle = '#000';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
          }
  
          // 绘制视频帧（兼容写法）
          ctx.drawImage(
            video, 
            0, 0, video.videoWidth, video.videoHeight,
            0, 0, canvas.width, canvas.height
          );
  
          // 生成Base64（通用）
          const base64 = canvas.toDataURL(`image/${format}`, quality);
  
          // 生成Blob（iOS优先，微信可选）
          if (isWechat) {
            // 微信环境下优先返回Base64（toBlob可能失效）
            cleanup();
            resolve({ base64 });
          } else {
            // iOS环境下正常生成Blob
            canvas.toBlob((blob: any) => {
              cleanup();
              resolve({ base64, blob });
            }, `image/${format}`, quality);
          }
  
        } catch (error) {
          cleanup();
          reject(new Error(`处理失败: ${(error as Error).message}`));
        }
      }, { once: true });
  
      // 9. 错误处理（环境差异化提示）
      video.addEventListener('error', () => {
        cleanup();
        let errorMsg = '视频处理错误';
        
        if (isWechat) {
          errorMsg = '微信不支持该视频格式，请尝试重新拍摄MP4视频';
        } else if (isIOS) {
          errorMsg = 'iOS暂不支持该视频，请更换其他视频尝试';
        }
        
        reject(new Error(errorMsg));
      });
  
      // 10. 初始化加载（环境差异化）
      try {
        const videoUrl = URL.createObjectURL(videoFile);
        video.src = videoUrl;
        document.body.appendChild(video);
        
        // 显式加载（微信必须，iOS可选）
        video.load();
  
        // iOS额外处理：2秒后未加载则尝试播放
        if (isIOS && !isWechat) {
          setTimeout(() => {
            if (!loadTriggered) {
              video.play().catch(() => {}); // 静音播放不影响用户
            }
          }, 2000);
        }
      } catch (error) {
        cleanup();
        reject(error);
      }
    });
  }
  
  // 通用初始化函数（绑定用户交互）
  export function initVideoFrameCapture(inputSelector: string, previewSelector: string) {
    const input = document.querySelector(inputSelector) as HTMLInputElement;
    const preview = document.querySelector(previewSelector) as HTMLImageElement;
    
    if (!input || !preview) return;
  
    // 强化用户交互绑定（微信和iOS都需要）
    input.addEventListener('click', (e) => {
      e.stopPropagation();
      // 微信环境下主动触发焦点（解决偶发点击无反应）
      if (/MicroMessenger/i.test(navigator.userAgent)) {
        input.focus();
      }
    });

  }
  