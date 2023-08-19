import axios from 'axios';

const BASE_URL = process.env.BASE_URL || 'https://studies.cs.helsinki.fi/restcountries'

const get = (url) => {
  return axios.get(url)
    .then(response => {

      // console.log(response);
      return response.data;
    })
    .catch((error) => {
      // what to do?
      // console.log('error', error);
      return [];
    });
}

export const getAll = () => {
  const path = '/api/all';
  return get(`${BASE_URL}${path}`);
}

export const getCountry = (name) => {
  if (!name) return Promise.resolve([]);
  const path = `/api/name/${name}`;
  return get(`${BASE_URL}${path}`);
}

const Default = {
  getAll,
  getCountry,
};

export default Default;

