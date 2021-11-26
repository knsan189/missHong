import { all, fork } from "@redux-saga/core/effects";
import festivalSaga from "./festival";

export default function* rootSaga() {
  yield all([fork(festivalSaga)]);
}
