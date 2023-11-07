const { Sequelize, DataTypes } = require("sequelize");
const db = require("../index");

module.exports = db.define("Topic", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    author: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: "User",
            key: "id"
        }
    },
    topic: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: "Topic",
            key: "id"
        }
    },
    postDate: {
        type: DataTypes.DATE,
        field: "POST_DATE",
        allowNull: false
    },
    content: {
        type: DataTypes.STRING(512),
        allowNull: false
    }
}, {
    tableName: "TOPIC",
    freezeTableName: true,
    timestamps: false,
});