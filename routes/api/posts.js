// /api/post/

const router = require("express").Router();
const postController = require("../../controllers/postCtrl");

router.route("/test/:page")
    // sends 10 posts
    .get(postController.findAll)
    .post(postController.create);

router.route("/:id")
    .get(postController.findById)
    .put(postController.update)
    .delete(postController.remove);

module.exports = router;