const express = require("express");
const { userRegisterCtrl } = require("../controller/userController/usersCtrl");
const userRoutes = express.Router();

userRoutes.post("/register", userRegisterCtrl);
// userRoutes.post("/login", loginUserCtrl);
// userRoutes.put("/password", authMiddleware, updateUserPasswordCtrl);
// userRoutes.put("/", authMiddleware, updateUserCtrl);

module.exports = userRoutes;