import { useEffect } from 'react';
import { useRouter, useRootNavigationState } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Index() {
  const router = useRouter();
  const navigationState = useRootNavigationState();

  useEffect(() => {
    const checkAuth = async () => {
      if (!navigationState?.key) return;

      const token = await AsyncStorage.getItem('userToken');
      if (token) {
        router.replace('/(drawer)/HomeScreen');
      } else {
        router.replace('/(auth)/Onboarding');
      }
    };

    checkAuth();
  }, [navigationState]);

  return null;
}
