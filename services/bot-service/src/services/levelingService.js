const Level = require('../database/schemas/Level');

async function addXP(userId, guildId, amount) {
  let data = await Level.findOne({ userId, guildId });
  if (!data) data = await Level.create({ userId, guildId, xp: 0, level: 1 });

  data.xp += amount;

  const needed = data.level * 100;
  if (data.xp >= needed) {
    data.level++;
    data.xp = 0;
  }

  await data.save();
  return data;
}

module.exports = { addXP };
