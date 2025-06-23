import axios from "axios";
import EnvControl from "./EnvControl";

const baseURL = EnvControl();
if (!baseURL) {
  throw new Error(
    "VITE_API_BASE_URL is not defined in the environment variables.",
  );
}

const Axios = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  timeout: 30000,
});

export default Axios;
