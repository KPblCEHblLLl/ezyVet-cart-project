import {combineReducers} from 'redux';
import {ActionType} from 'typesafe-actions';

import {ProductInCart} from './models';
import * as actions from './actions';
import {ADD, DECREASE, INCREASE, REMOVE} from './constants';
import {Product} from "../products/models";

export type CartAction = ActionType<typeof actions>;

export type CartState = Readonly<{
    products: ProductInCart[];
}>;

const initialState: CartState = {
    products: [],
};

const addProductToList = (products: ProductInCart[], product: Product): ProductInCart[] => {
    const ind = products.findIndex(p => p.name === product.name);
    if (ind !== -1) {
        return products;
    }
    return [
        ...products,
        {
            ...product,
            quantity: 1,
        },
    ];
};

const removeProductFromList = (products: ProductInCart[], product: Product): ProductInCart[] => {
    const ind = products.findIndex(p => p.name === product.name);
    if (ind === -1) {
        return products;
    }
    const newProducts = [...products];
    newProducts.splice(ind, 1);
    return newProducts
};

export default combineReducers<CartState, CartAction>({
    products: (state = initialState.products, action) => {
        let product;
        let ind;
        switch (action.type) {
            case ADD:
            case INCREASE:
                ind = state.findIndex(p => p.name === action.payload.name);
                if (ind === -1) {
                    return addProductToList(state, action.payload);
                }
                return state.map(p => p.name === action.payload.name ? {...p, quantity: p.quantity + 1} : p);
            case DECREASE:
                product = state.find(p => p.name === action.payload.name);
                if (!product) {
                    return state;
                }
                if (product.quantity === 1) {
                    // No reason to keep item with zero quantity - remove it from list
                    return removeProductFromList(state, action.payload);
                }
                return state.map(p => p.name === action.payload.name ? {...p, quantity: p.quantity - 1} : p);
            case REMOVE:
                return removeProductFromList(state, action.payload);

            default:
                return state;
        }
    },
});
