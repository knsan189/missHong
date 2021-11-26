import { all, call, fork, put, takeLatest } from "@redux-saga/core/effects";
import { SET_FESTIVALS } from "../reducers/festival";

function* setFestival({ payload }) {
  yield;
}

function* setFestivalWatcher() {
  yield takeLatest(SET_FESTIVALS, setFestival);
}

export default function* festivalSaga() {
  yield all([fork(setFestivalWatcher)]);
}
