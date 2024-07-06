const { Model } = require('sequelize');
const config = require('../src/config/vars');

module.exports = (sequelize, DataTypes) => {
  class userAuthorAccess extends Model {}
  userAuthorAccess.init(
    {
      user_id: DataTypes.INTEGER,
      user_accessId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'userAuthorAccess',
      schema: config.db.schema,
      freezeTableName: true,
    }
  );
  userAuthorAccess.associate = function (models) {
    userAuthorAccess.belongsTo(models.users, { foreignKey: 'user_id', as: 'user' });
    // userAuthorAccess.belongsTo(models.authorAccess, { foreignKey: 'user_accessId', as: 'author' });
  };
  return userAuthorAccess;
};
