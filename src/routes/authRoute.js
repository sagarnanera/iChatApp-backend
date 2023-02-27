const express = require("express");

const router = express.Router();


import rateLimiter from "express-rate-limit";

// to limit concurent attemts to increase load of the server
const apiLimiter = rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10,
    message: "Too many requests from this IP, please try again after 15 minutes",
});


router.post('/register', apiLimiter, (req, res) => {

    res.send("reached to /register......")

});

router.post('/login', apiLimiter, (req, res) => {

    res.send("reached to /login......")

});




export default router;
