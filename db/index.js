const { Sequelize } = require("sequelize");
const createLogger = require("../utils/createLogger");

const logger = createLogger("DATABASE");

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        dialect: "mysql",
        host: process.env.DB_HOST
    }
);

sequelize.logger = logger;

module.exports = sequelize;
