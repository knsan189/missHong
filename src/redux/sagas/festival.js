import { all, call, fork, put, takeLatest } from "@redux-saga/core/effects";
import FestivalService from "../../../pages/api/FestivalService";
import {
  searchFestivalSuccess,
  SEARCH_FESTIVALS_REQUEST,
  SET_FESTIVALS,
} from "../reducers/festival";

function* setFestival({ payload }) {
  yield;
}

function* searchFestivalRequest({ payload }) {
  try {
    const { text, pageNo } = payload;
    const response = yield call(FestivalService.searchKeyword, text, pageNo);
    yield put(searchFestivalSuccess(response.items.item));
  } catch (error) {
    yield;
  }
}

function* setFestivalWatcher() {
  yield takeLatest(SET_FESTIVALS, setFestival);
}

function* searchFestivalRequestWatcher() {
  yield takeLatest(SEARCH_FESTIVALS_REQUEST, searchFestivalRequest);
}

export default function* festivalSaga() {
  yield all([fork(setFestivalWatcher), fork(searchFestivalRequestWatcher)]);
}
