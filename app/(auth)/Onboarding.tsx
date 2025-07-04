import React, { useState, useRef } from 'react';
import { NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import {
    View,
    Text,
    Image,
    StyleSheet,
    FlatList,
    Dimensions,
} from 'react-native';
import { useRouter } from 'expo-router';
import Colors from '../../constants/Colors';
import Strings from '../../constants/Strings';
import ButtonPrimary from '../../components/ButtonPrimary';

const { width } = Dimensions.get('window');

const CAROUSEL_HEIGHT = 400;

const slides = [
    {
        image: require('../../assets/OnBoarding/Arequipa.png'),
        text: '¡Desde almacén a destino!',
    },
    {
        image: require('../../assets/OnBoarding/Llama.png'),
        text: 'Envía de forma segura a nivel nacional',
    },
    {
        image: require('../../assets/OnBoarding/Persona.png'),
        text: '¡Información al instante sin complicaciones!',
    },
    {
        image: require('../../assets/OnBoarding/Juego.png'),
        text: '¡Nos adaptamos a lo que necesitas!',
    },
    {
        image: require('../../assets/OnBoarding/Entrega.png'),
        text: '¡Pagas al recibir sin sorpresas!',
    },
];

const Onboarding = () => {
    const router = useRouter();
    const [activeIndex, setActiveIndex] = useState(0);
    const flatListRef = useRef(null);

    const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
        const index = Math.round(e.nativeEvent.contentOffset.x / width);
        setActiveIndex(index);
    };

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Image
                    source={require('../../assets/logo.jpg')}
                    style={styles.logo}
                    resizeMode="contain"
                />

                <View style={styles.swiperWrapper}>
                    <FlatList
                        ref={flatListRef}
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        data={slides}
                        keyExtractor={(_, index) => index.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.slide}>
                                <Image source={item.image} style={styles.slideImage} />
                            </View>
                        )}
                        onScroll={onScroll}
                        scrollEventThrottle={16}
                    />
                </View>

                <Text style={styles.slideText}>{slides[activeIndex].text}</Text>

                <View style={styles.dotsWrapper}>
                    {slides.map((_, index) => (
                        <View
                            key={index}
                            style={[
                                styles.dot,
                                activeIndex === index && styles.activeDot,
                            ]}
                        />
                    ))}
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
        overflow: 'hidden',
    },
    slide: {
        width: width * 0.9,
        height: CAROUSEL_HEIGHT,
    },
    slideImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    slideText: {
        fontSize: 16,
        textAlign: 'center',
        color: Colors.text,
        fontFamily: Strings.font.semiBold,
        marginTop: 16,
        paddingHorizontal: 20,
    },
    dotsWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 12,
    },
    dot: {
        backgroundColor: '#D9D9D9',
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 4,
    },
    activeDot: {
        backgroundColor: Colors.primary,
        width: 10,
        height: 10,
        borderRadius: 5,
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