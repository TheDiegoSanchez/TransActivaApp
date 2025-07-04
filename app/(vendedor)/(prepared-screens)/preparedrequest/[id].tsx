import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';

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
  const params = useLocalSearchParams();

  const getParamAsString = (param: string | string[] | undefined): string =>
    Array.isArray(param) ? param[0] || '' : param || '';

  const [product, setProduct] = React.useState(getParamAsString(params.productName));
  const [quantity, setQuantity] = React.useState(getParamAsString(params.quantity));
  const [shippingMethod, setShippingMethod] = React.useState('');
  const [details, setDetails] = React.useState('');

  const handleEmbarcar = () => {
    router.push({
      pathname: '/(vendedor)/(prepared-screens)/board/id',
      params: {
        orderId: getParamAsString(params.orderId),
        product,
        quantity,
        shippingMethod,
        details,
      },
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Text style={styles.screenTitle}>Preparar producto</Text>

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
            <Text style={styles.inputLabel}>¿Cómo se está enviando?</Text>
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
    marginTop: 20,
    width: '100%',
  },
  buttonText: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ShipProductScreen;
