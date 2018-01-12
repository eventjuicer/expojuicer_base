import { cyan500, pinkA200 } from 'material-ui/styles/colors';
import { fetchUtils } from 'admin-on-rest';
import get from 'lodash/get';

export const validateToken = token => {
  return /^[a-z0-9]{32,40}$/.test(token);
};

export const storeUserData = (token, profile) => {
  localStorage.setItem('token', token);
  localStorage.setItem('profile', JSON.stringify(profile));
};

export const getUserData = path => {
  const profile = JSON.parse(localStorage.getItem('profile'));
  return path !== undefined ? get(profile, path) : profile;
};

export const clearUserData = () => {
  localStorage.removeItem('profile');
  localStorage.removeItem('token');
};

export const refreshUserData = (token = getToken) => {
  const options = {
    headers: new Headers({
      Accept: 'application/json',
      'x-token': `${token}`
    })
  };

  return fetchUtils
    .fetchJson(`${process.env.REACT_APP_API_ENDPOINT}/me`, options)
    .then(response => {
      if ('data' in response.json) {
        storeUserData(token, response.json.data);
        return Promise.resolve();
      }

      return Promise.reject('Bad API answer.');
    });
};

export const getToken = () => {
  const token = localStorage.getItem('token');
  return validateToken(token) ? token : false;
};

export const getCompanyName = () => {
  return 'ACME Inc.';
};

export const getColorsFromTheme = theme => {
  if (!theme) return { primary1Color: cyan500, accent1Color: pinkA200 };
  const { palette: { primary1Color, accent1Color } } = theme;
  return { primary1Color, accent1Color };
};
