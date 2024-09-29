import { takeLatest, put, call } from 'redux-saga/effects';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FilmType } from 'core/type';
import {
  fetchFilms,
  fetchFilmsSuccess,
  fetchFilmsFailure,
  setFavorites,
  setBooked
} from '../reducer/film.reducer';
import { generateFilmData } from 'core/utils';

function* fetchFilmsSaga() {
  try {
    const films: FilmType[] = yield call(generateFilmData);
    yield put(fetchFilmsSuccess(films));
  } catch (error: unknown) {
    if (error instanceof Error) {
      yield put(fetchFilmsFailure(error.message));
    } else {
      yield put(fetchFilmsFailure('An unknown error occurred'));
    }
  }
}

function* loadMoviesFromStorageSaga(): Generator<any, void, any> {
  try {
    const favoritesJson: string | null = yield call(AsyncStorage.getItem, '@favorites');
    const bookedJson: string | null = yield call(AsyncStorage.getItem, '@booked');
    
    if (favoritesJson !== null) {
      const favorites: FilmType[] = JSON.parse(favoritesJson);
      yield put(setFavorites(favorites));
    }
    if (bookedJson !== null) {
      const booked: FilmType[] = JSON.parse(bookedJson);
      yield put(setBooked(booked));
    }
  } catch (e) {
    console.error('Failed to load movies from AsyncStorage', e);
  }
}

export default function* filmSaga() {
  yield takeLatest(fetchFilms.type, fetchFilmsSaga);
  yield takeLatest('LOAD_MOVIES_FROM_STORAGE', loadMoviesFromStorageSaga);
}