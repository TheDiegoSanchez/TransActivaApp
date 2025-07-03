import React from 'react';
import { Image, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function Boleta() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          
          <View style={styles.headerCenter}>
            <Image source={require('../../assets/images/paquete.png')} style={styles.packageIcon} />
            <Text style={styles.logoText}>TRANSACTIVA</Text>
          </View>
          <View style={{ width: 30 }} />
        </View>

        <Text style={styles.title}>Boleta</Text>

        <Text style={styles.line}>.</Text>
        <Text style={styles.line}>.</Text>
        <Text style={styles.line}>.</Text>
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
    textAlign: 'center',
    fontWeight: '600',
  },
  line: {
    fontSize: 28,
    textAlign: 'center',
  },
});
