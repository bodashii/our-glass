const express = require("express");
const { connect } = require("mongoose");

const userRoutes = express.Router();

const dbo = require("../db/conn");

const ObjectId = require("mongodb").ObjectId;

userRoutes.route("/user").get(function (req, res) {
  let db_connect = dbo.getDb('our-glass');
  db_connect
    .collection("users")
    .find({})
    .toArray(function (err, results) {
      if (err) throw err;
      res.json(results);
    });
});

userRoutes.route('/user/:id').get(function (req, res) {
    let db_connect = dbo.getDb('our-glass');
    db_connect
        .collection('users')
        .findOne(myquery, function (err, result) {
            if (err) throw err;
            res.json(result);
    })
})

userRoutes.route('/user/signup').post(function (req, response) {
    let db_connect = dbo.getDb();
    let myobj = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    };
    db_connect.collection('users').insertOne(myobj, function (err, res) {
        if (err) throw err;
        response.json(res);
    });
});

userRoutes.route('/update/:id').post(function (req, res) {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    let newvalues = { 
        $set: {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        }
    }
})

userRoutes.route('/:id').delete((req, response) => {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    db_connect.collection('records').deleteOne(myquery, function (err, obj) {
        if (err) throw err;
        console.log("1 user deleted");
        response.json(obj);
    })
})

module.exports = userRoutes;