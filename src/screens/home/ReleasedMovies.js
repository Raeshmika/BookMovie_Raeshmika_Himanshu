import React from "react";
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Card,
  CardContent,
  Typography,
  FormControl,
  InputLabel,
  Input,
  Select,
  MenuItem,
  Checkbox,
  TextField,
  Button,
} from "@material-ui/core";
import "./Home.css";
import { Link } from "react-router-dom";
import ListItemText from "@material-ui/core/ListItemText";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  heading: {
    color: theme.palette.primary.light,
    fontWeight: "bold",
    textTransform: "uppercase",
  },

  formControl: {
    //margin: theme.spacing.unit,
    minWidth: 240,
    maxWidth: 240,
  },
  button: {
    marginTop: theme.spacing(2),
  },
  gridListMain: {
    transform: "translateZ(0)",
    cursor: "pointer",
  },
}));

const ReleasedMovies = (props) => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [artists, setArtists] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8085/api/v1/movies?limit=100&status=RELEASED`
        );
        const data = await response.json();
        setMovies(data.movies);
      } catch (e) {
        throw new Error(`HTTP error! status: ${e.message}`);
      }
    };

    const fetchGenere = async () => {
      try {
        const response = await fetch(`http://localhost:8085/api/v1/genres`);
        const data = await response.json();
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
        setArtists(data.artists);
      } catch (e) {
        throw new Error(`HTTP error! status: ${e.message}`);
      }
    };
    fetchGenere();
    fetchArtists();
    fetchData();
  }, []);

  const classes = useStyles();
  const [movieName, setMovieName] = useState("");
  const [genresList, setGenresList] = useState([]);
  const [artistsList, setartistsList] = useState([]);

  const [releaseDateStart, setReleaseDateStart] = useState("");
  const [releaseDateEnd, setReleaseDateEnd] = useState("");

  const handleMovieNameChange = (event) => {
    setMovieName(event.target.value);
  };

  const handleGenreChange = (event) => {
    setGenresList(event.target.value);
  };

  const handleArtistChange = (event) => {
    setartistsList(event.target.value);
  };

  const handleReleaseDateStartChange = (event) => {
    setReleaseDateStart(event.target.value);
  };

  const handleReleaseDateEndChange = (event) => {
    setReleaseDateEnd(event.target.value);
  };

  const movieClickHandler = (movieId) => {
    props.history.push("/movie/" + movieId);
  };

  const handleApplyFilters = () => {
    let queryString = "?status=RELEASED";
    if (movieName !== "") {
      queryString += "&title=" + movieName;
    }
    if (genresList.length > 0) {
      queryString += "&genre=" + genresList.toString();
    }
    if (artistsList.length > 0) {
      queryString += "&artists=" + artistsList.toString();
    }
    if (releaseDateStart !== "") {
      queryString += "&start_date=" + releaseDateStart;
    }
    if (releaseDateEnd !== "") {
      queryString += "&end_date=" + releaseDateEnd;
    }
    let filteredData = fetch(
      "http://localhost:8085/api/v1/" + "movies" + encodeURI(queryString)
    );
    filteredData
      .then((res) => res.json())
      .then((d) => {
        setMovies(d.movies);
      }, []);
  };
  return (
    <div className="flex-container">
      <div className="left">
        <ImageList rowHeight={350} cols={4} className={classes.gridListMain}>
          {movies.map((movie) => (
            <ImageListItem
              className="grid-item"
              key={movie.id}
              cols={1}
              min-width="350"
              onClick={() => movieClickHandler(movie.id)}
            >
              <img
                src={movie.poster_url}
                alt={movie.title}
                className="movie-img"
              />
              <ImageListItemBar
                title={movie.title}
                subtitle={
                  <span>
                    Release Date: {new Date(movie.release_date).toDateString()}
                  </span>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
      <div className="right">
        <Card>
          <CardContent>
            <FormControl className={classes.formControl}>
              <Typography className={classes.title} color="textSecondary">
                FIND MOVIES BY:
              </Typography>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="movieName"> Movie Name </InputLabel>
              <Input id="movieName" onChange={handleMovieNameChange} />
            </FormControl>
            <br />
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="select-multiple-checkbox"> Genre</InputLabel>
              <Select
                multiple
                input={<Input id="select-multiple-checkbox-genres" />}
                renderValue={(selected) => selected.join(",")}
                value={genresList}
                onChange={handleGenreChange}
              >
                <MenuItem value="0">None</MenuItem>
                {genres.map((genre) => (
                  <MenuItem key={"genre" + genre.id} value={genre.genre}>
                    <Checkbox checked={genresList.indexOf(genre.genre) > -1} />
                    <ListItemText primary={genre.genre} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <br />
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="select-multiple-checkbox">
                Artists
              </InputLabel>
              <Select
                multiple
                input={<Input id="select-multiple-checkbox-artist" />}
                renderValue={(selected) => selected.join(",")}
                value={artistsList}
                onChange={handleArtistChange}
              >
                <MenuItem value="0">None</MenuItem>
                {artists.map((artist) => (
                  <MenuItem
                    key={"artist" + artist.id}
                    value={artist.first_name + " " + artist.last_name}
                  >
                    <Checkbox
                      checked={
                        artistsList.indexOf(
                          artist.first_name + " " + artist.last_name
                        ) > -1
                      }
                    />
                    <ListItemText
                      primary={artist.first_name + " " + artist.last_name}
                    />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <br />
            <br />
            <FormControl>
              <TextField
                id="releaseDateStart"
                label="Release Date Start"
                type="date"
                defaultValue=""
                InputLabelProps={{ shrink: true }}
                onChange={handleReleaseDateStartChange}
              />
            </FormControl>
            <br /> <br />
            <FormControl>
              <TextField
                id="releaseDateEnd"
                label="Release Date End"
                type="date"
                defaultValue=""
                InputLabelProps={{ shrink: true }}
                onChange={handleReleaseDateEndChange}
              />
            </FormControl>
            <br />
            <br />
            <FormControl>
              <Button
                onClick={() => {
                  handleApplyFilters();
                }}
                variant="contained"
                color="primary"
              >
                APPLY
              </Button>
            </FormControl>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ReleasedMovies;
