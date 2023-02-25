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
import ListItemText from '@material-ui/core/ListItemText';
import { useDispatch,useSelector } from "react-redux";

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
  const [genresList, setGenresList] = useState([]);
  const [artistsList, setartistsList] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([{}]);
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.homeReducer.movies.movies);
  
  const [genres, setGenres] = useState(
    [
      {
        "id": "1d174a25-ba31-45a8-85b4-b06ffc9d5f8f",
        "genre": "Drama",
        "description": "Drama"
      },
      {
        "id": "2d174a25-ba31-45a8-85b4-b06ffc9d5f8f",
        "genre": "Romance",
        "description": "Romance"
      },
      {
        "id": "3d174a25-ba31-45a8-85b4-b06ffc9d5f8f",
        "genre": "Horror",
        "description": "Horror"
      },
      {
        "id": "4d174a25-ba31-45a8-85b4-b06ffc9d5f8f",
        "genre": "Action",
        "description": "Action"
      },
      {
        "id": "5d174a25-ba31-45a8-85b4-b06ffc9d5f8f",
        "genre": "Crime",
        "description": "Crime"
      },
      {
        "id": "6d174a25-ba31-45a8-85b4-b06ffc9d5f8f",
        "genre": "Thriller",
        "description": "Thriller"
      },
      {
        "id": "7d174a25-ba31-45a8-85b4-b06ffc9d5f8f",
        "genre": "Political",
        "description": "Political"
      },
      {
        "id": "8d174a25-ba31-45a8-85b4-b06ffc9d5f8f",
        "genre": "Social",
        "description": "Social"
      },
      {
        "id": "9d174a25-ba31-45a8-85b4-b06ffc9d5f8f",
        "genre": "Fantasy",
        "description": "Fantasy"
      },
      {
        "id": "aa174a25-ba31-45a8-85b4-b06ffc9d5f8f",
        "genre": "Suspense",
        "description": "Suspense"
      },
      {
        "id": "bb174a25-ba31-45a8-85b4-b06ffc9d5f8f",
        "genre": "Adventure",
        "description": "Adventure"
      },
      {
        "id": "cc174a25-ba31-45a8-85b4-b06ffc9d5f8f",
        "genre": "Comedy",
        "description": "Comedy"
      },
      {
        "id": "dd174a25-ba31-45a8-85b4-b06ffc9d5f8f",
        "genre": "Scifi",
        "description": "Science Fiction"
      },
      {
        "id": "ee174a25-ba31-45a8-85b4-b06ffc9d5f8f",
        "genre": "Historical",
        "description": "Historical"
      }
    ]
  );
  const [artists, setArtists] = useState(
    [
      {
        "id": "7c174b25-bb31-46a8-87b4-c06ffc9d5f8f",
        "first_name": "Ranbir",
        "last_name": "Kapoor",
        "role_type": "ACTOR",
        "profile_description": "Ranbir Kapoor (born 28 September 1982) is an Indian actor and film producer. He is one of the highest-paid actors of Hindi cinema and has featured in Forbes India's Celebrity 100 list since 2012. Kapoor is the recipient of several awards, including five Filmfare Awards",
        "profile_url": "https://upload.wikimedia.org/wikipedia/commons/7/72/Ranbir_Kapoor_promoting_Bombay_Velvet.jpg",
        "wiki_url": "https://en.wikipedia.org/wiki/Ranbir_Kapoor"
      },
      {
        "id": "8c174b25-bb31-56a8-88b4-d06ffc9d5f89",
        "first_name": "Manisha",
        "last_name": "Koirala",
        "role_type": "ACTOR",
        "profile_description": "Manisha Koirala (born 16 August 1970) is a Nepalese actress who mainly appears in Hindi films, though she has worked in several South Indian and Nepali films. Noted for her acting prowess, Koirala is the recipient of several accolades, including four Filmfare Awards—and is one of India's most well-known actresses",
        "profile_url": "https://upload.wikimedia.org/wikipedia/commons/2/20/Manisha_Koirala_graces_her_film_Dear_Maya%E2%80%99s_media_meet_%2805%29.jpg",
        "wiki_url": "https://en.wikipedia.org/wiki/Manisha_Koirala"
      },
      {
        "id": "9c174b25-cb31-66a8-98b4-d06ffc9d5f9f",
        "first_name": "Rajkumar",
        "last_name": "Hirani",
        "role_type": "DIRECTOR",
        "profile_description": "Rajkumar Hirani (born 20 November 1962) is an Indian film director and editor. He is widely regarded as one of the most successful and critically acclaimed filmmakers of the Hindi film industry. Hirani is known for directing the Hindi films Munna Bhai M.B.B.S (2003), Lage Raho Munnabhai (2006), 3 Idiots (2009), PK (2014) and Sanju (2018). All of his films have been huge commercial and critical successes.[2] Most have won several awards, including the national awards, and have often been regarded by the media and audiences as some of the most path-breaking films in the history of Indian cinema.[3][4] He has won 15 Filmfare Awards",
        "profile_url": "https://upload.wikimedia.org/wikipedia/commons/4/44/Rajkumar_Hirani_2014.jpg",
        "wiki_url": "https://en.wikipedia.org/wiki/Rajkumar_Hirani"
      },
      {
        "id": "f114b346-a237-11e8-9077-720006ceb890",
        "first_name": "Marlon",
        "last_name": "Brando",
        "role_type": "ACTOR",
        "profile_description": "Marlon Brando Jr. was an American actor and film director. He is credited with bringing realism to film acting and helping to popularize the Stanislavski system of acting having studied with Stella Adler in the 1940s. Regarded for his cultural influence on 20th century film, Brandos Academy Award-winning performances include that of Terry Malloy in On the Waterfront (1954) and Don Vito Corleone in The Godfather (1972). Brando was an activist for many causes, notably the civil rights movement and various Native American movements.",
        "profile_url": "https://upload.wikimedia.org/wikipedia/commons/e/e5/Marlon_Brando_%28cropped%29.jpg",
        "wiki_url": "https://en.wikipedia.org/wiki/Marlon_Brando"
      },
      {
        "id": "24614e76-a238-11e8-9077-720006ceb890",
        "first_name": "Leonardo",
        "last_name": "DiCaprio",
        "role_type": "ACTOR",
        "profile_description": "Leonardo Wilhelm DiCaprio is an American actor and film producer. DiCaprio began his career by appearing in television commercials in the late 1980s. He next had recurring roles in various television series, such as the soap opera Santa Barbara and the sitcom Growing Pains. DiCaprios portrayals of Howard Hughes in The Aviator (2004) and Hugh Glass in The Revenant won him the Golden Globe Award for Best Actor – Motion Picture Drama. His performance as Jordan Belfort in The Wolf of Wall Street won him the Golden Globe award for Best Actor – Motion Picture Musical or Comedy. He also won the Academy Award for Best Actor and BAFTA Award for his performance in The Revenant. DiCaprio is the founder of his own production company, Appian Way Productions.",
        "profile_url": "https://upload.wikimedia.org/wikipedia/commons/3/3f/Leonardo_DiCaprio_visited_Goddard_Saturday_to_discuss_Earth_science_with_Piers_Sellers_%2826105091624%29_cropped.jpg",
        "wiki_url": "https://en.wikipedia.org/wiki/Leonardo_DiCaprio"
      },
      {
        "id": "24615498-a238-11e8-9077-720006ceb890",
        "first_name": "Joseph",
        "last_name": "Gordon-Levitt",
        "role_type": "ACTOR",
        "profile_description": "Joseph Leonard Gordon-Levitt is an American actor, filmmaker, singer, and entrepreneur. As a child, Gordon-Levitt appeared in many films and TV series. He took a break from acting to study at Columbia University, but dropped out in 2004 to pursue acting again. He has since starred in  films like (500) Days of Summer, Inception, The Dark Knight Rises, G.I. Joe: The Rise of Cobra and others. For his leading performances in (500) Days of Summer and 50/50, he was nominated for the Golden Globe Award for Best Actor – Motion Picture Musical or Comedy.",
        "profile_url": "https://upload.wikimedia.org/wikipedia/commons/7/7d/Joseph_Gordon-Levitt_2013.jpg",
        "wiki_url": "https://en.wikipedia.org/wiki/Joseph_Gordon-Levitt"
      },
      {
        "id": "2461589e-a238-11e8-9077-720006ceb890",
        "first_name": "Matthew",
        "last_name": "McConaughey",
        "role_type": "ACTOR",
        "profile_description": "Matthew David McConaughey is an American actor, producer, model, writer and director. McConaughey achieved ample success in 2013 and 2014. In 2013, McConaughey portrayed Ron Woodroof, a cowboy diagnosed with AIDS in the biographical film Dallas Buyers Club, which earned him the Academy Award, Critics Choice Movie Award, Golden Globe Award, and Screen Actors Guild Award, all for Best Actor, among other awards and nominations. In 2014, he starred as Rust Cohle in the first season of HBOs crime drama anthology series True Detective, for which he won the Critics Choice Television Award and TCA Award, and was nominated for the Primetime Emmy Award, Golden Globe Award, and Screen Actors Guild Award.",
        "profile_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Matthew_McConaughey_-_Goldene_Kamera_2014_-_Berlin.jpg/1024px-Matthew_McConaughey_-_Goldene_Kamera_2014_-_Berlin.jpg",
        "wiki_url": "https://en.wikipedia.org/wiki/Matthew_McConaughey"
      },
      {
        "id": "24615c0e-a238-11e8-9077-720006ceb890",
        "first_name": "Anne",
        "last_name": "Hathaway",
        "role_type": "ACTOR",
        "profile_description": "Anne Jacqueline Hathaway is an American actress and singer. One of the worlds highest-paid actresses in 2015, she has received multiple awards, including an Academy Award, a Golden Globe, a British Academy Film Award, and an Emmy. Her films have earned $6.4 billion worldwide, and she appeared in the Forbes Celebrity 100 in 2009.",
        "profile_url": "https://upload.wikimedia.org/wikipedia/commons/b/bd/Anne_Hathaway_in_2017.png",
        "wiki_url": "https://en.wikipedia.org/wiki/Anne_Hathaway"
      },
      {
        "id": "24615f4c-a238-11e8-9077-720006ceb890",
        "first_name": "Rajkummar",
        "last_name": "Rao",
        "role_type": "ACTOR",
        "profile_description": "Rajkummar Rao, also known as Rajkumar Yadav, is an Indian actor. He has established a career in Hindi cinema and is the recipient of several awards, including a National Film Award, three Filmfare Awards, and an Asia Pacific Screen Award. He is cited in the media as one of the most talented actors of his generation.",
        "profile_url": "https://en.wikipedia.org/wiki/Rajkummar_Rao#/media/File:Rajkummar_Rao_World_Premiere_Newton_Zoopalast_Berlinale_2017_02.jpg",
        "wiki_url": "https://en.wikipedia.org/wiki/Rajkummar_Rao"
      },
      {
        "id": "246162a8-a238-11e8-9077-720006ceb890",
        "first_name": "Kay Kay",
        "last_name": "Menon",
        "role_type": "ACTOR",
        "profile_description": "Kay Kay Menon is an Indian film, stage and television actor who works predominantly in Hindi cinema, and also in Gujarati, Tamil and Telugu cinema. He has also won the award for best actor for the film Shoonya from Festival of Arab and Asian cinema",
        "profile_url": "https://upload.wikimedia.org/wikipedia/commons/a/ac/Kay_Kay_Menon_at_libas_store.jpg",
        "wiki_url": "https://en.wikipedia.org/wiki/Kay_Kay_Menon"
      }
    ]
  );
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

  const findCommonElements=function(arr1, arr2) {
    return arr1.some(item => arr2.includes(item))
  };

  const handleApplyFilters = () => {
   let queryString = "?status=RELEASED";
   let tempMovies = [{}];
    if (movieName !== "") {
      queryString += "&title=" + movieName;
     /* for(let i=0;i<movies.length;i++){
        if(movies[i].title == movieName){
          tempMovies.push(movies[i]);
        }
      }*/
      
    }
    if (genresList.length > 0) {
      queryString += "&genres=" + genresList.toString();
     /* for(let i=0;i<movies.length;i++){
        let temp = findCommonElements(genresList,movies[i].genres)
        if(temp){
          tempMovies.push(movies[i]);
        }
      }*/
      
    }
    if (artistsList.length > 0) {
      queryString += "&artist_name=" + artistsList.toString();
     /* for(let i=0;i<movies.length;i++){
        let temp;
        if(movies[i].artists != null){
          var a = [];
          movies[i].artists.forEach(function(obj){
            a.push(obj.first_name + " " +obj.last_name);
          })
          temp = findCommonElements(artistsList,a)
        }
        if(temp){
          tempMovies.push(movies[i]);
        }
      }*/
    }
    if (releaseDateStart !== "") {
      queryString += "&start_date=" + releaseDateStart
      /*for(let i=0;i<movies.length;i++){
        let temp = movies[i].genres >= releaseDateStart
        if(temp){
          tempMovies.push(movies[i]);
        }
      }*/
    }
    if (releaseDateEnd !== "") {
      queryString += "&end_date=" + releaseDateEnd
      /*for(let i=0;i<movies.length;i++){
        let temp = movies[i].genres <= releaseDateStart
        if(temp){
          tempMovies.push(movies[i]);
        }
      }*/
    }
    let filteredData=fetch("http://localhost:8085/api/v1/"+"movies"+encodeURI(queryString));
    filteredData.then(res =>
          res.json()).then(d => {
              //Need to add this in released movie state
              console.log(d)
              //dispatch({ type: "SET_MOVIES", paylod: d });
              //window.location.href = "/";
          })
    setFilteredMovies(tempMovies)
    //dispatch({ type: "SET_MOVIES", paylod: filteredMovies });
    
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
            {genres.map((genre) => (
              <MenuItem key={"genre" + genre.id} value={genre.genre}>
                <Checkbox
                  checked={genresList.indexOf(genre.genre) > -1}
                />
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
            {artists.map((artist) => (
              <MenuItem key={"artist" + artist.id} value={artist.first_name + " " + artist.last_name}>
              <Checkbox checked={artistsList.indexOf(artist.first_name + " " + artist.last_name) > - 1} />
              <ListItemText primary={artist.first_name + " " + artist.last_name} />
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
            onClick={() => {handleApplyFilters()}}
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
export default withStyles(styles)(MovieFilterCard);