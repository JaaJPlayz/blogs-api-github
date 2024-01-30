const userService = require('../services/user.service');
const validateUserInfo = require('../helpers/userValidator');

const createUser = async (req, res) => {
  const validationErrors = validateUserInfo(req.body);
  if (validationErrors) {
    return res.status(400).json({ message: validationErrors });
  }

  const { displayName, email, password, image } = req.body;

  const serviceResponse = await userService.addUser({ displayName, email, password, image });

  if (serviceResponse.error) {
    const { error } = serviceResponse;
    const statusCode = error === 'User already registered' ? 409 : 500;
    return res.status(statusCode).json({ message: error });
  }

  return res.status(201).json(serviceResponse);
};

const getAllUsers = async (_req, res) => {
  const users = await userService.getAllUsers();
  return res.status(200).json(users);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  if (Number.isNaN(Number(id))) return res.status(400).json({ message: 'Invalid Id' });

  const user = await userService.getUserById(id);

  if (user.error) {
    const { error } = user;
    const statusCode = error === 'User does not exist' ? 404 : 500;
    return res.status(statusCode).json({ message: error });
  }

  return res.status(200).json(user);
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
};
