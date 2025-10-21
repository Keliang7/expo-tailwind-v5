# Pages 配置理解

在 Expo Router 中，`(pages)` 是一个「路由分组文件夹（Route Group）」：

- 该文件夹名会被括号包裹，因此**不会出现在实际 URL 路径中**；
- 它通常用于组织特定功能区的页面集合，比如全屏详情页、登录页、设置页等。

## 基本结构示例

```
app/
 ├── (pages)/
 │   ├── _layout.tsx
 │   └── detail/
 │        ├── index.tsx
 │        └── other.tsx
```

## 路由解析

在上述结构中：

- `/detail` → 对应 `detail/index.tsx`
- `/detail/other` → 对应 `detail/other.tsx`

由于 `(pages)` 是路由分组，它不会出现在最终路径中。

## \_layout.tsx 的作用

`(pages)/_layout.tsx` 控制该组页面的导航结构，通常使用 `<Stack>`：

```tsx
import { Stack, useRouter } from 'expo-router';
import { Pressable, Text } from 'react-native';

export default function PagesLayout() {
  const router = useRouter();

  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: '#facc15' },
        headerTintColor: '#000',
        headerTitleAlign: 'center',
        headerLeft: () => (
          <Pressable onPress={() => router.back()}>
            <Text style={{ marginLeft: 10 }}>返回</Text>
          </Pressable>
        ),
      }}
    />
  );
}
```

### 📘 说明：

- 使用 `<Stack />` 而不是 `<Stack.Screen>` 时，Expo Router 会自动扫描该文件夹下的所有页面；
- 每个页面会被自动注册为一个可导航的 Screen；
- 通过 `router.back()` 可以实现返回上一级页面。

## 使用场景

| 场景        | 示例                             |
| ----------- | -------------------------------- |
| 详情页      | `/detail`、`/detail/other`       |
| 登录/注册页 | `/auth/login`、`/auth/register`  |
| 设置页      | `/settings`、`/settings/account` |

这些页面通常不需要底部 Tabs，因此放在 `(pages)` 组中实现「全屏」导航体验。

---
