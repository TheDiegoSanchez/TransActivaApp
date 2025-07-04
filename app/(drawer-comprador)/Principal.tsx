import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import {
  Dimensions,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import Colors from '../../constants/Colors';
import Strings from '../../constants/Strings';

const { width } = Dimensions.get('window');

const Principal: React.FC = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>

        {/* Imagen centrada cuando no hay datos */}
        <View style={styles.emptyContainer}>
          <Image
            source={require('../../assets/empty_box.png')}
            style={styles.emptyImage}
            resizeMode="contain"
          />
        </View>

        {/* Botón flotante */}
        <View style={styles.plusWrapper}>
          <TouchableOpacity
            style={styles.plusButton}
            onPress={() => router.push('/(comprador)/(created-screens)/made/[id]')}
          >
            <Ionicons name="add" size={36} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    position: 'relative',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  emptyText: {
    fontSize: 16,
    color: Colors.text,
    fontFamily: Strings.font.medium,
    textAlign: 'center',
  },
  plusWrapper: {
    position: 'absolute',
    bottom: 45,
    left: (width - 70) / 2,
    zIndex: 10,
  },
  plusButton: {
    backgroundColor: '#005599',
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
  },
});

export default Principal;
