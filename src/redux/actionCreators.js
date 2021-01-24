import { ADD_FAVORITES, ADD_USER, LOGOUT } from './actionTypes';

export const addUserAC = (payload) => {
  return {
    type: ADD_USER,
    payload
  }
}

export const addFavoritesAC = (payload) => {
  return {
    type: ADD_FAVORITES,
    payload
  }
}

export const logoutUserAC = () => {
  return {
    type: LOGOUT,
  }
}

export const logoutFavoritesAC = () => {
  return {
    type: LOGOUT,
  }
}