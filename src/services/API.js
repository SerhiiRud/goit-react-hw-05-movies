import axios from 'axios';
export const BASE_URL = 'https://api.themoviedb.org/3';
export const USER_KEY = '9e4f0ad78cbe1148a9d4c0c8389afc83';
export const prePoster = 'https://image.tmdb.org/t/p/original/';

export async function fetchTrendingMovies() {
  const { data } = await axios.get(
    `${BASE_URL}/trending/all/day?api_key=${USER_KEY}`
  );
  return data;
}

export async function fetchMovieId(movieId) {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${movieId}?api_key=${USER_KEY}`
  );
  return data;
}

export async function fetchMovieCast(movieId) {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${USER_KEY}`
  );
  return data;
}

export async function fetchMovieReviews(movieId) {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${USER_KEY}`
  );
  return data;
}

export async function fetchMovieSearch(query) {
  const { data } = await axios.get(
    `${BASE_URL}/search/movie?api_key=${USER_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );
  return data;
}
