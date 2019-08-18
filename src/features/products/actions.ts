import { action } from 'typesafe-actions';

import { LOAD } from './constants';

export const loadProducts = () => action(LOAD);
