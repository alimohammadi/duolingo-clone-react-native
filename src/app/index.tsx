import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Stack, useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Stack.Screen options={{ headerShown: false }} />
      <Text className="type-h2 text-text-primary mb-8">Welcome to Muolingo</Text>
      <TouchableOpacity style={styles.button} onPress={() => router.push('/onboarding')}>
        <Text style={styles.buttonText}>View Onboarding</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#6C4EF5',
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 16,
  },
  buttonText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#FFFFFF',
  },
});
