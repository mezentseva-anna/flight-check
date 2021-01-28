import { ADD_FLIGHT, CHANGE_FLAG } from '../actionTypes';

export const flightReducer = (state=null, action) => {
  switch (action.type) {

    case ADD_FLIGHT:
      return action.payload;

    case CHANGE_FLAG:
      let index = state.findIndex(el => el.id === action.payload);
      state[index].flag = !state[index].flag;
      window.localStorage.setItem('flights', JSON.stringify(state));

      return state

    default:
      return state
  }
}
