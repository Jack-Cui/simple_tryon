/*
 * @Author: baomin min.bao@zuolin.com
 * @Date: 2025-09-22 16:48:33
 * @LastEditors: baomin min.bao@zuolin.com
 * @LastEditTime: 2025-09-22 16:53:58
 * @FilePath: /my-app/src/utils/imgCheck.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export const checkImg = async (file: any) => {
    const fileType: any = file.name.substring(file.name.lastIndexOf(".") + 1).toLowerCase(); // 格式
    const fileSize: any = file.size / 1024 / 1024; // 大小 单位M
    const fileInfo: any = await getImageSize(file);
    console.log(fileType, fileSize, fileInfo);
    return {
      fileType,
      fileSize,
      fileInfo
    }
}

const getImageSize = (file: any) => {
    return new Promise((resolve, reject) => {
      const reader: any = new FileReader()
      reader.onload = (e: any) => {
        const image: any = new Image()
        image.onload = () => {
          resolve({
            width: image.width,
            height: image.height
          })
        }
        image.src = e.target.result
      }
      reader.readAsDataURL(file)
    })
  };