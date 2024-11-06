const express = require("express");
const playersController = require("../controllers/footballPlayers");

const router = express.Router();

router.get("/players", playersController.getPlayers);
router.post("/players", playersController.createPlayer);
router.get("/players/:id", playersController.getPlayerById);
router.put("/players/:id", playersController.updatePlayer);
router.delete("/players/:id", playersController.deletePlayer);

module.exports = router;
