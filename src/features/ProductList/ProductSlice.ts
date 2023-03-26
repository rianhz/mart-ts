import { createSlice } from '@reduxjs/toolkit';
import { ProductType } from '../ProductTypes';

const initialState: ProductType[] = [];

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getProducts(state, action) {
      const newPayload = action.payload;
      
      if(newPayload){
        newPayload.forEach((el:ProductType) => {
          if(el.quantity === 1){
            el.total_price = el.price
          }
        })
      }

     return newPayload
    },
  },
});

export const productActions = productSlice.actions;
export default productSlice;
