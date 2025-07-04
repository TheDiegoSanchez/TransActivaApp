import React, { useCallback } from 'react';
import { View, Text, BackHandler, StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

const CompraScreen = () => {
  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => true;
      const subscription = BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () => {
        subscription.remove();
      };
    }, [])
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Vista principal para el Comprador</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CompraScreen;
