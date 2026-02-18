import { SlashCommandBuilder, PermissionFlagsBits } from "discord.js";
import GuildConfig from "../../../shared/models/GuildConfig.js";

export const data = new SlashCommandBuilder()
  .setName("setwelcome")
  .setDescription("Configure the welcome system")
  .addChannelOption(option =>
    option
      .setName("channel")
      .setDescription("Channel to send welcome messages")
      .setRequired(true)
  )
  .addStringOption(option =>
    option
      .setName("message")
      .setDescription("Welcome message (use {user} and {server})")
      .setRequired(true)
  )
  .setDefaultMemberPermissions(PermissionFlagsBits.Administrator);

export async function execute(interaction) {
  const channel = interaction.options.getChannel("channel");
  const message = interaction.options.getString("message");

  await GuildConfig.findOneAndUpdate(
    { guildId: interaction.guild.id },
    {
      welcomeChannelId: channel.id,
      welcomeMessage: message,
      welcomeEnabled: true
    },
    { upsert: true }
  );

  await interaction.reply({
    content: "✅ Welcome system configured successfully!",
    ephemeral: true
  });
}
