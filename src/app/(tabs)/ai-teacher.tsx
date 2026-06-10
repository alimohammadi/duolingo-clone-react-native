import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AITeacherScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }} edges={['top']}>
      <View className="flex-1 items-center justify-center">
        <Text className="type-h3 text-text-primary">AI Teacher</Text>
        <Text className="type-body-md text-text-secondary mt-2">Coming soon</Text>
      </View>
    </SafeAreaView>
  );
}
