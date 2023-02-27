const express = require("express");

const router = express.Router();

const authenticator = require('../../middlewares/authMiddleware')

router.get('/register', authenticator, (req, res) => {

    res.send("reached to /register......")

});




export default router;
