import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack, useRouter } from 'expo-router';
import { images } from '@/constants/images';

export default function Onboarding() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Screen options={{ headerShown: false }} />

      {/* Header */}
      <View className="flex-row items-center justify-center pt-2 gap-2">
        <Image source={images.mascotLogo} className="w-9 h-9" resizeMode="contain" />
        <Text className="type-h3 text-text-primary">muolingo</Text>
      </View>

      {/* Hero text */}
      <View className="px-6 mt-8">
        <Text className="type-h1 text-text-primary">Your AI language</Text>
        <Text className="type-h1 text-lingua-purple">teacher.</Text>
        <Text className="type-body-md text-text-secondary mt-2">
          Real conversations, personalized{'\n'}lessons, anytime, anywhere.
        </Text>
      </View>

      {/* Mascot + bubbles */}
      <View className="flex-1 items-center justify-center">
        <Image source={images.mascotWelcome} className="w-[280px] h-[280px]" resizeMode="contain" />

        {/* Hello! */}
        <View className="absolute bg-white rounded-[20px] py-2 px-4 left-6 top-[38%]" style={styles.shadow}>
          <Text className="type-body-md text-text-primary">Hello!</Text>
        </View>

        {/* ¡Hola! */}
        <View className="absolute bg-white rounded-[20px] py-2 px-4 right-6 top-[12%]" style={styles.shadow}>
          <Text className="type-body-md text-text-primary">¡Hola!</Text>
        </View>

        {/* 你好! */}
        <View className="absolute bg-white rounded-[20px] py-2 px-4 right-9 bottom-[16%]" style={styles.shadow}>
          <Text className="font-poppins-semibold text-sm text-error">你好!</Text>
        </View>
      </View>

      {/* CTA Button */}
      <View className="px-6 pb-8">
        <TouchableOpacity
          className="bg-lingua-purple rounded-[20px] py-[18px] items-center justify-center relative"
          onPress={() => router.push('/')}
          activeOpacity={0.85}
        >
          <Text className="font-poppins-semibold text-[18px] text-white">Get Started</Text>
          <View className="absolute right-6 items-center justify-center">
            <Ionicons name="chevron-forward" size={28} color="#FFFFFF" />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 3,
  },
});
