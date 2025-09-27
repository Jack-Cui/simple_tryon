import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ProtectedRoute from './components/ProtectedRoute';
import TestLinks from './components/TestLinks';
import TryonTest from './components/TryonTest';
import SimpleTryonTest from './components/SimpleTryonTest';
import TestNavigation from './components/TestNavigation';
import RTCVideoTest from './pages/RTCVideoTest';
import { authAPI } from './services/api';
import { saveTokens } from './utils/auth';
import { saveLoginCache } from './utils/loginCache';
import { tryonService } from './services/tryonService';
import { isValidCoCreationId, showCoCreationIdError } from './utils/coCreationIdHelper';
import CreateModel from './pages/CreateModel';
import MyModel from './pages/MyModel';
import UploadAction from './pages/UploadAction';
import MyAction from './pages/MyAction';
import SubscribePackage from './pages/SubscribePackage';
import { LoginSceneProvider } from './contexts/LoginSceneContext';
import BrowseHistory from './pages/BrowseHistory';
import wx from 'weixin-js-sdk';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [loginScene, setLoginScene] = useState<string>('');

  useEffect(() => {

//       // var appId= 'wxad29d9017b989a07'; // 你的公众号APPID
//       // var secret = 'd2bf5518963175514cdee2995188085c'; // 你的公众号密钥    
//         var appId= 'wx57548bb90330c93e'; // 你的公众号APPID
//         var secret = '07592fe655621b11af45dd30abea309e'; // 你的公众号密钥           
//       var access_token = ''; // 这里需要获取到有效的access_token
//       var jsapi_ticket = ''; // 这里需要获取到有效的jsapi_ticket
//       var nonceStr = Math.random().toString(36).substr(2, 15);
//       var timestamp = Math.floor(Date.now() / 1000);
//       var strtimestamp = timestamp.toString();
//       var url = window.location.href.split('#')[0]; // 获取当前页面的URL
//       var signature = ''; // 这里需要根据实际情况生成签名

//  // alert('appId:'+appId + ' secret:'+secret);
        
//         // 定义获取 jsapi_ticket 的函数
//         const jt_fetchData = async (access_token: string) => {
//           try {
//             // 通过nginx代理调用微信API
//             const jt_response = await fetch(`/wechat/cgi-bin/ticket/getticket?type=jsapi&access_token=${access_token}`);
//             const jt_data = await jt_response.json();
//             jsapi_ticket = jt_data.ticket;
//             console.log('JSAPI Ticket:', jsapi_ticket);
//           } catch (error) {
//             console.error('API调用失败:', error);
//           }
//         };
        
//         // 定义生成签名的函数
//         const generateSignature = (nonceStr: string, timestamp: string, url: string, jsapi_ticket: string) => {
//           const stringToSign = `jsapi_ticket=${jsapi_ticket}&noncestr=${nonceStr}&timestamp=${timestamp}&url=${url}`;
//           const crypto = require('crypto');
//           return crypto.createHash('sha1').update(stringToSign).digest('hex');
//         };
        
//         const at_fetchData = async (appId:string, secret: string) => {
//           try {
//             console.log('开始获取 access_token...');
//             // 通过nginx代理调用微信API
//             const at_response = await fetch(`/wechat/cgi-bin/token?grant_type=client_credential&appid=${appId}&secret=${secret}`);
            
//             if (!at_response.ok) {
//               throw new Error(`HTTP error! status: ${at_response.status}`);
//             }
            
//             const at_data = await at_response.json();
//             console.log('API 响应数据:', at_data);
            
//             if (at_data.access_token) {
//               access_token = at_data.access_token;
//               // alert('access_token1:'+access_token);
//               console.log('Access Token:', access_token);
//               return access_token;
//             } else {
//               throw new Error('API 响应中没有 access_token');
//             }
//           } catch (error: any) {
//             console.error('API调用失败:', error);
//             alert('获取 access_token 失败: ' + (error as Error).message);
//             throw error;
//           }
//         };
//   // 使用 async/await 确保正确的执行顺序
//         (async () => {
//           try {
//             await at_fetchData(appId, secret);
//             // alert('access_token2:'+access_token);
            
//             // 获取到 access_token 后再获取 jsapi_ticket
//             await jt_fetchData(access_token);
            
//             // 生成签名
//             signature = generateSignature(nonceStr, strtimestamp, url, jsapi_ticket);  
//             console.log('signature:', signature);
                      
//             // alert('timestamp:'+timestamp+';nonceStr:'+nonceStr+';url:'+url+';jsapi_ticket:'+jsapi_ticket+';signature:'+signature);
//                 wx.config({
//                   debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印
//                   appId: appId, // 必填，公众号的唯一标识
//                   timestamp: timestamp, // 必填，生成签名的时间戳
//                   nonceStr: nonceStr, // 必填，生成签名的随机串
//                   signature: signature,// 必填，签名
//                   jsApiList: [], // 必填，需要使用的JS接口列表
//                   openTagList: [
                   
//                   ] // 可选，需要使用的开放标签列表，例如['wx-open-launch-app']
//                 });                
//           } catch (error: any) {
//             console.error('处理失败:', error);
//           }
//         })(); 

      //-------------------------------

      // wx.miniProgram.postMessage({ data: 'init' });
      // window.addEventListener('message', event => {
      //   alert('Received message:'+ event.data);
      //   alert("收到小程序调用！");
      //   console.log('Received message:', event.data);
      // });

    // wx.miniProgram.onMessage(function(res) { 
    // if (res.action === 'triggerEvent') {
    //   // 执行目标事件
    //   alert("收到小程序调用1！");
    // }
    //   alert("收到小程序调用2！");
    //   console.log(res.miniprogram) ;
    // })  
    }, []);

  useEffect(() => {
    // 自动登录逻辑
    const autoLogin = async () => {
      try {
        // 解析URL参数
        const urlParams = new URLSearchParams(window.location.search);
        var user_id = urlParams.get('user_id');
        const tenant_id = urlParams.get('tenant_id');
        const room_id = urlParams.get('room_id') || '';
        const co_creation_id = urlParams.get('co_creation_id') || '123';

        //<---- update by chao 2025.09.27
        //增加参数，支持小程序拉新操作
        //注册时间 register_time ：小程序品牌方传入 10位unix时间戳
        //邀请人ID inviteUserId ：A邀请B，B注册以后A再登录时输入
        //场景模式 login_scene (onshare/ontry)：区分页面进入的操作，是B直接查看A的分享内容，还是B自己试穿的场景
        const register_time = urlParams.get('register_time') || '';
        const inviteUserId = urlParams.get('inviteUserId') || '';
        const login_scene = urlParams.get('login_scene') || '';
        setLoginScene(login_scene);
        console.log('🔍 解析URL参数:', { user_id, tenant_id, room_id, login_scene, inviteUserId, register_time });
        if(login_scene==='onshare' && !inviteUserId){
          alert('页面打开异常，请通过正确的分享链接打开！');  
          return;
        }else{
          //如果是分享查看模式，直接将 userid 改为 inviteUserId
            // user_id = inviteUserId;
        };

        // 关键：向小程序发送消息（小程序会在onWebviewMessage中接收）
        // const shareData = {
        //   coCreateID: '123'
        // };
        // wx.miniProgram.postMessage({ data: shareData });
        // alert('已向小程序发送数据，请返回小程序查看效果');

        //update by chao 2025.09.27---->

        // 验证必要参数
        if (!user_id || !tenant_id) {
          setError('缺少必要的URL参数：user_id, tenant_id');
          setIsLoading(false);
          return;
        }

        // 执行登录
        console.log('🚀 开始自动登录...');
        let access_token = ''
        let response = null;
        // if(login_scene === 'onshare' && register_time !== '') {
        //   response = await authAPI.shareLogin(user_id, tenant_id, register_time, inviteUserId);
        //   if (response.ok) {
        //     const loginData = authAPI.parseLoginResponse(response);
        //     access_token = loginData?.access_token || '';
        //   } else {
        //     setError('分享登录失败');
        //     setIsLoading(false);
        //     return;
        //   }
        // } else {
        //   response = await authAPI.login(user_id, tenant_id);
        // }
        response = await authAPI.login(user_id, tenant_id);
        if (response.ok) {
          console.log('✅ 自动登录成功:', response.data);
          
          // 解析登录响应
          const loginData = authAPI.parseLoginResponse(response);
          if (loginData?.access_token) {
            // 保存token到本地存储
            saveTokens(loginData.access_token, loginData.refresh_token);
            console.log('💾 Token已保存');
            
            const cur_user_id = loginData.user_id || 'default_user_id';
            if(access_token === '') {
              access_token = loginData.access_token;
            }
            // 保存登录信息到缓存
            saveLoginCache({
              token: access_token,
              userId: cur_user_id,
              roomId: room_id,
              tenantId: tenant_id,
              coCreationId: co_creation_id,
            });
            
            // 登录成功后立即初始化房间信息
            try {
              console.log('🏠 开始初始化房间信息...');
              await tryonService.initializeAfterLogin({
                tenantId: tenant_id,
                roomId: room_id,
                userId: user_id,
                accessToken: loginData.access_token,
                coCreationId: co_creation_id,
              }, login_scene);
              console.log('✅ 房间信息初始化成功');
              
              // 预加载衣服详情到缓存
              try {
                console.log('🔄 开始预加载衣服详情到缓存...');
                import('./services/api').then(({ roomAPI }) => {
                }).catch(error => {
                  console.error('❌ 预加载衣服详情失败:', error);
                });
              } catch (error) {
                console.error('❌ 预加载衣服详情失败:', error);
              }
            } catch (error) {
              console.error('❌ 房间信息初始化失败:', error);
            }
            
            console.log('🎉 自动登录完成，准备进入应用');
          }
        } else {
          console.error('❌ 自动登录失败:', response.status);
          setError(`登录失败: ${response.status}`);
        }
      } catch (error) {
        console.error('❌ 自动登录错误:', error);
        setError('网络错误，请稍后重试');
      } finally {
        setIsLoading(false);
      }
    };

    autoLogin();
  }, []);

  // 显示加载状态
  if (isLoading) {
    return (
      <div className="App">
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '100vh',
          flexDirection: 'column',
          gap: '20px'
        }}>
          <div style={{ fontSize: '18px', color: '#666' }}>正在自动登录...</div>
          <div style={{ width: '40px', height: '40px', border: '4px solid #f3f3f3', borderTop: '4px solid #3498db', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
        </div>
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  // 显示错误状态
  if (error) {
    return (
      <div className="App">
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '100vh',
          flexDirection: 'column',
          gap: '20px',
          padding: '20px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '18px', color: '#e74c3c' }}>❌ {error}</div>
          <div style={{ fontSize: '14px', color: '#666' }}>
            请检查URL参数是否正确，确保包含 phone、verfiy_code 和 co_creation_id 参数
          </div>
          <div style={{ fontSize: '12px', color: '#999', marginTop: '10px' }}>
            示例: https://dev-h5.ai1010.cn/simple?co_creation_id=3&phone=13500003000&verfiy_code=8888
          </div>
        </div>
      </div>
    );
  }

  return (
    <LoginSceneProvider loginScene={loginScene}>
      <Router basename="/simple">
        <div className="App">
          <Routes>
            <Route path="/test-nav" element={<TestNavigation />} />
            <Route path="/tryon-test" element={<TryonTest />} />
            <Route path="/simple-tryon-test" element={<SimpleTryonTest />} />
            <Route path="/rtc-video-test" element={<RTCVideoTest />} />
            <Route path="/create-model" element={<CreateModel />} />
            {/* <Route path="/my-model" element={<MyModel />} /> */}
            <Route path="/upload-action" element={<UploadAction />} />
            <Route path="/subs-package" element={<SubscribePackage />} />
            <Route path='/browse-history' element={<BrowseHistory />}/>
            <Route 
              path="/home" 
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/" 
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              } 
            />
          </Routes>
          {/* 开发环境显示测试链接 */}
          {process.env.NODE_ENV === 'development' && <TestLinks />}
        </div>
      </Router>
    </LoginSceneProvider>
  );
}

export default App;
