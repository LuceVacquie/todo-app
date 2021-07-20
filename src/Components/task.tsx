import React from 'react';
import { Task } from '../Interface';
import '../App.css';
import { VoidExpression } from 'typescript';

interface Props {
    task: Task;
    deleteTask(task:string): void;
}

const TodoTask = ({task, deleteTask}: Props) => {
    return(
        <div className='task'>
            <div className='content'>
                <span className='taskName'>{task.taskName}</span> 
                <span className='deadline'>{task.deadline}</span> 
            </div>
            <button onClick={() => deleteTask(task.taskName)}>X</button>
        </div>
    )
}

export default TodoTask;