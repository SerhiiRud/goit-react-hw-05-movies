import { Outlet, Link } from 'react-router-dom';
import { prePoster } from 'services/API';
import { MovieCardContainer } from './MovieCard.styled';

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
    </>
  );
};
