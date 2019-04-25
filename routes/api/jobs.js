// /api/job/

const router = require("express").Router();
const jobController = require("../../controllers/jobCtrl");

router.route("/")
    .get(jobController.findAll)
    .post(jobController.create);

router.route("/:id")
    .get(jobController.findById)
    .put(jobController.update)
    .delete(jobController.remove);

router.route("/levels")
    .get(jobController.findByLevel);    

module.exports = router;