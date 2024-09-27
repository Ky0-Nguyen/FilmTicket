import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { faker } from '@faker-js/faker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FilmType } from 'core/type';

type FilmState = {
  list: FilmType[];
  favorites: FilmType[];
  booked: FilmType[];
}

const generateFilmData = (count: number = 1000): FilmType[] => {
  let films: FilmType[] = [];
  for (let i = 0; i < count; i++) {
    films.push({
      id: faker.string.uuid(),
      title: faker.lorem.sentence(),
      description: faker.lorem.paragraph(),
      imageUrl: faker.image.url(),
      isBooked: false,
      isFavorited: false,
    });
  }
  return films;
};

const initialState: FilmState = {
  list: [],
  favorites: [],
  booked: [],
};

const filmSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
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
    // toggleFavorite: (state, action: PayloadAction<string>) => {
    //     const film = state.list.find((film) => film.id === action.payload);
    //     if (film) {
    //       film.isFavorited = !film.isFavorited;
    //       if (film.isFavorited) {
    //         state.favorites.push(film);
    //       } else {
    //         state.favorites = state.favorites.filter(
    //           (favorite) => favorite.id !== action.payload
    //         );
    //       }
    //     }
    //   },    
    //   bookFilm: (state, action: PayloadAction<string>) => {
    //     const film = state.list.find((film) => film.id === action.payload);
    //     if (film && !film.isBooked) {
    //       film.isBooked = true;
    //       state.booked.push(film);
    //     }
    //   },
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
export const { setFilms, setBooked, addBooked, setFavorites, addFavorite } = filmSlice.actions;
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

export const fetchFilms = (dispatch: any) => {
  const films = generateFilmData();
  dispatch(setFilms(films));
};