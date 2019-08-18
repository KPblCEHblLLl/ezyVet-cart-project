import {createSelector} from 'reselect';

import {ProductWithCartMark} from "./models";
import {RootState} from "../../store/types";

const getProductsList = (state: RootState) => state.products.products;
const getProductsInCartList = (state: RootState) => state.cart.products;

export const getProductsWithCartMark = createSelector(getProductsList, getProductsInCartList, (products, cart) => {
    return products.map(p => {
        const productWithMark: ProductWithCartMark = {
            ...p,
            inCart: cart.find(pc => pc.name === p.name) !== undefined,
        };
        return productWithMark;
    });
});
