export const register = (first_name, last_name, email, password) => ({
  type: "GET_USER_DATA",
  first_name,
  last_name,
  email,
  password,
});
