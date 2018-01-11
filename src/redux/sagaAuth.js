import { put, takeEvery, all } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { showNotification } from 'admin-on-rest';
import { getToken } from '../api/helpers';

import { FETCH_ERROR, USER_CHECK } from 'admin-on-rest';

function* handleFetchError(data) {
  if ('error' in data && 'status' in data.error) {
    if (data.error.status === 401 || data.error.status === 403) {
      //  yield put(push('/login'));
    }
  }
}

function* handleUserCheck(data) {
  const token = getToken();
  if (!token && 'payload' in data && 'route' in data.payload) {
    /*CUSTOM routes dont work that way!*/
    switch (data.payload.route) {
      case 'dashboard':
        break;

      default:
        yield put(push('/login'));
    }
  }
}

export default function* saga() {
  yield all([
    takeEvery(FETCH_ERROR, handleFetchError),
    takeEvery(USER_CHECK, handleUserCheck)
  ]);
}
