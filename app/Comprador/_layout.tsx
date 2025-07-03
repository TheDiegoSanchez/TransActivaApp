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
          backgroundColor: '#FFFFFF',
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
        name="menuindex"
        options={{
          drawerLabel: 'Inicio',
          title: 'TransActiva',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="pedidos-preparados"
        options={{
          drawerLabel: 'Pedidos Preparados',
          title: 'Pedidos Preparados',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="cube-outline" size={size} color={color} />
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
    <Drawer.Screen name="+not-found" options={{ drawerLabel: () => null, title: 'Información del Pedido', drawerItemStyle: { height: 0 } }} />
    <Drawer.Screen name="boleta" options={{ drawerLabel: () => null, title: 'Boleta', drawerItemStyle: { height: 0 } }} />
    <Drawer.Screen name="detalle-envio" options={{ drawerLabel: () => null, title: 'Detalle de Envío', drawerItemStyle: { height: 0 } }} />
    <Drawer.Screen name="detalle-pedido-nuevo" options={{ drawerLabel: () => null, title: 'Detalle Pedido Nuevo', drawerItemStyle: { height: 0 } }} />
    <Drawer.Screen name="detalle-preparacion" options={{ drawerLabel: () => null, title: 'Detalle Preparación', drawerItemStyle: { height: 0 } }} />
    <Drawer.Screen name="esperando-proveedor" options={{ drawerLabel: () => null, title: 'Esperando Proveedor', drawerItemStyle: { height: 0 } }} />
    <Drawer.Screen name="HomeScreenComprador" options={{ drawerLabel: () => null, title: 'Inicio Comprador', drawerItemStyle: { height: 0 } }} />
    <Drawer.Screen name="index" options={{ drawerLabel: () => null, title: 'Index', drawerItemStyle: { height: 0 } }} />
    <Drawer.Screen name="pago" options={{ drawerLabel: () => null, title: 'Pago', drawerItemStyle: { height: 0 } }} />
    <Drawer.Screen name="pantalla-principal" options={{ drawerLabel: () => null, title: 'Pantalla Principal', drawerItemStyle: { height: 0 } }} />
    <Drawer.Screen name="pedidos-realizados" options={{ drawerLabel: () => null, title: 'Pedidos Realizados', drawerItemStyle: { height: 0 } }} />
    <Drawer.Screen name="realizar-pedido" options={{ drawerLabel: () => null, title: 'Realizar Pedido', drawerItemStyle: { height: 0 } }} />
    <Drawer.Screen name="resumen-pedido" options={{ drawerLabel: () => null, title: 'Resumen Pedido', drawerItemStyle: { height: 0 } }} />
    <Drawer.Screen name="solicitud-aceptada" options={{ drawerLabel: () => null, title: 'Solicitud Aceptada', drawerItemStyle: { height: 0 } }} />

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
    width: 140,
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
