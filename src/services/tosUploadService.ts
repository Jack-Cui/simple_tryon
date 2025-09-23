import { TOS } from '@volcengine/tos-sdk';

export interface TosCredentials {
  accessKeyId: string;
  secretAccessKey: string;
  sessionToken: string;
  expiredTime: string;
}

export interface UploadResult {
  success: boolean;
  url?: string;
  key?: string;
  error?: string;
}

export class TosUploadService {
  private tos: TOS | null = null;

  // 初始化TOS客户端
  initialize(credentials: TosCredentials): void {
    console.log('初始化TOS客户端，credentials:', credentials);
    
    // 检查必需的参数
    if (!credentials.accessKeyId) {
      throw new Error('缺少 accessKeyId 参数');
    }
    if (!credentials.secretAccessKey) {
      throw new Error('缺少 secretAccessKey 参数');
    }
    if (!credentials.sessionToken) {
      throw new Error('缺少 sessionToken 参数');
    }
    
    console.log('所有必需参数都存在，开始初始化TOS客户端');
    
    this.tos = new TOS({
      region: "cn-shanghai",
      endpoint: "tos-cn-shanghai.volces.com",
      bucket: "admins3",
      stsToken: credentials.sessionToken,
      accessKeyId: credentials.accessKeyId,
      accessKeySecret: credentials.secretAccessKey,
      // 添加一些额外的配置
      secure: true, // 使用HTTPS
      requestTimeout: 30000, // 30秒超时
      maxRetryCount: 3, // 重试3次
    });
    
    console.log('TOS客户端初始化成功:', this.tos);
  }

  // 上传文件到TOS
  async uploadFile(file: File, key?: string): Promise<UploadResult> {
    if (!this.tos) {
      throw new Error('TOS客户端未初始化');
    }

    try {
      // 如果没有指定key，生成一个唯一的key
      const fileKey = key || this.generateFileKey(file);
      
      console.log('开始上传文件到TOS:', {
        fileName: file.name,
        fileSize: file.size,
        fileType: file.type,
        key: fileKey,
        bucket: 'admins3',
        region: 'cn-shanghai'
      });

      // 尝试最简单的上传配置
      const uploadResult = await this.tos.putObject({
        key: fileKey,
        body: file,
        contentType: file.type,
      });

      console.log('文件上传成功:', uploadResult);
      
      // 构建文件访问URL
      const fileUrl = `https://admins3.tos-cn-shanghai.volces.com/${fileKey}`;
      
      return {
        success: true,
        url: fileUrl,
        key: fileKey
      };
    } catch (error: any) {
      console.error('文件上传失败:', error);
      
      // 提供更详细的错误信息
      let errorMessage = '上传失败';
      if (error.response) {
        console.error('错误响应:', error.response.data);
        console.error('错误状态:', error.response.status);
        console.error('错误头:', error.response.headers);
        
        if (error.response.status === 403) {
          errorMessage = '权限不足，请检查临时凭证权限';
        } else if (error.response.status === 404) {
          errorMessage = '存储桶不存在或路径错误';
        } else if (error.response.status === 400) {
          errorMessage = '请求参数错误';
        }
      } else if (error.message) {
        errorMessage = error.message;
      }
      
      return {
        success: false,
        error: errorMessage
      };
    }
  }

  // 批量上传文件
  async uploadFiles(files: File[]): Promise<UploadResult[]> {
    console.log('开始批量上传文件，数量:', files.length);
    
    const uploadPromises = files.map(file => this.uploadFile(file));
    const results = await Promise.all(uploadPromises);
    
    console.log('批量上传完成，结果:', results);
    return results;
  }

  // 生成文件key
  private generateFileKey(file: File): string {
    const timestamp = Date.now();
    const randomStr = Math.random().toString(36).substring(2, 15);
    const extension = file.name.split('.').pop() || '';
    return `uploads/${timestamp}_${randomStr}.${extension}`;
  }

  // 检查TOS客户端是否已初始化
  isInitialized(): boolean {
    return this.tos !== null;
  }
}

// 导出单例实例
export const tosUploadService = new TosUploadService();
