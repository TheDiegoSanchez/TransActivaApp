// components/ButtonPrimary.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';
import Colors from '../constants/Colors';
import Strings from '../constants/Strings';

interface ButtonPrimaryProps extends TouchableOpacityProps {
  title: string;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ title, ...props }) => {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.8} {...props}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: Strings.font.bold,
  },
});

export default ButtonPrimary;
