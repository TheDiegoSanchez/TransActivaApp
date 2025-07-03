import { useRouter } from 'expo-router';
import React from 'react';
import {
    Image,
    Platform,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function PedidosRealizados() {
  const router = useRouter();

  const pedidos = [
    { id: 1, nombre: 'Transacción 001', estado: 'Completado' },
    { id: 2, nombre: 'Transacción 002', estado: 'Pendiente' },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Encabezado */}
        <View style={styles.header}>
        
          <View style={styles.headerCenter}>
            <Image source={require('../../assets/images/paquete.png')} style={styles.packageIcon} />
            <Text style={styles.logoText}>TRANSACTIVA</Text>
          </View>
          <View style={{ width: 30 }} />
        </View>

        <Text style={styles.title}>Pedidos Realizados</Text>

        {pedidos.map((pedido) => (
          <TouchableOpacity
            key={pedido.id}
            style={styles.item}
            onPress={() => router.push('/Comprador/detalle-pedido-nuevo')}
          >
            <View>
              <Text style={styles.nombre}>{pedido.nombre}</Text>
              <Text style={styles.estado}>{pedido.estado}</Text>
            </View>
            <Text style={styles.flecha}>→</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
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
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  menuIcon: {
    width: 30,
    height: 30,
    tintColor: '#003366',
  },
  headerCenter: {
    flexDirection: 'row',
    alignItems: 'center',
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
  title: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    marginVertical: 20,
  },
  item: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nombre: {
    fontSize: 16,
    fontWeight: '500',
  },
  estado: {
    fontSize: 14,
    color: '#888',
  },
  flecha: {
    fontSize: 20,
    color: '#000',
  },
});
