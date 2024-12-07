import React from 'react';
import { View, StyleSheet, Text, FlatList, Image } from 'react-native';

const ProductScreen = () => {
  const products = [
    { id: '1', name: 'Beras', price: 50000, image: 'https://tse2.mm.bing.net/th?id=OIP.lr7gMUhoAHZWm9RacGoLfAHaD8&pid=Api&P=0&h=180' },
    { id: '2', name: 'Gula', price: 20000, image: 'https://daganghalal.blob.core.windows.net/28741/Product/1000x1000__gulakasar-1656916946291.jpg' },
    { id: '3', name: 'Minyak Goreng', price: 30000, image: 'https://filebroker-cdn.lazada.co.id/kf/S3e1d9a7de4d34438867c17b7e7ba7b59B.jpg' },
    { id: '4', name: 'Tepung Terigu', price: 15000, image: 'https://tse1.mm.bing.net/th?id=OIP.E7FoXCbMrf_Gw4hjdgOGjwHaHa&pid=Api&P=0&h=180' },
    { id: '5', name: 'Susu Bubuk', price: 40000, image: 'https://cf.shopee.co.id/file/0c292342bbd14c19467374176b880305' },
    { id: '6', name: 'Sabun Cuci', price: 25000, image: 'https://id-test-11.slatic.net/p/553cc50a063c68bec4ff0eeb33098123.jpg' },
    { id: '7', name: 'Pasta Gigi', price: 12000, image: 'https://www.rukita.co/stories/wp-content/uploads/2021/05/istock-995695892.jpg' },
    { id: '8', name: 'Air Mineral (1L)', price: 5000, image: 'https://tse3.mm.bing.net/th?id=OIP.ewALGumOrTqYcjxTIsUH4QHaHa&pid=Api&P=0&h=180' },
    { id: '9', name: 'Telur Ayam (1 kg)', price: 25000, image: 'https://www.gunungemas-digdaya.com/wp-content/uploads/2020/09/Telur-Ayam-600x600.jpg' },
    { id: '10', name: 'Kopi Sachet', price: 10000, image: 'https://superapp.id/blog/wp-content/uploads/2020/09/shutterstock_1512611969.jpg' },
  ];

  const renderProduct = ({ item }) => (
    <View style={styles.productCard}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>Rp {item.price.toLocaleString()}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daftar Produk</Text>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        numColumns={2} 
        contentContainerStyle={styles.productList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffecb3', 
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ff6f00',
    textAlign: 'center',
    marginVertical: 16,
  },
  productList: {
    justifyContent: 'center',
  },
  productCard: {
    backgroundColor: '#fff',
    margin: 8,
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    flex: 1,
    elevation: 3, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  productImage: {
    width: 80,
    height: 80,
    marginBottom: 10,
    borderRadius: 40,
    backgroundColor: '#eeeeee',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
    color: '#4e342e',
  },
  productPrice: {
    fontSize: 14,
    color: '#d84315',
  },
});

export default ProductScreen;
