import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";
const Movie = () => {
  const [movies, setmovies] = useContext(MovieContext);
  return (
    <div>
      <h2>Mohammed</h2>
      <p>list of movies {movies.length}</p>
    </div>
  );
};
export default Movie;
