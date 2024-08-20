import axios from "axios";

export const login = async data => {
  return await axios.post("http://172.20.10.3:8080/users/login", data);
};

export const signUp = async data => {
  return await axios.post("http://172.20.10.3:8080/users/join", data);
};
