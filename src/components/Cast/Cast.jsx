import { useState, useEffect } from 'react';
import { fetchMovieCast, prePoster } from 'services/API';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { CastList, ActorName } from './cast.styled';

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
      {isLoading && <Loader />}
      {error && <div>{error}</div>}
      <CastList>
        {cast.map(({ id, name, character, profile_path }) => (
          <li key={id}>
            <img alt={name} src={`${prePoster}${profile_path}`} width="100" />
            <ActorName>{name}</ActorName>
            <p>Character: {character}</p>
          </li>
        ))}
      </CastList>
    </>
  );
};

export default Cast;
