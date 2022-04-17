const express = require('express')
const router = express.Router();
const db = require('../databaseConnection');
const functions = require('../databaseFunctions');
const app = require("../server");
router.use(express.static("public"));
const bodyParser = require('body-parser');



router.get('/', (req, res) => {
    functions.getAllRest((err, result) => {
        if (err) {
            // console.log("An Error happened Nooooooooooo")
            console.log(err)
        } else {
            // console.log("Everything Is Fineeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
            // console.log(result)
            res.render('rest', { result })
        }
    })
    
})

router.post('/addRestaurant', (req, res) => {
    console.log(req.body);
    functions.addRest(req.body, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            // console.log(result);
            res.redirect('/')
        }
    })
})

router.get('/deleteRest/:id', (req, res) => {
    const theId = req.params.id;
    functions.deleteReview(theId, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
            functions.deleteRest(theId, (err, result) => {
                if (err) {
                    console.log(err);
                } else {res.redirect('/')}
            })           
        }
    })
})
    




module.exports = router;