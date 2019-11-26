import React from "react";
import "./App.css";
import MovieList from "./MovieList";
import Nav from "./Nav";
import MovieProvider from "./MovieContext";

function App() {
  return (
    <div className="App">
      <Nav />
      <MovieList />
    </div>
  );
}

export default App;
