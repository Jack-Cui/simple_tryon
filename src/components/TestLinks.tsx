import React from 'react';
import { Link } from 'react-router-dom';

const TestLinks: React.FC = () => {
  return (
    <div style={{ 
      position: 'fixed', 
      top: '20px', 
      right: '20px', 
      background: 'white', 
      padding: '15px', 
      borderRadius: '8px', 
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      zIndex: 1000
    }}>
      <h4 style={{ margin: '0 0 10px 0', fontSize: '14px' }}>测试链接1：</h4>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
        <Link to="/" style={{ fontSize: '12px', color: '#007bff' }}>
          首页（无参数）
        </Link>
        <Link to="/?co_creation_id=12345" style={{ fontSize: '12px', color: '#007bff' }}>
          首页（co_creation_id=12345）
        </Link>
        <Link to="/?co_creation_id=67890&other_param=test" style={{ fontSize: '12px', color: '#007bff' }}>
          首页（多个参数）
        </Link>
        <Link to="/home" style={{ fontSize: '12px', color: '#007bff' }}>
          /home（无参数）
        </Link>
        <Link to="/home?co_creation_id=abc123" style={{ fontSize: '12px', color: '#007bff' }}>
          /home（co_creation_id=abc123）
        </Link>
        <Link to="/rtc-video-test" style={{ fontSize: '12px', color: '#28a745' }}>
          🎥 RTC视频测试
        </Link>
      </div>
    </div>
  );
};

export default TestLinks; 