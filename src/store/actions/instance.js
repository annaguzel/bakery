import axios from "axios";

const instance = axios.create({
  baseURL: "https://ayo-bakery.herokuapp.com",
});

export default instance;
