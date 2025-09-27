/**
 * 微信环境视频帧提取工具（TypeScript修正版）
 * 已修复所有TypeScript语法错误和类型定义问题
 */
export function wechatExtractVideoFrame(
    videoFile: File,
    format: "png" | "jpeg" = "png",
    quality: number = 0.9
  ): Promise<{ base64: string }> {
    return new Promise((resolve, reject) => {
      // 1. 微信环境校验
      const isWechat = /MicroMessenger/i.test(navigator.userAgent);
      if (!isWechat) {
        reject(new Error('该函数仅用于微信环境'));
        return;
      }
  
      // 2. 文件限制校验
      if (videoFile.size > 30 * 1024 * 1024) {
        reject(new Error('视频过大，请选择30MB以内的MP4视频'));
        return;
      }
      if (!videoFile.type.includes('mp4')) {
        reject(new Error('请选择MP4格式视频（微信推荐格式）'));
        return;
      }
  
      // 3. 创建视频元素
      const video = document.createElement('video');
      video.muted = true;
      video.playsInline = true;
      video.autoplay = false;
      video.preload = 'auto';
      video.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 1px;
        height: 1px;
        z-index: 2147483647;
        opacity: 0.01;
      `;
  
      // 4. 资源清理
      let cleaned = false;
      let pollingTimer: number | null = null; // 修正：添加类型定义
      const cleanup = () => {
        if (cleaned) return;
        cleaned = true;
        clearTimeout(timeoutTimer);
        if (pollingTimer) clearInterval(pollingTimer); // 修正：检查是否存在
        URL.revokeObjectURL(video.src);
        video.remove();
      };
  
      // 5. 超时设置
      const timeoutTimer = setTimeout(() => {
        cleanup();
        reject(new Error('提取超时，请关闭微信重新尝试'));
      }, 25000);
  
      // 6. 轮询定位状态
      const startPolling = (targetTime: number) => {
        let pollCount = 0;
        pollingTimer = window.setInterval(() => {
          pollCount++;
          if (pollCount > 10) {
            if (pollingTimer) clearInterval(pollingTimer); // 修正：检查是否存在
            return;
          }
          // 修正：修复Math.abs的语法错误
          if (Math.abs(video.currentTime - targetTime) < 0.1) {
            if (pollingTimer) clearInterval(pollingTimer);
            drawFrame();
          }
        }, 500);
      };
  
      // 7. 绘制视频帧
      const drawFrame = () => {
        try {
          const canvas = document.createElement('canvas');
          const width = video.videoWidth || 320;
          const height = video.videoHeight || 240;
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
  
          if (!ctx) throw new Error('微信不支持Canvas');
  
          // 分两步绘制
          ctx.fillStyle = '#000';
          ctx.fillRect(0, 0, width, height);
          ctx.drawImage(video, 0, 0, width, height);
  
          // 生成base64
          const base64 = canvas.toDataURL(
            `image/${format}`, 
            format === 'jpeg' ? 0.8 : 1
          );
          cleanup();
          resolve({ base64 });
  
        } catch (error) {
          cleanup();
          reject(new Error(`绘制失败: ${(error as Error).message}`));
        }
      };
  
      // 8. 视频加载与播放控制
      const startProcess = async () => {
        try {
          const playPromise = video.play();
          if (playPromise) await playPromise;
          video.pause();
          video.currentTime = 0.5;
          startPolling(0.5);
        } catch (playError) {
          video.currentTime = 0.5;
          startPolling(0.5);
        }
      };
  
      // 9. 事件监听
      video.addEventListener('seeked', drawFrame, { once: true });
      video.addEventListener('error', () => {
        cleanup();
        reject(new Error('视频无法解析，请确认是完整的MP4文件'));
      });
  
      // 10. 初始化
      try {
        const videoUrl = URL.createObjectURL(videoFile);
        video.src = videoUrl;
        document.body.appendChild(video);
        video.load();
        video.addEventListener('loadedmetadata', startProcess, { once: true });
      } catch (error) {
        cleanup();
        reject(error);
      }
    });
  }
  
  // 微信专用初始化函数
  export function setupWechatVideoCapture() {
    const btn = document.getElementById('selectVideoBtn');
    alert(1);
    alert(btn)
    if (!btn) return; // 修正：添加空值检查
  
    btn.addEventListener('click', () => {
      // 创建隐藏的文件输入
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'video/mp4';
      input.style.display = 'none';
      document.body.appendChild(input);
  
      // 触发点击
      input.click();
  
      // 处理文件选择
      input.addEventListener('change', async () => {
        const file = input.files?.[0];
        if (!file) {
          document.body.removeChild(input);
          return;
        }
  
        // 显示加载UI
        const preview = document.getElementById('preview') as HTMLImageElement | null;
        if (preview) {
          preview.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iIzRDQ0ZGRiIgZD0iTTExIDZoMnY2aC0ydi02em0xIDExaC0ydi02aDJ2NnoiLz48cGF0aCBkPSJNMjEgMTBoLTJWNmgtMnY0aC00VjZoLTJ2NGgtNHYtNGgtMnY0YTIgMiAwIDAgMCAyIDJoMnY0aDJ2LTRoNHY0aDJWMTRjMCAxLjEtLjkgMi0yIDJoLTJ2LTRoMnptLTkgM2gtNHYyaDR2LTJ6Ii8+PC9zdmc+';
        }
  
        try {
          const { base64 } = await wechatExtractVideoFrame(file);
          alert(base64);
          if (preview) preview.src = base64;
        } catch (error) {
          alert((error as Error).message);
          if (preview) preview.src = '';
        } finally {
          document.body.removeChild(input);
        }
      }, { once: true });
    });
  }
  