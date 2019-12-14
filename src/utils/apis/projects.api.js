import { account } from './base.api';
import createPostRequest from '../requests/createPostRequest';

const PROJECTS_URL = '/projects';

export const createProject = (data) => createPostRequest(account, PROJECTS_URL, data);