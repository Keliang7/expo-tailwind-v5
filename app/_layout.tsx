import '../global.css';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false, // 默认隐藏顶部导航
        }}>
        {/* Tabs 导航组 */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

        {/* 非 Tabs 全屏页组（如 detail、profile 等） */}
        <Stack.Screen name="(pages)" options={{ headerShown: false }} />

        {/* 模态页面 */}
        <Stack.Screen
          name="modal"
          options={{
            presentation: 'modal',
            title: 'Modal',
          }}
        />
      </Stack>

      <StatusBar style="auto" />
    </>
  );
}
