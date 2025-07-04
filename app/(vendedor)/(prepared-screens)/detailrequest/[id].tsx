// app/(drawer)/PrepareOrderDetailScreen.tsx

import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams } from 'expo-router';

const Colors = {
  primaryBlue: '#1A435E',
  lightGrayText: '#A9A9A9',
  white: '#FFFFFF',
  black: '#000000',
  darkGray: '#333333',
  lightBackground: '#F9F9F9',
};

const PrepareOrderDetailScreen: React.FC = () => {
  const router = useRouter();
  const params = useLocalSearchParams();

  // Recibiendo todos los parámetros pasados desde ListPrepareScreen
  const {
    orderId = 'N/A',
    buyerName = 'No especificado',
    productName = 'No especificado',
    quantity = 'No especificado',
    description = 'No hay descripción disponible.',
    deliveryAddress = 'Dirección no disponible.',
    requestedDate = 'Fecha no disponible',
    agreedDeliveryDate = 'Fecha no disponible',
  } = params as {
    orderId?: string;
    buyerName?: string;
    productName?: string;
    quantity?: string;
    description?: string;
    deliveryAddress?: string;
    requestedDate?: string;
    agreedDeliveryDate?: string;
  };

  const handleGoBack = () => {
    router.back();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color={Colors.black} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Detalle de Preparación</Text>
          <View style={{ width: 24 }} />
        </View>

        <ScrollView contentContainerStyle={styles.detailsContent}>
          <Text style={styles.sectionTitle}>Información de la Orden</Text>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>ID de Orden:</Text>
            <Text style={styles.detailValue}>{orderId}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Comprador:</Text>
            <Text style={styles.detailValue}>{buyerName}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Producto:</Text>
            <Text style={styles.detailValue}>{productName}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Cantidad:</Text>
            <Text style={styles.detailValue}>{quantity}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Fecha Solicitada:</Text>
            <Text style={styles.detailValue}>{requestedDate}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Fecha de Entrega Acordada:</Text>
            <Text style={styles.detailValue}>{agreedDeliveryDate}</Text>
          </View>
          <Text style={styles.detailLabelBlock}>Descripción:</Text>
          <Text style={styles.detailValueBlock}>{description}</Text>
          <Text style={styles.detailLabelBlock}>Dirección de Entrega:</Text>
          <Text style={styles.detailValueBlock}>{deliveryAddress}</Text>

         
        </ScrollView>
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
    paddingBottom: 40,
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
});

export default PrepareOrderDetailScreen;