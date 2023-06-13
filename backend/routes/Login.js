const express = require('express');
const router = express.Router();

const { registerController, loginController } = require('../controllers/Login')


/* @desc Login using an Admin Creds. */
router.get('/', loginController)

module.exports = router