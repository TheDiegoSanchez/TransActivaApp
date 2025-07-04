import React from 'react';
import { Image, Platform, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
export default function Boleta() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          
          <View style={styles.headerCenter}>
        
            <Text style={styles.logoText}>TRANSACTIVA</Text>
          </View>
          <View style={{ width: 30 }} />
        </View>

        <Text style={styles.title}>Boleta</Text>

        <Text style={styles.line}>.</Text>
        <Text style={styles.line}>.</Text>
        <Text style={styles.line}>.</Text>

        <TouchableOpacity style={styles.button} onPress={() => router.push('/(drawer-comprador)/Principal')}>
          <Text style={styles.buttonText}>Ir aL Inicio</Text>
        </TouchableOpacity>
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
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
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
  title: {
    fontSize: 18,
    marginVertical: 10,
  },
  line: {
    fontSize: 28,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#003366',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
