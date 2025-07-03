// app/(drawer)/PrepareOrder.tsx

import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const Colors = {
  primaryBlue: '#1A435E', // Azul marino oscuro
  lightPinkBorder: '#F0DCDC',
  lightGrayText: '#A9A9A9',
  white: '#FFFFFF', // Fondo blanco
  black: '#000000',
  accentGreen: '#4CAF50',
  darkGray: '#333333',
  lightBackground: '#F9F9F9',
};

interface BottomBarIconProps {
  iconName: 'cube' | 'briefcase';
  label: string;
  onPress: () => void;
  isActive: boolean;
}

const BottomBarIcon: React.FC<BottomBarIconProps> = ({ iconName, label, onPress, isActive }) => {
  let iconComponent;
  const iconColor = isActive ? Colors.white : Colors.lightGrayText;

  if (iconName === 'cube') {
    iconComponent = <Ionicons name="cube" size={28} color={iconColor} />;
  } else if (iconName === 'briefcase') {
    iconComponent = <Ionicons name="briefcase" size={28} color={iconColor} />;
  } else {
    iconComponent = <Ionicons name="alert-circle-outline" size={28} color={iconColor} />;
  }

  return (
    <TouchableOpacity style={styles.bottomBarItem} onPress={onPress}>
      {iconComponent}
      <Text style={[styles.bottomBarLabel, { color: isActive ? Colors.white : Colors.lightGrayText }]}>{label}</Text>
    </TouchableOpacity>
  );
};

const PrepareOrderScreen: React.FC = () => { // Renombrado a PrepareOrderScreen para evitar conflictos con el archivo
  const router = useRouter(); 

  const goToSolicitudes = () => {
    console.log('Navegar a Solicitudes (SolicitudesScreen)');
    router.push('/(drawer)/SolicitudesScreen');
  };

  const goToPreparar = () => {
    console.log('Navegar a Lista de Preparación (ListPrepareScreen)');
    router.push('/(drawer)/ListPrepareScreen');
  };

  const goToCreateOrder = () => {
    console.log('Navegar a Crear Pedido (CreateOrderScreen)');
    router.push('/(drawer)/CreateOrderScreen');
  };

  // FUNCION AÑADIDA PARA RETROCEDER A HOMESCREEN
  const goBackToHome = () => {
    router.replace('/(drawer)/HomeScreen'); // Usar replace para evitar que HomeScreen se apile varias veces
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header personalizado CON EL BOTÓN DE RETROCESO AÑADIDO waaa */}

        {/* Contenido Principal: "Agregue su primer paquete" */}
        <View style={styles.mainContent}>
          {/* Aquí se convierte la caja en un TouchableOpacity */}
          <TouchableOpacity style={styles.contentBox} onPress={goToCreateOrder}>
            <Image
              source={require('../../assets/empty_box.png')}
              style={styles.largeBoxIcon}
            />
            <Text style={styles.addPackageText}>Agregue su primer paquete</Text>
          </TouchableOpacity>
        </View>

        {/* Bottom Navigation */}
        <View style={styles.bottomNavBar}>
          <BottomBarIcon iconName="cube" label="Solicitudes" onPress={goToSolicitudes} isActive={false} />
          <BottomBarIcon iconName="briefcase" label="Preparar" onPress={goToPreparar} isActive={false} />
        </View>
      </View>
      {/* View para cubrir el espacio debajo de la barra de navegación */}
      <View style={styles.bottomFill} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    backgroundColor: Colors.white,
  },
  // NUEVOS ESTILOS PARA EL BOTÓN DE RETROCESO
  backButton: {
    position: 'absolute', // Posiciona el botón de forma absoluta dentro del header
    left: 15, // Distancia desde el borde izquierdo
    zIndex: 10, // Asegura que esté por encima de otros elementos
    padding: 5, // Área de toque más grande para facilitar la interacción
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // Ajuste para centrar el logo y texto TransActiva cuando el backButton está presente
    // El tamaño del icono arrow-back es 24, así que restamos la mitad para centrar:
    marginLeft: -24 / 2, // Ajusta si el tamaño de tu icono arrow-back es diferente (ej: -12 para un icono de 24px)
  },
  // FIN NUEVOS ESTILOS
  logoImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginRight: 8,
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.black,
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 110, // Aumentar el padding para compensar la barra elevada
  },
  contentBox: { // Esta View se convierte en TouchableOpacity
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '85%',
    maxWidth: 350,
    aspectRatio: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  largeBoxIcon: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 15,
  },
  addPackageText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.lightGrayText,
    textAlign: 'center',
  },
  bottomNavBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: Colors.primaryBlue,
    height: 70,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
  },
  bottomBarItem: {
    alignItems: 'center',
  },
  bottomBarLabel: {
    fontSize: 12,
    fontWeight: '600',
  },
  bottomFill: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 40,
    backgroundColor: Colors.primaryBlue,
  },
});

export default PrepareOrderScreen;