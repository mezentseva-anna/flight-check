import { ADD_FAVORITE, DELETE_FAVORITE } from '../actionTypes';

const state = JSON.parse(window.localStorage.getItem('favorites'));
let preloadedState = [];

if (state) preloadedState = state

export const favoritesReducer = (state = preloadedState, action) => {
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