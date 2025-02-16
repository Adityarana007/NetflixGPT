import React from 'react'
import { MOVIE_LOGO_URL } from '../utils/constants'

const MovieCard = ({photo}) => {
  return (
    <div className='w-48 pr-4'>
        <img alt='Unable to load movie card' src={MOVIE_LOGO_URL + photo}/>
    </div>
  )
}

export default MovieCard