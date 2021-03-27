const Sequelize = require('sequelize');
module.exports = (sequelize, Sequelize) => {
    const oddNum = sequelize.define('oddNum', {
        id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        value: { type: Sequelize.STRING, allowNull: false },
        createdAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.NOW },
    });
    return oddNum;
}