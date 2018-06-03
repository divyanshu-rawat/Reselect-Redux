

import {SET_GOODS, SET_SORTED, COUNT} from './constants';
import {fromJS} from 'immutable';


const initialState = fromJS({
goods: [
 {
  name: 'tomatoes',
  price: 3,
 },
 {
  name: 'potatoes',
  price: 2,
 },
 {
  name: 'cucumbers',
  price: 5,
 },
 {
  name: 'salad',
  price: 1,
 }
],
sorted: false,
});


export default GoodsReducer = (state = initialState, action) => {

	switch(ation.type){
		
		case SET_SORTED:
			 // return state.set('sorted', action.sorted);
		
		default:
			return initialState;
	}
}
