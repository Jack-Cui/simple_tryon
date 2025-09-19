import React, { useState, useRef, useEffect } from 'react';
import './FixedDownloadPrompt.css';
import wx from 'weixin-js-sdk';
declare namespace JSX {  interface IntrinsicElements {    'wx-open-launch-app': any;  }}

const FixedDownloadPrompt: React.FC = () => {
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showCopySuccess, setShowCopySuccess] = useState(false);

  // APP配置 - 在这里修改即可快速调试其他APP
  const APP_CONFIG = {
    name: 'airU', // APP名称
    description: '精准试穿 瞬间自信', // APP描述
    protocols: [
      'airverse://message', // 主要协议
      'airverse://', // 备用协议1
      'airverse://home', // 备用协议2
    ],
    universalLinks: [
      'https://airverse.com', // Universal Links (iOS)
      'https://airverse.com/home',
    ],
    fallbackUrl: 'https://airverse.com', // 备用网页链接
    icon: require('../assets/logo.png') // APP图标
  };

  // 显示错误弹窗
  const showErrorModal = (message: string) => {
    setErrorMessage(message);
    setShowError(true);
  };

  // 关闭错误弹窗
  const closeErrorModal = () => {
    setShowError(false);
    setErrorMessage('');
  };

  // 复制链接到剪贴板
  const copyToClipboard = async (text: string) => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(text);
        setShowCopySuccess(true);
        setTimeout(() => setShowCopySuccess(false), 2000);
      } else {
        // 降级方案
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        setShowCopySuccess(true);
        setTimeout(() => setShowCopySuccess(false), 2000);
      }
    } catch (error) {
      console.error('复制失败:', error);
    }
  };

  function judgeBrand() {
    const ua = navigator.userAgent;
    if(/huawei|honor/i.test(ua)) return 'huawei';
    if(/oppo/i.test(ua)) return 'oppo'; 
    if(/vivo/i.test(ua)) return 'vivo';
    if(/mi|redmi/i.test(ua)) return 'xiaomi';
    if(/sm-/i.test(ua)) return 'samsung';
    return 'default';
  }
  
  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
  const isAndroid = /Android/i.test(navigator.userAgent);  
  const isWeChat = /MicroMessenger/i.test(navigator.userAgent);

  // 组件加载时执行
  useEffect(() => {
    downloadPrepare();
  }, []);

  // 唤起准备
  const downloadPrepare = () => {
    // alert('isAndroid:'+isAndroid+';isWeChat:'+isWeChat);
    if(isAndroid && isWeChat){
      try {        
        var appId= 'wx57548bb90330c93e'; // 你的公众号APPID
        var secret = '07592fe655621b11af45dd30abea309e'; // 你的公众号密钥      
        var access_token = ''; // 这里需要获取到有效的access_token
        var jsapi_ticket = ''; // 这里需要获取到有效的jsapi_ticket
        var nonceStr = Math.random().toString(36).substr(2, 15);
        var timestamp = Math.floor(Date.now() / 1000);
        var strtimestamp = timestamp.toString();
        var url = window.location.href.split('#')[0]; // 获取当前页面的URL
        var signature = ''; // 这里需要根据实际情况生成签名

        // alert('appId:'+appId + ' secret:'+secret);
        
        // 定义获取 jsapi_ticket 的函数
        const jt_fetchData = async (access_token: string) => {
          try {
            // 通过nginx代理调用微信API
            const jt_response = await fetch(`/wechat/cgi-bin/ticket/getticket?type=jsapi&access_token=${access_token}`);
            const jt_data = await jt_response.json();
            jsapi_ticket = jt_data.ticket;
            console.log('JSAPI Ticket:', jsapi_ticket);
          } catch (error) {
            console.error('API调用失败:', error);
          }
        };
        
        // 定义生成签名的函数
        const generateSignature = (nonceStr: string, timestamp: string, url: string, jsapi_ticket: string) => {
          const stringToSign = `jsapi_ticket=${jsapi_ticket}&noncestr=${nonceStr}&timestamp=${timestamp}&url=${url}`;
          const crypto = require('crypto');
          return crypto.createHash('sha1').update(stringToSign).digest('hex');
        };
        
        const at_fetchData = async (appId:string, secret: string) => {
          try {
            console.log('开始获取 access_token...');
            // 通过nginx代理调用微信API
            const at_response = await fetch(`/wechat/cgi-bin/token?grant_type=client_credential&appid=${appId}&secret=${secret}`);
            
            if (!at_response.ok) {
              throw new Error(`HTTP error! status: ${at_response.status}`);
            }
            
            const at_data = await at_response.json();
            console.log('API 响应数据:', at_data);
            
            if (at_data.access_token) {
              access_token = at_data.access_token;
              // alert('access_token1:'+access_token);
              console.log('Access Token:', access_token);
              return access_token;
            } else {
              throw new Error('API 响应中没有 access_token');
            }
          } catch (error: any) {
            console.error('API调用失败:', error);
            alert('获取 access_token 失败: ' + (error as Error).message);
            throw error;
          }
        };
        
        // 使用 async/await 确保正确的执行顺序
        (async () => {
          try {
            await at_fetchData(appId, secret);
            // alert('access_token2:'+access_token);
            
            // 获取到 access_token 后再获取 jsapi_ticket
            await jt_fetchData(access_token);
            
            // 生成签名
            signature = generateSignature(nonceStr, strtimestamp, url, jsapi_ticket);  
            console.log('signature:', signature);
                      
            // alert('timestamp:'+timestamp+';nonceStr:'+nonceStr+';url:'+url+';jsapi_ticket:'+jsapi_ticket+';signature:'+signature);
                wx.config({
                  debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印
                  appId: appId, // 必填，公众号的唯一标识
                  timestamp: timestamp, // 必填，生成签名的时间戳
                  nonceStr: nonceStr, // 必填，生成签名的随机串
                  signature: signature,// 必填，签名
                  jsApiList: [], // 必填，需要使用的JS接口列表
                  openTagList: [
                    'wx-open-launch-app'
                  ] // 可选，需要使用的开放标签列表，例如['wx-open-launch-app']
                });                
          } catch (error: any) {
            console.error('处理失败:', error);
          }
        })();              
      } catch (error) {
        console.error('唤起APP失败:', error);
      }
    }
  }

  

 
  // 唤起APP的函数
  const handleDownloadApp = () => {
      // iOS设备不支持
      if (isIOS) {
        alert('iOS版本APP后续开放,敬请期待...');
        return;
      }
      
    // alert('isAndroid:'+isAndroid+';isWeChat:'+isWeChat);
    try {
      // 使用 async/await 确保正确的执行顺序
      (async () => {
        try {
          if (!isWeChat){
              // Android设备，使用自定义协议唤起APP
              window.location.href = "airverse://message?id=2";
              console.log('APP唤起xxxx');                       
          }
            // 如果唤起失败，延迟后跳转到应用商店
            setTimeout(() => {
              if (!document.hidden) {
              // 这里可以添加应用商店链接
              alert('APP唤起失败，请到应用商店下载最新版本！');
              // 替换为实际的应用商店链接       
              if(judgeBrand()=='xiaomi'){
              window.location.href = 'mimarket://details?id=com.vdiy.airverse';        
              } else if(judgeBrand()=='huawei'){
              window.location.href = 'appmarket://details?id=com.vdiy.airverse'; 
              } else if(judgeBrand()=='oppo'){
              window.location.href = 'oppomarket://details?packagename=com.vdiy.airverse'; 
              } else if(judgeBrand()=='vivo'){
              window.location.href = 'vivomarket://details?id=com.vdiy.airverse'; 
              } else if(judgeBrand()=='samsung'){
              window.location.href = 'samsungapps://ProductDetail/com.vdiy.airverse'; 
              } 
              return;
              }
            }, 1000);

        } catch (error: any) {
          console.error('处理失败:', error);
        }
      })();
    
      
    } catch (error) {
      console.error('唤起APP失败:', error);
    }
  };

  //处理唤起失败事件
  useEffect(() => {
    const btn = document.getElementById('launch-btn');
    if (btn) {
      btn.addEventListener('error', function(e) {
        handleDownloadApp();
      });
    }
  }, []);

  return (
    <>
      <div className="fixed-download-prompt">
        
        <div className="prompt-content">
          {/* APP图标 */}
          <div className="app-icon">
            <div className="icon-inner">
              <img src={APP_CONFIG.icon} alt={APP_CONFIG.name} style={{ width: 32, height: 32 }} />
            </div>
          </div>

          {/* 内容区域 */}
          <div className="prompt-text" style={{ textAlign: 'left' }}>
            <h3 className="app-title" style={{ textAlign: 'left' }}>{APP_CONFIG.name}</h3>
            <p className="app-description" style={{ textAlign: 'left' }}>{APP_CONFIG.description}</p>
          </div>

          {/* 下载按钮 */}
          {!(isAndroid&&isWeChat)&&<button 
            className="download-button"
            onClick={handleDownloadApp}            
          >
            立即下载
          </button>}

      {/* <span>打开APP</span> */}          
      <span >
        {/*  @ts-ignore */}   
        <wx-open-launch-app
                id="launch-btn"
                appid="wxc844402f4f353bec"
                extinfo='{"id": "2"}'
                // style={{
                //       width: '105px',
                //       height: '32px',
                //       display: 'block',
                //       position: 'absolute',
                //       right: '0.68rem',
                //       top: '1.18rem',                    
                //     }
                //   }
                
            >
            <script type='text/wxtag-template'>
            {/* <img src={APP_CONFIG.icon} alt={APP_CONFIG.name} style={{ width: 32, height: 32 }} /> */}
            <style> 
                    {'.download-button {  background: linear-gradient(135deg, #52c41a 0%, #389e0d 100%);   color: white;  border: none;  border-radius: 10px;  padding: 10px 18px;  font-size: 13px;  font-weight: bold;  cursor: pointer;  transition: all 0.2s ease;  box-shadow: 0 2px 8px rgba(82, 196, 26, 0.3);  flex-shrink: 0;  white-space: nowrap;} .download-button:hover {  transform: translateY(-1px);  box-shadow: 0 4px 12px rgba(82, 196, 26, 0.4); }.download-button:active {   transform: translateY(0);}'}
            </style>
            {(isAndroid&&isWeChat)&&<button 
              className="download-button"  
              onClick={handleDownloadApp}>
                打开APP
            </button>}            
            </script>
        {/*  @ts-ignore */}   
        </wx-open-launch-app>   
       
        </span>
        </div>        
      </div>

      

      {/* 错误弹窗 */}
      {showError && (
        <div className="error-modal-overlay" onClick={closeErrorModal}>
          <div className="error-modal" onClick={(e) => e.stopPropagation()}>
            <div className="error-header">
              <h3>唤起失败</h3>
              <button className="close-button" onClick={closeErrorModal}>×</button>
            </div>
            <div className="error-content">
              <p>{errorMessage}</p>
              <div className="error-suggestions">
                <p><strong>解决方案：</strong></p>
                <ul>
                  <li>复制链接到{APP_CONFIG.name}内打开</li>
                  <li>直接在{APP_CONFIG.name}中搜索</li>
                  <li>检查浏览器是否允许APP唤起</li>
                </ul>
              </div>
            </div>
            <div className="error-footer">
              <button 
                className="copy-button"
                onClick={() => copyToClipboard(APP_CONFIG.fallbackUrl)}
              >
                复制{APP_CONFIG.name}链接
              </button>
              <button className="ok-button" onClick={closeErrorModal}>确定</button>
            </div>
          </div>
        </div>
      )}

      {/* 复制成功提示 */}
      {showCopySuccess && (
        <div className="copy-success-toast">
          <span>链接已复制到剪贴板</span>
        </div>
      )}
    </>
  );
};
 // // 唤起APP的函数
  // const handleDownloadApp = () => {
  //   try {
  //     // 检测设备类型
  //     const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  //     const isAndroid = /Android/.test(navigator.userAgent);
      
  //     let hasLaunched = false;
  //     alert('isIOS:'+isIOS+';isAndroid:'+isAndroid);
      
  //     // 尝试唤起APP
  //     const launchApp = (protocol: string, isUniversalLink = false) => {
  //       if (hasLaunched) return;
        
  //       try {
  //         if (isUniversalLink) {
  //           // 使用Universal Links方式
  //           window.location.href = protocol;
  //         } else {
  //           // 使用自定义协议方式
  //           window.location.href = protocol;
  //         }
          
  //         hasLaunched = true;
          
  //         // 延迟检查是否成功唤起
  //         setTimeout(() => {
  //           // 如果页面仍然可见，说明唤起失败
  //           if (document.visibilityState === 'visible' && !hasLaunched) {
  //             showErrorModal(`${APP_CONFIG.name}唤起失败，正在尝试其他方式...`);
              
  //             // 尝试下一个协议
  //             const nextIndex = APP_CONFIG.protocols.indexOf(protocol) + 1;
  //             if (nextIndex < APP_CONFIG.protocols.length) {
  //               setTimeout(() => {
  //                 launchApp(APP_CONFIG.protocols[nextIndex]);
  //               }, 1000);
  //             } else if (!isUniversalLink) {
  //               // 协议都失败了，尝试Universal Links
  //               showErrorModal('协议唤起失败，尝试Universal Links方式...');
  //               setTimeout(() => {
  //                 launchApp(APP_CONFIG.universalLinks[0], true);
  //               }, 1000);
  //             } else {
  //               // 所有方式都失败了
  //               showErrorModal(`所有唤起方式都失败了，可能的原因：\n1. 浏览器阻止了APP唤起\n2. 需要在${APP_CONFIG.name}内打开链接\n3. 请手动打开${APP_CONFIG.name}\n\n建议：\n- 复制链接到${APP_CONFIG.name}内打开\n- 或者直接在${APP_CONFIG.name}中搜索`);
  //             }
  //           }
  //         }, 1500);
          
  //       } catch (error) {
  //         console.error('唤起失败:', error);
  //       }
  //     };
      
  //     // 根据设备类型选择最佳唤起方式
  //     if (isIOS) {
  //       // iOS优先使用Universal Links
  //       launchApp(APP_CONFIG.universalLinks[0], true);
  //     } else if (isAndroid) {
  //       // Android优先使用自定义协议
  //       launchApp(APP_CONFIG.protocols[0]);
  //     } else {
  //       // 其他设备尝试协议方式
  //       launchApp(APP_CONFIG.protocols[0]);
  //     }
      
  //   } catch (error) {
  //     console.error(`唤起${APP_CONFIG.name}失败:`, error);
  //     showErrorModal(`唤起失败: ${error}`);
  //   }
  // };
export default FixedDownloadPrompt; 