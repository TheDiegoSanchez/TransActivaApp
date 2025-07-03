import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { useRouter } from 'expo-router';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useThemeColors } from '../../constants/Theme';
import Strings from '../../constants/Strings';
import InputField from '../../components/InputField';
import ButtonPrimary from '../../components/ButtonPrimary';
import ValidationAlert from '../../components/ValidationAlert';
import { validateFormData } from '../../utils/validators';

const Register = () => {
  const router = useRouter();
  const colors = useThemeColors();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
      contentContainerStyle={[styles.container, { backgroundColor: colors.background }]}
      enableOnAndroid
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
          <TouchableOpacity
            style={styles.switchButton}
            onPress={() => router.replace('/(auth)/Login')}
          >
            <Text style={styles.switchText}>Log in</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.switchButton, styles.activeButton, { backgroundColor: colors.primary }]}
          >
            <Text style={[styles.switchText, styles.activeText]}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        <InputField
          placeholder="E-mail"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        {/* Password */}
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Password"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
            placeholderTextColor={colors.secondary}
            style={[styles.input, { borderBottomColor: colors.secondary, color: colors.text }]}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Text style={[styles.toggleText, { color: colors.primary }]}>
              {showPassword ? 'Ocultar' : 'Mostrar'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Confirm Password */}
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Confirm Password"
            secureTextEntry={!showConfirmPassword}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholderTextColor={colors.secondary}
            style={[styles.input, { borderBottomColor: colors.secondary, color: colors.text }]}
          />
          <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
            <Text style={[styles.toggleText, { color: colors.primary }]}>
              {showConfirmPassword ? 'Ocultar' : 'Mostrar'}
            </Text>
          </TouchableOpacity>
        </View>

        {errorMessage !== '' && <ValidationAlert message={errorMessage} />}

        <ButtonPrimary title="Sign Up" onPress={handleContinue} />

        <View style={styles.footerTextContainer}>
          <Text style={[styles.footerText, { color: colors.text }]}>
            Already have an account?{' '}
            <Text
              style={[styles.loginLink, { color: colors.alert }]}
              onPress={() => router.replace('/(auth)/Login')}
            >
              Log in
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
  activeText: {
    color: '#fff',
  },
  formContainer: {
    backgroundColor: '#FFF4F4',
    borderRadius: 16,
    padding: 20,
    elevation: 2,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
    fontFamily: Strings.font.regular,
  },
  toggleText: {
    fontSize: 14,
    paddingLeft: 10,
    fontFamily: Strings.font.semiBold,
  },
  footerTextContainer: {
    marginTop: 16,
    alignItems: 'center',
  },
  footerText: {
    fontFamily: Strings.font.regular,
    fontSize: 14,
  },
  loginLink: {
    fontFamily: Strings.font.semiBold,
  },
});

export default Register;
