import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { useRouter } from 'expo-router';

const Colors = {
  primaryBlue: '#1A435E',
  lightGrayText: '#A9A9A9',
  white: '#FFFFFF',
  black: '#000000',
  accentOrange: '#FF9800',
  darkGray: '#333333',
  lightBackground: '#F9F9F9',
  inputBorder: '#E0E0E0',
};

const dummyOrdersToPrepare = [
  {
    id: 'P001',
    buyerName: 'Pedro López',
    productName: 'Camisetas Algodón',
    quantity: '100',
    status: 'Pendiente de Preparación',
    requestedDate: '2025-06-18',
    agreedDeliveryDate: '2025-06-28',
    description: '100 camisetas, tallas S, M, L, colores blanco y negro.',
    deliveryAddress: 'Av. Los Pinos 789, Miraflores, Lima',
  },
  {
    id: 'P002',
    buyerName: 'Ana Ruiz',
    productName: 'Gorras Deportivas',
    quantity: '200',
    status: 'Pendiente de Preparación',
    requestedDate: '2025-06-19',
    agreedDeliveryDate: '2025-07-05',
    description: '200 gorras, diferentes colores, con logo bordado.',
    deliveryAddress: 'Calle Las Flores 101, Trujillo',
  },
  {
    id: 'P003',
    buyerName: 'Carlos Soto',
    productName: 'Polos de Empresa',
    quantity: '75',
    status: 'Pendiente de Preparación',
    requestedDate: '2025-06-20',
    agreedDeliveryDate: '2025-07-01',
    description: '75 polos, talla XL, color gris, con estampado.',
    deliveryAddress: 'Jr. La Unión 555, Arequipa',
  },
];

const ListPrepareScreen: React.FC = () => {
  const router = useRouter();

  const handlePrepareOrder = (order: typeof dummyOrdersToPrepare[0]) => {
    router.push({
      pathname: '/(vendedor)/(prepared-screens)/preparedrequest/id',
      params: {
        orderId: order.id,
        buyerName: order.buyerName,
        productName: order.productName,
        quantity: order.quantity,
        description: order.description,
        deliveryAddress: order.deliveryAddress,
        requestedDate: order.requestedDate,
        agreedDeliveryDate: order.agreedDeliveryDate,
      },
    });
  };

  const handleViewDetails = (order: typeof dummyOrdersToPrepare[0]) => {
    router.push({
      pathname: '/(vendedor)/(prepared-screens)/detailrequest/id',
      params: {
        orderId: order.id,
        buyerName: order.buyerName,
        productName: order.productName,
        quantity: order.quantity,
        description: order.description,
        deliveryAddress: order.deliveryAddress,
        requestedDate: order.requestedDate,
        agreedDeliveryDate: order.agreedDeliveryDate,
      },
    });
  };

  const renderItem = ({ item }: { item: typeof dummyOrdersToPrepare[0] }) => (
    <View style={styles.orderCard}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>Orden #{item.id}</Text>
        <Text style={[styles.cardStatus, styles.statusPendingPrepare]}>
          {item.status}
        </Text>
      </View>
      <Text style={styles.cardText}>**Comprador:** {item.buyerName}</Text>
      <Text style={styles.cardText}>**Producto:** {item.productName}</Text>
      <Text style={styles.cardText}>**Cantidad:** {item.quantity}</Text>
      <Text style={styles.cardText}>**Fecha Solicitada:** {item.requestedDate}</Text>
      <View style={styles.cardButtons}>
        <TouchableOpacity style={styles.detailsButton} onPress={() => handleViewDetails(item)}>
          <Text style={styles.detailsButtonText}>Ver Detalles</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.prepareButton} onPress={() => handlePrepareOrder(item)}>
          <Text style={styles.prepareButtonText}>Preparar Orden</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.screenTitle}>Órdenes Pendientes de Preparación</Text>
        {dummyOrdersToPrepare.length > 0 ? (
          <FlatList
            data={dummyOrdersToPrepare}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContent}
          />
        ) : (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No hay órdenes pendientes de preparación.</Text>
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
  orderCard: {
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
  statusPendingPrepare: {
    backgroundColor: '#FFF3E0',
    color: Colors.accentOrange,
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
    backgroundColor: Colors.darkGray,
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
  prepareButton: {
    backgroundColor: Colors.accentOrange,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    flex: 1,
    marginLeft: 5,
    alignItems: 'center',
  },
  prepareButtonText: {
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

export default ListPrepareScreen;
