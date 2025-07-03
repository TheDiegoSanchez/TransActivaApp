// app/(drawer)/PaymentPendingScreen.tsx

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ActivityIndicator, Image } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';

const Colors = {
  primaryBlue: '#1A435E',
  lightGrayText: '#A9A9A9',
  white: '#FFFFFF',
  black: '#000000',
};

const PaymentPendingScreen: React.FC = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  const { orderId } = params as { orderId: string }; // Recibir el ID del pedido

  const [paymentReceived, setPaymentReceived] = useState(false);

  useEffect(() => {
    // Simulación de la espera del pago
    // En una aplicación real, aquí harías una petición a tu backend
    // para verificar si el pago ha sido recibido. Esto podría ser:
    // 1. Un polling (peticiones repetidas cada X segundos).
    // 2. Una conexión WebSocket para recibir una notificación en tiempo real.
    console.log(`Esperando pago para el Order ID: ${orderId}`);

    const checkPaymentStatus = setInterval(() => {
      // Lógica de verificación del pago (simulada)
      const isPaid = Math.random() > 0.7; // 30% de probabilidad de que se pague en cada intento
      if (isPaid) {
        setPaymentReceived(true);
        clearInterval(checkPaymentStatus); // Detener el intervalo
        console.log(`¡Pago recibido para el Order ID: ${orderId}!`);
        // Redirigir a la vista de boleta después de un breve retardo
        setTimeout(() => {
          router.replace({
            pathname: '/(drawer)/InvoiceScreen',
            params: { orderId: orderId, status: 'Pagado' }, // Pasar datos a la boleta
          });
        }, 1000); // Pequeño retraso para que se vea el cambio de estado
      } else {
        console.log(`Pago aún pendiente para el Order ID: ${orderId}...`);
      }
    }, 3000); // Simular verificación cada 3 segundos

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(checkPaymentStatus);
  }, [orderId, router]); // Dependencias: orderId y router

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header simple, si lo quieres. No está en la imagen de referencia */}

        <View style={styles.content}>
          <ActivityIndicator size="large" color={Colors.primaryBlue} />
          <Text style={styles.message}>
            Espera que el comprador realice{'\n'}el pago correspondiente
          </Text>
          {/* Opcional: mostrar un mensaje de "procesando" */}
          {/* {!paymentReceived && <Text style={styles.loadingText}>Procesando pago...</Text>} */}
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
    backgroundColor: Colors.white,
    justifyContent: 'flex-start', // Alinea el header arriba
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    backgroundColor: Colors.white,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginRight: 8,
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.black,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  message: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.primaryBlue,
    textAlign: 'center',
    marginTop: 30,
    lineHeight: 30,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: Colors.lightGrayText,
  },
});

export default PaymentPendingScreen;