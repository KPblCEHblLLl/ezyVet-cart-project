import {Product} from "../products/models";

export type ProductInCart = Product & {
    quantity: number;
}

export type ProductInCartWithTotal = ProductInCart & {
    total: number;
}