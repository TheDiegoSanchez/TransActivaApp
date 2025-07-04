// app/(drawer)/ShipProductScreen.tsx

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useNavigation } from '@react-navigation/native';

const Colors = {
  primaryBlue: '#1A435E',
  lightGrayText: '#A9A9A9',
  white: '#FFFFFF',
  black: '#000000',
  darkGray: '#333333',
  lightBackground: '#F9F9F9',
  inputBorder: '#E0E0E0',
  buttonPrimary: '#1A435E',
};

const ShipProductScreen: React.FC = () => {
  const router = useRouter();
  const navigation = useNavigation();
  const params = useLocalSearchParams();

  // Función auxiliar para asegurar que el parámetro sea un string simple
  const getParamAsString = (param: string | string[] | undefined): string => {
    if (Array.isArray(param)) {
      return param[0] || ''; // Toma el primer elemento del arreglo, o un string vacío si es undefined
    }
    return param || ''; // Devuelve el string directamente, o un string vacío si es undefined
  };

  // Estados para los campos de entrada, usando la función auxiliar
  const [product, setProduct] = React.useState(getParamAsString(params.productName));
  const [quantity, setQuantity] = React.useState(getParamAsString(params.quantity));
  const [shippingMethod, setShippingMethod] = React.useState('');
  const [details, setDetails] = React.useState('');

  const handleOpenDrawer = () => {
    console.log('Botón de menú presionado. (La función openDrawer está comentada para evitar errores de tipado)');
  };

  const handleEmbarcar = () => {
    alert(`Producto "${product}" embarcado con método: ${shippingMethod}`);
    router.push({
      pathname: '/(vendedor)/(prepared-screens)/board/id', // Asegúrate de que esta ruta sea correcta
      params: {
        orderId: getParamAsString(params.orderId), // Aseguramos que orderId sea string
        product: product,
        quantity: quantity,
        shippingMethod: shippingMethod,
        details: details,
      },
    });
  };

  const handleAvisarLlegado = () => {
    alert('Aviso de llegada enviado.');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Encabezado con botón de menú y logo */}


        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Text style={styles.screenTitle}>Preparar producto</Text>

          {/* Campos de Información */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Producto</Text>
            <TextInput
              style={styles.textInput}
              value={product}
              onChangeText={setProduct}
              placeholder="Nombre del producto"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Cantidad de producto</Text>
            <TextInput
              style={styles.textInput}
              value={quantity}
              onChangeText={setQuantity}
              placeholder="Cantidad"
              keyboardType="numeric"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Como se esta enviando?</Text>
            <TextInput
              style={styles.textInput}
              value={shippingMethod}
              onChangeText={setShippingMethod}
              placeholder="Ej: Por tierra, aéreo, marítimo"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Detalles</Text>
            <TextInput
              style={[styles.textInput, styles.multilineInput]}
              value={details}
              onChangeText={setDetails}
              placeholder="Detalles adicionales del envío"
              multiline
              numberOfLines={3}
            />
          </View>

          {/* Botones de Acción */}
          <TouchableOpacity style={styles.embarcarButton} onPress={handleEmbarcar}>
            <Text style={styles.buttonText}>Embarcar</Text>
          </TouchableOpacity>

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
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primaryBlue,
    marginBottom: 25,
    textAlign: 'center',
  },
  inputGroup: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.darkGray,
    marginBottom: 8,
  },
  textInput: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.inputBorder,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 15,
    fontSize: 16,
    color: Colors.black,
  },
  multilineInput: {
    minHeight: 80,
    textAlignVertical: 'top',
  },
  embarcarButton: {
    backgroundColor: Colors.buttonPrimary,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: '100%',
  },
  avisarButton: {
    backgroundColor: Colors.buttonPrimary,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    width: '100%',
  },
  buttonText: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ShipProductScreen;