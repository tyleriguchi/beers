import { combineReducers } from 'redux';
import { ADD_BEER } from '../constants/BeerActionTypes';
import SeedData from '../seed';
import * as uuid from 'node-uuid';

const beers = (state = SeedData, action) => {
  switch (action.type) {
    case ADD_BEER:
      const beer = action.beer;
      beer.id = uuid.v4();

      return [
        beer,
        ...state
      ]

    default:
      return state;
  }
}

export default beers;
