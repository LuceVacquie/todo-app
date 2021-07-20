import React from 'react';
import {Task} from '../Interface';
import TodoTask from './task';
import styled from 'styled-components';

interface Props {
    todoList: Task[];
    deleteTask(task:string): void;
}

const List = ({todoList, deleteTask} : Props) => {
    return(
        <TodoListWrapper>
            {todoList.map((task: Task, key:number) => {
                return <TodoTask key={key} task={task} deleteTask={deleteTask}/>
            })}
        </TodoListWrapper>
    )
}

//STYLED COMPONENTS
const TodoListWrapper = styled.div`
    background-color: azure;
    padding: 2rem;
    flex: 65%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export default List;