import './App.css';
import { Segment } from "./components/Segment"

const tasks = [
  {
    text: "Walk the plants",
    dueDate: "Monday",
  },
  {
    text: "Water the dog",
    dueDate: "Next Wednesday",
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>NoteBoard</h1>
      </header>
      <div className="Container">
        <Segment heading="To Do" taskInfoList={tasks} />
        <Segment heading="In Progress" taskInfoList={tasks} />
        <Segment heading="Done" taskInfoList={tasks} />
      </div>
    </div>
  );
}

export default App;
