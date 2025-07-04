// app/(drawer)/InvoiceScreen.tsx

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
import { Ionicons } from '@expo/vector-icons'; // Mantenemos Ionicons por si se usa en otro lugar, pero no para el botón de menú
import { useRouter, useLocalSearchParams } from 'expo-router';

// Colores: Se definen aquí para asegurar que no haya errores de importación de colores.
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

const InvoiceScreen: React.FC = () => {
  const router = useRouter();
  const params = useLocalSearchParams();

  // Asegurar valores por defecto para los parámetros
  const {
    orderId = 'N/A',
    status = 'Pendiente',
    buyerName = 'Comprador Desconocido',
    productName = 'Producto Desconocido',
    quantity = 'Cantidad Desconocida',
    description = 'Sin descripción.',
    deliveryAddress = 'Dirección no especificada.',
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

  // ***** CAMBIO AQUÍ: Redirige a HomeScreen *****
  const handleOk = () => {
    console.log('Botón OK presionado. Redirigiendo a HomeScreen.');
    router.replace('/(drawer-vendedor)/VentaScreen'); // Asegúrate de que esta ruta sea correcta
  };

  // ***** CAMBIO AQUÍ: Redirige a PrepareOrder *****
  const handlePrepareProduct = () => {
    console.log('Botón "Ir a preparar producto" presionado. Redirigiendo a PrepareOrder.');
    router.push({
      pathname: '/(vendedor)/(prepared-screens)/preparedrequest/id', // Asegúrate de que esta ruta también esté correcta y exista
      params: { orderId: orderId, action: 'prepare' },
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header SIN el botón de menú (TouchableOpacity) */}
        <View style={styles.header}>
          {/* Aquí NO hay TouchableOpacity para router.openDrawer() */}
          <View style={styles.logoContainer}>
            <Image
// **¡VERIFICA ESTA RUTA!**
              style={styles.logoImage}
            />
            <Text style={styles.logoText}>TRANSACTIVA</Text>
          </View>
        </View>

        <Text style={styles.screenTitle}>Boleta</Text>

        <ScrollView contentContainerStyle={styles.invoiceContent}>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Estado:</Text>
            <Text style={styles.detailValue}>{status}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Fecha solicitada:</Text>
            <Text style={styles.detailValue}>{requestedDate}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Fecha pagada:</Text>
            <Text style={styles.detailValue}>{paidDate}</Text>
          </View>
          <View style={styles.divider} />

          <Text style={styles.sectionTitle}>Detalles del Pedido</Text>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Producto:</Text>
            <Text style={styles.detailValue}>{productName}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Cantidad:</Text>
            <Text style={styles.detailValue}>{quantity}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Descripción:</Text>
            <Text style={styles.detailValue}>{description}</Text>
          </View>
          <View style={styles.divider} />

          <Text style={styles.sectionTitle}>Información de Entrega</Text>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Comprador:</Text>
            <Text style={styles.detailValue}>{buyerName}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Dirección de entrega:</Text>
            <Text style={styles.detailValue}>{deliveryAddress}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Fecha de llegada acordada:</Text>
            <Text style={styles.detailValue}>{agreedDeliveryDate}</Text>
          </View>
          <View style={styles.divider} />

          <Text style={styles.sectionTitle}>Monto</Text>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Precio Acordado:</Text>
            <Text style={styles.detailValue}>${agreedPrice}</Text>
          </View>

        </ScrollView>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.okButton} onPress={handleOk}>
            <Text style={styles.okButtonText}>OK</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.prepareButton} onPress={handlePrepareProduct}>
            <Text style={styles.prepareButtonText}>Ir a preparar producto</Text>
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
    backgroundColor: Colors.white,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    // Si ya no hay botón de menú, puedes centrar el contenido del header directamente
    justifyContent: 'center', // Para centrar el logo y el texto
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    backgroundColor: Colors.white,
  },
  // ELIMINAMOS el estilo 'menuButton' ya que no se usa
  // menuButton: {
  //   marginRight: 10,
  // },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // flex: 1, // Puedes mantenerlo si quieres que el logo ocupe el espacio disponible
    // justifyContent: 'center', // Ya lo movemos al padre
    // marginLeft: -40, // Este ajuste ya no es necesario si el botón de menú no está
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
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primaryBlue,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  invoiceContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
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
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primaryBlue,
    marginBottom: 15,
    marginTop: 10,
  },
  buttonContainer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
    backgroundColor: Colors.white,
    alignItems: 'center',
  },
  okButton: {
    backgroundColor: Colors.primaryBlue,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    width: '90%',
    marginBottom: 10,
    alignItems: 'center',
  },
  okButtonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  prepareButton: {
    backgroundColor: Colors.primaryBlue,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    width: '90%',
    alignItems: 'center',
  },
  prepareButtonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default InvoiceScreen;