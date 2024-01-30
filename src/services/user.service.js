const { User } = require('../models');
const tokenGen = require('../helpers/tokenGen');

const userService = {
  async validateUser(email) {
    return User.findOne({ where: { email } });
  },

  async createUser(userInformation) {
    return User.create({
      displayName: userInformation.displayName,
      email: userInformation.email,
      password: userInformation.password,
      image: userInformation.image,
    });
  },

  async addUser(userInformation) {
    if (await this.validateUser(userInformation.email)) {
      return { error: 'User already registered' };
    }
    const newUser = await this.createUser(userInformation);
    const token = tokenGen(newUser.id);
    return { token };
  },

  async getAllUsers() {
    const users = await User.findAll({ attributes: { exclude: ['password'] } });
    return users;
  },

  async getUserById(id) {
    const user = await User.findByPk(id, { attributes: ['id', 'displayName', 'email', 'image'] });
    if (!user) return { error: 'User does not exist' };
    return user;
  },
};

module.exports = userService;
