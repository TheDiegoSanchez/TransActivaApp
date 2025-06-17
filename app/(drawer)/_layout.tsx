import { Drawer } from 'expo-router/drawer';

export default function DrawerLayout() {
  return (
    <Drawer
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
