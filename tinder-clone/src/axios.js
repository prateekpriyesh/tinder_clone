import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinder-ckend.herokuapp.com"
});

export default instance;
