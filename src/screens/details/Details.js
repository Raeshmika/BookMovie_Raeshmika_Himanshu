import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../common/header/Header";
import YouTube from "react-youtube";
import StarBorderIcon from "@material-ui/icons/StarBorder";

import "./Details.css";
import { useState } from "react";

const starIconsInitial = [
  {
    id: 1,
    stateId: "star1",
    color: "black",
  },
  {
    id: 2,
    stateId: "star2",
    color: "black",
  },
  {
    id: 3,
    stateId: "star3",
    color: "black",
  },
  {
    id: 4,
    stateId: "star4",
    color: "black",
  },
  {
    id: 5,
    stateId: "star5",
    color: "black",
  },
];

const initialState = {
  genres: [],
  trailer_url: "",
  artists: [],
};

const opts = {
  height: "300",
  width: "700",
  playerVars: {
    autoplay: 1,
  },
};

const Details = (props) => {
  const [movie, setMovie] = useState(initialState);
  const [starIcons, setStarIcons] = useState(starIconsInitial);

  const artistClickHandler = (url) => {
    window.location = url;
  };

  const starClickHandler = (id) => {
    let starIconList = [];
    for (let star of starIcons) {
      let starNode = star;
      if (star.id <= id) {
        starNode.color = "yellow";
      } else {
        starNode.color = "black";
      }
      starIconList.push(starNode);
    }
    setStarIcons(starIconList);
  };

  useEffect(() => {
    const getMovieDetails = async () => {
      const response = await fetch(
        `${props.baseUrl}movies/${props.match.params.id}`
      );
      const data = await response.json();
      setMovie(data);
    };

    getMovieDetails();
  }, []);

  return (
    <div className="details">
      <Header
        id={props.match.params.id}
        baseUrl={props.baseUrl}
        showBookShowButton={true}
      />
      <div className="back">
        <Typography>
          <Link to="/"> &#60; Back to Home</Link>
        </Typography>
      </div>
      <div className="flex-containerDetails">
        <div className="leftDetails">
          <img src={movie.poster_url} alt={movie.title} />
        </div>

        <div className="middleDetails">
          <div>
            <Typography variant="headline" component="h2">
              {movie.title}
            </Typography>
          </div>
          <br />
          <div>
            <Typography>
              <span className="bold">Genres: </span> {movie.genres.join(", ")}
            </Typography>
          </div>
          <div>
            <Typography>
              <span className="bold">Duration:</span> {movie.duration}{" "}
            </Typography>
          </div>
          <div>
            <Typography>
              <span className="bold">Release Date:</span>{" "}
              {new Date(movie.release_date).toDateString()}{" "}
            </Typography>
          </div>
          <div>
            <Typography>
              <span className="bold"> Rating:</span> {movie.critics_rating}{" "}
            </Typography>
          </div>
          <div className="marginTop16">
            <Typography>
              <span className="bold">Plot:</span>{" "}
              <a href={movie.wiki_url}>(Wiki Link)</a> {movie.storyline}{" "}
            </Typography>
          </div>
          <div className="trailerContainer">
            <Typography>
              <span className="bold">Trailer:</span>
            </Typography>
            <YouTube videoId={movie.trailer_url.split("?v=")[1]} opts={opts} />
          </div>
        </div>

        <div className="rightDetails">
          <Typography>
            <span className="bold">Rate this movie: </span>
          </Typography>
          {starIcons.map((star) => (
            <StarBorderIcon
              className={star.color}
              key={"star" + star.id}
              onClick={() => starClickHandler(star.id)}
            />
          ))}

          <div className="bold marginBottom16 marginTop16">
            <Typography>
              <span className="bold">Artists:</span>
            </Typography>
          </div>
          <div className="paddingRight">
            <ImageList rowHeight={160} cols={2}>
              {movie.artists != null &&
                movie.artists.map((artist) => (
                  <ImageListItem
                    className="gridTile"
                    onClick={() => artistClickHandler(artist.wiki_url)}
                    key={artist.id}
                  >
                    <img
                      src={artist.profile_url}
                      alt={artist.first_name + " " + artist.last_name}
                    />
                    <ImageListItemBar
                      title={artist.first_name + " " + artist.last_name}
                    />
                  </ImageListItem>
                ))}
            </ImageList>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
