import { PropTempMovieData } from '../models/PropTemp-Data';

import Movie from './Movie';

const MovieList: React.FC<{ movies: PropTempMovieData[] }> = ({ movies }) => {
  return (
    <ul className='list'>
      {movies?.map(movie => (
        <Movie
          movie={movie}
          key={movie.imdbID}
        />
      ))}
    </ul>
  );
};

export default MovieList;
