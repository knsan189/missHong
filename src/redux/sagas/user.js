import { all, call, fork, put, takeLatest } from "@redux-saga/core/effects";
import GeolocationService from "../../../pages/api/GeolocationService";
import {
  getCurrentLocationSuccess,
  GET_CURRENT_LOCATION_REQUEST,
} from "../reducers/user";

function* getCurrentLocationRequest() {
  try {
    const { latitude, longitude } = yield call(
      GeolocationService.getCurrentPosition
    );
    const location = { lng: longitude, lat: latitude };
    yield put(getCurrentLocationSuccess(location));
  } catch (err) {
    console.log(err);
    yield;
  }
}

function* getCurrentLocationRequestWatcher() {
  yield takeLatest(GET_CURRENT_LOCATION_REQUEST, getCurrentLocationRequest);
}

export default function* userSage() {
  yield all([fork(getCurrentLocationRequestWatcher)]);
}
