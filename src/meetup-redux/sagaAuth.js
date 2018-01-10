import { put, takeEvery, all } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { showNotification } from 'admin-on-rest';

import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_CHECK, AUTH_ERROR } from 'admin-on-rest';

function* handleLogin() {
  yield put(showNotification('szkurde'));
  yield put(push('/chuj'));
}

export default function* reviewSaga() {
  yield all([takeEvery(AUTH_LOGIN, handleLogin)]);
}
