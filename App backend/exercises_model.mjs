import mongoose from 'mongoose';
import 'dotenv/config';

mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    {useNewUrlParser:true}
);
const db = mongoose.connection;
db.once('open', () => {
    console.log('Successfully connected to MongoDB')
})

db.once('open', (error) => {
    if (error){
        res.status(500).json({error: '500: Connection Server Error'});
    } else {
    console.log('Successfully connected to MongoDB using Mongoose!');
    }
});

const exerciseSchema = mongoose.Schema({
    name: { type: String, required: true },
    reps: { type: Number, required: true },
    weight: { type: Number, required: true },
    unit: { type: String, required: true },
    date: { type: String, required: true }
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

/**
 * Create an exercise section
 * @param {String} name 
 * @param {Number} reps 
 * @param {Number} weight 
 * @param {String} unit
 * @param {String} date
 * @returns A promise. Resolves to the JSON object for the document created by calling save
 */
const createExercise = async (name, reps, weight, unit, date) => {
    
    const exercise = new Exercise({ name: name, reps: reps, weight: weight, unit:unit, date:date});

    return exercise.save();
}

const findExercise = async () => {
    const query = Exercise.find()
    return query.exec();
}

const findExerciseById = async (id) => {
    const query = Exercise.findById(id);
    return query.exec();
}

const replaceExercise = async (id, name, reps, weight, unit, date)=>{
    const result = await Exercise.replaceOne({_id:id}, {
        name: name, reps: reps, weight:weight, unit: unit, date: date 
    });
    return result.modifiedCount;
    }

const deleteById = async (id) => {
    const result = await Exercise.deleteOne({ _id: id });
    // Return the count of deleted document. Since we called deleteOne, this will be either 0 or 1.
    return result.deletedCount;
    }

export { createExercise, findExercise, findExerciseById, replaceExercise ,deleteById };