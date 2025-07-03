// components/ButtonPrimary.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';
import Colors from '../constants/Colors';
import Strings from '../constants/Strings';
import { useColorScheme } from 'react-native';

interface ButtonPrimaryProps extends TouchableOpacityProps {
  title: string;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ title, ...props }) => {
  const colorScheme = useColorScheme() ?? 'light';
  const themeColors = Colors[colorScheme];

  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: themeColors.buttonBackground }]} activeOpacity={0.8} {...props}>
      <Text style={[styles.buttonText, { color: themeColors.buttonText }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: Strings.font.bold,
  },
});

export default ButtonPrimary;
