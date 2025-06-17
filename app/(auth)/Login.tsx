import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import Colors from '../../constants/Colors';
import Strings from '../../constants/Strings';
import InputField from '../../components/InputField';
import ButtonPrimary from '../../components/ButtonPrimary';

const Login = () => {
  const router = useRouter();

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/logo.jpg')} style={styles.logo} resizeMode="contain" />
        <Text style={styles.logoText}>Trans{'\n'}Activa</Text>
      </View>

      <View style={styles.switchContainer}>
        <TouchableOpacity style={[styles.switchButton, styles.activeButton]}>
          <Text style={[styles.switchText, styles.activeText]}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.switchButton}
          onPress={() => router.replace('/(auth)/Register')}
        >
          <Text style={styles.switchText}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.formContainer}>
        <InputField placeholder="E-mail" keyboardType="email-address" />
        <InputField placeholder="Password" secureTextEntry />
        <ButtonPrimary title="Log in" onPress={() => {}} />

        <TouchableOpacity>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF4F4', // fondo rosado claro como en el diseño
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 90,
    height: 90,
  },
  logoText: {
    fontSize: 24,
    fontFamily: Strings.font.bold,
    color: Colors.primary,
    textAlign: 'center',
    lineHeight: 30,
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
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    elevation: 2,
  },
  forgotText: {
    marginTop: 12,
    textAlign: 'center',
    fontFamily: Strings.font.regular,
    color: Colors.text,
  },
});

export default Login;
