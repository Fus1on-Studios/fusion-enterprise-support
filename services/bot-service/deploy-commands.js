require('dotenv').config();
const { REST, Routes } = require('discord.js');
const fs = require('fs');

const commands = [];
const folders = fs.readdirSync('./src/commands');

for (const folder of folders) {
  const files = fs.readdirSync(`./src/commands/${folder}`);
  for (const file of files) {
    const command = require(`./src/commands/${folder}/${file}`);
    commands.push(command.data.toJSON());
  }
}

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);

(async () => {
  await rest.put(
    Routes.applicationCommands(process.env.CLIENT_ID),
    { body: commands }
  );
  console.log('Slash commands deployed successfully.');
})();
