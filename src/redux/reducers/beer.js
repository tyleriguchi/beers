import { combineReducers } from 'redux';
import { ADD_BEER } from '../actions/Beers';
import SeedData from '../seed';

const beers = (state = SeedData, action) => {
  console.log('add beer', action)
  switch (action.type) {
    case ADD_BEER:
      return state;

    default:
      return state;
  }
}

export default beers;
