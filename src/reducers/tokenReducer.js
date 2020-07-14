export const token = (
  state = { token: "aaa", loginStatus: "unlogged" },
  action
) => {
  switch (action.type) {
    case "TOKEN":
      return { token: action.token, loginStatus: "logged" };
    case "LOG_OUT":
      return { token: state.token, loginStatus: "unlogged" };
    // case "LOG_IN":
    //   return { token: state.token, loginStatus: 'logged' }
    default:
      return state;
  }
};
