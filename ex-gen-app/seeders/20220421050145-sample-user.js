"use strict";

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("employees", [{
            name: "name001",
            department: "department001",
            sex: "male",
            birth: new Date(),
            pay: 1,
            note: "note001",
            created_at: new Date(),
            updated_at: new Date(),
        }, ]);
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("employees", null, {});
    },
};