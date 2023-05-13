import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'services/API';
import { MovieGallery } from 'components/MovieGallery/MovieGallery';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchTrendingMovies();
      setMovies(res.results);
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <div>
        <MovieGallery movies={movies} />
      </div>
    </>
  );
};

export default Home;
