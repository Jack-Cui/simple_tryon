/*
 * @Author: baomin min.bao@zuolin.com
 * @Date: 2025-09-22 15:51:58
 * @LastEditors: baomin min.bao@zuolin.com
 * @LastEditTime: 2025-09-23 15:27:19
 * @FilePath: /my-app/src/utils/utils.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { convertLegacyProps } from "antd/lib/button/button";
import e from "express";
import wx from "weixin-js-sdk";

// 获取最大公约数
  function getGcd(a: any, b: any): any {
    let n1: any, n2: any;
    if (a > b) {
      n1 = a;
      n2 = b;
    } else {
      n1 = b;
      n2 = a;
    }
    let remainder = n1 % n2;
    if (remainder === 0) {
      return n2;
    } else {
      return getGcd(n2, remainder)
    }
  }
  // 创建虚拟dom 并且放回对应的值
  const checkSize = async (files: any) => {
    console.log('fileChange..6');
    if (!files || !files[0]) return false
    const checktimevideo = document.getElementById('checktimevideo')
    if (checktimevideo) {
      document.body.removeChild(checktimevideo)
    }
    let doms = document.createElement('video');
        doms.id = 'checktimevideo'
        doms.style.display = 'none'
    
          const url = URL.createObjectURL(files[0])
          // console.log(url)
          doms.src = url
          document.body.appendChild(doms);
          console.log('环境检测doms：' + doms);
      // }

    return await gettime(doms);
  }
  
  // 获取视频帧率的函数 - 精简版，保留最有效的检测方法
  const getVideoFrameRate = (videoElement: HTMLVideoElement): Promise<number> => {
    return new Promise((resolve) => {
      // 1. 优先使用原生属性获取实际帧率
      try {
        const nativeFrameRate = (videoElement as any).frameRate || 
                               (videoElement as any).mozFrameRate || 
                               (videoElement as any).webkitDroppedFrameRate;
        
        if (nativeFrameRate && typeof nativeFrameRate === 'number' && nativeFrameRate > 0) {
          const fps = Math.round(nativeFrameRate);
          // 仅对明显异常的原生值进行简单校准
          resolve(calibrateFrameRate(fps));
          return;
        }
      } catch (e) {}
      
      // 2. 尝试使用videoTracks API获取准确的视频轨道信息
      try {
        const videoWithTracks = videoElement as any;
        if (videoWithTracks.videoTracks && videoWithTracks.videoTracks[0] && 
            videoWithTracks.videoTracks[0].getSettings) {
          const settings = videoWithTracks.videoTracks[0].getSettings();
          if (settings && typeof settings.frameRate === 'number' && settings.frameRate > 0) {
            const fps = Math.round(settings.frameRate);
            resolve(calibrateFrameRate(fps));
            return;
          }
        }
      } catch (e) {}
      
      // 3. 使用requestAnimationFrame计算实际播放帧率（最可靠的后备方案）
      calculateActualFrameRate().then(fps => {
        resolve(calibrateFrameRate(fps));
      }).catch(() => {
        // 所有方法都失败时，基于视频分辨率返回合理的默认值
        resolve(getDefaultFrameRate());
      });
      
      // 计算视频实际播放帧率
      function calculateActualFrameRate(): Promise<number> {
        return new Promise((resolve, reject) => {
          const checkInterval = 800; // 延长采样时间提高准确性
          let frames = 0;
          let startTime = performance.now();
          let lastVideoTime = videoElement.currentTime;
          
          // 尝试播放视频以确保帧计数准确
          videoElement.play().catch(() => {});
          
          function checkProgress() {
            frames++;
            const currentTime = performance.now();
            const elapsed = currentTime - startTime;
            const videoTimeDiff = videoElement.currentTime - lastVideoTime;
            
            if (elapsed < checkInterval) {
              requestAnimationFrame(checkProgress);
            } else {
              // 使用视频时间差计算实际帧率，这比RAF计数更准确反映视频本身
              if (videoTimeDiff > 0 && elapsed > 0) {
                // 计算实际帧率 = 经过的视频时间 × 1000 / 实际经过的毫秒数
                const actualFps = Math.round(videoTimeDiff * 1000 / elapsed);
                resolve(actualFps);
              } else {
                reject(new Error('无法计算实际帧率'));
              }
            }
          }
          
          requestAnimationFrame(checkProgress);
        });
      }
      
      // 精简的帧率校准函数 - 更倾向于保留实际测量值
      function calibrateFrameRate(measuredFps: number): number {
        // 移除极端异常值
        if (measuredFps < 10 || measuredFps > 120) {
          return getDefaultFrameRate();
        }
        
        // 常见帧率数组
        const commonFrameRates = [24, 25, 30, 50, 60];
        
        // 查找最接近的常见帧率
        let closestRate = commonFrameRates[0];
        let minDiff = Math.abs(measuredFps - closestRate);
        
        for (const rate of commonFrameRates) {
          const diff = Math.abs(measuredFps - rate);
          if (diff < minDiff) {
            minDiff = diff;
            closestRate = rate;
          }
        }
        
        // 只在测量值非常接近常见帧率时才替换
        // 15%的容差阈值，允许保留实际非标准帧率
        if (minDiff / closestRate <= 0.15) {
          return closestRate;
        }
        
        // 保留测量的实际帧率，仅做范围限制
        return Math.min(Math.max(measuredFps, 15), 60);
      }
      
      // 获取基于视频特性的默认帧率
      function getDefaultFrameRate(): number {
        // 基于分辨率推断可能的帧率
        try {
          if (videoElement.videoWidth >= 3840 || videoElement.videoHeight >= 2160) {
            return 60; // 4K视频通常是60fps
          } else if (videoElement.videoWidth >= 1920 || videoElement.videoHeight >= 1080) {
            return 30; // 1080p视频通常是30fps
          }
        } catch (e) {}
        
        return 30; // 默认帧率
      }
    });
  };

  const gettime = (doms: any) => {
    console.log('开始获取视频信息...');
    // 由于loadedmetadata 是异步代码所以需要promise进行封装转换为同步代码执行
    return new Promise((resolve) => {
      const handleLoadedMetadata = async (e: any) => {
        console.log('视频元数据已加载');
        // 获取视频帧率
        let frameRate = 30; // 默认值
        try {
          console.log('调用getVideoFrameRate函数...');
          frameRate = await getVideoFrameRate(doms);
          console.log('获取帧率完成，值为:', frameRate);
        } catch (error) {
          console.warn('获取帧率失败，使用默认值:', error);
        }
        
        let obj = {
          videoWidth: doms.videoWidth, // 尺寸宽 --- 分辨率
          videoHeight: doms.videoHeight, // 尺寸高 --- 分辨率
          duration: e.target.duration, // 视频时长 1表示一秒
          frame: frameRate // 视频帧率
        }
        console.log('视频信息1videoWidth：' + obj.videoWidth);
        console.log('视频信息1videoHeight：' + obj.videoHeight);
        console.log('视频信息1duration：' + obj.duration);
        console.log('视频信息1frame：' + obj.frame);
        resolve(obj);
        // 移除事件监听器以避免内存泄漏
        doms.removeEventListener('loadedmetadata', handleLoadedMetadata);
      };
      
      // 添加事件监听器
      doms.addEventListener('loadedmetadata', handleLoadedMetadata);
      
      // 确保视频开始加载
      doms.load();
      console.log('已添加loadedmetadata事件监听器并触发视频加载');
    });
  }
  // 获取视频时长
export const checkVideo = async (file: any) => {
    console.log('fileChange..5');
    const obj: any = await checkSize([file]);
    console.log('视频信息：'+obj);
    return obj;
  }