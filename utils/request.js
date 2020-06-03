import axios from 'axios'

const baseURL = process.env.NODE_ENV === 'production'
  ? 'http://m.bili.hlhs.store/api'
  : 'http://localhost:5012/api';

const service = axios.create({
  baseURL,
  timeout: 10 * 1000
})

export default service;
