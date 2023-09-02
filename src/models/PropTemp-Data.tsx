export interface PropTempMovieData {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
}

export interface PropTempWatchedData extends PropTempMovieData {
  runtime: number;
  imdbRating: number;
  userRating: number;
}
