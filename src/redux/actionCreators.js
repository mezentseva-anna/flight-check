import { ADD_FAVORITE, ADD_USER, LOGOUT, START_FETCH, FETCH_FLIGHT, ADD_FLIGHT, DELETE_FAVORITE } from './actionTypes';

export const addUserAC = (payload) => {
  return {
    type: ADD_USER,
    payload
  }
}

export const addFavoriteAC = (payload) => {
  return {
    type: ADD_FAVORITE,
    payload
  }
}

export const logoutUserAC = () => {
  return {
    type: LOGOUT,
  }
}

export const startFetch = (payload) => {
  return { type: START_FETCH, payload }
}

export const fetchFlightAC = () => {
  return { type: FETCH_FLIGHT }
}

export const addFlightAC = (payload) => {
  return {
    type: ADD_FLIGHT,
    payload
  }
}

export const deleteFavoriteAC = () => {
  return { type: DELETE_FAVORITE }
}