const { Model } = require('sequelize');
const config = require('../src/config/vars');

module.exports = (sequelize, DataTypes) => {
  class roleFeatures extends Model {}
  roleFeatures.init(
    {
      role_id: DataTypes.INTEGER,
      feature_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'roleFeatures',
      schema: config.db.schema,
      freezeTableName: true,
    }
  );
  roleFeatures.associate = function (models) {
    roleFeatures.belongsTo(models.features, { foreignKey: 'feature_id', as: 'features' });
    roleFeatures.belongsTo(models.roles, { foreignKey: 'role_id', as: 'roles' });
  };
  return roleFeatures;
};
