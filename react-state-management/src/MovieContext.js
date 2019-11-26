import React, { useState, createContext } from "react";
export const MovieContext = createContext();

export const MovieProvider = (props) => {
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
  return <MovieProvider.Provider>{props.children}</MovieProvider.Provider>;
};
