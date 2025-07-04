import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import Strings from '../constants/Strings';

interface Props {
  message: string;
  type?: 'success' | 'error';
}

const ValidationAlert: React.FC<Props> = ({ message, type = 'error' }) => {
  if (!message) return null;

  const backgroundColor = type === 'success' ? '#D4EDDA' : '#FDDCDC';
  const borderColor = type === 'success' ? '#28A745' : Colors.alert;
  const textColor = type === 'success' ? '#155724' : Colors.text;

  return (
    <View style={[styles.container, { backgroundColor, borderLeftColor: borderColor }]}>
      <Text style={[styles.text, { color: textColor }]}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderLeftWidth: 4,
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 14,
    fontFamily: Strings.font.regular,
  },
});

export default ValidationAlert;
