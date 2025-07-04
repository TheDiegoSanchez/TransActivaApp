import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import {
    ActivityIndicator,
    Platform,
    StyleSheet,
    Text,
    View,
} from "react-native";

export default function EsperandoProveedor() {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.replace("/solicitud-aceptada");
        }, 4000); // Espera 4 segundos

        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#003366" style={styles.loader} />
            <Text style={styles.text}>Espera, estamos esperando al proveedor</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        paddingTop: Platform.OS === "android" ? 40 : 0,
    },
    loader: {
        marginBottom: 20,
    },
    text: {
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "center",
        color: "#000",
    },
});
