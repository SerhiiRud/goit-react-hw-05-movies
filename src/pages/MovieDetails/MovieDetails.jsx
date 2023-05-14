import { useRef, useState, useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { fetchMovieId } from 'services/API';
import { MovieCard } from 'components/MovieCard/MovieCard';

const ERROR_MSG = 'Sorry, we have failed to show you this movie. Try again!';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location?.state?.from ?? '/');

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async movieId => {
      try {
        const res = await fetchMovieId(movieId);
        setMovie(res);
      } catch (error) {
        setError(ERROR_MSG);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData(movieId);
  }, [movieId]);

  return (
    <>
      <Link to={backLinkHref.current} state={{ from: 'MovieDetails' }}>
        <button type="button">Go back</button>
      </Link>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {movie.title && (
        <div>
          <MovieCard movie={movie} />
        </div>
      )}
    </>
  );
};

export default MovieDetails;
