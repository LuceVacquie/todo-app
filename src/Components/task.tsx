import React, { FC } from 'react';
import { Task } from '../Interface';

interface Props {
    task: Task
}

const TodoTask = ({task}: Props) => {
    return(
        <div>{task.taskName} {task.deadline}</div>
    )
}

export default TodoTask;