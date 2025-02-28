import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMoviesList: null,
        trailerVideo: null,
        popularMovies: null,
        trendingMovies: null,
        upcomingMovies: null,
        searchedMoviesList: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMoviesList =  action.payload
        },
        addTrailerVideo: (state, action)=> {
            state.trailerVideo = action.payload
        },
        addPopularMovies:  (state, action)=> {
            state.popularMovies = action.payload
        },
        addTrendingMovies:  (state, action)=> {
            state.trendingMovies = action.payload
        },
        addUpcomingMovies:  (state, action)=> {
            state.upcomingMovies = action.payload
        },
        searchedMovies: (state, action) => {
            state.searchedMoviesList = action.payload

        }
    }
});

export const {addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTrendingMovies, addUpcomingMovies, searchedMovies} = movieSlice.actions;

export default movieSlice.reducer;