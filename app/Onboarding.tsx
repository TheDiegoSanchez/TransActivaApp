import React, { useState } from 'react';
import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Swiper from 'react-native-web-swiper';

const { width, height } = Dimensions.get('window');

const Onboarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <View style={styles.container}>
      <Swiper
        loop={false}
        controlsEnabled={false}
        containerStyle={{ flex: 1 }}
        onIndexChanged={(index) => setCurrentIndex(index)}
      >
        {/* Slide 1 - Mapa del Perú */}
        <View style={styles.slide}>
          <Image
            source={require('../assets/images/bg_slide1.jpeg')}
            style={styles.backgroundImage}
          />

          <TouchableOpacity style={styles.skipButton}>
            <Text style={styles.skipText}>OMITIR</Text>
          </TouchableOpacity>

          <View style={styles.mapContainer}>
            <Image
              source={require('../assets/images/mapa_peru.png')}
              style={styles.map}
            />
            <Image
              source={require('../assets/images/pin.png')}
              style={[styles.pin, { top: '30%', left: '40%' }]}
            />
            <Image
              source={require('../assets/images/pin.png')}
              style={[styles.pin, { top: '45%', left: '55%' }]}
            />
            <Image
              source={require('../assets/images/pin.png')}
              style={[styles.pin, { top: '55%', left: '35%' }]}
            />
            <Image
              source={require('../assets/images/pin.png')}
              style={[styles.pin, { top: '65%', left: '60%' }]}
            />
          </View>

          <Text style={styles.caption}>
            ¡ENVÍA DE FORMA SEGURA A NIVEL NACIONAL!
          </Text>
        </View>

        {/* Slide 2 - Hombre */}
        <View style={styles.slide}>
          <Image
            source={require('../assets/images/slide2_hombre.jpeg')}
            style={styles.backgroundImage}
          />

          <TouchableOpacity style={styles.skipButton}>
            <Text style={styles.skipText}>OMITIR</Text>
          </TouchableOpacity>

          <Text style={styles.caption}>
            ¡INFORMACIÓN AL INSTANTE SIN COMPLICACIONES!
          </Text>
        </View>

        {/* Slide 3 - Rompecabezas */}
        <View style={styles.slide}>
          <Image
            source={require('../assets/images/slide3_rompecabezas.jpeg')}
            style={styles.backgroundImage}
          />

          <TouchableOpacity style={styles.skipButton}>
            <Text style={styles.skipText}>OMITIR</Text>
          </TouchableOpacity>

          <Text style={styles.caption}>
            ¡NOS ADAPTAMOS A LO QUE NECESITAS!
          </Text>
        </View>

        {/* Slide 4 - Entrega de caja */}
        <View style={styles.slide}>
          <Image
            source={require('../assets/images/slide4_entrega.jpeg')}
            style={styles.backgroundImage}
          />

          <TouchableOpacity style={styles.skipButton}>
            <Text style={styles.skipText}>OMITIR</Text>
          </TouchableOpacity>

          <Text style={styles.caption}>
            ¡PAGAS AL RECIBIR SIN SORPRESAS, SOLO CONFIANZA!
          </Text>
        </View>
      </Swiper>

      {/* Dots dinámicos */}
      <View style={styles.dotsContainer}>
        {[0, 1, 2, 3].map((_, i) => (
          <View
            key={i}
            style={[styles.dot, currentIndex === i && styles.activeDot]}
          />
        ))}
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    width,
    height,
    position: 'relative',
  },
  backgroundImage: {
    width,
    height,
    position: 'absolute',
    resizeMode: 'cover',
  },
  skipButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    zIndex: 10,
  },
  skipText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 14,
  },
  caption: {
    position: 'absolute',
    bottom: 100,
    alignSelf: 'center',
    color: '#000',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  dotsContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
  },
  dot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#ddd',
    marginHorizontal: 6,
  },
  activeDot: {
    backgroundColor: '#1e6091',
  },
  mapContainer: {
    width: width * 0.7,
    height: height * 0.45,
    alignSelf: 'center',
    marginTop: height * 0.15,
    position: 'relative',
  },
  map: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  pin: {
    position: 'absolute',
    width: 16,
    height: 16,
    resizeMode: 'contain',
  },
});
