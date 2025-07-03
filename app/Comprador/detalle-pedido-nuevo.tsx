import { useRouter } from 'expo-router';
import React from 'react';
import {
    Image,
    Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function DetallePedidoNuevo() {
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

        <Text style={styles.title}>Información del pedido</Text>

        <View style={styles.row}>
          <Text style={styles.label}>Estado:</Text>
          <Text style={styles.value}>[Estado corto]</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Fecha solicitada</Text>
          <Text style={styles.label}>Fecha pagada</Text>
        </View>

        <Text style={styles.label}>Producto</Text>
        <Text style={styles.label}>Cantidad</Text>
        <Text style={styles.label}>Descripción</Text>
        <Text style={styles.label}>Proveedor</Text>
        <Text style={styles.label}>Dirección de entrega</Text>
        <Text style={styles.label}>Precio Acordado</Text>
        <Text style={styles.label}>Fecha de llegada acordada</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => router.back()}>
            <Text style={styles.buttonText}>Regresar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, { backgroundColor: '#005599' }]}
            onPress={() => router.push('/Comprador/detalle-preparacion')}
          >
            <Text style={styles.buttonText}>Ver preparación</Text>
          </TouchableOpacity>
        </View>
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
    padding: 20,
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  headerCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  title: {
    fontSize: 18,
    marginVertical: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginVertical: 6,
  },
  value: {
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 30,
  },
  button: {
    backgroundColor: '#003366',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
