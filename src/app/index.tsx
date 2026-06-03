import { useAuth, useClerk, useUser } from "@clerk/expo";
import { Redirect, Stack, router } from "expo-router";
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const { isSignedIn, isLoaded } = useAuth();
  const { signOut } = useClerk();
  const { user } = useUser();

  if (!isLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" }}>
        <ActivityIndicator size="large" color="#6C4EF5" />
      </View>
    );
  }

  if (!isSignedIn) {
    return <Redirect href="/onboarding" />;
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Screen options={{ headerShown: false }} />

      <View className="flex-1 items-center justify-center px-6 gap-6">
        <Text className="type-h2 text-text-primary text-center">
          Welcome back!
        </Text>
        <Text className="type-body-md text-text-secondary text-center">
          {user?.primaryEmailAddress?.emailAddress}
        </Text>

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => router.push('/language-selection')}
          activeOpacity={0.85}
        >
          <Text style={styles.primaryButtonText}>Choose Language</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => signOut()}
          activeOpacity={0.85}
        >
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  primaryButton: {
    backgroundColor: "#6C4EF5",
    paddingHorizontal: 40,
    paddingVertical: 16,
    borderRadius: 20,
    alignItems: "center",
    minWidth: 200,
  },
  primaryButtonText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
    color: "#FFFFFF",
  },
  logoutButton: {
    backgroundColor: "#F6F7FB",
    paddingHorizontal: 40,
    paddingVertical: 16,
    borderRadius: 20,
    alignItems: "center",
    minWidth: 200,
  },
  logoutText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
    color: "#6B7280",
  },
});
