import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
  return (
    <div className='p-4 px-8 '>
            <h1 className='text-white text-xl font-semibold py-2'>{title}</h1>
        <div className='flex overflow-x-scroll'>
            <div className='flex'>
                {
                    movies?.map(item => <MovieCard key={item?.id} photo={item?.poster_path}/>)
                }
                
            </div>
        </div>
    </div>
  )
}

export default MovieList