import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { apiOptions } from "../utils/constants";
import { MOVIES_LIST } from "../services/apiUrls";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const getMoviesData = async () => {
        const moviesResponse = await fetch(MOVIES_LIST, apiOptions);
        const responseJson = await moviesResponse.json();
        dispatch(addNowPlayingMovies(responseJson?.results))
      }
    
      useEffect(() => {
        getMoviesData();
      }, [])
};

export default useNowPlayingMovies;

