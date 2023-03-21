import React, { useState } from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import "./App.css";
import AddTaskForm from "./components/AddTaskForm";

function App() {
  const [tasks, setTasks] = useState([
    { id: "task_1", title: "Learn JS", status: 0 },
    { id: "task_2", title: "Code a Todo list level 2", status: 0 },
  ]);

  const [showIncomplete, setShowIncomplete] = useState(false);

  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask) {
      const task = {
        id: Date.now(),
        title: newTask,
        status: 0,
      };
      setTasks([...tasks, task]);
      setNewTask("");
    }
  };

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const setTaskStatus = (taskId, status) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, status: status };
        }
        return task;
      })
    );
  };
  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="container">
      <Header
        title="Todo List"
        subtitle="Get things done, one item at a time."
      />

      <TaskList
        tasks={tasks}
        showIncomplete={showIncomplete}
        setTaskStatus={setTaskStatus}
        removeTask={removeTask}
      />
      <div className="filter-wrapper">
        <label htmlFor="filter" className="filter-label">
          Show incompleted tasks only
        </label>
        <input
          type="checkbox"
          id="filter"
          checked={showIncomplete}
          onChange={(e) => setShowIncomplete(e.target.checked)}
        />
      </div>
      <AddTaskForm
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        newTask={newTask}
      />
    </div>
  );
}

export default App;
