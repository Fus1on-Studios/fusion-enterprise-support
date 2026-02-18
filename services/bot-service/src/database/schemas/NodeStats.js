const mongoose = require("mongoose");

const NodeStatsSchema = new mongoose.Schema({
  nodeId: String,
  cpu: Number,
  memoryUsed: Number,
  memoryTotal: Number,
  diskUsed: Number,
  diskTotal: Number,
  networkRx: Number,
  networkTx: Number,
  serversRunning: Number,
  uptime: Number,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("NodeStats", NodeStatsSchema);
