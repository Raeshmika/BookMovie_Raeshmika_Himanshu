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
      return { ...state, loginDetails: {}, openModal: false };
    case "ADD_REGISTERED_USERS":
      return { ...state, registeredUsers: action.payload };
    default:
      return state;
  }
}
