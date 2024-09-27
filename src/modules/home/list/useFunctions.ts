import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import { fetchFilms } from "store/reducer";
import { loadMoviesFromStorage } from "store/reducer/film.reducer";
import { FilmType } from "core/type";
import { findIndex } from "lodash";

export const useListFilmFunctions = () => {
    const dispatch = useDispatch();
    const films = useSelector((state: RootState) => state.films.list)
    const favoriteFilms = useSelector((state: RootState) => state.films.favorites) || []
    const bookedFilms = useSelector((state: RootState) => state.films.booked) || []
    useEffect(() => {
        fetchFilms(dispatch)
        loadMoviesFromStorage(dispatch)
    }, [dispatch]);

    const checkFavorited = useCallback((film: FilmType) => {
        return findIndex(favoriteFilms, (i: FilmType) => i.id === film.id) !== -1
    }, [favoriteFilms])

    const checkBooked = useCallback((film: FilmType) => {
        return findIndex(bookedFilms, (i: FilmType) => i.id === film.id) !== -1
    }, [bookedFilms])

    return {
        films, favoriteFilms, bookedFilms,
        dispatch, checkFavorited, checkBooked
    }
}