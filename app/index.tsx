import { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useRouter } from 'expo-router';

export default function RegisterScreen() {
  const router = useRouter();

  const [form, setForm] = useState({
    empresa: '',
    ruc: '',
    encargado: '',
    dni: '',
    correo: '',
    numero: '',
    direccion: '',
  });

  const [errors, setErrors] = useState({
    ruc: '',
    dni: '',
  });

  const numericFields = ['ruc', 'dni', 'numero'];

  const handleChange = (key: string, value: string) => {
    const cleanedValue = numericFields.includes(key)
      ? value.replace(/[^0-9]/g, '')
      : value;

    setForm({ ...form, [key]: cleanedValue });

    if (key === 'ruc') {
      setErrors((prev) => ({
        ...prev,
        ruc:
          cleanedValue.length > 0 && cleanedValue.length !== 11
            ? 'El RUC debe tener 11 dígitos'
            : '',
      }));
    }

    if (key === 'dni') {
      setErrors((prev) => ({
        ...prev,
        dni:
          cleanedValue.length > 0 && cleanedValue.length !== 8
            ? 'El DNI debe tener 8 dígitos'
            : '',
      }));
    }
  };

  const isFormValid = () => {
    const { empresa, ruc, encargado, dni, correo, numero, direccion } = form;
    const allFilled =
      empresa && ruc && encargado && dni && correo && numero && direccion;
    const noErrors = errors.ruc === '' && errors.dni === '';
    const rucValid = ruc.length === 11;
    const dniValid = dni.length === 8;

    return allFilled && noErrors && rucValid && dniValid;
  };

  const handleSubmit = () => {
    if (isFormValid()) {
      router.push('/pin');
    } else {
      Alert.alert('Por favor, completa todos los campos correctamente');
    }
  };

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.flex}
      >
        <View style={styles.header}>
          <Text style={styles.headerText}>Completa el último paso:</Text>
        </View>

        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {[
            { label: 'Nombre de la empresa', key: 'empresa' },
            { label: 'RUC de la empresa', key: 'ruc' },
            { label: 'Nombre del encargado', key: 'encargado' },
            { label: 'DNI del encargado', key: 'dni' },
            { label: 'Correo del administrador', key: 'correo' },
            { label: 'Número de la empresa', key: 'numero' },
            { label: 'Dirección de la empresa', key: 'direccion' },
          ].map(({ label, key }) => (
            <View key={key} style={{ marginBottom: 20 }}>
              <TextInput
                style={[
                  styles.input,
                  errors[key as keyof typeof errors] && styles.inputError,
                ]}
                placeholder={label}
                placeholderTextColor="#888"
                keyboardType={numericFields.includes(key) ? 'numeric' : 'default'}
                onChangeText={(text) => handleChange(key, text)}
                value={(form as any)[key]}
              />
              {errors[key as keyof typeof errors] ? (
                <Text style={styles.errorText}>
                  {errors[key as keyof typeof errors]}
                </Text>
              ) : null}
            </View>
          ))}

          <TouchableOpacity
            style={[
              styles.button,
              !isFormValid() && { opacity: 0.5 },
            ]}
            onPress={handleSubmit}
            disabled={!isFormValid()}
          >
            <Text style={styles.buttonText}>Siguiente</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff',
  },
  flex: {
    flex: 1,
  },
  header: {
    backgroundColor: '#043E63',
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 60,
    justifyContent: 'center',
    flexGrow: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 14,
    fontSize: 15,
    backgroundColor: '#fff',
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 13,
    marginTop: 4,
  },
  button: {
    backgroundColor: '#043E63',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
