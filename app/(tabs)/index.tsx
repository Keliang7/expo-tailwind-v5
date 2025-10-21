import { View, Text } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-yellow-100">
      <Text className="mb-4 text-2xl font-bold">🏠 首页</Text>
      <Link href="/modal" className="text-blue-500">
        打开 Modal 页面 →
      </Link>
      <Link href="/details">打开全屏页 →</Link>
    </View>
  );
}
