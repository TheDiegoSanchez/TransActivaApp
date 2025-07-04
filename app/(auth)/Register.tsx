import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useRouter } from 'expo-router';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Colors from '../../constants/Colors';
import Strings from '../../constants/Strings';
import InputField from '../../components/InputField';
import ButtonPrimary from '../../components/ButtonPrimary';
import ValidationAlert from '../../components/ValidationAlert';
import { validateFormData } from '../../utils/validators';

const Register = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleContinue = () => {
    const validationResult = validateFormData({
      email,
      password,
      repeatPassword: confirmPassword,
    });

    if (validationResult) {
      setErrorMessage(validationResult);
      return;
    }

    setErrorMessage('');

    router.push({
      pathname: '/(profile)/CompanyForm',
      params: { email, password },
    });
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      enableOnAndroid={true}
      extraScrollHeight={20}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/logo.jpg')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.formContainer}>
        <View style={styles.switchContainer}>
          <TouchableOpacity
            style={styles.switchButton}
            onPress={() => router.replace('/(auth)/Login')}
          >
            <Text style={styles.switchText}>Iniciar Sesión</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.switchButton, styles.activeButton]}>
            <Text style={[styles.switchText, styles.activeText]}>Registrarse</Text>
          </TouchableOpacity>
        </View>

        <InputField
          placeholder="Correo Electrónico"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <InputField
          placeholder="Contraseña"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <InputField
          placeholder="Confirmar Contraseña"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        {errorMessage !== '' && <ValidationAlert message={errorMessage} />}

        <ButtonPrimary title="Registrarse" onPress={handleContinue} />

        <View style={styles.footerTextContainer}>
          <Text style={styles.footerText}>
            Ya tienes una Cuenta?{' '}
            <Text
              style={styles.loginLink}
              onPress={() => router.replace('/(auth)/Login')}
            >
              Iniciar Sesión
            </Text>
          </Text>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 250,
    height: 170,
  },
  switchContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.secondary,
    borderRadius: 24,
    overflow: 'hidden',
    marginBottom: 20,
  },
  switchButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
  },
  activeButton: {
    backgroundColor: Colors.primary,
  },
  switchText: {
    fontSize: 14,
    color: '#fff',
    fontFamily: Strings.font.semiBold,
  },
  activeText: {
    color: '#fff',
  },
  formContainer: {
    backgroundColor: '#FFF4F4',
    borderRadius: 16,
    padding: 20,
    elevation: 2,
  },
  footerTextContainer: {
    marginTop: 16,
    alignItems: 'center',
  },
  footerText: {
    fontFamily: Strings.font.regular,
    color: Colors.text,
    fontSize: 14,
  },
  loginLink: {
    fontFamily: Strings.font.semiBold,
    color: Colors.alert,
  },
});

export default Register;
