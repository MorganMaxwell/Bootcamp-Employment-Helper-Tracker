const router = require("express").Router();
const userRoutes = require("./users");
const jobRoutes = require("./jobs");
const postRoutes = require("./posts");

router.use("/user", userRoutes);
router.use("/job", jobRoutes);
router.use("/post", postRoutes);

module.exports = router;
