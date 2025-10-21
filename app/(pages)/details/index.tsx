import { View, Text, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

export default function DetailPage() {
  const router = useRouter();

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="mb-4 text-2xl font-bold">📄 Detail Index</Text>
      <Pressable
        onPress={() => router.push('/details/other')}
        className="rounded-md bg-yellow-400 px-6 py-3">
        <Text className="font-bold text-black">进入其他页</Text>
      </Pressable>
    </View>
  );
}
