import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import TableHead from '../components/TableHead.js';

export const CreatePage = () => {

    const [name, setName] = useState('squat');
    const [reps, setReps] = useState('0');
    const [weight, setWeight] = useState('0');
    const [unit, setUnit] = useState('kgs');
    const [date, setDate] = useState();

    const history = useHistory();

    const addExercise = async () => {
        const newExercise = {name, reps, weight, unit, date};
        const response = await fetch('/exercises', {
            method: 'POST',
            body: JSON.stringify(newExercise),
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
        };
        return (
            <>
                <h2>ADD AN EXERCISE</h2>
                <p>What goals did you achieve today?</p>
                <table id="exercises" class="center">
                    <caption>Add Exercise to Table</caption>
                    <TableHead />
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td><label for="new_name" >
                                <input type="text" value={name} id="new_name" name="name"
                                    onChange={e => setName(e.target.value)} required />
                                </label></td>

                            <td><label for="num_reps" >
                                <input type="number" min="0" value={reps} id="num_reps" name="reps"
                                    onChange={e => setReps(e.target.value)} required />
                                </label>
                            </td>

                            <td><label for="num_weight" >
                                <input type="number" min="0" value={weight} id="num_weight" name="weight"
                                    onChange={e => setWeight(e.target.value)} required />
                                </label>
                                
                                <label for="num_unit" ></label>
                                    <select name='unit'
                                        onChange={e => setUnit(e.target.value)}
                                        required="required"
                                    >
                                        // force user to choose to facilitate ease of data curation work of data engineers/analysts/scientists to
                                        <option value="lbs" >lbs</option>
                                        <option value="kgs">kgs</option>

                                    </select>
                                </td>

                                <td><label for="new_date" >
                                    <input type="text"  id="new_date" name="date" value={date} required
                                    onChange={e=>setDate(e.target.value)}
                                    pattern="${mm}-${dd}-${yy}"
                                    />
                                    </label>
                                </td>
                                <td><button onClick={addExercise}>Save</button></td>
                        </tr>
                </tbody>
            </table>
            </>
        )
    }
    

export default CreatePage;