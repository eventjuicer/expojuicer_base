import {
  CHANGE_THEME,
  SPECIAL_MESSAGE_SHOW,
  SHOW_MODAL,
  CLOSE_MODAL
} from './types';

const changeThemeReducer = (previousState = 'light', { type, payload }) => {
  if (type === CHANGE_THEME) {
    return payload;
  }
  return previousState;
};

const specialmessageReducer = (previousState = '', { type, msg }) => {
  if (type === SPECIAL_MESSAGE_SHOW) {
    return msg;
  }

  return previousState;
};

const modalReducer = (previousState = '', { type, payload }) => {
  switch (type) {
    case SHOW_MODAL:
      return payload;
      break;

    case CLOSE_MODAL:
      return null;
      break;

    default:
      return previousState;
  }
};

export default {
  modal: modalReducer,
  userdata: changeThemeReducer,
  specialmessage: specialmessageReducer
};
