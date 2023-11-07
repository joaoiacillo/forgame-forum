const { Sequelize, DataTypes } = require("sequelize");
const db = require("../index");

module.exports = db.define("User", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING(32),
        allowNull: false
    }
}, {
    tableName: "USER",
    freezeTableName: true,
    timestamps: false,
});