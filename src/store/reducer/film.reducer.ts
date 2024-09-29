import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FilmType } from 'core/type';

type FilmState = {
  list: FilmType[];
  favorites: FilmType[];
  booked: FilmType[];
  loading: boolean,
  error: any,
}



const initialState: FilmState = {
  list: [],
  favorites: [],
  booked: [],
  loading: false,
  error: null,
};

const filmSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    fetchFilms: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchFilmsSuccess: (state, action: PayloadAction<FilmType[]>) => {
      state.list = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchFilmsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    setFilms: (state, action: PayloadAction<FilmType[]>) => {
      state.list = action.payload;
    },
    setFavorites(state, action: PayloadAction<FilmType[]>) {
      state.favorites = action.payload;
    },
    setBooked(state, action: PayloadAction<FilmType[]>) {
      state.booked = action.payload;
    },
    addFavorite(state, action: PayloadAction<FilmType>) {
      state.favorites.push(action.payload);
    },
    addBooked(state, action: PayloadAction<FilmType>) {
      state.booked.push(action.payload);
    },
  },
});

export const saveFavoritesToStorage = async (favorites: FilmType[]) => {
  try {
    const jsonValue = JSON.stringify(favorites);
    await AsyncStorage.setItem('@favorites', jsonValue);
  } catch (e) {
    console.error('Failed to save favorites to AsyncStorage', e);
  }
};

export const saveBookedToStorage = async (booked: FilmType[]) => {
  try {
    const jsonValue = JSON.stringify(booked);
    await AsyncStorage.setItem('@booked', jsonValue);
  } catch (e) {
    console.error('Failed to save booked to AsyncStorage', e);
  }
};
export const {
  setFilms,
  setBooked,
  addBooked,
  setFavorites,
  addFavorite,
  fetchFilms,
  fetchFilmsSuccess,
  fetchFilmsFailure, } = filmSlice.actions;
export const loadMoviesFromStorage = async (dispatch: (arg0: any) => void) => {
  try {
    const favoritesJson = await AsyncStorage.getItem('@favorites');
    const bookedJson = await AsyncStorage.getItem('@booked');
    if (favoritesJson !== null) {
      const favorites: FilmType[] = JSON.parse(favoritesJson);
      dispatch(setFavorites(favorites));
    }
    if (bookedJson !== null) {
      const booked: FilmType[] = JSON.parse(bookedJson);
      dispatch(setBooked(booked));
    }
  } catch (e) {
    console.error('Failed to load movies from AsyncStorage', e);
  }
};



export default filmSlice.reducer;

// apply Thunk but I changing to Saga
// export const fetchFilms = (dispatch: any) => {
//   const films = generateFilmData();
//   dispatch(setFilms(films));
// };