import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function PinScreen() {
  const [pin, setPin] = useState('');
  const router = useRouter();

  const handlePress = (digit: string) => {
    if (pin.length < 6) {
      const newPin = pin + digit;
      setPin(newPin);
      if (newPin.length === 6) {
        setTimeout(() => {
          router.push('/role');
        }, 300);
      }
    }
  };

  return (
    <View style={styles.container}>
      {/* Encabezado central con logo e icono de menú */}
      <View style={styles.headerWrapper}>
        <Ionicons name="menu" size={28} color="black" style={styles.menuIcon} />
        <View style={styles.logoContainer}>
          <Image source={require('../assets/images/caja.png')} style={styles.logo} />
          <Text style={styles.logoText}>TRANSACTIVA</Text>
        </View>
      </View>

      {/* Título */}
      <Text style={styles.title}>Agregar tu código de Seguridad</Text>

      {/* Campo de entrada de PIN */}
      <TextInput
        style={styles.input}
        value={'•'.repeat(pin.length)}
        editable={false}
        maxLength={6}
        placeholder="••••••"
        placeholderTextColor="#888"
      />

      {/* Teclado numérico */}
      <View style={styles.keypad}>
        {['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', ''].map((num, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.key, num === '' && { backgroundColor: 'transparent' }]}
            onPress={() => handlePress(num)}
            disabled={num === ''}
          >
            <Text style={styles.keyText}>{num}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginBottom: 20,
    marginTop: 10,
  },
  menuIcon: {
    position: 'absolute',
    left: 0,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginRight: 8,
  },
  logoText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 8,
    fontSize: 24,
    height: 50,
    textAlign: 'center',
    letterSpacing: 10,
    marginBottom: 30,
  },
  keypad: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    maxWidth: 270,
    alignSelf: 'center',
  },
  key: {
    width: 70,
    height: 70,
    backgroundColor: '#043E63',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 8,
  },
  keyText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
