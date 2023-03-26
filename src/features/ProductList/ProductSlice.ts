import { createSlice } from '@reduxjs/toolkit';
import { ProductType } from '../ProductTypes';

const initialState: ProductType[] = [];

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getProducts(state, action) {
      return action.payload
    },
  },
});

export const productActions = productSlice.actions;
export default productSlice;
