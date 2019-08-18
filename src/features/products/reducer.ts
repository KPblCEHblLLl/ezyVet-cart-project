import {combineReducers} from 'redux';
import {ActionType} from 'typesafe-actions';

import {Product} from './models';
import * as actions from './actions';
import {LOAD} from './constants';

export type ProductsAction = ActionType<typeof actions>;

export type ProductsState = Readonly<{
    products: Product[];
}>;

const initialState: ProductsState = {
    products: [],
};

export default combineReducers<ProductsState, ProductsAction>({
    products: (state = initialState.products, action) => {
        switch (action.type) {
            case LOAD:
                return [
                    {
                        name: "Sledgehammer",
                        price: 125.75
                    },
                    {
                        name: "Axe",
                        price: 190.50
                    },
                    {
                        name: "Bandsaw",
                        price: 562.13
                    }, {
                        name: "Chisel",
                        price: 12.9
                    },
                    {
                        name: "Hacksaw",
                        price: 18.45
                    }
                ];

            default:
                return state;
        }
    },
});
