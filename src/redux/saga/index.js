import * as api from "../../utils/api/apiCaller";
import * as types from "../../types/Actiontypes";
import * as loginTypes from "../../types/logintypes";
import { showLoading, hideLoading, hideRegister } from "./../actions/uiAction";
import {
  call,
  cancel,
  cancelled,
  fork,
  put,
  take,
  takeEvery,
  delay,
} from "redux-saga/effects";
import { push } from "react-router-redux";
export function* watchPost() {
  yield takeEvery(types.LIST_POST_REQUEST, getListPost);
  yield takeEvery(types.POST_REQUEST, addPost);
  yield takeEvery(types.LIST_USER_REQUEST, getListUser);
  yield takeEvery(loginTypes.REGISTER_REQUEST, register);
  yield takeEvery(loginTypes.LOGIN_REQUEST, login);
}
export function* getListPost(action) {
  let { listPostID } = action;

  try {
    const data = yield call(api.getListPost, { listPostID });
    yield put({ type: types.LIST_POST_SUCCESS, data });
    console.log(data, "data");
  } catch (error) {
    yield put({ type: types.LIST_POST_ERROR, error });
  }
}
export function* addPost(action) {
  let { post } = action;
  try {
    yield put(showLoading());
    const data = yield call(api.addPost, post);
    yield put({ type: types.POST_SUCCESS, data });
  } catch (error) {
    yield put({ type: types.POST_ERROR, error });
  }
  yield delay(1000);
  yield put(hideLoading());
}

export function* getListUser(action) {
  try {
    const data = yield call(api.getListUser);
    yield put({ type: types.LIST_USER_SUCCESS, data });
  } catch (error) {
    yield put({ type: types.LIST_USER_ERROR, error });
  }
}

export function* register(action) {
  let { name, email, password } = action;
  try {
    yield put(showLoading());
    const data = yield call(api.register, { name, email, password });
    yield put({ type: loginTypes.REGISTER_SUCCESS, data });
  } catch (error) {
    yield put({ type: loginTypes.REGISTER_ERROR, error });
  }
  yield put(hideRegister());
  yield delay(1000);
  yield put(hideLoading());
}

export function* login(action) {
  let { email, password } = action;
  try {
    const data = yield call(api.login, { email, password });
    yield put({ type: loginTypes.LOGIN_SUCCESS, data });
  } catch (error) {
    console.log(error, "error-action");
    yield put({ type: loginTypes.LOGIN_ERROR, error });
  }
}
