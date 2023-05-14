import { useState, useEffect } from 'react';
import { fetchMovieReviews } from 'services/API';
import { useParams } from 'react-router-dom';

const ERROR_MSG = 'Error happend';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async movieId => {
      try {
        const res = await fetchMovieReviews(movieId);
        setReviews(res.results);
      } catch (error) {
        setError(ERROR_MSG);
      } finally {
        setIsLoading(false);
        setIsLoaded(true);
      }
    };

    fetchData(movieId);
  }, [movieId]);

  return (
    <>
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {isLoaded && reviews.length === 0 ? (
        <p>We don't have any reviews for this movie</p>
      ) : (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <p>Author: {author}</p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Reviews;
