import { Client, GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";
import { connectDB } from "../../shared/config/database.js";
import Ticket from "../../shared/models/Ticket.js";

dotenv.config();
connectDB();

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once("ready", () => {
  console.log(`Bot logged in as ${client.user.tag}`);
});

client.login(process.env.DISCORD_TOKEN);
