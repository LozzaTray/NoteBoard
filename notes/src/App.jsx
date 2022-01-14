import "./App.css";
import React from "react";
import { Segment } from "./components/segment";

const tasks = [
  {
    text: "This is a task",
    dueDate: "Monday",
  },
  {
    text: "This is a task",
    dueDate: "Next Wednesday",
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>NoteBoard </h1>
      </header>
      <Segment taskInfoList={tasks} />
    </div>
  );
}

export default App;
