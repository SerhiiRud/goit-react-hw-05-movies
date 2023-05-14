import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { GalleryList } from './MovieGallery.styled';

export const MovieGallery = ({ movies }) => {
  const location = useLocation();

  return (
    <GalleryList>
      {movies.map(({ id, name, title }) => (
        <li key={id}>
          <Link state={{ from: location }} to={`/movies/${id}`}>
            {title || name}
          </Link>
        </li>
      ))}
    </GalleryList>
  );
};

MovieGallery.propTypes = { movies: PropTypes.array };
