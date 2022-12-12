import React from "react";
import TaskHeader from "./TaskHeader";
import TaskList from "./TaskList";

function TaskColumn({ heading, taskDatas, setTaskDatas }) {


  return (
    <div className="taskColumn">
      <TaskHeader heading={heading} count={taskDatas.length} />
      {taskDatas.length !== 0 ? (
        <TaskList
          taskDatas={taskDatas}
          heading={heading}
          setTaskDatas={setTaskDatas}
        />
      ) : (
        <div className="taskList">
          <div className="taskItem">
            No <span>{heading}</span>Data
          </div>
        </div>
      )}
    </div>
  );
}
export default TaskColumn;
