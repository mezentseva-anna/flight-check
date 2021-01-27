import { ADD_FAVORITE, DELETE_FAVORITE } from '../actionTypes';

const state = JSON.parse(window.localStorage.getItem('state'));
let preloadedState = [];

if (state) preloadedState = state.favorites

export const favoritesReducer = (state = preloadedState, action) => {
  switch (action.type) {

    case ADD_FAVORITE:
      return [...state, action.payload];

      case DELETE_FAVORITE:
      // const copy = [...state].filter(el=>el.id!==action.payload);
      return [...state.filter(el=>el!==action.payload)]

    default:
      return state
  }
}