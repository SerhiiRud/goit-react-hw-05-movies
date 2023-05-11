import { Route, Routes, Link } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Movies from 'pages/Movies/Movies';

export const App = () => {
  return (
    <div>
      <nav>
        <Link to="/" end>
          Home
        </Link>
        <Link to="/movies">Movies</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </div>
  );
};
