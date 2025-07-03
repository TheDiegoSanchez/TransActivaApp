import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import Strings from '../constants/Strings';
import { useColorScheme } from 'react-native';

interface Props {
  message: string;
}

const ValidationAlert: React.FC<Props> = ({ message }) => {
  const colorScheme = useColorScheme() ?? 'light';
  const themeColors = Colors[colorScheme];

  if (!message) return null;

  return (
    <View style={[styles.container, { borderLeftColor: themeColors.alert }]}>
      <Text style={[styles.text, { color: themeColors.text }]}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FDDCDC',
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
