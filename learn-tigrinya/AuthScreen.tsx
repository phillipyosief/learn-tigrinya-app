import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';

export default function AuthScreen() {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.container}
      >
        <Text style={styles.title}>{isRegister ? 'Create Account' : 'Sign In'}</Text>
        <TextInput
          placeholder="Email"
          style={styles.input}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <TextInput placeholder="Password" secureTextEntry style={styles.input} />
        {isRegister && (
          <TextInput
            placeholder="Confirm Password"
            secureTextEntry
            style={styles.input}
          />
        )}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>{isRegister ? 'Register' : 'Login'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsRegister(!isRegister)}>
          <Text style={styles.link}>
            {isRegister ? 'Have an account? Sign in' : 'No account? Register'}
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#ccc',
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 12,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
  },
  button: {
    backgroundColor: '#007aff',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 4,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  link: {
    marginTop: 16,
    textAlign: 'center',
    color: '#007aff',
  },
});
