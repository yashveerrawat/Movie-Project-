import React from "react";
import { useGlobalContext } from "./contex";
import { NavLink } from "react-router-dom";

const Movies = () => {
  const { movie } = useGlobalContext();

  return (
    <section className="movie-page">
      <div className="grid grid-4-col">
        {movie.map((curMovie) => {
          const { imdbId, Title, Poster } = curMovie;

          return (
            <NavLink to={`movie/${imdbId}`} key={imdbId}>
              <div className="card" style={{ width: "12rem" }}>
                <img src={Poster} alt={imdbId} className="card-img-top" />
                <div className="card-body">
                  <h6 className="card-title">{Title}</h6>
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </section>
  );
};

export default Movies;
