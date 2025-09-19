import React from 'react';
import { Card, Button, Space, Typography, Alert } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;

const TestNavigation: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <Title level={2}>试穿系统测试导航</Title>
      
      <Alert 
        message="选择合适的测试页面进行试穿功能测试" 
        type="info" 
        style={{ marginBottom: '20px' }}
        showIcon 
      />
      
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Card 
          title="简化版试穿测试 (推荐)" 
          style={{ width: '100%' }}
          extra={<Button type="primary" onClick={() => handleNavigate('/simple-tryon-test')}>
            进入测试
          </Button>}
        >
          <Space direction="vertical">
            <Text>✅ 修复了无限递归问题</Text>
            <Text>✅ 更稳定的日志显示</Text>
            <Text>✅ 包含基础连接测试</Text>
            <Text>✅ 完整的试穿流程支持</Text>
            <Text strong style={{ color: '#52c41a' }}>推荐使用此版本</Text>
          </Space>
        </Card>
        
        <Card 
          title="原版试穿测试" 
          style={{ width: '100%' }}
          extra={<Button onClick={() => handleNavigate('/tryon-test')}>
            进入测试
          </Button>}
        >
          <Space direction="vertical">
            <Text>⚠️ 可能存在日志显示问题</Text>
            <Text>✅ 包含完整功能</Text>
            <Text>✅ 实时日志监控</Text>
            <Text type="secondary">如果简化版有问题，可以尝试此版本</Text>
          </Space>
        </Card>
        
        <Card 
          title="主应用页面" 
          style={{ width: '100%' }}
          extra={<Button onClick={() => handleNavigate('/home')}>
            进入应用
          </Button>}
        >
          <Space direction="vertical">
            <Text>🏠 原有的主应用功能</Text>
            <Text>✅ 完整的用户界面</Text>
            <Text>✅ 登录保护</Text>
          </Space>
        </Card>
      </Space>
      
      <Card title="使用说明" type="inner" style={{ marginTop: '20px' }}>
        <ol>
          <li><strong>推荐使用简化版试穿测试</strong>：功能稳定，适合日常测试</li>
          <li><strong>配置参数</strong>：手机号、共创ID、用户ID都有默认值，可直接测试</li>
          <li><strong>网络要求</strong>：确保能访问外部API接口</li>
          <li><strong>完整流程</strong>：包括登录、房间创建、WebSocket连接、登台等所有步骤</li>
        </ol>
      </Card>
    </div>
  );
};

export default TestNavigation; 