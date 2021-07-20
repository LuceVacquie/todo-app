import React from 'react';
import { Task } from '../Interface';
import '../App.css';

interface Props {
    task: Task
}

const TodoTask = ({task}: Props) => {
    return(
        <div>
            <div className='task'>
               <span>{task.taskName}</span> 
               <span>{task.deadline}</span> 
            </div>
            <button>X</button>
        </div>
        
    )
}

export default TodoTask;