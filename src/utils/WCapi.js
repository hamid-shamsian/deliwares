import config from "../config.json";

const apiUrlFor = endpoint =>
   config.apiGeneralUrl + endpoint + config.apiKeyQueryString;

export default apiUrlFor;
