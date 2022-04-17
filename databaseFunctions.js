const mysql = require('mysql2');
const db = require('./databaseConnection');

function getAllRest(callback) {
	let sqlQuery = "SELECT * FROM restaurant";
	db.query(sqlQuery, (err, results, fields) => {
		if (err) {
			callback(err, null);
		}
		else {
			callback(null, results);
		}		
	});
}

function addRest(dataInput, callback) {
    let sqlQueryThatIsGoingToAddRest = `insert into restaurant (name, description) values ('${dataInput.name}', '${dataInput.description}');`
    db.query(sqlQueryThatIsGoingToAddRest, (err, result, fields) => {
        if (err) {
            console.log('there is a err in addRest in function');
            console.log(err);
            callback(err, null);
        } else {
            console.log("success in functions");
            callback(null, result);
        }
    })
}

function deleteRest(theInputId, callback) {
    let sqlQueryThatIsGoingToDeleteThings = `Delete FROM restaurant WHERE restaurant_id =${theInputId}`;
    db.query(sqlQueryThatIsGoingToDeleteThings, (err, result, fields) => {
        if (err) {
        console.log('there is a err in deleteRest in function');
        console.log(err);
        callback(err, null);
        } else {
            console.log("success in the deleteRest Function");
            callback(null, result);
        }
    })
}


function deleteReview(theInputId, callback) {
       //another Thing needs to be added here to delete the FKs
       let sqlQueryThatIsGoingToDeleteTheReviews = `Delete FROM review WHERE restaurant_id =${theInputId}`;
    db.query(sqlQueryThatIsGoingToDeleteTheReviews, (err, result, fields) => {
        if (err) {
        console.log('there is a err in deleteReview in function');
        console.log(err);
        callback(err, null);
        } else {
            console.log("success in the deleteReview Function");
            callback(null, result);
        }
    })
}

function getAllReview(theInputId, callback) {
	let sqlQuery = `SELECT * FROM review WHERE restaurant_id = ${theInputId}`;
	db.query(sqlQuery, (err, results, fields) => {
		if (err) {
			callback(err, null);
		}
		else {
			callback(null, results);
		}		
	});
}

function addReview(dataInput, restaurant_id_Input , callback) {
    let sqlQueryThatIsGoingToAddRest = `insert into review (reviewer_name, details, rating, restaurant_id) values ('${dataInput.reviewer_name}', '${dataInput.details}', '${dataInput.rating}', '${restaurant_id_Input}');`
    db.query(sqlQueryThatIsGoingToAddRest, (err, result, fields) => {
        if (err) {
            console.log('there is a err in addReview in function');
            console.log(err);
            callback(err, null);
        } else {
            console.log("success in functions");
            callback(null, result);
        }
    })
}

function deleteReviewJustOne(theInputId, callback) {
    //another Thing needs to be added here to delete the FKs
    let sqlQueryThatIsGoingToDeleteTheReviews = `Delete FROM review WHERE review_id =${theInputId}`;
 db.query(sqlQueryThatIsGoingToDeleteTheReviews, (err, result, fields) => {
     if (err) {
     console.log('there is a err in deleteReview in function');
     console.log(err);
     callback(err, null);
     } else {
         console.log("success in the deleteReview Function");
         callback(null, result);
     }
 })
}

module.exports = {getAllRest, addRest, deleteRest, deleteReview, getAllReview, addReview, deleteReviewJustOne};