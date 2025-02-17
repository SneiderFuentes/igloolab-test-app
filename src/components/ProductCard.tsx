import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Product } from '../interfaces/types';
import styles from '../styles/productCard.styles';



interface ProductCardProps {
  product: Product;
  onDeletePress: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onDeletePress }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      </View>


      <TouchableOpacity onPress={() => onDeletePress(product)} style={styles.deleteButton}>
        <Text style={styles.deleteIcon}>🗑️</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;
