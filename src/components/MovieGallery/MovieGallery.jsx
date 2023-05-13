import { Link, useLocation } from 'react-router-dom';

export const MovieGallery = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map(({ id, name, title }) => (
        <li key={id}>
          <Link state={{ from: location }} to={`/movies/${id}`}>
            {title || name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
