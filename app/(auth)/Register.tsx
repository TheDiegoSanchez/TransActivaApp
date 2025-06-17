import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { useRouter } from 'expo-router';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Colors from '../../constants/Colors';
import Strings from '../../constants/Strings';
import InputField from '../../components/InputField';
import ButtonPrimary from '../../components/ButtonPrimary';

const Register = () => {
  const router = useRouter();

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
            <Text style={styles.switchText}>Log in</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.switchButton, styles.activeButton]}>
            <Text style={[styles.switchText, styles.activeText]}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        <InputField placeholder="E-mail" keyboardType="email-address" />
        <InputField placeholder="Password" secureTextEntry />
        <InputField placeholder="Confirm Password" secureTextEntry />

        <ButtonPrimary title="Sign Up" onPress={() => {}} />

        <View style={styles.footerTextContainer}>
          <Text style={styles.footerText}>
            Already have an account?{' '}
            <Text
              style={styles.loginLink}
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