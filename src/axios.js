import Axios from "axios";

const instance = Axios.create({
  baseURL: "https://api.kuroganehammer.com/api"
});

export default instance;
