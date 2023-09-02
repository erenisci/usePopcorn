import PropTempWatchedData from '../modules/PropTempWatchedData';

import WatchedMovies from './WatchedMovies';

const WatchedMoviesList: React.FC<{ watched: PropTempWatchedData[] }> = ({ watched }) => {
  return (
    <ul className='list'>
      {watched.map(movie => (
        <WatchedMovies
          movie={movie}
          key={movie.imdbID}
        />
      ))}
    </ul>
  );
};

export default WatchedMoviesList;
