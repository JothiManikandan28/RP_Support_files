const { Model } = require('sequelize');
const config = require('../src/config/vars');

module.exports = (sequelize, DataTypes) => {
  class users extends Model {}
  users.init(
    {
      userName: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.STRING,
      mobile: DataTypes.STRING,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      fatherName: DataTypes.STRING,
      dob: DataTypes.DATEONLY,
      gender: DataTypes.ENUM('Male', 'Female', 'Prefer not to say'),
      street1: DataTypes.STRING,
      street2: DataTypes.STRING,
      pincode: DataTypes.STRING,
      country: DataTypes.STRING,
      state: DataTypes.STRING,
      city: DataTypes.STRING,
      isAdmin: DataTypes.BOOLEAN,
      userStatus: DataTypes.STRING,
      isTrash: DataTypes.BOOLEAN,
      inviteDate: DataTypes.DATE,
      resendLinkCount: DataTypes.INTEGER,
      isResetByMail: DataTypes.BOOLEAN,
      resetMailTime: DataTypes.DATE,
      privacyURL: DataTypes.STRING,
      imageName: DataTypes.STRING,
      created_by: DataTypes.INTEGER,
      updated_by: DataTypes.INTEGER,
      // bio: DataTypes.STRING,
      // authorStatus: DataTypes.STRING,
      // executiveId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'users',
      schema: config.db.schema,
      freezeTableName: true,
    }
  );
  users.associate = function (models) {
    users.hasMany(models.userModuleRoles, { foreignKey: 'user_id', as: 'user' });
    users.hasMany(models.userModuleRoles, { foreignKey: 'created_by', as: 'userCreate' });
    users.hasMany(models.userModuleRoles, { foreignKey: 'updated_by', as: 'userUpdate' });

    users.hasMany(models.features, { foreignKey: 'created_by', as: 'featureCreate' });
    users.hasMany(models.features, { foreignKey: 'updated_by', as: 'featureUpdate' });

    users.hasMany(models.modules, { foreignKey: 'created_by', as: 'moduleCreate' });
    users.hasMany(models.modules, { foreignKey: 'updated_by', as: 'moduleUpdate' });

    users.hasMany(models.roles, { foreignKey: 'created_by', as: 'roleCreate' });
    users.hasMany(models.roles, { foreignKey: 'updated_by', as: 'roleUpdate' });

    users.belongsTo(models.users, { foreignKey: 'created_by', as: 'createBy' });
    users.belongsTo(models.users, { foreignKey: 'updated_by', as: 'updateBy' });

  };
  return users;
};
