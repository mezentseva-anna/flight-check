import { ADD_FAVORITE, DELETE_FAVORITE } from '../actionTypes';

export const favoritesReducer = (state=[], action) => {
  switch (action.type) {

    case ADD_FAVORITE:
      window.localStorage.setItem('favorites', JSON.stringify([...state, action.payload]));

      return [...state, action.payload];

    case DELETE_FAVORITE:
      window.localStorage.setItem('favorites', JSON.stringify([...state.filter(el => el !== action.payload)]));
      return [...state.filter(el => el !== action.payload)]

    default:
      return state
  }
}
