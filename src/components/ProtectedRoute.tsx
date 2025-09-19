import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { isLoggedIn } from '../utils/auth';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const location = useLocation();
  
  console.log('🛡️ ProtectedRoute检查 - 当前路径:', location.pathname + location.search);
  
  // 检查用户是否已登录
  const loggedIn = isLoggedIn();
  
  if (!loggedIn) {
    // 保存当前路径，登录后可以跳转回来
    const currentPath = location.pathname + location.search;
    const redirectUrl = `/login?redirect=${encodeURIComponent(currentPath)}`;
    console.log('🔄 用户未登录，重定向到:', redirectUrl);
    return <Navigate to={redirectUrl} replace />;
  }
  
  console.log('✅ 用户已登录，允许访问:', location.pathname);
  return <>{children}</>;
};

export default ProtectedRoute; 