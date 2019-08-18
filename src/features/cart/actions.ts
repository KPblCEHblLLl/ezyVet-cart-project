import {createStandardAction} from 'typesafe-actions';

import {ADD, DECREASE, INCREASE, REMOVE} from './constants';
import {Product} from "../products/models";

export const addToCart = createStandardAction(ADD)<Product>();
export const increaseQuantity = createStandardAction(INCREASE)<Product>();
export const decreaseQuantity = createStandardAction(DECREASE)<Product>();
export const removeFromCart = createStandardAction(REMOVE)<Product>();
