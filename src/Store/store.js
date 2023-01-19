import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import productsReducer from './products';
import categoryReducer from './categories';
import cartReducer from './cart';
//import logger from './middleware/logger';
import thunk from './middleware/thunk';

let reducers = combineReducers({
    category: categoryReducer,
    products: productsReducer,
    cart: cartReducer,
});

export default function store() {
    return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}