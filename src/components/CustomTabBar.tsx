import { Ionicons } from '@expo/vector-icons';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useEffect } from 'react';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const TAB_COUNT = 5;
const TAB_WIDTH = SCREEN_WIDTH / TAB_COUNT;
const CIRCLE_SIZE = 48;
const TAB_BAR_HEIGHT = 72;

type TabConfig = {
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  activeIcon: keyof typeof Ionicons.glyphMap;
};

const TABS: TabConfig[] = [
  { label: 'Home', icon: 'home-outline', activeIcon: 'home' },
  { label: 'Learn', icon: 'book-outline', activeIcon: 'book' },
  { label: 'AI Teacher', icon: 'hardware-chip-outline', activeIcon: 'hardware-chip' },
  { label: 'Chat', icon: 'chatbubble-outline', activeIcon: 'chatbubble' },
  { label: 'Profile', icon: 'person-outline', activeIcon: 'person' },
];

export function CustomTabBar({ state, navigation }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();
  const circleX = useSharedValue(TAB_WIDTH / 2 - CIRCLE_SIZE / 2);

  useEffect(() => {
    const targetX = state.index * TAB_WIDTH + TAB_WIDTH / 2 - CIRCLE_SIZE / 2;
    circleX.value = withTiming(targetX, { duration: 250, easing: Easing.out(Easing.quad) });
  }, [state.index]);

  const animatedCircleStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: circleX.value }],
  }));

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom, height: TAB_BAR_HEIGHT + insets.bottom }]}>
      <Animated.View style={[styles.activeCircle, animatedCircleStyle]} />

      {state.routes.map((route, index) => {
        const tab = TABS[index];
        const isActive = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isActive && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            style={styles.tabItem}
            onPress={onPress}
            activeOpacity={0.75}
          >
            <View style={styles.iconWrapper}>
              <Ionicons
                name={isActive ? tab.activeIcon : tab.icon}
                size={22}
                color={isActive ? '#FFFFFF' : '#9CA3AF'}
              />
            </View>
            <Text style={[styles.label, { opacity: isActive ? 0 : 1 }]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    height: TAB_BAR_HEIGHT,
    alignItems: 'flex-start',
    paddingTop: 6,
    position: 'relative',
  },
  activeCircle: {
    position: 'absolute',
    top: 6,
    left: 0,
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    backgroundColor: '#6C4EF5',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
  },
  iconWrapper: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontFamily: 'Poppins-Regular',
    fontSize: 11,
    color: '#9CA3AF',
    marginTop: 1,
  },
});
