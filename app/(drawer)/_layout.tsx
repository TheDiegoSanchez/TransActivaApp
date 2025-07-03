// app/(drawer)/_layout.tsx

import { Drawer } from 'expo-router/drawer';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { View, StyleSheet, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

export default function Layout() {
  const router = useRouter();

  return (
    <Drawer
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#FFFFFF', // ✅ Fondo blanco
        },
      }}
      drawerContent={(props) => (
        <View style={{ flex: 1, justifyContent: 'space-between' }}>
          <DrawerContentScrollView {...props}>
            <View style={styles.logoContainer}>
              <Image
                source={require('../../assets/logo.jpg')}
                style={styles.logo}
              />
            </View>
            <DrawerItemList {...props} />
          </DrawerContentScrollView>

          <View style={styles.logoutContainer}>
            <DrawerItem
              label="Cerrar sesión"
              labelStyle={{ color: 'red', fontWeight: 'bold' }}
              icon={({ size }) => (
                <Ionicons name="log-out-outline" size={size} color="red" />
              )}
              onPress={async () => {
                await AsyncStorage.removeItem('userToken');
                router.replace('/(auth)/Login');
              }}
            />
          </View>
        </View>
      )}
    >
      {/* Pantallas visibles */}
      <Drawer.Screen
        name="HomeScreen"
        options={{
          drawerLabel: 'Inicio',
          title: 'TransActiva',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="SolicitudesScreen"
        options={{
          drawerLabel: 'Solicitudes',
          title: 'Solicitudes',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="cube-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="ListPrepareScreen"
        options={{
          drawerLabel: 'Lista de Preparación',
          title: 'Lista de Preparación',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="briefcase-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="SettingsScreen"
        options={{
          drawerLabel: 'Configuraciones',
          title: 'Configuraciones',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" size={size} color={color} />
          ),
        }}
      />

      {/* Pantallas ocultas */}
      <Drawer.Screen name="PrepareOrder" options={{ drawerLabel: () => null, title: 'Información del Pedido', drawerItemStyle: { height: 0 } }} />
      <Drawer.Screen name="CreateOrderScreen" options={{ drawerLabel: () => null, title: 'Preparar Nueva Orden', drawerItemStyle: { height: 0 } }} />
      <Drawer.Screen name="OrderDetailScreen" options={{ drawerLabel: () => null, title: 'Detalle del Pedido', drawerItemStyle: { height: 0 } }} />
      <Drawer.Screen name="PaymentPendingScreen" options={{ drawerLabel: () => null, title: 'Pago Pendiente', drawerItemStyle: { height: 0 } }} />
      <Drawer.Screen name="InvoiceScreen" options={{ drawerLabel: () => null, title: 'Boleta', drawerItemStyle: { height: 0 } }} />
      <Drawer.Screen name="ShipProductScreen" options={{ drawerLabel: () => null, title: 'Preparar Producto', drawerItemStyle: { height: 0 } }} />
      <Drawer.Screen name="CarrierInfoScreen" options={{ drawerLabel: () => null, title: 'Información Transportista', drawerItemStyle: { height: 0 } }} />
      <Drawer.Screen name="ProductSentScreen" options={{ drawerLabel: () => null, title: 'Producto Enviado', drawerItemStyle: { height: 0 } }} />
      <Drawer.Screen name="PrepareOrderDetailScreen" options={{ drawerLabel: () => null, title: 'Detalle del Orden', drawerItemStyle: { height: 0 } }} />
    </Drawer>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    paddingVertical: 35,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    marginBottom: 10,
  },
  logo: {
    width: 140, // ✅ Más grande
    height: 140,
    resizeMode: 'contain',
    borderRadius: 20,
  },
  logoutContainer: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingVertical: 10,
  },
});
