const FootballPlayer = require("../models/FootballPlayer");

const getPlayers = async (req, res) => {
  const players = await FootballPlayer.find();
  res.json({
    players: players.map((player) => player.toObject({ getters: true })),
  });
};

const createPlayer = async (req, res) => {
  const { name, age, position } = req.body;
  const newPlayer = await FootballPlayer.create({ name, age, position });

  res.json({ player: newPlayer.toObject() });
};

const getPlayerById = async (req, res) => {
  const playerId = req.params.id;

  const player = await FootballPlayer.findById(playerId);
  if (!player) {
    return res.status(404).json({ message: "Player not found" });
  }

  res.json({ player: player.toObject() });
};

const updatePlayer = async (req, res) => {
  const { name, age, position } = req.body;
  const playerId = req.params.id;

  let player = await FootballPlayer.findById(playerId);
  if (!player) {
    return res.status(404).json({ message: "Player not found" });
  }

  player.name = name;
  player.age = age;
  player.position = position;

  try {
    await player.save();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.json({ player: player.toObject({ getters: true }) });
};

const deletePlayer = async (req, res) => {
  const playerId = req.params.id;

  let player = await FootballPlayer.findByIdAndDelete(playerId);
  if (!player) {
    return res.status(404).json({ message: "Player not found" });
  }

  res.json({ message: "Player deleted" });
};

exports.getPlayers = getPlayers;
exports.createPlayer = createPlayer;
exports.getPlayerById = getPlayerById;
exports.updatePlayer = updatePlayer;
exports.deletePlayer = deletePlayer;
