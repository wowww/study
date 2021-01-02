import { LOGIN_USER, RESISTER_USER } from '../_action/types';

export default function (state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {...state, loginSuccess: action.payload }
      break;
    case RESISTER_USER:
      return {...state, resister: action.payload }
      break;
    default:
      return state;
  }
}