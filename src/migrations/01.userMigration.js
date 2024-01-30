module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
      },
      display_name: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING(255),
      },
      email: {
        type: Sequelize.DataTypes.STRING(255),
      },
      password: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false,
      },
      image: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: true,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
}
