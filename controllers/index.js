const router = require('express').Router();
const exerciseRoutes = require("./api/exercise-route");
const mainRoute = require("./api/main-route");

router.use('/', mainRoute);
router.use('/exercise', exerciseRoutes);





module.exports = router;