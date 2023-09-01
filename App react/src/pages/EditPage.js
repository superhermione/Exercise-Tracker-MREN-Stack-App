import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import TableHead from '../components/TableHead.js';

export const EditPage = ({exercise}) => {
    const [name, setName] = useState(exercise.name);
    const [reps, setReps] = useState(exercise.reps);
    const [weight, setWeight] = useState(exercise.weight);
    const [unit, setUnit] = useState(exercise.unit);
    const [date, setDate] = useState(exercise.date);

    const history = useHistory();
    const editExercise = async () => {
        const response = await fetch(`/exercises/${exercise._id}`, {
            method: 'PUT',
            body: JSON.stringify({
                name:name,
                reps:reps,
                weight:weight,
                unit:unit,
                date:date
            }),
            headers: {
                'Content-Type': 'application/json',
            },

        });
        if(response.status === 200){
            alert(`New row with new exercise successfully added. Status code = ${response.status}.`);
        }else{
            alert(`Failure to add new exercise row. Missing input. Status code = ${response.status}.`);
        }
        history.push("/");
        
    }
    return (
        <>
            <h2>MODIFY AN EXERCISE</h2>
            <p>Manipulate icons to modify an exercise (row) in the table</p>

            <table id="exercises" class="center">
                <caption>Edit an Exercise.</caption>
                    <TableHead />
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td><label for="update_name">
                                    <input type="text" value={name} id="update_name" name="name"
                                        onChange={e =>setName(e.target.value)}
                                        maxLength="35" size="35" required
                                        />
                                </label></td>

                                <td><label for="update_reps">
                                    <input type="number" min="0" value={reps} id="update_reps" name="reps"
                                        onChange={e =>setReps(e.target.value)}
                                        maxLength="4" size="5" required
                                        />
                                </label></td>

                                <td><label for="update_weight">
                                    <input type="number" min="0" value={weight} id="update_weight" name="weight"
                                        onChange={e =>setWeight(e.target.value)}
                                        maxLength="4" size="5" required
                                        />
                                </label>

                                <label for="update_unit"></label>
                                    <select name='unit'
                                        onChange={e => setUnit(e.target.value)}>
                                        <option value='lbs' selected>lbs</option>
                                        <option value='kgs' selected>kgs</option>
                                    </select>    
                                </td>
                                <td><label for="xdate" >
                                    <input type="text" id="xdate" name="date" value={date}
                                        onChange={e => setDate(e.target.value)}
                                        pattern="${mm}-${dd}-${yy}"
                                        />
                                </label></td>

                                <td><button onClick={editExercise}>Save</button></td>
                            </tr>
                        </tbody>
            </table>
        </>
    )};
export default EditPage;