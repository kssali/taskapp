import TaskColumn from "./TaskColumn";

const Main = ({ taskDatas, setTaskDatas }) => {
  
  return (
    <div className="appMain">
      <div className="taskBoard">
        {Object.entries(taskDatas).map(([key, value]) => {
          return (
            <TaskColumn
              heading={key}
              taskDatas={value}
              setTaskDatas={setTaskDatas}
              key={key}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Main;
