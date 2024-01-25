module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('blog_posts', {
      id: {
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
      },
      title: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false,
      },
      content: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING(255),
      },
      user_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      published: {
        allowNull: true,
        type: Sequelize.DataTypes.DATE,
      },
      updated: {
        type: Sequelize.DataTypes.DATE,
        allowNull: true,
      },
    }, { timestamps: false });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('blog_posts');
  }
}