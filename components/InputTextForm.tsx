import React from 'react';
import { View, TextInput, StyleSheet, Text, TextInputProps } from 'react-native';
import Colors from '../constants/Colors';
import Strings from '../constants/Strings';

interface InputTextFormProps extends TextInputProps {
  label: string;
}

const InputTextForm: React.FC<InputTextFormProps> = ({ label, ...props }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholderTextColor={Colors.secondary}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
  label: {
    fontFamily: Strings.font.semiBold,
    fontSize: 14,
    marginBottom: 4,
    color: Colors.text,
  },
  input: {
    backgroundColor: Colors.background,
    borderColor: Colors.secondary,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    fontFamily: Strings.font.regular,
    color: Colors.text,
  },
});

export default InputTextForm;
