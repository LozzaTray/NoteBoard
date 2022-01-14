import React from "react";
import { Task } from "./Task";
import { ITask } from "../models/task";

interface Props {
  taskInfoList: ITask[];
}

export const Segment: React.FC<Props> = ({ taskInfoList }) => {
  return (
    <div className="Segment">
      {taskInfoList.map((info, idx) => {
        return <Task key={`task-${idx}`} {...info}></Task>;
      })}
    </div>
  );
};
