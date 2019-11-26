import React, { useState } from "react";
import Movie from "./Movie";

const MovieList = () => {
  const [movies, setmovies] = useState([
    {
      name: "harry",
      price: "100",
      id: "1111"
    },
    {
      name: "barry",
      price: "1010",
      id: "1112"
    },
    {
      name: "carry",
      price: "1100",
      id: "1113"
    }
  ]);
  return (
    <div>
      {movies.map(movie => (
        <Movie name={movie.name} price={movie.price} />
      ))}
    </div>
  );
};
export default MovieList;
