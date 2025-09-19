# coCreationId 获取功能说明

## 功能概述

本功能支持从多个URL路径获取 `coCreationId` 参数，实现了灵活的共创ID获取机制。

## 支持的URL格式

✅ **支持的路径格式：**
- `http://dev_h5.ai1010.cn/home?co_creation_id=2`
- `http://dev_h5.ai1010.cn?co_creation_id=2`
- `http://dev_h5.ai1010.cn/login?co_creation_id=2`
- `http://dev_h5.ai1010.cn/home?co_creation_id=123`
- `http://dev_h5.ai1010.cn?co_creation_id=456`

## 获取优先级

1. **服务器响应** - 从登录API返回的 `co_creation_id`
2. **URL参数** - 从当前页面URL中获取 `co_creation_id` 参数
3. **本地缓存** - 从localStorage中获取之前保存的 `coCreationId`

## 核心工具函数

### `getCoCreationIdFromURL()`
从当前页面URL中获取 `co_creation_id` 参数

```typescript
import { getCoCreationIdFromURL } from '../../utils/coCreationIdHelper';

const coCreationId = getCoCreationIdFromURL();
if (coCreationId !== null) {
  console.log('从URL获取到coCreationId:', coCreationId);
}
```

### `getCoCreationId(fallbackToCache: boolean)`
完整的获取流程，支持从URL和缓存获取

```typescript
import { getCoCreationId } from '../../utils/coCreationIdHelper';

// 只从URL获取，不从缓存获取
const urlCoCreationId = getCoCreationId(false);

// 从URL获取，如果获取不到则从缓存获取
const finalCoCreationId = getCoCreationId(true);
```

### `isValidCoCreationId(coCreationId: any)`
验证共创ID是否有效

```typescript
import { isValidCoCreationId } from '../../utils/coCreationIdHelper';

if (isValidCoCreationId(coCreationId)) {
  console.log('共创ID有效:', coCreationId);
} else {
  console.log('共创ID无效');
}
```

### `showCoCreationIdError()`
显示共创ID不存在的错误弹窗

```typescript
import { showCoCreationIdError } from '../../utils/coCreationIdHelper';

if (!isValidCoCreationId(coCreationId)) {
  showCoCreationIdError();
}
```

## 在Login页面中的使用

```typescript
// 获取coCreationId，优先级：服务器响应 > URL参数 > 缓存
let co_creation_id: number | undefined = loginData.co_creation_id;

// 如果服务器没有返回，尝试从URL获取（URL参数优先）
if (!co_creation_id) {
  const urlCoCreationId = getCoCreationIdWithUrlPriority(); // 强制使用URL参数，会覆盖缓存
  if (urlCoCreationId !== null) {
    co_creation_id = urlCoCreationId;
  }
}

// 如果还是没有获取到，尝试从缓存获取（作为最后的备选方案）
if (!co_creation_id) {
  const cacheCoCreationId = getCoCreationId(true, false); // 允许从缓存获取，但不强制URL优先级
  if (cacheCoCreationId !== null) {
    co_creation_id = cacheCoCreationId;
  }
}

// 如果最终还是没有获取到，显示错误
if (!isValidCoCreationId(co_creation_id)) {
  showCoCreationIdError();
  setErrorMessage('共创ID不存在，请检查URL参数或联系管理员');
  return;
}
```

## 在Home页面中的使用

```typescript
// 如果缓存中没有参数，尝试从URL获取coCreationId，URL参数优先
const urlCoCreationId = getCoCreationIdWithUrlPriority(); // 强制使用URL参数，会覆盖缓存

if (isValidCoCreationId(urlCoCreationId)) {
  console.log('从URL获取到coCreationId:', urlCoCreationId);
  
  // 如果URL中有有效的coCreationId，但缓存中没有其他登录信息
  // 清除可能过期的缓存，然后跳转到登录页面
  clearCoCreationIdCache();
  navigate('/login?redirect=' + encodeURIComponent(location.pathname));
  return;
}

console.log('缓存中没有有效的登录参数，且URL中也没有coCreationId');
```

## 错误处理

当无法获取到有效的 `coCreationId` 时：

1. **控制台日志** - 显示详细的错误信息
2. **用户弹窗** - 使用 `showCoCreationIdError()` 显示友好的错误提示
3. **错误状态** - 设置相应的错误状态，阻止后续操作

## 测试页面

访问 `/test-co-creation-id` 路径可以打开测试页面，用于验证功能是否正常工作。

测试页面功能：
- 显示当前URL
- 测试各种获取方法的结果
- 提供不同URL格式的测试按钮
- 实时显示获取结果

## 注意事项

1. **参数格式** - `co_creation_id` 参数值必须是正整数
2. **URL编码** - 确保URL参数正确编码
3. **缓存清理** - 定期清理过期的登录缓存
4. **错误处理** - 始终验证获取到的值是否有效

## 技术实现

- 使用 `URL` API 解析URL参数
- 支持多种URL格式的兼容性处理
- 使用正则表达式进行路径解析
- 提供降级方案（URL > 缓存）
- 完整的错误处理和日志记录 