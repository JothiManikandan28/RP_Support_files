/* eslint-disable prettier/prettier */
const { Sequelize } = require('sequelize');
// const config = require('../src/config/vars');
const config = require('../node_modules/new_test_roles/src/config/vars');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface) {
        return queryInterface.bulkInsert(
            { tableName: 'moduleFeatures', schema: config.db.schema },
            [
                {
                    module_id: 1,
                    feature_id: 1,
                    createdAt: Sequelize.literal('NOW()'),
                    updatedAt: Sequelize.literal('NOW()'),
                },
                {
                    module_id: 1,
                    feature_id: 2,
                    createdAt: Sequelize.literal('NOW()'),
                    updatedAt: Sequelize.literal('NOW()'),
                },
                {
                    module_id: 1,
                    feature_id: 3,
                    createdAt: Sequelize.literal('NOW()'),
                    updatedAt: Sequelize.literal('NOW()'),
                },
                {
                    module_id: 1,
                    feature_id: 4,
                    createdAt: Sequelize.literal('NOW()'),
                    updatedAt: Sequelize.literal('NOW()'),
                },
                {
                    module_id: 1,
                    feature_id: 5,
                    createdAt: Sequelize.literal('NOW()'),
                    updatedAt: Sequelize.literal('NOW()'),
                },
                {
                    module_id: 1,
                    feature_id: 6,
                    createdAt: Sequelize.literal('NOW()'),
                    updatedAt: Sequelize.literal('NOW()'),
                },
                {
                    module_id: 1,
                    feature_id: 7,
                    createdAt: Sequelize.literal('NOW()'),
                    updatedAt: Sequelize.literal('NOW()'),
                },
                {
                    module_id: 1,
                    feature_id: 8,
                    createdAt: Sequelize.literal('NOW()'),
                    updatedAt: Sequelize.literal('NOW()'),
                },
                {
                    module_id: 1,
                    feature_id: 9,
                    createdAt: Sequelize.literal('NOW()'),
                    updatedAt: Sequelize.literal('NOW()'),
                },
                {
                    module_id: 1,
                    feature_id: 10,
                    createdAt: Sequelize.literal('NOW()'),
                    updatedAt: Sequelize.literal('NOW()'),
                },
                {
                    module_id: 1,
                    feature_id: 11,
                    createdAt: Sequelize.literal('NOW()'),
                    updatedAt: Sequelize.literal('NOW()'),
                },
                {
                    module_id: 1,
                    feature_id: 12,
                    createdAt: Sequelize.literal('NOW()'),
                    updatedAt: Sequelize.literal('NOW()'),
                },
                {
                    module_id: 1,
                    feature_id: 13,
                    createdAt: Sequelize.literal('NOW()'),
                    updatedAt: Sequelize.literal('NOW()'),
                },
                {
                    module_id: 1,
                    feature_id: 14,
                    createdAt: Sequelize.literal('NOW()'),
                    updatedAt: Sequelize.literal('NOW()'),
                },
                {
                    module_id: 1,
                    feature_id: 15,
                    createdAt: Sequelize.literal('NOW()'),
                    updatedAt: Sequelize.literal('NOW()'),
                },
                {
                    module_id: 1,
                    feature_id: 16,
                    createdAt: Sequelize.literal('NOW()'),
                    updatedAt: Sequelize.literal('NOW()'),
                },
                {
                    module_id: 1,
                    feature_id: 17,
                    createdAt: Sequelize.literal('NOW()'),
                    updatedAt: Sequelize.literal('NOW()'),
                },
                {
                    module_id: 1,
                    feature_id: 18,
                    createdAt: Sequelize.literal('NOW()'),
                    updatedAt: Sequelize.literal('NOW()'),
                },
                {
                    module_id: 7,
                    feature_id: 19,
                    createdAt: Sequelize.literal('NOW()'),
                    updatedAt: Sequelize.literal('NOW()'),
                },
                {
                    module_id: 7,
                    feature_id: 20,
                    createdAt: Sequelize.literal('NOW()'),
                    updatedAt: Sequelize.literal('NOW()'),
                },
                {
                    module_id: 7,
                    feature_id: 21,
                    createdAt: Sequelize.literal('NOW()'),
                    updatedAt: Sequelize.literal('NOW()'),
                },
                {
                    module_id: 7,
                    feature_id: 22,
                    createdAt: Sequelize.literal('NOW()'),
                    updatedAt: Sequelize.literal('NOW()'),
                },
                {
                    module_id: 7,
                    feature_id: 23,
                    createdAt: Sequelize.literal('NOW()'),
                    updatedAt: Sequelize.literal('NOW()'),
                },
                {
                    module_id: 7,
                    feature_id: 24,
                    createdAt: Sequelize.literal('NOW()'),
                    updatedAt: Sequelize.literal('NOW()'),
                },
                {
                    module_id: 7,
                    feature_id: 25,
                    createdAt: Sequelize.literal('NOW()'),
                    updatedAt: Sequelize.literal('NOW()'),
                },
                {
                    module_id: 7,
                    feature_id: 26,
                    createdAt: Sequelize.literal('NOW()'),
                    updatedAt: Sequelize.literal('NOW()'),
                },
                {
                    module_id: 7,
                    feature_id: 27,
                    createdAt: Sequelize.literal('NOW()'),
                    updatedAt: Sequelize.literal('NOW()'),
                },
                {
                    module_id: 7,
                    feature_id: 28,
                    createdAt: Sequelize.literal('NOW()'),
                    updatedAt: Sequelize.literal('NOW()'),
                },
                {
                    module_id: 7,
                    feature_id: 29,
                    createdAt: Sequelize.literal('NOW()'),
                    updatedAt: Sequelize.literal('NOW()'),
                },
                {
                    module_id: 7,
                    feature_id: 30,
                    createdAt: Sequelize.literal('NOW()'),
                    updatedAt: Sequelize.literal('NOW()'),
                },
                {
                    module_id: 7,
                    feature_id: 31,
                    createdAt: Sequelize.literal('NOW()'),
                    updatedAt: Sequelize.literal('NOW()'),
                },
                {
                    module_id: 7,
                    feature_id: 32,
                    createdAt: Sequelize.literal('NOW()'),
                    updatedAt: Sequelize.literal('NOW()'),
                },
                {
                    module_id: 7,
                    feature_id: 33,
                    createdAt: Sequelize.literal('NOW()'),
                    updatedAt: Sequelize.literal('NOW()'),
                },
                {
                    module_id: 7,
                    feature_id: 34,
                    createdAt: Sequelize.literal('NOW()'),
                    updatedAt: Sequelize.literal('NOW()'),
                },
                {
                    module_id: 7,
                    feature_id: 35,
                    createdAt: Sequelize.literal('NOW()'),
                    updatedAt: Sequelize.literal('NOW()'),
                },
                {
                    module_id: 7,
                    feature_id: 36,
                    createdAt: Sequelize.literal('NOW()'),
                    updatedAt: Sequelize.literal('NOW()'),
                },
                {
                    module_id: 7,
                    feature_id: 37,
                    createdAt: Sequelize.literal('NOW()'),
                    updatedAt: Sequelize.literal('NOW()'),
                },
                {
                    module_id: 8,
                    feature_id: 1,
                    createdAt: Sequelize.literal('NOW()'),
                    updatedAt: Sequelize.literal('NOW()'),
                },
                {
                    module_id: 8,
                    feature_id: 2,
                    createdAt: Sequelize.literal('NOW()'),
                    updatedAt: Sequelize.literal('NOW()'),
                },
                {
                    module_id: 8,
                    feature_id: 16,
                    createdAt: Sequelize.literal('NOW()'),
                    updatedAt: Sequelize.literal('NOW()'),
                },
                {
                    module_id: 8,
                    feature_id: 17,
                    createdAt: Sequelize.literal('NOW()'),
                    updatedAt: Sequelize.literal('NOW()'),
                },
                {
                    module_id: 8,
                    feature_id: 18,
                    createdAt: Sequelize.literal('NOW()'),
                    updatedAt: Sequelize.literal('NOW()'),
                },
                {
                    module_id: 8,
                    feature_id: 38,
                    createdAt: Sequelize.literal('NOW()'),
                    updatedAt: Sequelize.literal('NOW()'),
                },
                {
                    module_id: 8,
                    feature_id: 39,
                    createdAt: Sequelize.literal('NOW()'),
                    updatedAt: Sequelize.literal('NOW()'),
                },
                {
                    module_id: 8,
                    feature_id: 40,
                    createdAt: Sequelize.literal('NOW()'),
                    updatedAt: Sequelize.literal('NOW()'),
                },
                {
                    module_id: 8,
                    feature_id: 41,
                    createdAt: Sequelize.literal('NOW()'),
                    updatedAt: Sequelize.literal('NOW()'),
                },
                {
                    module_id: 8,
                    feature_id: 42,
                    createdAt: Sequelize.literal('NOW()'),
                    updatedAt: Sequelize.literal('NOW()'),
                },
                {
                    module_id: 8,
                    feature_id: 43,
                    createdAt: Sequelize.literal('NOW()'),
                    updatedAt: Sequelize.literal('NOW()'),
                },
                {
                    module_id: 8,
                    feature_id: 44,
                    createdAt: Sequelize.literal('NOW()'),
                    updatedAt: Sequelize.literal('NOW()'),
                },
                {
                    module_id: 8,
                    feature_id: 45,
                    createdAt: Sequelize.literal('NOW()'),
                    updatedAt: Sequelize.literal('NOW()'),
                },
                {
                    module_id: 8,
                    feature_id: 46,
                    createdAt: Sequelize.literal('NOW()'),
                    updatedAt: Sequelize.literal('NOW()'),
                },
                {
                    module_id: 8,
                    feature_id: 47,
                    createdAt: Sequelize.literal('NOW()'),
                    updatedAt: Sequelize.literal('NOW()'),
                },
                {
                    module_id: 8,
                    feature_id: 48,
                    createdAt: Sequelize.literal('NOW()'),
                    updatedAt: Sequelize.literal('NOW()'),
                },
                {
                    module_id: 8,
                    feature_id: 49,
                    createdAt: Sequelize.literal('NOW()'),
                    updatedAt: Sequelize.literal('NOW()'),
                },
                {
                    module_id: 8,
                    feature_id: 50,
                    createdAt: Sequelize.literal('NOW()'),
                    updatedAt: Sequelize.literal('NOW()'),
                },
                {
                    module_id: 7,
                    feature_id: 1,
                    createdAt: Sequelize.literal('NOW()'),
                    updatedAt: Sequelize.literal('NOW()'),
                },
                {
                    module_id: 7,
                    feature_id: 2,
                    createdAt: Sequelize.literal('NOW()'),
                    updatedAt: Sequelize.literal('NOW()'),
                },
                {
                    module_id: 7,
                    feature_id: 16,
                    createdAt: Sequelize.literal('NOW()'),
                    updatedAt: Sequelize.literal('NOW()'),
                },
                {
                    module_id: 7,
                    feature_id: 17,
                    createdAt: Sequelize.literal('NOW()'),
                    updatedAt: Sequelize.literal('NOW()'),
                },
                {
                    module_id: 7,
                    feature_id: 18,
                    createdAt: Sequelize.literal('NOW()'),
                    updatedAt: Sequelize.literal('NOW()'),
                },
            ],
            {}
        );
    },

    async down(queryInterface) {
        return queryInterface.bulkDelete({ tableName: 'moduleFeatures', schema: config.db.schema }, null, {});
    },
};
