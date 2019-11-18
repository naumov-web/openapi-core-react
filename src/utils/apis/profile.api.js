import { account } from './base.api';
import createGetRequest from '../requests/createGetRequest';

const USER_URL = '/user';

export const getProfile = () => createGetRequest(account, USER_URL);