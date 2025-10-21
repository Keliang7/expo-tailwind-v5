import '../global.css'; // ✅ 保留 NativeWind 全局样式
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <Stack>
        {/* Tabs 组 */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
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
