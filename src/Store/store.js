import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './products';
import categoryReducer from './categories';
import cartReducer from './cart/cart';

const store = () => configureStore({
    reducer:{
        category: categoryReducer,
        products: productsReducer,
        cart: cartReducer,
    }
})

export default store();