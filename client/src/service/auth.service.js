import axios from "axios";
const API_URL = "http://localhost:8080/api/auth/";

  const login = (username, password) => {
    return axios
      .post(API_URL + "signin", { username, password })
      .then((response) => {
        console.log(response.data);
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        };        
        return response.data;
      })
      .catch((err) => console.log(err))
  }

  const logout = () => {
    localStorage.removeItem("user");
  }

  const register = (username, email, password) => {
    return axios
      .post(API_URL + "signup", { username, password, email })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      })
  }

  export default {
    register,
    login,
    logout,
  };


