const express = require('express')
const { Registeruser, loginUser } = require('../controllers/userController')
const router = express.Router()
// Register Route
router.post('/register-user', Registeruser)
// Login Route
router.post('/loginuser',loginUser)
module.exports = router