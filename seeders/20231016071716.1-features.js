const { Sequelize } = require('sequelize');
// const config = require('../src/config/vars');
const config = require('../node_modules/new_test_roles/src/config/vars');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert(
      { tableName: 'features', schema: config.db.schema },
      [
        {
          name: 'View Organization',
          key: 'viewOrganization',
          isActive: true,
          isProtected: true,
          orderId: 46,
          created_by: 1,
          updated_by: 1,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },
        {
          name: 'Add Topup',
          key: 'addTopup',
          isActive: true,
          isProtected: true,
          orderId: 47,
          created_by: 1,
          updated_by: 1,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },
        {
          name: 'Topup Plan',
          key: 'topupPlan',
          isActive: true,
          isProtected: false,
          orderId: 48,
          created_by: 1,
          updated_by: 1,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },
        {
          name: 'Download Invoice',
          key: 'downloadInvoice',
          isActive: true,
          isProtected: false,
          orderId: 49,
          created_by: 1,
          updated_by: 1,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete({ tableName: 'features', schema: config.db.schema }, null, {});
  },
};
