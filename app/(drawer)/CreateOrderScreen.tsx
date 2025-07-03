// app/(drawer)/CreateOrderScreen.tsx

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
import { useRouter } from 'expo-router';
import { useNavigation } from '@react-navigation/native';

const Colors = {
  primaryBlue: '#1A435E',
  lightGrayText: '#A9A9A9',
  white: '#FFFFFF',
  black: '#000000',
  darkGray: '#333333',
  lightBackground: '#F9F9F9',
  inputBorder: '#E0E0E0',
  accentOrange: '#FF9800', // Color para el botón "Preparar producto"
};

const CreateOrderScreen: React.FC = () => {
  const router = useRouter();
  const navigation = useNavigation();

  // Estados para los campos de entrada
  const [buyerName, setBuyerName] = React.useState('');
  const [product, setProduct] = React.useState('');
  const [quantity, setQuantity] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [deliveryAddress, setDeliveryAddress] = React.useState('');
  const [agreedDeliveryDate, setAgreedDeliveryDate] = React.useState('');
  const [agreedAmount, setAgreedAmount] = React.useState('');

  const handleOpenDrawer = () => {
    // COMENTADO PARA EVITAR EL ERROR DE TIPADO "Property 'openDrawer' does not exist"
    console.log('Botón de menú presionado. (La función openDrawer está comentada para evitar errores de tipado)');
  };

  const handlePrepareProduct = () => {
    // Lógica para aceptar la solicitud/orden (manteniendo el alert como ejemplo)
    alert('Orden preparada y lista para ser procesada!');
    // AQUÍ ES DONDE CAMBIAMOS LA NAVEGACIÓN
    router.push({
      pathname: '/(drawer)/ShipProductScreen',
      params: {
        // Puedes pasar los datos de la orden que acabas de ingresar
        // Por ejemplo, un ID de orden si ya lo generaste, o los detalles del producto
        orderId: 'ORDER_XYZ_123', // Ejemplo de ID
        productName: product,
        quantity: quantity,
        // ...otros campos que quieras pasar a ShipProductScreen
      },
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Encabezado con botón de menú y logo */}

        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Text style={styles.screenTitle}>Información del Pedido</Text>

          {/* Campos de Información */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Nombre Comprador</Text>
            <TextInput
              style={styles.textInput}
              value={buyerName}
              onChangeText={setBuyerName}
              placeholder="Ingrese nombre del comprador"
            />
             <Ionicons name="person-outline" size={20} color={Colors.lightGrayText} style={styles.inputIcon} />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Producto</Text>
            <TextInput
              style={styles.textInput}
              value={product}
              onChangeText={setProduct}
              placeholder="Ingrese nombre del producto"
            />
            <Ionicons name="cube-outline" size={20} color={Colors.lightGrayText} style={styles.inputIcon} />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Cantidad</Text>
            <TextInput
              style={styles.textInput}
              value={quantity}
              onChangeText={setQuantity}
              placeholder="Ingrese cantidad"
              keyboardType="numeric"
            />
            <Ionicons name="list-outline" size={20} color={Colors.lightGrayText} style={styles.inputIcon} />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Descripción</Text>
            <TextInput
              style={[styles.textInput, styles.multilineInput]}
              value={description}
              onChangeText={setDescription}
              placeholder="Detalles del producto (ej. tallas, colores)"
              multiline
              numberOfLines={3}
            />
            <Ionicons name="document-text-outline" size={20} color={Colors.lightGrayText} style={styles.inputIcon} />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Dirección de entrega</Text>
            <TextInput
              style={styles.textInput}
              value={deliveryAddress}
              onChangeText={setDeliveryAddress}
              placeholder="Ingrese dirección completa"
            />
            <Ionicons name="location-outline" size={20} color={Colors.lightGrayText} style={styles.inputIcon} />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Fecha de llegada acordada</Text>
            <TextInput
              style={styles.textInput}
              value={agreedDeliveryDate}
              onChangeText={setAgreedDeliveryDate}
              placeholder="Ej: 2025-07-15"
              keyboardType="number-pad"
            />
            <Ionicons name="calendar-outline" size={20} color={Colors.lightGrayText} style={styles.inputIcon} />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Monto Acordado</Text>
            <TextInput
              style={styles.textInput}
              value={agreedAmount}
              onChangeText={setAgreedAmount}
              placeholder="Ej: 150.00"
              keyboardType="numeric"
            />
            <Ionicons name="cash-outline" size={20} color={Colors.lightGrayText} style={styles.inputIcon} />
          </View>

          {/* Botón "Preparar producto" con iconos */}
          <TouchableOpacity style={styles.prepareButton} onPress={handlePrepareProduct}>
            <Ionicons name="airplane" size={24} color={Colors.white} style={styles.buttonIcon} />
            <Ionicons name="car-outline" size={24} color={Colors.white} style={styles.buttonIcon} />
            <Text style={styles.prepareButtonText}>Preparar producto</Text>
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
    position: 'relative',
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
    paddingRight: 40,
  },
  multilineInput: {
    minHeight: 80,
    textAlignVertical: 'top',
  },
  inputIcon: {
    position: 'absolute',
    right: 15,
    top: 40,
  },
  prepareButton: {
    flexDirection: 'row',
    backgroundColor: Colors.primaryBlue,
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    width: '100%',
  },
  prepareButtonText: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  buttonIcon: {
    marginRight: 5,
  },
});

export default CreateOrderScreen;