import { ADD_FAVORITES, ADD_USER, LOGOUT, START_FETCH, FETCH_FLIGHT } from './actionTypes';

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

// export const logoutFavoritesAC = () => {
//   return { type: LOGOUT }
// }

export const startFetch = (payload) => {
  return { type: START_FETCH, payload }
}

export const fetchFlightAC = () => {
  return { type: FETCH_FLIGHT }
}
