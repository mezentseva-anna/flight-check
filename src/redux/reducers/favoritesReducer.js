import { ADD_FAVORITES, LOGOUT } from '../actionTypes';

const state = JSON.parse(window.localStorage.getItem('state'));
let preloadedState = [];

if (state) preloadedState = state.favorites

export const favoritesReducer = (state = preloadedState, action) => {
  switch (action.type) {

    case ADD_FAVORITES:
      return [...state, action.payload];

    // case LOGOUT:
    //   console.log('hi');
    //   localStorage.clear();

      // return [];

    default:
      return state
  }
}