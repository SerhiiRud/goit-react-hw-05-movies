import { Outlet, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { prePoster } from 'services/API';
import { MovieCardContainer, InfoList, Credits } from './MovieCard.styled';

export const MovieCard = ({ movie }) => {
  const { poster_path, original_title, overview, genres } = movie;

  const year = parseInt(movie.release_date);
  const rating = Math.ceil(movie.vote_average * 10);

  return (
    <>
      <MovieCardContainer>
        <div>
          <img
            alt={original_title}
            src={`${prePoster}${poster_path}`}
            width="200"
          />
        </div>
        <div>
          <h1>
            {original_title} ({year})
          </h1>
          <p>User Score: {rating}%</p>
          <p>Owerview </p>
          <p>{overview}</p>
          <p>Genres </p>
          <p>
            {genres &&
              genres.length > 0 &&
              genres.map(genre => genre.name).join(', ')}
          </p>
        </div>
      </MovieCardContainer>
      <Credits>Additional information</Credits>
      <InfoList>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </InfoList>
      <Outlet />
    </>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({ name: PropTypes.string.isRequired })
    ),
  }).isRequired,
};
