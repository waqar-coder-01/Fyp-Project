import axios from "axios";
const apiUrl = process.env.REACT_APP_BACKEND_URL //"http://localhost:8080/api/tasks";
console.log(apiUrl)
export function getTasks() {
    return axios.get(apiUrl);
}

export function addTask(task) {
    return axios.post(apiUrl, task);
}

export function updateTask(id, task) {
    return axios.put(apiUrl + "/" + id, task);
}

export function deleteTask(id) {
    return axios.delete(apiUrl + "/" + id);
}


/*
import axios from "axios";

const apiUrl = process.env.REACT_APP_BACKEND_URL;
console.log("Backend API URL:", apiUrl);

export function getTasks() {
  return axios
    .get(apiUrl)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching tasks:", error.message);
      throw error;
    });
}

export function addTask(task) {
  return axios
    .post(apiUrl, task)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error adding task:", error.message);
      throw error;
    });
}

export function updateTask(id, task) {
  return axios
    .put(`${apiUrl}/${id}`, task)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error updating task:", error.message);
      throw error;
    });
}

export function deleteTask(id) {
  return axios
    .delete(`${apiUrl}/${id}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error deleting task:", error.message);
      throw error;
    });
}

*/