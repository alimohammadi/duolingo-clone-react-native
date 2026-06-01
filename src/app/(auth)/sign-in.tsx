import VerificationModal from "@/components/VerificationModal";
import { images } from "@/constants/images";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleContinue = () => {
    if (email.trim()) {
      setShowModal(true);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Screen options={{ headerShown: false }} />

      {/* Header */}
      <View className="flex-row items-center px-6 pt-2">
        <TouchableOpacity
          onPress={() => router.back()}
          className="w-10 h-10 items-center justify-center"
          activeOpacity={0.7}
        >
          <Ionicons name="arrow-back" size={22} color="#001132" />
        </TouchableOpacity>
      </View>

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View className="flex-1 px-6">
          {/* Title */}
          <View className="mt-6">
            <Text className="type-h2 text-text-primary text-center">
              Welcome back!
            </Text>
            <Text className="type-body-md text-text-secondary text-center mt-1">
              Sign in to continue your journey
            </Text>
          </View>

          <View>
            {/* Mascot */}
            <View className="items-center mt-4 -mb-11">
              <Image
                source={images.mascotAuth}
                className="w-60 h-60"
                resizeMode="contain"
              />
            </View>

            {/* Email Input */}
            <View className="flex-row items-center gap-2.5 border-[1.5px] border-border-ui rounded-2xl px-4 py-3.5 bg-surface">
              <Ionicons name="mail-outline" size={20} color="#9CA3AF" />
              <TextInput
                style={styles.input}
                placeholder="Enter your email"
                placeholderTextColor="#9CA3AF"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                value={email}
                onChangeText={setEmail}
              />
            </View>
          </View>

          {/* Sign In Button */}
          <TouchableOpacity
            className="bg-lingua-purple rounded-[20px] py-[18px] items-center mt-4"
            onPress={handleContinue}
            activeOpacity={0.85}
          >
            <Text className="font-poppins-semibold text-[16px] text-white">
              Sign In
            </Text>
          </TouchableOpacity>

          {/* Divider */}
          <View className="flex-row items-center mt-6">
            <View className="flex-1 bg-border-ui h-px" />
            <Text className="type-body-sm text-text-secondary mx-4">
              or continue with
            </Text>
            <View className="flex-1 bg-border-ui h-px" />
          </View>

          {/* Social Buttons */}
          <View className="flex-row gap-3 mt-4">
            <TouchableOpacity
              className="flex-1 flex-row items-center justify-center border-[1.5px] border-border-ui rounded-2xl py-[14px] bg-white"
              activeOpacity={0.8}
            >
              <AntDesign name="google" size={20} color="#DB4437" />
              <Text className="type-body-md text-text-primary ml-2">
                Google
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="flex-1 flex-row items-center justify-center border-[1.5px] border-border-ui rounded-2xl py-[14px] bg-white"
              activeOpacity={0.8}
            >
              <Ionicons name="logo-apple" size={22} color="#001132" />
              <Text className="type-body-md text-text-primary ml-2">Apple</Text>
            </TouchableOpacity>
          </View>

          {/* Footer */}
          <View className="flex-row justify-center mt-6">
            <Text className="type-body-sm text-text-secondary">
              New to Muolingo?{" "}
            </Text>
            <TouchableOpacity
              onPress={() => router.replace("/(auth)/sign-up")}
              activeOpacity={0.7}
            >
              <Text className="font-poppins-semibold text-[13px] leading-[21px] text-lingua-purple">
                Create an account
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>

      <VerificationModal
        visible={showModal}
        email={email}
        onClose={() => setShowModal(false)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  input: {
    flex: 1,
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "#001132",
  },
});
