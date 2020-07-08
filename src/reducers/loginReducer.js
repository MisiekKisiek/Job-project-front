export const login = (state = { email: "", password: "" }, action) => {
  switch (action.type) {
    case "LOG_IN":
      return { email: action.email, password: action.password };

    default:
      return state;
  }
};
