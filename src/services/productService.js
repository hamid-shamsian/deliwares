import http from "./httpService";
import apiUrlFor from "../utils/WCapi";

export default function getProducts() {
   return http.get(apiUrlFor("/products"));
}
