const BASE_URL = 'https://api.themoviedb.org/3/movie/';
export const MOVIES_LIST = BASE_URL + 'now_playing';
export const GET_MOVIE_TRAILER = (movieId) => `${BASE_URL}${movieId}/videos`;

