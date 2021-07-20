import React from 'react';
import {Task} from '../Interface';
import TodoTask from './task';
import '../App.css';

interface Props {
    todoList: Task[];
    deleteTask(task:string): void;
}

const List = ({todoList, deleteTask} : Props) => {
    return(
        <div className="todoList">
            {todoList.map((task: Task, key:number) => {
                return <TodoTask key={key} task={task} deleteTask={deleteTask}/>
            })}
        </div>
    )
}

export default List;