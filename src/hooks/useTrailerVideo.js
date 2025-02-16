import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { GET_MOVIE_TRAILER } from '../services/apiUrls';
import { apiOptions } from '../utils/constants';
import { addTrailerVideo } from '../utils/movieSlice';

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchTrailer();
  }, []);

//   Fetch trailer video & updating the store with trailer video data
  const fetchTrailer = async () => {
    const moviesVideoResponse = await fetch(
      GET_MOVIE_TRAILER(movieId),
      apiOptions
    );
    const responseJson = await moviesVideoResponse.json();
    const filteredTrailer = responseJson?.results?.filter(
      (item) => item?.type === "Trailer"
    );
    const trailerVideo =
      filteredTrailer?.length > 0
        ? filteredTrailer[0]
        : responseJson?.results[0];
    dispatch(addTrailerVideo(trailerVideo))
    // dispatch(addNowPlayingMovies(responseJson?.results))
  };
}

export default useTrailerVideo