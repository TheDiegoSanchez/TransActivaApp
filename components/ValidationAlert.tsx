import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import Strings from '../constants/Strings';

interface Props {
  message: string;
}

const ValidationAlert: React.FC<Props> = ({ message }) => {
  if (!message) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FDDCDC',
    borderLeftWidth: 4,
    borderLeftColor: Colors.alert,
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  text: {
    color: Colors.text,
    fontSize: 14,
    fontFamily: Strings.font.regular,
  },
});

export default ValidationAlert;