import mongoose from "mongoose";
import TaskMessage from "../models/taskMessage.js";
export const getTasks = async (req, res) => {
  try {
    const taskMessages = await TaskMessage.find();
    res.status(200).json(taskMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const createTask = async (req, res) => {
  const { title, dateToComplete, type } = req.body;
  const newTask = new TaskMessage({ title, dateToComplete, type });
  try {
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
export const updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, dateToComplete, type } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No task with: ${id}`);

  const updatedTask = { title, dateToComplete, type, _id: id };
  await TaskMessage.findByIdAndUpdate(id, updatedTask, { new: true });
  res.json(updatedTask);
};
export const deleteTask = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No task with: ${id}`);

  await TaskMessage.findByIdAndDelete(id);
  res.json({ message: "Task deleted." });
};
