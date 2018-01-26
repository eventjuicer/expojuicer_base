import { put, takeEvery, all, delay } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import {
  CRUD_GET_LIST,
  CRUD_GET_LIST_SUCCESS,
  showNotification
} from 'admin-on-rest';

import { SPECIAL_MESSAGE_SHOW } from '../types';
import { setSpecialMessage as setSpecialMessageAction } from '../actions';

function* handleSpecialMessage(data) {
  switch (data.type) {
    case CRUD_GET_LIST:
      yield put(setSpecialMessageAction(''));

      break;

    case CRUD_GET_LIST_SUCCESS:
      if ('total' in data.payload && data.payload.total === 0) {
        //  yield put(setSpecialMessageAction(`resources.${data.meta.resource}`));
        yield put(
          showNotification(`resources.${data.meta.resource}.noresults`)
        );
      }
      break;
  }
}

export default function* saga() {
  yield all([
    takeEvery(CRUD_GET_LIST, handleSpecialMessage),
    takeEvery(CRUD_GET_LIST_SUCCESS, handleSpecialMessage)
  ]);
}
