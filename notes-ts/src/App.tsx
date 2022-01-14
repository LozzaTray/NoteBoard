import './App.css';
import { Segment } from "./components/Segment"

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
        <h1>NoteBoard hELLO</h1>
      </header>
      <div className="Container">
        <Segment taskInfoList={tasks} />
        <Segment taskInfoList={tasks} />
        <Segment taskInfoList={tasks} />
      </div>
    </div>
  );
}

export default App;
