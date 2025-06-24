import React, { useEffect, useRef } from 'react';
import { SafeAreaView, Text, StyleSheet, Animated, Easing } from 'react-native';

interface IntroScreenProps {
  onFinish: () => void;
}

export default function IntroScreen({ onFinish }: IntroScreenProps) {
  const slide = useRef(new Animated.Value(30)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(slide, {
          toValue: 0,
          duration: 800,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
      ]),
      Animated.delay(2200),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start(onFinish);
  }, [onFinish, opacity, slide]);

  return (
    <SafeAreaView style={styles.container}>
      <Animated.Text style={[styles.title, { opacity, transform: [{ translateY: slide }] }]}>
        እንቋዕ ብደሓን መጻእኩም!
      </Animated.Text>
      <Animated.Text style={[styles.subtitle, { opacity, transform: [{ translateY: slide }] }]}>
        Discover the beauty of the Tigrinya language
      </Animated.Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    marginTop: 12,
    textAlign: 'center',
    color: '#555',
  },
});
