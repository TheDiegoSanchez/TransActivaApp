// app/(drawer)/OrderDetailScreen.tsx

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams } from 'expo-router';

const Colors = {
  primaryBlue: '#1A435E',
  lightGrayText: '#A9A9A9',
  white: '#FFFFFF',
  black: '#000000',
  accentGreen: '#4CAF50',
  darkGray: '#333333',
  lightBackground: '#F9F9F9',
  inputBorder: '#E0E0E0',
};

const { width, height } = Dimensions.get('window');

const OrderDetailScreen: React.FC = () => {
  const router = useRouter();
  const params = useLocalSearchParams();

  // Desestructurar parámetros de forma segura, con valores por defecto
  const {
    orderId = 'N/A',
    status = 'Desconocido',
    buyerName = 'No especificado',
    productName = 'No especificado',
    quantity = 'No especificado',
    description = 'No hay descripción disponible.',
    deliveryAddress = 'Dirección no disponible.',
    agreedPrice = '0.00',
    requestedDate = 'Fecha no disponible',
    paidDate = 'Fecha no disponible',
    agreedDeliveryDate = 'Fecha no disponible',
  } = params as {
    orderId?: string;
    status?: string;
    buyerName?: string;
    productName?: string;
    quantity?: string;
    description?: string;
    deliveryAddress?: string;
    agreedPrice?: string;
    requestedDate?: string;
    paidDate?: string;
    agreedDeliveryDate?: string;
  };

  const handleGoBack = () => {
    console.log('Volviendo a la pantalla anterior.');
    router.back(); // Vuelve a la pantalla anterior (OrdersScreen, si de ahí vienes)
  };

  const handleAcceptOrder = () => {
    console.log('Botón Aceptar Presionado en OrderDetailScreen. Navegando a PaymentPendingScreen.');
    // *** LA CLAVE ESTÁ AQUÍ: Asegúrate que la ruta sea correcta. ***
    // Pasamos todos los parámetros necesarios a PaymentPendingScreen
    router.push({
      pathname: '/(drawer)/PaymentPendingScreen', // ASEGÚRATE que esta sea la ruta correcta
      params: {
        orderId: orderId,
        status: status,
        buyerName: buyerName,
        productName: productName,
        quantity: quantity,
        description: description,
        deliveryAddress: deliveryAddress,
        agreedPrice: agreedPrice,
        requestedDate: requestedDate,
        agreedDeliveryDate: agreedDeliveryDate,
        // paidDate no se pasa aquí porque aún no está pagado
      },
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header Personalizado */}
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color={Colors.black} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Detalle del Pedido</Text>
          {/* Espacio para centrar el título si lo deseas */}
          <View style={{ width: 24 }} />
        </View>

        <ScrollView contentContainerStyle={styles.detailsContent}>
          <Text style={styles.sectionTitle}>Información General</Text>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>ID del Pedido:</Text>
            <Text style={styles.detailValue}>{orderId}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Estado:</Text>
            <Text style={styles.detailValue}>{status}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Fecha solicitada:</Text>
            <Text style={styles.detailValue}>{requestedDate}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Fecha de entrega acordada:</Text>
            <Text style={styles.detailValue}>{agreedDeliveryDate}</Text>
          </View>
          <View style={styles.divider} />

          <Text style={styles.sectionTitle}>Detalles del Producto</Text>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Producto:</Text>
            <Text style={styles.detailValue}>{productName}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Cantidad:</Text>
            <Text style={styles.detailValue}>{quantity}</Text>
          </View>
          <Text style={styles.detailLabelBlock}>Descripción:</Text>
          <Text style={styles.detailValueBlock}>{description}</Text>
          <View style={styles.divider} />

          <Text style={styles.sectionTitle}>Información del Comprador y Entrega</Text>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Comprador:</Text>
            <Text style={styles.detailValue}>{buyerName}</Text>
          </View>
          <Text style={styles.detailLabelBlock}>Dirección de entrega:</Text>
          <Text style={styles.detailValueBlock}>{deliveryAddress}</Text>
          <View style={styles.divider} />

          <Text style={styles.sectionTitle}>Monto Acordado</Text>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Precio:</Text>
            <Text style={styles.detailValue}>${agreedPrice}</Text>
          </View>
        </ScrollView>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.acceptButton} onPress={handleAcceptOrder}>
            <Text style={styles.acceptButtonText}>Aceptar</Text>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.black,
  },
  detailsContent: {
    padding: 20,
    paddingBottom: 100, // Para dejar espacio al botón flotante
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primaryBlue,
    marginBottom: 15,
    marginTop: 10,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingVertical: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: '#F0F0F0',
  },
  detailLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.darkGray,
    flex: 1,
  },
  detailValue: {
    fontSize: 16,
    color: Colors.black,
    flex: 2,
    textAlign: 'right',
  },
  detailLabelBlock: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.darkGray,
    marginBottom: 5,
    marginTop: 10,
  },
  detailValueBlock: {
    fontSize: 16,
    color: Colors.black,
    lineHeight: 24,
    marginBottom: 10,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    marginVertical: 20,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: Colors.white,
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
    alignItems: 'center',
  },
  acceptButton: {
    backgroundColor: Colors.accentGreen, // Un color verde para el botón de aceptar
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    width: '90%',
    alignItems: 'center',
    shadowColor: '#000', // Sombra para darle profundidad
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  acceptButtonText: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default OrderDetailScreen;