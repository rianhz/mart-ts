import { createSlice } from '@reduxjs/toolkit';
import { ProductType } from '../ProductTypes';

const initalState: ProductType[] = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState: initalState,
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },

    addQuantity(state, action) {
      const item = action.payload;
      const itemExist = state.find((el) => el.id === item.id);

      if(itemExist){
        
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
