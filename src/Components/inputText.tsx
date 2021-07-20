import React, { FC, ChangeEvent } from 'react';
import styled from 'styled-components';

interface Props {
    handleChange: (event:ChangeEvent<HTMLInputElement>) => void,
    addTask: () => void ,
    task: string,
    deadline: number
}

const InputText:FC<Props> = ({ handleChange, addTask, task, deadline }) => {
    return (
        <Inputs>
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
        </Inputs>
    )
}

const Inputs = styled.div`
    margin-top: 1rem;
`;

export default InputText;