import React from 'react';
import { Link } from 'react-router-dom';
import { TiDocumentAdd } from "react-icons/ti"
import {TiFolderAdd} from "react-icons/ti";

function TableHead() {
    return (
        <thead>
            <tr>
                <th title="Click delete icon to instantly remove a row.">Delete</th>
                <th title="Click edit icon to edit row on new screen.">Edit</th>
                <th title="What is exercise name ?">Name</th>
                <th title="How many reps of exercise ?">Reps</th>
                <th title="How much weight per rep, and in lbs or kgs?"> Weight & Unit</th>
                <th title="When did you complete this?"> Date</th>
                
            </tr>
        </thead>
    );
}


export default TableHead

