import { combineReducers } from 'redux';
import { routeReducer as router } from 'redux-simple-router';
import {reducer as formReducer} from 'redux-form';
import beers from './reducers/beer';

export default combineReducers({
  beers,
  router,
  form: formReducer
})
