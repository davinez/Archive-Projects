import axios from 'axios';

const API_URL = 'https://mern-auth-apidavinez.herokuapp.com/api/auth/';

// 'signup' server route
const register = (username, email, password) => {
  return axios.post(API_URL + 'signup', {
    username,
    email,
    password,
  });
};

// 'signin' server route & save JWT to Local Storage
const login = (username, password) => {
  return axios
    .post(API_URL + 'signin', {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }

      return response.data;
    });
};

// remove JWT from Local Storage
const logout = () => {
  localStorage.removeItem('user');
};

// get stored user information (including JWT)
const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

export const authService = { register, login, logout, getCurrentUser };
