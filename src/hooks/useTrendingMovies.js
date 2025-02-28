import { useDispatch } from "react-redux";
import { addTrendingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { apiOptions } from "../utils/constants";
import {  TRENDING_MOVIES } from "../services/apiUrls";

const useTrendingMovies = () => {
    const dispatch = useDispatch();

    const getMoviesData = async () => {
        const moviesResponse = await fetch(TRENDING_MOVIES, apiOptions);
        const responseJson = await moviesResponse.json();
        dispatch(addTrendingMovies(responseJson?.results))
      }
    
      useEffect(() => {
        getMoviesData();
      }, [])
};

export default useTrendingMovies;



