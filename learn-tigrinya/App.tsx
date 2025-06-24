import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import IntroScreen from './IntroScreen';
import AuthScreen from './AuthScreen';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      {showIntro ? (
        <IntroScreen onFinish={() => setShowIntro(false)} />
      ) : (
        <AuthScreen />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
