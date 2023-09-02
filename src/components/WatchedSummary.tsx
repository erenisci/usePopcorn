import { PropTempWatchedData } from '../models/PropTemp-Data';

const average = (arr: number[]): number => arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

const WatchedSummary: React.FC<{ watched: PropTempWatchedData[] }> = ({ watched }) => {
  const avgImdbRating: number = average(watched.map(movie => movie.imdbRating));
  const avgUserRating: number = average(watched.map(movie => movie.userRating));
  const avgRuntime: number = average(watched.map(movie => movie.runtime));

  return (
    <div className='summary'>
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime} min</span>
        </p>
      </div>
    </div>
  );
};

export default WatchedSummary;
