import { useEffect, useState } from "react";
import React, { Component } from "react";
import "./Home.css";
import Header from "../../common/header/Header";
import UpcomingMovies from "./UpcomingMovies";
import ReleasedMovies from "./ReleasedMovies";
import { withStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { CardActionArea } from "@material-ui/core";
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
}));

const Home = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [artists, setArtists] = useState([]);

  //   const allMovies = useSelector((state) => state.home.allMovies);
  //   const genres = useSelector((state) => state.home.genereList);
  //   const artists = useSelector((state) => state.home.artists);

  //const [pagination] = useSelector((state) => state.homeReducer.pagination);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8085/api/v1/movies?limit=100`
        );
        const data = await response.json();
        dispatch({ type: "SET_MOVIES", payload: data });
        dispatch({ type: "SET_RELEASED_MOVIES", payload: data.movies });
        setMovies(data.movies);
      } catch (e) {
        throw new Error(`HTTP error! status: ${e.message}`);
      }
    };

    const fetchGenere = async () => {
      try {
        const response = await fetch(`http://localhost:8085/api/v1/genres`);
        const data = await response.json();
        dispatch({ type: "SET_GENRE", payload: data });
        setGenres(data.genres);
      } catch (e) {
        throw new Error(`HTTP error! status: ${e.message}`);
      }
    };

    const fetchArtists = async () => {
      try {
        const response = await fetch(
          `http://localhost:8085/api/v1/artists?limit=100`
        );
        const data = await response.json();
        dispatch({ type: "SET_ARTISTS", payload: data });
        setArtists(data.artists);
      } catch (e) {
        throw new Error(`HTTP error! status: ${e.message}`);
      }
    };

    fetchGenere();
    fetchArtists();
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <div className={classes.upcomingMoviesHeading}>
        <span> Upcoming Movies </span>
      </div>
      <div className="main-container">
        <UpcomingMovies movies={movies} />
        <ReleasedMovies
          releasedMovies={movies}
          genres={genres}
          artists={artists}
        />
      </div>
    </div>
  );
};

export default Home;
