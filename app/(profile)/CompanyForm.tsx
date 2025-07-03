import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import InputTextForm from '../../components/InputTextForm';
import ButtonPrimary from '../../components/ButtonPrimary';
import ValidationAlert from '../../components/ValidationAlert';
import { validateCompanyForm } from '../../utils/validators';
import Strings from '../../constants/Strings';
import { useThemeColors } from '../../constants/Theme';

const CompanyForm = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  const colors = useThemeColors();

  const email = params.email as string;
  const password = params.password as string;

  const [errorMessage, setErrorMessage] = useState('');

  const [formData, setFormData] = useState({
    companyName: '',
    ruc: '',
    managerName: '',
    managerDni: '',
    adminEmail: '',
    companyPhone: '',
    companyAddress: '',
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    const validationResult = validateCompanyForm(formData);

    if (validationResult) {
      setErrorMessage(validationResult);
      return;
    }

    setErrorMessage('');

    router.push({
      pathname: '/(profile)/PinInput',
      params: {
        email,
        password,
        name: formData.companyName,
        ruc: formData.ruc,
        managerName: formData.managerName,
        managerDni: formData.managerDni,
        managerEmail: formData.adminEmail,
        phone: formData.companyPhone,
        address: formData.companyAddress,
      },
    });
  };

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background }]}>
      <KeyboardAwareScrollView
        contentContainerStyle={[styles.container, { backgroundColor: colors.background }]}
        enableOnAndroid
        extraScrollHeight={20}
        keyboardShouldPersistTaps="handled"
      >
        <View style={[styles.header, { backgroundColor: colors.primary }]}>
          <Text style={styles.headerText}>Completa el último paso:</Text>
        </View>

        <View style={styles.form}>
          <InputTextForm
            label="Nombre de la empresa"
            value={formData.companyName}
            onChangeText={(text) => handleChange('companyName', text)}
          />
          <InputTextForm
            label="RUC de la empresa"
            value={formData.ruc}
            keyboardType="numeric"
            onChangeText={(text) => handleChange('ruc', text)}
          />
          <InputTextForm
            label="Nombre del encargado"
            value={formData.managerName}
            onChangeText={(text) => handleChange('managerName', text)}
          />
          <InputTextForm
            label="DNI del encargado"
            value={formData.managerDni}
            keyboardType="numeric"
            onChangeText={(text) => handleChange('managerDni', text)}
          />
          <InputTextForm
            label="Correo del administrador"
            value={formData.adminEmail}
            keyboardType="email-address"
            onChangeText={(text) => handleChange('adminEmail', text)}
          />
          <InputTextForm
            label="Número de la empresa"
            value={formData.companyPhone}
            keyboardType="phone-pad"
            onChangeText={(text) => handleChange('companyPhone', text)}
          />
          <InputTextForm
            label="Dirección de la empresa"
            value={formData.companyAddress}
            onChangeText={(text) => handleChange('companyAddress', text)}
          />

          {errorMessage !== '' && <ValidationAlert message={errorMessage} />}

          <ButtonPrimary title="Siguiente" onPress={handleSubmit} />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
    maxWidth: 400,
  },
  headerText: {
    color: '#FFF',
    fontSize: 18,
    fontFamily: Strings.font.semiBold,
  },
  form: {
    width: '100%',
    maxWidth: 400,
  },
});

export default CompanyForm;
