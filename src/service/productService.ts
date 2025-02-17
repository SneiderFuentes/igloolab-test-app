import { Product } from '../interfaces/types';
import api from './api';

export const getProducts = async (): Promise<Product[]> => {
  const response = await api.get<Product[]>('/products');
  return response.data.data;
};

export const createProduct = async (data: Omit<Product, 'id'>): Promise<Product> => {
  const response = await api.post<Product>('/products', data);
  return response.data.data;
};

export const deleteProduct = async (id: number): Promise<void> => {
  await api.delete(`/products/${id}`);
};
