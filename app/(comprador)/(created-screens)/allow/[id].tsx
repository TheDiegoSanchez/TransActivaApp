import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function SolicitudAceptada() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Tu solicitud ha sido aceptada</Text>
            <TouchableOpacity style={styles.button} onPress={() => router.push('/ingresar-pin')}>
                <Text style={styles.buttonText}>Ir a pagar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#003366',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});
