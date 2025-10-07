import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import './index.css';
import logo from '../../assets/logo.png';
import { authAPI } from '../../services/api';
import { saveTokens } from '../../utils/auth';
import { saveLoginCache } from '../../utils/loginCache';
import { tryonService } from '../../services/tryonService';
import { DEFAULT_TEST_DATA } from '../../config/config';
import FixedDownloadPrompt from '../../components/FixedDownloadPrompt';
import { getCoCreationId, getCoCreationIdWithUrlPriority, getCoCreationIdFromURL, isValidCoCreationId, showCoCreationIdError } from '../../utils/coCreationIdHelper';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [countdown, setCountdown] = useState(0);
  const [isCountingDown, setIsCountingDown] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verifyCode, setVerifyCode] = useState('');
  const [searchParams] = useSearchParams();
  const [isAgreementChecked, setIsAgreementChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isGettingCode, setIsGettingCode] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
console.log('性能调优 a1.0.1：' + new Date().toLocaleString() +' '+ performance.now() )
  // 在开发环境中预填充测试数据
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      setPhoneNumber(DEFAULT_TEST_DATA.DEFAULT_PHONE);
      console.log('🧪 开发环境：已预填充测试手机号:', DEFAULT_TEST_DATA.DEFAULT_PHONE);
    }
  }, []);

  // 获取重定向URL
  const getRedirectUrl = (): string => {
    const urlParams = new URLSearchParams(location.search);
    const redirect = urlParams.get('redirect');
    return redirect || '/home';
  };

  // 检查是否是从其他页面重定向过来的
  const isRedirected = (): boolean => {
    const urlParams = new URLSearchParams(location.search);
    return urlParams.has('redirect');
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (isCountingDown && countdown > 0) {
      timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
    } else if (countdown === 0 && isCountingDown) {
      setIsCountingDown(false);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [countdown, isCountingDown]);

  const handleGetVerifyCode = async () => {
    console.log('phonexxxx')
    if (!phoneNumber.trim()) {
      setErrorMessage('请输入手机号');
      return;
    }

    // 简单的手机号验证
    const phoneRegex = /^1[3-9]\d{9}$/;
    if (!phoneRegex.test(phoneNumber)) {
      setErrorMessage('请输入正确的手机号');
      return;
    }

    setErrorMessage('');
    setIsGettingCode(true);

    try {
      const response = await authAPI.getVerifyCode(phoneNumber);
      
      if (response.ok) {
        // 尝试解析响应数据
        const parsedResponse = authAPI.parseVerifyCodeResponse(response);
        
        if (parsedResponse) {
          // 检查服务器返回的具体错误信息
          if (parsedResponse.code === 0 && parsedResponse.msg === "验证码发送过频繁") {
            setErrorMessage('验证码发送过于频繁，请稍后再试');
            return;
          }
          
          if (parsedResponse.data === false) {
            setErrorMessage(parsedResponse.msg || '获取验证码失败');
            return;
          }
        }
        
        // 获取验证码成功，开始倒计时
        setCountdown(60);
        setIsCountingDown(true);
        console.log('验证码发送成功');
        
        // 尝试解析响应数据
        if (parsedResponse?.message) {
          console.log('服务器消息:', parsedResponse.message);
        }
      } else {
        setErrorMessage(`获取验证码失败: ${response.status}`);
      }
    } catch (error) {
      console.error('获取验证码错误:', error);
      setErrorMessage('网络错误，请稍后重试');
    } finally {
      setIsGettingCode(false);
    }
  };

  const formatTime = (seconds: number) => {
    // const minutes = Math.floor(seconds / 60);
    // const remainingSeconds = seconds % 60;
    // return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    return `${seconds.toString().padStart(2, '0')}`;
  };

  // 显示toast提示
  const showToastMessage = (message: string) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  const handleLogin = async () => {
    if (!phoneNumber.trim() || !verifyCode.trim()) {
      setErrorMessage('请填写完整信息');
      return;
    }

    if (!isAgreementChecked) {
      setErrorMessage('请先同意用户协议');
      return;
    }

    setErrorMessage('');
    setIsLoading(true);

    try {
      console.log('come in')

      const response = await authAPI.login(phoneNumber, verifyCode);
      
      if (response.ok) {
        console.log('登录成功:', response.data);
        
        // 解析登录响应
        const loginData = authAPI.parseLoginResponse(response);
        if (loginData?.access_token) {
          // 保存token到本地存储
          saveTokens(loginData.access_token, loginData.refresh_token);
          console.log('Token已保存');
          const user_id = loginData.user_id || 'default_user_id';
          
          // 获取coCreationId，优先级：服务器响应 > URL参数 > 缓存
          let co_creation_id: string | undefined = loginData.co_creation_id;
          
          // 如果服务器没有返回，强制从URL获取（完全忽略缓存）
          if (!co_creation_id) {
            const urlCoCreationId = getCoCreationIdFromURL();
            if (urlCoCreationId !== null) {
              co_creation_id = urlCoCreationId;
              console.log('🔒 强制使用URL参数，忽略缓存:', urlCoCreationId);
            }
          }
          
          // 如果最终还是没有获取到，显示错误
          if (!isValidCoCreationId(co_creation_id)) {
            console.error('❌ 无法获取有效的coCreationId');
            showCoCreationIdError();
            setErrorMessage('共创ID不存在，请检查URL参数或联系管理员');
            return;
          }
          
          // 确保co_creation_id是有效的数字
          const finalCoCreationId = co_creation_id as string;
          
          // 保存登录信息到缓存
          saveLoginCache({
            token: loginData.access_token,
            userId: user_id,
            // phone: phoneNumber,
            // coCreationId: finalCoCreationId,
            tenantId: '',
            roomId: '',
            coCreationId: finalCoCreationId,
            shareScene: "",
            coUserId: '',
            coRoomId: ''
          });
          
          // 登录成功后立即初始化房间信息
          try {
            console.log('🏠 登录成功，开始初始化房间信息...');
            await tryonService.initializeAfterLogin({
              // phone: phoneNumber,
              // coCreationId: finalCoCreationId,
              tenantId: '2',
              userId: user_id,
              accessToken: loginData.access_token,
              roomId: '',
              coCreationId: finalCoCreationId,
              shareScene: "",
            }, "");
            console.log('✅ 房间信息初始化成功');
            
            // 预加载衣服详情到缓存
            try {
              console.log('🔄 开始预加载衣服详情到缓存...');
              
              // 异步预加载，不阻塞登录流程
              import('../../services/api').then(({ roomAPI }) => {
                if (loginData.access_token) {
                  roomAPI.preloadClothesDetails(finalCoCreationId, loginData.access_token);
                }
              }).catch(error => {
                console.error('❌ 预加载衣服详情失败:', error);
              });
            } catch (error) {
              console.error('❌ 预加载衣服详情失败:', error);
              // 不影响登录流程
            }
          } catch (error) {
            console.error('❌ 房间信息初始化失败2:', error);
            // 即使初始化失败，也允许用户继续，后续会使用完整流程
          }
          
          // 登录成功后跳转到目标页面，并传递参数
          const redirectUrl = getRedirectUrl();
          const roomName = tryonService.getRoomName(); // 获取房间名称
                      navigate(redirectUrl, {
              state: {
                token: loginData.access_token,
                userId: user_id,
                // phone: phoneNumber,
                // coCreationId: finalCoCreationId,
                tenantId: '2',
                roomName: roomName, // 传递房间名称
              }
            });
        }
      } else {
        alert(`登录失败: ${response.status}`);
        setErrorMessage(`登录失败: ${response.status}`);
      }
    } catch (error) {
      console.error('登录错误:', error);
      setErrorMessage('网络错误，请稍后重试');
    } finally {
      setIsLoading(false);
    }
  };

  // 检查表单是否完整
  const isFormValid = phoneNumber.trim() !== '' && verifyCode.trim() !== '' && isAgreementChecked;

  return (
    <div className="login-container">
      <img src={logo} alt="logo" className="logo" />
      <h2 className="welcome-text">欢迎来到airU</h2>
      
      {/* 显示登录提示 */}
      {isRedirected() && (
        <div className="login-notice">
          <p>请先登录后继续访问</p>
        </div>
      )}
      
      <div className="form">
        <input 
          type="tel" 
          placeholder="输入手机号" 
          className="input-field"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <div className="verify-code-container">
          <input 
            type="text" 
            placeholder="输入验证码" 
            className="input-field"
            value={verifyCode}
            onChange={(e) => setVerifyCode(e.target.value)}
          />
          <button 
            className={`verify-code-button ${isCountingDown || isGettingCode ? 'disabled' : ''}`}
            onClick={handleGetVerifyCode}
            disabled={isCountingDown || isGettingCode}
          >
            {isGettingCode ? '发送中...' : isCountingDown ? formatTime(countdown) : '获取验证码'}
          </button>
        </div>
        <div className="agreement-container">
          <input 
            type="checkbox" 
            id="agreement"
            checked={isAgreementChecked}
            onChange={(e) => setIsAgreementChecked(e.target.checked)}
          />
          <label htmlFor="agreement">
            我已阅读并同意
            <a href="#">《用户服务协议》</a>和
            <a href="#">《隐私政策》</a>
            <a href="#">《天翼账号认证服务条款》</a>
          </label>
        </div>
        {errorMessage && (
          <div className="error-message">
            {errorMessage}
          </div>
        )}
        <button 
          className={`login-button ${!isFormValid || isLoading ? 'disabled' : ''}`}
          onClick={handleLogin}
          disabled={!isFormValid || isLoading}
        >
          {isLoading ? '登录中...' : '立即登录'}
        </button>
      </div>
      
      {/* Toast 提示 */}
      {showToast && (
        <div className="toast-message">
          {toastMessage}
        </div>
      )}
      
      {/* 固定下载APP提示 */}
      {/* <FixedDownloadPrompt /> */}
    </div>
  );
};

export default Login; 