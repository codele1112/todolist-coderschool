import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, showIncomplete, setTaskStatus, removeTask }) {
  return (
    <ul className="task-list">
      {tasks
        .filter((task) => (showIncomplete ? task.status !== 1 : true))
        .map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            setTaskStatus={setTaskStatus}
            removeTask={removeTask}
          />
        ))}
    </ul>
  );
}

export default TaskList;
