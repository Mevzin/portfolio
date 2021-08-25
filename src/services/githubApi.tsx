import axios from 'axios';

export const githubApi = axios.create({
  baseURL: process.env.REACT_APP_GIT_URL,
});