import React, { useState } from "react";


export function TaskInput({ dodajZadatak }) {
    const [task, setTask] = useState('')

    function handleInputValue(e) {

        setTask(e.target.value);
        console.log(task);

    }

    function handleDodaniZadatak(e) {
        e.preventDefault();
        if (task.trim() === '') return;
        dodajZadatak(task);
        setTask('');

    }

    return <form onSubmit={handleDodaniZadatak}>

        <input id="inputMain" type="text" value={task.imeZadatka} onChange={handleInputValue} placeholder="Add a new task..."></input>
        <button id="add">+</button>

    </form>


}