import './App.css';
import { segment } from "./components/segment";
import * as tasks from "./data/taskInfoList.json";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          NoteBoard
        </h1>
      </header>
      <body>
        <segment taskInfoList={tasks.tasks} />
      </body>
    </div>
  );
}

export default App;
