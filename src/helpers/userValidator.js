const validateUserName = (displayName) => {
  if (!displayName || displayName.length < 8) {
    return '"displayName" length must be at least 8 characters long';
  }
  return null;
};

const validateUserEmail = (email) => {
  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    return '"email" must be a valid email';
  }
  return null;
};

const validateUserPassword = (password) => {
  if (!password || password.length < 6) {
    return '"password" length must be at least 6 characters long';
  }
  return null;
};

const validateUserInfo = (userInfo) => validateUserName(userInfo.displayName)
  || validateUserEmail(userInfo.email)
  || validateUserPassword(userInfo.password);

module.exports = validateUserInfo;
