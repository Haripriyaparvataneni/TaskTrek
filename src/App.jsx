import React, { useState, useEffect } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";
import ToDoIcon from "./assets/Direct-hit.jpeg";
import DoingIcon from "./assets/doing.jpeg";
import DoneIcon from "./assets/done..png";

const oldTasks = localStorage.getItem("tasks");
console.log(oldTasks);

const App = () => {
  const [tasks, settasks] = useState(JSON.parse(oldTasks) || []);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    settasks(newTasks);
  };
  return (
    <div className="app">
      <TaskForm settasks={settasks} />
      <main className="app_main">
        <TaskColumn
          title="ToDo"
          icon={ToDoIcon}
          tasks={tasks}
          status="todo"
          handleDelete={handleDelete}
        />
        <TaskColumn
          title="Doing"
          icon={DoingIcon}
          tasks={tasks}
          status="doing"
          handleDelete={handleDelete}
        />
        <TaskColumn
          title="Done"
          icon={DoneIcon}
          tasks={tasks}
          status="done"
          handleDelete={handleDelete}
        />
      </main>
    </div>
  );
};

export default App;
