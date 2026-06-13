import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useUser } from '@clerk/expo';
import { Ionicons } from '@expo/vector-icons';
import { useLanguageStore } from '@/store/languageStore';
import { getUnitsByLanguage } from '@/data/units';
import { images } from '@/constants/images';
import { usePostHog } from 'posthog-react-native';

const DAILY_XP = 15;
const DAILY_GOAL = 20;
const STREAK = 12;

const GREETINGS: Record<string, string> = {
  es: 'Hola',
  fr: 'Bonjour',
  de: 'Hallo',
  ja: 'こんにちは',
  pt: 'Olá',
};

const TODAY_PLAN = [
  {
    id: '1',
    icon: 'book-outline' as const,
    title: 'Lesson',
    subtitle: 'At the café',
    completed: true,
    iconColor: '#4D88FF',
    iconBg: '#EEF4FF',
  },
  {
    id: '2',
    icon: 'headset-outline' as const,
    title: 'AI Conversation',
    subtitle: 'Talk about your day',
    completed: false,
    iconColor: '#6C4EF5',
    iconBg: '#F0EDFF',
  },
  {
    id: '3',
    icon: 'chatbubble-ellipses-outline' as const,
    title: 'New words',
    subtitle: '10 words',
    completed: false,
    iconColor: '#FF8A00',
    iconBg: '#FFF4E5',
  },
];

export default function HomeScreen() {
  const { user } = useUser();
  const { selectedLanguage } = useLanguageStore();
  const posthog = usePostHog();

  const units = selectedLanguage ? getUnitsByLanguage(selectedLanguage.code) : [];
  const currentUnit = units[0] ?? null;

  const greeting = selectedLanguage ? (GREETINGS[selectedLanguage.code] ?? 'Hello') : 'Hello';
  const firstName = user?.firstName ?? 'there';
  const progressPct = Math.min((DAILY_XP / DAILY_GOAL) * 100, 100);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }} edges={['top']}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header */}
        <View className="flex-row items-center justify-between px-5 pt-2 pb-4">
          <View className="flex-row items-center gap-2">
            {selectedLanguage ? (
              <Image
                source={{ uri: selectedLanguage.flag }}
                style={{ width: 32, height: 22, borderRadius: 4 }}
              />
            ) : (
              <Text className="text-[28px]">🌍</Text>
            )}
            <Text className="type-h4 text-text-primary">
              {greeting}, {firstName}! 👋
            </Text>
          </View>
          <View className="flex-row items-center gap-3">
            <View className="flex-row items-center gap-1">
              <Image source={images.streakFire} style={{ width: 20, height: 20 }} />
              <Text className="type-h4 text-streak">{STREAK}</Text>
            </View>
            <TouchableOpacity>
              <Ionicons name="notifications-outline" size={24} color="#001132" />
            </TouchableOpacity>
          </View>
        </View>

        <View className="px-5 gap-4">
          {/* Daily Goal Card */}
          <View className="flex-row items-center bg-[#FFF8EE] rounded-2xl p-4 border border-[#FFE8B5]">
            <View className="flex-1">
              <Text className="type-caption text-text-secondary mb-1">Daily goal</Text>
              <View className="flex-row items-baseline mb-2.5">
                <Text className="font-poppins-bold text-[26px] text-text-primary">{DAILY_XP}</Text>
                <Text className="font-poppins text-body-lg text-text-secondary"> / {DAILY_GOAL} XP</Text>
              </View>
              <View className="h-2 bg-[#FFE4B5] rounded overflow-hidden">
                <View
                  className="h-2 bg-streak rounded"
                  style={{ width: `${progressPct}%` as any }}
                />
              </View>
            </View>
            <Image
              source={images.treasure}
              style={{ width: 72, height: 72, marginLeft: 12 }}
              resizeMode="contain"
            />
          </View>

          {/* Continue Learning Banner */}
          {selectedLanguage && currentUnit && (
            <View className="flex-row items-center bg-lingua-purple rounded-2xl p-5 min-h-[148px] overflow-hidden">
              <View className="flex-1 pr-[110px]">
                <Text className="font-poppins text-xs text-white/75 mb-0.5">Continue learning</Text>
                <Text className="type-h2 text-white mb-0.5">{selectedLanguage.name}</Text>
                <Text className="type-body-sm text-white/80 mb-4">A1 · Unit {currentUnit.order}</Text>
                <TouchableOpacity
                  className="bg-white rounded-xl py-[9px] px-[22px] self-start"
                  activeOpacity={0.85}
                  onPress={() => posthog.capture('continue_learning_tapped', {
                    language_code: selectedLanguage?.code,
                    unit_order: currentUnit?.order,
                  })}
                >
                  <Text className="font-poppins-semibold text-body-md text-lingua-purple">Continue</Text>
                </TouchableOpacity>
              </View>
              <Image source={images.palace} style={styles.palaceImg} resizeMode="contain" />
            </View>
          )}

          {/* Today's plan */}
          <View>
            <View className="flex-row items-center justify-between mb-3">
              <Text className="type-h4 text-text-primary">Today's plan</Text>
              <TouchableOpacity>
                <Text className="font-poppins-semibold text-body-md text-lingua-purple">View all</Text>
              </TouchableOpacity>
            </View>

            <View className="bg-white rounded-2xl border border-border-ui overflow-hidden">
              {TODAY_PLAN.map((item, index) => (
                <View
                  key={item.id}
                  className={`flex-row items-center px-4 py-[14px]${
                    index < TODAY_PLAN.length - 1 ? ' border-b border-border-ui' : ''
                  }`}
                >
                  <View
                    className="w-[42px] h-[42px] rounded-xl items-center justify-center"
                    style={{ backgroundColor: item.iconBg }}
                  >
                    <Ionicons name={item.icon} size={20} color={item.iconColor} />
                  </View>
                  <View className="flex-1 ml-3">
                    <Text className="font-poppins-medium text-body-md text-text-primary">{item.title}</Text>
                    <Text className="font-poppins text-[12px] text-text-secondary mt-[1px]">{item.subtitle}</Text>
                  </View>
                  {item.completed ? (
                    <View className="w-[26px] h-[26px] rounded-full bg-success items-center justify-center">
                      <Ionicons name="checkmark" size={14} color="#fff" />
                    </View>
                  ) : (
                    <View className="w-[26px] h-[26px] rounded-full border-2 border-border-ui" />
                  )}
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: 32,
  },
  palaceImg: {
    width: 120,
    height: 138,
    position: 'absolute',
    right: -4,
    bottom: 0,
  },
});
