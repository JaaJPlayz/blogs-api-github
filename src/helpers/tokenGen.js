const jwt = require('jsonwebtoken');

const tokenGen = (id) => {
  const JWT_PASSWORD = process.env.JWT_SECRET || 'krankenwagen';
  const token = jwt.sign({ id }, JWT_PASSWORD, { expiresIn: '4h' });
  return token;
};

module.exports = tokenGen;
