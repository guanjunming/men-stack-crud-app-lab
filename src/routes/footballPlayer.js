const express = require("express");

const playersControllers = require("../controllers/footballPlayers");

const router = express.Router();

router.get("/players", playersControllers.getPlayers);
router.post("/players", playersControllers.createPlayer);
router.get("/players/:id", playersControllers.getPlayerById);
router.put("/players/:id", playersControllers.updatePlayer);
router.delete("/players/:id", playersControllers.deletePlayer);

module.exports = router;
