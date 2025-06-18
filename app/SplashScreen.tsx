import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const SplashScreen = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/Onboarding'); // Luego haremos esa pantalla
    }, 2000); // 2 segundos

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/logopng.png')} // usa tu logo aquí
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.text}>¡DESDE ALMACÉN A DESTINO LO HACEMOS POSIBLE!</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: '#0057A8',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
