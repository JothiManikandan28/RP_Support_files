// const config = require('../src/config/vars');
const config = require('../node_modules/new_test_roles/src/config/vars');

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'users',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        userName: {
          type: Sequelize.STRING,
        },
        password: {
          type: Sequelize.STRING,
        },
        email: {
          type: Sequelize.STRING,
        },
        mobile: {
          type: Sequelize.STRING,
          validate: {
            is: /^\d{10}$/,
          },
        },
        firstName: {
          type: Sequelize.STRING,
        },
        lastName: {
          type: Sequelize.STRING,
        },
        fatherName: {
          type: Sequelize.STRING,
        },
        dob: {
          type: Sequelize.DATEONLY,
        },
        gender: {
          type: Sequelize.ENUM('Male', 'Female', 'Prefer not to say'),
        },
        street1: {
          type: Sequelize.STRING,
        },
        street2: {
          type: Sequelize.STRING,
        },
        pincode: {
          type: Sequelize.STRING,
        },
        country: {
          type: Sequelize.STRING,
        },
        state: {
          type: Sequelize.STRING,
        },
        city: {
          type: Sequelize.STRING,
        },
        isAdmin: {
          type: Sequelize.BOOLEAN,
        },
        userStatus: {
          type: Sequelize.STRING,
        },
        isTrash: {
          type: Sequelize.BOOLEAN,
        },
        inviteDate: {
          type: Sequelize.DATE,
        },
        resendLinkCount: {
          type: Sequelize.INTEGER,
        },
        isResetByMail: {
          type: Sequelize.BOOLEAN,
        },
        resetMailTime: {
          type: Sequelize.DATE,
        },
        privacyURL: {
          type: Sequelize.STRING,
        },
        imageName: {
          type: Sequelize.STRING,
        },
        created_by: {
          type: Sequelize.INTEGER,
          references: {
            model: 'users',
            key: 'id',
          },
          onDelete: 'CASCADE',
        },
        updated_by: {
          type: Sequelize.INTEGER,
          references: {
            model: 'users',
            key: 'id',
          },
          onDelete: 'CASCADE',
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: new Date(),
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: new Date(),
        },
      },
      {
        schema: config.db.schema,
        freezeTableName: true,
      }
    );
  },
  async down(queryInterface) {
    await queryInterface.dropTable('users');
  },
};
