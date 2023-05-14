import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'services/API';
import { MovieGallery } from 'components/MovieGallery/MovieGallery';
import { GalleryContainer } from '../Movies/Movies.styled';
import { Title } from './Home.styled';

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
    <GalleryContainer>
      <Title>Trending today</Title>
      <div>
        <MovieGallery movies={movies} />
      </div>
    </GalleryContainer>
  );
};

export default Home;
