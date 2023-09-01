import React from 'react';
import LogRow from './LogRow';
import TableHead from './TableHead';
import {TiEdit} from 'react-icons/ti';



function LogTable({ exercises, onDelete, onEdit }) {
    return (
        <table class="center">
            <caption>EXERCISES LOG</caption>
            <TableHead />
            <tbody>
                {exercises.map((exercise, i) =>
                <LogRow 
                    exercise = {exercise} 
                    key={i} 
                    onDelete={onDelete} 
                    onEdit={onEdit}
                />)}

            </tbody>
        </table>
            
    );
}

export default LogTable;
