import { Drawer } from 'expo-router/drawer';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
export default function DrawerLayout() {
  const router = useRouter();
  return (
    <Drawer
      drawerContent={(props) => (
        <View style={styles.drawerContainer}>
          <DrawerContentScrollView {...props} contentContainerStyle={styles.scrollArea}>
            <DrawerItem
              label="Inicio"
              onPress={() => router.push('/(drawer-vendedor)/VentaScreen')}
            />
            <DrawerItem
              label="Solicitudes"
              onPress={() => router.push('/(drawer-vendedor)/SolicitudScreen')}
            />
            <DrawerItem
              label="Mis Preparaciones"
              onPress={() => router.push('/(drawer-vendedor)/ListPrepareScreen')}
            />
          </DrawerContentScrollView>
          <View style={styles.logoutContainer}>
            <DrawerItem
              label="Cerrar sesión"
              labelStyle={{ color: 'red', fontWeight: 'bold' }}
              onPress={async () => {
                await AsyncStorage.removeItem('userToken');
                router.replace('/(auth)/Onboarding');
              }}
            />
          </View>
        </View>
      )}
      screenOptions={{
        headerShown: true,
        drawerType: 'slide',
        drawerStyle: {
          backgroundColor: '#FFF',
          width: 240,
        },
      }}
    />
  );
}
const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: 40,
    paddingBottom: 30,
  },
  scrollArea: {
    paddingTop: 0,
  },
  logoutContainer: {
    paddingBottom: 20,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
});
