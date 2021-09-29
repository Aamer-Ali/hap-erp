import axios from "axios";

axios.interceptors.response.use(null, (error) => {
  const unExpectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!unExpectedError) {
    console.log("Logging the error", error);
    alert("An Unexpected error occured");
  }
  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
