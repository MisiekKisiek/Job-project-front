export const register = (state = [], action) => {
  switch (action) {
    case "GET_USER_DATA":
      return [...action];

    default:
      return state;
  }
};
