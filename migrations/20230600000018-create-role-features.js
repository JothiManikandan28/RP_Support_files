// const config = require('../src/config/vars');
const config = require('../node_modules/new_test_roles/src/config/vars');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'roleFeatures',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        role_id: {
          type: Sequelize.INTEGER,
          references: {
            model: 'roles',
            key: 'id',
          },
          onDelete: 'CASCADE',
        },
        feature_id: {
          type: Sequelize.INTEGER,
          references: {
            model: 'features',
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
      },
      {
        freezeTableName: true,
      }
    );
  },
  async down(queryInterface) {
    await queryInterface.dropTable('roleFeatures');
  },
};
