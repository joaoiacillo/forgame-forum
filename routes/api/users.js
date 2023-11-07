const { Router } = require("express");
const UserController = require("../../db/controllers/user");

const router = Router();

router.get("/", async (req, res) => {
    const users = await UserController.getAll();
    res.status(200).json(users);
});

router.get("/:uuid", async (req, res) => {
    const user = await UserController.getByUuid(req.params.uuid);
    res.status(200).json(user);
});

module.exports = router;
