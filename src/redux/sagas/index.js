import { all, fork } from "@redux-saga/core/effects";
import festivalSaga from "./festival";
import userSage from "./user";

export default function* rootSaga() {
  yield all([fork(festivalSaga), fork(userSage)]);
}
