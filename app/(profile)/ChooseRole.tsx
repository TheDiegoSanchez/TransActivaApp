import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../../constants/Colors';
import Strings from '../../constants/Strings';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { register } from '../../services/authService';

const ChooseRole = () => {
  const router = useRouter();
  const params = useLocalSearchParams();

  const email = params.email as string;
  const password = params.password as string;
  const name = params.name as string;
  const ruc = params.ruc as string;
  const managerName = params.managerName as string;
  const managerDni = params.managerDni as string;
  const managerEmail = params.managerEmail as string;
  const phone = params.phone as string;
  const address = params.address as string;
  const paymentPasswordHash = params.paymentPasswordHash as string;

  const handleSelect = async (role: 'proveedor' | 'comprador') => {
    try {
      const selectedType = role === 'proveedor' ? 2 : 3;

      const payload = {
        email,
        password,
        userTypeId: selectedType,
        name,
        ruc,
        managerName,
        managerDni,
        managerEmail,
        phone,
        address,
        paymentPasswordHash,
      };

      console.log('📦 Enviando datos al backend:', payload);

      const result = await register(payload);

      console.log('✅ Registro exitoso:', result);

      router.replace('/(drawer)/HomeScreen');
    } catch (error) {
      console.error('❌ Error al registrar:', error);
      alert('Ocurrió un error al registrarse. Inténtalo nuevamente.');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => handleSelect('proveedor')}>
        <Text style={styles.buttonText}>Proveedor</Text>
        <Ionicons name="chevron-forward" size={24} color="#000" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => handleSelect('comprador')}>
        <Text style={styles.buttonText}>Comprador</Text>
        <Ionicons name="chevron-forward" size={24} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  button: {
    backgroundColor: Colors.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: '100%',
    maxWidth: 300,
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontFamily: Strings.font.bold,
  },
});

export default ChooseRole;
