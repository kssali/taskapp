import React from "react";

function TaskItem({ id, title, description, heading, setTaskDatas }) {
  console.log(description)
  const moveHandler = (currentTaskId, currentHeading) => {
    setTaskDatas((prev) => {
      let updatedPendingTask = [];
      let updatedOngoinTask = [];
      let movedTask = [];

      if (currentHeading === "pending") {
        // getting the remaing pending array of tasks
        updatedPendingTask = prev.pending.filter(
          (item) => item.id !== currentTaskId
        );
          //getting the moved task into ongoing array
        movedTask = prev.pending.find((item) => item.id === currentTaskId);
        return {
          pending: updatedPendingTask,  
          ongoing: [...prev.ongoing, movedTask],
          completed: prev.completed,
        };
      } else if (currentHeading === "ongoing") {
         // getting the remaing ongoing array of tasks
        updatedOngoinTask = prev.ongoing.filter(
          (item) => item.id !== currentTaskId
        );
        // getting the moved task into compledted array
        movedTask = prev.ongoing.find((item) => item.id === currentTaskId);
        return {
          pending: prev.pending,
          ongoing: updatedOngoinTask,
          completed: [...prev.completed, movedTask],
        };
      }
    });
  };
  return (
    <div className="taskItem">
      <div className="itemHeader">
        <h3>{title}</h3>
        {heading !== "completed" && (
          <button
            className={`taskMover ${heading}`}
            onClick={() => moveHandler(id, heading)}
          >
            Move
          </button>
        )}
      </div>
      <p>{description}</p>
    </div>
  );
}

export default TaskItem;
