import axios from "axios";


axios.defaults.baseURL = "http://localhost:3000/";
// if (window.localStorage?.token) {
//   axios.defaults.headers.common = {
//     Authorization: `Bearer ${window.localStorage.token}`,
//   };
// } else {
//   delete axios.defaults.headers?.common["Authorization"];
// }
export default axios;