import { combineReducers } from 'redux';
import { ADD_BEER } from '../constants/BeerActionTypes';
import SeedData from '../seed';
import * as uuid from 'node-uuid';

const beers = (state = SeedData, action) => {
  console.log('actions', action)
  console.log('b', ADD_BEER)
  switch (action.type) {
    case ADD_BEER:
      const beer = action.beer;
      beer.id = uuid.v4();
      console.log('beer', beer);
      return [
        beer,
        ...state
      ]

    default:
      return state;
  }
}

export default beers;
