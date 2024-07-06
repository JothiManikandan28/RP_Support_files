const { Model } = require('sequelize');
const config = require('../src/config/vars');

module.exports = (sequelize, DataTypes) => {
  class moduleFeatures extends Model {}
  moduleFeatures.init(
    {
      module_id: DataTypes.INTEGER,
      feature_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'moduleFeatures',
      schema: config.db.schema,
      freezeTableName: true,
    }
  );
  moduleFeatures.associate = function (models) {
    moduleFeatures.belongsTo(models.modules, { foreignKey: 'module_id', as: 'modules' });
    moduleFeatures.belongsTo(models.features, { foreignKey: 'feature_id', as: 'features' });
  };
  return moduleFeatures;
};
