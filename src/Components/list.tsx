import React, { FC } from 'react';
import {Task} from '../Interface';
import TodoTask from './task';

interface Props {
    todoList: Task[]
}

const List = ({todoList} : Props) => {
    return(
        <div>
            {todoList.map((task: Task, key:number) => {
                return <TodoTask key={key} task={task}/>
            })}
        </div>
    )
}

export default List;