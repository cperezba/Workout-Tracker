const router = require("express").Router();



router.use('/', async (req, res) => {
    try {
        res.status(200).render("public/exercise.html")
    }
    catch (err) {
        res.status(500).json(err);
    }
});




module.exports = router;