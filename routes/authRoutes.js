const express = require("express");
const router = express.Router();

const { register, login, logout, localLogin} = require("../controllers/authController");

router.post("/register", register);
router.get("/login", login);
router.get("/login/error", (request, response, next) => {
    return response.status(400).json({
        message: "Login error"
    })
});
router.get("/login/local", localLogin);
router.get("/logout", logout);
router.get("/unauthenticated", (request, response, next) => {
    console.log("Returning to homepage...");
    response.redirect("/");
});

module.exports = router;