/*
 * @Author: baomin min.bao@zuolin.com
 * @Date: 2025-09-22 15:51:58
 * @LastEditors: baomin min.bao@zuolin.com
 * @LastEditTime: 2025-09-23 15:27:19
 * @FilePath: /my-app/src/utils/utils.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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
    if (!files || !files[0]) return false
    const checktimevideo = document.getElementById('checktimevideo')
    if (checktimevideo) {
      document.body.removeChild(checktimevideo)
    }
    let doms
    doms = document.createElement('video');
    const url = URL.createObjectURL(files[0])
    // console.log(url)
    doms.src = url
    doms.id = 'checktimevideo'
    doms.style.display = 'none'
    document.body.appendChild(doms);
    console.log(doms);
    return await gettime(doms);
  }
  const gettime = (doms: any) => {
    // 由于loadedmetadata 是异步代码所以需要promise进行封装转换为同步代码执行
    const promise = new Promise(resolve => {
      doms.addEventListener('loadedmetadata', (e: any) => {
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
        let obj = {
          videoWidth: doms.videoWidth, // 尺寸宽 --- 分辨率
          videoHeight: doms.videoHeight, // 尺寸高 --- 分辨率
          duration: e.target.duration, // 视频时长 1表示一秒
          // ccbl: [e.target.videoWidth / gcd, e.target.videoHeight / gcd] // 计算尺寸比例
        }
        resolve(obj)
      })
    })
    return promise
  }
  // 获取视频时长
export const checkVideo = async (file: any) => {
    const obj: any = await checkSize([file]);
    console.log(obj);
    return obj;
  }