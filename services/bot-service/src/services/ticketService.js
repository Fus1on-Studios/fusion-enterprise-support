const Ticket = require('../database/schemas/Ticket');
const { classifyTicket } = require('./aiService');

async function createTicket(user, guild, content) {
  const classification = await classifyTicket(content);

  const priority = classification.includes("High") ? "High" :
                   classification.includes("Medium") ? "Medium" : "Low";

  const sla = priority === "High" ? 15 : priority === "Medium" ? 60 : 180;

  return await Ticket.create({
    userId: user.id,
    guildId: guild.id,
    content,
    priority,
    slaDeadline: Date.now() + sla * 60000
  });
}

module.exports = { createTicket };
