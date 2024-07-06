// const config = require('../src/config/vars');
const config = require('../node_modules/new_test_roles/src/config/vars');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert(
      { tableName: 'modules', schema: config.db.schema },
      [
        {
          name: 'Sales',
          key: 'sales',
          created_by: 1,
          updated_by: 1,
          isActive: true,
          orderId: 1,
          isCard: true,
          cardColor: '',
          cardBg: '',
          redirectURL: '',
        },
        {
          name: 'Marketing',
          key: 'marketing',
          created_by: 1,
          updated_by: 1,
          isActive: true,
          orderId: 2,
          isCard: true,
          cardColor: '',
          cardBg: '',
          redirectURL: '',
        },
        {
          name: 'Product',
          key: 'product',
          created_by: 1,
          updated_by: 1,
          isActive: true,
          orderId: 3,
          isCard: true,
          cardColor: '',
          cardBg: '',
          redirectURL: '',
        },
        {
          name: 'Design',
          key: 'design',
          created_by: 1,
          updated_by: 1,
          isActive: true,
          orderId: 4,
          isCard: true,
          cardColor: '',
          cardBg: '',
          redirectURL: '',
        },
        {
          name: 'Customer Success',
          key: 'customerSuccess',
          created_by: 1,
          updated_by: 1,
          isActive: true,
          orderId: 5,
          isCard: true,
          cardColor: '',
          cardBg: '',
          redirectURL: '',
        },
        {
          name: 'Development',
          key: 'development',
          created_by: 1,
          updated_by: 1,
          isActive: true,
          orderId: 6,
          isCard: true,
          cardColor: '',
          cardBg: '',
          redirectURL: '',
        },
        {
          name: 'Web Content',
          key: 'webContent',
          created_by: 1,
          updated_by: 1,
          isActive: true,
          orderId: 7,
          isCard: true,
          cardColor: '',
          cardBg: '',
          redirectURL: '',
        },
        {
          name: 'Human Resources',
          key: 'humanResources',
          created_by: 1,
          updated_by: 1,
          isActive: true,
          orderId: 8,
          isCard: true,
          cardColor: '',
          cardBg: '',
          redirectURL: '',
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete({ tableName: 'modules', schema: config.db.schema }, null, {});
  },
};
