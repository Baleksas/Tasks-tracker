import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { deleteTask, getTasks, updateTask } from "../../actions/tasks";
import CreateTask from "../Form/CreateTask";
import Task from "./Task";

const Tasks = () => {
  let location = useLocation();
  const pathType = location.pathname === "/completed" ? "completed" : "default";

  const dispatch = useDispatch();

  // CRUD of tasks

  // Read
  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);
  const tasks = useSelector((state) => state.tasks);

  const isSameDay = (date) => {
    return (
      new Date().getFullYear() === new Date(date).getFullYear() &&
      new Date().getMonth() === new Date(date).getMonth() &&
      new Date().getDate() === new Date(date).getDate()
    );
  };

  const isNextDay = (date) => {
    console.log(new Date().getDate() + 1);
    return (
      new Date().getFullYear() === new Date(date).getFullYear() &&
      new Date().getMonth() === new Date(date).getMonth() &&
      new Date().getDate() + 1 === new Date(date).getDate()
    );
  };

  // update
  const update = (id, task, message) => {
    try {
      dispatch(updateTask(id, task));
      // Alert success
    } catch (error) {
      console.log(error);
    }
  };

  // delete
  const del = (id) => {
    try {
      dispatch(deleteTask(id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="tasks-container">
        <div className="tasks-box">
          {/* Default tasks view */}
          {pathType === "default" && (
            <React.Fragment>
              <div className="task-timeline">
                {(tasks.filter(
                  (task) =>
                    task.type === "default" && isSameDay(task.dateToComplete)
                ).length > 0 && <div>Today </div>) || (
                  <div>No tasks for today</div>
                )}
              </div>
              <div className="tasks-items">
                {tasks
                  .filter(
                    (task) =>
                      task.type === "default" && isSameDay(task.dateToComplete)
                  )
                  .map((task) => (
                    <Task
                      del={del}
                      update={update}
                      task={task}
                      key={task._id}
                    />
                  ))}
              </div>
              <div className="task-timeline">
                {(tasks.filter(
                  (task) =>
                    task.type === "default" && isNextDay(task.dateToComplete)
                ).length > 0 && <div>Tomorrow</div>) || (
                  <div>No tasks for tomorrow</div>
                )}
              </div>
              <div className="tasks-items">
                {tasks
                  .filter(
                    (task) =>
                      task.type === "default" && isNextDay(task.dateToComplete)
                  )
                  .map((task) => (
                    <Task
                      del={del}
                      update={update}
                      task={task}
                      key={task._id}
                    />
                  ))}
              </div>
              <div className="task-timeline">
                {tasks.filter(
                  (task) =>
                    task.type === "default" &&
                    !isSameDay(task.dateToComplete) &&
                    !isNextDay(task.dateToComplete)
                ).length > 0 && <div className="furtherTasks"></div>}
              </div>
              <div className="tasks-items">
                {tasks
                  .filter(
                    (task) =>
                      task.type === "default" &&
                      !isSameDay(task.dateToComplete) &&
                      !isNextDay(task.dateToComplete)
                  )
                  .map((task) => (
                    <Task
                      del={del}
                      update={update}
                      task={task}
                      key={task._id}
                    />
                  ))}
              </div>
              <CreateTask tasks={tasks} />
            </React.Fragment>
          )}

          {/* Completed tasks view */}
          {pathType === "completed" && (
            <div className="tasks-items">
              {tasks.map(
                (task) =>
                  task.type === "completed" && (
                    <Task
                      del={del}
                      update={update}
                      task={task}
                      key={task._id}
                    />
                  )
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
