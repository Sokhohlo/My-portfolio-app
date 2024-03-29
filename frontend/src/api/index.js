import axios from 'axios';

const api = axios.create({
  // baseURL: `http://kamvamindpal.com/v1/`,
  baseURL: `http://kamvamindpal.com/v1/`,
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle the error
    if (error.code === 'ERR_NETWORK') {
      // Handle the ERR_CONNECTION_REFUSED error
      // window.location = '/server_down_page_path';
    }
    return Promise.reject(error);
  }
);

export default api;
