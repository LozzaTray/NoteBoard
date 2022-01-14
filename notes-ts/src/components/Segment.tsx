import React from "react";
import { Task } from "./Task";
import { ITask } from "../models/task";

interface Props {
  heading: string;
  taskInfoList: ITask[];
}

export const Segment: React.FC<Props> = ({ heading, taskInfoList }) => {
  return (
    <div className="Segment">
      <h2>{heading}</h2>
      {taskInfoList.map((info, idx) => {
        return <Task key={`task-${idx}`} {...info}></Task>;
      })}
    </div>
  );
};
