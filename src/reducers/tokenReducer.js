export const token = (
  state = { token: "aaa", first_name: "", last_name: "", loginStatus: "logged" },
  action
) => {
  switch (action.type) {
    case "TOKEN":
      return { token: action.token, first_name: action.first_name, last_name: action.last_name, loginStatus: "logged" };
    case "LOG_OUT":
      return { token: state.token, first_name: "", last_name: "", loginStatus: "unlogged" };
    default:
      return state;
  }
};
