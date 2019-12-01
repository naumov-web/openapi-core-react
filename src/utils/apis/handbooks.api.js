import { handbooks } from './base.api';
import createGetRequest from '../requests/createGetRequest';

const HANDBOOKS_ALL_URL = '/public/all';

export const getAllHandbooks = () => createGetRequest(handbooks, HANDBOOKS_ALL_URL);