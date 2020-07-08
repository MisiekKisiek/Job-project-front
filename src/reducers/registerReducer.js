export const register = (
  state = { first_name: "", last_name: "", email: "", password: "" },
  action
) => {
  switch (action.type) {
    case "GET_USER_DATA":
      return {
        first_name: action.first_name,
        last_name: action.last_name,
        email: action.email,
        password: action.password,
      };

    default:
      return state;
  }
};
