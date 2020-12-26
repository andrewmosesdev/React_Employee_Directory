/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

const API_URL = "https://randomuser.me/api/?results=15";


export default {
  
  search: () => {
    return axios.get(API_URL);
  }
};
