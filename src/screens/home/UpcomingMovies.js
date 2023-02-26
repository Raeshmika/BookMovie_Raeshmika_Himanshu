import React from "react";
import { ImageList, GridListTile, GridListTileBar } from "@material-ui/core";
import { useEffect, useState } from "react";

const UpcomingMovies = (props) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8085/api/v1/movies?limit=100&status=PUBLISHED`
        );
        const data = await response.json();
        setMovies(data.movies);
      } catch (e) {
        throw new Error(`HTTP error! status: ${e.message}`);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <ImageList rowHeight={250} cols={6} style={{ flexWrap: "nowrap" }}>
        {movies.map((movie) => (
          <GridListTile key={movie.id} cols={1} min-width="250px">
            <img src={movie.poster_url} alt={movie.title} />
            <GridListTileBar title={movie.title} />
          </GridListTile>
        ))}
      </ImageList>
    </div>
  );
};

export default UpcomingMovies;
