/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

const API_URL = "https://randomuser.me/api/?results=";

export default {
  search: (query) => {
    return axios.get(API_URL + query);
  }
};
