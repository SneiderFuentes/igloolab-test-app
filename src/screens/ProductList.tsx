import React, { useEffect, useState } from 'react';
import { View, Button, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { Product } from '../interfaces/types';
import { setProducts, removeProduct } from '../store/slice/productSlice';
import { getProducts, deleteProduct } from '../service/productService';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import ProductCard from '../components/ProductCard';
import ConfirmDeleteModal from '../components/ConfirmDeleteModal';

type Props = NativeStackScreenProps<RootStackParamList, 'ProductList'>;

const ProductList: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.product.items);

  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const loadProducts = async () => {
    try {
      const data = await getProducts();
      dispatch(setProducts(data));
    } catch (error) {
      console.log('Error loading products:', error);
    }
  };

  const handleOpenModal = (product: Product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCancelModal = () => {
    setSelectedProduct(null);
    setShowModal(false);
  };

  const handleConfirmDelete = async () => {
    if (!selectedProduct) return;
    try {
      await deleteProduct(selectedProduct.id);
      dispatch(removeProduct(selectedProduct.id));
    } catch (error) {
      console.log('Error deleting product:', error);
    }
    handleCancelModal();
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const renderItem = ({ item }: { item: Product }) => (
    <ProductCard
      product={item}
      onDeletePress={(p) => handleOpenModal(p)}
    />
  );

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Button
        title="Agregar Producto"
        onPress={() => navigation.navigate('AddProduct')}
      />
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        style={{ marginTop: 16 }}
      />

      <ConfirmDeleteModal
        visible={showModal}
        product={selectedProduct || undefined}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelModal}
      />
    </View>
  );
};

export default ProductList;
