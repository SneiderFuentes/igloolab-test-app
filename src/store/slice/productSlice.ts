import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../interfaces/types';

interface ProductState {
  items: Product[];
}

const initialState: ProductState = {
  items: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      state.items = action.payload;
    },
    addProduct(state, action: PayloadAction<Product>) {
      state.items.push(action.payload);
    },
    removeProduct(state, action: PayloadAction<number>) {
      state.items = state.items.filter((p) => p.id !== action.payload);
    },
  },
});

export const { setProducts, addProduct, removeProduct } = productSlice.actions;
export default productSlice.reducer;
