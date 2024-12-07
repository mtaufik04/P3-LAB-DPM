import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ProductItem from './ProductItem';

const ProductList = ({ products }) => {
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ProductItem product={item} />}
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 8,
  },
});

export default ProductList;
