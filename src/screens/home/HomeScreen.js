import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    console.log('HomeScreen mounted');
    return () => console.log('HomeScreen unmounted');
  }, []);

  return (
    <View style={styles.container}>

      <Text style={styles.welcomeText}>Selamat Datang di Warung gacor kami!</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Products')}
      >
        <Text style={styles.buttonText}>Lihat Produk</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Contact')}
      >
        <Text style={styles.buttonText}>Kontak Kami</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('About')}
      >
        <Text style={styles.buttonText}>Tentang Kami</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fce4ec', 
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#880e4f',
    textAlign: 'center',
  },
  subText: {
    fontSize: 16,
    color: '#6a1b9a',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#8e24aa', 
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff', 
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
