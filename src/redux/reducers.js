import {
  CHANGE_THEME,
  SPECIAL_MESSAGE_SHOW,
  SHOW_MODAL,
  CLOSE_MODAL,
  IMPORT_CHANGE_MAPPING,
  IMPORT_RESET_MAPPING,
  IMPORT_CHANGE_DATA,
  RESOURCE_LIMIT_SHOW
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

const resourceLimitReducer = (previousState = {}, payload) => {
  switch (payload.type) {
    case RESOURCE_LIMIT_SHOW:
      return { ...previousState, [payload.resource]: payload.limit };
      break;

    default:
      return previousState;
  }
};

const importReducer = (previousState = { data: {}, mappings: {} }, payload) => {
  switch (payload.type) {
    case IMPORT_CHANGE_MAPPING:
      return {
        ...previousState,
        mappings: { ...previousState.mappings, [payload.index]: payload.value }
      };
      break;

    case IMPORT_RESET_MAPPING:
      return { ...previousState, mappings: {} };
      break;

    case IMPORT_CHANGE_DATA:
      return { data: payload.data, mappings: {} };
      break;

    default:
      return previousState;
  }
};

export default {
  import: importReducer,
  modal: modalReducer,
  userdata: changeThemeReducer,
  specialmessage: specialmessageReducer,
  resourcelimit: resourceLimitReducer
};
