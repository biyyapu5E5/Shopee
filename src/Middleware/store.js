import cartReducer from '../Slice/cartSlice'
import productReducer from '../Slice/productSlice';
import { apiMiddleware } from './apiMiddleware';
import { thunkMiddleware } from './thunkMiddleware';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        cartItem : cartReducer,
        productItem : productReducer
    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(apiMiddleware, thunkMiddleware)

  });