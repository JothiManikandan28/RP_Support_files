const { Model } = require('sequelize');
const config = require('../src/config/vars');

module.exports = (sequelize, DataTypes) => {
  class userModuleRoles extends Model {}
  userModuleRoles.init(
    {
      user_id: DataTypes.INTEGER,
      module_id: DataTypes.INTEGER,
      role_id: DataTypes.INTEGER,
      created_by: DataTypes.INTEGER,
      updated_by: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'userModuleRoles',
      schema: config.db.schema,
      freezeTableName: true,
    }
  );
  userModuleRoles.associate = function (models) {
    userModuleRoles.belongsTo(models.modules, { foreignKey: 'module_id', as: 'module' });
    userModuleRoles.belongsTo(models.roles, { foreignKey: 'role_id', as: 'role' });
    userModuleRoles.belongsTo(models.users, { foreignKey: 'user_id', as: 'user' });
    userModuleRoles.belongsTo(models.users, { foreignKey: 'created_by', as: 'createUser' });
    userModuleRoles.belongsTo(models.users, { foreignKey: 'updated_by', as: 'updateUser' });
  };
  return userModuleRoles;
};
