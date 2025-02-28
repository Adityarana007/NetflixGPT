import { useDispatch } from "react-redux";
import { addTrendingMovies, addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { apiOptions } from "../utils/constants";
import { UPCOMING_MOVIES } from "../services/apiUrls";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();

    const getMoviesData = async () => {
        const moviesResponse = await fetch(UPCOMING_MOVIES, apiOptions);
        const responseJson = await moviesResponse.json();
        dispatch(addUpcomingMovies(responseJson?.results))
      }
    
      useEffect(() => {
        getMoviesData();
      }, [])
};

export default useUpcomingMovies;



