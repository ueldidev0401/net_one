import * as types from './ActionTypes';

export function setUserRole(role) {
  return { type: types.SET_USER_ROLE, payload: role };
}
export function setInfo(data) {
  return { type: types.SET_ALL_USER_INFO, payload: data };
}

