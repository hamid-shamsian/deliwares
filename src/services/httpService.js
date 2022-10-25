import axios from "axios";
import { toast } from "react-toastify";
import { log } from "./logService";

axios.interceptors.response.use(null, error => {
   const expectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;

   if (!expectedError) {
      log(error);
      toast("An unexpected error occurred!");
   }

   return Promise.reject(error.response);
});

// export function setJWT(jwt) {
//    axios.defaults.headers.common["x-auth-token"] = jwt;
// }

const http = {
   get: axios.get,
   post: axios.post,
   put: axios.put,
   patch: axios.patch,
   delete: axios.delete
   // setJWT
};

export default http;
