import { useAuth, useClerk, useUser } from "@clerk/expo";
import { Redirect, Stack, router } from "expo-router";
import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLanguageStore } from "@/store/languageStore";

export default function Index() {
  const { isSignedIn, isLoaded } = useAuth();
  const { signOut } = useClerk();
  const { user } = useUser();
  const { selectedLanguage, clearSelectedLanguage } = useLanguageStore();

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

  if (!selectedLanguage) {
    return <Redirect href="/language-selection" />;
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

        {/* Selected language card */}
        <View style={styles.languageCard}>
          <Image
            source={{ uri: selectedLanguage.flag }}
            style={styles.flagImage}
          />
          <View className="flex-1">
            <Text style={styles.languageName}>{selectedLanguage.name}</Text>
            <Text style={styles.languageNative}>{selectedLanguage.nativeName}</Text>
          </View>
          {selectedLanguage.learnerCount && (
            <View style={styles.learnerBadge}>
              <Text style={styles.learnerText}>{selectedLanguage.learnerCount}</Text>
              <Text style={styles.learnerLabel}>learners</Text>
            </View>
          )}
        </View>

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => router.push('/language-selection')}
          activeOpacity={0.85}
        >
          <Text style={styles.primaryButtonText}>Change Language</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.dangerButton}
          onPress={clearSelectedLanguage}
          activeOpacity={0.85}
        >
          <Text style={styles.dangerButtonText}>Clear Storage (Test)</Text>
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
  dangerButton: {
    backgroundColor: "#FEF2F2",
    paddingHorizontal: 40,
    paddingVertical: 16,
    borderRadius: 20,
    alignItems: "center",
    minWidth: 200,
  },
  dangerButtonText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
    color: "#EF4444",
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
  languageCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F2FF",
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: "#6C4EF5",
    paddingHorizontal: 16,
    paddingVertical: 14,
    gap: 12,
    width: "100%",
  },
  flagImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  languageName: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
    color: "#001132",
  },
  languageNative: {
    fontFamily: "Poppins-Regular",
    fontSize: 13,
    color: "#6B7280",
    marginTop: 1,
  },
  learnerBadge: {
    alignItems: "center",
  },
  learnerText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 14,
    color: "#6C4EF5",
  },
  learnerLabel: {
    fontFamily: "Poppins-Regular",
    fontSize: 11,
    color: "#6B7280",
  },
});
