import axios from "axios";

const serverURL = "http://frank-docker1.neueda.com:8081/v1";

export const getOrders = () => {
  return axios({
    url: `${serverURL}/trade`,
    method: "GET",
    headers: { Accept: "application/json" },
  });
};
