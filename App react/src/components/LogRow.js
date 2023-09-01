import React from 'react';
import {TiEdit, TiDelete} from 'react-icons/ti';


function LogRow({ exercise, onDelete, onEdit }) {
    return (
        <tr>
            <td><TiDelete onClick={()=>onDelete(exercise._id)} title="Click on delete to remove exercise from active list of exercises." /></td>
            <td><TiEdit onClick={()=>onEdit(exercise)} title="Click here to edit an exercises data." /></td>
            <td title= "Name of the completed exercise">{exercise.name}</td>
            <td title= "Number of repetitions of exercise">{exercise.reps}</td>
            <td title= "Weight associated with exercise">{exercise.weight} {exercise.unit}</td>
            <td title= "When did you finish exercise?">{exercise.date.substring(0,10)}</td>
        </tr>
    );
}

export default LogRow;