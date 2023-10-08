import React from "react";

import { getMovies } from "../lib/mongo/movies";

async function fetchMovies() {
  const { movies } = await getMovies();
  if (!movies) throw new Error("Failed to fetch movies");
  return movies;
}

const Home = async () => {
  const movies = await fetchMovies();
  return (
    <>
      <div>
        {/* <span>MOVIES</span> */}
        <ul>
          {movies.map((movie: any) => (
            <li key={movie._id}>{movie.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
