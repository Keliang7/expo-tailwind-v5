import { View, Text, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

export default function OtherDetailPage() {
  const router = useRouter();

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="mb-4 text-2xl font-bold">📑 Other Detail Page</Text>
      <Pressable onPress={() => router.back()} className="rounded-md bg-yellow-400 px-6 py-3">
        <Text className="font-bold text-black">返回</Text>
      </Pressable>
    </View>
  );
}
