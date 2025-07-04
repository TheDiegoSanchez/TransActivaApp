import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function Pago() {
  const router = useRouter();
  const [tarjeta, setTarjeta] = useState('');
  const [fecha, setFecha] = useState('');
  const [cvv, setCvv] = useState('');

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Encabezado */}
        <View style={styles.header}>
          
          <View style={styles.headerCenter}>
           
            <Text style={styles.logoText}>TRANSACTIVA</Text>
          </View>
          <View style={{ width: 30 }} />
        </View>

        <Text style={styles.label}>Precio</Text>

        <View style={styles.montoBox}>
          <Text style={styles.montoText}>S/50.00</Text>
        </View>

        <TextInput
          placeholder="Número de tarjeta"
          value={tarjeta}
          onChangeText={setTarjeta}
          keyboardType="numeric"
          style={styles.input}
        />
        <TextInput
          placeholder="Fecha de vencimiento"
          value={fecha}
          onChangeText={setFecha}
          style={styles.input}
        />
        <TextInput
          placeholder="CVV"
          value={cvv}
          onChangeText={setCvv}
          keyboardType="numeric"
          style={styles.input}
        />

        <TouchableOpacity style={styles.button} onPress={() => router.push('(comprador)/(payment-screens)/ticket/[id]')}>
          <Text style={styles.buttonText}>Pagar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 40 : 0,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  headerCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIcon: {
    width: 30,
    height: 30,
    tintColor: '#003366',
  },
  packageIcon: {
    width: 30,
    height: 30,
    marginRight: 6,
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    marginLeft: 5,
  },
  montoBox: {
    backgroundColor: '#ccc',
    paddingVertical: 20,
    paddingHorizontal: 40,
    marginBottom: 30,
    borderRadius: 10,
    alignSelf: 'center',
  },
  montoText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 14,
    marginBottom: 16,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#003366',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
