const Forum = require("../models/forum");

async function getForumsFrom(uuid=null) {
    return await Forum.findAll({    
        where: {
            parentForum: uuid
        }
    });
}

async function getByUuid(uuid) {
    return await Forum.findByPk(uuid);
}

module.exports = { getForumsFrom, getByUuid };
