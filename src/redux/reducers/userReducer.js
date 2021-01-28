import { ADD_USER, LOGOUT } from '../actionTypes';

export const userReducer = (state=null, action) => {

  switch (action.type) {

    case ADD_USER:

      return action.payload;

    case LOGOUT:
      localStorage.clear();
      return {};

    default:
      return state;
  }
}
