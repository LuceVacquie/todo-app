import React from 'react';
import { Task } from '../Interface';
import styled from 'styled-components';

interface Props {
    task: Task;
    deleteTask(task:string): void;
}

const TodoTask = ({task, deleteTask}: Props) => {
    return(
        <TaskWrapper>
            <div>
                <span>{task.taskName}</span> 
                <span>{task.deadline}</span> 
            </div>
            <button onClick={() => deleteTask(task.taskName)}>X</button>
        </TaskWrapper>
    )
}

//STYLED COMPONENTS
const TaskWrapper = styled.div`
    display: flex;
    width: 80%;
    div{
        flex: 80%;
        display: flex;
        height: 100%;
        padding-right: 1rem;
        align-items: center;
        justify-content: center;
    }
    span{
        flex: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
    button {
        background-color: aqua;
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 1rem;
    }
`;

export default TodoTask;