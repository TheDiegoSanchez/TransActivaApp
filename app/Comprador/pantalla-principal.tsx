import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function PantallaPrincipal() {
  return (
    <View style={styles.container}>
      {/* Imagen central */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/caja.png')}
          style={styles.boxImage}
          resizeMode="contain"
        />
      </View>

      {/* Barra inferior */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={require('../../assets/images/caja.png')}
            style={styles.navIcon}
            resizeMode="contain"
          />
          <Text style={styles.navText}>Pedidos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.plusButton}>
          <Ionicons name="add" size={36} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Image
            source={require('../../assets/images/agregar-paquete.png')}
            style={styles.navIcon}
            resizeMode="contain"
          />
          <Text style={styles.navText}>Preparados</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 10,
  },
  menuIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
    tintColor: '#003366',
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
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#003366',
    height: 70,
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
  plusButton: {
    backgroundColor: '#005599',
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
