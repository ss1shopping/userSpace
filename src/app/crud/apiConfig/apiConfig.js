import axios from "axios";
import { getStorage } from "../../../_metronic/utils/utils";
import { API_URL } from "../../constant/api/apiConstants";

const initApi = (setAccessHeader = true, setRefreshToken = false) => {
  if (setAccessHeader) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${getStorage("token")}`;
  }

  axios.defaults.baseURL = API_URL;
  console.log("trong aaios");
  
  return axios;
};

export default initApi;
