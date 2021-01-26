import { applyMiddleware, combineReducers } from 'redux';
import { favoritesReducer } from './favoritesReducer';
import { userReducer } from './userReducer';

const appReducer = combineReducers({
  user: userReducer,
  favorites: favoritesReducer
})

export const rootReducer = (state,action)=>{
  switch(action.type){
    case 'RESET':
      localStorage.clear();
      return {user:null,favorites:null}
    default:
      return appReducer(state,action)
  }
}