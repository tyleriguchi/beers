import { combineReducers } from 'redux'
import { routeReducer as router } from 'redux-simple-router'
import beers from './reducers/beer'

export default combineReducers({
  beers,
  router
})
