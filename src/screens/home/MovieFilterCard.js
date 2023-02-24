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
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
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
});

const MovieFilterCard = ({ classes }) => {
  const [movieName, setMovieName] = useState("");
  const [genres, setGenres] = useState([]);
  const [artists, setArtists] = useState([]);
  const [releaseDateStart, setReleaseDateStart] = useState("");
  const [releaseDateEnd, setReleaseDateEnd] = useState("");

  const handleMovieNameChange = (event) => {
    setMovieName(event.target.value);
  };

  const handleGenreChange = (event) => {
    setGenres(event.target.value);
  };

  const handleArtistChange = (event) => {
    setArtists(event.target.value);
  };

  const handleReleaseDateStartChange = (event) => {
    setReleaseDateStart(event.target.value);
  };

  const handleReleaseDateEndChange = (event) => {
    setReleaseDateEnd(event.target.value);
  };

  const handleApplyFilters = () => {
    // Combine filter values and fetch movies based on filters
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
          <Input id="movieName" onChange={this.movieNameChangeHandler} />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="select-multiple-checkbox"> Genre</InputLabel>
          <Select
            multiple
            input={<Input id="select-multiple-checkbox" />}
            renderValue={(selected) => selected.join(",")}
            value={this.state.genres}
            onChange={this.genreSelectHandler}
          >
            <MenuItem value="0">None</MenuItem>
            {this.state.genresList.map((genre) => (
              <MenuItem key={"genre" + genre.id} value={genre.genre}>
                <Checkbox
                  checked={this.state.genres.indexOf(genre.genre) > -1}
                />
                <ListItemText primary={genre.genre} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="select-multiple-checkbox"> Artists</InputLabel>
          <Select
            multiple
            input={<Input id="select-multiple-checkbox" />}
            renderValue={(selected) => selected.join(",")}
            value={this.state.artists}
            onChange={this.artistsSelectHandler}
          >
            <MenuItem value="0">None</MenuItem>
            {this.state.artistsList.map((artist) => (
              <MenuItem
                key={"artist" + artist.id}
                value={artist.first_name + " " + artist.last_name}
              >
                <Checkbox
                  checked={
                    this.state.artists.indexOf(
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
            onChange={this.releaseDateStartHandler}
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
            onChange={this.releaseDateEndHandler}
          />
        </FormControl>
        <br />
        <br />
        <FormControl>
          <Button
            onClick={() => this.filterApplyHandler()}
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
