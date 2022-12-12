import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ taskDatas, heading, setTaskDatas }) {
  return (
    <div className="taskList">
      {taskDatas.map((task) => (
        <TaskItem
          {...task}
          key={task.id}
          heading={heading}
          setTaskDatas={setTaskDatas}
        />
      ))}
    </div>
  );
}

export default TaskList;
