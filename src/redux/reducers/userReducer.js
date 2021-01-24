import { ADD_USER, LOGOUT } from '../actionTypes';

const state = JSON.parse(window.localStorage.getItem('state'));
let preloadedState = {};
console.log(state);

if (state) preloadedState = state.user;

export const userReducer = (state = preloadedState, action) => {

  switch (action.type) {

    case ADD_USER:
      return {
        ...state,
        user: action.payload
      };
    case LOGOUT:
      localStorage.clear();
      return {};

    default:
      return state
  }
}