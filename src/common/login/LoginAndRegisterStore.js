const initialState = {
  openModal: false,
  loginDetails: {},
  registeredUsers: [
    {
      username: "admin@movieapp.com",
      password: "movieapp@123",
    },
  ],
};

export function loginReducer(state = initialState, action) {
  switch (action.type) {
    case "OPEN_CLOSE_MODAL":
      return { ...state, openModal: action.payload };
    case "SET_LOGIN_DATA":
      return { ...state, loginDetails: action.payload };
    case "LOGOUT_USER":
      return { ...state, loginDetails: {} };
    default:
      return state;
  }
}
