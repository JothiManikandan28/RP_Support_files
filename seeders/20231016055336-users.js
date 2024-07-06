const jwt = require('jsonwebtoken');
const { Sequelize } = require('sequelize');
// const config = require('../src/config/vars');
const config = require('../node_modules/new_test_roles/src/config/vars');

/** @type {import('sequelize-cli').Migration} */
const encryptedPassword = jwt.sign(
  {
    password: 'Demo@123',
  },
  config.app.accesstoken
);
module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert(
      { tableName: 'users', schema: config.db.schema },
      [
        {
          userName: 'Jothi2810',
          email: 'jothi@admin.ai',
          password: encryptedPassword,
          mobile: '9855433200',
          firstName: 'Jothi',
          lastName: 'Krishana',
          gender: 'Male',
          pincode: '560041',
          country: 'India',
          state: 'Karnataka',
          city: 'Bangalore South',
          isResetByMail: false,
          isAdmin: true,
          userStatus: 'Active',
          isTrash: false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },
        {
          userName: 'Vignesh657',
          email: 'vignesh@gmail.com',
          password: encryptedPassword,
          mobile: '9855433254',
          firstName: 'Vignesh',
          lastName: 'Kumar',
          gender: 'Male',
          pincode: '560041',
          country: 'India',
          state: 'Karnataka',
          city: 'Bangalore South',
          isResetByMail: false,
          isAdmin: false,
          userStatus: 'Active',
          isTrash: false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },  
      ],
      {}
    );
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete({ tableName: 'users', schema: config.db.schema }, null, {});
  },
};
