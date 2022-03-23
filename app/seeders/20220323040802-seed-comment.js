"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const data = [
      {
        fullName: "Alice R.",
        text: "I love Game of Thrones so much!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullName: "Goerge C. Martin.",
        text: "Danaerys Targaryen is the best queen in the world!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullName: "Jeremy Vest",
        text: "We're gonna rebuild that wall & the Night King is going to pay for it #GameOf Thrones",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    return queryInterface.bulkInsert("Comments", data, {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Comments", null, {});
  },
};
