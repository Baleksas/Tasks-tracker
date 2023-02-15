import axios from "axios";

const url_tasks = "http://localhost:5001/tasks";
const url_completed = "http://localhost:5001/completed";

export const fetchTasks = () => axios.get(url_tasks);
export const fetchCompleted = () => axios.get(url_completed);

export const createTask = (newTask) => axios.post(url_tasks, newTask);
export const createCompleted = (newTask) => axios.post(url_completed, newTask);

export const updateTask = (id, updatedTask) =>
  axios.patch(`${url_tasks}/${id}`, updatedTask);

export const updateCompleted = (id, updatedTask) =>
  axios.patch(`${url_completed}/${id}`, updatedTask);

export const deleteTask = (id) => axios.delete(`${url_tasks}/${id}`);
export const deleteCompleted = (id) => axios.delete(`${url_completed}/${id}`);
