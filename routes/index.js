const express = require('express'),
    router = express.Router();

router.get('/', (rec, res) => {
    res.render('templates', {
        locals: {
            title: "Home Page"
        },
        partials: {
            body: "partials/home"
        }
    })
})

module.exports = router;