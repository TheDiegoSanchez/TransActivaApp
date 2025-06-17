import { useRootNavigationState } from 'expo-router';
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

const Login = () => {
    const router = useRouter();
    const navigationState = useRootNavigationState();

    const handleLogin = () => {
        if (!navigationState?.key) return;
        router.replace('/(drawer)/HomeScreen');
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

                <InputField placeholder="E-mail" keyboardType="email-address" />
                <InputField placeholder="Password" secureTextEntry />
                <ButtonPrimary title="Log in" onPress={handleLogin} />

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
