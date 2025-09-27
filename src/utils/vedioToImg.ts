/*
 * @Author: baomin min.bao@zuolin.com
 * @Date: 2025-09-22 22:18:25
 * @LastEditors: baomin min.bao@zuolin.com
 * @LastEditTime: 2025-09-23 15:04:35
 * @FilePath: /my-app/src/utils/vedioToImg.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * 生成上传视频的第一帧图片
 * @param videoFile - 用户上传的视频文件（来自 <input type="file">）
 * @param format - 导出图片格式（默认 'png'，可选 'jpeg'）
 * @param quality - 图片质量（仅 'jpeg' 有效，0-1，默认 0.92）
 * @returns Promise<{ base64: string; blob?: Blob }> - 包含 Base64 和 Blob 的结果
 */
export function getVideoFirstFrame(
  videoFile: File,
  format: "png" | "jpeg" = "png",
  quality: number = 0.92
): Promise<{ base64: string; blob?: Blob }> {
  return new Promise((resolve, reject) => {
    // 1. 校验文件类型（仅允许视频）
    if (!videoFile.type.startsWith("video/")) {
      reject(new Error("请上传有效的视频文件（如 MP4、WebM 等）"));
      return;
    }

    // 2. 创建隐藏的 video 元素
    const video = document.createElement("video");
    // video.style.display = "none"; // 不显示在页面上
    video.style.opacity = "0"; // 视觉上不可见，但被视为活跃元素
    video.crossOrigin = "anonymous"; // 避免跨域问题（针对远程视频，本地文件可省略）
    video.preload = "metadata"; // 仅加载元数据（无需加载完整视频，提升性能）
    video.muted = true; // 关键：静音视频更易通过自动播放限制
    video.playsInline = true; // 关键：iOS 中允许内联播放（非全屏）
    // 3. 视频加载完成后绘制第一帧
    video.addEventListener("loadeddata", () => {
      try {
        // 4. 创建 Canvas 并设置尺寸（与视频一致，避免拉伸）
        const canvas = document.createElement("canvas");
        canvas.width = video.videoWidth; // 视频真实宽度
        canvas.height = video.videoHeight; // 视频真实高度
        const ctx = canvas.getContext("2d");

        if (!ctx) {
          reject(new Error("Canvas 上下文创建失败，请检查浏览器兼容性"));
          return;
        }
        video.currentTime = 1;
        // 5. 绘制视频第 1 帧（currentTime 默认 0，即第一帧）
        // 定位到 0.1 秒（100 毫秒）
        video.addEventListener(
          "seeked",
          () => {
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            // 6. 导出 Base64 格式
            const base64 = canvas.toDataURL(`image/${format}`, quality);

            // 7. （可选）导出 Blob 格式（适合上传到服务器，体积比 Base64 小 ~30%）
            canvas.toBlob(
              (blob) => {
                resolve({
                  base64,
                  blob: blob || undefined, // 兼容 blob 为 null 的极端情况
                });
              },
              `image/${format}`,
              quality
            );

            // 8. 清理资源（避免内存泄漏）
            URL.revokeObjectURL(video.src); // 释放临时 URL
            document.body.removeChild(video); // 移除隐藏的 video 元素
          },
          { once: true }
        ); // 确保只触发一次
      } catch (error) {
        reject(new Error(`绘制视频帧失败：${(error as Error).message}`));
      }
    });

    // 9. 监听视频加载错误
    video.addEventListener("error", () => {
      reject(new Error("视频加载失败，可能是文件损坏或格式不支持"));
      URL.revokeObjectURL(video.src);
      document.body.removeChild(video);
    });

    // 10. 设置视频源并添加到页面（必须添加到 DOM 才会触发 loadeddata，部分浏览器限制）
    const videoUrl = URL.createObjectURL(videoFile);
    video.src = videoUrl;
    document.body.appendChild(video);
  });
}
