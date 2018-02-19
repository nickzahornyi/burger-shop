import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-shop-c54d2.firebaseio.com/",
});

export default instance;
