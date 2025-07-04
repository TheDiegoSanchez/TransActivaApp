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
import Colors from '../../constants/Colors';
import Strings from '../../constants/Strings';
import InputField from '../../components/InputField';
import ButtonPrimary from '../../components/ButtonPrimary';
import { login } from '../../services/authService';
import ValidationAlert from '../../components/ValidationAlert';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
    const router = useRouter();
    const navigationState = useRootNavigationState();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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

            const { token, userTypeId } = response;

            await AsyncStorage.setItem('userToken', token);
            await AsyncStorage.setItem('userTypeId', userTypeId.toString());

            console.log('Token guardado en AsyncStorage:', token);
            console.log('Tipo de usuario:', userTypeId);

            setAlertMessage('Inicio de sesión exitoso. Redirigiendo...');
        
            setTimeout(() => {
            if (userTypeId === 2) {
                router.replace('/(drawer-vendedor)/VentaScreen');
            } else if (userTypeId === 3) {
                router.replace('/(drawer-comprador)/Principal');
            } else {
                setAlertMessage('Tipo de usuario no reconocido.');
            }
        }, 1000);

        } catch (error: any) {
            const message =
                error.response?.data?.message ||
                'Correo o contraseña incorrectos.';
            setAlertMessage(message);
        } finally {
            setLoading(false);
        }
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

                <InputField
                    placeholder="E-mail"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                />
                <InputField
                    placeholder="Password"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />

                {alertMessage !== '' && <ValidationAlert message={alertMessage} />}

                <ButtonPrimary
                    title={loading ? 'Cargando...' : 'Log in'}
                    onPress={handleLogin}
                    disabled={loading}
                />

                <TouchableOpacity>
                    <Text style={styles.forgotText}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAwareScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#FFFFFF',
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
    forgotText: {
        marginTop: 12,
        textAlign: 'center',
        fontFamily: Strings.font.regular,
        color: Colors.text,
    },
});

export default Login;
