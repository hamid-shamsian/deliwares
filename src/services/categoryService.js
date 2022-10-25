import http from "./httpService";
import apiUrlFor from "../utils/WCapi";

export default function getCategories() {
   return http.get(apiUrlFor("/products/categories"));
}
