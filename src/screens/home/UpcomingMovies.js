import React from "react";
import { ImageList, ImageListItem, ImageListItemBar } from "@material-ui/core";
import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  upcomingMoviesHeading: {
    textAlign: "center",
    background: "#ff9999",
    padding: "8px",
    fontSize: "1rem",
  },
  gridListUpcomingMovies: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
    width: "100%",
  },
}));

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
  const classes = useStyles();
  return (
    <div>
      <ImageList rowHeight={250} cols={6} style={{ flexWrap: "nowrap" }} className={classes.gridListUpcomingMovies}>
        {movies.map((movie) => (
          <ImageListItem key={"upcoming" + movie.id}>
            <img src={movie.poster_url} alt={movie.title} />
            <ImageListItemBar title={movie.title} />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default UpcomingMovies;
