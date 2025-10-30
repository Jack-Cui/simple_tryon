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
    // // iOS 兼容性处理
    // let isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
    // if (isIOS) {
    //   const reader = new FileReader();
    //   return new Promise(resolve => {
    //     reader.onload = async function (e: any) {
    //       doms.src = e.target.result;
    //       document.body.appendChild(doms);
    //       console.log('iOS环境doms：' + doms);
          
    //       const result = await gettime(doms); 
    //       console.log('result:'+result);         
    //       resolve(result);         
    //     };       
    //     reader.readAsDataURL(files[0]);
    //     console.log('iOS环境doms..4');
    //   });
    // } else{
          //取消iOS特殊处理，因为不生效 chao:2025.10.12 
          const url = URL.createObjectURL(files[0])
          // console.log(url)
          doms.src = url
          document.body.appendChild(doms);
          console.log('环境检测doms：' + doms);
      // }

    return await gettime(doms);
  }
  
  // 获取视频帧率的函数
  const getVideoFrameRate = (videoElement: HTMLVideoElement): Promise<number> => {
    return new Promise((resolve) => {
      console.log('开始获取视频帧率...');
      
      // 方法1: 尝试使用videoTracks API
      try {
        const videoWithTracks = videoElement as any;
        console.log('检查videoTracks属性是否存在:', videoWithTracks.videoTracks ? '是' : '否');
        
        if (videoWithTracks.videoTracks && Array.isArray(videoWithTracks.videoTracks) && videoWithTracks.videoTracks.length > 0) {
          const track = videoWithTracks.videoTracks[0];
          if (track && track.getSettings && typeof track.getSettings === 'function') {
            const settings = track.getSettings();
            if (settings && typeof settings.frameRate === 'number') {
              console.log('通过VideoTrack获取帧率:', settings.frameRate);
              resolve(Math.round(settings.frameRate));
              return;
            }
          }
        }
      } catch (e) {
        console.warn('videoTracks API方法失败:', e);
      }
      
      // 方法2: 尝试使用WebKit特有的API (适用于Safari/Chrome)
      try {
        const videoWithWebKit = videoElement as any;
        console.log('尝试使用WebKit API获取帧率...');
        
        // 检查是否支持webkitDecodedFrameCount
        if (typeof videoWithWebKit.webkitDecodedFrameCount === 'number') {
          console.log('WebKit API可用，尝试计算实际帧率');
          
          let frameCount1 = videoWithWebKit.webkitDecodedFrameCount;
          let startTime = performance.now();
          
          // 播放一小段视频然后计算帧率
          setTimeout(() => {
            try {
              let frameCount2 = videoWithWebKit.webkitDecodedFrameCount;
              let endTime = performance.now();
              let duration = (endTime - startTime) / 1000;
              let frameDiff = frameCount2 - frameCount1;
              
              if (duration > 0 && frameDiff > 0) {
                let calculatedFps = frameDiff / duration;
                console.log('通过WebKit API计算的帧率:', calculatedFps);
                resolve(Math.round(calculatedFps));
                return;
              }
            } catch (e) {
              console.warn('WebKit帧率计算失败:', e);
            }
            
            // 如果WebKit方法失败，继续尝试其他方法
            tryAlternativeMethods();
          }, 100); // 采样100毫秒
          
          return;
        }
      } catch (e) {
        console.warn('WebKit API方法失败:', e);
      }
      
      // 方法3及其他备选方案
      function tryAlternativeMethods() {
        // 尝试计算视频的实际播放帧率
        try {
          console.log('尝试使用requestAnimationFrame计算实际播放帧率...');
          
          let frames = 0;
          let startTime = performance.now();
          let lastTime = startTime;
          let lastCurrentTime = videoElement.currentTime;
          
          const checkInterval = 300; // 采样300毫秒
          
          function checkProgress() {
            frames++;
            const currentTime = performance.now();
            const elapsed = currentTime - startTime;
            const videoTimeDiff = videoElement.currentTime - lastCurrentTime;
            const realElapsed = currentTime - lastTime;
            lastTime = currentTime;
            lastCurrentTime = videoElement.currentTime;
            
            if (elapsed < checkInterval) {
              requestAnimationFrame(checkProgress);
            } else {
              // 计算帧率
              let calculatedFps = frames * (1000 / elapsed);
              console.log('通过requestAnimationFrame计算的帧率:', calculatedFps);
              
              // 如果有有效的视频时间差，可以更准确地计算
              if (videoTimeDiff > 0 && realElapsed > 0) {
                const videoBasedFps = (videoTimeDiff * calculatedFps) / (realElapsed / 1000);
                if (videoBasedFps > 0) {
                  console.log('通过视频时间差计算的帧率:', videoBasedFps);
                  resolve(Math.round(videoBasedFps));
                  return;
                }
              }
              
              // 使用requestAnimationFrame的结果
              if (calculatedFps > 0 && calculatedFps < 120) { // 过滤异常值
                resolve(Math.round(calculatedFps));
                return;
              }
              
              // 所有方法都失败，使用默认值
              setDefaultFrameRate();
            }
          }
          
          // 开始检查
          requestAnimationFrame(checkProgress);
          return;
        } catch (e) {
          console.warn('requestAnimationFrame计算失败:', e);
        }
        
        // 所有方法都失败，使用默认值
        setDefaultFrameRate();
      }
      
      // 使用默认值
      function setDefaultFrameRate() {
        // 分析视频元数据，尝试猜测可能的帧率
        let defaultFrameRate = 30;
        
        // 常见的帧率值
        const commonFrameRates = [24, 25, 30, 50, 60];
        
        // 基于视频特性猜测可能的帧率
        try {
          // 对于高分辨率视频，更可能是高帧率
          if (videoElement.videoWidth >= 3840 || videoElement.videoHeight >= 2160) {
            console.log('检测到4K视频，优先尝试60fps');
            defaultFrameRate = 60;
          } else if (videoElement.videoWidth >= 1920 || videoElement.videoHeight >= 1080) {
            console.log('检测到1080p视频，优先尝试30fps或60fps');
            // 可以根据视频时长等进一步判断
          }
        } catch (e) {
          console.warn('元数据分析失败:', e);
        }
        
        console.log('使用默认帧率:', defaultFrameRate);
        resolve(defaultFrameRate);
      }
      
      // 如果前面的异步方法都不需要等待，直接尝试备选方法
      tryAlternativeMethods();
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