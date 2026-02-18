
require('dotenv').config();
const { Client, GatewayIntentBits, Partials } = require('discord.js');
const { connectMongo } = require('./database/mongo');
const { connectRedis } = require('./database/redis');
const fs = require('fs');
const path = require('path');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessageReactions
  ],
  partials: [Partials.Channel]
});

connectMongo();
connectRedis();

client.commands = new Map();

// Load Commands
const commandFolders = fs.readdirSync('./src/commands');
for (const folder of commandFolders) {
  const files = fs.readdirSync(`./src/commands/${folder}`);
  for (const file of files) {
    const command = require(`./commands/${folder}/${file}`);
    client.commands.set(command.data.name, command);
  }
}

// Load Events
const eventFiles = fs.readdirSync('./src/events');
for (const file of eventFiles) {
  const event = require(`./events/${file}`);
  client.on(event.name, (...args) => event.execute(...args, client));
}

client.login(process.env.DISCORD_TOKEN);
