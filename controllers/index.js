const router = require('express').Router();
const exerciseRoutes = require("./api/exercise-route");
const statsRoutes = require("./api/stats-route");
const mainRoute = require("./api/main-route");

router.use('/', mainRoute);
router.use('/exercise', exerciseRoutes);
router.use('/stats', statsRoutes);




module.exports = router;