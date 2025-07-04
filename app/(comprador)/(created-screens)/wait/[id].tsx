import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import {
    ActivityIndicator,
    Platform,
    StyleSheet,
    Text,
    View,
} from "react-native";
import Colors from '../../../../constants/Colors';
import Strings from '../../../../constants/Strings';

export default function EsperandoProveedor() {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.replace("/(comprador)/(created-screens)/password/[id]");
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color={Colors.primary} style={styles.loader} />
            <Text style={styles.text}>
                {Strings.appName}: Espera, estamos esperando al proveedor
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.background,
        paddingTop: Platform.OS === "android" ? 40 : 0,
    },
    loader: {
        marginBottom: 20,
    },
    text: {
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "center",
        color: Colors.text,
        fontFamily: Strings.font.semiBold,
    },
})