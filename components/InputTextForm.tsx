import React from 'react';
import { View, TextInput, StyleSheet, Text, TextInputProps } from 'react-native';
import Colors from '../constants/Colors';
import Strings from '../constants/Strings';
import { useColorScheme } from 'react-native';

interface InputTextFormProps extends TextInputProps {
  label: string;
}

const InputTextForm: React.FC<InputTextFormProps> = ({ label, ...props }) => {
  const colorScheme = useColorScheme() ?? 'light';
  const themeColors = Colors[colorScheme];

  return (
    <View style={styles.container}>
      <Text style={[styles.label, { color: themeColors.text }]}>{label}</Text>
      <TextInput
        style={[
          styles.input,
          {
            backgroundColor: themeColors.background,
            borderColor: themeColors.secondary,
            color: themeColors.text,
          },
        ]}
        placeholderTextColor={themeColors.secondary}
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
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    fontFamily: Strings.font.regular,
  },
});

export default InputTextForm;
