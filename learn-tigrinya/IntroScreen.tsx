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
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.delay(2000),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start(onFinish);
  }, [onFinish, opacity]);

  return (
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
