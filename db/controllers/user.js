const User = require("../models/user");

async function getAll() {
    const users = await User.findAll();
    return users;
}

async function getByUuid(uuid) {
    const users = await User.findByPk(uuid);
    return users;
}

module.exports = { getAll, getByUuid };
