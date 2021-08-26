const router = require('express').Router();
const exerciseRoutes = require("./exercise-route");
const statsRoutes = require("./stats-route");
const mainRoute = require("./main-route");
const workoutRoute = require("./api/workouts");

router.use('/api/workouts', workoutRoute);
router.use('/', mainRoute);
router.use('/exercise', exerciseRoutes);
router.use('/stats', statsRoutes);




module.exports = router;