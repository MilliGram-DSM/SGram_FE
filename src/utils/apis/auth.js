import axios from "axios";

const router = "users";

export const login = async data => {
  return await axios.post(
    `${import.meta.env.VITE_SERVER_BASE_URL}${router}/login`,
    data
  );
};

export const signUp = async data => {
  return await axios.post(
    `${import.meta.env.VITE_SERVER_BASE_URL}${router}/join`,
    data
  );
};
