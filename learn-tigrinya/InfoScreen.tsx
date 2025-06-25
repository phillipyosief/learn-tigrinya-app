import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

interface InfoScreenProps {
  onContinue: () => void;
}

export default function InfoScreen({ onContinue }: InfoScreenProps) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>About Tigrinya & Ge'ez</Text>
      <Text style={styles.paragraph}>
        Tigrinya is a Semitic language spoken by millions in Eritrea and northern Ethiopia. It is written using the ancient Ge'ez script, an abugida where each symbol represents a consonant-vowel combination.
      </Text>
      <Text style={styles.paragraph}>
        The Ge'ez script dates back nearly two thousand years and remains in liturgical use by the Ethiopian and Eritrean Orthodox churches. Tigrinya evolved from Ge'ez and retains many of its grammatical features.
      </Text>
      <Text style={styles.paragraph}>
        Today, Tigrinya is known for its rich verb morphology and variety of dialects across the region. Learning the Ge'ez alphabet is the first step toward appreciating this beautiful language.
      </Text>
      <TouchableOpacity style={styles.button} onPress={onContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 15,
  },
  button: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#007aff',
    borderRadius: 5,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
