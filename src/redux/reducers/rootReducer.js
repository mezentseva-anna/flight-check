import { combineReducers } from 'redux';
import { favoritesReducer } from './favoritesReducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
  user: userReducer,
  favorites: favoritesReducer
})