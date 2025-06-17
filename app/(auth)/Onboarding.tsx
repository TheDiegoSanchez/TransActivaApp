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
import Colors from '../../constants/Colors';
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

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Image
                    source={require('../../assets/logo.jpg')}
                    style={styles.logo}
                    resizeMode="contain"
                />

                <View style={styles.swiperWrapper}>
                    <Swiper
                        loop={false}
                        showsButtons={false}
                        dotStyle={styles.dot}
                        activeDotStyle={styles.activeDot}
                    >
                        {slides.map((slide, index) => (
                            <View style={styles.slide} key={index}>
                                <Image source={slide.image} style={styles.slideImage} resizeMode="contain" />
                                <Text style={styles.slideText}>{slide.text}</Text>
                            </View>
                        ))}
                    </Swiper>
                </View>

                <View style={styles.buttonWrapper}>
                    <ButtonPrimary title="Log in" onPress={() => router.push('/(auth)/Login')} />
                </View>
                <Text style={styles.footerText}>
                    Don’t have an account?{' '}
                    <Text
                        style={styles.signUpLink}
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
        backgroundColor: Colors.background,
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
        backgroundColor: '#FFF4F4',
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
        color: Colors.text,
        fontFamily: Strings.font.semiBold,
    },
    dot: {
        backgroundColor: '#D9D9D9',
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 4,
        marginTop: 10,
    },
    activeDot: {
        backgroundColor: Colors.primary,
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
        color: Colors.text,
        textAlign: 'center',
    },
    signUpLink: {
        fontFamily: Strings.font.semiBold,
        color: Colors.alert,
    },
});

export default Onboarding;