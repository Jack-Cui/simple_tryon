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
import Upload from './pages/Upload';
import { authAPI } from './services/api';
import { saveTokens } from './utils/auth';
import { saveLoginCache } from './utils/loginCache';
import { tryonService } from './services/tryonService';
import { isValidCoCreationId, showCoCreationIdError } from './utils/coCreationIdHelper';
import CreateModel from './pages/CreateModel';
import MyModel from './pages/MyModel';
import UploadAction from './pages/UploadAction';
import MyAction from './pages/MyAction';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // 自动登录逻辑
    const autoLogin = async () => {
      try {
        // 解析URL参数
        const urlParams = new URLSearchParams(window.location.search);
        const phone = urlParams.get('phone');
        const verifyCode = urlParams.get('verfiy_code'); // 注意原URL中的拼写错误
        const coCreationId = urlParams.get('co_creation_id');

        console.log('🔍 解析URL参数:', { phone, verifyCode, coCreationId });

        // 验证必要参数
        if (!phone || !verifyCode || !coCreationId) {
          setError('缺少必要的URL参数：phone, verfiy_code, co_creation_id');
          setIsLoading(false);
          return;
        }

        // 验证coCreationId
        if (!isValidCoCreationId(coCreationId)) {
          console.error('❌ 无效的coCreationId:', coCreationId);
          showCoCreationIdError();
          setError('无效的共创ID');
          setIsLoading(false);
          return;
        }

        // 执行登录
        console.log('🚀 开始自动登录...');
        const response = await authAPI.login(phone, verifyCode);
        
        if (response.ok) {
          console.log('✅ 自动登录成功:', response.data);
          
          // 解析登录响应
          const loginData = authAPI.parseLoginResponse(response);
          if (loginData?.access_token) {
            // 保存token到本地存储
            saveTokens(loginData.access_token, loginData.refresh_token);
            console.log('💾 Token已保存');
            
            const user_id = loginData.user_id || 'default_user_id';
            
            // 保存登录信息到缓存
            saveLoginCache({
              token: loginData.access_token,
              userId: user_id,
              phone: phone,
              coCreationId: coCreationId,
            });
            
            // 登录成功后立即初始化房间信息
            try {
              console.log('🏠 开始初始化房间信息...');
              await tryonService.initializeAfterLogin({
                phone: phone,
                coCreationId: coCreationId,
                userId: user_id,
                accessToken: loginData.access_token,
              });
              console.log('✅ 房间信息初始化成功');
              
              // 预加载衣服详情到缓存
              try {
                console.log('🔄 开始预加载衣服详情到缓存...');
                import('./services/api').then(({ roomAPI }) => {
                  if (loginData.access_token) {
                    roomAPI.preloadClothesDetails(coCreationId, loginData.access_token);
                  }
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
    <Router basename="/simple">
      <div className="App">
        <Routes>
          <Route path="/test-nav" element={<TestNavigation />} />
          <Route path="/tryon-test" element={<TryonTest />} />
          <Route path="/simple-tryon-test" element={<SimpleTryonTest />} />
          <Route path="/rtc-video-test" element={<RTCVideoTest />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/create-model" element={<CreateModel />} />
          <Route path="/my-model" element={<MyModel />} />
          <Route path="/upload-action" element={<UploadAction />} />
          <Route path="/my-action" element={<MyAction />} />
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
  );
}

export default App;
