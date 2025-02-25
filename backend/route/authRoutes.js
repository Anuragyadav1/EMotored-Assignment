const express = require("express");
const { registerUser, loginUser } = require("../controller/authController");
const { forgotPassword,resetPassword } = require("../controller/authController");


const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

router.post("/forgot-password", forgotPassword);


router.post("/reset-password", resetPassword);


module.exports = router;
