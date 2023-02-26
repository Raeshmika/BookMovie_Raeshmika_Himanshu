import React from "react";
import { GridList, GridListTile, GridListTileBar } from "@material-ui/core";
import BookShowButton from "../bookshow/BookShowButton";

const UpcomingMovies = (props) => {
  const filteredMovies = props.movies.filter(
    (movie) => movie.status === "PUBLISHED"
  );
  return (
    <div>
      <GridList cellHeight={250} cols={6} style={{ flexWrap: "nowrap" }}>
        {filteredMovies.map((movie) => (
          <GridListTile key={movie.id} cols={1} min-width="250px">
            <img src={movie.poster_url} alt={movie.title} />
            <GridListTileBar title={movie.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default UpcomingMovies;
