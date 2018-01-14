import {
  CHANGE_THEME,
  SPECIAL_MESSAGE_SHOW
} from './types';

const changeThemeReducer = (previousState = 'light', { type, payload }) => {
  if (type === CHANGE_THEME) {
    return payload;
  }
  return previousState;
};


const specialmessageReducer = (previousState = "", {type, msg}) => {

  if(type === SPECIAL_MESSAGE_SHOW)
  {
    return msg;
  }

  return previousState;
}


export default { userdata: changeThemeReducer, specialmessage : specialmessageReducer };
