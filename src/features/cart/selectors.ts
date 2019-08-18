import { createSelector } from 'reselect';

import {ProductInCartWithTotal} from "./models";
import {RootState} from "../../store/types";

const getProductsInCartList = (state: RootState) => state.cart.products;

export const getCartProducts = createSelector(getProductsInCartList, (cart) => {
   return cart.map(p => {
       const productWithTotal: ProductInCartWithTotal = {
           ...p,
           total: p.price * p.quantity,
       };
       return productWithTotal;
   });
});

export const getCartTotal = createSelector(getProductsInCartList, (cart) => {
   return cart.reduce((total, p) => total + p.price * p.quantity, 0);
});

export const countCartItems = createSelector(getProductsInCartList, (cart) => {
   return cart.reduce((total, p) => total + p.quantity, 0);
});
