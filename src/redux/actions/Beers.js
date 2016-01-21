import * as types from '../constants/BeerActionTypes';

export function addBeer(beer) {
  return {
    type: types.ADD_BEER,
    beer
  }
}
