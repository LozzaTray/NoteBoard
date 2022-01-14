import { Task } from "./Task";

export const Segment = ({ taskInfoList }) => {
  return (
    <div className="segment">
      {taskInfoList.forEach((info, idx) => {
        <Task key={`task-${idx}`} {...info}></Task>;
      })}
    </div>
  );
};
