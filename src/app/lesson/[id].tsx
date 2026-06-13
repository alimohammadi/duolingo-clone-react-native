import { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { getLessonById } from '@/data/lessons';
import { images } from '@/constants/images';

export default function LessonScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const lesson = getLessonById(id ?? '');

  const [micOn, setMicOn] = useState(true);
  const [cameraOn, setCameraOn] = useState(false);
  const [subtitlesOn, setSubtitlesOn] = useState(true);

  if (!lesson) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }} edges={['top', 'bottom']}>
        <View className="flex-1 items-center justify-center gap-3">
          <Ionicons name="alert-circle-outline" size={48} color="#E5E7EB" />
          <Text style={styles.errorText}>Lesson not found</Text>
        </View>
      </SafeAreaView>
    );
  }

  const currentPhrase = lesson.phrases[0];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }} edges={['top', 'bottom']}>
      {/* Header */}
      <View className="flex-row items-center justify-between px-4 pt-2 pb-1">
        <TouchableOpacity onPress={() => router.back()} className="w-9 h-9 items-center justify-center">
          <Ionicons name="chevron-back" size={24} color="#001132" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>AI Teacher</Text>
        <View className="flex-row items-center gap-1.5">
          <Ionicons name="videocam-outline" size={20} color="#4B5563" />
          <Text style={styles.participantCount}>12</Text>
          <Ionicons name="notifications-outline" size={20} color="#4B5563" />
        </View>
      </View>

      {/* Online status */}
      <View className="flex-row items-center px-5 pb-3 gap-1.5">
        <View className="w-2 h-2 rounded-full bg-[#21C16B]" />
        <Text style={styles.onlineText}>Online</Text>
      </View>

      {/* Teacher area — mascot + glass controls overlay */}
      <View className="flex-1 mx-4 rounded-3xl overflow-hidden mb-4 items-center justify-center bg-[#EEE9FF]">
        {/* Fox mascot */}
        <Image source={images.mascotWelcome} style={styles.mascot} resizeMode="contain" />

        {/* Subtitle / phrase bubble — floats above glass panel */}
        {subtitlesOn && currentPhrase && (
          <View style={styles.speechBubble} className="absolute left-[14px] right-[14px] bottom-[130px] bg-white rounded-2xl px-3.5 py-3">
            <View className="flex-row items-center gap-2.5">
              <View className="flex-1">
                <Text style={styles.phraseText}>{currentPhrase.phrase}</Text>
                <Text style={styles.translationText}>{currentPhrase.translation}</Text>
              </View>
              <Ionicons name="volume-medium" size={20} color="#6C4EF5" />
            </View>
          </View>
        )}

        {/* Glass controls panel */}
        <View
          style={styles.glassPanel}
          className="absolute bottom-0 left-0 right-0 flex-row justify-evenly items-start pt-[18px] pb-[18px] px-3 rounded-b-3xl"
        >
          {/* Camera */}
          <View className="items-center gap-2">
            <TouchableOpacity
              style={styles.controlBtnShadow}
              className="w-[60px] h-[60px] rounded-full bg-white items-center justify-center"
              onPress={() => setCameraOn((v) => !v)}
            >
              <Ionicons
                name={cameraOn ? 'videocam' : 'videocam-off'}
                size={24}
                color={cameraOn ? '#6C4EF5' : '#1F2937'}
              />
            </TouchableOpacity>
            <Text style={styles.controlLabel}>Camera</Text>
          </View>

          {/* Mic */}
          <View className="items-center gap-2">
            <TouchableOpacity
              style={styles.controlBtnShadow}
              className="w-[60px] h-[60px] rounded-full bg-white items-center justify-center"
              onPress={() => setMicOn((v) => !v)}
            >
              <Ionicons
                name={micOn ? 'mic' : 'mic-off'}
                size={24}
                color={micOn ? '#1F2937' : '#EF4444'}
              />
            </TouchableOpacity>
            <Text style={styles.controlLabel}>Mic</Text>
          </View>

          {/* Subtitles */}
          <View className="items-center gap-2">
            <TouchableOpacity
              style={styles.controlBtnShadow}
              className="w-[60px] h-[60px] rounded-full bg-white items-center justify-center"
              onPress={() => setSubtitlesOn((v) => !v)}
            >
              <Text style={[styles.aaLabel, { color: subtitlesOn ? '#1F2937' : '#9CA3AF' }]}>
                文A
              </Text>
            </TouchableOpacity>
            <Text style={styles.controlLabel}>Subtitles</Text>
          </View>

          {/* End Call */}
          <View className="items-center gap-2">
            <TouchableOpacity style={styles.endCallBtn} onPress={() => router.back()}>
              <Ionicons name="call" size={24} color="#FFFFFF" />
            </TouchableOpacity>
            <Text style={styles.controlLabel}>End Call</Text>
          </View>
        </View>
      </View>

      {/* Lesson feedback metrics */}
      <View style={styles.metricsShadow} className="flex-row items-center mx-4 mb-4 bg-white rounded-[20px] py-4 px-2">
        <View className="flex-1 items-center">
          <Text style={styles.metricLabel}>Speaking</Text>
          <Text style={[styles.metricValue, { color: '#21C16B' }]}>Excellent</Text>
        </View>
        <View className="w-px h-9 bg-gray-200" />
        <View className="flex-1 items-center">
          <Text style={styles.metricLabel}>Pronunciation</Text>
          <Text style={[styles.metricValue, { color: '#3B82F6' }]}>Great</Text>
        </View>
        <View className="w-px h-9 bg-gray-200" />
        <View className="flex-1 items-center">
          <Text style={styles.metricLabel}>Grammar</Text>
          <Text style={[styles.metricValue, { color: '#F59E0B' }]}>Good</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // ── Typography (custom fontFamily not supported via NativeWind) ───────────────
  errorText: { fontFamily: 'Poppins-Regular', fontSize: 16, color: '#9CA3AF' },
  headerTitle: { fontFamily: 'Poppins-SemiBold', fontSize: 17, color: '#001132' },
  participantCount: { fontFamily: 'Poppins-SemiBold', fontSize: 14, color: '#001132' },
  onlineText: { fontFamily: 'Poppins-Regular', fontSize: 13, color: '#21C16B' },
  phraseText: { fontFamily: 'Poppins-SemiBold', fontSize: 15, color: '#001132', lineHeight: 22 },
  translationText: { fontFamily: 'Poppins-Regular', fontSize: 13, color: '#6B7280', lineHeight: 18, marginTop: 1 },
  controlLabel: { fontFamily: 'Poppins-Regular', fontSize: 11, color: 'rgba(30,30,60,0.7)', textAlign: 'center' },
  aaLabel: { fontFamily: 'Poppins-SemiBold', fontSize: 18 },
  metricLabel: { fontFamily: 'Poppins-SemiBold', fontSize: 13, color: '#001132', marginBottom: 4 },
  metricValue: { fontFamily: 'Poppins-SemiBold', fontSize: 13 },

  // ── Mascot (percentage dimensions + offset) ──────────────────────────────────
  mascot: { width: '80%', height: '65%', marginBottom: 120 },

  // ── Speech bubble shadow ─────────────────────────────────────────────────────
  speechBubble: { shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.08, shadowRadius: 8, elevation: 3 },

  // ── Glass panel (rgba bg + hairline border) ──────────────────────────────────
  glassPanel: {
    backgroundColor: 'rgba(255,255,255,0.28)',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: 'rgba(255,255,255,0.7)',
  },

  // ── Control button shadow ────────────────────────────────────────────────────
  controlBtnShadow: { shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.12, shadowRadius: 6, elevation: 3 },

  // ── End call (transform + coloured shadow) ───────────────────────────────────
  endCallBtn: {
    width: 60, height: 60, borderRadius: 30,
    backgroundColor: '#EF4444',
    alignItems: 'center', justifyContent: 'center',
    transform: [{ rotate: '135deg' }],
    shadowColor: '#EF4444', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.35, shadowRadius: 8, elevation: 4,
  },

  // ── Metrics card shadow ──────────────────────────────────────────────────────
  metricsShadow: { shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.06, shadowRadius: 12, elevation: 3 },
});
