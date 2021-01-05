/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

const API_URL = "https://randomuser.me/api/?results=50&nat=us";

const API = {
  fetchEmployees: () => axios.get(API_URL)
};

export default API;