const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        res.status(200).render("public/index.html");
    }

    catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
})




module.exports = router;
