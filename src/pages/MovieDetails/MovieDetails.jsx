import { useRef, useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { fetchMovieId } from 'services/API';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { Loader } from 'components/Loader/Loader';
import { MovieContainer, BackLink } from './MovieDetails.styled';

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
      <BackLink to={backLinkHref.current} state={{ from: 'MovieDetails' }}>
        <button type="button">← Go back</button>
      </BackLink>
      <MovieContainer>
        {isLoading && <Loader />}
        {error && <div>{error}</div>}
        {movie.title && (
          <div>
            <MovieCard movie={movie} />
          </div>
        )}
      </MovieContainer>
    </>
  );
};

export default MovieDetails;
