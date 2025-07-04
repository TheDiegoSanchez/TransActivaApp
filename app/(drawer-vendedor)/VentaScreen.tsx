import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const Colors = {
  primaryBlue: '#1A435E', 
  lightGrayText: '#A9A9A9', 
  white: '#FFFFFF', 
  black: '#000000', 
  darkGray: '#333333', 
  lightBackground: '#F9F9F9', 
  cardBackground: '#FFFFFF', 
  accentOrange: '#FFA500', 
  accentGreen: '#4CAF50', 
};
interface BottomBarIconProps {
  iconName: 'cube' | 'briefcase';
  label: string;
  onPress: () => void;
  isActive: boolean;
}

const Principal: React.FC = () => {
  const router = useRouter();
  const goToSolicitudes = () => {
    console.log('Navegar a Solicitudes (SolicitudesScreen)');
    router.push('/(drawer-vendedor)/SolicitudScreen');
  };
  const goToPreparar = () => {
    console.log('Navegar a Lista de Preparación (ListPrepareScreen)');
    router.push('/(drawer-vendedor)/ListPrepareScreen');
  };
  const goToCreateOrder = () => {
    console.log('Navegar a Crear Nuevo Pedido (CreateOrderScreen)');
    router.push('/(drawer)/CreateOrderScreen');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.mainContent}>
          <View style={styles.welcomeCard}>
            <Text style={styles.welcomeTitle}>¡Bienvenido de nuevo!</Text>
            <Text style={styles.welcomeSubtitle}>Tu dashboard de envíos está listo.</Text>
            <Ionicons name="earth-outline" size={80} color={Colors.primaryBlue} style={styles.welcomeIcon} />
          </View>

          <View style={styles.quickAccessContainer}>
            <Text style={styles.quickAccessTitle}>Accesos Rápidos</Text>
            <View style={styles.quickAccessGrid}>        
              <TouchableOpacity style={styles.quickAccessItem} onPress={goToSolicitudes}>
                <Ionicons name="cube-outline" size={40} color={Colors.accentOrange} />
                <Text style={styles.quickAccessText}>Ver Solicitudes</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.quickAccessItem} onPress={goToPreparar}>
                <Ionicons name="briefcase-outline" size={40} color={Colors.primaryBlue} />
                <Text style={styles.quickAccessText}>Mis Preparaciones</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.infoCardTitle}>Resumen de Actividad</Text>
            <View style={styles.infoDetailRow}>
              <Text style={styles.infoDetailLabel}>Pedidos en curso:</Text>
              <Text style={styles.infoDetailValue}>5</Text>
            </View>
            <View style={styles.infoDetailRow}>
              <Text style={styles.infoDetailLabel}>Pedidos entregados hoy:</Text>
              <Text style={styles.infoDetailValue}>2</Text>
            </View>
            <TouchableOpacity style={styles.viewMoreButton}>
              <Text style={styles.viewMoreButtonText}>Ver Más Detalles</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </View>
  
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.lightBackground,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.lightBackground,
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
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
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
    flexGrow: 1, // Permite que el contenido sea scrollable
    padding: 20,
    paddingBottom: 110, // Espacio para la barra de navegación
  },
  welcomeCard: {
    backgroundColor: Colors.white,
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  welcomeTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: Colors.primaryBlue,
    marginBottom: 5,
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: Colors.darkGray,
    marginBottom: 15,
    textAlign: 'center',
  },
  welcomeIcon: {
    marginTop: 10,
    marginBottom: 5,
  },
  quickAccessContainer: {
    backgroundColor: Colors.white,
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  quickAccessTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.black,
    marginBottom: 15,
    textAlign: 'center',
  },
  quickAccessGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  quickAccessItem: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '30%', // Ajusta el ancho para 3 columnas (aprox.)
    paddingVertical: 15,
    marginVertical: 5,
    marginHorizontal: '1.5%', // Espacio entre ítems
  },
  quickAccessText: {
    fontSize: 14,
    color: Colors.darkGray,
    marginTop: 8,
    textAlign: 'center',
  },
  infoCard: {
    backgroundColor: Colors.white,
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  infoCardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.black,
    marginBottom: 15,
  },
  infoDetailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#F5F5F5',
  },
  infoDetailLabel: {
    fontSize: 16,
    color: Colors.darkGray,
  },
  infoDetailValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.primaryBlue,
  },
  viewMoreButton: {
    backgroundColor: Colors.primaryBlue,
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 15,
    alignItems: 'center',
  },
  viewMoreButtonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
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

export default Principal;

export const meta = {
  drawerLabel: 'Inicio',
};