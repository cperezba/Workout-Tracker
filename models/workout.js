const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        trim: true,
    },
    exercise: [{
        type: {
            type: String,
        },
        name: {
            type: String,
        },
        duration: {
            type: Number,
        },
        weight: {
            type: Number,
        },
        reps: {
            type: Number,
        },
        sets: {
            type: Number,
        }, 
        distance: {
            type: Number,
        },

    }],
});


// type: 'resistance',
// name: 'Military Press',
// duration: 20,
// weight: 300,
// reps: 10,
// sets: 4,


// type: 'cardio',
// name: 'Running',
// duration: 25,
// distance: 4,


const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;

