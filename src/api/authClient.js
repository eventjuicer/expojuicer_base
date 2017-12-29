

import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_CHECK, AUTH_ERROR, AUTH_GET_PERMISSIONS } from 'admin-on-rest';

import {validateToken} from './helpers'

import {fetchUtils} from 'admin-on-rest';


export default (type, params) => {


      // console.log(type);

    if (type === AUTH_LOGIN) {

        const { token } = params;

        const options = {headers: new Headers(
          { Accept: 'application/json',
          'x-token' : `${token}`}
        )};

        return fetchUtils.fetchJson('https://api.eventjuicer.com.local/v1/restricted/me', options)
        .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error("Bad token");
                }
                return response.json;
            })
        .then((response) => {

          console.log(response);
          //localStorage.setItem('token', token);


        });


        // let profiles = JSON.parse(localStorage.getItem("profiles"));
        //
        // if(profiles !== Object(profiles))
        // {
        //     profiles = {};
        // }
        //
        // profiles[token] = {...profiles[token], auth: true};
        //
        //
        // localStorage.setItem('profiles', JSON.stringify(profiles));
        // // accept all username/password combinations
        // return Promise.resolve();
    }
    if (type === AUTH_LOGOUT) {


        localStorage.removeItem('token');

        //console.log("wylogowano");

        return Promise.reject();
    }

    if (type === AUTH_ERROR) {
        const { status } = params;
        if (status === 401 || status === 403) {
            localStorage.removeItem('token');
            return Promise.reject();
        }
        return Promise.resolve();
    }
    if (type === AUTH_CHECK)
    {
      // return Promise.reject();
        return localStorage.getItem('profiles') ? Promise.resolve() : Promise.reject();
    }
    return Promise.reject('Unkown method');
};
