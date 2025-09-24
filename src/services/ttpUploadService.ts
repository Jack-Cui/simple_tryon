import TTUploader from 'tt-uploader';

export interface TTPCredentials {
    stsToken: {
      accessKeyId: string;
      secretAccessKey: string;
      sessionToken: string;
      expiredTime: number;
    };
    userId?: string;
    appId?: number;
  }

export interface TTPUploadResult {
  success: boolean;
  url?: string;
  key?: string;
  mid?: string;
  error?: string;
}

export class TTPUploadService {
  private uploader: TTUploader | null = null;
  private credentials: TTPCredentials | null = null;

  // 初始化 TTP 上传器
  initialize(credentials: TTPCredentials): void {
    console.log('初始化 TTP 上传器，credentials:', credentials);
    
    // 检查必需的参数
    if (!credentials.stsToken) {
      throw new Error('缺少 stsToken 参数');
    }
    
    this.credentials = credentials;
    
    // 创建新的上传器实例
    this.uploader = new TTUploader({
      userId: credentials.userId || '1234567890', // 建议设置能识别用户的唯一标识 ID
      appId: credentials.appId || 653371, // 在视频点播控制台应用管理页面创建的应用的 AppID
      // 仅视频/普通文件上传时需要配置
      videoConfig: {
        spaceName: 'dwtp-test' //在视频点播控制台创建的空间的名称
      }
    });
    
    console.log('TTP 上传器初始化成功:', this.uploader);
  }

  // 上传单个文件
  async uploadFile(file: File): Promise<TTPUploadResult> {
    if (!this.uploader || !this.credentials) {
      throw new Error('TTP 上传器未初始化');
    }

    return new Promise((resolve) => {
      try {
        console.log('开始上传文件到 TTP:', {
          fileName: file.name,
          fileSize: file.size,
          fileType: file.type
        });

        console.log('使用的 stsToken:', this.credentials!.stsToken);
        console.log('stsToken 类型:', typeof this.credentials!.stsToken);

        // 获取文件扩展名
        const fileExtension = '.' + file.name.split('.').pop();

        const fileKey = this.uploader!.addFile({
          file: file,
          stsToken: {
            AccessKeyId: this.credentials!.stsToken.accessKeyId,
            SecretAccessKey: this.credentials!.stsToken.secretAccessKey,
            SessionToken: this.credentials!.stsToken.sessionToken,
            ExpiredTime: this.credentials!.stsToken.expiredTime.toString(),
            CurrentTime: new Date().toISOString()
          },
          type: 'image',
          fileExtension: fileExtension,
          processAction: [
            {
              Name: 'AddOptionInfo',
              Input: {
                Title: file.name,
                RecordType: 2,
                Category: 'image'
              }
            }
          ]
        });

        // 监听上传完成事件
        this.uploader!.on('complete', (info) => {
          console.log('TTP 上传完成:', info);
          if (info.uploadResult) {
            resolve({
              success: true,
              url: info.uploadResult.url || info.uploadResult.videoUrl,
              key: info.uploadResult.key || info.uploadResult.videoKey,
              mid: info.uploadResult.mid || info.uploadResult.videoId
            });
          } else {
            resolve({
              success: false,
              error: '上传完成但未返回结果'
            });
          }
        });

        // 监听上传错误事件
        this.uploader!.on('error', (info) => {
          console.error('TTP 上传错误:', info);
          resolve({
            success: false,
            error: info.extra?.message || info.message || '上传失败'
          });
        });

        // 监听上传进度事件
        this.uploader!.on('progress', (info) => {
          console.log(`TTP 上传进度: ${info.percent}%`);
        });

        // 开始上传
        this.uploader!.start(fileKey);

      } catch (error: any) {
        console.error('TTP 上传异常:', error);
        resolve({
          success: false,
          error: error.message || '上传异常'
        });
      }
    });
  }

  // 批量上传文件
  async uploadFiles(files: File[]): Promise<TTPUploadResult[]> {
    console.log('开始批量上传文件到 TTP，数量:', files.length);
    
    const results: TTPUploadResult[] = [];
    
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      console.log(`正在上传第 ${i + 1}/${files.length} 个文件: ${file.name}`);
      
      const result = await this.uploadFile(file);
      results.push(result);
      
      if (!result.success) {
        console.warn(`文件 ${file.name} 上传失败:`, result.error);
      }
    }
    
    console.log('批量上传完成，结果:', results);
    return results;
  }

  // 检查上传器是否已初始化
  isInitialized(): boolean {
    return this.uploader !== null && this.credentials !== null;
  }
}

// 导出单例实例
export const ttpUploadService = new TTPUploadService();
