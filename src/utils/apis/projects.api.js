import { account } from './base.api';
import createGetRequest from '../requests/createGetRequest';
import createPostRequest from '../requests/createPostRequest';
import httpBuildQuery from '../http_build_query';

const PROJECTS_URL = '/projects';

export const createProject = (data) => createPostRequest(account, PROJECTS_URL, data);

export const getProjects = (data) => createGetRequest(account, httpBuildQuery(PROJECTS_URL, data));