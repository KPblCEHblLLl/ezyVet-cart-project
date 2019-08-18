import { createBrowserHistory } from 'history';
import {routerMiddleware as createRouterMiddleware} from 'connected-react-router';
import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './root-reducer';

// browser history
export const history = createBrowserHistory();

const routerMiddleware = createRouterMiddleware(history);


// configure middlewares
const middlewares = [routerMiddleware];
// compose enhancers
const enhancer = compose(applyMiddleware(...middlewares));

const key = 'CART_STATE_KEY';

// rehydrate state on app start
const initialState = {
    cart: JSON.parse(localStorage.getItem(key) || '[]'),
};

// create store
const store = createStore(rootReducer(history), initialState, enhancer);

let cartState: any;
store.subscribe(() => {
    const prevCartState = cartState;
    cartState = store.getState().cart;

    if (cartState !== prevCartState) {
        localStorage.setItem(key, JSON.stringify(cartState));
    }
});
// export store singleton instance
export default store;
