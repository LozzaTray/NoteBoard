import React from "react";
import { ITask } from "../models/task";

export const Task: React.FC<ITask> = ({ text, dueDate }) => {
  return (
    <div className="Task">
      <p>{text}</p>
    </div>
  );
};
