import express from "express";
const router = express.Router()
const usersController = require("../controllers/userController")

router.route("/")
    .get(usersController.getAllUsers)
    .post(usersController.createNewUser)
    .patch(usersController.updateUser)
    .delete(usersController.deleteUser)

module.exports = router