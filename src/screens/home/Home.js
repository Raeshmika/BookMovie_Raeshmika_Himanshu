import React from "react";
import "./Home.css";
import Header from "../../common/header/Header";
import UpcomingMovies from "./UpcomingMovies";
import ReleasedMovies from "./ReleasedMovies";
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

  return (
    <div>
      <Header />
      <div className={classes.upcomingMoviesHeading}>
        <span> Upcoming Movies </span>
      </div>
      <div className="main-container">
        <UpcomingMovies {...props} />
        <ReleasedMovies {...props} />
      </div>
    </div>
  );
};

export default Home;
