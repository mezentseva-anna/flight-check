import { ADD_FAVORITE, DELETE_FAVORITE } from '../actionTypes';

const state = JSON.parse(window.localStorage.getItem('state'));
let preloadedState = [];

if (state) preloadedState = state.favorites

export const favoritesReducer = (state = preloadedState, action) => {
  switch (action.type) {

    case ADD_FAVORITE:
      return [...state, action.payload];

      case DELETE_FAVORITE:
        return state.splice(state.length-1, 1);

    default:
      return state
  }
}