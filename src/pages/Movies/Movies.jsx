import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieSearch } from 'services/API';
import { MovieGallery } from 'components/MovieGallery/MovieGallery';
import { GalleryContainer } from './Movies.styled';
import { Loader } from 'components/Loader/Loader';
import { Form } from './Movies.styled';

const ERROR_MSG = 'Error happend';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;
    const fetchData = async () => {
      try {
        const res = await fetchMovieSearch(query);
        setMovies(res.results);
      } catch (error) {
        setError(ERROR_MSG);
      } finally {
        setIsLoading(false);
        setIsLoaded(true);
      }
    };
    fetchData(query);
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ query: form.elements.input.value });
    form.reset();
  };

  return (
    <GalleryContainer>
      <Form onSubmit={handleSubmit}>
        <input type="text" autoComplete="off" name="input" autoFocus />
        <button type="submit">Search</button>
      </Form>
      <div>
        {error && <div>{error}</div>}
        {isLoading && <Loader />}
        {isLoaded && movies.length === 0 && (
          <div>We have not found such movie, please, try another query.</div>
        )}
        <MovieGallery movies={movies} />
      </div>
    </GalleryContainer>
  );
};

export default Movies;
