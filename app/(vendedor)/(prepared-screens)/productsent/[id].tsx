// app/(drawer)/ProductSentScreen.tsx

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams } from 'expo-router'; // Para recibir parámetros
import { useNavigation } from '@react-navigation/native'; // Para el botón de menú

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
  const params = useLocalSearchParams(); // Recibe parámetros de CarrierInfoScreen

  // Puedes mostrar aquí algunos detalles de lo que se envió
  const orderId = params.orderId || 'N/A';
  const companyName = params.companyName || 'No especificada';
  const trackingNumber = params.trackingNumber || 'No disponible';

  const handleOpenDrawer = () => {
    console.log('Botón de menú presionado.'); // Mantener comentado para evitar errores de tipado
  };

  const handleVolverInicio = () => {
    // Regresa a la pantalla de inicio o a la lista de preparación
    router.push('/(drawer-vendedor)/VentaScreen'); // O '/(drawer)/ListPrepareScreen'
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Encabezado con botón de menú y logo waa*/}

        <View style={styles.content}>
          <Image // Usamos empty_box.png como icono de enviado, puedes cambiarlo
            style={styles.sentImage}
          />
          <Text style={styles.title}>Producto Enviado</Text>
          {/* Puedes añadir más detalles aquí si se pasaron por params */}
          {/* <Text style={styles.detailsText}>Orden ID: {orderId}</Text>
          <Text style={styles.detailsText}>Transportista: {companyName}</Text>
          <Text style={styles.detailsText}>Nro de Guía: {trackingNumber}</Text> */}

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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    backgroundColor: Colors.white,
  },
  menuButton: {
    marginRight: 10,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    marginLeft: -40,
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
    padding: 20,
  },
  sentImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 30,
    tintColor: Colors.primaryBlue, // Para darle un toque de color si el icono lo permite
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.primaryBlue,
    marginBottom: 20,
    textAlign: 'center',
  },
  detailsText: {
    fontSize: 16,
    color: Colors.darkGray,
    marginBottom: 5,
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