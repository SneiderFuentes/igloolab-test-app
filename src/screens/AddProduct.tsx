import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addProduct } from '../store/slice/productSlice';
import { createProduct } from '../service/productService';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'AddProduct'>;

const AddProduct: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSave = async () => {
    try {
      const numericPrice = parseFloat(price);
      const newProduct = await createProduct({ name, description, price: numericPrice });
      dispatch(addProduct(newProduct));
      navigation.goBack();
    } catch (error) {
      console.log('Error creating product:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Nombre:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <Text>Descripción:</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
      />
      <Text>Precio:</Text>
      <TextInput
        style={styles.input}
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      <Button title="Guardar" onPress={handleSave} />
    </View>
  );
};

export default AddProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    marginVertical: 8,
    borderWidth: 1,
    padding: 8,
    borderColor: '#ccc',
  },
});
