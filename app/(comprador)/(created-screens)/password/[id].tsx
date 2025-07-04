import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const { width } = Dimensions.get('window');

export default function IngresarPin() {
  const [pin, setPin] = useState('');
  const router = useRouter();

  const handlePress = (digit: string) => {
    if (pin.length < 6) {
      const nuevoPin = pin + digit;
      setPin(nuevoPin);

      if (nuevoPin.length === 6) {
        setTimeout(() => {
          router.push('/(comprador)/(payment-screens)/pay/[id]');
        }, 300);
      }
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
          
          </View>
          <View style={styles.headerCenter}>
            
            <Text style={styles.logoText}>TRANSACTIVA</Text>
          </View>
          <View style={{ width: 30 }} />
        </View>

        <Text style={styles.title}>Ingresa tu pin de seguridad</Text>

        <TextInput
          value={pin}
          style={styles.input}
          editable={false}
          secureTextEntry
          maxLength={6}
        />

        <View style={styles.keypad}>
          {['1','2','3','4','5','6','7','8','9','0'].map((digit, i) => (
            <TouchableOpacity
              key={i}
              style={styles.key}
              onPress={() => handlePress(digit)}
            >
              <Text style={styles.keyText}>{digit}</Text>
            </TouchableOpacity>
          ))}
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
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  headerLeft: { width: 30 },
  headerCenter: { flexDirection: 'row', alignItems: 'center' },
  menuIcon: { width: 30, height: 30, tintColor: '#003366' },
  packageIcon: { width: 30, height: 30, marginRight: 6 },
  logoText: { fontSize: 20, fontWeight: 'bold', color: '#000' },

  title: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 6,
    padding: 12,
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  keypad: {
    marginTop: 80, // 🔥 Ajuste importante
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 12,
  },
  key: {
    backgroundColor: '#003366',
    width: (width - 80) / 3,
    height: (width - 80) / 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  keyText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
