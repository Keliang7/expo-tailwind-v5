import { ScreenContent } from 'components/ScreenContent';
import { StatusBar } from 'expo-status-bar';

import './global.css';
import Text from 'react-native-css/components/Text';

export default function App() {
  return (
    <>
      <Text className="mt-10 bg-yellow-200 text-center text-3xl font-bold underline">
        Open up App.tsx to start working on your app!
      </Text>
      <ScreenContent title="Home" path="App.tsx"></ScreenContent>
      <StatusBar style="auto" />
    </>
  );
}
