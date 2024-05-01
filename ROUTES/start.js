const express = require("express");
const ScoresController = require("../controllers/UsersController");

const router = express.Router();

router.get("/scores", UsersController.index); // GET /cores
router.post("/scores", UsersController.store); // POST /scores
router.get("/scores/:id", UsersController.show);

module.exports = router;
