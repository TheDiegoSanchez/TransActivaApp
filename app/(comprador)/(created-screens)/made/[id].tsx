import DateTimePicker from "@react-native-community/datetimepicker";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    Platform,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from '../../../../constants/Colors';
import Strings from '../../../../constants/Strings';

export default function RealizarPedido() {
    const router = useRouter();

    const [form, setForm] = useState({
        producto: "",
        cantidad: "",
        descripcion: "",
        proveedor: "",
        direccion: "",
        fecha: "",
        precio: "",
        transaccion: "",
    });

    const [showDatePicker, setShowDatePicker] = useState(false);

    const handleChange = (name: string, value: string) => {
        if (
            name === "producto" ||
            name === "proveedor" ||
            name === "descripcion" ||
            name === "transaccion"
        ) {
            value = value.replace(/[^a-zA-Z\s]/g, "");
        }

        if (name === "cantidad") {
            value = value.replace(/[^0-9]/g, "");
        }

        if (name === "precio") {
            value = value.replace(/[^0-9.]/g, "");
            value = value ? `S/${value}` : "";
        }

        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const isFormValid = Object.values(form).every((value) => value.trim() !== "");

    const handleDateChange = (_: any, selectedDate?: Date) => {
        setShowDatePicker(false);
        if (selectedDate) {
            const formatted = selectedDate.toISOString().split("T")[0]; // YYYY-MM-DD
            setForm((prev) => ({ ...prev, fecha: formatted }));
        }
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <KeyboardAwareScrollView
                contentContainerStyle={styles.container}
                enableOnAndroid={true}
                extraScrollHeight={20}
                keyboardShouldPersistTaps="handled"
            >
                <ScrollView
                    contentContainerStyle={styles.container}
                    keyboardShouldPersistTaps="handled"
                >
                    <View style={styles.header}>
                        <View style={styles.headerCenter}>
                            <Text style={styles.logoText}>{Strings.appName}</Text>                    
                        </View>
                        <View style={{ width: 30 }} />
                    </View>

                    <Text style={styles.title}>Realizar pedido</Text>

                    <TextInput
                        placeholder="Producto"
                        value={form.producto}
                        onChangeText={(v) => handleChange("producto", v)}
                        placeholderTextColor={Colors.secondary}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Cantidad"
                        value={form.cantidad}
                        onChangeText={(v) => handleChange("cantidad", v)}
                        keyboardType="numeric"
                        placeholderTextColor={Colors.secondary}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Descripción"
                        value={form.descripcion}
                        onChangeText={(v) => handleChange("descripcion", v)}
                        placeholderTextColor={Colors.secondary}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Proveedor"
                        value={form.proveedor}
                        onChangeText={(v) => handleChange("proveedor", v)}
                        placeholderTextColor={Colors.secondary}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Dirección de entrega"
                        value={form.direccion}
                        onChangeText={(v) => handleChange("direccion", v)}
                        placeholderTextColor={Colors.secondary}
                        style={styles.input}
                    />

                    <Pressable onPress={() => setShowDatePicker(true)}>
                        <TextInput
                            placeholder="Fecha de llegada acordada"
                            value={form.fecha}
                            editable={false}
                            placeholderTextColor={Colors.secondary}
                            style={styles.input}
                        />
                    </Pressable>
                    {showDatePicker && (
                        <DateTimePicker
                            value={new Date()}
                            mode="date"
                            display="default"
                            onChange={handleDateChange}
                        />
                    )}

                    <TextInput
                        placeholder="Precio acordado"
                        value={form.precio}
                        onChangeText={(v) => handleChange("precio", v)}
                        keyboardType="decimal-pad"
                        placeholderTextColor={Colors.secondary}
                        style={styles.input}
                    />

                    <TextInput
                        placeholder="Nombre de la transacción"
                        value={form.transaccion}
                        onChangeText={(v) => handleChange("transaccion", v)}
                        placeholderTextColor={Colors.secondary}
                        style={styles.input}
                    />

                    <TouchableOpacity
                        style={[styles.button, !isFormValid && { backgroundColor: Colors.secondary }]}
                        onPress={() => router.push("(comprador)/(created-screens)/wait/id")}
                        disabled={!isFormValid}
                    >
                        <Text style={styles.buttonText}>Enviar solicitud</Text>
                    </TouchableOpacity>
                </ScrollView>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: Colors.background,
        paddingTop: Platform.OS === "android" ? 0 : 0,
    },
    container: {
        padding: 10,
        paddingBottom: 40,
        backgroundColor: Colors.background,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    headerCenter: {
        flexDirection: "row",
        alignItems: "center",
    },
    logoText: {
        fontSize: 20,
        fontFamily: Strings.font.bold,
        color: Colors.text,
    },
    title: {
        fontSize: 18,
        textAlign: "center",
        marginVertical: 15,
        fontFamily: Strings.font.semiBold,
        color: Colors.text,
    },
    input: {
        borderWidth: 1,
        borderColor: Colors.secondary,
        borderRadius: 8,
        padding: 12,
        marginBottom: 14,
        fontSize: 14,
        color: Colors.text,
        fontFamily: Strings.font.regular,
    },
    button: {
        backgroundColor: Colors.primary,
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 20,
    },
    buttonText: {
        color: Colors.background,
        fontFamily: Strings.font.bold,
        fontSize: 16,
    },
});