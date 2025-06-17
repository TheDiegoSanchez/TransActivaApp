// components/InputField.tsx
import React from 'react';
import { TextInput, StyleSheet, View, Text, TextInputProps } from 'react-native';
import Colors from '../constants/Colors';
import Strings from '../constants/Strings';

interface InputFieldProps extends TextInputProps {
  label?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, ...props }) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        placeholderTextColor={Colors.secondary}
        style={styles.input}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  label: {
    fontFamily: Strings.font.semiBold,
    fontSize: 14,
    marginBottom: 4,
    color: Colors.text,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: Colors.secondary,
    fontSize: 16,
    paddingVertical: 6,
    fontFamily: Strings.font.regular,
    color: Colors.text,
  },
});

export default InputField;
