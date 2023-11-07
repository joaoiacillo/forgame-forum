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
    forum: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: "Forum",
            key: "id"
        }
    },
    postDate: {
        type: DataTypes.DATE,
        field: "POST_DATE",
        allowNull: false
    },
    title: {
        type: DataTypes.STRING(128),
        allowNull: false
    }
}, {
    tableName: "TOPIC",
    freezeTableName: true,
    timestamps: false,
});