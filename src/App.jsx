import React from "react";
import { useState } from "react";
import "./App.css";
import { TaskInput } from "./components/TaskInput";
import TaskItem from "./components/Task.Item";

function App() {
  const [lista, napraviListu] = useState([]); //prazan array jer cemo tu spremati value iz input-a
  const [stanje, novoStanje] = useState(0);
  const dodajZadatak = (imeZadatka) => {
    const noviZadatak = { Task: imeZadatka };
    napraviListu([...lista, noviZadatak]);
    console.log(lista);
    novoStanje(stanje + 1);
  };

  const deleteZadatak = (noviZadatak) => {
    napraviListu(lista.filter((task) => task.Task !== noviZadatak));
  };

  const toggle = (kucica) => {
    if (kucica) {
      alert("Task is finished!");
      novoStanje(stanje - 1);
    }
  };

  return (
    <>
      <main>
        <h1 className="appTitle">Todo App</h1>
        <br></br>
        <h3>ToDo: {stanje} more!</h3>
        <br></br>
        <TaskInput dodajZadatak={dodajZadatak} />
        <div>
          <ul>
            {lista.map((task, kljuc) => (
              <TaskItem
                task={task}
                key={kljuc}
                deleteZadatak={deleteZadatak}
                toggle={toggle}
              />
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}

export default App;
