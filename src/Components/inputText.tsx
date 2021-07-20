import React, { FC, ChangeEvent } from 'react'

interface Props {
    handleChange: (event:ChangeEvent<HTMLInputEvent>) => void,
    addTask: () => void ,
    task: string,
    deadline: number
}

const InputText:FC<Props> = ({ handleChange, addTask, task, deadline }) => {
    return (
        <div>
            <input 
                type='text' 
                placeholder='Task' 
                name='task'
                value={task}
                onChange={handleChange}
            />
            <input 
                type='number' 
                placeholder='Deadline' 
                name='deadline'
                value={deadline}
                onChange={handleChange}
            />
            <button onClick={addTask}>ADD</button>
        </div>
    )
}

export default InputText;