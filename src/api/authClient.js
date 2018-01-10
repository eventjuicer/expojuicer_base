

import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_CHECK, AUTH_ERROR, AUTH_GET_PERMISSIONS } from 'admin-on-rest';
import {fetchUtils} from 'admin-on-rest';
import {validateToken, checkHttpStatusCode, storeUserData, clearUserData} from './helpers'


export default (type, params) => {

    if(type === AUTH_GET_PERMISSIONS)
    {
      //return Promise.reject();
        return Promise.resolve("admin");
    }

    if (type === AUTH_LOGIN)
    {

        clearUserData();

        const { email, password, token } = params;

        const options = {headers: new Headers(
          { Accept: 'application/json',
          'x-token' : `${token}`}
        )};

        if(token !== undefined && validateToken(token))
        {

          return fetchUtils.fetchJson(`${process.env.REACT_APP_API_ENDPOINT}/me`, options)
          .then(checkHttpStatusCode)
          .then((response) => {
            //TODO...checm response
            storeUserData(token, response);
            return Promise.resolve();
          });

        }
        else
        {
          options.method = "POST";
          options.body = JSON.stringify(params);

          return fetchUtils.fetchJson(`${process.env.REACT_APP_API_ENDPOINT}/authenticate`, options)
          .then(checkHttpStatusCode)
          .then((response) => {

            console.log(response);
            //storeUserData(token, response);
            //localStorage.setItem('token', token);
            //return Promise.resolve();
            return Promise.reject("auth.checkEmail");

          });

        }


    }
    if (type === AUTH_LOGOUT) {

        clearUserData();

        //console.log("wylogowano");
        return Promise.reject();
    }

    if (type === AUTH_ERROR) {
        const { status } = params;
        if (status === 401 || status === 403) {
            clearUserData();
            return Promise.reject();
        }
        return Promise.resolve();
    }
    if (type === AUTH_CHECK)
    {

      const { resource } = params;
       if (resource === 'posts') {
           // check credentials for the posts resource
       }

       return localStorage.getItem('token') ? Promise.resolve() : Promise.reject({ redirectTo: '/login?1' });
    }
    return Promise.reject('Unkown method');
};
