import React from "react";
import { GridList, GridListTile, GridListTileBar } from "@material-ui/core";
import "./Home.css";
import MovieFilterCard from "./MovieFilterCard";

const releasedMovies = {
  page: 2,
  limit: 10,
  total_count: 17,
  movies: [
    {
      id: "16ddc57c-a2a1-11e8-9a3a-720006ceb890",
      title: "Ad Astra",
      storyline:
        "Ad Astra is an upcoming American epic science fiction thriller film directed by James Gray, and written by Gray and Ethan Gross. The film will star Brad Pitt, Tommy Lee Jones, Ruth Negga, Donald Sutherland and Jamie Kennedy.",
      genres: [],
      duration: 100,
      poster_url:
        "https://static1.squarespace.com/static/57004e4a20c647bc9420760b/t/58345640bebafbb1e66b78ce/1479824966458/AD+Astra+poster.jpg?format=500w",
      trailer_url: "https://www.youtube.com/watch?v=NTDgOOA2f-A",
      wiki_url: "https://en.wikipedia.org/wiki/Ad_Astra_(film)",
      release_date: "2019-01-01",
      censor_board_rating: "UA",
      rating: 8,
      status: "PUBLISHED",
      artists: null,
    },
    {
      id: "009ae262-a234-11e8-b475-720006ceb890",
      title: "The Godfather",
      storyline:
        "A chilling portrait of the Corleone familys rise and near fall from power in America along with balancing the story of the Sicilian clans ugly crime business in which they are engaged.",
      genres: ["Drama", "Crime"],
      duration: 177,
      poster_url:
        "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg",
      trailer_url: "https://www.youtube.com/watch/?v=sY1S34973zA",
      wiki_url: "https://en.wikipedia.org/wiki/The_Godfather",
      release_date: "1972-03-15",
      censor_board_rating: "A",
      rating: 9.2,
      status: "RELEASED",
      artists: [
        {
          id: "f114b346-a237-11e8-9077-720006ceb890",
          first_name: "Marlon",
          last_name: "Brando",
          role_type: "ACTOR",
          profile_description:
            "Marlon Brando Jr. was an American actor and film director. He is credited with bringing realism to film acting and helping to popularize the Stanislavski system of acting having studied with Stella Adler in the 1940s. Regarded for his cultural influence on 20th century film, Brandos Academy Award-winning performances include that of Terry Malloy in On the Waterfront (1954) and Don Vito Corleone in The Godfather (1972). Brando was an activist for many causes, notably the civil rights movement and various Native American movements.",
          profile_url:
            "https://upload.wikimedia.org/wikipedia/commons/e/e5/Marlon_Brando_%28cropped%29.jpg",
          wiki_url: "https://en.wikipedia.org/wiki/Marlon_Brando",
        },
        {
          id: "359f7e8a-a23b-11e8-9077-720006ceb890",
          first_name: "Al",
          last_name: "Pacino",
          role_type: "ACTOR",
          profile_description:
            "Alfredo James Pacino is an American actor and filmmaker. Pacino has had a career spanning over five decades, during which time he has received numerous accolades and honors both competitive and honorary, among them an Academy Award, two Tony Awards, two Primetime Emmy Awards, a British Academy Film Award, four Golden Globe Awards, the Lifetime Achievement Award from the American Film Institute, the Golden Globe Cecil B. DeMille Award, and the National Medal of Arts. He is also one of few performers to have won a competitive Oscar, an Emmy, and a Tony Award for acting, dubbed the Triple Crown of Acting.",
          profile_url:
            "https://upload.wikimedia.org/wikipedia/commons/9/98/Al_Pacino.jpg",
          wiki_url: "https://en.wikipedia.org/wiki/Al_Pacino",
        },
      ],
    },
    {
      id: "7281988a-a2a2-11e8-9a3a-720006ceb890",
      title: "A Star IS Born",
      storyline:
        "A Star Is Born is an upcoming American musical romantic drama film produced and directed by Bradley Cooper, in his directorial debut. Cooper also wrote the screenplay with Will Fetters and Eric Roth. A remake of the 1937 film of the same name, it stars Cooper, Lady Gaga, Andrew Dice Clay, Dave Chappelle, and Sam Elliott, and follows a hard-drinking country musician (Cooper) who discovers and falls in love with a young singer (Gaga).",
      genres: [],
      duration: 135,
      poster_url:
        "https://upload.wikimedia.org/wikipedia/en/3/39/A_Star_is_Born.png",
      trailer_url: "https://www.youtube.com/watch?v=nSbzyEJ8X9E",
      wiki_url: "https://en.wikipedia.org/wiki/A_Star_Is_Born_(2018_film)",
      release_date: "2018-10-05",
      censor_board_rating: "UA",
      rating: 8,
      status: "PUBLISHED",
      artists: null,
    },
    {
      id: "5d49d32e-a2a2-11e8-9a3a-720006ceb890",
      title: "The Nun",
      storyline:
        "The Nun is an upcoming American gothic supernatural horror film directed by Corin Hardy. The screenplay by Gary Dauberman is from a story by James Wan and Dauberman. It is a spin-off of 2016s The Conjuring 2 and the fifth installment in The Conjuring series, and stars Demián Bichir, Taissa Farmiga and Jonas Bloquet.",
      genres: [],
      duration: 96,
      poster_url:
        "https://upload.wikimedia.org/wikipedia/en/3/34/TheNunPoster.jpg",
      trailer_url: "https://www.youtube.com/watch?v=pzD9zGcUNrw",
      wiki_url: "https://en.wikipedia.org/wiki/The_Nun_(2018_film)",
      release_date: "2018-09-07",
      censor_board_rating: "UA",
      rating: 8,
      status: "PUBLISHED",
      artists: null,
    },
    {
      id: "8d71c3b8-a293-11e8-9a3a-720006ceb890",
      title: "Mile 22",
      storyline:
        "Mile 22 is a 2018 American action thriller film directed by Peter Berg and written by Lea Carpenter, from a story by Carpenter and Graham Roland. The film stars Mark Wahlberg, John Malkovich, Lauren Cohan, Iko Uwais, Ronda Rousey, and follows an elite CIA task force, composed of paramilitary officers from Ground Branch of Special Activities Division, that has to escort a high-priority asset 22 miles to an extraction point while being hunted by terrorists.",
      genres: ["Action", "Thriller"],
      duration: 95,
      poster_url: "https://upload.wikimedia.org/wikipedia/en/4/41/Mile_22.png",
      trailer_url: "https://www.youtube.com/watch?v=eJU6S5KOsNI",
      wiki_url: "https://en.wikipedia.org/wiki/Mile_22",
      release_date: "2018-09-19",
      censor_board_rating: "UA",
      rating: 6.1,
      status: "PUBLISHED",
      artists: [
        {
          id: "3097b8f4-a294-11e8-9a3a-720006ceb890",
          first_name: "Peter",
          last_name: "Berg",
          role_type: "DIRECTOR",
          profile_description:
            "Peter Berg (born March 11, 1964) is an American director, producer, writer, and actor. In television, Berg developed Friday Night Lights (2006–2011), adapted from his film, earning two Primetime Emmy Award nominations. As an actor, he is best known for his role as Dr. Billy Kronk on the CBS medical drama Chicago Hope (1995–1999).",
          profile_url:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Peter_Berg_by_Gage_Skidmore.jpg/440px-Peter_Berg_by_Gage_Skidmore.jpg",
          wiki_url: "https://en.wikipedia.org/wiki/Peter_Berg",
        },
        {
          id: "9df46816-a294-11e8-9a3a-720006ceb890",
          first_name: "Mark",
          last_name: "Wahlberg",
          role_type: "PRODUCER",
          profile_description:
            "PMark Robert Michael Wahlberg (born June 5, 1971) is an American actor, producer, businessman, former model, rapper and songwriter. He was known by his stage name Marky Mark in his early career as frontman for the group Marky Mark and the Funky Bunch, releasing the albums Music for the People and You Gotta Believe.",
          profile_url:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Mark_Wahlberg_2017.jpg/440px-Mark_Wahlberg_2017.jpg",
          wiki_url: "https://en.wikipedia.org/wiki/Mark_Wahlberg",
        },
        {
          id: "1dd86f90-a296-11e8-9a3a-720006ceb890",
          first_name: "John",
          last_name: "Malkovich",
          role_type: "ACTOR",
          profile_description:
            "John Gavin Malkovich (born December 9, 1953) is an American actor, director, producer and fashion designer. He has appeared in more than 70 films. For his roles in Places in the Heart and In the Line of Fire, he received Academy Award nominations. He appeared in such films as Empire of the Sun, The Killing Fields, Con Air, The Sheltering Sky, Of Mice and Men, Rounders, Knockaround Guys, Being John Malkovich, Shadow of the Vampire, Burn After Reading, Red, Red 2, Mulholland Falls, Dangerous Liaisons, and Warm Bodies, as well as producing films such as Ghost World, Juno, and The Perks of Being a Wallflower.",
          profile_url:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/John_Malkovich_at_a_screening_of_%22Casanova_Variations%22_in_January_2015.jpg/440px-John_Malkovich_at_a_screening_of_%22Casanova_Variations%22_in_January_2015.jpg",
          wiki_url: "https://en.wikipedia.org/wiki/John_Malkovich",
        },
      ],
    },
    {
      id: "52975022-a235-11e8-9077-720006ceb890",
      title: "Interstellar",
      storyline:
        "A team of explorers travel beyond this galaxy through a newly discovered wormhole to discover whether mankind has a future among the stars.",
      genres: ["Drama", "Adventure", "Scifi"],
      duration: 169,
      poster_url:
        "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
      trailer_url: "https://www.youtube.com/watch?v=2LqzF5WauAw",
      wiki_url: "https://en.wikipedia.org/wiki/Interstellar_(film)",
      release_date: "2014-11-07",
      censor_board_rating: "UA",
      rating: 8.6,
      status: "RELEASED",
      artists: [
        {
          id: "2461589e-a238-11e8-9077-720006ceb890",
          first_name: "Matthew",
          last_name: "McConaughey",
          role_type: "ACTOR",
          profile_description:
            "Matthew David McConaughey is an American actor, producer, model, writer and director. McConaughey achieved ample success in 2013 and 2014. In 2013, McConaughey portrayed Ron Woodroof, a cowboy diagnosed with AIDS in the biographical film Dallas Buyers Club, which earned him the Academy Award, Critics Choice Movie Award, Golden Globe Award, and Screen Actors Guild Award, all for Best Actor, among other awards and nominations. In 2014, he starred as Rust Cohle in the first season of HBOs crime drama anthology series True Detective, for which he won the Critics Choice Television Award and TCA Award, and was nominated for the Primetime Emmy Award, Golden Globe Award, and Screen Actors Guild Award.",
          profile_url:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Matthew_McConaughey_-_Goldene_Kamera_2014_-_Berlin.jpg/1024px-Matthew_McConaughey_-_Goldene_Kamera_2014_-_Berlin.jpg",
          wiki_url: "https://en.wikipedia.org/wiki/Matthew_McConaughey",
        },
        {
          id: "24615c0e-a238-11e8-9077-720006ceb890",
          first_name: "Anne",
          last_name: "Hathaway",
          role_type: "ACTOR",
          profile_description:
            "Anne Jacqueline Hathaway is an American actress and singer. One of the worlds highest-paid actresses in 2015, she has received multiple awards, including an Academy Award, a Golden Globe, a British Academy Film Award, and an Emmy. Her films have earned $6.4 billion worldwide, and she appeared in the Forbes Celebrity 100 in 2009.",
          profile_url:
            "https://upload.wikimedia.org/wikipedia/commons/b/bd/Anne_Hathaway_in_2017.png",
          wiki_url: "https://en.wikipedia.org/wiki/Anne_Hathaway",
        },
      ],
    },
    {
      id: "7e967dac-a2a2-11e8-9a3a-720006ceb890",
      poster_url: "Paltan",
      storyline:
        "Paltan is an upcoming Indian war film directed and produced by J.P. Dutta, based on 1967 Nathu La and Cho La clashes along the Sikkim border after 1962 Sino-Indian War. It stars an ensemble cast with Jackie Shroff, Arjun Rampal, Sonu Sood, Harshvardhan Rane, Esha Gupta, Sonal Chauhan and many more. It is set to be released on 7 September 2018.",
      genres: [],
      duration: 150,
      poster_url:
        "https://upload.wikimedia.org/wikipedia/en/6/64/Paltan_2018.jpg",
      trailer_url: "https://www.youtube.com/watch?v=kk6btnMEKTQ",
      wiki_url: "https://en.wikipedia.org/wiki/Paltan_(film)",
      release_date: "2018-09-07",
      censor_board_rating: "UA",
      rating: 8,
      status: "PUBLISHED",
      artists: null,
    },
  ],
};

const ReleasedMovies = () => {
  return (
    <div className="flex-container">
      <div className="released-movies-container">
        <GridList cellHeight={350} cols={3}>
          {releasedMovies.movies.map((movie) => (
            <GridListTile key={movie.id} cols={1}>
              <img src={movie.poster_url} alt={movie.title} />
              <GridListTileBar title={movie.title} />
            </GridListTile>
          ))}
        </GridList>
      </div>
      <div className="filter-movies">
         <MovieFilterCard />
      </div>
    </div>
  );
};

export default ReleasedMovies;
