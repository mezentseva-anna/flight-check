import { ADD_FLIGHT } from '../actionTypes';

export const flightReducer = (state =[], action) => {
  switch (action.type) {

    case ADD_FLIGHT:
      return  action.payload;

    default:
      return state
  }
}