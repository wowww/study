import Axios from 'axios';
import { LOGIN_USER, RESISTER_USER, AUTH_USER } from './types';


export function loginUser(dataTosubmit) {
  const request = Axios.post('/api/users/login', dataTosubmit)
        .then(response => response.data)
  return {
    type: LOGIN_USER,
    payload: request
  }
}

export function resisterUser(dataTosubmit) {
  const request = Axios.post('/api/users/resister', dataTosubmit)
        .then(response => response.data)
  return {
    type: RESISTER_USER,
    payload: request
  }
}

export function auth() {
  const request = Axios.get('/api/users/auth', dataTosubmit)
        .then(response => response.data)
  return {
    type: AUTH_USER,
    payload: request
  }
}