import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

const ALPHABET_LINES = [
  'ሀሁሂሃሄህሆ',
  'ለሉሊላሌልሎ',
  'ሐሑሒሓሔሕሖ',
  'መሙሚማሜምሞ',
  'ሠሡሢሣሤሥሦ',
  'ረሩሪራሬርሮ',
  'ሰሱሲሳሴስሶ',
  'ሸሹሺሻሼሽሾ',
  'ቀቁቂቃቄቅቆ',
  'በቡቢባቤብቦ',
  'ተቱቲታቴትቶ',
  'ቸቹቺቻቼችቾ',
  'ኀኁኂኃኄኅኆ',
  'ነኑኒናኔንኖ',
  'ኘኙኚኛኜኝኞ',
  'አኡኢኣኤእኦ',
  'ከኩኪካኬክኮ',
  'ኸኹኺኻኼኽኾ',
  'ወዉዊዋዌውዎ',
  'ዐዑዒዓዔዕዖ',
  'ዘዙዚዛዜዝዞ',
  'ዠዡዢዣዤዥዦ',
  'የዩዪያዬይዮ',
  'ደዱዲዳዴድዶ',
  'ጀጁጂጃጄጅጆ',
  'ገጉጊጋጌግጎ',
  'ጠጡጢጣጤጥጦ',
  'ጨጩጪጫጬጭጮ',
  'ጰጱጲጳጴጵጶ',
  'ጸጹጺጻጼጽጾ',
  'ፀፁፂፃፄፅፆ',
  'ፈፉፊፋፌፍፎ',
  'ፐፑፒፓፔፕፖ',
];

interface IntroScreenProps {
  onFinish: () => void;
}

export default function IntroScreen({ onFinish }: IntroScreenProps) {
  const anim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(anim, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }),
      Animated.delay(1500),
      Animated.timing(anim, {
        toValue: 2,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start(onFinish);
  }, [onFinish, anim]);

  const rotateX = anim.interpolate({
    inputRange: [0, 1, 2],
    outputRange: ['-70deg', '0deg', '70deg'],
  });
  const containerOpacity = anim.interpolate({
    inputRange: [0, 0.2, 1.8, 2],
    outputRange: [0, 1, 1, 0],
  });

  return (

    <Animated.View
      style={[
        styles.container,
        { opacity: containerOpacity, transform: [{ perspective: 1000 }, { rotateX }] },
      ]}
    >
    <View style={styles.container}>
      <View style={styles.alphabetWrapper} pointerEvents="none">
        {ALPHABET_LINES.map((line, idx) => (
          <Text
            key={idx}
            style={[
              styles.alphabetText,
              { opacity: 0.5 - (idx / (ALPHABET_LINES.length - 1)) * 0.4 },
            ]}
          >
            {line}
          </Text>
        ))}
      </View>

      <Text style={styles.title}>እንቋዕ ብደሓን መጻእኩም!</Text>
      <Text style={styles.subtitle}>Discover the beauty of the Tigrinya language</Text>
    </Animated.View>
=======
      <Animated.Text style={[styles.title, { opacity }]}>እንቋዕ ብደሓን መጻእኩም!</Animated.Text>
      <Animated.Text style={[styles.subtitle, { opacity }]}>Discover the beauty of the Tigrinya language</Animated.Text>
    </View>

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
  alphabetWrapper: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',

    justifyContent: 'space-between',
  },
  alphabetText: {
    fontSize: 20,

    justifyContent: 'space-around',
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
