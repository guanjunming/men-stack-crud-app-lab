const FootballPlayer = require("../models/FootballPlayer");

const getPlayers = async (req, res) => {
  try {
    const players = await FootballPlayer.find();
    res.json(players);
  } catch (error) {
    console.error(error.message);
    res
      .status(400)
      .json({ status: "Error", message: "Error fetching players" });
  }
};

const createPlayer = async (req, res) => {
  try {
    const newPlayer = await FootballPlayer.create({
      name: req.body.name,
      age: req.body.age,
      position: req.body.position,
    });

    res.json({ status: "Ok", player: newPlayer });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "Error", message: "Error creating player" });
  }
};

const getPlayerById = async (req, res) => {
  try {
    const player = await FootballPlayer.findById(req.params.id);

    if (!player) {
      return res.status(404).json({ message: "Player not found" });
    }

    res.json({ status: "Ok", player: player });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({
      status: "Error",
      message: "Error getting player with id: " + req.params.id,
    });
  }
};

const updatePlayer = async (req, res) => {
  try {
    const player = await FootballPlayer.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        age: req.body.age,
        position: req.body.position,
      },
      { new: true }
    );

    if (!player) {
      return res.status(404).json({ message: "Player not found" });
    }

    res.json({ status: "Ok", player: player });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({
      status: "Error",
      message: "Error updating player with id: " + req.params.id,
    });
  }
};

const deletePlayer = async (req, res) => {
  try {
    const player = await FootballPlayer.findByIdAndDelete(req.params.id);

    if (!player) {
      return res.status(404).json({ message: "Player not found" });
    }

    res.json({ status: "Ok", message: "Player deleted" });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({
      status: "Error",
      message: "Error deleting player with id: " + req.params.id,
    });
  }
};

exports.getPlayers = getPlayers;
exports.createPlayer = createPlayer;
exports.getPlayerById = getPlayerById;
exports.updatePlayer = updatePlayer;
exports.deletePlayer = deletePlayer;
