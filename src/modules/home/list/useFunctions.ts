import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import { fetchFilms } from "store/reducer";
import { FilmType } from "core/type";
import { findIndex } from "lodash";

export const useListFilmFunctions = () => {
    const dispatch = useDispatch();
    const { list: films, loading, error,
        favorites: favoriteFilms, booked: bookedFilms } = useSelector((state: RootState) => state.films);
    useEffect(() => {
        dispatch(fetchFilms())
        // loadMoviesFromStorage(dispatch)
        dispatch({ type: 'LOAD_MOVIES_FROM_STORAGE' });
    }, [dispatch]);

    const checkFavorited = useCallback((film: FilmType) => {
        return findIndex(favoriteFilms, (i: FilmType) => i.id === film.id) !== -1
    }, [favoriteFilms])

    const checkBooked = useCallback((film: FilmType) => {
        return findIndex(bookedFilms, (i: FilmType) => i.id === film.id) !== -1
    }, [bookedFilms])

    return {
        films, favoriteFilms, bookedFilms, error, loading,
        dispatch, checkFavorited, checkBooked
    }
}