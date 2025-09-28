import React, { useState, useRef } from 'react';
import { Button, Input, Form, Card, message, Space, Typography, Alert } from 'antd';
import { tryonService } from '../services/tryonService';

const { Title, Text } = Typography;

interface SimpleTryonTestProps {}

const SimpleTryonTest: React.FC<SimpleTryonTestProps> = () => {
  const [loading, setLoading] = useState(false);
  const [connected, setConnected] = useState(false);
  const [form] = Form.useForm();
  const [logs, setLogs] = useState<string[]>([]);

  // 添加日志
  const addLog = (message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    const logMessage = `[${timestamp}] ${message}`;
    
    setLogs(prevLogs => [...prevLogs, logMessage]);
  };

  // 清空日志
  const clearLog = () => {
    setLogs([]);
  };

  // 开始试穿流程
  const handleStartTryon = async () => {
    try {
      setLoading(true);
      clearLog();
      
      const values = await form.validateFields();
      
      addLog('开始试穿流程...');
      
      // RTC配置
      const rtcConfig = {
        appId: '643e46acb15c24012c963951', // 示例App ID
        appKey: 'b329b39ca8df4b5185078f29d8d8025f', // 示例App Key
        roomId: 'temp_room_id', // 临时房间ID，会在tryonService中动态更新
        userId: values.userId
      };
      
      const config = {
        // phone: values.phone,
        tenantId: values.tenantId,
        coCreationId: values.coCreationId, // 直接使用字符串，不再转换为数字
        userId: values.userId,
        accessToken: values.accessToken || '', // 如果没有accessToken，使用空字符串
        rtcConfig, // 添加RTC配置
        roomId: values.roomId,
        shareScene: values.shareScene
      };
      
      // 使用事件监听的方式来捕获日志
      const originalLog = console.log;
      const logMessages: string[] = [];
      
      console.log = (...args) => {
        const message = args.map(arg => {
          if (typeof arg === 'object') {
            // 特殊处理 Long 对象和其他特殊对象
            try {
              // 如果是 Long 对象，转换为字符串
              if (arg && typeof arg.toString === 'function' && arg.toString().includes('Long')) {
                return arg.toString();
              }
              // 尝试 JSON.stringify，如果失败则使用 toString
              return JSON.stringify(arg, null, 2);
            } catch (error) {
              // 如果 JSON.stringify 失败，使用 toString
              return String(arg);
            }
          }
          return String(arg);
        }).join(' ');
        logMessages.push(message);
        addLog(message);
        originalLog(...args);
      };
      
      try {
        await tryonService.startTryonFlow(config);
        setConnected(true);
        message.success('试穿流程启动成功！');
      } finally {
        // 恢复原始console.log
        console.log = originalLog;
      }
      
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      addLog(`错误: ${errorMessage}`);
      message.error('试穿流程失败，请检查参数和网络连接');
    } finally {
      setLoading(false);
    }
  };

  // 测试基础连接
  const handleTestConnection = async () => {
    try {
      setLoading(true);
      addLog('测试基础连接...');
      
      // 测试获取验证码
      const response = await fetch('/admin/mobile/13500003000');
      addLog(`API响应状态: ${response.status}`);
      
      if (response.ok) {
        addLog('基础连接测试成功');
        message.success('连接测试成功');
      } else {
        addLog('基础连接测试失败');
        message.error('连接测试失败');
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      addLog(`连接测试错误: ${errorMessage}`);
      message.error('连接测试失败');
    } finally {
      setLoading(false);
    }
  };

  // 断开连接
  const handleDisconnect = () => {
    tryonService.disconnect();
    setConnected(false);
    addLog('已断开连接');
    message.info('已断开连接');
  };

  // 检查连接状态
  const checkConnectionStatus = () => {
    const status = tryonService.getConnectionStatus();
    setConnected(status);
    addLog(`连接状态: ${status ? '已连接' : '未连接'}`);
  };

  // 测试签名生成
  const handleTestSignature = async () => {
    try {
      setLoading(true);
      addLog('测试签名生成...');
      
      // 使用固定的测试参数
      const rand = 80888197;
      const ts = 1751855826;
      const secretKey = 'nDQ5EVbQUiDSYpOz';
      
      addLog(`测试参数: rand=${rand}, ts=${ts}, secretKey=${secretKey}`);
      
      // 手动生成签名
      const signMessage = `rand=${rand}&secretkey=${secretKey}&ts=${ts}`;
      addLog(`签名字符串: ${signMessage}`);
      
      if (typeof crypto !== 'undefined' && crypto.subtle) {
        const encoder = new TextEncoder();
        const data = encoder.encode(signMessage);
        
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        
        addLog(`生成的签名: ${hashHex}`);
        addLog('期望的签名: 31bd369a8f02bd4979031940ebfac313c26e38a04887cbef77d92c93d983956f');
        
        if (hashHex === '31bd369a8f02bd4979031940ebfac313c26e38a04887cbef77d92c93d983956f') {
          addLog('✅ 签名生成正确！');
          message.success('签名生成测试通过');
        } else {
          addLog('❌ 签名生成错误！');
          message.error('签名生成测试失败');
        }
      } else {
        addLog('❌ Web Crypto API 不可用');
        message.error('Web Crypto API 不可用');
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      addLog(`签名测试错误: ${errorMessage}`);
      message.error('签名测试失败');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <Title level={2}>试穿系统测试 (简化版)</Title>
      
      <Alert 
        message="此版本修复了无限递归问题，提供更稳定的测试体验" 
        type="info" 
        style={{ marginBottom: '20px' }}
        showIcon 
      />
      
      <Card title="配置参数" style={{ marginBottom: '20px' }}>
        <Form
          form={form}
          layout="vertical"
          initialValues={{
            phone: '13500000805',
            coCreationId: '2',
            userId: '1754092805389819906'
          }}
        >
          <Form.Item
            label="手机号码"
            name="phone"
            rules={[{ required: true, message: '请输入手机号码' }]}
          >
            <Input placeholder="请输入手机号码" />
          </Form.Item>
          
          <Form.Item
            label="共创ID"
            name="coCreationId"
            rules={[{ required: true, message: '请输入共创ID' }]}
          >
            <Input placeholder="请输入共创ID" />
          </Form.Item>
          
          <Form.Item
            label="用户ID"
            name="userId"
            rules={[{ required: true, message: '请输入用户ID' }]}
          >
            <Input placeholder="请输入用户ID" />
          </Form.Item>
        </Form>
      </Card>
      
      <Card title="操作控制" style={{ marginBottom: '20px' }}>
        <Space wrap>
          <Button 
            type="primary" 
            onClick={handleStartTryon} 
            loading={loading}
            disabled={connected}
            size="large"
          >
            开始完整试穿流程
          </Button>
          
          <Button 
            onClick={handleTestConnection} 
            loading={loading}
            size="large"
          >
            测试基础连接
          </Button>
          
          <Button 
            danger 
            onClick={handleDisconnect} 
            disabled={!connected}
            size="large"
          >
            断开连接
          </Button>
          
          <Button 
            onClick={checkConnectionStatus}
            size="large"
          >
            检查连接状态
          </Button>
          
          <Button 
            onClick={clearLog}
            size="large"
          >
            清空日志
          </Button>
          
          <Button 
            onClick={handleTestSignature}
            size="large"
          >
            测试签名生成
          </Button>
        </Space>
      </Card>
      
      <Card title="状态信息" style={{ marginBottom: '20px' }}>
        <Space direction="vertical">
          <Text strong>连接状态: 
            <span style={{ color: connected ? 'green' : 'red', marginLeft: '8px' }}>
              {connected ? '已连接' : '未连接'}
            </span>
          </Text>
          <Text strong>加载状态: 
            <span style={{ color: loading ? 'orange' : 'green', marginLeft: '8px' }}>
              {loading ? '处理中...' : '就绪'}
            </span>
          </Text>
          <Text strong>日志条数: 
            <span style={{ marginLeft: '8px' }}>
              {logs.length}
            </span>
          </Text>
        </Space>
      </Card>
      
      <Card title="实时日志" style={{ marginBottom: '20px' }}>
        <div 
          style={{
            height: '400px',
            overflow: 'auto',
            backgroundColor: '#f5f5f5',
            padding: '10px',
            border: '1px solid #d9d9d9',
            borderRadius: '4px',
            fontFamily: 'monospace',
            fontSize: '12px',
            lineHeight: '1.4'
          }}
        >
          {logs.length === 0 ? (
            <div style={{ color: '#666' }}>等待开始...</div>
          ) : (
            logs.map((log, index) => (
              <div key={index} style={{ marginBottom: '4px' }}>
                {log}
              </div>
            ))
          )}
        </div>
      </Card>
      
      <Card title="使用说明" type="inner">
        <ol>
          <li><strong>测试基础连接</strong>：先测试API连接是否正常</li>
          <li><strong>开始完整试穿流程</strong>：执行完整的试穿流程</li>
          <li><strong>观察日志</strong>：实时查看流程进展</li>
          <li><strong>流程步骤</strong>：获取验证码 → 登录 → 房间信息 → 创建房间 → 加入房间 → 调度实例 → WebSocket连接 → 登台</li>
          <li><strong>自动执行</strong>：整个流程自动执行，在台上停留20秒后自动离开</li>
        </ol>
      </Card>
    </div>
  );
};

export default SimpleTryonTest; 