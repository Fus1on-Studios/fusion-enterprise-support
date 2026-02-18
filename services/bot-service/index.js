import { Client, GatewayIntentBits, Collection } from "discord.js";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import { connectDB } from "../../shared/config/database.js";

dotenv.config();
connectDB();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers
  ]
});

client.commands = new Collection();

const eventsPath = path.join("./events");
const eventFiles = fs.readdirSync(eventsPath);

for (const file of eventFiles) {
  const event = (await import(`./events/${file}`)).default;
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args));
  } else {
    client.on(event.name, (...args) => event.execute(...args));
  }
}

client.once("ready", () => {
  console.log(`Bot ready: ${client.user.tag}`);
});

client.login(process.env.DISCORD_TOKEN);
