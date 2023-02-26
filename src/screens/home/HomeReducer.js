const initialState = {
  allMovies: {},
  genereList: {},
  artists: {},
  pagination: {
    page: 1,
    limit: 10,
    totalCount: 0,
  },
  releasedMovies: {},
};

export function homeReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_MOVIES":
      return { ...state.home, allMovies: action.payload };
    case "SET_RELEASED_MOVIES":
      const movies = action.payload;
      console.log(movies);
      const filteredMovies = movies.filter(
        (movie) => movie.status === "RELEASED"
      );
      return { ...state.home, releasedMovies: filteredMovies };
    case "SET_GENRE":
      return { ...state.home, genereList: action.payload };
    case "SET_ARTISTS":
      return { ...state.home, artists: action.payload };
    default:
      return state;
  }
}
