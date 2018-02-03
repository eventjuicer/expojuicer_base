import {
  CHANGE_THEME,
  SET_USER,
  SPECIAL_MESSAGE_SHOW,
  SHOW_MODAL,
  CLOSE_MODAL,

  RESOURCE_LIMIT_SHOW,


} from './types';

export const changeTheme = theme => ({
  type: CHANGE_THEME,
  payload: theme
});

export const setUser = user => ({
  type: SET_USER,
  payload: user
});

export const setSpecialMessage = msg => ({
  type: SPECIAL_MESSAGE_SHOW,
  msg: msg
});

export const showModal = payload => ({
  type: SHOW_MODAL,
  payload: payload
});

export const closeModal = () => ({
  type: CLOSE_MODAL
});



export const setResponseLimit = (resource, limit) => ({
  type: RESOURCE_LIMIT_SHOW,
  resource: resource,
  limit: limit
});
