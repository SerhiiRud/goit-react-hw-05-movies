import axios from 'axios';
export const BASE_URL = 'https://api.themoviedb.org/3';
export const USER_KEY = '9e4f0ad78cbe1148a9d4c0c8389afc83';

export async function fetchMovies(PARAMETERS) {
  try {
    const { data } = await axios.get(
      `${BASE_URL}${PARAMETERS}?api_key=${USER_KEY}`
    );
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

// const PARAMETERS_TRENDING = '/trending/all/day';
// const PARAMETERS_SEARCH = '/search/movie';
// const PARAMETERS_MOVIE_DETAILS = '/movie/{movie_id}';
// const PARAMETERS_MOVIE_CREDITS = '/movie/{movie_id}/credits';
// const PARAMETERS_MOVIE_REVIEWS = '/movie/{movie_id}/reviews';

//https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>
//https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
//https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
//https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US
//https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1
