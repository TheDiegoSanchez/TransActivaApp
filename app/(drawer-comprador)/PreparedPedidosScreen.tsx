import { useRouter } from 'expo-router';
import { Image, Platform, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function PedidosPreparados() {
  const router = useRouter();

  const pedidos = [
    { id: 1, nombre: 'Compra 001', estado: 'Listo' },
    { id: 2, nombre: 'Compra 002', estado: 'En preparación' },
  ];

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

        <Text style={styles.title}>Pedidos preparados</Text>

        {pedidos.map((pedido) => (
          <TouchableOpacity
            key={pedido.id}
            style={styles.item}
            onPress={() => router.push('/(comprador)/(detail-screen)/detail/[id]')}
          >
            <View>
              <Text style={styles.itemText}>{pedido.nombre}</Text>
              <Text style={styles.estado}>{pedido.estado}</Text>
            </View>
            <Text style={styles.flecha}>→</Text>
          </TouchableOpacity>
        ))}
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
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
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
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 15,
    fontWeight: '500',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  itemText: {
    fontSize: 16,
    fontWeight: '500',
  },
  estado: {
    fontSize: 14,
    color: '#777',
  },
  flecha: {
    fontSize: 20,
    color: '#000',
  },
});
