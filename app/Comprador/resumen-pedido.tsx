import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Platform, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ResumenPedido() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Encabezado */}
        <View style={styles.header}>
          <View style={styles.headerCenter}>
            <Image source={require('../../assets/images/paquete.png')} style={styles.packageIcon} />
            <Text style={styles.logoText}>TRANSACTIVA</Text>
          </View>
          <View style={{ width: 30 }} />
        </View>

        <Text style={styles.label}>Cantidad</Text>
        <Text style={styles.label}>Producto</Text>

        <TouchableOpacity style={styles.button} onPress={() => router.push('/Comprador/pago')}>
          <Text style={styles.buttonText}>Ir a Pagar</Text>
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
    marginVertical: 12,
    textAlign: 'center',
  },
  button: {
    marginTop: 30,
    backgroundColor: '#003366',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
