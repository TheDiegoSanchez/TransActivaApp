import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
// REMOVIDO: import { useNavigation } from '@react-navigation/native'; // Ya no se usa

const Colors = {
  primaryBlue: '#1A435E',
  lightGrayText: '#A9A9A9',
  white: '#FFFFFF',
  black: '#000000',
  accentGreen: '#4CAF50',
  darkGray: '#333333',
  lightBackground: '#F9F9F9',
  inputBorder: '#E0E0E0',
};

// Datos de ejemplo para solicitudes (reemplazar con datos reales)
const dummySolicitudes = [
  {
    id: '1',
    buyerName: 'Juan Pérez',
    productName: 'Camisas Polo',
    quantity: '50',
    status: 'Pendiente',
    requestedDate: '2025-06-15',
    deliveryAddress: 'Av. El Sol 123, Cusco',
    agreedPrice: '1250.00',
    description: '50 camisas talla M, color azul marino.',
    agreedDeliveryDate: '2025-06-25',
    paidDate: 'N/A',
  },
  {
    id: '2',
    buyerName: 'María García',
    productName: 'Pantalones Jeans',
    quantity: '30',
    status: 'Pendiente',
    requestedDate: '2025-06-16',
    deliveryAddress: 'Calle Luna 456, Lima',
    agreedPrice: '900.00',
    description: '30 pantalones, tallas variadas, color negro.',
    agreedDeliveryDate: '2025-06-28',
    paidDate: 'N/A',
  },
];

const SolicitudesScreen: React.FC = () => {
  const router = useRouter();
  // REMOVIDO: const navigation = useNavigation(); // Ya no se inicializa

  // REMOVIDO: Función handleOpenDrawer ya no es necesaria aquí si no se usa navigation.openDrawer()
  // const handleOpenDrawer = () => {
  //   // Este botón dejará de funcionar si no hay otra manera de abrir el drawer aquí
  //   // navigation.openDrawer();
  // };

  const handleProcessRequest = (solicitud: typeof dummySolicitudes[0]) => {
    console.log(`Procesando solicitud ${solicitud.id}. Navegando a OrderDetailScreen para revisión/aceptación.`);
    router.push({
      pathname: '/(vendedor)/(request-screens)/createrequest/id',
      params: {
        orderId: solicitud.id,
        status: solicitud.status,
        buyerName: solicitud.buyerName,
        productName: solicitud.productName,
        quantity: solicitud.quantity,
        description: solicitud.description,
        deliveryAddress: solicitud.deliveryAddress,
        agreedPrice: solicitud.agreedPrice,
        requestedDate: solicitud.requestedDate,
        agreedDeliveryDate: solicitud.agreedDeliveryDate,
        paidDate: solicitud.paidDate,
        fromSolicitudes: 'true',
      },
    });
  };

  const handleViewDetails = (solicitud: typeof dummySolicitudes[0]) => {
    console.log(`Viendo detalles de solicitud ${solicitud.id}. Navegando a OrderDetailScreen.`);
    router.push({
      pathname: '/(drawer)/OrderDetailScreen',
      params: {
        orderId: solicitud.id,
        status: solicitud.status,
        buyerName: solicitud.buyerName,
        productName: solicitud.productName,
        quantity: solicitud.quantity,
        description: solicitud.description,
        deliveryAddress: solicitud.deliveryAddress,
        agreedPrice: solicitud.agreedPrice,
        requestedDate: solicitud.requestedDate,
        agreedDeliveryDate: solicitud.agreedDeliveryDate,
        paidDate: solicitud.paidDate,
        fromSolicitudes: 'true',
      },
    });
  };

  const renderItem = ({ item }: { item: typeof dummySolicitudes[0] }) => (
    <View style={styles.solicitudCard}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>Solicitud #{item.id}</Text>
        <Text style={[styles.cardStatus, item.status === 'Pendiente' ? styles.statusPending : styles.statusAccepted]}>
          {item.status}
        </Text>
      </View>
      <Text style={styles.cardText}>**Comprador:** {item.buyerName}</Text>
      <Text style={styles.cardText}>**Producto:** {item.productName}</Text>
      <Text style={styles.cardText}>**Cantidad:** {item.quantity}</Text>
      <Text style={styles.cardText}>**Fecha Solicitada:** {item.requestedDate}</Text>
      <View style={styles.cardButtons}>
        <TouchableOpacity style={styles.acceptButton} onPress={() => handleProcessRequest(item)}>
          <Text style={styles.acceptButtonText}>Aceptar Solicitud</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.acceptButton} onPress={() => handleProcessRequest(item)}>
          <Text style={styles.acceptButtonText}>Aceptar Solicitud</Text>
        </TouchableOpacity>

      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header: El botón de menú ya no tendrá una función handleOpenDrawer aquí */}
        <Text style={styles.screenTitle}>Mis Solicitudes</Text>

        {dummySolicitudes.length > 0 ? (
          <FlatList
            data={dummySolicitudes}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContent}
          />
        ) : (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No hay solicitudes pendientes.</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.lightBackground,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    backgroundColor: Colors.white,
  },
  menuButton: {
    marginRight: 10,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    marginLeft: -40,
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
    color: Colors.primaryBlue,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  listContent: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  solicitudCard: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primaryBlue,
  },
  cardStatus: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
  },
  statusPending: {
    backgroundColor: '#FFEBEE',
    color: '#D32F2F',
  },
  statusAccepted: {
    backgroundColor: '#E8F5E9',
    color: Colors.accentGreen,
  },
  cardText: {
    fontSize: 15,
    color: Colors.darkGray,
    marginBottom: 5,
  },
  cardButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
  },
  detailsButton: {
    backgroundColor: Colors.primaryBlue,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    flex: 1,
    marginRight: 5,
    alignItems: 'center',
  },
  detailsButtonText: {
    color: Colors.white,
    fontSize: 15,
    fontWeight: 'bold',
  },
  acceptButton: {
    backgroundColor: Colors.accentGreen,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    flex: 1,
    marginLeft: 5,
    alignItems: 'center',
  },
  acceptButtonText: {
    color: Colors.white,
    fontSize: 15,
    fontWeight: 'bold',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    fontSize: 18,
    color: Colors.lightGrayText,
    textAlign: 'center',
  },
});

export default SolicitudesScreen;