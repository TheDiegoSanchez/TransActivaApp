import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';

import Strings from '../../constants/Strings';
import ValidationAlert from '../../components/ValidationAlert';
import { useThemeColors } from '../../constants/Theme';

const PinInput = () => {
  const [pin, setPin] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();
  const colors = useThemeColors();

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

  const handlePress = (digit: string) => {
    if (pin.length < 6) {
      setPin((prev) => prev + digit);
      setErrorMessage('');
    }
  };

  const handleDelete = () => {
    setPin((prev) => prev.slice(0, -1));
    setErrorMessage('');
  };

  const handleNext = () => {
    if (pin.length !== 6) {
      setErrorMessage('El código de seguridad debe tener exactamente 6 dígitos.');
      return;
    }

    setErrorMessage('');

    router.push({
      pathname: '/(profile)/ChooseRole',
      params: {
        email,
        password,
        userTypeId: '',
        name,
        ruc,
        managerName,
        managerDni,
        managerEmail,
        phone,
        address,
        paymentPasswordHash: pin,
      },
    });
  };

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background }]}>
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <Text style={[styles.title, { color: colors.text }]}>
          Agregar tu código de seguridad
        </Text>

        <TextInput
          style={[styles.input, { backgroundColor: colors.card, borderColor: colors.border, color: colors.text }]}
          value={pin}
          editable={false}
          secureTextEntry
        />

        {errorMessage !== '' && <ValidationAlert message={errorMessage} />}

        <View style={styles.keypad}>
          {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].map((digit, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.key, { backgroundColor: colors.primary }]}
              onPress={() => handlePress(digit)}
            >
              <Text style={styles.keyText}>{digit}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={[styles.deleteButton, { backgroundColor: colors.alert }]} onPress={handleDelete}>
            <Text style={styles.buttonText}>Borrar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.nextButton, { backgroundColor: colors.primary }]} onPress={handleNext}>
            <Text style={styles.buttonText}>Siguiente</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: Strings.font.semiBold,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderRadius: 4,
    height: 50,
    width: '80%',
    textAlign: 'center',
    fontSize: 24,
    marginBottom: 10,
  },
  keypad: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  key: {
    width: 70,
    height: 70,
    borderRadius: 10,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  keyText: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: Strings.font.bold,
  },
  buttonRow: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  deleteButton: {
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginRight: 10,
  },
  nextButton: {
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 2,
  },
  buttonText: {
    color: '#fff',
    fontFamily: Strings.font.semiBold,
    fontSize: 16,
  },
});

export default PinInput;
