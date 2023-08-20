const router = require('express').Router();
const controller = require('../controller/task.controller');
router
  .post("/", controller.create)
  .get("/", controller.getProducts)
  .patch("/:id", controller.validate)
  .delete("/:id", controller.error)
  .put("/:id", controller.error);

module.exports = router;


