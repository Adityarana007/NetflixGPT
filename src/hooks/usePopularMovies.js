import { useDispatch } from "react-redux";
import {  addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { apiOptions } from "../utils/constants";
import { POPULAR_MOVIES } from "../services/apiUrls";

const usePopularMovies = () => {
    const dispatch = useDispatch();

    const getMoviesData = async () => {
        const moviesResponse = await fetch(POPULAR_MOVIES, apiOptions);
        const responseJson = await moviesResponse.json();
        dispatch(addPopularMovies(responseJson?.results))
      }
    
      useEffect(() => {
        getMoviesData();
      }, [])
};

export default usePopularMovies;



