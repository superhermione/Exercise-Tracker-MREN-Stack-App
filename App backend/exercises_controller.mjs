import * as exercises from './exercises_model.mjs';
import express from 'express';
import { body, validationResult } from 'express-validator';
const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

app.post('/exercises',
    
    body('name').isLength({min:1}),
    body('reps').isInt({min:1}),
    body('weight').isInt({min:1}),
    body('unit').isIn(['kgs', 'lbs']),
    body('date').isDate({ format: 'MM-DD-YY', strictMode: true }),
    (req,res)=>{
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            return res.status(400).json({Error: 'Invalid request' });
        }
        exercises.createExercise(req.body.name, req.body.reps, req.body.weight, req.body.unit, req.body.date)
        .then(exercise => {
            // status in case of success
            res.status(200).json(exercise);
        });
});

 app.get('/exercises', (req, res) => {
     exercises.findExercise()
        .then(exercise => {
            res.status(200).json(exercise);
        })
        .catch(error => {
            console.error(error);
            res.status(404).json({error: 'Not found'});
        });
    console.log('received');
 });

 app.get('/exercises/:_id', (req, res) => {
    const exerciseId = req.params._id;
     
    exercises.findExerciseById(exerciseId)
    .then(exercise => {
        if (exercise === null|| exercise === undefined){
            res.status(404).json({error: 'Not found'});}
        else{
            res.status(200).json(exercise);}
    })
    .catch(error => {
        console.error(error);
        res.status(404).json({error: 'Not found'});
    });
});

 app.put('/exercises/:_id',
    
    body('name').isLength({min:1}),
    body('reps').isInt({min:1}),
    body('weight').isInt({min:1}),
    body('unit').isIn(['kgs', 'lbs']),
    body('date').isDate({ format: 'MM-DD-YY', strictMode: true }),
    (req,res)=>{
        console.log(req.body);
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            return res.status(400).json({Error: 'Invalid request' });
        }
        exercises.replaceExercise(req.params._id, req.body.name, req.body.reps, req.body.weight, req.body.unit, req.body.date)
        .then(numUpdated => {
            if (numUpdated === 1){
            res.json({name: req.body.name, reps: req.body.reps, weight: req.body.weight, unit:req.body.unit, date:req.body.date})
        }else{
            res.status(404).json({Error: 'Not found'});
        }
    })
});

//'Deleting '
 app.delete('/exercises/:id', (req, res) => {
     exercises.deleteById(req.params.id)
        .then(deletedCount => {
            if (deletedCount ===1){
                res.status(204).json(exercise);
            } else {
                res.status(404).json({error: 'Not found'})
            }
        })

        .catch(error => {
            console.log('error');
            res.send({error: 'Request failed.'});
        });
 });

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});