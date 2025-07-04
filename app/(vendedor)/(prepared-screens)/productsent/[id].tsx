import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useNavigation } from '@react-navigation/native';
const Colors = {
  primaryBlue: '#1A435E',
  lightGrayText: '#A9A9A9',
  white: '#FFFFFF',
  black: '#000000',
  darkGray: '#333333',
  lightBackground: '#F9F9F9',
  buttonPrimary: '#1A435E',
};
const ProductSentScreen: React.FC = () => {
  const router = useRouter();
  const navigation = useNavigation();
  const params = useLocalSearchParams();

  const orderId = params.orderId || 'N/A';
  const companyName = params.companyName || 'No especificada';
  const trackingNumber = params.trackingNumber || 'No disponible';

  const handleVolverInicio = () => {
    router.push('/(drawer-vendedor)/VentaScreen');
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Producto Enviado</Text>
          <TouchableOpacity style={styles.volverInicioButton} onPress={handleVolverInicio}>
            <Text style={styles.buttonText}>Volver al inicio</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.lightBackground,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.primaryBlue,
    marginBottom: 20,
    textAlign: 'center',
  },
  volverInicioButton: {
    backgroundColor: Colors.buttonPrimary,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    width: '80%',
  },
  buttonText: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
export default ProductSentScreen;
