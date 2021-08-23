const router = require('express').Router();

router.use('/', async (req, res) => {
    try {
        res.render("public/index.html")


    }

    catch (err) {
        res.status(500).json(err);
    }
})




module.exports = router;
