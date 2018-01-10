import { CHANGE_THEME } from './types';

const changeThemeReducer = (previousState = 'light', { type, payload }) => {
  if (type === CHANGE_THEME) {
    return payload;
  }
  return previousState;
};

export default { userdata: changeThemeReducer };
