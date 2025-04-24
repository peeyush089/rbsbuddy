import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import CustomSplash from './components/CustomSplash';
import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const prepare = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 2000)); // Show splash for 2 seconds
        await SplashScreen.hideAsync();
      } catch (e) {
        console.warn(e);
      } finally {
        setIsLoading(false);
      }
    };

    prepare();
  }, []);

  if (isLoading) {
    return <CustomSplash />;
  }

  return (
    <SafeAreaProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </SafeAreaProvider>
  );
} 