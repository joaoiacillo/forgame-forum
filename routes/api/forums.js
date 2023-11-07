const { Router } = require("express");
const ForumController = require("../../db/controllers/forum");

const router = Router();

router.get("/", async (req, res) => {
    const uuid = req.query.from || null;
    const forums = await ForumController.getForumsFrom(uuid);
    if (forums.length === 0) {
        return res.status(404).json({
            type: "/errors/unknown-forum-uuid",
            title: "There is no forum with the provided UUID.",
            status: 404,
            detail: "Try looking at the list of forums available first at /api/forums.",
            instance: req.originalUrl
        });
    }
    res.status(200).json(forums);
});

router.get("/:uuid", async (req, res) => {
    const forum = await ForumController.getByUuid(req.params.uuid);
    if (forum == null) {
        return res.status(404).json({
            type: "/errors/unknown-forum-uuid",
            title: "There is no forum with the provided UUID.",
            status: 404,
            detail: "Try looking at the list of forums available first at /api/forums.",
            instance: req.originalUrl
        });
    }
    res.status(200).json(forum);
});

module.exports = router;
