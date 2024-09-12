const express = require('express')
const { Registeruser } = require('../controllers/userController')
const router = express.Router()

router.post('/register-user', Registeruser)
module.exports = router