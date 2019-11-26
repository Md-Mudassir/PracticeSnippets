import React, { useState } from "react";

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
        <li>{movie.name}</li>
      ))}
    </div>
  );
};
export default MovieList;
