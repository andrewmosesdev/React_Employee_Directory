/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

const API_URL = "https://randomuser.me/api/?results=15";

const API = {
  fetchEmployees: () => axios.get(API_URL)
}

export default API;

// ============================================================
// const employees = [];

// export default {
//   search: () => {
//     return new Promise((resolve, reject) => {
//       axios
//         .get(API_URL)
//         .then((res) => {
//           const users = res.data;
//           const results = users.map((user) => {
//             return {
//               name: user.name,
//               phone: user.phone,
//               email: user.email,
//               image: user.thumbnail,
//             };
//           });
//           resolve(results);
//         })
//         .catch((err) => reject(err));
//     });
//   },

//   employeeList: () => {
//     return new Promise(resolve => {resolve(employees)})
//   }

// };
// ============================================================

