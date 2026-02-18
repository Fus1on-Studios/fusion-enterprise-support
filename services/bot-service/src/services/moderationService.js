const { moderateContent } = require('./aiService');
const ModerationCase = require('../database/schemas/ModerationCase');

async function handleModeration(message) {
  const result = await moderateContent(message.content);

  if (result.flagged) {
    await message.delete();

    await ModerationCase.create({
      userId: message.author.id,
      reason: "AI Auto Moderation",
      flagged: true
    });

    message.channel.send(`${message.author}, your message violated server rules.`);
  }
}

module.exports = { handleModeration };
