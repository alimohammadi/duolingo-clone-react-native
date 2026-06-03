import { useAuth } from "@clerk/expo";
import { useRouter } from "expo-router";
import * as WebBrowser from "expo-web-browser";
import { useEffect } from "react";
import { ActivityIndicator, Text, View } from "react-native";

WebBrowser.maybeCompleteAuthSession();

export default function SSOCallback() {
  const { isSignedIn, isLoaded } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      router.replace("/");
    }
  }, [isLoaded, isSignedIn]);

  return (
    <View className="flex-1 items-center justify-center bg-white gap-4">
      <ActivityIndicator size="large" color="#6C4EF5" />
      <Text className="type-body-md text-text-secondary">Signing you in…</Text>
    </View>
  );
}
