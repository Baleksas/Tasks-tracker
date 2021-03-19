import axios from "axios";

const url = "http://localhost:5000/goals";

export const fetchGoals = () => axios.get(url);

export const createGoal = (newGoal) => axios.post(url, newGoal);

export const deleteGoal = (id) => axios.delete(`${url}/${id}`);
