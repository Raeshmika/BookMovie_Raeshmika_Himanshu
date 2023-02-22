const initialState = {
  openModal: false,
  loginDetails: {},
};

export function loginReducer(state = initialState, action) {
  switch (action.type) {
    case "OPEN_CLOSE_MODAL":
      const open = action.payload;
      return Object.assign({}, state, { openModal: open });
    case "SET_LOGIN_DATA":
      return Object.assign({}, state, { loginDetails: action.payload });
    case "LOGOUT_USER":
      return Object.assign({}, state, { loginDetails: {} });
    default:
      return state;
  }
}
