import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useNavigation, CommonActions } from '@react-navigation/native';

import { useThemeColors } from '../../constants/Theme';
import Strings from '../../constants/Strings';
import { register } from '../../services/authService';
import ValidationAlert from '../../components/ValidationAlert';

const ChooseRole = () => {
  const router = useRouter();
  const navigation = useNavigation();
  const colors = useThemeColors();
  const params = useLocalSearchParams();

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    email,
    password,
    name,
    ruc,
    managerName,
    managerDni,
    managerEmail,
    phone,
    address,
    paymentPasswordHash,
  } = params as Record<string, string>;

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

      console.log('Enviando datos al backend:', payload);

      const result = await register(payload);
      console.log('Registro exitoso:', result);

      setSuccessMessage('¡Registro exitoso! Ahora inicia sesión.');
      setErrorMessage('');

      setTimeout(() => {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: '(auth)/Login' }],
          })
        );
      }, 2500);
    } catch (error: any) {
      const message =
        error?.response?.data?.message ||
        'Ocurrió un error al registrarse. Inténtalo nuevamente.';
      console.error('❌ Error en registro:', error);
      setErrorMessage(message);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {successMessage !== '' && <ValidationAlert message={successMessage} />}
      {errorMessage !== '' && <ValidationAlert message={errorMessage} />}

      <TouchableOpacity
        style={[styles.button, { backgroundColor: colors.primary }]}
        onPress={() => handleSelect('proveedor')}
      >
        <Text style={[styles.buttonText, { color: colors.text }]}>Proveedor</Text>
        <Ionicons name="chevron-forward" size={24} color={colors.text} />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: colors.primary }]}
        onPress={() => handleSelect('comprador')}
      >
        <Text style={[styles.buttonText, { color: colors.text }]}>Comprador</Text>
        <Ionicons name="chevron-forward" size={24} color={colors.text} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: '100%',
    maxWidth: 320,
    marginBottom: 20,
    elevation: 2,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: Strings.font.bold,
  },
});

export default ChooseRole;
