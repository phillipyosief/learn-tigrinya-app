import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, Image } from 'react-native';

const STORY_IMAGES = [
  'https://images.unsplash.com/photo-1506819924169-6e03ce37f04e',
  'https://images.unsplash.com/photo-1529781919139-406bcdfe1283',
  'https://images.unsplash.com/photo-1542826829-c2d9c7b62f75',
  'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13',
  'https://images.unsplash.com/photo-1533049022221-0d8f8e05bd33',
];

interface IntroScreenProps {
  onFinish: () => void;
}

export default function IntroScreen({ onFinish }: IntroScreenProps) {
  const [index, setIndex] = useState(0);
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    progress.setValue(0);
    const animation = Animated.timing(progress, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false,
    });
    animation.start(({ finished }) => {
      if (finished) {
        if (index < STORY_IMAGES.length - 1) {
          setIndex(index + 1);
        } else {
          onFinish();
        }
      }
    });
    return () => animation.stop();
  }, [index, onFinish, progress]);

  return (
    <View style={styles.container}>
      <Image source={{ uri: STORY_IMAGES[index] }} style={styles.image} />
      <View style={styles.progressRow} pointerEvents="none">
        {STORY_IMAGES.map((_, i) => {
          let flexStyle;
          if (i < index) {
            flexStyle = { flex: 1 };
          } else if (i === index) {
            flexStyle = { flex: progress };
          } else {
            flexStyle = { flex: 0 };
          }
          return (
            <View key={i} style={styles.progressBackground}>
              <Animated.View style={[styles.progressFill, flexStyle]} />
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  progressRow: {
    position: 'absolute',
    flexDirection: 'row',
    top: 40,
    left: 10,
    right: 10,
  },
  progressBackground: {
    flex: 1,
    height: 4,
    backgroundColor: 'rgba(255,255,255,0.3)',
    marginHorizontal: 2,
  },
  progressFill: {
    height: 4,
    backgroundColor: '#fff',
  },
  alphabetWrapper: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  alphabetText: {
    fontSize: 16,
    color: '#000',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginTop: 20,
    textAlign: 'center',
  },
});
