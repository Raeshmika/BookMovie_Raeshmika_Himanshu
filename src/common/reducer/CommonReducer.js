const initialState = {
  showBookShowButton: false,
};

export function commonReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_SHOW_BOOK_SHOW":
      return { ...state, showBookShowButton: action.payload };
    default:
      return state;
  }
}
