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
const CarrierInfoScreen: React.FC = () => {
  const router = useRouter();
  const navigation = useNavigation();
  const params = useLocalSearchParams();
  const [companyName, setCompanyName] = React.useState('');
  const [ruc, setRuc] = React.useState('');
  const [advisor, setAdvisor] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [deliveryAddress, setDeliveryAddress] = React.useState('');
  const [pickupAddress, setPickupAddress] = React.useState('');
  const [estimatedArrivalDate, setEstimatedArrivalDate] = React.useState('');
  const [trackingNumber, setTrackingNumber] = React.useState('');
  
  const handleOpenDrawer = () => {
    console.log('Botón de menú presionado.');
  };
  const handleEnviar = () => {
    alert(`Información del transportista para ${companyName} enviada.`);
    router.push({
      pathname: '/(vendedor)/(prepared-screens)/productsent/id',
      params: {
        orderId: params.orderId,
        companyName: companyName,
        trackingNumber: trackingNumber,
      },
    });
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Text style={styles.screenTitle}>Quién lo esta trayendo</Text>
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Nombre de la empresa</Text>
            <TextInput
              style={styles.textInput}
              value={companyName}
              onChangeText={setCompanyName}
              placeholder="Nombre de la empresa de transporte"
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>RUC de la empresa</Text>
            <TextInput
              style={styles.textInput}
              value={ruc}
              onChangeText={setRuc}
              placeholder="RUC"
              keyboardType="numeric"
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Asesor</Text>
            <TextInput
              style={styles.textInput}
              value={advisor}
              onChangeText={setAdvisor}
              placeholder="Nombre del asesor"
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Número telefónico o celular</Text>
            <TextInput
              style={styles.textInput}
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              placeholder="Número de contacto"
              keyboardType="phone-pad"
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Direccion de Envío</Text>
            <TextInput
              style={styles.textInput}
              value={deliveryAddress}
              onChangeText={setDeliveryAddress}
              placeholder="Dirección donde se envía"
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Direccion de recojo</Text>
            <TextInput
              style={styles.textInput}
              value={pickupAddress}
              onChangeText={setPickupAddress}
              placeholder="Dirección de recojo"
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Fecha estimada de llegada</Text>
            <TextInput
              style={styles.textInput}
              value={estimatedArrivalDate}
              onChangeText={setEstimatedArrivalDate}
              placeholder="Ej: 2025-07-20"
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Nro de guía</Text>
            <TextInput
              style={styles.textInput}
              value={trackingNumber}
              onChangeText={setTrackingNumber}
              placeholder="Número de seguimiento"
            />
          </View>
          <TouchableOpacity style={styles.enviarButton} onPress={handleEnviar}>
            <Text style={styles.buttonText}>Enviar</Text>
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
  enviarButton: {
    backgroundColor: Colors.buttonPrimary,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: '100%',
  },
  buttonText: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CarrierInfoScreen;