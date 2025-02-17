import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductList from '../screens/ProductList';
import AddProduct from '../screens/AddProduct';

export type RootStackParamList = {
  ProductList: undefined;
  AddProduct: { productId?: number };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="ProductList">
      <Stack.Screen
        name="ProductList"
        component={ProductList}
        options={{ title: 'Lista de Productos' }}
      />
      <Stack.Screen
        name="AddProduct"
        component={AddProduct}
        options={{ title: 'Agregar/Editar Producto' }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
