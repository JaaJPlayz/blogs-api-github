const jwt = require('jsonwebtoken');

const { User } = require('../models');

const authenticateUser = async (email, password) => {
  const user = await User.findOne({
    where: {
      email,
    },
  });
  if (!user || user.password !== password) return null;

  const JWT_PASSWORD = process.env.JWT_SECRET || 'krankenwagen';
  const token = jwt.sign({ id: user.id, email: user.email }, JWT_PASSWORD, { expiresIn: '4h' });
  return token;
};

module.exports = authenticateUser;
