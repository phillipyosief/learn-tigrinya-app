import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import IntroScreen from './IntroScreen';
import AuthScreen from './AuthScreen';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {showIntro ? (
        <IntroScreen onFinish={() => setShowIntro(false)} />
      ) : (
        <AuthScreen />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
