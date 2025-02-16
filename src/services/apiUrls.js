const BASE_URL = 'https://api.themoviedb.org/3/';
const BASE_URL_MOVIE = 'https://api.themoviedb.org/3/movie/';
export const MOVIES_LIST = BASE_URL_MOVIE + 'now_playing';
export const GET_MOVIE_TRAILER = (movieId) => `${BASE_URL_MOVIE}${movieId}/videos`;
export const POPULAR_MOVIES = BASE_URL_MOVIE + 'popular';
export const TRENDING_MOVIES = BASE_URL + 'trending/all/day';
export const UPCOMING_MOVIES = BASE_URL_MOVIE + 'upcoming';

