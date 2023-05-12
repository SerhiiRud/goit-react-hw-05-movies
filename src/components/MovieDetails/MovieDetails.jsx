import { useState, useEffect } from 'react';
import { Outlet, Link, useParams } from 'react-router-dom';
import { fetchMovies } from 'services/API';

const MovieDetails = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState({});
  const PARAMETERS_MOVIE_DETAILS = `/movie/${movieId}`;

  useEffect(() => {
    const fetchData = async param => {
      const res = await fetchMovies(param);
      console.log(res);
      setMovie(res);
    };
    fetchData(PARAMETERS_MOVIE_DETAILS);
  }, [PARAMETERS_MOVIE_DETAILS]);

  const title = movie.title || movie.name;
  //   console.log(movie);
  //const year = movie.release_date.slice(0, 4);
  //     movie.release_date
  // ? movie.release_date.slice(0, 4)
  // : movie.first_air_date.slice(0, 4);
  //movie.release_date.slice(0, 4) || movie.first_air_date.slice(0, 4)

  return (
    <div>
      <div></div>
      <div>
        <h1>{title} (year)</h1>
        <p></p>
      </div>

      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
