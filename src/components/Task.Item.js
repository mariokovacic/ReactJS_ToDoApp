import React from "react";


const TaskItem = ({ task, deleteZadatak, toggle }) => {

    return (
        <li className="taskContainer">
            <div className="task">
                <input type="checkbox" id="inputCheck" onChange={toggle} />
                <p >{JSON.stringify(task)}</p>



            </div>
            <svg onClick={() => deleteZadatak(task.Task)} width="625" height="388" viewBox="0 0 625 388" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="271" y="162" width="60" height="82" rx="3" fill="#D9D9D9" />
                <rect x="264" y="151" width="74" height="8" rx="4" fill="#D9D9D9" />
                <rect x="271" y="148" width="60" height="7" rx="3.5" fill="#D9D9D9" />
                <rect x="334" y="225" width="26" height="8" rx="4" fill="#D9D9D9" />
                <rect x="334" y="214" width="37" height="8" rx="4" fill="#D9D9D9" />
                <rect x="334" y="203" width="48" height="8" rx="4" fill="#D9D9D9" />
                <rect x="334" y="192" width="52" height="7" rx="3.5" fill="#D9D9D9" />
                <rect x="290" y="144" width="22" height="7" rx="3.5" fill="#D9D9D9" />
            </svg>

        </li>

    )




}

export default TaskItem;