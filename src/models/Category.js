module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
    },
    name: DataTypes.STRING,
  },
  {
    modelName: 'Category',
    tableName: 'categories',
    timestamps: false,
    underscored: true,
  });
  
  return Category;
};