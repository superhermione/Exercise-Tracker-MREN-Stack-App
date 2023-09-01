import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
// have access to components
import LogTable from '../components/LogTable';

function HomePage({ setExercise }) {
    const history = useHistory();

    const [exercises, setExercises] = useState([]);

    const loadExercises = async () => {
        const response = await fetch('/exercises');
        const exercises = await response.json();
        setExercises(exercises);

    }

    const onEditExercise = async exercise =>{
        setExercise(exercise);
        history.push("/edit-exercise");
    }

    const onDeleteExercise = async id => {
        const response = await fetch(`/exercises/${id}`, { method: 'DELETE' });
        if (response.status === 204){
            const getResponse = await fetch('/exercises');
            const exercises = await getResponse.json();
            setExercises(exercises);
        } else {
            console.error(`Failed to delete the row corresponding to id:${id} {status code = ${response.status}.`);
        }
    }

    useEffect(() => {
        loadExercises();
    }, []);

    return (
        <>
            <h2>Current Exercises</h2>
            <p>Click on icons to delete and edit exercises.
            </p>
            <LogTable exercises={exercises} onDelete={onDeleteExercise}
                onEdit={onEditExercise} />
        </>
    );
}

export default HomePage;