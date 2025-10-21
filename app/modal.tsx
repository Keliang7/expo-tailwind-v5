import { View, Text } from 'react-native';
import { Link } from 'expo-router';

export default function ModalScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="mb-4 text-2xl font-bold">这是一个模态窗口</Text>
      <Link href=".." className="text-blue-500">
        关闭
      </Link>
    </View>
  );
}
