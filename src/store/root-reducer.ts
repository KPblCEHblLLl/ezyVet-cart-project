import {combineReducers} from 'redux';
import {History} from 'history';

import {connectRouter} from 'connected-react-router';
import products from '../features/products/reducer';
import cart from '../features/cart/reducer';

const rootReducer = (history: History) => combineReducers({
    products,
    cart,
    router: connectRouter(history),
});

export default rootReducer;
