import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchMovies } from 'services/API';

const PARAMETERS_TRENDING = '/trending/all/day';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchMovies(PARAMETERS_TRENDING);
      setMovies(res.results);
    };
    fetchData();
  }, []);

  const location = useLocation();

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {movies.map(movie => (
          <Link
            state={{ from: location }}
            to={`/movies/${movie.id}`}
            key={movie.id}
          >
            {movie.title || movie.name}
          </Link>
        ))}
      </ul>
    </>
  );
};

export default Home;
