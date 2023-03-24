import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import React, { useState, useEffect,useCallback } from 'react';
import { ActivityIndicator } from 'react-native';

export default function App() {
  const [isSplashReady, setSplashReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setSplashReady(true);
    }, 3000);
  }, []);

  if (!isSplashReady) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
   
  return (
    <SafeAreaProvider style={styles.container} >
      <SafeAreaView >
        <Text style={styles.label}>Hello World</Text>
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 40,
  },
});
