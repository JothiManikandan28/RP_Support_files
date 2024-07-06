const { Model } = require('sequelize');
const config = require('../src/config/vars');

module.exports = (sequelize, DataTypes) => {
  class features extends Model {}
  features.init(
    {
      name: DataTypes.STRING,
      key: DataTypes.STRING,
      isProtected: DataTypes.BOOLEAN,
      orderId: DataTypes.INTEGER,
      created_by: DataTypes.INTEGER,
      updated_by: DataTypes.INTEGER,
      isActive: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'features',
      schema: config.db.schema,
      freezeTableName: true,
    }
  );
  features.associate = function (models) {
    features.belongsToMany(models.roles, {
      through: 'roleFeatures',
      as: 'roles',
      foreignKey: 'feature_id',
    });
    features.belongsToMany(models.modules, {
      through: 'moduleFeatures',
      as: 'modules',
      foreignKey: 'feature_id',
    });
    features.belongsTo(models.users, { foreignKey: 'created_by', as: 'createUser' });
    features.belongsTo(models.users, { foreignKey: 'updated_by', as: 'updateUser' });
  };
  return features;
};
