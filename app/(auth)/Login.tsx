import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useRouter, useRootNavigationState } from 'expo-router';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useThemeColors } from '../../constants/Theme';
import Strings from '../../constants/Strings';
import InputField from '../../components/InputField';
import ButtonPrimary from '../../components/ButtonPrimary';
import { login } from '../../services/authService';
import ValidationAlert from '../../components/ValidationAlert';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { jwtDecode } from 'jwt-decode'; // ✅ Importación correcta

const Login = () => {
  const router = useRouter();
  const navigationState = useRootNavigationState();
  const colors = useThemeColors();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleLogin = async () => {
    if (!navigationState?.key) return;

    if (!email || !password) {
      setAlertMessage('Por favor completa todos los campos.');
      return;
    }

    try {
      setLoading(true);
      setAlertMessage('');

      const response = await login({ email, password });
      const token = response.token;

      const decoded: any = jwtDecode(token);
      const role = decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];

      console.log('Rol del usuario:', role);

      await AsyncStorage.setItem('userToken', token);
      await AsyncStorage.setItem('userRole', role);

      setAlertMessage('Inicio de sesión exitoso. Redirigiendo...');

      setTimeout(() => {
        if (role === 'Comprador') {
          router.replace('Comprador/menuindex');
        } else if (role === 'Vendedor') {
          router.replace('(drawer)/HomeScreen');
        } else {
          setAlertMessage('Rol no reconocido.');
        }
      }, 1500);

    } catch (error: any) {
      const message =
        error.response?.data?.message || 'Correo o contraseña incorrectos.';
      setAlertMessage(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={[styles.container, { backgroundColor: colors.background }]}
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
        <View style={[styles.switchContainer, { backgroundColor: colors.secondary }]}>
          <TouchableOpacity style={[styles.switchButton, styles.activeButton, { backgroundColor: colors.primary }]}>
            <Text style={styles.switchText}>Log in</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.switchButton}
            onPress={() => router.replace('/(auth)/Register')}
          >
            <Text style={styles.switchText}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        <InputField
          placeholder="E-mail"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <InputField
          placeholder="Password"
          value={password}
          secureTextEntry={!showPassword}
          onChangeText={setPassword}
        />

        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Text style={styles.togglePassword}>
            {showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
          </Text>
        </TouchableOpacity>

        {alertMessage !== '' && <ValidationAlert message={alertMessage} />}

        <ButtonPrimary
          title={loading ? 'Cargando...' : 'Log in'}
          onPress={handleLogin}
          disabled={loading}
        />

        <TouchableOpacity>
          <Text style={[styles.forgotText, { color: colors.text }]}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
    borderRadius: 24,
    overflow: 'hidden',
    marginBottom: 20,
  },
  switchButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
  },
  activeButton: {},
  switchText: {
    fontSize: 14,
    color: '#fff',
    fontFamily: Strings.font.semiBold,
  },
  formContainer: {
    backgroundColor: '#FFF4F4',
    borderRadius: 16,
    padding: 20,
    elevation: 2,
  },
  forgotText: {
    marginTop: 12,
    textAlign: 'center',
    fontFamily: Strings.font.regular,
  },
  togglePassword: {
    marginTop: 8,
    textAlign: 'right',
    color: '#007AFF',
    fontSize: 13,
    fontFamily: Strings.font.regular,
  },
});

export default Login;
