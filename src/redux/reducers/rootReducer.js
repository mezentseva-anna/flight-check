import { applyMiddleware, combineReducers } from 'redux';
import { favoritesReducer } from './favoritesReducer';
import { userReducer } from './userReducer';
import { flightReducer } from './flightReducer';

const appReducer = combineReducers({
  user: userReducer,
  favorites: favoritesReducer,
  flights: flightReducer
})

export const rootReducer = (state, action) => {
  switch (action.type) {
    case 'RESET':
      localStorage.clear();
      return { user: null, favorites: null, flight: null }
    default:
      return appReducer(state, action)
  }
}