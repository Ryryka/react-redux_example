import axios from 'axios';

export default function mainRequest(action, path, requestBody) {
  const SERVER_URL = 'http://localhost:3000/';
  return axios[action](SERVER_URL + path, requestBody)
    .then(res => res)
    .catch(error => ({status: 'error', error}));
}
