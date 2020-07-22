export const register = (first_name, last_name, email, password) => ({
  type: "GET_USER_DATA",
  first_name,
  last_name,
  email,
  password,
});

export const login = (email, password) => ({
  type: "LOG_IN",
  email,
  password,
});

export const token = (token, first_name, last_name) => ({
  type: "TOKEN",
  token,
  first_name,
  last_name
});

export const logout = (logout) => ({
  type: "LOG_OUT"
})
