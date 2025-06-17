// app/index.tsx
import { useEffect } from 'react';
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    // Redirigir directamente al login al iniciar
    router.replace('/(auth)/Login');
  }, []);

  return null; // no muestra nada, solo redirige
}
