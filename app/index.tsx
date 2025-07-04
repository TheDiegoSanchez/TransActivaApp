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
      const userTypeId = await AsyncStorage.getItem('userTypeId');

      if (!token) {
        router.replace('/(auth)/Onboarding');
        return;
      }

      if (userTypeId === "2") {
        router.replace('/(drawer-vendedor)/VentaScreen');
      } else if (userTypeId === "3") {
        router.replace('/(drawer-comprador)/Principal');
      } else {
        router.replace('/(auth)/Onboarding');
      }
    };

    checkAuth();
  }, [navigationState]);
  return null;
}
