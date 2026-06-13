import { useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { languages } from '@/data/languages';
import { images } from '@/constants/images';
import { useLanguageStore } from '@/store/languageStore';
import { usePostHog } from 'posthog-react-native';

export default function LanguageSelection() {
  const [search, setSearch] = useState('');
  const { selectedLanguage, setSelectedLanguage } = useLanguageStore();
  const [selected, setSelected] = useState<string | null>(selectedLanguage?.code ?? null);
  const posthog = usePostHog();

  const filtered = languages.filter((lang) =>
    lang.name.toLowerCase().includes(search.toLowerCase())
  );

  function handleConfirm() {
    const lang = languages.find((l) => l.code === selected);
    if (!lang) return;
    setSelectedLanguage(lang);
    posthog.capture('language_selected', {
      language_code: lang.code,
      language_name: lang.name,
    });
    router.replace('/');
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View className="flex-row items-center px-4 py-3">
        <TouchableOpacity onPress={() => router.back()} activeOpacity={0.7}>
          <Ionicons name="chevron-back" size={24} color="#001132" />
        </TouchableOpacity>
        <Text className="type-h3 text-text-primary flex-1 text-center mr-6">
          Choose a language
        </Text>
      </View>

      {/* Search bar */}
      <View className="px-4 mb-5">
        <View className="flex-row items-center bg-surface rounded-2xl px-4 h-12 gap-3">
          <Ionicons name="search-outline" size={18} color="#6B7280" />
          <TextInput
            placeholder="Search languages"
            placeholderTextColor="#6B7280"
            value={search}
            onChangeText={setSearch}
            style={styles.searchInput}
          />
        </View>
      </View>

      {/* Scrollable language list */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Text className="type-h4 text-text-primary px-4 mb-3">Popular</Text>

        <View className="px-4">
          {filtered.map((lang) => {
            const isSelected = selected === lang.code;
            return (
              <TouchableOpacity
                key={lang.code}
                onPress={() => setSelected(lang.code)}
                className={`flex-row items-center rounded-2xl border-[1.5px] p-3.5 mb-2 ${
                  isSelected
                    ? 'bg-[#F5F2FF] border-lingua-purple'
                    : 'bg-white border-border-ui'
                }`}
                activeOpacity={0.7}
              >
                <Image
                  source={{ uri: lang.flag }}
                  className="w-11 h-11 rounded-full"
                  resizeMode="cover"
                />
                <View className="flex-1 ml-3">
                  <Text className="type-h4 text-text-primary">{lang.name}</Text>
                  <Text className="type-body-sm text-text-secondary">
                    {lang.learnerCount ? `${lang.learnerCount} learners` : lang.nativeName}
                  </Text>
                </View>
                {isSelected ? (
                  <View className="w-7 h-7 rounded-full bg-lingua-blue items-center justify-center">
                    <Ionicons name="checkmark" size={16} color="#fff" />
                  </View>
                ) : (
                  <Ionicons name="chevron-forward" size={18} color="#6B7280" />
                )}
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Confirm button — replaces "See all languages" */}
        <View className="px-4 mt-1">
          <TouchableOpacity
            className={`flex-row items-center justify-center rounded-2xl border-[1.5px] py-3.5 gap-3 ${
              selected
                ? 'bg-lingua-purple border-lingua-purple'
                : 'bg-white border-border-ui'
            }`}
            disabled={!selected}
            onPress={handleConfirm}
            activeOpacity={0.85}
          >
            <Ionicons
              name="earth-outline"
              size={22}
              color={selected ? '#fff' : '#6B7280'}
            />
            <Text className={`type-h4 ${selected ? 'text-white' : 'text-text-secondary'}`}>
              {selected ? 'Confirm' : 'See all languages'}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Earth illustration — fixed decorative banner at the bottom */}
      <Image
        source={images.earth}
        className="w-full h-42.5"
        resizeMode="cover"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  searchInput: {
    flex: 1,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#001132',
    paddingVertical: 0,
  },
  scrollContent: {
    paddingBottom: 16,
  },
});
