import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieSearch } from 'services/API';
import { MovieGallery } from 'components/MovieGallery/MovieGallery';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;
    const fetchData = async () => {
      const res = await fetchMovieSearch(query);
      setMovies(res.results);
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
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" autoComplete="off" name="input" autoFocus />
        <button type="submit">Search</button>
      </form>
      <div>
        <MovieGallery movies={movies} />
      </div>
    </>
  );
};

export default Movies;
