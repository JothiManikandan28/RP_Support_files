const { Model } = require('sequelize');
const config = require('../src/config/vars');

module.exports = (sequelize, DataTypes) => {
  class roles extends Model {}
  roles.init(
    {
      name: DataTypes.STRING,
      key: DataTypes.STRING,
      created_by: DataTypes.INTEGER,
      updated_by: DataTypes.INTEGER,
      module_id: DataTypes.INTEGER,
      isActive: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'roles',
      schema: config.db.schema,
      freezeTableName: true,
    }
  );
  roles.associate = function (models) {
    roles.belongsToMany(models.features, {
      through: 'roleFeatures',
      as: 'features',
      foreignKey: 'role_id',
    });
    roles.hasMany(models.userModuleRoles, { foreignKey: 'role_id', as: 'userModuleRoles' });
    roles.belongsTo(models.users, { foreignKey: 'created_by', as: 'userCreate' });
    roles.belongsTo(models.users, { foreignKey: 'updated_by', as: 'userUpdate' });
    roles.belongsTo(models.modules, { foreignKey: 'module_id', as: 'modules' });
  };
  return roles;
};
