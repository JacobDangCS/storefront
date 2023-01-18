import { legacy_createStore as createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import productsReducer from './products';
import categoryReducer from './categories';
import cartReducer from './cart';

let reducers = combineReducers({
    category: categoryReducer,
    products: productsReducer,
    cart: cartReducer
});

export default function store() {
    return createStore(reducers, composeWithDevTools());
}