import React, { useState } from "react";
import {
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

import ListItemText from "@material-ui/core/ListItemText";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    minWidth: 240,
    maxWidth: 240,
    margin: theme.spacing.unit,
  },
  heading: {
    color: theme.palette.primary.light,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    padding: theme.spacing.unit * 2,
  },
  formControl: {
    minWidth: 240,
    maxWidth: 240,
    margin: theme.spacing.unit,
  },
  button: {
    marginTop: theme.spacing.unit * 2,
  },
}));

const MovieFilterCard = (props) => {
  const classes = useStyles();
  const [movieName, setMovieName] = useState("");
  const [genresList, setGenresList] = useState([]);
  const [artistsList, setartistsList] = useState([]);
  const dispatch = useDispatch();

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

  const findCommonElements = function (arr1, arr2) {
    return arr1.some((item) => arr2.includes(item));
  };

  const handleApplyFilters = () => {
    let queryString = "?status=RELEASED";
    if (movieName !== "") {
      queryString += "&title=" + movieName;
    }
    if (genresList.length > 0) {
      queryString += "&genres=" + genresList.toString();
    }
    if (artistsList.length > 0) {
      queryString += "&artist_name=" + artistsList.toString();
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
        console.log(d);
        dispatch({ type: "SET_RELEASED_MOVIES", payload: d.movies });
      });
  };
  return (
    <Card>
      <CardContent>
        <FormControl>
          <Typography className={classes.title} color="textSecondary">
            FIND MOVIES BY:
          </Typography>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="movieName"> Movie Name </InputLabel>
          <Input id="movieName" onChange={handleMovieNameChange} />
        </FormControl>
        <br />
        <FormControl>
          <InputLabel htmlFor="select-multiple-checkbox"> Genre</InputLabel>
          <Select
            multiple
            input={<Input id="select-multiple-checkbox" />}
            renderValue={(selected) => selected.join(",")}
            value={genresList}
            onChange={handleGenreChange}
          >
            <MenuItem value="0">None</MenuItem>
            {props.genres.map((genre) => (
              <MenuItem key={"genre" + genre.id} value={genre.genre}>
                <Checkbox checked={genresList.indexOf(genre.genre) > -1} />
                <ListItemText primary={genre.genre} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <br />
        <FormControl>
          <InputLabel htmlFor="select-multiple-checkbox"> Artists</InputLabel>
          <Select
            multiple
            input={<Input id="select-multiple-checkbox" />}
            renderValue={(selected) => selected.join(",")}
            value={artistsList}
            onChange={handleArtistChange}
          >
            <MenuItem value="0">None</MenuItem>
            {props.artists.map((artist) => (
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
  );
};
export default MovieFilterCard;
