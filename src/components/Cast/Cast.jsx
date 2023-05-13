import { useState, useEffect } from 'react';
import { fetchMovieCast, prePoster } from 'services/API';
import { useParams } from 'react-router-dom';

const ERROR_MSG = 'Error happend';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async movieId => {
      try {
        const res = await fetchMovieCast(movieId);
        setCast(res.cast);
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
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      <ul>
        {cast.map(({ id, name, character, profile_path }) => (
          <li key={id}>
            <img alt={name} src={`${prePoster}${profile_path}`} width="100" />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cast;
