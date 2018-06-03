

import {COUNT} from './actionTypes';
import {SET_SORTED} from './actionTypes';

export const count = () => ({
  type: COUNT
});

export const setSorted = (boolean) => ({
  type: SET_SORTED,
  sorted: boolean
});
