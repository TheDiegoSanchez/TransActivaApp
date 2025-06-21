import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    SafeAreaView,
} from 'react-native';
import Colors from '../../constants/Colors';
import Strings from '../../constants/Strings';
import { useRouter, useLocalSearchParams } from 'expo-router';

const PinInput = () => {
    const [pin, setPin] = useState('');
    const router = useRouter();

    const params = useLocalSearchParams();

    const email = params.email as string;
    const password = params.password as string;
    const companyName = params.companyName as string;
    const ruc = params.ruc as string;
    const managerName = params.managerName as string;
    const managerDni = params.managerDni as string;
    const adminEmail = params.adminEmail as string;
    const companyPhone = params.companyPhone as string;
    const companyAddress = params.companyAddress as string;

    const handlePress = (digit: string) => {
        if (pin.length < 6) {
            setPin(prev => prev + digit);
        }
    };

    const handleDelete = () => {
        setPin(prev => prev.slice(0, -1));
    };

    const handleNext = () => {
        console.log('PIN ingresado:', pin);
        router.push({
            pathname: '/(profile)/ChooseRole',
            params: {
                email,
                password,
                userTypeId: '', // aún no elegido
                name: companyName,
                ruc,
                managerName,
                managerDni,
                managerEmail: adminEmail,
                phone: companyPhone,
                address: companyAddress,
                paymentPasswordHash: pin,
            }
        });

        console.log('✅ Datos que pasarán a ChooseRole:', {
            email,
            password,
            name: companyName,
            ruc,
            managerName,
            managerDni,
            managerEmail: adminEmail,
            phone: companyPhone,
            address: companyAddress,
            paymentPasswordHash: pin,
        });
    };



    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.title}>Agregar tu código de seguridad</Text>

                <TextInput
                    style={styles.input}
                    value={pin}
                    editable={false}
                    secureTextEntry
                />

                <View style={styles.keypad}>
                    {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].map((digit, index) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.key}
                            onPress={() => handlePress(digit)}
                        >
                            <Text style={styles.keyText}>{digit}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
                        <Text style={styles.deleteText}>Borrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
                        <Text style={styles.nextText}>Siguiente</Text>
                    </TouchableOpacity>
                </View>



            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#CBCBE0',
    },
    container: {
        flex: 1,
        paddingHorizontal: 24,
        backgroundColor: Colors.background,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: 18,
        fontFamily: Strings.font.semiBold,
        marginBottom: 20,
        color: Colors.text,
    },
    input: {
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 4,
        height: 50,
        width: '80%',
        textAlign: 'center',
        fontSize: 24,
        backgroundColor: '#FFF7F7',
        marginBottom: 30,
    },
    keypad: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginBottom: 20,
    },
    key: {
        width: 70,
        height: 70,
        backgroundColor: Colors.primary,
        margin: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    keyText: {
        fontSize: 24,
        color: '#FFF',
        fontFamily: Strings.font.bold,
    },
    buttonRow: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },

    deleteButton: {
        backgroundColor: Colors.alert,
        borderRadius: 10,
        paddingVertical: 12,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        marginRight: 10,
    },

    deleteText: {
        color: '#fff',
        fontFamily: Strings.font.semiBold,
        fontSize: 16,
    },

    nextButton: {
        backgroundColor: Colors.primary,
        borderRadius: 10,
        paddingVertical: 12,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 2,
    },

    nextText: {
        color: '#fff',
        fontFamily: Strings.font.semiBold,
        fontSize: 16,
    },


});

export default PinInput;
