# Expo Router 配置指南

## 1. 安装 Router 相关依赖

使用以下命令安装 Expo Router 及相关依赖包：

```bash
pnpx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
```

这些依赖包确保路由功能和安全区域支持正常工作。

---

## 2. 配置 `package.json`

在项目根目录的 `package.json` 文件中，设置入口文件为 `expo-router/entry`：

```json
{
  "main": "expo-router/entry"
}
```

此配置让 Expo CLI 使用 Expo Router 的入口文件启动应用。

---

## 3. 配置 Deep Linking

在 `app.json` 中添加 `scheme` 字段，启用深度链接：

```json
{
  "scheme": "expo-tailwind-v5"
}
```

这里的 `scheme` 可根据项目名称自定义，方便通过 URL 直接打开指定页面。

---

## 4. 配置 Web 支持

安装 Web 相关依赖：

```bash
pnpx expo install react-native-web react-dom
```

并在 `app.json` 中配置 Web 打包器：

```json
{
  "web": {
    "bundler": "metro"
  }
}
```

此配置允许项目在 Web 平台上使用 Metro 打包器进行构建。

---

## 5. 配置 Babel

在项目根目录创建或修改 `babel.config.js`，内容如下：

```js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};
```

该配置确保 Babel 使用 Expo 预设编译代码。

---

## 6. 保留并清空 `App.tsx`

**注意**：不要删除 `App.tsx` 文件，只需清空其内容，保留文件入口。

Expo CLI 启动时仍会寻找 `App.tsx` 文件，保留空文件可避免启动错误。

例如，`App.tsx` 文件内容清空为：

```tsx
// 入口保留，内容清空
export default function App() {
  return null;
}
```

---

## 7. 创建 `app` 文件夹，实现路由约定

在项目根目录下创建 `app` 文件夹，采用文件系统路由约定：

- `_layout.tsx`：相当于页面布局组件（类似页面视图容器）
- `index.tsx`：相当于首页组件

通过文件命名和目录结构，自动生成对应路由。

---

## 8. `app` 文件夹路由约定及 Tabs 模板说明

`app` 文件夹是 Expo Router 的核心，支持多种路由结构：

- **页面路由**：每个 `.tsx` 文件对应一个页面路由，例如 `app/index.tsx` 对应首页 `/`。
- **动态路由**：使用方括号定义动态参数，如 `app/[id].tsx`。
- **嵌套路由**：通过子文件夹实现嵌套路由和页面嵌套。
- **布局文件 `_layout.tsx`**：用于包裹子页面，定义公共布局和导航结构。
- **Tabs 模板**：在 `_layout.tsx` 中可以使用 `Tabs` 组件，实现底部标签导航：

示例：

```tsx
import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: '首页' }} />
      <Tabs.Screen name="profile" options={{ title: '个人' }} />
    </Tabs>
  );
}
```

这种结构使得页面切换流畅且易于维护。

---

### 额外说明

- **全局样式**：可在 `app` 文件夹下创建 `global.css` 或使用 Tailwind CSS 配置，全局样式会自动生效。
- **插件支持**：Expo Router 支持多种插件，可根据需求扩展导航、状态管理等功能。

通过以上配置，您即可在 Expo 项目中顺利使用 Expo Router，享受便捷的文件系统路由体验。
