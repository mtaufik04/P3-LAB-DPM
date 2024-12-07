import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ContactScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://via.placeholder.com/150/4caf50/FFFFFF?text=Contact+Us' }}
        style={styles.image}
      />
      <Text style={styles.title}>Hubungi Kami</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>warunggacor@gmail.com</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Telepon:</Text>
        <Text style={styles.value}>+62 812-3456-7890</Text>
      </View>
      <Text style={styles.footerText}>
        Terima kasih telah menghubungi kami! Kami akan segera merespons pertanyaan Anda.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8f5e9',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
    borderRadius: 75, 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginBottom: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#f1f8e9',
    padding: 10,
    borderRadius: 10,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#388e3c',
    marginRight: 10,
  },
  value: {
    fontSize: 18,
    color: '#333',
  },
  footerText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
    marginTop: 20,
    paddingHorizontal: 10,
  },
});

export default ContactScreen;
