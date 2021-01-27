import { ADD_FLIGHT, CHANGE_FLAG } from '../actionTypes';
const state = JSON.parse(window.localStorage.getItem('flights'));
let preloadedState = [];

if (state) preloadedState = state

export const flightReducer = (state = preloadedState, action) => {
  switch (action.type) {

    case ADD_FLIGHT:
      // window.localStorage.setItem('flights', JSON.stringify(action.payload));
      console.log(action.payload)
      return  action.payload;

      case CHANGE_FLAG:
        let index = state.findIndex(el => el.id === action.payload);
        state[index].flag = !state[index].flag;
      window.localStorage.setItem('flights', JSON.stringify(state));
        
        return state

    default:
      return state
  }
}