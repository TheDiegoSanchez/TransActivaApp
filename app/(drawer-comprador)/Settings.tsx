import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, ScrollView, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
const Colors = {
    primaryBlue: '#1A435E',
    lightPinkBorder: '#F0DCDC',
    lightGrayText: '#A9A9A9',
    white: '#FFFFFF',
    black: '#000000',
    accentGreen: '#4CAF50',
    darkGray: '#333333',
    lightBackground: '#F9F9F9',
    cardBackground: '#FFFFFF',
};

interface BottomBarIconProps {
    iconName: 'cube' | 'briefcase';
    label: string;
    onPress: () => void;
    isActive: boolean;
}

const BottomBarIcon: React.FC<BottomBarIconProps> = ({ iconName, label, onPress, isActive }) => {
    let iconComponent;
    const iconColor = isActive ? Colors.white : Colors.lightGrayText;

    if (iconName === 'cube') {
        iconComponent = <Ionicons name="cube" size={28} color={iconColor} />;
    } else if (iconName === 'briefcase') {
        iconComponent = <Ionicons name="briefcase" size={28} color={iconColor} />;
    } else {
        iconComponent = <Ionicons name="alert-circle-outline" size={28} color={iconColor} />;
    }

    return (
        <TouchableOpacity style={styles.bottomBarItem} onPress={onPress}>
            {iconComponent}
            <Text style={[styles.bottomBarLabel, { color: isActive ? Colors.white : Colors.lightGrayText }]}>{label}</Text>
        </TouchableOpacity>
    );
};


const SettingsScreen: React.FC = () => {
    const router = useRouter();
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);

    const handleEditProfile = () => { console.log('Navegar a Editar Perfil'); };
    const handleChangePassword = () => { console.log('Navegar a Cambiar Contraseña'); };
    const handleToggleNotifications = () => {
        setNotificationsEnabled(previousState => !previousState);
        console.log('Notificaciones:', !notificationsEnabled);
    };
    const handleSelectLanguage = () => { console.log('Abrir selector de Idioma'); };
    const handleViewTerms = () => { console.log('Ver Términos y Condiciones'); };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>

                <Text style={styles.screenTitle}>Configuraciones</Text>

                <ScrollView contentContainerStyle={styles.mainContent}>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Cuenta</Text>
                        <TouchableOpacity style={styles.settingItem} onPress={handleEditProfile}>
                            <Text style={styles.settingText}>Editar Perfil</Text>
                            <Ionicons name="chevron-forward-outline" size={20} color={Colors.darkGray} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.settingItem} onPress={handleChangePassword}>
                            <Text style={styles.settingText}>Cambiar Contraseña</Text>
                            <Ionicons name="chevron-forward-outline" size={20} color={Colors.darkGray} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Notificaciones</Text>
                        <View style={styles.settingItem}>
                            <Text style={styles.settingText}>Recibir notificaciones push</Text>
                            <Switch
                                onValueChange={handleToggleNotifications}
                                value={notificationsEnabled}
                                trackColor={{ false: Colors.lightGrayText, true: Colors.accentGreen }}
                                thumbColor={Colors.white}
                            />
                        </View>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>General</Text>
                        <TouchableOpacity style={styles.settingItem} onPress={handleSelectLanguage}>
                            <Text style={styles.settingText}>Idioma</Text>
                            <Ionicons name="chevron-forward-outline" size={20} color={Colors.darkGray} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Acerca de</Text>
                        <View style={styles.settingItem}>
                            <Text style={styles.settingText}>Versión de la App</Text>
                            <Text style={styles.settingValue}>0.1.2</Text>
                        </View>
                        <TouchableOpacity style={styles.settingItem} onPress={handleViewTerms}>
                            <Text style={styles.settingText}>Términos y Condiciones</Text>
                            <Ionicons name="chevron-forward-outline" size={20} color={Colors.darkGray} />
                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </View>
            <View style={styles.bottomFill} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: Colors.lightBackground,
    },
    container: {
        flex: 1,
        backgroundColor: Colors.lightBackground,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#EEEEEE',
        backgroundColor: Colors.white,
    },
    backButton: { 
        position: 'absolute',
        left: 15,
        zIndex: 10,
        padding: 5,
    },
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: -24 / 2, 
    },
    logoImage: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
        marginRight: 8,
    },
    logoText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.black,
    },
    screenTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.black,
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 25,
    },
    mainContent: {
        flexGrow: 1,
        paddingHorizontal: 20,
        paddingBottom: 110,
    },
    section: {
        backgroundColor: Colors.white,
        borderRadius: 10,
        marginBottom: 20,
        paddingVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.primaryBlue,
        paddingHorizontal: 15,
        marginBottom: 10,
    },
    settingItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#F5F5F5',
    },
    settingText: {
        fontSize: 16,
        color: Colors.darkGray,
    },
    settingValue: {
        fontSize: 16,
        color: Colors.lightGrayText,
    },
    logoutButton: {
        flexDirection: 'row',
        backgroundColor: Colors.primaryBlue,
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    logoutButtonText: {
        color: Colors.white,
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 10,
    },
    logoutIcon: {
        marginLeft: 5,
    },
    bottomNavBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: Colors.primaryBlue,
        height: 70,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        position: 'absolute',
        bottom: 40,
        left: 0,
        right: 0,
    },
    bottomBarItem: {
        alignItems: 'center',
    },
    bottomBarLabel: {
        fontSize: 12,
        fontWeight: '600',
    },
    bottomFill: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 40,
        backgroundColor: Colors.primaryBlue,
    },
});

export default SettingsScreen;
export const options = {
    title: 'Configuración',
};