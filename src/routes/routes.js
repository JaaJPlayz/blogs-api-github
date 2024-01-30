const express = require('express');
const loginController = require('../controllers/login.controller');
const { createUser, getAllUsers, getUserById } = require('../controllers/user.controller');
const authUser = require('../middlewares/authUser');

const router = express.Router();

router.use(express.json());

router.post('/login', loginController);
router.post('/user', createUser);

router.use(authUser);

router.get('/user', getAllUsers);
router.get('/user/:id', getUserById);

module.exports = router;
