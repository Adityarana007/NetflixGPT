import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GptMovieSuggestions = () => {
const searchedMovies = useSelector(store => store?.movies?.searchedMoviesList)
console.log('searchedMovies__', searchedMovies)
  return (
    <div>
             <MovieList
            title={"Searched results for"}
            movies={searchedMovies}
          />
    </div>


  )
}

export default GptMovieSuggestions