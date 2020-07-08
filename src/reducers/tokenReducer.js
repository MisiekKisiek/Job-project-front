export const token = (state = { token: "aaa" }, action) => {
  switch (action.type) {
    case "TOKEN":
      return { token: action.token };

    default:
      return state;
  }
};
