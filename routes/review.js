const express = require('express')
const router = express.Router();
const db = require('../databaseConnection');
const functions = require('../databaseFunctions');
const app = require("../server");
router.use(express.static("public"));
const bodyParser = require('body-parser');

var thisIstheIdThatISgoingToBeUsedInDelete = 0;

router.get('/:id', (req, res) => {
    const theId = req.params.id;
    thisIstheIdThatISgoingToBeUsedInDelete = theId
    functions.getAllReview(theId, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log("I got All the reviews");
            console.log(result)
            res.render('reviews', {result})
        }
    })
})

router.post('/addReview', (req, res) => {
    const theId = thisIstheIdThatISgoingToBeUsedInDelete;
    console.log(req.body)
    functions.addReview(req.body, theId, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            // console.log(result);
            res.redirect(`/review/${theId}`)
        }
    })
})

router.get('/deleteReview/:id', (req, res) => {
    const theId = req.params.id;
    console.log(theId)
    const theIdOfTheRest = thisIstheIdThatISgoingToBeUsedInDelete
    functions.deleteReviewJustOne(theId,(err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect(`/review/${theIdOfTheRest}`)
        }
    })
})












module.exports = router;