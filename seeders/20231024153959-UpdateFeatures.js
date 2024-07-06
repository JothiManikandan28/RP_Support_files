/* eslint-disable prettier/prettier */
const { Sequelize } = require('sequelize');
// const config = require('../src/config/vars');
const config = require('../node_modules/new_test_roles/src/config/vars');


module.exports = {
    async up(queryInterface) {
        let existingRecordsCount = 0;

        try {
            const result = await queryInterface.sequelize.query('SELECT COUNT(*) FROM features', {
                type: Sequelize.QueryTypes.SELECT,
            });

            existingRecordsCount = result[0].count;
        } catch (error) {
            console.error("Error fetching count:", error.message);
        }

        const newRecords = [
            {
                name: 'Add Topic Module',
                key: 'addTopicModule',
                isActive: true,
                isProtected: true,
                orderId: 50,
                created_by: 1,
                updated_by: 1,
                createdAt: Sequelize.literal('NOW()'),
                updatedAt: Sequelize.literal('NOW()'),
            },
            {
                name: 'Create Topic',
                key: 'createTopic',
                isActive: true,
                isProtected: true,
                orderId: 51,
                created_by: 1,
                updated_by: 1,
                createdAt: Sequelize.literal('NOW()'),
                updatedAt: Sequelize.literal('NOW()'),
            },
            {
                name: 'Topic Publish',
                key: 'topicPublish',
                isActive: true,
                isProtected: true,
                orderId: 52,
                created_by: 1,
                updated_by: 1,
                createdAt: Sequelize.literal('NOW()'),
                updatedAt: Sequelize.literal('NOW()'),
            },
            {
                name: 'Delete Topic',
                key: 'deleteTopic',
                isActive: true,
                isProtected: true,
                orderId: 53,
                created_by: 1,
                updated_by: 1,
                createdAt: Sequelize.literal('NOW()'),
                updatedAt: Sequelize.literal('NOW()'),
            },
            {
                name: 'Topic Permanent Delete',
                key: 'topicPermanentDelete',
                isActive: true,
                isProtected: true,
                orderId: 54,
                created_by: 1,
                updated_by: 1,
                createdAt: Sequelize.literal('NOW()'),
                updatedAt: Sequelize.literal('NOW()'),
            },
            {
                name: 'Edit Topic',
                key: 'editTopic',
                isActive: true,
                isProtected: true,
                orderId: 55,
                created_by: 1,
                updated_by: 1,
                createdAt: Sequelize.literal('NOW()'),
                updatedAt: Sequelize.literal('NOW()'),
            },
            {
                name: 'Change Order',
                key: 'changeOrder',
                isActive: true,
                isProtected: true,
                orderId: 56,
                created_by: 1,
                updated_by: 1,
                createdAt: Sequelize.literal('NOW()'),
                updatedAt: Sequelize.literal('NOW()'),
            },
            {
                name: 'Delete Module',
                key: 'deleteModule',
                isActive: true,
                isProtected: true,
                orderId: 57,
                created_by: 1,
                updated_by: 1,
                createdAt: Sequelize.literal('NOW()'),
                updatedAt: Sequelize.literal('NOW()'),
            },
            {
                name: 'Restore Topic',
                key: 'restoreTopic',
                isActive: true,
                isProtected: true,
                orderId: 58,
                created_by: 1,
                updated_by: 1,
                createdAt: Sequelize.literal('NOW()'),
                updatedAt: Sequelize.literal('NOW()'),
            },
            {
                name: 'Add Faq',
                key: 'addFaq',
                isActive: true,
                isProtected: true,
                orderId: 59,
                created_by: 1,
                updated_by: 1,
                createdAt: Sequelize.literal('NOW()'),
                updatedAt: Sequelize.literal('NOW()'),
            },
            {
                name: 'Edit Faq',
                key: 'editFaq',
                isActive: true,
                isProtected: true,
                orderId: 60,
                created_by: 1,
                updated_by: 1,
                createdAt: Sequelize.literal('NOW()'),
                updatedAt: Sequelize.literal('NOW()'),
            },
            {
                name: 'Move Faq To Draft',
                key: 'moveFaqToDraft',
                isActive: true,
                isProtected: true,
                orderId: 61,
                created_by: 1,
                updated_by: 1,
                createdAt: Sequelize.literal('NOW()'),
                updatedAt: Sequelize.literal('NOW()'),
            },
            {
                name: 'Publish Faq',
                key: 'publishFaq',
                isActive: true,
                isProtected: true,
                orderId: 62,
                created_by: 1,
                updated_by: 1,
                createdAt: Sequelize.literal('NOW()'),
                updatedAt: Sequelize.literal('NOW()'),
            },
            {
                name: 'Delete Faq',
                key: 'deleteFaq',
                isActive: true,
                isProtected: true,
                orderId: 63,
                created_by: 1,
                updated_by: 1,
                createdAt: Sequelize.literal('NOW()'),
                updatedAt: Sequelize.literal('NOW()'),
            },
            {
                name: 'Create Faq Question',
                key: 'createFaqQuestion',
                isActive: true,
                isProtected: true,
                orderId: 64,
                created_by: 1,
                updated_by: 1,
                createdAt: Sequelize.literal('NOW()'),
                updatedAt: Sequelize.literal('NOW()'),
            },
            {
                name: 'Add Faq Answer',
                key: 'addFaqAnswer',
                isActive: true,
                isProtected: true,
                orderId: 65,
                created_by: 1,
                updated_by: 1,
                createdAt: Sequelize.literal('NOW()'),
                updatedAt: Sequelize.literal('NOW()'),
            },
            {
                name: 'Publish Faq Answer',
                key: 'publishFaqAnswer',
                isActive: true,
                isProtected: true,
                orderId: 66,
                created_by: 1,
                updated_by: 1,
                createdAt: Sequelize.literal('NOW()'),
                updatedAt: Sequelize.literal('NOW()'),
            },
            {
                name: 'Move To Answer',
                key: 'moveToAnswer',
                isActive: true,
                isProtected: true,
                orderId: 67,
                created_by: 1,
                updated_by: 1,
                createdAt: Sequelize.literal('NOW()'),
                updatedAt: Sequelize.literal('NOW()'),
            },
            {
                name: 'Edit Organization',
                key: 'editOrganization',
                isActive: true,
                isProtected: true,
                orderId: 68,
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
                orderId: 69,
                created_by: 1,
                updated_by: 1,
                createdAt: Sequelize.literal('NOW()'),
                updatedAt: Sequelize.literal('NOW()'),
            },
            {
                name: 'Topup Search',
                key: 'topupSearch',
                isActive: true,
                isProtected: true,
                orderId: 70,
                created_by: 1,
                updated_by: 1,
                createdAt: Sequelize.literal('NOW()'),
                updatedAt: Sequelize.literal('NOW()'),
            },
            {
                name: 'Activate Deactivate Topup',
                key: 'activateDeactivateTopup',
                isActive: true,
                isProtected: true,
                orderId: 71,
                created_by: 1,
                updated_by: 1,
                createdAt: Sequelize.literal('NOW()'),
                updatedAt: Sequelize.literal('NOW()'),
            },
            {
                name: 'Upgrade Topup',
                key: 'upgradeTopup',
                isActive: true,
                isProtected: true,
                orderId: 72,
                created_by: 1,
                updated_by: 1,
                createdAt: Sequelize.literal('NOW()'),
                updatedAt: Sequelize.literal('NOW()'),
            },
            {
                name: 'Download Topup',
                key: 'downloadTopup',
                isActive: true,
                isProtected: true,
                orderId: 73,
                created_by: 1,
                updated_by: 1,
                createdAt: Sequelize.literal('NOW()'),
                updatedAt: Sequelize.literal('NOW()'),
            },
        ];

        await queryInterface.bulkInsert(
            { tableName: 'features', schema: config.db.schema },
            newRecords,
            { offset: existingRecordsCount }
        );

        return existingRecordsCount;
    },

    async down(queryInterface) {
        let existingRecordsCount = 0;

        try {
            const result = await queryInterface.sequelize.query('SELECT COUNT(*) FROM features', {
                type: Sequelize.QueryTypes.SELECT,
            });

            existingRecordsCount = result[0].count;
        } catch (error) {
            console.error("Error fetching count:", error.message);
        }

        // Specify the conditions to delete the newly added records
        return queryInterface.bulkDelete(
            { tableName: 'features', schema: config.db.schema },
            { orderId: { [Sequelize.Op.gt]: existingRecordsCount } }
        );
    },
};
