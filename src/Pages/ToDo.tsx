import React, { FC, ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import InputText from '../Components/inputText';
import List from '../Components/list';
import {Task} from '../Interface';


const TodoPage:FC = () => {
  const [task, setTask] = useState<string>("")
  const [deadline, setDeadline] = useState<number>(0)
  const [todoList, setTodoList] = useState<Task[]>([])

  const handleChange = (event:ChangeEvent<HTMLInputElement>): void => {
    if(event.target.name === 'task'){
      setTask(event.target.value)
    } else {
      setDeadline(Number(event.target.value))
    }
  }

  const addTask = (): void => {
    const newTask = {taskName: task, deadline: deadline}
    setTodoList([...todoList, newTask])
    setTask("")
    setDeadline(0)
  }

  const deleteTask = (taskNameToDelete: string): void => {
    setTodoList(todoList.filter((task) => {
      return task.taskName != taskNameToDelete
    }))
  }

  return (
    <Wrapper>
      <Header>
        Hello World
        <InputText 
          handleChange={handleChange} 
          addTask={addTask} 
          task={task} 
          deadline={deadline}
        />
      </Header>
      <List todoList={todoList} deleteTask={deleteTask}/>
    </Wrapper>
  );
}

//STYLED COMPONENTS
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

const Header = styled.header`
  background-color: #282c34;
  flex: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

export default TodoPage;
