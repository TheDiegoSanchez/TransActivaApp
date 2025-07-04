import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import {
  Dimensions,
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const { width } = Dimensions.get('window');

export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Imagen central */}
        <View style={styles.imageContainer}>
          <Image
            style={styles.boxImage}
            resizeMode="contain"
          />
        </View>

        {/* Botón flotante centrado */}
        <View style={styles.plusWrapper}>
          <TouchableOpacity
            style={styles.plusButton}
            onPress={() => router.push('/realizar-pedido')}
          >
            <Ionicons name="add" size={36} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Barra inferior */}
        <View style={styles.bottomBar}>
          <TouchableOpacity
            style={styles.navItem}
            onPress={() => router.push('/pedidos-realizados')} // <- Modificado aquí
          >

            <Text style={styles.navText}>Pedidos</Text>
          </TouchableOpacity>

          {/* Espacio reservado para el botón "+" */}
          <View style={{ width: 60 }} />

          <TouchableOpacity
            style={styles.navItem}
            onPress={() => router.push('/pedidos-preparados')}
          >
            <Text style={styles.navText}>Preparados</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 40 : 0,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    position: 'relative',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  headerLeft: {
    width: 30,
  },
  headerCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIcon: {
    width: 30,
    height: 30,
    tintColor: '#003366',
  },
  packageIcon: {
    width: 30,
    height: 30,
    marginRight: 6,
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxImage: {
    width: 200,
    height: 200,
  },
  plusWrapper: {
    position: 'absolute',
    bottom: 45,
    left: (width - 70) / 2,
    zIndex: 10,
  },
  plusButton: {
    backgroundColor: '#005599',
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#003366',
    paddingHorizontal: 40,
    paddingTop: 10,
    paddingBottom: Platform.OS === 'android' ? 30 : 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  navIcon: {
    width: 26,
    height: 26,
    tintColor: '#fff',
    marginBottom: 2,
  },
  navText: {
    color: 'white',
    fontSize: 12,
  },
});
