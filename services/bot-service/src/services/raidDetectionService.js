const redis = require('../database/redis');

async function detectRaid(guildId) {
  const key = `joins:${guildId}`;
  const count = await redis.incr(key);
  await redis.expire(key, 10);

  if (count > 10) {
    return true;
  }
  return false;
}

module.exports = { detectRaid };
