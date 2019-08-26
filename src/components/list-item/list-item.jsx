import React from 'react';

export const ListItem = ({task, handleDelete}) => {
    return(
        <li className="list-group-item ">
            <h5>{task.title}</h5>
            <button className={'float-right btn btn-danger'} onClick={() =>handleDelete(task.taskId)}>delete</button>
            <p>{task.taskDescription}</p>
        </li>
        )

};