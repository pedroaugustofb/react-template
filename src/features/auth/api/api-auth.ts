import axios from "axios";
import { LoginDTO } from "../types";

const baseURL = import.meta.env.BASE_URL;

const axios_ = axios.create({
  baseURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Here we can add interceptors, etc.

// We can also add methods to the api object like this:
const AuthApi = {
  login: async (data: LoginDTO) => await axios_.post("/auth/login", data),
};

// example of usage:
// AuthApi.login({username: 'username', password: 'password'})

export default AuthApi;
