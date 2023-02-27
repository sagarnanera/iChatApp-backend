const express = require("express");

const dotenv = require("dotenv");
dotenv.config();

const app = require('./src/app');
const conn = require('./DB/Dbconnect');
const morgan = require("morgan");

// logs for debuging
app.use(morgan("dev"));


const port = process.env.PORT | 5000;
const host = process.env.HOST;



app.listen(port, () => {
    console.log(`Server is up : http://${host}:${port}`);
});
