// components/InputField.tsx
import React from 'react';
import { TextInput, StyleSheet, View, Text, TextInputProps } from 'react-native';
import Colors from '../constants/Colors';
import Strings from '../constants/Strings';
import { useColorScheme } from 'react-native';

interface InputFieldProps extends TextInputProps {
  label?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, ...props }) => {
  const colorScheme = useColorScheme() ?? 'light';
  const themeColors = Colors[colorScheme];

  return (
    <View style={styles.container}>
      {label && <Text style={[styles.label, { color: themeColors.text }]}>{label}</Text>}
      <TextInput
        placeholderTextColor={themeColors.secondary}
        style={[styles.input, { color: themeColors.text, borderColor: themeColors.secondary }]}
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
  },
  input: {
    borderBottomWidth: 1,
    fontSize: 16,
    paddingVertical: 6,
    fontFamily: Strings.font.regular,
  },
});

export default InputField;
