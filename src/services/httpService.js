import axios from "axios";
// import auth from "./authService";
// import { toast } from "react-toastify";

// axios.defaults.headers.post
// axios.defaults.headers.common["x-auth-token"] = auth.getJwt();

// axios.interceptors.response.use(null, error => {
//   const expectedError =
//     error.response &&
//     error.response.status >= 400 &&
//     error.response.status < 500;

//   if (!expectedError) {
//     console.log("Logging the error", error);
//     toast.error("Unexpected error occured.");
//   }

//   return Promise.reject(error);
// });

// function setJwt(jwt) {
//   axios.defaults.headers.common["x-auth-token"] = jwt;
// }

export default {
  post: axios.post,
  get: axios.get,
  put: axios.put,
  delete: axios.delete
  // setJwt
};
