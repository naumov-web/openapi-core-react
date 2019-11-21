import { account } from './base.api';
import createGetRequest from '../requests/createGetRequest';
import createPutRequest from '../requests/createPutRequest';

const USER_URL = '/user';

export const getProfile = () => createGetRequest(account, USER_URL);

export const updateProfile = (data) => createPutRequest(account, USER_URL, data);