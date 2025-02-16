import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies?.nowPlayingMoviesList && (
      <div className="bg-black">
        <div className="-mt-48 relative z-50">
         
          <MovieList
            title={"Now Playing"}
            movies={movies?.nowPlayingMoviesList}
          />
           {movies?.popularMovies && (
            <MovieList
              title={"Popular"}
              movies={movies?.popularMovies}
            />
          )}
        
        {movies?.trendingMovies && (
            <MovieList title={"Trending"} movies={movies?.trendingMovies} />
          )}
               
          {
            movies?.upcomingMovies && (
                <MovieList
                title={"Upcoming Movies"}
                movies={movies?.upcomingMovies}
              />
            )
          }
         
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
