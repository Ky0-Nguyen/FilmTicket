import { all } from 'redux-saga/effects';
import filmSaga from './film.saga';

export default function* rootSaga() {
    yield all([
        filmSaga(),
    ]);
}