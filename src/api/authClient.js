

import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_CHECK, AUTH_ERROR, AUTH_GET_PERMISSIONS } from 'admin-on-rest';

import {validateToken} from './helpers'

import {fetchUtils} from 'admin-on-rest';


export default (type, params) => {


    if(type === AUTH_GET_PERMISSIONS)
    {
      //return Promise.reject();
        return Promise.resolve("admin");

    }

      // console.log(type);

    if (type === AUTH_LOGIN) {


        localStorage.removeItem('profiles');

        const { email, password, token } = params;

        const options = {headers: new Headers(
          { Accept: 'application/json',
          'x-token' : `${token}`}
        )};

        options.method = "POST";
        options.body = JSON.stringify(params);

        if(password === undefined && token === undefined)
        {

          return fetchUtils.fetchJson('https://api.eventjuicer.com.local/v1/restricted/authenticate', options)
          .then(response => {
                  if (response.status < 200 || response.status >= 300)
                  {
                      throw new Error("Ooops!");
                  }
                  return response.json;
              })
          .then((response) => {

            console.log(response);
            //localStorage.setItem('token', token);



            return Promise.reject("auth.checkEmail");

          });


        }

        console.log(email, password, token);

          return Promise.reject();





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

      const { resource } = params;
       if (resource === 'posts') {
           // check credentials for the posts resource
       }
       return Promise.resolve();
       return Promise.reject({ redirectTo: '/no-access' });
      // return Promise.reject();
  //      return localStorage.getItem('profiles') ? Promise.resolve() : Promise.reject();
    }
    return Promise.reject('Unkown method');
};
