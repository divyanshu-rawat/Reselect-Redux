


import {SET_GOODS, SET_SORTED, COUNT} from './constants';
import {fromJS} from 'immutable';
import {createSelector} from 'reselect';


const data = [
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
]

const initialState = ({
	goods: data,
	sorted: false,
	count: 0,
});


const Reducer = (state = initialState, action) => {

  console.log('bhaiya',initialState)

    switch (action.type) {
     case SET_SORTED: {
       return state.set('sorted', action.sorted);
     }

     case COUNT: {
       return state.set('count', state.get('count') + 1);
     }

     default: {
      console.log('yaha hu');
       return initialState;
     }
   }
}

export default Reducer;

// https://hackernoon.com/usage-of-reselect-in-a-react-redux-application-fcdca05cc00d

// state.set('sorted',action.sorted);
// state.set('count', state.get(count) + 1)
