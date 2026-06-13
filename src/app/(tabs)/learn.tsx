import { useMemo } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
  useWindowDimensions,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useLanguageStore } from '@/store/languageStore';
import { useLessonProgressStore } from '@/store/lessonProgressStore';
import { getUnitsByLanguage } from '@/data/units';
import { getLessonsByUnit } from '@/data/lessons';
import type { Lesson, Unit } from '@/types/learning';

const NODE_SIZE = 72;
const VERTICAL_SPACING = 118;
// Fractional positions of each node center along usable width (0 = left, 1 = right)
const WAVE: number[] = [0.5, 0.72, 0.5, 0.28];

type LessonStatus = 'completed' | 'active' | 'available';

function iconForLesson(title: string): keyof typeof Ionicons.glyphMap {
  const t = title.toLowerCase();
  if (t.includes('greeting') || t.includes('hallo') || t.includes('bonjour') || t.includes('hola') || t.includes('こんにちは') || t.includes('olá')) return 'hand-left-outline';
  if (t.includes('intro') || t.includes('はじめ')) return 'person-outline';
  if (t.includes('number') || t.includes('zahlen') || t.includes('zahl') || t.includes('número') || t.includes('numéro') || t.includes('数字') || t.includes('1–10') || t.includes('1-10')) return 'calculator-outline';
  if (t.includes('color') || t.includes('colour') || t.includes('farbe') || t.includes('couleur') || t.includes('cor') || t.includes('色') || t.includes('cores') || t.includes('farb')) return 'color-palette-outline';
  if (t.includes('family') || t.includes('familie') || t.includes('famille') || t.includes('família')) return 'people-outline';
  if (t.includes('day') || t.includes('wochentag') || t.includes('semana') || t.includes('曜日') || t.includes('dias')) return 'calendar-outline';
  if (t.includes('describ') || t.includes('adjective') || t.includes('people')) return 'glasses-outline';
  return 'star-outline';
}

// ─── Lesson Node ─────────────────────────────────────────────────────────────

interface LessonNodeProps {
  lesson: Lesson;
  status: LessonStatus;
  unitColor: string;
  left: number;
  top: number;
  onPress: () => void;
}

function LessonNode({ lesson, status, unitColor, left, top, onPress }: LessonNodeProps) {
  const bg =
    status === 'completed' ? '#21C16B' : status === 'active' ? unitColor : '#FFFFFF';
  const borderColor =
    status === 'completed' ? '#1AA85C' : status === 'active' ? unitColor : '#E5E7EB';
  const iconColor =
    status === 'completed' || status === 'active' ? '#FFFFFF' : unitColor;

  return (
    <View style={[styles.nodeContainer, { left, top }]}>
      {status === 'active' && (
        <View style={[styles.startBadge, { backgroundColor: unitColor }]}>
          <Text style={styles.startText}>START</Text>
        </View>
      )}

      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
        style={[
          styles.nodeCircle,
          { backgroundColor: bg, borderColor, shadowColor: status === 'active' ? unitColor : '#00000020' },
        ]}
      >
        {status === 'completed' ? (
          <Ionicons name="checkmark" size={30} color="#fff" />
        ) : (
          <Ionicons name={iconForLesson(lesson.title)} size={26} color={iconColor} />
        )}
      </TouchableOpacity>

      <Text numberOfLines={2} style={[styles.nodeLabel, { color: status === 'available' ? '#9CA3AF' : '#001132' }]}>
        {lesson.title}
      </Text>
    </View>
  );
}

// ─── Unit Section ─────────────────────────────────────────────────────────────

interface UnitSectionProps {
  unit: Unit;
  activeId: string | null;
  completedLessons: string[];
  screenWidth: number;
  onLessonPress: (lesson: Lesson) => void;
}

function UnitSection({ unit, activeId, completedLessons, screenWidth, onLessonPress }: UnitSectionProps) {
  const lessons = getLessonsByUnit(unit.id);
  const completedCount = lessons.filter((l) => completedLessons.includes(l.id)).length;
  const progress = lessons.length > 0 ? completedCount / lessons.length : 0;

  // The path container spans full screen width; nodes are placed with 16px padding each side.
  const usable = screenWidth - 32;
  const CONTAINER_W = NODE_SIZE + 32; // 104px — wide enough for the label
  const containerHeight =
    lessons.length > 0 ? (lessons.length - 1) * VERTICAL_SPACING + NODE_SIZE + 52 : 0;

  return (
    <View style={styles.unitSection}>
      {/* Unit banner */}
      <View style={[styles.unitBanner, { backgroundColor: unit.color }]}>
        <View style={styles.unitBannerRow}>
          <View style={styles.unitBannerText}>
            <Text style={styles.unitLabel}>UNIT {unit.order}</Text>
            <Text style={styles.unitTitle}>{unit.title}</Text>
            <Text style={styles.unitDesc} numberOfLines={2}>
              {unit.description}
            </Text>
          </View>
          <View style={[styles.unitBadge, { borderColor: 'rgba(255,255,255,0.4)' }]}>
            <Text style={styles.unitBadgeText}>
              {completedCount}/{lessons.length}
            </Text>
          </View>
        </View>

        {/* Progress bar */}
        <View style={styles.progressTrack}>
          <View style={[styles.progressFill, { width: `${progress * 100}%` as any }]} />
        </View>
      </View>

      {/* Lesson path */}
      <View style={[styles.pathContainer, { height: containerHeight }]}>
        {lessons.map((lesson, index) => {
          const fraction = WAVE[index % WAVE.length];
          // Center of the node within the padded area [16 .. screenWidth-16]
          const centerX = 16 + fraction * usable;
          // Container left so that its center aligns with centerX
          const nodeLeft = Math.max(0, Math.min(centerX - CONTAINER_W / 2, screenWidth - CONTAINER_W));
          const nodeTop = index * VERTICAL_SPACING;

          const status: LessonStatus = completedLessons.includes(lesson.id)
            ? 'completed'
            : activeId === lesson.id
            ? 'active'
            : 'available';

          return (
            <LessonNode
              key={lesson.id}
              lesson={lesson}
              status={status}
              unitColor={unit.color}
              left={nodeLeft}
              top={nodeTop}
              onPress={() => onLessonPress(lesson)}
            />
          );
        })}
      </View>
    </View>
  );
}

// ─── Main Screen ──────────────────────────────────────────────────────────────

export default function LearnScreen() {
  const { selectedLanguage } = useLanguageStore();
  const { completedLessons } = useLessonProgressStore();
  const { width: screenWidth } = useWindowDimensions();

  const units = useMemo(
    () => (selectedLanguage ? getUnitsByLanguage(selectedLanguage.code) : []),
    [selectedLanguage]
  );

  const activeId = useMemo(() => {
    for (const unit of units) {
      const first = getLessonsByUnit(unit.id).find((l) => !completedLessons.includes(l.id));
      if (first) return first.id;
    }
    return null;
  }, [units, completedLessons]);

  const { totalLessons, totalCompleted } = useMemo(() => {
    let total = 0;
    let done = 0;
    for (const unit of units) {
      const ls = getLessonsByUnit(unit.id);
      total += ls.length;
      done += ls.filter((l) => completedLessons.includes(l.id)).length;
    }
    return { totalLessons: total, totalCompleted: done };
  }, [units, completedLessons]);

  function handleLessonPress(lesson: Lesson) {
    Alert.alert(lesson.title, `${lesson.description}\n\n🎯 Goal: ${lesson.goal}\n\n⭐ ${lesson.xpReward} XP`, [
      { text: 'Start Lesson', style: 'default' },
      { text: 'Cancel', style: 'cancel' },
    ]);
  }

  if (!selectedLanguage) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }} edges={['top']}>
        <View style={styles.emptyState}>
          <Ionicons name="globe-outline" size={64} color="#E5E7EB" />
          <Text style={styles.emptyTitle}>No language selected</Text>
          <Text style={styles.emptySubtitle}>
            Go to the home tab and select a language to start your learning journey.
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  const progressPct = totalLessons > 0 ? Math.round((totalCompleted / totalLessons) * 100) : 0;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }} edges={['top']}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image
            source={{ uri: selectedLanguage.flag }}
            style={styles.flagImage}
          />
          <View>
            <Text style={styles.headerTitle}>{selectedLanguage.name}</Text>
            <Text style={styles.headerSub}>
              {totalCompleted} of {totalLessons} lessons complete
            </Text>
          </View>
        </View>
        <View style={styles.xpBadge}>
          <Ionicons name="star" size={14} color="#FFCB00" />
          <Text style={styles.xpText}>{progressPct}%</Text>
        </View>
      </View>

      {/* Overall progress bar */}
      <View style={styles.overallProgressTrack}>
        <View style={[styles.overallProgressFill, { width: `${progressPct}%` as any }]} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        {units.map((unit) => (
          <UnitSection
            key={unit.id}
            unit={unit}
            activeId={activeId}
            completedLessons={completedLessons}
            screenWidth={screenWidth}
            onLessonPress={handleLessonPress}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 10,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  flagImage: {
    width: 36,
    height: 24,
    borderRadius: 4,
  },
  headerTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#001132',
    lineHeight: 24,
  },
  headerSub: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#6B7280',
    lineHeight: 16,
  },
  xpBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#F6F7FB',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  xpText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: '#001132',
  },
  overallProgressTrack: {
    height: 3,
    backgroundColor: '#F0F0F0',
    marginHorizontal: 20,
    borderRadius: 2,
    marginBottom: 8,
    overflow: 'hidden',
  },
  overallProgressFill: {
    height: 3,
    backgroundColor: '#6C4EF5',
    borderRadius: 2,
  },
  scroll: {
    paddingBottom: 48,
  },

  // Unit section
  unitSection: {
    marginBottom: 32,
  },
  unitBanner: {
    marginHorizontal: 16,
    borderRadius: 20,
    padding: 20,
    marginBottom: 8,
  },
  unitBannerRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  unitBannerText: {
    flex: 1,
    paddingRight: 12,
  },
  unitLabel: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 10,
    color: 'rgba(255,255,255,0.75)',
    letterSpacing: 1.8,
    marginBottom: 4,
  },
  unitTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 22,
    color: '#FFFFFF',
    lineHeight: 28,
  },
  unitDesc: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    color: 'rgba(255,255,255,0.8)',
    marginTop: 4,
    lineHeight: 19,
  },
  unitBadge: {
    borderWidth: 1.5,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 5,
    alignSelf: 'flex-start',
  },
  unitBadgeText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 13,
    color: '#FFFFFF',
  },
  progressTrack: {
    height: 5,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 3,
    marginTop: 14,
    overflow: 'hidden',
  },
  progressFill: {
    height: 5,
    backgroundColor: '#FFFFFF',
    borderRadius: 3,
  },

  // Path
  pathContainer: {
    position: 'relative',
    marginTop: 12,
  },

  // Node
  nodeContainer: {
    position: 'absolute',
    alignItems: 'center',
    width: NODE_SIZE + 32,
  },
  nodeCircle: {
    width: NODE_SIZE,
    height: NODE_SIZE,
    borderRadius: NODE_SIZE / 2,
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.18,
    shadowRadius: 8,
    elevation: 5,
  },
  startBadge: {
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 4,
    marginBottom: 6,
  },
  startText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 11,
    color: '#FFFFFF',
    letterSpacing: 1.2,
  },
  nodeLabel: {
    fontFamily: 'Poppins-Medium',
    fontSize: 11,
    textAlign: 'center',
    marginTop: 7,
    width: NODE_SIZE + 20,
    lineHeight: 15,
  },

  // Empty state
  emptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  emptyTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: '#001132',
    marginTop: 16,
    textAlign: 'center',
  },
  emptySubtitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#6B7280',
    marginTop: 8,
    textAlign: 'center',
    lineHeight: 22,
  },
});
