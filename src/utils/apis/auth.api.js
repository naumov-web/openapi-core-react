import { auth } from './base.api';
import createPostRequest from '../requests/createPostRequest';

const REGISTER_URL = '/register';
const LOGIN_URL = '/login';

export const postRegister = (payload) => createPostRequest(auth, REGISTER_URL, payload);

export const postLogin = (payload) => createPostRequest(auth, LOGIN_URL, payload)