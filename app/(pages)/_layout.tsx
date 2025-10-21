import { Stack, useRouter } from 'expo-router';
import { Text, Pressable } from 'react-native';

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
      }}>
      {/* <Stack.Screen
        name="details/index"
        options={{
          headerLeft: () => (
            <Pressable onPress={() => router.back()}>
              <Text style={{ marginLeft: 10 }}>返回</Text>
            </Pressable>
          ),
          title: '详情页',
        }}
      />
      <Stack.Screen name="details/other" /> */}
    </Stack>
  );
}
