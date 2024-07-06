// const config = require('../src/config/vars');
const config = require('../node_modules/new_test_roles/src/config/vars');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'modules',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        name: {
          type: Sequelize.STRING,
        },
        key: {
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
        isActive: {
          allowNull: false,
          type: Sequelize.BOOLEAN,
        },
        orderId: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        isCard: {
          allowNull: false,
          type: Sequelize.BOOLEAN,
        },
        cardColor: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        cardBg: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        redirectURL: {
          allowNull: false,
          type: Sequelize.STRING,
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
    await queryInterface.dropTable('modules');
  },
};
