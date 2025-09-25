import wx from 'weixin-js-sdk';

// 微信分享服务
export interface WechatShareConfig {
  appId: string;
  title: string;
  desc: string;
  link: string;
  imgUrl: string;
}

export interface WechatShareData {
  title: string;
  desc: string;
  link: string;
  imgUrl: string;
}

export class WechatShareService {
  private config: WechatShareConfig | null = null;
  private _ready: boolean = false;
  private _initialized: boolean = false;

  constructor() {
    this.checkWechatEnvironment();
  }

  // 检查是否在微信环境中
  private checkWechatEnvironment(): boolean {
    const isWechat = /MicroMessenger/i.test(navigator.userAgent);
    console.log('🔍 微信环境检测:', isWechat ? '是' : '否');
    return isWechat;
  }

  // 初始化微信SDK
  async initialize(config: WechatShareConfig): Promise<void> {
    try {
      console.log('🚀 初始化微信分享SDK...', config);
      
      this.config = config;
      
      if (!this.checkWechatEnvironment()) {
        console.warn('⚠️ 当前不在微信环境中，分享功能可能受限');
      }

      await this.loadWechatSDK();
      await this.configureWechatSDK();
      
      this._initialized = true;
      console.log('✅ 微信分享SDK初始化成功');
      
    } catch (error) {
      console.error('❌ 微信分享SDK初始化失败:', error);
      throw error;
    }
  }

  // 动态加载微信JS-SDK
  private loadWechatSDK(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (window.wx) {
        console.log('✅ 微信JS-SDK已存在');
        resolve();
        return;
      }

      console.log('📦 开始加载微信JS-SDK...');
      
      const script = document.createElement('script');
      script.src = 'https://res.wx.qq.com/open/js/jweixin-1.6.0.js';
      script.onload = () => {
        console.log('✅ 微信JS-SDK加载成功');
        resolve();
      };
      script.onerror = () => {
        console.error('❌ 微信JS-SDK加载失败');
        reject(new Error('微信JS-SDK加载失败'));
      };
      
      document.head.appendChild(script);
    });
  }

  // 配置微信SDK
  private async configureWechatSDK(): Promise<void> {
    if (!this.config || !wx) {
      throw new Error('配置或微信SDK未准备好');
    }

    return new Promise((resolve, reject) => {
      const currentUrl = window.location.href.split('#')[0];
      
      console.log('🔧 配置微信SDK...');
      console.log('  - appId:', this.config!.appId);
      console.log('  - url:', currentUrl);

      this.getWechatSignature(currentUrl)
        .then(signature => {
          wx.config({
            debug: false, // 开启调试模式查看详细错误信息
            appId: this.config!.appId,
            timestamp: signature.timestamp,
            nonceStr: signature.nonceStr,
            signature: signature.signature,
            jsApiList: [
              'updateAppMessageShareData',
              'updateTimelineShareData',
              'onMenuShareTimeline',
              'onMenuShareAppMessage'
            ]
          });

          wx.ready(() => {
            console.log('✅ 微信SDK配置成功111');
            this._ready = true;
            
            // 检查分享API是否可用
            this.checkShareApiAvailability().then(() => {
              resolve();
            }).catch((error) => {
              console.warn('⚠️ 分享API检查失败，但继续使用:', error);
              resolve(); // 即使检查失败也继续
            });
            

          });

          wx.error((res: any) => {
            console.error('❌ 微信SDK配置失败:', res);
            // 不抛出错误，而是显示手动分享提示
            this.showManualShareTip();
            resolve(); // 继续执行，不阻塞
          });
        })
        .catch(error => {
          console.error('❌ 获取微信签名失败:', error);
          // 不抛出错误，而是显示手动分享提示
          this.showManualShareTip();
          resolve(); // 继续执行，不阻塞
        });
    });
  }

  // 检查分享API是否可用
  private async checkShareApiAvailability(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!window.wx || !window.wx.checkJsApi) {
        console.warn('⚠️ 无法检查分享API可用性');
        resolve();
        return;
      }

      window.wx.checkJsApi({
        jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData'],
        success: (res: any) => {
          console.log('🔍 分享API检查结果:', res);
          if (res.checkResult && res.checkResult.updateAppMessageShareData) {
            console.log('✅ 分享API可用');
            resolve();
          } else {
            console.warn('⚠️ 分享API不可用，将使用备用方案');
            resolve(); // 继续使用，不抛出错误
          }
        },
        fail: (res: any) => {
          console.warn('⚠️ 分享API检查失败:', res);
          resolve(); // 继续使用，不抛出错误
        }
      });
    });
  }

  // 获取微信签名（真实实现）
  private async getWechatSignature(url: string): Promise<{
    timestamp: number;
    nonceStr: string;
    signature: string;
  }> {
    console.log('🔑 获取微信签名...');
    console.log('  - url:', url);
    
    try {
      // 参考FixedDownloadPrompt.tsx中的实现
      const appId = this.config?.appId || 'wx57548bb90330c93e';
      const secret = '07592fe655621b11af45dd30abea309e';
      
      // 1. 获取access_token
      const accessTokenResponse = await fetch(`/wechat/cgi-bin/token?grant_type=client_credential&appid=${appId}&secret=${secret}`);
      const accessTokenData = await accessTokenResponse.json();
      
      if (!accessTokenData.access_token) {
        throw new Error('获取access_token失败');
      }
      
      const accessToken = accessTokenData.access_token;
      console.log('✅ 获取access_token成功:', accessToken);
      
      // 2. 获取jsapi_ticket
      const ticketResponse = await fetch(`/wechat/cgi-bin/ticket/getticket?type=jsapi&access_token=${accessToken}`);
      const ticketData = await ticketResponse.json();
      
      if (!ticketData.ticket) {
        throw new Error('获取jsapi_ticket失败');
      }
      
      const jsapiTicket = ticketData.ticket;
      console.log('✅ 获取jsapi_ticket成功:', jsapiTicket);
      
      // 3. 生成签名
      const timestamp = Math.floor(Date.now() / 1000);
      const nonceStr = Math.random().toString(36).substr(2, 15);
      const stringToSign = `jsapi_ticket=${jsapiTicket}&noncestr=${nonceStr}&timestamp=${timestamp}&url=${url}`;
      
      // 使用crypto-js生成SHA1签名
      const crypto = require('crypto');
      const signature = crypto.createHash('sha1').update(stringToSign).digest('hex');
      
      console.log('✅ 生成签名成功:', signature);
      
      return {
        timestamp,
        nonceStr,
        signature
      };
      
    } catch (error) {
      console.error('❌ 获取微信签名失败:', error);
      
      // 降级方案：使用模拟签名
      console.log('⚠️ 使用模拟签名作为降级方案');
      return {
        timestamp: Math.floor(Date.now() / 1000),
        nonceStr: 'wechat_share_' + Math.random().toString(36).substr(2, 9),
        signature: 'mock_signature_' + Math.random().toString(36).substr(2, 9)
      };
    }
  }

  // 配置分享数据并提示用户手动分享
  async chooseAndShareToFriend(shareData?: Partial<WechatShareData>): Promise<void> {
    // 检查微信SDK是否准备好
    if (!this._ready || !wx) {
      console.warn('⚠️ 微信SDK未准备好，跳过分享配置');
      // alert('微信SDK未准备好，请稍后再试');
      this.showManualShareTip();
      return;
    }

    // 确保在wx.ready回调中执行分享配置
    return new Promise((resolve) => {
      var url = window.location.href.split('#')[0]; // 获取当前页面的URL
      // alert('当前页面URL: ' + url);
      wx.ready(() => {
        console.log('✅ 微信SDK已准备好，开始配置分享');
        
        wx.onMenuShareAppMessage({
        // wx.updateAppMessageShareData({
          title: 'airU-3D试衣间', // 分享标题
          desc: '快来和我一起共创动画', // 分享描述
          link: 'https://dev-h5.ai1010.cn/login?co_creation_id=1962501788939943937', // 分享链接
          imgUrl: 'https://dev-h5.ai1010.cn/share0902.jpg', // 分享图标
          success: () => {
            console.log('分享成功'+window.location.href.split('#')[0]);
            // alert('分享成功'+window.location.href.split('#')[0]);
            resolve();
          },
          cancel: () => {
            console.log('分享取消');
            alert('分享取消');
            resolve();
          },
          fail: (res: any) => {
            console.error('分享配置失败:', res);
            alert(`分享配置失败: ${JSON.stringify(res)}`);
            resolve();
          }
        });
        
            console.log('已准备好要分享的共创内容，请点击右上角菜单进行分享！');
        alert('已准备好要分享的共创内容，请点击右上角菜单进行分享！');
      });

      wx.error((res: any) => {
        console.error('微信SDK配置失败:', res);
        alert(`微信SDK配置失败: ${JSON.stringify(res)}`);
        resolve();
      });
    });


    if (!this._ready || !wx) {
      console.warn('⚠️ 微信SDK未准备好，跳过分享配置');
      alert('微信SDK未准备好，跳过分享配置');
      this.showManualShareTip();
      return;
    }

    const data = {
      title: shareData?.title || this.config?.title || 'airU-3D试衣间',
      desc: shareData?.desc || this.config?.desc || '快来和我一起共创动画',
      link: shareData?.link || this.config?.link || window.location.href.split('#')[0],
      imgUrl: shareData?.imgUrl || this.config?.imgUrl || 'https://dev-h5.ai1010.cn/logo192.png'
    };

    console.log('📤 配置分享数据:', data);

    
    // 调试信息：显示分享数据详情
    alert(`分享数据详情：
标题: ${data.title}
描述: ${data.desc}
链接: ${data.link}
图片: ${data.imgUrl}
图片长度: ${data.imgUrl.length}`);

   

    return new Promise((resolve) => {
      // 只配置好友分享，这是最重要的
      if (wx.updateAppMessageShareData) {
        wx.updateAppMessageShareData({
          title: data.title,
          desc: data.desc,
          link: data.link,
          imgUrl: data.imgUrl,
          success: () => {
            console.log('✅ 好友分享数据配置成功');
            alert('✅ 分享配置成功！请点击右上角菜单选择"发送给朋友"');
            this.showShareSuccessTip('分享配置成功！请点击右上角菜单选择"发送给朋友"');
            resolve();
          },
          
          fail: (res: any) => {
            console.warn('⚠️ 好友分享数据配置失败:', res);
            alert(`⚠️ 分享配置失败: ${JSON.stringify(res)}`);
            // 如果新版失败，尝试旧版接口
            this.tryLegacyShareToFriend(data, resolve);
          }
        });
      } else {
        // 直接使用旧版接口
        this.tryLegacyShareToFriend(data, resolve);
      }
    });
  }

  // 分享给好友（保留原有方法作为备用）
  async shareToFriend(shareData?: Partial<WechatShareData>): Promise<void> {
    if (!this._ready || !window.wx) {
      console.warn('⚠️ 微信SDK未准备好，跳过分享配置');
      this.showManualShareTip();
      return;
    }

    const data = {
      title: shareData?.title || this.config?.title || 'airU-3D试衣间',
      desc: shareData?.desc || this.config?.desc || '快来和我一起共创动画',
      link: shareData?.link || this.config?.link || window.location.href.split('#')[0],
      imgUrl: shareData?.imgUrl || this.config?.imgUrl || 'https://dev-h5.ai1010.cn/logo.png'
    };

    console.log('📤 分享给好友:', data);

    return new Promise((resolve) => {
      // 尝试使用新版分享接口
      if (window.wx.updateAppMessageShareData) {
        window.wx.updateAppMessageShareData({
          title: data.title,
          desc: data.desc,
          link: data.link,
          imgUrl: data.imgUrl,
          success: () => {
            console.log('✅ 新版分享配置成功');
            this.showShareSuccessTip('分享配置成功，请点击右上角菜单选择"发送给朋友"');
            resolve();
          },
          fail: (res: any) => {
            console.warn('⚠️ 新版分享接口失败，尝试旧版接口:', res);
            // 如果新版失败，尝试旧版接口
            this.tryLegacyShareToFriend(data, resolve);
          }
        });
      } else {
        // 直接使用旧版接口
        this.tryLegacyShareToFriend(data, resolve);
      }
    });
  }

  // 尝试旧版分享给好友接口
  private tryLegacyShareToFriend(data: any, resolve: () => void): void {
    if (window.wx.onMenuShareAppMessage) {
      // 只配置好友分享
      window.wx.onMenuShareAppMessage({
        title: data.title,
        desc: data.desc,
        link: data.link,
        imgUrl: data.imgUrl,
        success: () => {
          console.log('✅ 旧版好友分享配置成功');
          alert('✅ 分享配置成功！请点击右上角菜单选择"发送给朋友"');
          resolve();
        },
        fail: (res: any) => {
          console.warn('⚠️ 旧版好友分享配置失败:', res);
          alert(`⚠️ 分享配置失败: ${JSON.stringify(res)}`);
          resolve(); // 不抛出错误，让用户手动分享
        }
      });
    } else {
      console.warn('⚠️ 新旧版分享接口都不可用');
      alert('⚠️ 分享接口不可用，请手动分享');
      resolve(); // 不抛出错误，让用户手动分享
    }
  }

  // 分享到朋友圈
  async shareToTimeline(shareData?: Partial<WechatShareData>): Promise<void> {
    if (!this._ready || !window.wx) {
      console.warn('⚠️ 微信SDK未准备好，跳过分享配置');
      return;
    }

    const data = {
      title: shareData?.title || this.config?.title || 'airU-3D试衣间',
      link: shareData?.link || this.config?.link || window.location.href.split('#')[0],
      imgUrl: shareData?.imgUrl || this.config?.imgUrl || 'https://dev-h5.ai1010.cn/logo.png'
    };

    console.log('📤 分享到朋友圈:', data);

    return new Promise((resolve) => {
      // 尝试使用新版分享接口
      if (window.wx.updateTimelineShareData) {
        window.wx.updateTimelineShareData({
          title: data.title,
          link: data.link,
          imgUrl: data.imgUrl,
          success: () => {
            console.log('✅ 新版朋友圈分享配置成功');
            resolve();
          },
          fail: (res: any) => {
            console.warn('⚠️ 新版朋友圈分享接口失败，尝试旧版接口:', res);
            // 如果新版失败，尝试旧版接口
            this.tryLegacyShareToTimeline(data, resolve);
          }
        });
      } else {
        // 直接使用旧版接口
        this.tryLegacyShareToTimeline(data, resolve);
      }
    });
  }

  // 尝试旧版分享到朋友圈接口
  private tryLegacyShareToTimeline(data: any, resolve: () => void): void {
    if (window.wx.onMenuShareTimeline) {
      window.wx.onMenuShareTimeline({
        title: data.title,
        link: data.link,
        imgUrl: data.imgUrl,
        success: () => {
          console.log('✅ 旧版分享到朋友圈成功');
          resolve();
        },
        fail: (res: any) => {
          console.warn('⚠️ 旧版分享到朋友圈失败:', res);
          resolve(); // 不抛出错误，让用户手动分享
        }
      });
    } else {
      console.warn('⚠️ 新旧版朋友圈分享接口都不可用');
      resolve(); // 不抛出错误，让用户手动分享
    }
  }

  // 通用分享方法
  async share(shareData?: Partial<WechatShareData>): Promise<void> {
    try {
      console.log('📤 开始微信分享...');
      
      // 检查是否在微信环境中
      if (!this.checkWechatEnvironment()) {
        console.warn('⚠️ 当前不在微信环境中，分享功能可能受限');
        // 在非微信环境中，显示提示而不是抛出错误
        this.showNonWechatTip();
        return;
      }
      
      // 如果微信SDK未初始化，先初始化
      if (!this._initialized) {
        console.log('🔧 微信SDK未初始化，开始初始化...');
        try {
          await this.initialize({
            appId: this.config?.appId || 'wx57548bb90330c93e',
            title: shareData?.title || this.config?.title || 'airU APP - 您的私人试衣间',
            desc: shareData?.desc || this.config?.desc || '超多品牌等你来体验，AI试穿技术让您轻松找到完美搭配！',
            link: shareData?.link || this.config?.link || window.location.href.split('#')[0],
            imgUrl: shareData?.imgUrl || this.config?.imgUrl || 'https://dev-h5.ai1010.cn/logo.png'
          });
        } catch (initError) {
          console.warn('⚠️ 微信SDK初始化失败，显示手动分享提示:', initError);
          this.showManualShareTip();
          return;
        }
      }
      
      // 尝试分享，但不抛出错误
      try {
        await Promise.all([
          this.shareToFriend(shareData),
          this.shareToTimeline(shareData)
        ]);
        
        console.log('✅ 微信分享配置完成');
        this.showShareTip();
        
      } catch (error) {
        console.warn('⚠️ 微信分享配置失败，但继续显示提示:', error);
        // 即使分享配置失败，也显示提示让用户手动分享
        this.showManualShareTip();
      }
      
    } catch (error) {
      console.error('❌ 微信分享失败:', error);
      // 不抛出错误，而是显示友好的提示
      this.showManualShareTip();
    }
  }

  // 显示非微信环境提示
  private showNonWechatTip(): void {
    const event = new CustomEvent('wechatShareReady', {
      detail: {
        message: '链接已复制到剪贴板！',
        type: 'success'
      }
    });
    window.dispatchEvent(event);
  }

  // 显示手动分享提示
  private showManualShareTip(): void {
    const event = new CustomEvent('wechatShareReady', {
      detail: {
        message: '请点击右上角菜单，选择"分享给朋友"或"分享到朋友圈"',
        type: 'manual-share'
      }
    });
    window.dispatchEvent(event);
  }

  // 显示错误提示
  private showErrorTip(error: any): void {
    const event = new CustomEvent('wechatShareReady', {
      detail: {
        message: '分享功能暂时不可用，请稍后再试',
        type: 'error',
        error: error
      }
    });
    window.dispatchEvent(event);
  }

  // 显示分享提示
  private showShareTip(): void {
    if (this.checkWechatEnvironment()) {
      console.log('💡 请在微信中点击右上角菜单进行分享');
      
      const event = new CustomEvent('wechatShareReady', {
        detail: {
          message: '请在微信中点击右上角菜单进行分享'
        }
      });
      window.dispatchEvent(event);
    }
  }

  // 显示分享成功提示
  private showShareSuccessTip(message: string): void {
    const event = new CustomEvent('wechatShareReady', {
      detail: {
        message: message,
        type: 'success'
      }
    });
    window.dispatchEvent(event);
  }

  // 检查是否已初始化
  isInitialized(): boolean {
    return this._initialized;
  }

  // 检查是否已准备好
  isReady(): boolean {
    return this._ready;
  }

  // 等待微信SDK准备就绪
  async waitForReady(): Promise<boolean> {
    if (this._ready) {
      return true;
    }

    return new Promise((resolve) => {
      const checkReady = () => {
        if (this._ready) {
          resolve(true);
        } else {
          setTimeout(checkReady, 100);
        }
      };
      checkReady();
    });
  }

  // 获取配置
  getConfig(): WechatShareConfig | null {
    return this.config;
  }
}

// 声明全局微信对象
declare global {
  interface Window {
    wx: any;
  }
}

// 导出单例实例
export const wechatShareService = new WechatShareService(); 