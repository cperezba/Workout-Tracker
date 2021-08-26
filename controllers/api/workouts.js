const router = require('express').Router();
const { Workout } = require("../../models");


router.get('/', async (req, res) => {
    try {
        const workouts = await Workout.find()

        res.status(200).json(workouts);
    }
    catch (err) {
        res.status(500).json(err);
    }
})


router.post('/', async (req, res) => {
    try {
        const workouts = await Workout.create({});

        res.status(200).json(workouts);
    }
    catch (err) {
        res.status(500).json(err);
    }
})


router.put('/:id', async (req, res) => {
    try {
        const workouts = await Workout.findById(req.params.id);

        res.status(200).json(workouts);
    }
    catch (err) {
        res.status(500).json(err);
    }
})

router.get('/range', async (req, res) => {
    try {
        const workouts = await Workout.find({});

        res.status(200).json(workouts);
    }
    catch (err) {
        res.status(500).json(err);
    }
})






module.exports = router;