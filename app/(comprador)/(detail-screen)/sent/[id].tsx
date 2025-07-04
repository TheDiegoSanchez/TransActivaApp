import { router } from 'expo-router';
import { Image, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function DetalleEnvio() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        {/* Encabezado */}
        <View style={styles.header}>
          
          <View style={styles.headerCenter}>
            
            <Text style={styles.logoText}>TRANSACTIVA</Text>
          </View>
          <View style={{ width: 30 }} />
        </View>

        <Text style={styles.title}>Detalles del envío</Text>

        {[
          'Nombre de la empresa',
          'RUC de la empresa',
          'Asesor',
          'Número telefónico o celular',
          'Dirección de Envío',
          'Dirección de recojo',
          'Fecha estimada de llegada',
          'Nro de guía',
        ].map((label, i) => (
          <TextInput key={i} placeholder={label} style={styles.input} placeholderTextColor="#666" />
        ))}

        <TouchableOpacity style={styles.okButton} onPress={() => router.push('/(drawer-comprador)/PreparedPedidosScreen')}>
          <Text style={styles.okText}>Ok</Text>
        </TouchableOpacity>
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
  title: {
    fontSize: 18,
    marginVertical: 20,
    color: '#2b7a36',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 14,
    fontSize: 14,
  },
  okButton: {
    backgroundColor: '#003366',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  okText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
