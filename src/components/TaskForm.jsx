import React, { useState } from "react";
import "./TaskForm.Css";
import Tag from "./Tag";

const TaskForm = ({ settasks }) => {
  const [taskData, settaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });
  const checkTag = (tag) => {
    return taskData.tags.some((item) => item === tag);
  };
  const selectTag = (tag) => {
    if (taskData.tags.some((item) => item === tag)) {
      const filterTags = taskData.tags.filter((item) => item !== tag);
      settaskData((prev) => {
        return { ...prev, tags: filterTags };
      });
    } else {
      settaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tag] };
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    settaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(taskData);
    settasks((prev) => {
      return [...prev, taskData];
    });
    settaskData({
      task: "",
      status: "todo",
      tags: [],
    });
  };

  return (
    <header className="app_header">
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          name="task"
          value={taskData.task}
          className="task_input"
          placeholder="Enter your task"
          onChange={handleChange}
        />
        <div className="task_form_bottom_line">
          <div>
            <Tag
              tagname="HTML"
              selectTag={selectTag}
              selected={checkTag("HTML")}
            />
            <Tag
              tagname="CSS"
              selectTag={selectTag}
              selected={checkTag("CSS")}
            />
            <Tag
              tagname="JavaScript"
              selectTag={selectTag}
              selected={checkTag("JavaScript")}
            />
            <Tag
              tagname="React"
              selectTag={selectTag}
              selected={checkTag("React")}
            />
          </div>
          <div>
            <select
              className="task_status"
              value={taskData.status}
              onChange={handleChange}
              name="status"
            >
              <option value="todo"> To Do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
            <button type="submit" className="task_submit">
              + Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
