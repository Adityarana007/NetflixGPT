import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { apiOptions, BG_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { searchedMovies } from '../utils/movieSlice';
import { SEARCH_MOVIE } from '../services/apiUrls';

const GptSearchPage = () => {
  const dispatch = useDispatch();

  const searchMovieHandler = async (movieName) =>{
    console.log('moviename', movieName)
    if(movieName?.length > 0){
      const moviesResponse = await fetch(SEARCH_MOVIE(movieName), apiOptions);
      const responseJson = await moviesResponse.json();
      console.log('moviesSearchList', responseJson)
      dispatch(searchedMovies(responseJson?.results))
    } else {
      dispatch(searchedMovies([]))
    }
   
  }
  return (
    <div>
       {/* Background Image */}
       <div className="absolute inset-0 -z-10">
        <img
          className="w-full h-full object-cover"
          src={BG_URL}
          alt="Background"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      <GptSearchBar searchMovie={searchMovieHandler} />
      <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearchPage;