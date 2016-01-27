import { combineReducers } from 'redux';
import { ADD_BEER, UPDATE_BEER } from '../constants/BeerActionTypes';
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

    case UPDATE_BEER:
      return state.map( (beer) => {
        return beer.id === action.beer.id
          ? Object.assign({}, beer, action.beer)
          : beer
      })
    default:
      return state;
  }
}

export default beers;
