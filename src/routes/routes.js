const express = require('express');
const loginController = require('../controllers/login.controller');

const router = express.Router();

router.use(express.json());

router.post('/login', loginController);

module.exports = router;
