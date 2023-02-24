import React, { Component } from "react";
import "./Home.css";
import Header from "../../common/header/Header";
import { withStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import FormControl from "@material-ui/core/FormControl";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import UpcomingMovies from "./UpcomingMovies";
import ReleasedMovies from "./ReleasedMovies";

const styles = (theme) => ({
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
  gridListMain: {
    transform: "translateZ(0)",
    cursor: "pointer",
  },
  formControl: {
    margin: theme.spacing(240),
    minWidth: 240,
  },
  title: {
    color: theme.palette.primary.light,
  },
});

class Home extends Component {
  constructor() {
    super();
    this.state = {
      movieName: "",
      upcomingMovies: [{}],
      releasedMovies: [{}],
      genresList: [{}],
      artistsList: [{}],
      genres: [],
      artists: [],
      releaseDateStart: "",
      releaseDateEnd: "",
    };
  }

  UNSAFE_componentWillMount() {
    //Get Upcoming Movies
    let dataUpcoming = null;
    let xhrUpcoming = new XMLHttpRequest();
    let that = this;
    xhrUpcoming.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        that.setState({ upcomingMovies: JSON.parse(this.responseText).movies });
      }
    });

    xhrUpcoming.open("GET", this.props.baseUrl + "movies?status=PUBLISHED");
    xhrUpcoming.send(dataUpcoming);

    //Get Released Movies
    let dataReleased = null;
    let xhrReleased = new XMLHttpRequest();
    xhrReleased.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        that.setState({ releasedMovies: JSON.parse(this.responseText).movies });
      }
    });

    xhrReleased.open("GET", this.props.baseUrl + "movies?status=RELEASED");
    xhrReleased.send(dataReleased);

    //Get Genres
    let dataGenres = null;
    let xhrGenres = new XMLHttpRequest();
    xhrGenres.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        that.setState({ genresList: JSON.parse(this.responseText).genres });
      }
    });

    xhrGenres.open("GET", this.props.baseUrl + "genres");
    xhrGenres.send(dataGenres);

    //Get Artists
    let dataArtists = null;
    let xhrArtists = new XMLHttpRequest();
    xhrArtists.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        that.setState({ artistsList: JSON.parse(this.responseText).artists });
      }
    });

    xhrArtists.open("GET", this.props.baseUrl + "artists");
    xhrArtists.send(dataArtists);
  }

  movieNameChangeHandler = (event) => {
    this.setState({ movieName: event.target.value });
  };

  genreSelectHandler = (event) => {
    this.setState({ genres: event.target.value });
  };

  artistsSelectHandler = (event) => {
    this.setState({ artists: event.target.value });
  };

  releaseDateStartHandler = (event) => {
    this.setState({ releaseDateStart: event.target.value });
  };

  releaseDateEndHandler = (event) => {
    this.setState({ releaseDateEnd: event.target.value });
  };

  movieClickHandler = (movieId) => {
    this.props.history.push("/movie/" + movieId);
  };

  filterApplyHandler = () => {
    let queryString = "?status=RELEASED";
    if (this.state.movieName !== "") {
      queryString += "&title=" + this.state.movieName;
    }
    if (this.state.genres.length > 0) {
      queryString += "&genres=" + this.state.genres.toString();
    }
    if (this.state.artists.length > 0) {
      queryString += "&artist_name=" + this.state.artists.toString();
    }
    if (this.state.releaseDateStart !== "") {
      queryString += "&start_date=" + this.state.releaseDateStart;
    }
    if (this.state.releaseDateEnd !== "") {
      queryString += "&end_date=" + this.state.releaseDateEnd;
    }

    let that = this;
    let dataFilter = null;
    let xhrFilter = new XMLHttpRequest();
    xhrFilter.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        that.setState({ releasedMovies: JSON.parse(this.responseText).movies });
      }
    });

    xhrFilter.open(
      "GET",
      this.props.baseUrl + "movies" + encodeURI(queryString)
    );
    xhrFilter.send(dataFilter);
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Header baseUrl={this.props.baseUrl} />
        <div className={classes.upcomingMoviesHeading}>
          <span> Upcoming Movies </span>
        </div>
        <UpcomingMovies />
        <ReleasedMovies />
      </div>
    );
  }
}

export default withStyles(styles)(Home);
