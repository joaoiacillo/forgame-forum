const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
    res.status(403).json({
        err: {
            type: "/errors/api-index-get",
            title: "Route acesss error.",
            status: 403,
            detail: "It isn't possible to access the API index route.",
            instance: req.originalUrl
        }
    });
});

router.use("/users", require("./users"));
router.use("/forums", require("./forums"));

module.exports = router;
