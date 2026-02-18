import { SlashCommandBuilder } from "discord.js";
import Verification from "../../../shared/models/Verification.js";

export const data = new SlashCommandBuilder()
  .setName("setup-verification")
  .setDescription("Setup verification system")
  .addChannelOption(o =>
    o.setName("channel").setDescription("Verification channel").setRequired(true)
  )
  .addRoleOption(o =>
    o.setName("role").setDescription("Verified role").setRequired(true)
  );

export async function execute(interaction) {
  const channel = interaction.options.getChannel("channel");
  const role = interaction.options.getRole("role");

  await Verification.findOneAndUpdate(
    { guildId: interaction.guild.id },
    {
      verificationChannelId: channel.id,
      verifiedRoleId: role.id,
      enabled: true
    },
    { upsert: true }
  );

  if (interaction.customId === "verify_button") {
    const config = await Verification.findOne({ guildId: interaction.guild.id });
    await interaction.member.roles.add(config.verifiedRoleId);
    await interaction.reply({ content: "You are now verified!", ephemeral: true });
  }

  await interaction.reply("✅ Verification system enabled.");
}
