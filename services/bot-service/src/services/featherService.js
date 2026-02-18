const axios = require("axios");
const redis = require("../database/redis");

const API = process.env.FEATHER_API_URL;
const KEY = process.env.FEATHER_API_KEY;

async function fetchNodeStats(nodeId) {
  const cacheKey = `node:${nodeId}`;

  const cached = await redis.get(cacheKey);
  if (cached) return JSON.parse(cached);

  const res = await axios.get(
    `${API}/api/application/nodes/${nodeId}`,
    {
      headers: {
        Authorization: `Bearer ${KEY}`,
        Accept: "Application/vnd.pterodactyl.v1+json"
      }
    }
  );

  const data = res.data.attributes;

  const stats = {
    nodeId,
    cpu: data.cpu_usage,
    memoryUsed: data.memory,
    memoryTotal: data.memory_overallocate,
    diskUsed: data.disk,
    diskTotal: data.disk_overallocate,
    serversRunning: data.allocated_resources?.servers || 0,
    uptime: data.uptime
  };

  await redis.set(cacheKey, JSON.stringify(stats), "EX", 10);

  return stats;
}

module.exports = { fetchNodeStats };
