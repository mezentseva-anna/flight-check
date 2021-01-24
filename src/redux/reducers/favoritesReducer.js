import { ADD_FAVORITES, LOGOUT } from '../actionTypes';

const state = JSON.parse(window.localStorage.getItem('state'));
let preloadedState = [];
console.log(state);

if (state) preloadedState = state.favorites

export const favoritesReducer = (state = preloadedState, action) => {
  switch (action.type) {

    case ADD_FAVORITES:
      return [...state, action.payload];

    case LOGOUT:
      return [];

    default:
      return state
  }
}