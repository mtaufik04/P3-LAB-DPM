import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const AboutScreen = () => {
  useEffect(() => {
    console.log('AboutScreen mounted'); // Saat komponen pertama kali ditampilkan

    return () => {
      console.log('AboutScreen unmounted'); // Saat komponen dihapus dari tampilan
    };
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://via.placeholder.com/200/ff8a80/FFFFFF?text=About+Us' }}
        style={styles.image}
      />
      <Text style={styles.title}>Tentang Kasir Minimarket</Text>
      <Text style={styles.description}>
        Kasir Minimarket adalah aplikasi yang dirancang untuk mempermudah proses penjualan dan manajemen produk
        di minimarket.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fce4ec',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#d81b60',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
    marginBottom: 20,
    lineHeight: 24,
  },
});

export default AboutScreen;
