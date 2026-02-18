import { SlashCommandBuilder, PermissionFlagsBits } from "discord.js";
import GuildConfig from "../../../shared/models/GuildConfig.js";

export const data = new SlashCommandBuilder()
  .setName("disablewelcome")
  .setDescription("Disable the welcome system")
  .setDefaultMemberPermissions(PermissionFlagsBits.Administrator);

export async function execute(interaction) {
  await GuildConfig.findOneAndUpdate(
    { guildId: interaction.guild.id },
    { welcomeEnabled: false }
  );

  await interaction.reply({
    content: "🚫 Welcome system disabled.",
    ephemeral: true
  });
}
