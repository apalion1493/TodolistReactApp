import React from 'react';
import './App.css';
import {TaskType, Todolist} from "./components/Todolist";

function App() {

    let tasks1:TaskType[] = [
        {id: '1', title: 'text1', isDone: false},
        {id: '2', title: 'text2', isDone: false},
        {id: '3', title: 'text3', isDone: true},
    ]

    let tasks2:TaskType[] = [
        {id: '1', title: 'text4', isDone: false},
        {id: '2', title: 'text5', isDone: true},
        {id: '3', title: 'text6', isDone: true},
    ]

    return (
        <div className="App">
            <Todolist title={"What is 1?"} subtitle={"subtitle 1"} description={"random text 1"} tasks={tasks1}/>
            <Todolist title={"What is 2?"} subtitle={"subtitle 2"} description={"random text 2"} tasks={tasks2}/>
        </div>
    );
}

export default App;
