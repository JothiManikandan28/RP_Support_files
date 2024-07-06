/* eslint-disable prettier/prettier */
const { Sequelize } = require('sequelize');
// const config = require('../src/config/vars');
const config = require('../node_modules/new_test_roles/src/config/vars');


module.exports = {
    async up(queryInterface) {
        let existingRecordsCount = 0;

        try {
            const result = await queryInterface.sequelize.query('SELECT COUNT(*) FROM modules', {
                type: Sequelize.QueryTypes.SELECT,
            });

            existingRecordsCount = result[0].count;
        } catch (error) {
            console.error("Error fetching count:", error.message);
        }

        const newRecords = [
            {
                name: 'Help Center',
                key: 'helpCenter',
                created_by: 1,
                updated_by: 1,
                isActive: true,
                orderId: 9,
                isCard: true,
                cardColor: '',
                cardBg: '',
                redirectURL: '',
              },
        ];

        await queryInterface.bulkInsert(
            { tableName: 'modules', schema: config.db.schema },
            newRecords,
            { offset: existingRecordsCount }
        );

        return existingRecordsCount;
    },

    async down(queryInterface) {
        let existingRecordsCount = 0;

        try {
            const result = await queryInterface.sequelize.query('SELECT COUNT(*) FROM modules', {
                type: Sequelize.QueryTypes.SELECT,
            });

            existingRecordsCount = result[0].count;
        } catch (error) {
            console.error("Error fetching count:", error.message);
        }

        // Specify the conditions to delete the newly added records
        return queryInterface.bulkDelete(
            { tableName: 'modules', schema: config.db.schema },
            { orderId: { [Sequelize.Op.gt]: existingRecordsCount } }
        );
    },
};
