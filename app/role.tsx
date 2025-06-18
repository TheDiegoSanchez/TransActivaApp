import { useRouter } from 'expo-router';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function RoleScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/images/caja.png')} style={styles.logo} />
        <Text style={styles.logoText}>TRANSACTIVA</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Proveedor</Text>
        <Ionicons name="chevron-forward" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => alert('Comprador')}>
        <Text style={styles.buttonText}>Comprador</Text>
        <Ionicons name="chevron-forward" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#fff', paddingHorizontal: 30, justifyContent: 'center',
  },
  header: {
    flexDirection: 'row', alignItems: 'center', marginBottom: 60, alignSelf: 'center',
  },
  logo: {
    width: 40, height: 40, resizeMode: 'contain', marginRight: 10,
  },
  logoText: {
    fontSize: 18, fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#043E63', paddingVertical: 12, paddingHorizontal: 20,
    borderRadius: 10, marginVertical: 10, flexDirection: 'row',
    justifyContent: 'space-between', alignItems: 'center',
  },
  buttonText: {
    color: '#fff', fontSize: 16, flex: 1,
  },
});