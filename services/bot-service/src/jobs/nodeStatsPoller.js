const { fetchNodeStats } = require("../services/featherService");
const NodeStats = require("../database/schemas/NodeStats");

const NODES = process.env.FEATHER_NODE_IDS.split(",");

async function pollNodes(io) {
  for (const nodeId of NODES) {
    const stats = await fetchNodeStats(nodeId);

    await NodeStats.create(stats);

    if (io) {
      io.emit("nodeStatsUpdate", stats);
    }

    if (stats.cpu > 85) {
      console.warn(`⚠ High CPU on node ${nodeId}`);
    }
  }
}

module.exports = { pollNodes };
