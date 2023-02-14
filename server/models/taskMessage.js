import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
  title: String,
  dateToComplete: Date,
});

const TaskMessage = mongoose.model("TaskMessage", taskSchema);
export default TaskMessage;
