import { createSlice } from '@reduxjs/toolkit';
import { ProductType } from '../ProductTypes';


const initalState: ProductType[] = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState: initalState,
  reducers: {
    addToCart(state, action) {
      const {id} = action.payload;
      const itemExist = state.find((el) => el.id === id);

      if(itemExist){
        return
      } else{
        state.push(action.payload);
      }
    },

    addQuantity(state, action) {
      const {id} = action.payload;
      const itemExist = state.find((el) => el.id === id);

      if(itemExist){
        itemExist.quantity += 1;
        itemExist.total_price = itemExist.price * itemExist.quantity
      }
    },
    removeQuantity(state, action) {
      const {id} = action.payload;
      
      const itemExist = state.find((el) => el.id === id);

      if(itemExist){
          if(itemExist.quantity <= 1){
            return state.filter((el) => el.id !== itemExist.id )
          } else {
            itemExist.quantity -= 1;
            itemExist.total_price = itemExist.price * itemExist.quantity
          }
      }
      
    

    }
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
