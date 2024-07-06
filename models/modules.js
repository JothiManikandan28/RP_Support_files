const { Model } = require('sequelize');
const config = require('../src/config/vars');

module.exports = (sequelize, DataTypes) => {
  class modules extends Model {}
  modules.init(
    {
      name: DataTypes.STRING,
      key: DataTypes.STRING,
      created_by: DataTypes.INTEGER,
      updated_by: DataTypes.INTEGER,
      isActive: DataTypes.BOOLEAN,
      orderId: DataTypes.INTEGER,
      isCard: DataTypes.BOOLEAN,
      cardColor: DataTypes.STRING,
      cardBg: DataTypes.STRING,
      redirectURL: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'modules',
      schema: config.db.schema,
      freezeTableName: true,
    }
  );
  modules.associate = function (models) {
    modules.belongsToMany(models.features, {
      through: 'moduleFeatures',
      as: 'features',
      foreignKey: 'module_id',
    });
    modules.hasMany(models.userModuleRoles, { foreignKey: 'module_id', as: 'userModuleRoles' });
    modules.belongsTo(models.users, { foreignKey: 'created_by', as: 'createUser' });
    modules.belongsTo(models.users, { foreignKey: 'updated_by', as: 'updateUser' });
    modules.hasMany(models.roles, { foreignKey: 'module_id', as: 'roles' });
    // modules.hasMany(models.jobs, { foreignKey: 'department_id', as: 'departmentJob' });
  };
  return modules;
};
