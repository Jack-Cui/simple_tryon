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
    // iOS 兼容性处理
    let isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
    if (isIOS) {
      const reader = new FileReader();
      return new Promise(resolve => {
        reader.onload = async function (e: any) {
          doms.src = e.target.result;
          document.body.appendChild(doms);
          console.log('iOS环境doms：' + doms);
          
          const result = await gettime(doms); 
          console.log('result:'+result);         
          resolve(result);         
        };       
        reader.readAsDataURL(files[0]);
        console.log('iOS环境doms..4');
      });
    } else{
          const url = URL.createObjectURL(files[0])
          // console.log(url)
          doms.src = url
          document.body.appendChild(doms);
          console.log('非iOS环境doms：' + doms);
      }

    return await gettime(doms);
  }
  const gettime = (doms: any) => {
    //验证iOS上传没反应问题,直接返回相关数据，iOS可以正常执行流程
    //排查怀疑和iOS无法触发loadedmetadata事件有关
    // let obj = {
    //     videoWidth: 3840,
    //     videoHeight: 2160,
    //     duration: 46
    // };
    // return obj;

    // iOS 兼容性处理
    let isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
    if (!isIOS) {    
      // 由于loadedmetadata 是异步代码所以需要promise进行封装转换为同步代码执行
      const promise = new Promise(resolve => {
        doms.addEventListener('loadedmetadata', (e: any) => {
          let obj = {
            videoWidth: doms.videoWidth, // 尺寸宽 --- 分辨率
            videoHeight: doms.videoHeight, // 尺寸高 --- 分辨率
            duration: e.target.duration, // 视频时长 1表示一秒
            // ccbl: [e.target.videoWidth / gcd, e.target.videoHeight / gcd] // 计算尺寸比例
          }
          console.log('视频信息1videoWidth：' + obj.videoWidth);
          console.log('视频信息1videoHeight：' + obj.videoHeight);
          console.log('视频信息1duration：' + obj.duration);
          resolve(obj)
        })
      })
      console.log('视频信息2：');
      return promise
    }else{
      console.log('iOS环境 loadedmetadata');
      let timer: number = 0;
      // 双重检测机制
      const checkReady = () => {
        if (doms.readyState >= 3) {
          clearTimeout(timer);
          return {
            videoWidth: doms.videoWidth,
            videoHeight: doms.videoHeight,
            duration: doms.duration
          };
        }
        return null;
      };
      return new Promise((resolve) => {
        timer = window.setTimeout(() => {
          resolve(checkReady());
        }, 30000);
        
        doms.addEventListener('loadedmetadata', () => {
          clearTimeout(timer);
          resolve(checkReady());
        });

        // doms.play().catch(() => {
        //   doms.muted = true;
        //   doms.play();
        // });
      });     

    }
    // else{
    //   console.log('iOS环境 loadedmetadata');
    //   const promise = new Promise((resolve) => {
    //   const video = doms;
      
    //   // 强制预加载（iOS微信需要）
    //   video.preload = 'auto';
    //   video.load(); // 手动触发加载
      
    //   // 增强型监听（兼容iOS微信）
    //   const eventListener = (e: any) => {
    //       if (e.target.readyState >= 2) { // 确保元数据已加载
    //         resolve({
    //           videoWidth: video.videoWidth,
    //           videoHeight: video.videoHeight,
    //           duration: video.duration
    //         });
    //         video.removeEventListener('loadedmetadata', eventListener);
    //       }
    //     };
        
    //     video.addEventListener('loadedmetadata', eventListener);
        
    //     // 超时保护（iOS微信可能需要）
    //     setTimeout(() => {
    //       if (video.readyState >= 2) {
    //         resolve({
    //           videoWidth: video.videoWidth,
    //           videoHeight: video.videoHeight,
    //           duration: video.duration
    //         });
    //       } else {
    //         console.warn('iOS微信元数据加载超时');
    //       }
    //     }, 30000);
    //   });
    //   return promise;
    // }
    
        // doms.play().then(() => {
        //   // 短暂延迟后计算
        //   setTimeout(() => {

        //     console.log('11111111');
        //     console.log(doms.getVideoPlaybackQuality().totalVideoFrames, doms.currentTime);
        //     console.log('2222222');
        //     const frameCount = doms.webkitDecodedFrameCount;
        //     const fps = frameCount / doms.currentTime;
        //     console.log('fps', fps);
        //   }, 100);
        // });
        // const gcd = getGcd(e.target.videoWidth, e.target.videoHeight);
        // console.log(gcd)    
  }
  // 获取视频时长
export const checkVideo = async (file: any) => {
    console.log('fileChange..5');
    const obj: any = await checkSize([file]);
    console.log('视频信息：'+obj);
    return obj;
  }