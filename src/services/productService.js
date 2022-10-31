import http from "./httpService";
import apiUrlFor from "../utils/WCapi";

export default function getProducts(pageNumber) {
   return http.get(apiUrlFor("/products") + `&per_page=100&page=${pageNumber}`);
}
