import PropTempMovieData from '../modules/PropTempMovieData';

const NumResults: React.FC<{ movies: PropTempMovieData[] }> = ({ movies }) => {
  return (
    <p className='num-results'>
      Found <strong>{movies.length}</strong> results
    </p>
  );
};

export default NumResults;
