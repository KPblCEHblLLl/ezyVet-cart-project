import {StateType} from 'typesafe-actions';

export type RootState = StateType<ReturnType<typeof import('./root-reducer').default>>;
