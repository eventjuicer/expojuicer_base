
import {CHANGE_THEME, SET_USER} from './types';

export const changeTheme = theme => ({
    type: CHANGE_THEME,
    payload: theme,
});

export const setUser = user => ({
    type: SET_USER,
    payload: user,
});
