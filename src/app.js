const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const User = require('../models/Users');


app.get("/", (req, res) => {

    res.send("server is running.......🏃‍♀️");

});

const app = express();


module.exports = app;
