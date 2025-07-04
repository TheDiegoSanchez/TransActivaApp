import { useRouter } from 'expo-router';
import { Image, Platform, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Pedidos: React.FC = () => {
  const router = useRouter();

  const pedidos = [
    { id: 1, nombre: 'Compra 001', estado: 'Listo' },
    { id: 2, nombre: 'Compra 002', estado: 'En preparación' },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
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
};


const styles = StyleSheet.create({
  safeArea: {
    
  },
  container: {
    padding: 10,
    backgroundColor: '#fff',
  },

  title: {
    fontSize: 18,
    textAlign: 'center',
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

export default Pedidos;