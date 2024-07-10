import axios from "axios";

const serverURL = "http://localhost:8080";

export const getTransactions = () => {
  return axios({
    url: `${serverURL}/transactions`,
    method: "GET",
    headers: { Accept: "application/json" },
  });
};
