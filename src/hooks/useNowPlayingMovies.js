import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { apiOptions } from "../utils/constants";
import { MOVIES_LIST } from "../services/apiUrls";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector(store => store.movies?.nowPlayingMoviesList)

    const getMoviesData = async () => {
        const moviesResponse = await fetch(MOVIES_LIST, apiOptions);
        const responseJson = await moviesResponse.json();
        dispatch(addNowPlayingMovies(responseJson?.results))
      }
    
      useEffect(() => {
        !nowPlayingMovies && getMoviesData();
      }, [])
};

export default useNowPlayingMovies;

