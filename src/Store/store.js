import { legacy_createStore as createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';

let reducers = combineReducers({
    products: reducer,
});

export default function store() {
    return createStore(reducers, composeWithDevTools());
}