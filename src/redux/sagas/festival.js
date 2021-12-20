import { all, call, fork, put, takeLatest } from "@redux-saga/core/effects";
import FestivalService from "../../../pages/api/FestivalService";
import {
  getFestivalDetailSuccess,
  GET_FESTIVAL_DETAIL_REQUEST,
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

function* getFestivalDetailRequest({ payload }) {
  try {
    const { id } = payload;
    const response = yield call(FestivalService.getFestivalDetail, id);
    yield put(getFestivalDetailSuccess(response));
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

function* getFestivalDetailRequestWatcher() {
  yield takeLatest(GET_FESTIVAL_DETAIL_REQUEST, getFestivalDetailRequest);
}

export default function* festivalSaga() {
  yield all([
    fork(setFestivalWatcher),
    fork(searchFestivalRequestWatcher),
    fork(getFestivalDetailRequestWatcher),
  ]);
}
