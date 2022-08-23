import axios from 'axios';

const req = axios.create({
  baseURL: ' http://localhost:8888',
});

export { req };
