import { ThunkAction, Action, configureStore } from '@reduxjs/toolkit';
import cartSlice from '../features/CartList/cartSlice';
import productSlice from '../features/ProductList/ProductSlice';

export const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
