const jwt = require('jsonwebtoken');

const getJWTToken = (auth) => {
  if (!auth) {
    return null;
  }

  const token = auth.split(' ');

  if (token.length === 2 && /^Bearer$/i.test(token[0])) {
    return token[1];
  }
    
  return auth;
};

const checkJWTToken = (token) => {
  const JWT_PASSWORD = process.env.JWT_SECRET || 'krankenwagen';

  try {
    jwt.verify(token, JWT_PASSWORD);
    return jwt.decode(token);
  } catch (err) {
    return null;
  }
};

const authUser = (req, res, next) => {
  const token = getJWTToken(req.headers.authorization);
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const verifiedToken = checkJWTToken(token);
  if (!verifiedToken) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }

  req.user = verifiedToken;
  next();
};

module.exports = authUser;
