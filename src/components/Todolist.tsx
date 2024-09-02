import React from "react";

export type TaskType = {
    id: string;
    title: string;
    isDone: boolean;
}

export type PropsTitle = {
    title: string;
    subtitle: string;
    description: string;
    tasks: TaskType[];
}

export const Todolist = (props:PropsTitle) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <h4>{props.subtitle}</h4>
            <p>{props.description}</p>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                <li><input id={props.tasks[0].id} type="checkbox" checked={props.tasks[0].isDone}/> <span>{props.tasks[0].title}</span></li>
                <li><input id={props.tasks[1].id} type="checkbox" checked={props.tasks[1].isDone}/> <span>{props.tasks[1].title}</span></li>
                <li><input id={props.tasks[2].id} type="checkbox" checked={props.tasks[2].isDone}/> <span>{props.tasks[2].title}</span></li>
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}