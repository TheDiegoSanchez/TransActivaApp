import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import Swiper from 'react-native-swiper';
import { useRouter } from 'expo-router';
import { useThemeColors } from '../../constants/Theme';
import Strings from '../../constants/Strings';
import ButtonPrimary from '../../components/ButtonPrimary';

const { width } = Dimensions.get('window');
const CAROUSEL_HEIGHT = 400;

const slides = [
    {
        image: require('../../assets/adaptive-icon.png'),
        text: '¡Desde almacén a destino lo hacemos posible!',
    },
    {
        image: require('../../assets/adaptive-icon.png'),
        text: 'Envía de forma segura a nivel nacional',
    },
    {
        image: require('../../assets/adaptive-icon.png'),
        text: '¡Información al instante sin complicaciones!',
    },
    {
        image: require('../../assets/adaptive-icon.png'),
        text: '¡Nos adaptamos a lo que necesitas!',
    },
    {
        image: require('../../assets/adaptive-icon.png'),
        text: '¡Pagas al recibir sin sorpresas, solo confianza!',
    },
];

const Onboarding = () => {
    const router = useRouter();
    const colors = useThemeColors();

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
        <View style={styles.content}>
            <Image
            source={require('../../assets/logo.jpg')}
            style={styles.logo}
            resizeMode="contain"
            />

            <View style={[styles.swiperWrapper, { backgroundColor: colors.card }]}>
            <Swiper
                loop={false}
                showsButtons={false}
                dotStyle={[styles.dot, { backgroundColor: colors.border }]}
                activeDotStyle={[styles.activeDot, { backgroundColor: colors.primary }]}
            >
                {slides.map((slide, index) => (
                <View style={styles.slide} key={index}>
                    <Image source={slide.image} style={styles.slideImage} resizeMode="contain" />
                    <Text style={[styles.slideText, { color: colors.text }]}>
                    {slide.text}
                    </Text>
                </View>
                ))}
            </Swiper>
            </View>

            <View style={styles.buttonWrapper}>
            <ButtonPrimary title="Log in" onPress={() => router.push('/(auth)/Login')} />
            </View>
            <Text style={[styles.footerText, { color: colors.text }]}>
            Don’t have an account?{' '}
            <Text
                style={[styles.signUpLink, { color: colors.alert }]}
                onPress={() => router.push('/(auth)/Register')}
            >
                Sign Up
            </Text>
            </Text>
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 24,
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    logo: {
        width: 200,
        height: 130,
        marginBottom: 20,
    },
    swiperWrapper: {
        borderRadius: 16,
        height: CAROUSEL_HEIGHT,
        width: width * 0.9,
        marginBottom: 30,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    slide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    slideImage: {
        width: '80%',
        height: '65%',
        marginBottom: 10,
    },
    slideText: {
        fontSize: 16,
        textAlign: 'center',
        fontFamily: Strings.font.semiBold,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 4,
        marginTop: 10,
    },
    activeDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 4,
        marginTop: 10,
    },
    buttonWrapper: {
        width: '80%',
        maxWidth: 300,
        marginBottom: 16,
    },
    footerText: {
        fontFamily: Strings.font.regular,
        fontSize: 14,
        textAlign: 'center',
    },
    signUpLink: {
        fontFamily: Strings.font.semiBold,
    },
});

export default Onboarding;
