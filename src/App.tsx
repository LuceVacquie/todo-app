import React, { FC, ChangeEvent, useState } from 'react';
import './App.css';
import InputText from './Components/inputText';
import List from './Components/list';
import {Task} from './Interface';


const App:FC = () => {
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

  return (
    <div className="App">
      <header className="App-header">
        Hello World
        <InputText 
          handleChange={handleChange} 
          addTask={addTask} 
          task={task} 
          deadline={deadline}
        />
      </header>
      <div className="todoList">
        <List todoList={todoList}/>
      </div>
    </div>
  );
}

export default App;
