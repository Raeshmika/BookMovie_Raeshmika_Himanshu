import React, { Component, useEffect, useState } from "react";
import Header from "../../common/header/Header";
import Typography from "@material-ui/core/Typography";
import "./Details.css";
import YouTube from "react-youtube";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

const Details = (props) => {
  const [movie, setMovie] = useState({});

  const [starIcons, setStarIcons] = useState([
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
  ]);

  const location = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    alert("Heloo");
    dispatch({ type: "SET_SHOW_BOOK_SHOW", payload: true });
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8085/api/v1/movies/${props.match.params.id}`
        );
        const data = await response.json();
        setMovie(data);
      } catch (e) {
        throw new Error(`HTTP error! status: ${e.message}`);
      }
    };
    fetchData();
  }, []);

  /*componentWillMount() {
        let that = this;
        let dataMovie = null;
        let xhrMovie = new XMLHttpRequest();
        xhrMovie.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                that.setState({ movie: JSON.parse(this.responseText) });
            }
        })

        xhrMovie.open("GET", this.props.baseUrl + "movies/" + this.props.match.params.id);
        xhrMovie.setRequestHeader("Cache-Control", "no-cache");
        xhrMovie.send(dataMovie);

    }
*/

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

  const opts = {
    height: "300",
    width: "700",
    playerVars: {
      autoplay: 1,
    },
  };

  console.log(props);

  return (
    <div className="details">
      <Header
        id={props.movieId}
        baseUrl="http://localhost:8085/api/v1/"
        showBookShowButton="true"
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
              {movie.title}{" "}
            </Typography>
          </div>
          <div>
            <Typography>
              <span className="bold">Genre: </span>{" "}
              {/*movie.genres.join(', ')*/}{" "}
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
            {/*<YouTube
                                videoId={movie.trailer_url.split("?v=")[1]}
                                opts={opts}
                               onReady={true}}
                            />*/}
          </div>
        </div>
        <div className="rightDetails">
          <Typography>
            {" "}
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
          <GridList cellHeight={160} cols={2}>
            {movie.artists.map((artist) => (
              <GridListTile
                className="gridTile"
                onClick={() => artistClickHandler(artist.wiki_url)}
                key={artist.id}
              >
                <img
                  src={artist.profile_url}
                  alt={artist.first_name + " " + artist.last_name}
                />
                <GridListTileBar
                  title={artist.first_name + " " + artist.last_name}
                />
              </GridListTile>
            ))}
          </GridList>
        </div>
      </div>
    </div>
  );
};

export default Details;
