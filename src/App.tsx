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
// import { isValidCoCreationId, showCoCreationIdError } from './utils/coCreationIdHelper';
import CreateModel from './pages/CreateModel';
// import MyModel from './pages/MyModel';
import UploadAction from './pages/UploadAction';
// import MyAction from './pages/MyAction';
import SubscribePackage from './pages/SubscribePackage';
import { LoginSceneProvider } from './contexts/LoginSceneContext';
// import BrowseHistory from './pages/BrowseHistory';
// import wx from 'weixin-js-sdk';
//add by chao 2025.10.08
import VideoUploader from './pages/Home/VideoUploader';



function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [loginScene, setLoginScene] = useState<string>('');
  const isRecLog = false; // 是否记录日志，true为记录，false为不记录
  console.log('性能调优 a1-1.0.3：' + new Date().toLocaleString() +' '+ performance.now() )
  useEffect(() => {
    console.log('性能调优 a1-1.1：' + new Date().toLocaleString() +' '+ performance.now() )
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
        
        if(isRecLog) console.log('🔍 解析URL参数:', { user_id, tenant_id, room_id, login_scene, inviteUserId, register_time });
        if(login_scene==='onshare' && !inviteUserId){
          alert('页面打开异常，请通过正确的分享链接打开！');  
          return;
        };
        //update by chao 2025.09.27---->

        // 验证必要参数
        if (!user_id || !tenant_id) {
          setError('缺少必要的URL参数：user_id, tenant_id');
          setIsLoading(false);
          return;
        }

        // 执行登录
        if(isRecLog) console.log('🚀 开始自动登录...');
        let access_token = ''
        let response = null;
        console.log('性能调优 a1-2.1：' + new Date().toLocaleString() +' '+ performance.now() )
        //update by chao 2025.09.29 登录接口传递分享参数
        if(login_scene === 'onshare' ) {
          response = await authAPI.shareLogin(user_id, tenant_id, register_time, inviteUserId);
          if (response.ok) {
            const loginData = authAPI.parseLoginResponse(response);
            access_token = loginData?.access_token || '';
            if(isRecLog) console.log('✅ 分享登录成功:', loginData);

          } else {
            setError('分享登录失败');
            setIsLoading(false);
            return;
          }
        } else {
          response = await authAPI.login(user_id, tenant_id);
        }
        console.log('性能调优 a1-2.2：' + new Date().toLocaleString() +' '+ performance.now() )
        // response = await authAPI.login(user_id, tenant_id);
        if (response.ok) {
          if(isRecLog) console.log('✅ 自动登录成功:', response.data);
          
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
              shareScene: login_scene,
              coUserId: '',
              coRoomId: ''
            });
            
            // 登录成功后立即初始化房间信息
            try {
              if(isRecLog) console.log('🏠 开始初始化房间信息...');
              await tryonService.initializeAfterLogin({
                tenantId: tenant_id,
                roomId: room_id,
                userId: user_id,
                accessToken: loginData.access_token,
                coCreationId: co_creation_id,
                shareScene: login_scene,
              }, login_scene);
              if(isRecLog) console.log('✅ 房间信息初始化成功');
              
              // 预加载衣服详情到缓存
              try {
                if(isRecLog) console.log('🔄 开始预加载衣服详情到缓存...');
                import('./services/api').then(({ roomAPI }) => {
                }).catch(error => {
                  console.error('❌ 预加载衣服详情失败:', error);
                });
              } catch (error) {
                console.error('❌ 预加载衣服详情失败:', error);
              }
            } catch (error) {
              console.error('❌ 房间信息初始化失败1:', error);
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
            <Route path="/video-uploader" element={<VideoUploader />} />
            <Route path="/test-nav" element={<TestNavigation />} />
            <Route path="/tryon-test" element={<TryonTest />} />
            <Route path="/simple-tryon-test" element={<SimpleTryonTest />} />
            <Route path="/rtc-video-test" element={<RTCVideoTest />} />
            <Route path="/create-model" element={<CreateModel />} />
            {/* <Route path="/my-model" element={<MyModel />} /> */}
            <Route path="/upload-action" element={<UploadAction />} />
            <Route path="/subs-package" element={<SubscribePackage />} />
            {/* <Route path='/browse-history' element={<BrowseHistory />}/> */}
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
