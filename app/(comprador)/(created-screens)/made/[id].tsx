import DateTimePicker from "@react-native-community/datetimepicker";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    Image,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

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
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : undefined}
                style={{ flex: 1 }}
            >
                <ScrollView
                    contentContainerStyle={styles.container}
                    keyboardShouldPersistTaps="handled"
                >
                    <View style={styles.header}>
                        <View style={styles.headerCenter}>
                            <Text style={styles.logoText}>TRANSACTIVA</Text>
                        </View>
                        <View style={{ width: 30 }} />
                    </View>

                    <Text style={styles.title}>Realizar pedido</Text>

                    <TextInput
                        placeholder="Producto"
                        value={form.producto}
                        onChangeText={(v) => handleChange("producto", v)}
                        placeholderTextColor="#666"
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Cantidad"
                        value={form.cantidad}
                        onChangeText={(v) => handleChange("cantidad", v)}
                        keyboardType="numeric"
                        placeholderTextColor="#666"
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Descripción"
                        value={form.descripcion}
                        onChangeText={(v) => handleChange("descripcion", v)}
                        placeholderTextColor="#666"
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Proveedor"
                        value={form.proveedor}
                        onChangeText={(v) => handleChange("proveedor", v)}
                        placeholderTextColor="#666"
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Dirección de entrega"
                        value={form.direccion}
                        onChangeText={(v) => handleChange("direccion", v)}
                        placeholderTextColor="#666"
                        style={styles.input}
                    />

                    <Pressable onPress={() => setShowDatePicker(true)}>
                        <TextInput
                            placeholder="Fecha de llegada acordada"
                            value={form.fecha}
                            editable={false}
                            placeholderTextColor="#666"
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
                        placeholderTextColor="#666"
                        style={styles.input}
                    />

                    <TextInput
                        placeholder="Nombre de la transacción"
                        value={form.transaccion}
                        onChangeText={(v) => handleChange("transaccion", v)}
                        placeholderTextColor="#666"
                        style={styles.input}
                    />

                    <TouchableOpacity
                        style={[styles.button, !isFormValid && { backgroundColor: "#ccc" }]}
                        onPress={() => router.push("(comprador)/(created-screens)/wait/id")}
                        disabled={!isFormValid}
                    >
                        <Text style={styles.buttonText}>Enviar solicitud</Text>
                    </TouchableOpacity>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: Platform.OS === "android" ? 40 : 0,
    },
    container: {
        padding: 20,
        paddingBottom: 40,
        backgroundColor: "#fff",
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    menuIcon: {
        width: 30,
        height: 30,
        tintColor: "#003366",
    },
    headerCenter: {
        flexDirection: "row",
        alignItems: "center",
    },
    packageIcon: {
        width: 30,
        height: 30,
        marginRight: 6,
    },
    logoText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000",
    },
    title: {
        fontSize: 18,
        textAlign: "center",
        marginVertical: 15,
        fontWeight: "500",
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 12,
        marginBottom: 14,
        fontSize: 14,
    },
    button: {
        backgroundColor: "#003366",
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 20,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },
});
