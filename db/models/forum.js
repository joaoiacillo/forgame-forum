const { Sequelize, DataTypes } = require("sequelize");
const db = require("../index");

module.exports = db.define("Forum", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(128),
        allowNull: false
    },
    parentForum: {
        field: "PARENT_FORUM",
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: "Forum",
            key: "id"
        }
    }
}, {
    tableName: "FORUM",
    freezeTableName: true,
    timestamps: false,
});
