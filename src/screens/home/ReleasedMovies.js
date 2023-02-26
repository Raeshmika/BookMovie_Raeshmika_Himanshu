import React from "react";
import { GridList, GridListTile, GridListTileBar } from "@material-ui/core";
import "./Home.css";
import MovieFilterCard from "./MovieFilterCard";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ReleasedMovies = (props) => {
  // const releasedMovies = useSelector((state) => state.home.releasedMovies);
  return (
    <div className="flex-container">
      <div className="released-movies-container">
        <GridList cellHeight={350} cols={3}>
          {props.releasedMovies.map((movie) => (
            <Link to={`/movie/${movie.id}`}>
              <GridListTile key={movie.id} cols={1} min-width="250px">
                <img src={movie.poster_url} alt={movie.title} />
                <GridListTileBar title={movie.title} />
              </GridListTile>
            </Link>
          ))}
        </GridList>
      </div>
      <div className="filter-movies">{<MovieFilterCard {...props} />}</div>
    </div>
  );
};

export default ReleasedMovies;
